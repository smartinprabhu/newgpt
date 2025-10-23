"use client";

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check for auth data from Frontend (passed via URL)
    const authData = searchParams.get('auth');
    
    if (authData) {
      try {
        // Decode and parse auth data
        const decoded = JSON.parse(atob(decodeURIComponent(authData)));
        
        // Store credentials in new_app's localStorage
        if (decoded.username && decoded.password) {
          localStorage.setItem('zentere_username', decoded.username);
          localStorage.setItem('zentere_password', decoded.password);
          localStorage.setItem('isAuthenticated', 'true');
        }
        
        // Store agent context if provided
        if (decoded.agentContext) {
          localStorage.setItem('agentLaunchContext', JSON.stringify(decoded.agentContext));
        }
        
        // Store skipOnboarding flag
        if (decoded.skipOnboarding) {
          localStorage.setItem('skipOnboarding', 'true');
        }
        
        // Clean URL and redirect to main
        window.history.replaceState({}, '', '/');
        router.push('/main');
        return;
      } catch (error) {
        console.error('Failed to parse auth data:', error);
      }
    }
    
    // Normal authentication check
    if (typeof window !== "undefined") {
      const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
      if (isAuthenticated) {
        router.push("/main");
      } else {
        router.push("/login");
      }
    }
  }, [router, searchParams]);

  // Show loading or nothing while redirecting
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-lg">Loading...</div>
    </div>
  );
}
