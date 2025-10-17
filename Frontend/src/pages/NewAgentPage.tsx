import React from 'react';
import CustomSidebar from '../components/Sidebar';
import { DashboardHeader } from '../components/DashboardHeader';
import { LineChart, CalendarCheck, Network, DiamondPercent } from 'lucide-react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AuthService from '../auth/utils/authService';

const NewAgentPage = () => {
  const [activeTab, setActiveTab] = React.useState('NewAgent');

  const agents = [
    {
      title: 'Forecasting Agent',
      subtitle: 'Short-term/Long-term',
      icon: <LineChart className="h-8 w-8 text-blue-600" />,
      link: 'http://localhost:3001'
    },
    {
      title: 'Capacity Planning',
      subtitle: 'Tactical/Strategic',
      icon: <CalendarCheck className="h-8 w-8 text-green-600" />,
      link: null
    },
    {
      title: 'What If / Scenario',
      subtitle: null,
      icon: <Network className="h-8 w-8 text-purple-600" />,
      link: null
    },
    {
      title: 'Occupancy Modeling',
      subtitle: null,
      icon: <DiamondPercent className="h-8 w-8 text-orange-600" />,
      link: null
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
          <div className="mb-4">
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
                {agents.map((agent) => (
                  <div
                    key={agent.title}
                    onClick={() => handleCardClick(agent)}
                    className="flex cursor-pointer flex-col items-center justify-center text-center p-6 bg-card bg-accent border shadow-sm rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-3">{agent.icon}</div>
                    <h3 className="text-lg font-semibold mb-1">{agent.title}</h3>
                    {agent.subtitle && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">{agent.subtitle}</p>
                    )}
                  </div>
                ))}
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
