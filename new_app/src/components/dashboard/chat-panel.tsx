'use client';

import React, { FormEvent, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Bot, Paperclip, Send, User, BarChart, CheckCircle, FileText } from 'lucide-react';
import { useApp } from './app-provider';
import type { ChatMessage, WeeklyData, WorkflowStep, OutlierData, ForecastData } from '@/lib/types';
import { cn } from '@/lib/utils';
import AgentMonitorPanel from './agent-monitor';
import DataVisualizer from './data-visualizer';

// Import Python backend client instead of OpenAI
import { getPythonAgentClient, PythonBackendError, TaskTimeoutError } from '@/lib/python-agent-client';

type AgentConfig = {
  name: string;
  emoji: string;
  specialty: string;
  keywords: string[];
  systemPrompt: string;
};

export const AGENTS: Record<string, AgentConfig> = {
    eda: {
      name: "EDA Agent",
      emoji: "🔬",
      specialty: "Data Explorer",
      keywords: ['explore', 'eda', 'analyze', 'distribution', 'pattern', 'correlation', 'outlier', 'statistics', 'summary', 'data quality'],
      systemPrompt: `You are a friendly data explorer who helps customers understand their data.

YOUR COMMUNICATION STYLE:
- Talk like you're explaining to a business owner, not a data scientist
- Use everyday language - no technical jargon
- Keep it short and sweet - 3-5 bullet points max
- Show what the data means for their business
- Always end with "What would you like to do next?"

WHAT TO INCLUDE:
✓ Statistical summary (records, mean/median, range, trend, seasonality)
✓ Key patterns you noticed
✓ Simple next step suggestions

DO NOT mention outliers unless the user asks about outliers, anomalies, or a quality check.

Example response:
"📊 **Your Data at a Glance**
• You have 2,500 records - that's plenty to work with
• Sales are trending upward by about 15%
• There's a clear weekly pattern - weekends are slower
• Data quality looks good - 99% complete

**What This Means:** Your business is growing steadily with predictable patterns.

**What would you like to do next?**"`
    },
  
    forecasting: {
      name: "Forecasting Agent",
      emoji: "📈",
      specialty: "Future Predictor",
      keywords: ['forecast', 'predict', 'future', 'projection', 'trend', 'time series', 'arima', 'prophet', 'prediction'],
      systemPrompt: `You help customers see what's coming next for their business.

YOUR COMMUNICATION STYLE:
- Explain forecasts like you're talking to a friend who runs a business
- Use simple numbers and percentages - avoid formulas
- Focus on what they should DO with this information
- Be confident but honest about uncertainty

WHAT TO INCLUDE:
✓ The forecast (clear numbers)
✓ How confident we are (High/Medium/Low)
✓ What's driving the forecast
✓ What they should prepare for

Example response:
"📈 **Your 30-Day Forecast**
• Expected sales: $125,000 (±8%)
• That's a 12% increase from last month
• The upward trend should continue
• Confidence level: High

**What This Means:** Plan for increased inventory and staff for next month.

**What would you like to do next?**"`
    },
  
    whatif: {
      name: "What-If Agent",
      emoji: "🎯",
      specialty: "Scenario Planner",
      keywords: ['what if', 'scenario', 'simulate', 'impact', 'sensitivity', 'assumption', 'compare scenarios', 'outcome'],
      systemPrompt: `You help customers explore "what if" scenarios for their business decisions.

YOUR COMMUNICATION STYLE:
- Make scenarios easy to compare side-by-side
- Use real numbers that matter to the business
- Show best case, worst case, and most likely
- Help them make confident decisions

WHAT TO INCLUDE:
✓ The scenario comparison (clear differences)
✓ Impact in dollars or percentages
✓ Which scenario you'd recommend and why
✓ What could go wrong

Example response:
"🎯 **Scenario Comparison**

**If you increase prices by 10%:**
• Revenue: +$45K per month
• Customer loss: ~5%
• Net gain: +$38K

**If you keep current prices:**
• Revenue: Stable at $350K
• Customer retention: High
• Growth: Slower

**My Recommendation:** Try the price increase - the numbers show strong upside with manageable risk.

**What would you like to do next?**"`
    },
  
    comparative: {
      name: "Comparative Agent",
      emoji: "⚖️",
      specialty: "Performance Comparer",
      keywords: ['compare', 'comparison', 'benchmark', 'versus', 'vs', 'difference', 'performance gap', 'relative'],
      systemPrompt: `You help customers understand how different parts of their business stack up.

YOUR COMMUNICATION STYLE:
- Show clear winners and opportunities
- Use rankings and percentages
- Highlight the biggest gaps
- Suggest how to improve weaker areas

WHAT TO INCLUDE:
✓ Who's performing best (and by how much)
✓ Notable differences
✓ Why the gap exists
✓ How to close the gap

Example response:
"⚖️ **Performance Comparison**

**Top Performer:** Product Line A
• Sales: $450K (35% above average)
• Growth: +22% this quarter

**Needs Attention:** Product Line C
• Sales: $180K (40% below average)
• Growth: Flat

**The Gap:** Product A has better marketing and seasonal timing. Product C needs a refresh.

**Quick Win:** Apply Product A's marketing strategy to Product C.

**What would you like to do next?**"`
    },
  
    general: {
      name: "General Assistant",
      emoji: "🤖",
      specialty: "Your Business Assistant",
      keywords: [],
      systemPrompt: `You're a helpful business assistant who keeps things simple and actionable.

YOUR COMMUNICATION STYLE:
- Be friendly and helpful
- Get straight to the point
- Offer clear choices
- No unnecessary words

WHAT TO DO:
✓ Answer questions directly
✓ Offer 2-3 specific next steps
✓ Guide them to useful features
✓ Keep it conversational

Example response:
"I can help you with that! Here's what you can do:

• **Upload your data** - I'll analyze it for insights
• **Run a forecast** - See what's coming next month
• **Compare performance** - Find your top performers

What sounds most useful to you?"`
    }
};

