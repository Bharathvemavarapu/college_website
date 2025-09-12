import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Calendar, 
  Users, 
  BookOpen, 
  Settings, 
  Bell,
  BarChart3,
  GraduationCap,
  Trophy,
  MessageSquare
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, currentPage, onPageChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'clubs', label: 'Clubs', icon: Users },
    { id: 'academics', label: 'Academics', icon: BookOpen },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'announcements', label: 'Announcements', icon: Bell },
    { id: 'discussion', label: 'Discussion', icon: MessageSquare },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: GraduationCap },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => onPageChange(currentPage)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : -320,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-50 md:relative md:top-0 md:h-screen md:translate-x-0"
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="space-y-2 px-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onPageChange(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                );
              })}
            </nav>
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              © 2025 EduOrg Platform
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;