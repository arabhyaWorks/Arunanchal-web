import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import AdminStats from './AdminStats';
import UserRoles from './UserRoles';
import ManageUsers from './ManageUsers';
import ManageContent from './ManageContent';
import ManageCommittees from './ManageCommittees';
import MasterData from './MasterData';
import AdminProfile from './AdminProfile';
import AdminSettings from './AdminSettings';
import { Routes, Route } from 'react-router-dom';

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
        <AdminHeader toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="min-h-[calc(100vh-64px)]">
          <Routes>
            <Route path="/" element={<AdminStats />} />
            <Route path="/users" element={<UserRoles />} />
            <Route path="/users/manage" element={<ManageUsers />} />
            <Route path="/content" element={<ManageContent />} />
            <Route path="/master-data" element={<MasterData />} />
            <Route path="/committees" element={<ManageCommittees />} />
            <Route path="/profile" element={<AdminProfile />} />
            <Route path="/settings" element={<AdminSettings />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}