// Helper function to map frontend agent types to backend agent types
function mapAgentTypeToBackend(frontendAgentType: string): string {
  const agentMapping: Record<string, string> = {
    'eda': 'Data Analysis',
    'forecasting': 'Forecasting',
    'whatif': 'What If & Scenario Analyst',
    'comparative': 'Data Analysis',
    'general': 'Onboarding'
  };
  return agentMapping[frontendAgentType] || 'Data Analysis';
}

// Helper function to extract outliers from EDA response
function extractOutliersFromResponse(responseText: string, data?: WeeklyData[]): OutlierData[] {
  const outliers: OutlierData[] = [];
  
  if (!data || data.length === 0) return outliers;
  
  // Look for outlier mentions in the response
  // Pattern 1: "X outliers found" or "X unusual values"
  const outlierCountMatch = responseText.match(/\b(\d+)\s+(?:outliers?|unusual values?)/i);
  
  if (outlierCountMatch) {
    const count = parseInt(outlierCountMatch[1]);
    
    // If outliers are mentioned, identify them from the data
    // Use statistical method: values beyond 2 standard deviations
    const values = data.map(d => d.Value);
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const stdDev = Math.sqrt(
      values.reduce((sq, n) => sq + Math.pow(n - mean, 2), 0) / values.length
    );
    
    data.forEach((point, index) => {
      const zScore = Math.abs((point.Value - mean) / stdDev);
      if (zScore > 2) {
        const severity: 'high' | 'medium' | 'low' = 
          zScore > 3 ? 'high' : zScore > 2.5 ? 'medium' : 'low';
        
        outliers.push({
          index,
          value: point.Value,
          date: point.Date,
          reason: `Value is ${zScore.toFixed(1)} standard deviations ${point.Value > mean ? 'above' : 'below'} mean`,
          severity
        });
      }
    });
    
    // Limit to the count mentioned in response
    return outliers.slice(0, count);
  }
  
  return outliers;
}

