import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomSidebar from '../components/Sidebar';
import { DashboardHeader } from '../components/DashboardHeader';
import { SidebarProvider } from '@/components/ui/sidebar';
import AuthService from '../auth/utils/authService';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EnhancedChatPanel from '../components/EnhancedChatPanel';
import { AppProvider } from '../components/AppProvider';

interface AgentChatContext {
  agentType: string;
  agentSubtype: string;
  businessUnit: {
    id?: number;
    code: string;
    display_name: string;
    description?: string;
  };
  lineOfBusiness: {
    id: number;
    code: string;
    name: string;
    description?: string;
  } | null;
  initialPrompt: string;
  timestamp: string;
}

const AgentChatPage = () => {
  const [activeTab, setActiveTab] = useState('AIAgents');
  const [chatContext, setChatContext] = useState<AgentChatContext | null>(null);
  const [businessDataList, setBusinessDataList] = useState([]);
  const navigate = useNavigate();

  const WEBAPPAPIURL = '/api/v2/';

  // Load agent context from sessionStorage
  useEffect(() => {
    const storedContext = sessionStorage.getItem('agentChatContext');
    if (storedContext) {
      try {
        const parsed = JSON.parse(storedContext);
        setChatContext(parsed);
      } catch (error) {
        console.error('Failed to parse agent context:', error);
        navigate('/new-agent'); // Redirect back if context invalid
      }
    } else {
      navigate('/new-agent'); // Redirect if no context
    }
  }, [navigate]);

  // Fetch business units for header (same as NewAgentPage)
  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const buParams = new URLSearchParams({
          offset: '0',
          domain: '[]',
          order: 'id ASC',
          fields: '["display_name","code","description","sequence","preferred_algorithm","id"]',
          model: 'business.unit',
        });

        const response = await axios.get(`${WEBAPPAPIURL}search_read?${buParams.toString()}`, {
          headers: {
            Authorization: `Bearer ${AuthService.getAccessToken()}`
          },
        });

        setBusinessDataList(response?.data ?? []);
      } catch (error) {
        console.error('Error fetching business data:', error);
        setBusinessDataList([]);
      }
    };

    fetchBusinessData();
  }, []);

  const handleLogout = () => {
    AuthService.clearToken();
    window.location.href = "/";
  };

  const handleBackToAgents = () => {
    sessionStorage.removeItem('agentChatContext');
    navigate('/new-agent');
  };

  if (!chatContext) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <p className="text-lg">Loading chat session...</p>
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <AppProvider>
        <div className="flex h-screen w-full overflow-hidden">
          {/* Sidebar - Same as NewAgentPage */}
          <CustomSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            defaultConfig={[]}
            headerText="AI Agents"
            setOpenModal={() => {}}
            handleLogout={handleLogout}
          />

          <div className="flex flex-col flex-1 h-screen overflow-hidden bg-background text-foreground">
            {/* Header - Same as NewAgentPage */}
            <div className="sticky top-0 z-10 flex items-center justify-between py-1 px-1 bg-background border-b border-border">
              <div className="flex items-center gap-0 w-full">
                <DashboardHeader
                  title={`${chatContext.agentType} Agent${chatContext.agentSubtype ? ` - ${chatContext.agentSubtype}` : ''}`}
                  description={`${chatContext.businessUnit.display_name}${chatContext.lineOfBusiness ? ` → ${chatContext.lineOfBusiness.name}` : ''}`}
                  businessDataList={businessDataList}
                  lastUpdated={new Date().toLocaleDateString("en-GB")}
                  defaultConfigId={false}
                  userData={{}}
                  activeTab={activeTab}
                  businessData={{}}
                  handleLogout={handleLogout}
                  options={[]}
                  setActiveMainTab={() => {}}
                />
              </div>
            </div>

            {/* Back Button */}
            <div className="px-6 py-3 border-b border-border bg-background">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBackToAgents}
                className="gap-2 hover:bg-accent"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Agents
              </Button>
            </div>

            {/* Chat Interface - Full height */}
            <div className="flex-1 overflow-hidden">
              <EnhancedChatPanel
                agentType={chatContext.agentType}
                agentSubtype={chatContext.agentSubtype}
                businessUnit={chatContext.businessUnit}
                lineOfBusiness={chatContext.lineOfBusiness}
                initialPrompt={chatContext.initialPrompt}
              />
            </div>
          </div>
        </div>
      </AppProvider>
    </SidebarProvider>
  );
};

export default AgentChatPage;
