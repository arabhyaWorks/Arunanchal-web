import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardStats from './DashboardStats';
import Profile from './Profile';
import YourContent from './YourContent';
import WelcomePopup from './WelcomePopup';
import DashboardHeader from './DashboardHeader';

export default function Dashboard() {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if this is the first login
    const isFirstLogin = localStorage.getItem('isFirstLogin') !== 'false';
    setShowWelcome(isFirstLogin);
    localStorage.setItem('isFirstLogin', 'false');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      <main className="lg:ml-64">
        <DashboardHeader />
        <div className="min-h-[calc(100vh-64px)]">
          <Routes>
            <Route path="/" element={<DashboardStats />} />
            <Route path="/content" element={<YourContent />} />
            <Route path="/profile" element={<Profile />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </main>

      {showWelcome && (
        <WelcomePopup
          onClose={() => setShowWelcome(false)}
          userName="Animesh"
        />
      )}
    </div>
  );
}