// Helper function to extract forecast data from forecasting response
function extractForecastDataFromResponse(responseText: string, data?: WeeklyData[]): ForecastData[] {
  const forecastData: ForecastData[] = [];
  
  if (!data || data.length === 0) return forecastData;
  
  // Check if data already contains forecast information
  const dataWithForecast = data.filter(d => d.Forecast !== undefined);
  
  if (dataWithForecast.length > 0) {
    // Extract forecast data from the WeeklyData
    dataWithForecast.forEach(point => {
      if (point.Forecast !== undefined) {
        forecastData.push({
          date: point.Date,
          forecast: point.Forecast,
          lower: point.ForecastLower ?? point.Forecast * 0.9, // Default to 10% below if not available
          upper: point.ForecastUpper ?? point.Forecast * 1.1, // Default to 10% above if not available
          confidence: 0.95 // Default confidence level
        });
      }
    });
  } else {
    // Look for forecast period mention in response
    const forecastPeriodMatch = responseText.match(/(\d+)[-\s]?(?:day|week|month)/i);
    
    if (forecastPeriodMatch) {
      const period = parseInt(forecastPeriodMatch[1]);
      
      // Generate simple forecast based on trend (for demonstration)
      // In production, this would come from the backend
      const values = data.map(d => d.Value);
      const lastValue = values[values.length - 1];
      const avgGrowth = values.length > 1 
        ? (values[values.length - 1] - values[0]) / values.length 
        : 0;
      
      const lastDate = new Date(data[data.length - 1].Date);
      
      for (let i = 1; i <= Math.min(period, 30); i++) {
        const forecastDate = new Date(lastDate);
        forecastDate.setDate(forecastDate.getDate() + i * 7); // Weekly forecast
        
        const forecastValue = lastValue + (avgGrowth * i);
        const margin = forecastValue * 0.1; // 10% confidence interval
        
        forecastData.push({
          date: forecastDate,
          forecast: forecastValue,
          lower: forecastValue - margin,
          upper: forecastValue + margin,
          confidence: 0.95
        });
      }
    }
  }
  
  return forecastData;
}

