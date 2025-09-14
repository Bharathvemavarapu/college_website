import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, Edit, Camera, Award, BookOpen, Users, Trophy } from 'lucide-react';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const userProfile = {
    personalInfo: {
      name: 'Arjun Sharma',
      email: 'arjun.sharma@bharathorg.edu',
      phone: '+91 9876543210',
      studentId: 'BO2021CSE001',
      department: 'Computer Science Engineering',
      year: '4th Year',
      batch: '2021-2025',
      address: 'Mumbai, Maharashtra, India',
      dateOfBirth: '1999-05-15',
      joinDate: '2021-08-15',
      avatar: '👨‍💻'
    },
    academicInfo: {
      currentGPA: 8.7,
      totalCredits: 180,
      completedCredits: 156,
      rank: 15,
      totalStudents: 1200,
      subjects: [
        { name: 'Advanced Software Engineering', grade: 'A', credits: 4 },
        { name: 'Machine Learning', grade: 'A+', credits: 4 },
        { name: 'Database Management Systems', grade: 'B+', credits: 3 },
        { name: 'Computer Networks', grade: 'A', credits: 3 }
      ]
    },
    clubMemberships: [
      { name: 'Tech Innovation Club', role: 'Vice President', joinDate: '2022-01-15', status: 'Active' },
      { name: 'Coding Club', role: 'Member', joinDate: '2021-09-01', status: 'Active' },
      { name: 'Entrepreneurship Cell', role: 'Core Member', joinDate: '2022-03-10', status: 'Active' }
    ],
    achievements: [
      { title: 'National Coding Championship Winner', date: '2024-12-15', category: 'Academic' },
      { title: 'Best Project Award', date: '2024-10-20', category: 'Technical' },
      { title: 'Leadership Excellence', date: '2024-08-15', category: 'Leadership' },
      { title: 'Community Service Recognition', date: '2024-06-10', category: 'Social' }
    ],
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'React', level: 88 },
      { name: 'Node.js', level: 82 },
      { name: 'Machine Learning', level: 75 },
      { name: 'Database Design', level: 80 }
    ],
    recentActivity: [
      { action: 'Registered for Tech Symposium 2025', date: '2025-01-20', type: 'event' },
      { action: 'Submitted ML Project Assignment', date: '2025-01-18', type: 'academic' },
      { action: 'Joined Environmental Club', date: '2025-01-15', type: 'club' },
      { action: 'Won Coding Competition', date: '2025-01-10', type: 'achievement' }
    ]
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'academic', name: 'Academic', icon: BookOpen },
    { id: 'clubs', name: 'Clubs', icon: Users },
    { id: 'achievements', name: 'Achievements', icon: Trophy }
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
      case 'A': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400';
      case 'B+': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'B': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-400';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'event': return <Calendar size={16} className="text-blue-500" />;
      case 'academic': return <BookOpen size={16} className="text-green-500" />;
      case 'club': return <Users size={16} className="text-purple-500" />;
      case 'achievement': return <Trophy size={16} className="text-yellow-500" />;
      default: return <User size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl">
              {userProfile.personalInfo.avatar}
            </div>
            <button className="absolute -bottom-2 -right-2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Camera size={16} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {userProfile.personalInfo.name}
                </h1>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <User size={14} className="mr-2" />
                    {userProfile.personalInfo.studentId} • {userProfile.personalInfo.department}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    {userProfile.personalInfo.year} • Batch {userProfile.personalInfo.batch}
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(!isEditing)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center"
              >
                <Edit size={16} className="mr-2" />
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
              <BookOpen size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {userProfile.academicInfo.currentGPA}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Current GPA</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
              <Award size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              #{userProfile.academicInfo.rank}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Class Rank</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
              <Users size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {userProfile.clubMemberships.length}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Club Memberships</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
              <Trophy size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {userProfile.achievements.length}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Achievements</h3>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail size={16} className="text-gray-400 mr-3" />
                      <span className="text-gray-600 dark:text-gray-400">{userProfile.personalInfo.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone size={16} className="text-gray-400 mr-3" />
                      <span className="text-gray-600 dark:text-gray-400">{userProfile.personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="text-gray-400 mr-3" />
                      <span className="text-gray-600 dark:text-gray-400">{userProfile.personalInfo.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="text-gray-400 mr-3" />
                      <span className="text-gray-600 dark:text-gray-400">
                        Born: {new Date(userProfile.personalInfo.dateOfBirth).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Skills & Expertise
                  </h3>
                  <div className="space-y-3">
                    {userProfile.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {userProfile.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      {getActivityIcon(activity.type)}
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 dark:text-white">
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(activity.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Academic Tab */}
          {activeTab === 'academic' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Credits Progress</h4>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {userProfile.academicInfo.completedCredits}/{userProfile.academicInfo.totalCredits}
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(userProfile.academicInfo.completedCredits / userProfile.academicInfo.totalCredits) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Class Rank</h4>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    #{userProfile.academicInfo.rank}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    out of {userProfile.academicInfo.totalStudents} students
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Current GPA</h4>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {userProfile.academicInfo.currentGPA}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    out of 10.0
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Current Semester Subjects
                </h3>
                <div className="space-y-3">
                  {userProfile.academicInfo.subjects.map((subject, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{subject.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{subject.credits} Credits</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(subject.grade)}`}>
                        {subject.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Clubs Tab */}
          {activeTab === 'clubs' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Club Memberships
              </h3>
              {userProfile.clubMemberships.map((club, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{club.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>Role: {club.role}</span>
                      <span>Joined: {new Date(club.joinDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    club.status === 'Active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                    {club.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Achievements & Awards
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {userProfile.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg">
                      <Trophy size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{achievement.title}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>{achievement.category}</span>
                        <span>•</span>
                        <span>{new Date(achievement.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;