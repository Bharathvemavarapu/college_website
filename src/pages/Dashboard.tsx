import React from 'react';
import { motion } from 'framer-motion';
import StatsCard from '../components/Dashboard/StatsCard';
import EventCard from '../components/Events/EventCard';
import { Users, Calendar, Trophy, Bell, TrendingUp, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Members',
      value: '5,234',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Events This Month',
      value: '24',
      change: '+8%',
      changeType: 'positive' as const,
      icon: Calendar,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      title: 'Active Clubs',
      value: '18',
      change: '+2',
      changeType: 'positive' as const,
      icon: Trophy,
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      title: 'Announcements',
      value: '12',
      change: 'New',
      changeType: undefined,
      icon: Bell,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600'
    }
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'Tech Innovation Summit',
      description: 'Join industry leaders for cutting-edge tech discussions and networking.',
      date: '2025-01-25',
      time: '2:00 PM - 6:00 PM',
      location: 'Main Auditorium',
      category: 'workshop' as const,
      current_participants: 45,
      max_participants: 100,
      created_by: 'admin',
      created_at: '2025-01-15T00:00:00Z',
      image_url: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      title: 'Cultural Night 2025',
      description: 'Celebrate diversity with performances, food, and cultural exhibitions.',
      date: '2025-01-28',
      time: '7:00 PM - 11:00 PM',
      location: 'Student Center',
      category: 'cultural' as const,
      current_participants: 89,
      max_participants: 200,
      created_by: 'admin',
      created_at: '2025-01-15T00:00:00Z',
      image_url: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const recentAnnouncements = [
    {
      id: '1',
      title: 'Spring Semester Registration Open',
      content: 'Registration for spring semester courses is now open. Deadline: February 15th.',
      priority: 'high' as const,
      category: 'Academic',
      created_by: 'Academic Office',
      created_at: '2025-01-20T00:00:00Z'
    },
    {
      id: '2',
      title: 'New Study Rooms Available',
      content: 'Additional study spaces have been added to the library. Book online.',
      priority: 'medium' as const,
      category: 'Facilities',
      created_by: 'Library',
      created_at: '2025-01-19T00:00:00Z'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening in your organization.
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-4 sm:mt-0">
          <Clock size={16} />
          <span>Last updated: Just now</span>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={stat.title} {...stat} index={index} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Events */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Upcoming Events
            </h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              View All
            </button>
          </div>
          <div className="grid gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                onRegister={(id) => console.log('Register for event:', id)}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Sidebar Content */}
        <div className="space-y-6">
          {/* Recent Announcements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Recent Announcements
            </h3>
            <div className="space-y-4">
              {recentAnnouncements.map((announcement) => (
                <div key={announcement.id} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                    {announcement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {announcement.content}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {announcement.created_by}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      announcement.priority === 'high' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        : announcement.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    }`}>
                      {announcement.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Activity Feed
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <TrendingUp size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-900 dark:text-white">
                    <strong>Tech Club</strong> gained 15 new members
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <Calendar size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-900 dark:text-white">
                    New event <strong>"AI Workshop"</strong> created
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Trophy size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-900 dark:text-white">
                    <strong>Drama Club</strong> won best performance award
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">1 day ago</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;