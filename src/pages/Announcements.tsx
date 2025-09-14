import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, AlertTriangle, Info, CheckCircle, Clock, User, Pin, Search, Filter } from 'lucide-react';

const Announcements: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const announcements = [
    {
      id: '1',
      title: 'Spring Semester Registration Now Open',
      content: 'Registration for Spring Semester 2025 is now open for all students. Please complete your course registration by February 15th, 2025. Late registrations will incur additional fees. Visit the Academic Office or use the online portal to register.',
      priority: 'high' as const,
      category: 'Academic',
      created_by: 'Academic Office',
      created_at: '2025-01-20T09:00:00Z',
      expires_at: '2025-02-15T23:59:59Z',
      pinned: true,
      views: 1245,
      department: 'All Departments'
    },
    {
      id: '2',
      title: 'New Library Study Rooms Available',
      content: 'Bharath Organisation Library has added 10 new study rooms equipped with modern facilities including high-speed internet, whiteboards, and comfortable seating. Booking is available online through the library portal. Priority given to group study sessions.',
      priority: 'medium' as const,
      category: 'Facilities',
      created_by: 'Library Administration',
      created_at: '2025-01-19T14:30:00Z',
      expires_at: '2025-03-01T23:59:59Z',
      pinned: false,
      views: 892,
      department: 'All Departments'
    },
    {
      id: '3',
      title: 'Campus Wi-Fi Maintenance Schedule',
      content: 'Scheduled maintenance of campus Wi-Fi network will be conducted on January 28th, 2025, from 2:00 AM to 6:00 AM. Internet services may be intermittent during this period. We apologize for any inconvenience caused.',
      priority: 'urgent' as const,
      category: 'IT Services',
      created_by: 'IT Department',
      created_at: '2025-01-18T16:45:00Z',
      expires_at: '2025-01-28T06:00:00Z',
      pinned: true,
      views: 2156,
      department: 'All Departments'
    },
    {
      id: '4',
      title: 'Scholarship Applications Open',
      content: 'Merit-based scholarships for academic year 2025-26 are now available. Applications must be submitted by March 1st, 2025. Eligible students with GPA above 8.5 can apply. Required documents include academic transcripts, recommendation letters, and financial statements.',
      priority: 'high' as const,
      category: 'Financial Aid',
      created_by: 'Student Affairs',
      created_at: '2025-01-17T11:20:00Z',
      expires_at: '2025-03-01T23:59:59Z',
      pinned: false,
      views: 1678,
      department: 'All Departments'
    },
    {
      id: '5',
      title: 'Guest Lecture: Industry Trends in AI',
      content: 'Join us for an exclusive guest lecture by Dr. Rajesh Kumar, Senior AI Researcher at Google, on "Future Trends in Artificial Intelligence". Date: February 5th, 2025, Time: 3:00 PM, Venue: Main Auditorium. Open to all students and faculty.',
      priority: 'medium' as const,
      category: 'Events',
      created_by: 'Computer Science Department',
      created_at: '2025-01-16T10:15:00Z',
      expires_at: '2025-02-05T17:00:00Z',
      pinned: false,
      views: 756,
      department: 'Computer Science'
    },
    {
      id: '6',
      title: 'Health Center Services Update',
      content: 'Bharath Organisation Health Center now offers extended hours from 8:00 AM to 8:00 PM on weekdays and 9:00 AM to 5:00 PM on weekends. New services include mental health counseling, nutrition consultation, and preventive health checkups.',
      priority: 'low' as const,
      category: 'Health Services',
      created_by: 'Health Center',
      created_at: '2025-01-15T13:30:00Z',
      expires_at: '2025-06-30T23:59:59Z',
      pinned: false,
      views: 543,
      department: 'All Departments'
    },
    {
      id: '7',
      title: 'Placement Drive - Tech Companies',
      content: 'Major tech companies including Microsoft, Amazon, and Google will be conducting placement drives from February 10-20, 2025. Eligible students (final year) must register by February 1st. Preparation workshops will be conducted from January 25th onwards.',
      priority: 'urgent' as const,
      category: 'Placements',
      created_by: 'Placement Cell',
      created_at: '2025-01-14T09:45:00Z',
      expires_at: '2025-02-01T23:59:59Z',
      pinned: true,
      views: 3421,
      department: 'Engineering'
    }
  ];

  const priorities = [
    { id: 'all', name: 'All Priorities', count: announcements.length },
    { id: 'urgent', name: 'Urgent', count: announcements.filter(a => a.priority === 'urgent').length },
    { id: 'high', name: 'High', count: announcements.filter(a => a.priority === 'high').length },
    { id: 'medium', name: 'Medium', count: announcements.filter(a => a.priority === 'medium').length },
    { id: 'low', name: 'Low', count: announcements.filter(a => a.priority === 'low').length }
  ];

  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = selectedPriority === 'all' || announcement.priority === selectedPriority;
    return matchesSearch && matchesPriority;
  });

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'urgent': return <AlertTriangle className="text-red-500" size={20} />;
      case 'high': return <Bell className="text-orange-500" size={20} />;
      case 'medium': return <Info className="text-blue-500" size={20} />;
      case 'low': return <CheckCircle className="text-green-500" size={20} />;
      default: return <Bell className="text-gray-500" size={20} />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800';
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800';
      case 'medium': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800';
      case 'low': return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return 'Yesterday';
    return date.toLocaleDateString();
  };

  // Sort announcements: pinned first, then by date
  const sortedAnnouncements = [...filteredAnnouncements].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Bharath Organisation Announcements
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Stay updated with the latest news and important information
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Bell size={16} />
          <span>{announcements.length} total announcements</span>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {priorities.map((priority) => (
              <button
                key={priority.id}
                onClick={() => setSelectedPriority(priority.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedPriority === priority.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {priority.name} ({priority.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {sortedAnnouncements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-l-4 ${getPriorityColor(announcement.priority)} hover:shadow-md transition-all duration-300`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {announcement.pinned && (
                    <Pin size={16} className="text-blue-500" />
                  )}
                  {getPriorityIcon(announcement.priority)}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {announcement.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(announcement.priority)}`}>
                    {announcement.priority.toUpperCase()}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {announcement.content}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {announcement.created_by}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {formatDate(announcement.created_at)}
                  </div>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                    {announcement.category}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                    {announcement.department}
                  </span>
                  <div className="flex items-center">
                    <span>{announcement.views} views</span>
                  </div>
                  {announcement.expires_at && (
                    <div className="flex items-center text-orange-600 dark:text-orange-400">
                      <AlertTriangle size={14} className="mr-1" />
                      Expires: {new Date(announcement.expires_at).toLocaleDateString()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {sortedAnnouncements.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Bell size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No announcements found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Announcements;