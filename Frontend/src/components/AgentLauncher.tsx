import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Brain, Loader2, ChevronRight, Building2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LOB {
  id: number;
  name: string;
  code: string;
  description?: string;
  business_unit?: [number, string] | number;
}

interface BusinessUnit {
  id?: number;
  display_name: string;
  code: string;
  description?: string;
  sequence?: number;
  preferred_algorithm?: any;
  lobs: LOB[];
}

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
  businessUnits: BusinessUnit[];
}

export default function AgentLauncher({ isOpen, onClose, agent, businessUnits }: AgentLauncherProps) {
  const [prompt, setPrompt] = useState('');
  const [selectedBU, setSelectedBU] = useState<BusinessUnit | null>(null);
  const [selectedLOB, setSelectedLOB] = useState<LOB | null>(null);
  const [isLaunching, setIsLaunching] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Debug logging
  useEffect(() => {
    if (isOpen) {
      console.log('🚀 AgentLauncher opened');
      console.log('📦 businessUnits prop:', businessUnits);
      console.log('📊 businessUnits length:', businessUnits?.length);
      console.log('🔍 businessUnits detail:', JSON.stringify(businessUnits, null, 2));
    }
  }, [isOpen, businessUnits]);

  // Debug dropdown state
  useEffect(() => {
    console.log('🎯 Dropdown open state changed:', dropdownOpen);
  }, [dropdownOpen]);

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
      setSelectedBU(null);
      setSelectedLOB(null);
      setIsLaunching(false);
    }
  }, [isOpen]);

  if (!isOpen || !agent) return null;

  const handleBUSelect = (bu: BusinessUnit) => {
    setSelectedBU(bu);
    setSelectedLOB(null); // Clear LOB when BU changes
  };

  const handleLOBSelect = (bu: BusinessUnit, lob: LOB) => {
    setSelectedBU(bu);
    setSelectedLOB(lob);
  };

  const handleLaunch = () => {
    if (!selectedBU || !prompt.trim()) return;

    setIsLaunching(true);

    // Simulate launching and redirect to new tab
    setTimeout(() => {
      window.open('http://localhost:3001', '_blank');
      setIsLaunching(false);
      onClose(); // Close the drawer after opening the new tab
    }, 1500);
  };

  const canLaunch = selectedBU && prompt.trim().length > 0;

  // Get display text for the selected BU/LOB
  const getSelectionText = () => {
    if (!selectedBU) return 'Select Business Unit / LOB...';
    if (selectedLOB) return `${selectedBU.display_name} → ${selectedLOB.name}`;
    return selectedBU.display_name;
  };

  // Suggested prompts based on agent type
  const getSuggestions = () => {
    switch (agent.title) {
      case 'Forecasting':
        return [
          'Generate a comprehensive forecast',
          'Show me demand trends',
          'Predict next quarter volume',
          'Analyze historical patterns'
        ];
      case 'Short Term Forecasting':
        return [
          'Generate 2-week forecast',
          'Predict next week demand',
          'Weekly trend analysis',
          'Immediate volume predictions'
        ];
      case 'Long Term Forecasting':
        return [
          'Generate 6-month forecast',
          'Predict quarterly demand',
          'Long-term trend analysis',
          'Annual volume projections'
        ];
      case 'Tactical Capacity Planning':
        return [
          'Optimize this week\'s schedule',
          'Short-term resource allocation',
          'Daily staffing requirements',
          'Immediate capacity gaps'
        ];
      case 'Strategic Capacity Planning':
        return [
          'Long-term workforce planning',
          'Quarterly capacity strategy',
          'Infrastructure requirements',
          'Annual resource planning'
        ];
      case 'What If & Scenario Analyst':
        return [
          'Compare multiple scenarios',
          'Impact of 20% volume increase',
          'Best vs worst case analysis',
          'Sensitivity testing'
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

            {/* Hierarchical BU/LOB Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Select Business Unit & Line of Business</label>

              <DropdownMenu modal={false} open={dropdownOpen} onOpenChange={setDropdownOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between h-auto min-h-[44px] px-4 py-3"
                    onClick={() => console.log('🖱️ Button clicked, businessUnits:', businessUnits.length)}
                  >
                    <span className="flex items-center gap-2 text-left flex-1">
                      {selectedBU ? (
                        <>
                          <Building2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="truncate">{getSelectionText()}</span>
                        </>
                      ) : (
                        <>
                          <Building2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-muted-foreground">Choose a business unit...</span>
                        </>
                      )}
                    </span>
                    <ChevronRight className="h-4 w-4 opacity-50 flex-shrink-0" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-[500px] max-h-[500px] overflow-y-auto"
                  sideOffset={5}
                  align="start"
                  style={{ zIndex: 2100 }}
                >
                  <DropdownMenuLabel>Business Units & Lines of Business</DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  {businessUnits.length === 0 ? (
                    <DropdownMenuItem disabled>
                      No business units available
                    </DropdownMenuItem>
                  ) : (
                    businessUnits.map((bu) => (
                      <React.Fragment key={bu.code}>
                        {/* Business Unit Header - Always Clickable */}
                        <DropdownMenuItem
                          onClick={() => {
                            console.log('✅ BU selected:', bu.display_name);
                            handleBUSelect(bu);
                          }}
                          className="font-medium bg-muted/50 hover:bg-muted cursor-pointer"
                        >
                          <Building2 className="h-4 w-4 mr-2 text-primary" />
                          <div className="flex flex-col flex-1">
                            <span>{bu.display_name}</span>
                            {bu.description && (
                              <span className="text-xs font-normal text-muted-foreground">{bu.description}</span>
                            )}
                          </div>
                          {bu.lobs && bu.lobs.length > 0 && (
                            <span className="text-xs text-muted-foreground ml-2">
                              {bu.lobs.length} LOB{bu.lobs.length !== 1 ? 's' : ''}
                            </span>
                          )}
                        </DropdownMenuItem>

                        {/* LOBs under this BU - Indented */}
                        {bu.lobs && bu.lobs.length > 0 && bu.lobs.map((lob) => (
                          <DropdownMenuItem
                            key={lob.id}
                            onClick={() => {
                              console.log('✅ LOB selected:', lob.name);
                              handleLOBSelect(bu, lob);
                            }}
                            className="pl-8 cursor-pointer"
                          >
                            <Layers className="h-4 w-4 mr-2 text-muted-foreground" />
                            <div className="flex flex-col flex-1">
                              <span>{lob.name}</span>
                              {lob.description && (
                                <span className="text-xs text-muted-foreground">{lob.description}</span>
                              )}
                            </div>
                          </DropdownMenuItem>
                        ))}

                        {/* Separator between BUs */}
                        <DropdownMenuSeparator />
                      </React.Fragment>
                    ))
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Selection Display */}
              {selectedBU && (
                <div className="rounded-lg border bg-muted/50 p-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span className="font-medium">Business Unit:</span>
                    <span>{selectedBU.display_name}</span>
                  </div>
                  {selectedLOB && (
                    <div className="flex items-center gap-2 text-sm pl-6 border-l-2 border-primary/30">
                      <Layers className="h-4 w-4 text-primary" />
                      <span className="font-medium">LOB:</span>
                      <span>{selectedLOB.name}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Debug Info */}
              <div className="text-xs text-muted-foreground p-2 bg-muted/30 rounded">
                <p>📊 Loaded: {businessUnits?.length || 0} Business Units</p>
                {businessUnits?.length > 0 && (
                  <p className="mt-1">
                    First BU: "{businessUnits[0]?.display_name}" with {businessUnits[0]?.lobs?.length || 0} LOBs
                  </p>
                )}
              </div>
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
                <Building2 className="h-5 w-5 text-primary mb-2" />
                <h4 className="font-semibold text-sm mb-1">Context-Aware</h4>
                <p className="text-xs text-muted-foreground">
                  Analysis tailored to your selected business unit and LOB
                </p>
              </div>
              <div className="rounded-lg border p-4 bg-card/50">
                <Sparkles className="h-5 w-5 text-primary mb-2" />
                <h4 className="font-semibold text-sm mb-1">AI-Powered Insights</h4>
                <p className="text-xs text-muted-foreground">
                  Get intelligent recommendations based on your data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
