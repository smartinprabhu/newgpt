import React from 'react';
import CustomSidebar from '../components/Sidebar';
import MainContent from '../../../new_app/src/app/theme-demo/client-page'; // new_app main page content

const NewAgentPage = () => {
  const [activeTab, setActiveTab] = React.useState('NewAgent');

  return (
    <div className="app-layout flex">
      {/* Sidebar from current app */}
      <CustomSidebar activeTab={activeTab} setActiveTab={setActiveTab} defaultConfig={[]} headerText="New Agent" setOpenModal={() => {}} handleLogout={() => {}} />

      <div className="main-content flex-1 flex flex-col">
        {/* Main content from new_app */}
        <main className="flex-1 overflow-auto p-4">
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default NewAgentPage;
