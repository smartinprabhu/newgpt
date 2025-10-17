import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Send, BarChart3, Brain, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AgentLauncherProps {
  isOpen: boolean;
  onClose: () => void;
  agent: {
    title: string;
    subtitle: string | null;
    description: string;
    icon: React.ReactNode;
    iconColor: string;
  } | null;
  businessUnits: Array<{ id?: number; display_name: string; code: string }>;
}

export default function AgentLauncher({ isOpen, onClose, agent, businessUnits }: AgentLauncherProps) {
  const [prompt, setPrompt] = useState('');
  const [selectedBU, setSelectedBU] = useState<string>('');
  const [isLaunching, setIsLaunching] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [prompt]);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setPrompt('');
      setSelectedBU('');
      setIsLaunching(false);
    }
  }, [isOpen]);

  if (!isOpen || !agent) return null;

  const handleLaunch = () => {
    if (!selectedBU || !prompt.trim()) return;

    setIsLaunching(true);

    // Simulate launching and redirect
    setTimeout(() => {
      window.location.href = 'http://localhost:3001';
    }, 1500);
  };

  const canLaunch = selectedBU && prompt.trim().length > 0;

  // Suggested prompts based on agent type
  const getSuggestions = () => {
    switch (agent.title) {
      case 'Forecasting Agent':
        return [
          'Generate a 4-week forecast',
          'Show me historical trends',
          'Predict next quarter demand',
          'Analyze seasonality patterns'
        ];
      case 'Capacity Planning':
        return [
          'Optimize workforce allocation',
          'Show capacity gaps',
          'Strategic planning for Q2',
          'Resource utilization analysis'
        ];
      case 'What If / Scenario':
        return [
          'Compare different scenarios',
          'Impact of 20% demand increase',
          'Best case vs worst case',
          'Sensitivity analysis'
        ];
      case 'Occupancy Modeling':
        return [
          'Workspace utilization report',
          'Optimize facility usage',
          'Occupancy trends analysis',
          'Space planning recommendations'
        ];
      default:
        return ['Analyze my data', 'Show insights', 'Generate report'];
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[2000] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-[700px] lg:w-[800px] bg-background border-l shadow-2xl z-[2001] transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b bg-background/95 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${agent.iconColor.replace('text-', 'bg-').replace('600', '100')} ${agent.iconColor.replace('text-', 'dark:bg-').replace('600', '900/30')}`}>
              {agent.icon}
            </div>
            <div>
              <h2 className="text-xl font-bold">{agent.title}</h2>
              {agent.subtitle && (
                <p className="text-sm text-muted-foreground">{agent.subtitle}</p>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="h-[calc(100vh-80px)] overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Hero Section */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.1),transparent_50%)]" />

              <div className="text-center space-y-4 py-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary text-xs font-medium">
                  <Sparkles className="h-4 w-4" /> AI-Powered Intelligence
                </div>

                <h3 className="text-3xl font-bold tracking-tight">
                  Launch {agent.title}
                </h3>

                <p className="text-muted-foreground max-w-md mx-auto">
                  {agent.description}
                </p>
              </div>
            </div>

            {/* Business Unit Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Select Business Unit</label>
              <Select value={selectedBU} onValueChange={setSelectedBU}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a business unit..." />
                </SelectTrigger>
                <SelectContent>
                  {businessUnits.map((bu) => (
                    <SelectItem key={bu.code} value={bu.code}>
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                        <span>{bu.display_name}</span>
                      </div>
                    </SelectItem>
                  ))}
                  {businessUnits.length === 0 && (
                    <SelectItem value="no-data" disabled>
                      No business units available
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>

            {/* Initial Prompt */}
            <div className="space-y-3">
              <label className="text-sm font-medium">What would you like to do?</label>
              <div className="rounded-xl border bg-card/60 backdrop-blur-lg p-4 shadow-sm">
                <div className="flex items-start gap-2">
                  <Textarea
                    ref={textareaRef}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your analysis needs..."
                    className="flex-1 bg-background text-foreground placeholder:text-muted-foreground rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none overflow-hidden min-h-[100px] border-0"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey && canLaunch) {
                        e.preventDefault();
                        handleLaunch();
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Suggested Prompts */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Quick Suggestions</label>
              <div className="flex flex-wrap gap-2">
                {getSuggestions().map((suggestion) => (
                  <Button
                    key={suggestion}
                    size="sm"
                    variant="outline"
                    onClick={() => setPrompt(suggestion)}
                    className="text-xs"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>

            {/* Launch Button */}
            <div className="pt-4">
              <Button
                onClick={handleLaunch}
                disabled={!canLaunch || isLaunching}
                className="w-full h-12 text-base font-semibold gap-2"
                size="lg"
              >
                {isLaunching ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Launching {agent.title}...
                  </>
                ) : (
                  <>
                    <Brain className="h-5 w-5" />
                    Launch Agent
                  </>
                )}
              </Button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6">
              <div className="rounded-lg border p-4 bg-card/50">
                <BarChart3 className="h-5 w-5 text-primary mb-2" />
                <h4 className="font-semibold text-sm mb-1">Real-time Analysis</h4>
                <p className="text-xs text-muted-foreground">
                  Get instant insights from your data with AI-powered analytics
                </p>
              </div>
              <div className="rounded-lg border p-4 bg-card/50">
                <Sparkles className="h-5 w-5 text-primary mb-2" />
                <h4 className="font-semibold text-sm mb-1">Smart Recommendations</h4>
                <p className="text-xs text-muted-foreground">
                  Receive intelligent suggestions based on your specific context
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
