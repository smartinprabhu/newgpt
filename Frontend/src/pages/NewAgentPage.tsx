import React from 'react';
import CustomSidebar from '../components/Sidebar';
import { DashboardHeader } from '../components/DashboardHeader';
import { LineChart, CalendarCheck, Network, DiamondPercent, ArrowRight, Sparkles } from 'lucide-react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AuthService from '../auth/utils/authService';

const NewAgentPage = () => {
  const [activeTab, setActiveTab] = React.useState('NewAgent');

  const agents = [
    {
      title: 'Forecasting Agent',
      subtitle: 'Short-term/Long-term',
      description: 'Predict future demand with advanced forecasting models for immediate and extended planning.',
      icon: <LineChart className="h-6 w-6" />,
      iconBg: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
      link: 'http://localhost:3001',
      available: true
    },
    {
      title: 'Capacity Planning',
      subtitle: 'Tactical/Strategic',
      description: 'Optimize resource allocation and workforce planning with strategic capacity analysis.',
      icon: <CalendarCheck className="h-6 w-6" />,
      iconBg: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400',
      link: null,
      available: false
    },
    {
      title: 'What If / Scenario',
      subtitle: 'Scenario Analysis',
      description: 'Explore different business scenarios and outcomes to make informed decisions.',
      icon: <Network className="h-6 w-6" />,
      iconBg: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
      link: null,
      available: false
    },
    {
      title: 'Occupancy Modeling',
      subtitle: 'Utilization Planning',
      description: 'Analyze workspace occupancy patterns to optimize facility usage and efficiency.',
      icon: <DiamondPercent className="h-6 w-6" />,
      iconBg: 'bg-orange-100 dark:bg-orange-900/30',
      iconColor: 'text-orange-600 dark:text-orange-400',
      link: null,
      available: false
    }
  ];

  const handleCardClick = (agent: typeof agents[0]) => {
    if (agent.link) {
      window.location.href = agent.link;
    }
  };

  const handleLogout = () => {
    AuthService.clearToken();
    window.location.href = "/";
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <CustomSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          defaultConfig={[]}
          headerText="AI Agents"
          setOpenModal={() => {}}
          handleLogout={handleLogout}
        />

        <div className="flex flex-col flex-1 h-screen overflow-hidden bg-background text-foreground transition-all duration-300"
          style={{ zIndex: 0, overflowY: 'auto' }}
        >
          {/* Dashboard Header (Sticky) */}
          <div className="sticky top-0 z-1200 flex items-center justify-between py-1 px-1 bg-background dark:border-gray-700">
            <div className="flex items-center gap-0 w-full">
              <DashboardHeader
                title="AI Agents"
                description="Intelligent agents to help with forecasting, planning, and analysis"
                businessDataList={[]}
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

          {/* Main Content */}
          <div className="flex-1 flex items-start justify-center p-6 pt-12">
            <div className="w-full max-w-6xl">
              {/* Introduction Section */}
              <div className="mb-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4">
                  <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">AI-Powered Intelligence</span>
                </div>
                <h2 className="text-3xl font-bold mb-3 text-foreground">Choose Your Agent</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Select an AI agent to assist with your forecasting, planning, and analysis needs.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {agents.map((agent) => (
                  <div
                    key={agent.title}
                    onClick={() => handleCardClick(agent)}
                    className={`group relative flex flex-col p-6 bg-card border rounded-xl transition-all duration-200 ${
                      agent.available 
                        ? 'cursor-pointer hover:shadow-lg hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-700' 
                        : 'cursor-not-allowed opacity-75'
                    }`}
                  >
                    {/* Badge */}
<div className="absolute top-4 right-4">
                      {agent.available ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                          Available Now
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${agent.iconBg} mb-4`}>
                      <div className={agent.iconColor}>
                        {agent.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 text-foreground">{agent.title}</h3>
                      <p className="text-xs font-medium text-muted-foreground mb-3">{agent.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {agent.description}
                      </p>
                    </div>

                    {/* Arrow indicator for available agents */}
                    {agent.available && (
                      <div className="flex items-center gap-2 mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium">
                        <span>Launch Agent</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Info Note */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  More agents coming soon. Stay tuned for updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 w-full py-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-[rgb(20,21,24)]">
        <p>© 2025 Aptino. All rights reserved.</p>
      </footer>
    </SidebarProvider>
  );
};

export default NewAgentPage;
