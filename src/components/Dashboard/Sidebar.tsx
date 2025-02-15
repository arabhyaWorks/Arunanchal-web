import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FileVideo,
  Upload,
  UserCircle,
  Settings,
  LogOut,
  ChevronRight,
  Menu,
  X,
  Eye
} from 'lucide-react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileVideo, label: 'Your Content', path: '/dashboard/content' },
    { icon: Upload, label: 'Upload Content', path: '/dashboard/upload' },
    { icon: UserCircle, label: 'Profile', path: '/dashboard/profile' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/login');
  };

  const handleViewAsUser = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-heading" />
        ) : (
          <Menu className="h-6 w-6 text-heading" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-xl z-40 transition-all duration-300 
          ${isCollapsed ? 'w-20' : 'w-64'} 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 border-b border-gray-100 dark:border-gray-700">
          <img
            src="https://indigenous.arunachal.gov.in/assets/images/logo_ap.png"
            alt="Logo"
            className="h-10 w-10"
          />
          {!isCollapsed && (
            <span className="font-semibold text-heading"> Department of Indigenous Affairs</span>
          )}
        </div>

        {/* Toggle button */}
        <button
          className="hidden lg:block absolute -right-3 top-20 p-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <ChevronRight
            className={`h-4 w-4 text-heading transition-transform ${
              isCollapsed ? 'rotate-0' : 'rotate-180'
            }`}
          />
        </button>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                navigate(item.path);
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-heading transition-colors"
            >
              <item.icon className="h-5 w-5 text-teal-600" />
              {!isCollapsed && <span>{item.label}</span>}
            </button>
          ))}

          {/* View as User Button */}
          <button
            onClick={handleViewAsUser}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 transition-colors"
          >
            <Eye className="h-5 w-5" />
            {!isCollapsed && <span>View as User</span>}
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 transition-colors mt-8"
          >
            <LogOut className="h-5 w-5" />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </nav>
      </aside>
    </>
  );
}