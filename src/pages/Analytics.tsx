import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Calendar, Trophy, Target, Activity, PieChart } from 'lucide-react';

const Analytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const analyticsData = {
    overview: {
      totalStudents: 5234,
      activeClubs: 18,
      eventsThisMonth: 24,
      achievementsEarned: 156,
      engagementRate: 87.5,
      averageGPA: 8.2
    },
    trends: {
      studentGrowth: [
        { month: 'Jan', students: 4800, events: 18, engagement: 82 },
        { month: 'Feb', students: 4950, events: 22, engagement: 84 },
        { month: 'Mar', students: 5100, events: 20, engagement: 86 },
        { month: 'Apr', students: 5200, events: 25, engagement: 85 },
        { month: 'May', students: 5234, events: 24, engagement: 87.5 }
      ]
    },
    clubPerformance: [
      { name: 'Tech Innovation Club', members: 245, events: 8, engagement: 92, growth: 15 },
      { name: 'Cultural Society', members: 189, events: 6, engagement: 89, growth: 12 },
      { name: 'Sports Club', members: 167, events: 10, engagement: 85, growth: 8 },
      { name: 'Entrepreneurship Cell', members: 134, events: 5, engagement: 88, growth: 20 },
      { name: 'Literary Society', members: 98, events: 4, engagement: 83, growth: 5 },
      { name: 'Environmental Club', members: 156, events: 7, engagement: 90, growth: 18 }
    ],
    academicPerformance: {
      departments: [
        { name: 'Computer Science', students: 1200, avgGPA: 8.5, passRate: 95 },
        { name: 'Electronics', students: 980, avgGPA: 8.2, passRate: 92 },
        { name: 'Mechanical', students: 850, avgGPA: 8.0, passRate: 90 },
        { name: 'Civil', students: 720, avgGPA: 7.8, passRate: 88 },
        { name: 'Management', students: 650, avgGPA: 8.3, passRate: 94 },
        { name: 'Liberal Arts', students: 450, avgGPA: 8.1, passRate: 91 }
      ]
    },
    eventAnalytics: {
      categories: [
        { name: 'Academic', count: 8, attendance: 1250, satisfaction: 4.6 },
        { name: 'Cultural', count: 6, attendance: 980, satisfaction: 4.8 },
        { name: 'Sports', count: 5, attendance: 750, satisfaction: 4.5 },
        { name: 'Workshops', count: 3, attendance: 420, satisfaction: 4.7 },
        { name: 'Meetings', count: 2, attendance: 180, satisfaction: 4.2 }
      ]
    }
  };

  const getGrowthColor = (growth: number) => {
    if (growth > 15) return 'text-green-600 dark:text-green-400';
    if (growth > 10) return 'text-blue-600 dark:text-blue-400';
    if (growth > 5) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getPerformanceColor = (rate: number) => {
    if (rate >= 90) return 'bg-green-500';
    if (rate >= 80) return 'bg-blue-500';
    if (rate >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
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
            Bharath Organisation Analytics
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive insights and performance metrics for data-driven decisions
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </motion.div>

      {/* Key Metrics Overview */}
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
              <Users size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.overview.totalStudents.toLocaleString()}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Students</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
              <Target size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.overview.activeClubs}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Clubs</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
              <Calendar size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.overview.eventsThisMonth}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Events This Month</h3>
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
              {analyticsData.overview.achievementsEarned}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Achievements</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg">
              <Activity size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.overview.engagementRate}%
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Engagement Rate</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg">
              <TrendingUp size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.overview.averageGPA}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Average GPA</h3>
        </motion.div>
      </div>

      {/* Main Analytics Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Club Performance */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Club Performance Analytics
            </h3>
            <BarChart3 size={20} className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {analyticsData.clubPerformance.map((club, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">{club.name}</h4>
                  <span className={`text-sm font-medium ${getGrowthColor(club.growth)}`}>
                    +{club.growth}% growth
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Members</span>
                    <div className="font-semibold text-gray-900 dark:text-white">{club.members}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Events</span>
                    <div className="font-semibold text-gray-900 dark:text-white">{club.events}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Engagement</span>
                    <div className="font-semibold text-gray-900 dark:text-white">{club.engagement}%</div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getPerformanceColor(club.engagement)}`}
                      style={{ width: `${club.engagement}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Academic Performance by Department */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Academic Performance by Department
            </h3>
            <PieChart size={20} className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {analyticsData.academicPerformance.departments.map((dept, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">{dept.name}</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {dept.students} students
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Average GPA</span>
                    <div className="font-semibold text-gray-900 dark:text-white">{dept.avgGPA}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Pass Rate</span>
                    <div className="font-semibold text-gray-900 dark:text-white">{dept.passRate}%</div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getPerformanceColor(dept.passRate)}`}
                      style={{ width: `${dept.passRate}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Event Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Event Analytics & Satisfaction
          </h3>
          <Calendar size={20} className="text-gray-400" />
        </div>
        <div className="grid md:grid-cols-5 gap-6">
          {analyticsData.eventAnalytics.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-6 mb-4">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.count}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {category.name} Events
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {category.attendance} attendees
                </div>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {category.satisfaction}/5.0
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Growth Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Growth Trends & Engagement
          </h3>
          <TrendingUp size={20} className="text-gray-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Month</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Students</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Events</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.trends.studentGrowth.map((data, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-900 dark:text-white">{data.month}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{data.students.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{data.events}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="text-gray-900 dark:text-white mr-2">{data.engagement}%</span>
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          style={{ width: `${data.engagement}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;