// Enhanced Chat Bubble Component
function ChatBubble({
  message,
  onSuggestionClick,
  onVisualizeClick,
  onViewInsightsClick,
  onGenerateReport,
  thinkingSteps
}: {
  message: ChatMessage;
  onSuggestionClick: (suggestion: string) => void;
  onVisualizeClick: (messageId: string) => void;
  onViewInsightsClick: (messageId: string) => void;
  onGenerateReport?: (messageId: string) => void;
  thinkingSteps: string[];
}) {
  const isUser = message.role === 'user';
  const agentInfo = message.agentType ? AGENTS[message.agentType as keyof typeof AGENTS] : null;

  return (
    <div className={cn('flex items-start gap-3 w-full', isUser ? 'justify-end' : 'justify-start')}>
      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            {agentInfo?.emoji || <Bot />}
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn("max-w-prose", isUser ? "order-1" : "")}>
        {/* Agent Badge */}
        {!isUser && agentInfo && agentInfo.name !== 'General Assistant' && (
          <div className="mb-1.5 text-xs text-muted-foreground flex items-center gap-1.5">
            <span className="font-medium">{agentInfo.name}</span>
            <span className="opacity-60">• {agentInfo.specialty}</span>
          </div>
        )}
        
        <div className={cn(
          'max-w-prose rounded-lg p-3 text-sm prose prose-sm prose-p:my-2 first:prose-p:mt-0 last:prose-p:mb-0 prose-headings:my-2 prose-strong:text-current',
          isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'
        )}>
          {message.isTyping ? (
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                {[0, 0.2, 0.4].map((delay, i) => (
                  <span 
                    key={i}
                    className="h-2 w-2 animate-pulse rounded-full bg-current" 
                    style={{ animationDelay: `${delay}s` }} 
                  />
                ))}
              </div>
              
              {/* ENHANCED THINKING STEPS */}
              {thinkingSteps.length > 0 && (
                <div className="mt-3 space-y-2">
                  {thinkingSteps.map((step, i) => {
                    const isActive = i === thinkingSteps.length - 1;
                    return (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 animate-in slide-in-from-left duration-300"
                        style={{ 
                          animationDelay: `${i * 100}ms`,
                          opacity: isActive ? 1 : 0.5
                        }}
                      >
                        {isActive ? (
                          <div className="h-3.5 w-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
                        ) : (
                          <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                        )}
                        <span className={cn(
                          "text-xs transition-all duration-300",
                          isActive ? "text-current font-medium" : "text-muted-foreground/60"
                        )}>
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ 
              __html: message.content
                .replace(/\[WORKFLOW_PLAN\][\s\S]*?\[\/WORKFLOW_PLAN\]/, '')
                .replace(/\[REPORT_DATA\][\s\S]*?\[\/REPORT_DATA\]/, '')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br />') 
            }} />
          )}
        </div>
        
        {message.visualization?.isShowing && message.visualization.data && (
          <div className="mt-2">
            <DataVisualizer 
              data={message.visualization.data} 
              target={message.visualization.target as 'Value' | 'Orders'}
              isRealData={true}
              showOutliers={message.visualization.showOutliers}
            />
          </div>
        )}
        
        {/* Suggested actions below each response */}
        {message.suggestions && message.suggestions.length > 0 && (
          <div className="mt-2 bg-muted/10 dark:bg-muted-dark/10 p-2 rounded">
            <div className="text-sm font-medium mb-1 text-muted-foreground">Suggested Actions:</div>
            <div className="flex flex-wrap gap-2">
              {message.suggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  onClick={() => onSuggestionClick(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        )}
        {/* Other utilities */}
        {(message.visualization && !message.visualization.isShowing) && (
          <div className="mt-2 flex flex-wrap gap-2">
            <Button size="sm" variant="outline" onClick={() => onVisualizeClick(message.id)}>
              <BarChart className="mr-2 h-4 w-4 text-foreground" />
              {message.visualization.data.some((d: any) => d.Forecast !== undefined)
                ? 'Visualize Actual & Forecast'
                : message.visualization.showOutliers
                ? 'Visualize Data with Outliers'
                : 'Visualize Data'}
            </Button>
            {message.visualization.data.some((d: any) => d.Forecast !== undefined) && (
              <Button size="sm" variant="outline" onClick={() => onViewInsightsClick(message.id)}>
                View Insights
              </Button>
            )}
          </div>
        )}
        {message.canGenerateReport && onGenerateReport && (
          <div className="mt-2 flex flex-wrap gap-2">
            <Button size="sm" variant="default" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700" onClick={() => onGenerateReport(message.id)}>
              <FileText className="mr-2 h-4 w-4 text-foreground" />
              Generate Report
            </Button>
          </div>
        )}
      </div>
      
      {isUser && (
        <Avatar className="h-8 w-8">
          <AvatarFallback><User /></AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

// Main ChatPanel Component
export default function ChatPanel({ className }: { className?: string }) {
  const { state, dispatch } = useApp();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    const scrollElement = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
    if (scrollElement) {
      scrollElement.scrollTo({ top: scrollElement.scrollHeight, behavior: 'smooth' });
    }
  }, [state.messages]);

  // Handle queued prompts on mount
  useEffect(() => {
    if (state.queuedUserPrompt && !state.isProcessing) {
      submitMessage(state.queuedUserPrompt);
      dispatch({ type: 'CLEAR_QUEUED_PROMPT' });
    }
  }, [state.queuedUserPrompt]);

  // File upload handler
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (state.selectedLob) {
      dispatch({ type: 'UPLOAD_DATA', payload: { lobId: state.selectedLob.id, file } });
    } else {
      dispatch({
        type: 'ADD_MESSAGE',
        payload: {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: 'Please select a Line of Business before uploading data.',
          agentType: 'general'
        }
      });
    }
  };

  // Submit message handler
  const submitMessage = async (messageText: string) => {
    if (!messageText.trim()) return;
    
    // Prevent duplicate submissions
    if (state.isProcessing) {
      console.warn('Request already in progress, ignoring duplicate submission');
      return;
    }
    
    // Check if BU and LOB are selected
    if (!state.selectedBu || !state.selectedLob) {
      dispatch({
        type: 'ADD_MESSAGE',
        payload: {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: '⚠️ Please select a Business Unit and Line of Business before asking questions.',
          agentType: 'general',
          suggestions: ['Create Business Unit', 'Create Line of Business']
        }
      });
      return;
    }
    
    dispatch({ type: 'SET_PROCESSING', payload: true });
    dispatch({ type: 'CLEAR_THINKING_STEPS' });

    // Add user message
    dispatch({ 
      type: 'ADD_MESSAGE', 
      payload: {
        id: crypto.randomUUID(),
        role: 'user',
        content: messageText,
      }
    });

    // Add typing indicator
    dispatch({ 
      type: 'ADD_MESSAGE', 
      payload: {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: '',
        isTyping: true,
      }
    });

    try {
      // Detect suggested agent type from message (optional - backend will analyze too)
      const messageLower = messageText.toLowerCase();
      let suggestedAgentType: string | undefined;
      
      for (const [agentKey, agent] of Object.entries(AGENTS)) {
        if (agentKey === 'general') continue;
        for (const keyword of agent.keywords) {
          if (messageLower.includes(keyword)) {
            suggestedAgentType = mapAgentTypeToBackend(agentKey);
            break;
          }
        }
        if (suggestedAgentType) break;
      }

      // Get Python backend client
      const pythonClient = getPythonAgentClient();

      // Add thinking step
      dispatch({ type: 'ADD_THINKING_STEP', payload: '🚀 Connecting to Python backend...' });

      // Create task on backend
      const taskResponse = await pythonClient.executeAgent({
        prompt: messageText,
        businessUnit: state.selectedBu.displayName || state.selectedBu.name,
        lineOfBusiness: state.selectedLob.name,
        suggestedAgentType,
        sessionId: state.sessionId || undefined,
        context: {
          conversationHistory: state.messages
            .filter(m => m.role === 'user' || m.role === 'assistant')
            .slice(-10) // Last 10 messages
            .map(m => ({ role: m.role, content: m.content }))
        }
      });

      dispatch({ type: 'ADD_THINKING_STEP', payload: `✅ Task created: ${taskResponse.task_id}` });
      dispatch({ type: 'ADD_THINKING_STEP', payload: '⏳ Waiting for agent response...' });

      // Poll for task completion with progress updates
      const finalStatus = await pythonClient.pollUntilComplete(
        taskResponse.task_id,
        (status) => {
          // Update thinking steps based on progress
          if (status.status === 'running' && status.progress) {
            dispatch({ type: 'ADD_THINKING_STEP', payload: `${status.current_agent ? status.current_agent + ': ' : ''}${status.progress}` });
          }
          
          // Update workflow steps if available
          if (status.result?.workflow_steps) {
            const workflowSteps: WorkflowStep[] = status.result.workflow_steps.map((step, index) => ({
              id: `step-${index + 1}`,
              name: step.agent_name,
              status: step.status === 'completed' ? 'completed' : step.status === 'error' ? 'error' : 'active',
              dependencies: index > 0 ? [`step-${index}`] : [],
              estimatedTime: `${step.duration_ms}ms`,
              details: step.output_summary,
              agent: step.agent_type
            }));
            dispatch({ type: 'SET_WORKFLOW', payload: workflowSteps });
          }
        }
      );

      dispatch({ type: 'CLEAR_THINKING_STEPS' });
      dispatch({ type: 'SET_PROCESSING', payload: false });

      // Handle response based on status
      if (finalStatus.status === 'completed' && finalStatus.result) {
        const result = finalStatus.result;
        const responseText = result.response;
        const agentType = result.agent_type;

        // Map backend agent type to frontend agent type for UI
        const backendToFrontendAgent: Record<string, string> = {
          'Data Analysis': 'eda',
          'Forecasting': 'forecasting',
          'Short Term Forecasting': 'forecasting',
          'Long Term Forecasting': 'forecasting',
          'What If & Scenario Analyst': 'whatif',
          'Onboarding': 'general'
        };
        const frontendAgentType = backendToFrontendAgent[agentType] || 'general';

        // Generate suggestions based on agent type
        let suggestions: string[] = [];
        if (frontendAgentType === 'eda') {
          suggestions = [
            "Generate a forecast for the next 30 days",
            "Check for outliers",
            "Explore data patterns"
          ];
        } else if (frontendAgentType === 'forecasting') {
          suggestions = [
            "View forecast results",
            "Download forecast report",
            "Try a different forecast period"
          ];
        } else {
          suggestions = [
            "Explore your data",
            "Generate a forecast",
            "Download a report"
          ];
        }

        // Auto-detect visualization needs
        const shouldVisualize = state.selectedLob?.hasData && state.selectedLob?.timeSeriesData &&
          (/(visuali[sz]e|chart|plot|graph|trend|distribution)/i.test(messageText + responseText) ||
           (frontendAgentType === 'eda' && /pattern|trend|seasonality/i.test(responseText)));

        let visualization: { data: WeeklyData[]; target: "Value" | "Orders"; isShowing: boolean; showOutliers?: boolean } | undefined;
        if (shouldVisualize) {
          const isRevenue = /(revenue|sales|amount|gmv|income)/i.test(messageText + responseText);
          const wantsOutliers = /(outlier|anomal|quality\s*check)/i.test(messageText);
          visualization = {
            data: state.selectedLob!.timeSeriesData!,
            target: isRevenue ? 'Value' : 'Orders',
            isShowing: false,
            showOutliers: wantsOutliers
          };
        }

        // Track analysis completion
        if (frontendAgentType === 'eda') {
          const outliers = extractOutliersFromResponse(responseText, state.selectedLob?.timeSeriesData);
          dispatch({ 
            type: 'SET_ANALYZED_DATA', 
            payload: { 
              hasEDA: true, 
              lastAnalysisType: 'eda',
              outliers: outliers
            } 
          });
        } else if (frontendAgentType === 'forecasting') {
          const forecastData = extractForecastDataFromResponse(responseText, state.selectedLob?.timeSeriesData);
          dispatch({ 
            type: 'SET_ANALYZED_DATA', 
            payload: { 
              hasForecasting: true, 
              lastAnalysisType: 'forecasting',
              forecastData: forecastData
            } 
          });
        }

        // Update message with response
        dispatch({ 
          type: 'UPDATE_LAST_MESSAGE', 
          payload: {
            content: responseText,
            suggestions,
            isTyping: false,
            visualization,
            agentType: frontendAgentType,
            canGenerateReport: false
          }
        });

      } else if (finalStatus.status === 'error') {
        // Handle error
        const errorMessage = finalStatus.error_message || 'Unknown error occurred';
        dispatch({ 
          type: 'UPDATE_LAST_MESSAGE', 
          payload: {
            content: `❌ **Error from Python backend:**\n\n${errorMessage}\n\n**Troubleshooting:**\n• Make sure Python backend is running on port 8000\n• Check that OPENAI_API_KEY is set\n• Verify Redis is running\n\nTry again or contact support.`,
            isTyping: false,
            agentType: 'general',
            suggestions: ['Check backend status', 'Try again', 'Contact support']
          }
        });
        dispatch({ type: 'SET_PROCESSING', payload: false });
      }

    } catch (error) {
      console.error("Python Backend Error:", error);
      dispatch({ type: 'CLEAR_THINKING_STEPS' });
      
      let errorMessage = "Sorry, I'm having trouble connecting to the AI service.";
      let suggestions = ['Check backend status', 'Try again', 'Contact support'];

      if (error instanceof PythonBackendError) {
        if (error.errorCode === 'CONNECTION_ERROR') {
          errorMessage = `❌ **Cannot connect to Python backend**\n\n**Issue:** The Python backend at port 8000 is not responding.\n\n**Solutions:**\n1. Start the Python backend:\n   \`\`\`bash\n   cd newgpt/backend_agent\n   python3 -m uvicorn main:app --reload --port 8000\n   \`\`\`\n2. Make sure Redis is running:\n   \`\`\`bash\n   redis-server\n   \`\`\`\n3. Check that OPENAI_API_KEY is set in your environment\n\n**Need help?** Check the IMPLEMENTATION_SUMMARY.md file for setup instructions.`;
          suggestions = ['View setup guide', 'Check logs', 'Contact support'];
        } else if (error.errorCode === 'VALIDATION_ERROR') {
          errorMessage = `❌ **Validation Error**\n\n${error.message}\n\nPlease check your input and try again.`;
          suggestions = ['Fix input', 'Try different query'];
        } else if (error.errorCode === 'SYSTEM_OVERLOADED') {
          errorMessage = `⚠️ **System Overloaded**\n\nThe AI service is currently processing too many requests. Please wait a moment and try again.`;
          suggestions = ['Wait and retry', 'Try simpler query'];
        } else {
          errorMessage = `❌ **Backend Error**\n\n${error.message}`;
        }
      } else if (error instanceof TaskTimeoutError) {
        errorMessage = `⏱️ **Task Timeout**\n\nThe request took longer than 4 minutes and was cancelled. This might happen with complex analyses.\n\n**Suggestions:**\n• Try a simpler query\n• Break down complex requests\n• Check backend logs for issues`;
        suggestions = ['Try simpler query', 'Check logs', 'Contact support'];
      }

      dispatch({ 
        type: 'UPDATE_LAST_MESSAGE', 
        payload: {
          content: errorMessage,
          isTyping: false,
          agentType: 'general',
          suggestions
        }
      });
      dispatch({ type: 'SET_PROCESSING', payload: false });
    }
  };

  // Form submit handler
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInput = formData.get('message') as string;
    e.currentTarget.reset();
    submitMessage(userInput);
  };

  // Suggestion click handler
  const handleSuggestionClick = (suggestion: string) => {
    submitMessage(suggestion);
  };
  
  // Visualize click handler
  const handleVisualizeClick = (messageId: string) => {
    // Only toggle inline visualization; do not auto-open insights panel
    dispatch({ type: 'TOGGLE_VISUALIZATION', payload: { messageId } });
  };

  const handleViewInsightsClick = (messageId: string) => {
    const msg = state.messages.find(m => m.id === messageId);
    const target = msg?.visualization?.target === 'Orders' ? 'units' : 'revenue';
    dispatch({ type: 'SET_DATA_PANEL_TARGET', payload: target });
    dispatch({ type: 'SET_DATA_PANEL_MODE', payload: 'chart' });
    dispatch({ type: 'SET_DATA_PANEL_OPEN', payload: true });
  };

  // Generate report handler
  const handleGenerateReport = (messageId: string) => {
    const msg = state.messages.find(m => m.id === messageId);
    if (msg?.reportData && msg.agentType) {
      dispatch({ 
        type: 'GENERATE_REPORT', 
        payload: {
          messageId,
          reportData: msg.reportData,
          agentType: msg.agentType,
          timestamp: new Date().toISOString()
        }
      });
    }
  };

  const isAssistantTyping = state.isProcessing || state.messages[state.messages.length - 1]?.isTyping;

  return (
    <>
      <Card className={cn('flex flex-col h-full border-0 shadow-none rounded-none', className)}>
        <CardContent className="flex-1 p-0 overflow-hidden">
          <div className="flex flex-col h-full">
            <ScrollArea className="flex-1" ref={scrollAreaRef}>
              <div className="p-4 space-y-4">
                {state.messages.map(message => (
                  <ChatBubble
                    key={message.id}
                    message={message}
                    onSuggestionClick={handleSuggestionClick}
                    onVisualizeClick={() => handleVisualizeClick(message.id)}
                    onViewInsightsClick={() => handleViewInsightsClick(message.id)}
                    onGenerateReport={handleGenerateReport}
                    thinkingSteps={state.thinkingSteps}
                  />
                ))}
              </div>
            </ScrollArea>
            
            <div className="border-t p-4 bg-card">
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Textarea
                    className="h-24 resize-none flex-1"
                    name="message"
                    placeholder="Ask about EDA, forecasts, what-if scenarios, comparisons..."
                    autoComplete="off"
                    disabled={isAssistantTyping}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        const form = e.currentTarget.closest('form');
                        if (form) {
                          const formData = new FormData(form);
                          const userInput = formData.get('message') as string;
                          if (userInput.trim()) {
                            form.reset();
                            submitMessage(userInput);
                          }
                        }
                      }
                    }}
                  />
                  <Button type="submit" size="icon" disabled={isAssistantTyping}>
                    <Send className="h-5 w-5 text-foreground" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    type="button" 
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload data"
                  >
                    <Paperclip className="h-5 w-5 text-foreground" />
                  </Button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    type="button" 
                    onClick={() => dispatch({ type: 'SET_DATA_PANEL_OPEN', payload: true })}
                    title="Open data preview"
                  >
                    <BarChart className="h-5 w-5 text-foreground" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Dialog 
        open={state.agentMonitor.isOpen} 
        onOpenChange={(isOpen) => dispatch({ type: 'SET_AGENT_MONITOR_OPEN', payload: isOpen })}
      >
        <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Agent Activity Monitor</DialogTitle>
          </DialogHeader>
          <AgentMonitorPanel className="flex-1 min-h-0" />
        </DialogContent>
      </Dialog>
    </>
  );
}
