/**
 * Python Agent Client
 * Handles communication with Python backend for AI agent execution
 * Supports async task creation and long polling for progress updates
 */

export interface AgentRequest {
  prompt: string;
  businessUnit: string;
  lineOfBusiness: string;
  suggestedAgentType?: string;
  sessionId?: string;
  context?: {
    conversationHistory?: Array<{ role: string; content: string }>;
    userPreferences?: any;
  };
}

export interface AgentTaskResponse {
  success: boolean;
  task_id: string;
  estimated_duration: string;
  message: string;
}

export interface BackendWorkflowStep {
  step_number: number;
  agent_name: string;
  agent_type: string;
  status: string;
  start_time: string;
  end_time: string;
  duration_ms: number;
  output_summary: string;
}

export interface TaskStatusResponse {
  task_id: string;
  status: 'pending' | 'running' | 'completed' | 'error';
  progress: string;
  current_agent: string | null;
  percentage: number;
  result?: {
    response: string;
    session_id: string;
    agent_type: string;
    workflow_steps: BackendWorkflowStep[];
    execution_time: number;
    metadata?: any;
  };
  error_message?: string;
  error_code?: string;
}

/**
 * Custom error class for Python backend errors
 */
export class PythonBackendError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public errorCode?: string
  ) {
    super(message);
    this.name = 'PythonBackendError';
  }
}

/**
 * Custom error class for task timeout
 */
export class TaskTimeoutError extends Error {
  constructor(public taskId: string) {
    super(`Task ${taskId} timed out after 4 minutes`);
    this.name = 'TaskTimeoutError';
  }
}

/**
 * Python Agent Client
 * Main client for interacting with Python backend
 */
export class PythonAgentClient {
  private baseUrl: string;
  private pollingInterval: number;
  private maxPollingAttempts: number;
  private requestTimeout: number;

  constructor() {
    // Get base URL from environment variable or use default
    this.baseUrl =
      process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL || 'http://localhost:8000';
    this.pollingInterval = 2000; // 2 seconds
    this.maxPollingAttempts = 120; // 4 minutes total (120 * 2s)
    this.requestTimeout = 30000; // 30 seconds per request
  }

