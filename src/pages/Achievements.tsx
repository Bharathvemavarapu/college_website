import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Award, Calendar, Users, TrendingUp, Target } from 'lucide-react';

const Achievements: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const achievements = [
    {
      id: '1',
      title: 'National Coding Championship Winner',
      description: 'Won first place in the National Level Coding Championship 2024, competing against 5000+ participants from across India.',
      category: 'Academic',
      date: '2024-12-15',
      level: 'National',
      points: 1000,
      badge: 'gold',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      participants: 5000,
      organization: 'Bharath Organisation Tech Club'
    },
    {
      id: '2',
      title: 'Cultural Excellence Award',
      description: 'Received the Cultural Excellence Award for outstanding performance in classical dance at the Inter-College Cultural Festival.',
      category: 'Cultural',
      date: '2024-11-20',
      level: 'State',
      points: 750,
      badge: 'gold',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      participants: 200,
      organization: 'Bharath Cultural Society'
    },
    {
      id: '3',
      title: 'Sports Championship - Cricket',
      description: 'Led the college cricket team to victory in the Inter-University Sports Championship, scoring the highest runs in the tournament.',
      category: 'Sports',
      date: '2024-10-10',
      level: 'University',
      points: 800,
      badge: 'gold',
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400',
      participants: 16,
      organization: 'Bharath Sports Club'
    },
    {
      id: '4',
      title: 'Best Startup Pitch Award',
      description: 'Won the Best Startup Pitch Award at the National Entrepreneurship Summit for innovative EdTech solution.',
      category: 'Entrepreneurship',
      date: '2024-09-25',
      level: 'National',
      points: 900,
      badge: 'gold',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      participants: 150,
      organization: 'Bharath Entrepreneurship Cell'
    },
    {
      id: '5',
      title: 'Research Paper Publication',
      description: 'Published research paper on "AI in Healthcare" in a peer-reviewed international journal with high impact factor.',
      category: 'Research',
      date: '2024-08-15',
      level: 'International',
      points: 1200,
      badge: 'platinum',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      participants: 1,
      organization: 'Bharath Research Center'
    },
    {
      id: '6',
      title: 'Community Service Excellence',
      description: 'Recognized for exceptional community service through environmental conservation projects and social awareness campaigns.',
      category: 'Social',
      date: '2024-07-30',
      level: 'State',
      points: 600,
      badge: 'silver',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      participants: 50,
      organization: 'Bharath Social Service Club'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Achievements', count: achievements.length },
    { id: 'Academic', name: 'Academic', count: achievements.filter(a => a.category === 'Academic').length },
    { id: 'Cultural', name: 'Cultural', count: achievements.filter(a => a.category === 'Cultural').length },
    { id: 'Sports', name: 'Sports', count: achievements.filter(a => a.category === 'Sports').length },
    { id: 'Entrepreneurship', name: 'Entrepreneurship', count: achievements.filter(a => a.category === 'Entrepreneurship').length },
    { id: 'Research', name: 'Research', count: achievements.filter(a => a.category === 'Research').length },
    { id: 'Social', name: 'Social', count: achievements.filter(a => a.category === 'Social').length }
  ];

  const filteredAchievements = achievements.filter(achievement => 
    selectedCategory === 'all' || achievement.category === selectedCategory
  );

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'platinum': return <Award className="text-purple-500" size={24} />;
      case 'gold': return <Trophy className="text-yellow-500" size={24} />;
      case 'silver': return <Medal className="text-gray-400" size={24} />;
      case 'bronze': return <Star className="text-orange-500" size={24} />;
      default: return <Trophy className="text-blue-500" size={24} />;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'platinum': return 'from-purple-500 to-purple-600';
      case 'gold': return 'from-yellow-500 to-yellow-600';
      case 'silver': return 'from-gray-400 to-gray-500';
      case 'bronze': return 'from-orange-500 to-orange-600';
      default: return 'from-blue-500 to-blue-600';
    }
  };

  const totalPoints = achievements.reduce((sum, achievement) => sum + achievement.points, 0);
  const totalAchievements = achievements.length;
  const goldBadges = achievements.filter(a => a.badge === 'gold').length;
  const nationalLevel = achievements.filter(a => a.level === 'National').length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Bharath Organisation Achievements
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Celebrating excellence and recognizing outstanding accomplishments
        </p>
      </motion.div>

      {/* Achievement Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
              <TrendingUp size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {totalPoints.toLocaleString()}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Points</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
              <Trophy size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {totalAchievements}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Achievements</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg">
              <Medal size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {goldBadges}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Gold Badges</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
              <Target size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {nationalLevel}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">National Level</h3>
        </motion.div>
      </div>

      {/* Category Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
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

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 relative">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-medium">
                  {achievement.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className={`p-2 bg-gradient-to-br ${getBadgeColor(achievement.badge)} rounded-full`}>
                  {getBadgeIcon(achievement.badge)}
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-black/70 text-white rounded-full text-sm font-medium">
                  {achievement.level} Level
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {achievement.description}
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    {new Date(achievement.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Users size={16} className="mr-2" />
                    {achievement.participants} participants
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Organization:</strong> {achievement.organization}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Points Earned: {achievement.points}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    achievement.badge === 'platinum' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' :
                    achievement.badge === 'gold' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    achievement.badge === 'silver' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400' :
                    'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                  }`}>
                    {achievement.badge.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredAchievements.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Trophy size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No achievements found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try selecting a different category
          </p>
        </div>
      )}
    </div>
  );
};

export default Achievements;