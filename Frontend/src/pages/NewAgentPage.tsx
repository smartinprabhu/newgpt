import React from 'react';
import CustomSidebar from '../components/Sidebar';
import { LineChart, CalendarCheck, Network, DiamondPercent } from 'lucide-react';
import { SidebarProvider } from '@/components/ui/sidebar';

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

  return (
    <SidebarProvider>
      <div className="app-layout flex">
        {/* Sidebar from current app */}
        <CustomSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          defaultConfig={[]}
          headerText="New Agent"
          setOpenModal={() => {}}
          handleLogout={() => {}}
        />

        <div className="main-content flex-1 flex flex-col">
          <main className="flex-1 overflow-auto p-6">
            <h1 className="text-2xl font-semibold mb-6">AI Agents</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default NewAgentPage;
