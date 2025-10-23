import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '@/auth/utils/authService';
import { AppProvider } from '@/components/agent-chat/app-provider';
import Header from '@/components/agent-chat/header';
import MainContent from '@/components/agent-chat/main-content';

export default function AgentChatPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication using Frontend's AuthService
    const accessToken = AuthService.getAccessToken();
    if (!accessToken) {
      navigate('/dashboard');
      return;
    }

    // Check if we have launch context from AgentLauncher
    const agentLaunchContext = localStorage.getItem('agentLaunchContext');
    if (!agentLaunchContext) {
      console.warn('No agent launch context found, redirecting to agent selection');
      navigate('/new-agent');
    }
  }, [navigate]);

  // Show nothing while checking auth
  const accessToken = AuthService.getAccessToken();
  if (!accessToken) {
    return null;
  }

  return (
    <AppProvider>
      <div className="flex flex-col h-screen bg-background text-foreground">
        <Header />
        <MainContent />
      </div>
    </AppProvider>
  );
}
