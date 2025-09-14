import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, Reply, Send, Plus, Search, Filter, User, Clock, Hash } from 'lucide-react';

const Discussion: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);

  const discussions = [
    {
      id: '1',
      title: 'Best Study Strategies for Final Exams',
      content: 'What are your most effective study techniques for preparing for final exams? I\'m looking for methods that have worked well for Computer Science subjects, especially for complex algorithms and data structures.',
      author: 'Arjun Sharma',
      avatar: '👨‍💻',
      category: 'Academic',
      created_at: '2025-01-20T10:30:00Z',
      replies: 15,
      likes: 23,
      tags: ['study-tips', 'exams', 'computer-science'],
      latest_reply: '2025-01-20T16:45:00Z'
    },
    {
      id: '2',
      title: 'Bharath Organisation Cultural Festival Planning',
      content: 'Excited to announce that planning for our annual cultural festival has begun! We\'re looking for volunteers to help with event coordination, performance management, and logistics. This is a great opportunity to showcase your organizational skills.',
      author: 'Priya Nair',
      avatar: '👩‍🎨',
      category: 'Events',
      created_at: '2025-01-19T14:20:00Z',
      replies: 28,
      likes: 45,
      tags: ['cultural-festival', 'volunteers', 'events'],
      latest_reply: '2025-01-20T12:30:00Z'
    },
    {
      id: '3',
      title: 'Internship Opportunities in Tech Industry',
      content: 'Has anyone applied for summer internships at major tech companies? I\'d love to hear about your experiences with the application process, interview preparation, and any tips for standing out among thousands of applicants.',
      author: 'Vikram Singh',
      avatar: '👨‍🎓',
      category: 'Career',
      created_at: '2025-01-18T09:15:00Z',
      replies: 32,
      likes: 67,
      tags: ['internships', 'tech-industry', 'career-advice'],
      latest_reply: '2025-01-20T11:20:00Z'
    },
    {
      id: '4',
      title: 'New Library Resources and Study Spaces',
      content: 'The library has added amazing new resources including access to premium research databases, collaborative study rooms, and extended hours. Has anyone tried the new facilities yet? What\'s your experience been like?',
      author: 'Sneha Patel',
      avatar: '👩‍📚',
      category: 'Campus Life',
      created_at: '2025-01-17T16:45:00Z',
      replies: 12,
      likes: 19,
      tags: ['library', 'study-spaces', 'resources'],
      latest_reply: '2025-01-19T14:30:00Z'
    },
    {
      id: '5',
      title: 'Startup Ideas and Entrepreneurship Discussion',
      content: 'Looking to connect with fellow aspiring entrepreneurs! I have some ideas for EdTech solutions and would love to discuss potential collaborations, funding opportunities, and the startup ecosystem at Bharath Organisation.',
      author: 'Rahul Gupta',
      avatar: '👨‍💼',
      category: 'Entrepreneurship',
      created_at: '2025-01-16T11:30:00Z',
      replies: 21,
      likes: 34,
      tags: ['startup', 'entrepreneurship', 'collaboration'],
      latest_reply: '2025-01-18T15:45:00Z'
    },
    {
      id: '6',
      title: 'Mental Health and Wellness Resources',
      content: 'Mental health is crucial for academic success. Let\'s discuss the wellness resources available on campus, stress management techniques, and how we can support each other during challenging times.',
      author: 'Ananya Krishnan',
      avatar: '👩‍⚕️',
      category: 'Wellness',
      created_at: '2025-01-15T13:20:00Z',
      replies: 18,
      likes: 41,
      tags: ['mental-health', 'wellness', 'support'],
      latest_reply: '2025-01-17T10:15:00Z'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Discussions', count: discussions.length },
    { id: 'Academic', name: 'Academic', count: discussions.filter(d => d.category === 'Academic').length },
    { id: 'Events', name: 'Events', count: discussions.filter(d => d.category === 'Events').length },
    { id: 'Career', name: 'Career', count: discussions.filter(d => d.category === 'Career').length },
    { id: 'Campus Life', name: 'Campus Life', count: discussions.filter(d => d.category === 'Campus Life').length },
    { id: 'Entrepreneurship', name: 'Entrepreneurship', count: discussions.filter(d => d.category === 'Entrepreneurship').length },
    { id: 'Wellness', name: 'Wellness', count: discussions.filter(d => d.category === 'Wellness').length }
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return 'Yesterday';
    return date.toLocaleDateString();
  };

  const handleNewPost = () => {
    if (newPostContent.trim()) {
      console.log('Creating new post:', newPostContent);
      setNewPostContent('');
      setShowNewPost(false);
    }
  };

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
            Bharath Organisation Discussions
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Connect, share ideas, and engage with the community
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowNewPost(!showNewPost)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Start Discussion
        </motion.button>
      </motion.div>

      {/* New Post Form */}
      {showNewPost && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Start a New Discussion
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Discussion title..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <textarea
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="Share your thoughts, ask questions, or start a conversation..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
            <div className="flex items-center justify-between">
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm">
                <option>Select Category</option>
                <option>Academic</option>
                <option>Events</option>
                <option>Career</option>
                <option>Campus Life</option>
                <option>Entrepreneurship</option>
                <option>Wellness</option>
              </select>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowNewPost(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleNewPost}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center"
                >
                  <Send size={16} className="mr-2" />
                  Post
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Discussions List */}
      <div className="space-y-4">
        {filteredDiscussions.map((discussion, index) => (
          <motion.div
            key={discussion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{discussion.avatar}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {discussion.title}
                  </h3>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                    {discussion.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {discussion.content}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {discussion.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs"
                    >
                      <Hash size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Discussion Stats and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {discussion.author}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {formatDate(discussion.created_at)}
                    </div>
                    <div className="flex items-center">
                      <MessageSquare size={14} className="mr-1" />
                      {discussion.replies} replies
                    </div>
                    <div className="flex items-center">
                      <span>Last reply: {formatDate(discussion.latest_reply)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 px-3 py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ThumbsUp size={16} />
                      <span>{discussion.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Reply size={16} />
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredDiscussions.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <MessageSquare size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No discussions found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter criteria, or start a new discussion
          </p>
        </div>
      )}
    </div>
  );
};

export default Discussion;