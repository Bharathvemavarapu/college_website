import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Calendar, Trophy, Plus, Search, Filter } from 'lucide-react';

const Clubs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const clubs = [
    {
      id: '1',
      name: 'Bharath Tech Innovation Club',
      description: 'Leading technology club focused on emerging technologies, coding competitions, hackathons, and tech workshops. We organize regular coding bootcamps, AI/ML workshops, and collaborate with industry professionals.',
      logo_url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Technology',
      member_count: 245,
      president_id: 'Arjun Sharma',
      created_at: '2023-08-15T00:00:00Z',
      rating: 4.8,
      upcoming_events: 5,
      achievements: ['Best Tech Club 2024', 'National Hackathon Winners', 'Industry Partnership Award']
    },
    {
      id: '2',
      name: 'Cultural Heritage Society',
      description: 'Celebrating Indian culture through dance, music, drama, and art. We organize cultural festivals, traditional art workshops, classical music concerts, and promote cultural exchange programs.',
      logo_url: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Cultural',
      member_count: 189,
      president_id: 'Priya Nair',
      created_at: '2023-07-20T00:00:00Z',
      rating: 4.9,
      upcoming_events: 3,
      achievements: ['Best Cultural Performance 2024', 'State Level Dance Competition Winners', 'Cultural Ambassador Award']
    },
    {
      id: '3',
      name: 'Bharath Sports Excellence Club',
      description: 'Promoting sports and fitness across all disciplines. We organize inter-college tournaments, fitness training sessions, sports coaching, and maintain state-of-the-art sports facilities.',
      logo_url: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Sports',
      member_count: 167,
      president_id: 'Vikram Singh',
      created_at: '2023-09-10T00:00:00Z',
      rating: 4.7,
      upcoming_events: 4,
      achievements: ['Inter-College Champions 2024', 'Best Sports Club Award', 'National Level Participation']
    },
    {
      id: '4',
      name: 'Entrepreneurship Development Cell',
      description: 'Fostering entrepreneurial spirit among students through startup incubation, business plan competitions, mentorship programs, and industry networking events with successful entrepreneurs.',
      logo_url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Business',
      member_count: 134,
      president_id: 'Sneha Patel',
      created_at: '2023-06-05T00:00:00Z',
      rating: 4.6,
      upcoming_events: 6,
      achievements: ['Best Startup Incubator 2024', 'Successful Funding Facilitation', 'Industry Recognition Award']
    },
    {
      id: '5',
      name: 'Literary and Debate Society',
      description: 'Enhancing communication skills through debates, literary competitions, creative writing workshops, poetry sessions, and public speaking training programs.',
      logo_url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Academic',
      member_count: 98,
      president_id: 'Rahul Gupta',
      created_at: '2023-08-01T00:00:00Z',
      rating: 4.5,
      upcoming_events: 2,
      achievements: ['National Debate Champions', 'Best Literary Club 2024', 'Publication Excellence Award']
    },
    {
      id: '6',
      name: 'Environmental Conservation Club',
      description: 'Promoting environmental awareness through tree plantation drives, waste management initiatives, renewable energy projects, and sustainability workshops for a greener campus.',
      logo_url: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Environment',
      member_count: 156,
      president_id: 'Ananya Krishnan',
      created_at: '2023-07-15T00:00:00Z',
      rating: 4.8,
      upcoming_events: 3,
      achievements: ['Green Campus Award 2024', 'Environmental Excellence Recognition', 'Sustainability Leadership Award']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Clubs', count: clubs.length },
    { id: 'Technology', name: 'Technology', count: clubs.filter(c => c.category === 'Technology').length },
    { id: 'Cultural', name: 'Cultural', count: clubs.filter(c => c.category === 'Cultural').length },
    { id: 'Sports', name: 'Sports', count: clubs.filter(c => c.category === 'Sports').length },
    { id: 'Business', name: 'Business', count: clubs.filter(c => c.category === 'Business').length },
    { id: 'Academic', name: 'Academic', count: clubs.filter(c => c.category === 'Academic').length },
    { id: 'Environment', name: 'Environment', count: clubs.filter(c => c.category === 'Environment').length }
  ];

  const filteredClubs = clubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleJoinClub = (clubId: string) => {
    console.log('Joining club:', clubId);
    // Here you would implement the actual join logic
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
            Bharath Organisation Clubs
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Join vibrant communities and pursue your passions with like-minded peers
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Create Club
        </motion.button>
      </motion.div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search clubs..."
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

      {/* Clubs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club, index) => (
          <motion.div
            key={club.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 relative">
              <img
                src={club.logo_url}
                alt={club.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-medium">
                  {club.category}
                </span>
              </div>
              <div className="absolute top-4 right-4 flex items-center bg-white/90 px-2 py-1 rounded-full">
                <Star size={14} className="text-yellow-500 fill-current mr-1" />
                <span className="text-sm font-medium text-gray-800">{club.rating}</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {club.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {club.description}
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Users size={16} className="mr-2" />
                    {club.member_count} members
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    {club.upcoming_events} events
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>President:</strong> {club.president_id}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Recent Achievements</h4>
                <div className="space-y-1">
                  {club.achievements.slice(0, 2).map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                      <Trophy size={12} className="mr-2 text-yellow-500" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => handleJoinClub(club.id)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Join Club
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredClubs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Users size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No clubs found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Clubs;