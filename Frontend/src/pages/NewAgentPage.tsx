import React from 'react';
import CustomSidebar from '../components/Sidebar';
import AgentCard from '../components/AgentCard';
import { SidebarProvider } from '@/components/ui/sidebar';

const NewAgentPage = () => {
  const [activeTab, setActiveTab] = React.useState('NewAgent');

  const agentCards = [
    {
      title: 'Agents Forecasting Agent',
      subtitles: ['Short-term/Long-term'],
      link: 'http://localhost:3001',
    },
    {
      title: 'Capacity Planning',
      subtitles: ['Tactical/Strategic'],
    },
    {
      title: 'What If / Scenario',
      subtitles: [],
    },
    {
      title: 'Occupancy Modeling',
      subtitles: [],
    },
  ];

  return (
    <SidebarProvider>
      <div className="app-layout flex">
        {/* Sidebar from current app */}
        <CustomSidebar activeTab={activeTab} setActiveTab={setActiveTab} defaultConfig={[]} headerText="New Agent" setOpenModal={() => {}} handleLogout={() => {}} />

        <div className="main-content flex-1 flex flex-col">
          <main className="flex-1 overflow-auto p-4">
            <div className="flex flex-wrap justify-center">
              {agentCards.map((card, index) => (
                <AgentCard
                  key={index}
                  title={card.title}
                  subtitles={card.subtitles}
                  link={card.link}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default NewAgentPage;