  /**
   * Execute agent request (creates task and returns task_id)
   */
  async executeAgent(request: AgentRequest): Promise<AgentTaskResponse> {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), this.requestTimeout);

      const response = await fetch(`${this.baseUrl}/api/agent/execute`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: request.prompt,
          business_unit: request.businessUnit,
          line_of_business: request.lineOfBusiness,
          suggested_agent_type: request.suggestedAgentType,
          session_id: request.sessionId,
          context: request.context,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        if (response.status === 400) {
          throw new PythonBackendError(
            errorData.detail || 'Invalid request data',
            400,
            'VALIDATION_ERROR'
          );
        }

        if (response.status === 503) {
          throw new PythonBackendError(
            'System is overloaded. Please try again in a moment.',
            503,
            'SYSTEM_OVERLOADED'
          );
        }

        throw new PythonBackendError(
          errorData.detail || 'Failed to create task',
          response.status,
          'UNKNOWN_ERROR'
        );
      }

      const data: AgentTaskResponse = await response.json();
      return data;
    } catch (error: any) {
      if (error.name === 'AbortError') {
        throw new PythonBackendError(
          'Request timeout - please try again',
          0,
          'TIMEOUT'
        );
      }

      if (error instanceof PythonBackendError) {
        throw error;
      }

      // Network or connection error
      throw new PythonBackendError(
        'Cannot connect to AI service. Please ensure the Python backend is running on port 8000.',
        0,
        'CONNECTION_ERROR'
      );
    }
  }

  /**
   * Poll task status (single request)
   */
  async pollTaskStatus(taskId: string): Promise<TaskStatusResponse | null> {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), this.requestTimeout);

      const response = await fetch(
        `${this.baseUrl}/api/agent/status/${taskId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: controller.signal,
        }
      );

      clearTimeout(timeout);

      if (response.status === 404) {
        // Task not found (expired or invalid)
        return null;
      }

      if (!response.ok) {
        throw new PythonBackendError(
          'Failed to retrieve task status',
          response.status,
          'STATUS_ERROR'
        );
      }

      const data: TaskStatusResponse = await response.json();
      return data;
    } catch (error: any) {
      if (error.name === 'AbortError') {
        throw new PythonBackendError(
          'Status check timeout',
          0,
          'TIMEOUT'
        );
      }

      if (error instanceof PythonBackendError) {
        throw error;
      }

      // Network error - throw to be handled by caller
      throw new PythonBackendError(
        'Network error while checking status',
        0,
        'NETWORK_ERROR'
      );
    }
  }

  /**
   * Poll until task completes (with progress updates)
   */
  async pollUntilComplete(
    taskId: string,
    onProgress: (status: TaskStatusResponse) => void
  ): Promise<TaskStatusResponse> {
    let attempts = 0;
    let consecutiveErrors = 0;

    while (attempts < this.maxPollingAttempts) {
      attempts++;

      try {
        const status = await this.pollTaskStatus(taskId);

        if (!status) {
          throw new PythonBackendError(
            'Task not found or expired',
            404,
            'TASK_NOT_FOUND'
          );
        }

        // Reset consecutive error counter on success
        consecutiveErrors = 0;

        // Call progress callback
        onProgress(status);

        // Check if task is complete
        if (status.status === 'completed' || status.status === 'error') {
          return status;
        }

        // Wait before next poll
        await new Promise((resolve) => setTimeout(resolve, this.pollingInterval));
      } catch (error) {
        consecutiveErrors++;

        // If too many consecutive errors, throw
        if (consecutiveErrors >= 5) {
          throw error;
        }

        // Log error but continue polling (transient network issue)
        console.warn(`Polling attempt ${attempts} failed:`, error);

        // Wait before retry
        await new Promise((resolve) => setTimeout(resolve, this.pollingInterval));
      }
    }

    // Timeout reached
    throw new TaskTimeoutError(taskId);
  }

  /**
   * Get session context (for debugging/admin)
   */
  async getSessionContext(sessionId: string): Promise<any> {
    try {
      const response = await fetch(
        `${this.baseUrl}/api/agent/context/${sessionId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 404) {
        return null;
      }

      if (!response.ok) {
        throw new Error('Failed to retrieve session context');
      }

      return await response.json();
    } catch (error) {
      console.error('Error retrieving session context:', error);
      return null;
    }
  }

  /**
   * Health check
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/health`, {
        method: 'GET',
      });

      return response.ok;
    } catch (error) {
      return false;
    }
  }

  /**
   * Store LOB data in Redis
   */
  async storeLOBData(
    businessUnit: string,
    lineOfBusiness: string,
    lobData: any,
    metadata?: any
  ): Promise<{ success: boolean; lob_id: string; message: string }> {
    try {
      // Validate inputs
      if (!businessUnit || businessUnit.trim() === '') {
        throw new PythonBackendError(
          'Business unit cannot be empty',
          400,
          'VALIDATION_ERROR'
        );
      }

      if (!lineOfBusiness || lineOfBusiness.trim() === '') {
        throw new PythonBackendError(
          'Line of business cannot be empty',
          400,
          'VALIDATION_ERROR'
        );
      }

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), this.requestTimeout);

      const response = await fetch(`${this.baseUrl}/api/lob/store`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          business_unit: businessUnit,
          line_of_business: lineOfBusiness,
          data: lobData,
          metadata: metadata,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        if (response.status === 400) {
          throw new PythonBackendError(
            errorData.detail || 'Invalid LOB data',
            400,
            'VALIDATION_ERROR'
          );
        }

        if (response.status === 503) {
          throw new PythonBackendError(
            'Failed to store LOB data in Redis',
            503,
            'STORAGE_ERROR'
          );
        }

        throw new PythonBackendError(
          errorData.detail || 'Failed to store LOB data',
          response.status,
          'UNKNOWN_ERROR'
        );
      }

      const data = await response.json();
      return {
        success: data.success,
        lob_id: data.lob_id,
        message: data.message,
      };
    } catch (error: any) {
      if (error.name === 'AbortError') {
        throw new PythonBackendError(
          'Request timeout - please try again',
          0,
          'TIMEOUT'
        );
      }

      if (error instanceof PythonBackendError) {
        throw error;
      }

      // Network or connection error
      console.error('Failed to store LOB data:', error);
      throw new PythonBackendError(
        'Cannot connect to AI service for LOB storage',
        0,
        'CONNECTION_ERROR'
      );
    }
  }
}

// Singleton instance
let clientInstance: PythonAgentClient | null = null;

export function getPythonAgentClient(): PythonAgentClient {
  if (!clientInstance) {
    clientInstance = new PythonAgentClient();
  }
  return clientInstance;
}
