import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navigation/Navbar';
import Sidebar from './components/Navigation/Sidebar';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import LoginForm from './components/Auth/LoginForm';
import { motion, AnimatePresence } from 'framer-motion';

// Auth wrapper component
const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
        {showLogin ? (
          <div className="min-h-screen flex items-center justify-center p-4">
            <LoginForm onToggle={() => setShowLogin(false)} />
          </div>
        ) : (
          <>
            <Landing />
            <div className="fixed bottom-8 right-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLogin(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Sign In
              </motion.button>
            </div>
          </>
        )}
      </div>
    );
  }

  return <>{children}</>;
};

// Main App Layout
const AppLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setSidebarOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'events':
        return <div className="p-8">Events Page (Coming Soon)</div>;
      case 'clubs':
        return <div className="p-8">Clubs Page (Coming Soon)</div>;
      case 'academics':
        return <div className="p-8">Academics Page (Coming Soon)</div>;
      case 'achievements':
        return <div className="p-8">Achievements Page (Coming Soon)</div>;
      case 'announcements':
        return <div className="p-8">Announcements Page (Coming Soon)</div>;
      case 'discussion':
        return <div className="p-8">Discussion Page (Coming Soon)</div>;
      case 'analytics':
        return <div className="p-8">Analytics Page (Coming Soon)</div>;
      case 'profile':
        return <div className="p-8">Profile Page (Coming Soon)</div>;
      case 'settings':
        return <div className="p-8">Settings Page (Coming Soon)</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar onMenuClick={handleMenuClick} isMenuOpen={sidebarOpen} />
      
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        
        <main className="flex-1 min-h-[calc(100vh-4rem)] p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AuthWrapper>
            <AppLayout />
          </AuthWrapper>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;