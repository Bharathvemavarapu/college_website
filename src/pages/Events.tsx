import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Plus, Filter, Search, Star } from 'lucide-react';
import EventCard from '../components/Events/EventCard';

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      id: '1',
      title: 'Annual Tech Symposium 2025',
      description: 'Join industry leaders, tech innovators, and students for a comprehensive technology symposium featuring keynote speeches, workshops, and networking opportunities. Learn about AI, blockchain, cybersecurity, and emerging technologies.',
      date: '2025-02-15',
      time: '9:00 AM - 6:00 PM',
      location: 'Bharath Main Auditorium',
      category: 'academic' as const,
      current_participants: 156,
      max_participants: 300,
      created_by: 'Dr. Rajesh Kumar',
      created_at: '2025-01-15T00:00:00Z',
      image_url: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      title: 'Cultural Heritage Festival',
      description: 'Celebrate the rich cultural diversity of India with traditional dance performances, music concerts, art exhibitions, and authentic cuisine from different states. Experience the unity in diversity that defines our nation.',
      date: '2025-02-20',
      time: '5:00 PM - 11:00 PM',
      location: 'Bharath Cultural Center',
      category: 'cultural' as const,
      current_participants: 234,
      max_participants: 500,
      created_by: 'Cultural Committee',
      created_at: '2025-01-16T00:00:00Z',
      image_url: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '3',
      title: 'Inter-College Sports Championship',
      description: 'Annual sports championship featuring cricket, football, basketball, badminton, and athletics. Compete with the best athletes from various colleges and showcase your sporting excellence.',
      date: '2025-02-25',
      time: '7:00 AM - 7:00 PM',
      location: 'Bharath Sports Complex',
      category: 'sports' as const,
      current_participants: 89,
      max_participants: 200,
      created_by: 'Sports Department',
      created_at: '2025-01-17T00:00:00Z',
      image_url: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '4',
      title: 'Entrepreneurship Workshop Series',
      description: 'Learn from successful entrepreneurs and industry experts about starting your own business, funding strategies, market analysis, and scaling operations. Includes hands-on case studies and mentorship sessions.',
      date: '2025-03-01',
      time: '10:00 AM - 4:00 PM',
      location: 'Innovation Hub, Block A',
      category: 'workshop' as const,
      current_participants: 67,
      max_participants: 100,
      created_by: 'Entrepreneurship Cell',
      created_at: '2025-01-18T00:00:00Z',
      image_url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '5',
      title: 'Research Paper Presentation',
      description: 'Present your research findings to faculty and peers. Categories include Engineering, Science, Management, and Liberal Arts. Winners receive cash prizes and publication opportunities in renowned journals.',
      date: '2025-03-05',
      time: '9:00 AM - 5:00 PM',
      location: 'Research Center',
      category: 'academic' as const,
      current_participants: 45,
      max_participants: 80,
      created_by: 'Research Committee',
      created_at: '2025-01-19T00:00:00Z',
      image_url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '6',
      title: 'Alumni Meet 2025',
      description: 'Reconnect with fellow alumni, share experiences, and network with professionals across various industries. Features career guidance sessions, industry insights, and celebration dinner.',
      date: '2025-03-10',
      time: '4:00 PM - 10:00 PM',
      location: 'Bharath Convention Hall',
      category: 'meeting' as const,
      current_participants: 178,
      max_participants: 400,
      created_by: 'Alumni Association',
      created_at: '2025-01-20T00:00:00Z',
      image_url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', count: events.length },
    { id: 'academic', name: 'Academic', count: events.filter(e => e.category === 'academic').length },
    { id: 'cultural', name: 'Cultural', count: events.filter(e => e.category === 'cultural').length },
    { id: 'sports', name: 'Sports', count: events.filter(e => e.category === 'sports').length },
    { id: 'workshop', name: 'Workshops', count: events.filter(e => e.category === 'workshop').length },
    { id: 'meeting', name: 'Meetings', count: events.filter(e => e.category === 'meeting').length }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleRegister = (eventId: string) => {
    console.log('Registering for event:', eventId);
    // Here you would implement the actual registration logic
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
            Bharath Organisation Events
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover and participate in exciting events, workshops, and activities
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Create Event
        </motion.button>
      </motion.div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search events..."
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

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <EventCard
            key={event.id}
            event={event}
            index={index}
            onRegister={handleRegister}
          />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Calendar size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No events found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Events;