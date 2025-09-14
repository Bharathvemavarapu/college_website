import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, User, Award, TrendingUp, Download, Eye } from 'lucide-react';

const Academics: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState('current');

  const academicData = {
    currentSemester: {
      semester: 'Semester 7',
      year: '2024-25',
      gpa: 8.7,
      credits: 24,
      subjects: [
        {
          id: '1',
          name: 'Advanced Software Engineering',
          code: 'CSE701',
          instructor: 'Dr. Rajesh Kumar',
          credits: 4,
          grade: 'A',
          attendance: 92,
          assignments: { completed: 8, total: 10 },
          nextClass: '2025-01-25T10:00:00Z'
        },
        {
          id: '2',
          name: 'Machine Learning',
          code: 'CSE702',
          instructor: 'Prof. Priya Sharma',
          credits: 4,
          grade: 'A+',
          attendance: 95,
          assignments: { completed: 9, total: 10 },
          nextClass: '2025-01-25T14:00:00Z'
        },
        {
          id: '3',
          name: 'Database Management Systems',
          code: 'CSE703',
          instructor: 'Dr. Amit Patel',
          credits: 3,
          grade: 'B+',
          attendance: 88,
          assignments: { completed: 7, total: 9 },
          nextClass: '2025-01-26T09:00:00Z'
        },
        {
          id: '4',
          name: 'Computer Networks',
          code: 'CSE704',
          instructor: 'Prof. Sunita Nair',
          credits: 3,
          grade: 'A',
          attendance: 90,
          assignments: { completed: 6, total: 8 },
          nextClass: '2025-01-26T11:00:00Z'
        }
      ]
    },
    upcomingAssignments: [
      {
        id: '1',
        title: 'ML Project: Predictive Analytics',
        subject: 'Machine Learning',
        dueDate: '2025-01-30',
        priority: 'high',
        status: 'in-progress'
      },
      {
        id: '2',
        title: 'Database Design Project',
        subject: 'Database Management Systems',
        dueDate: '2025-02-05',
        priority: 'medium',
        status: 'not-started'
      },
      {
        id: '3',
        title: 'Network Security Analysis',
        subject: 'Computer Networks',
        dueDate: '2025-02-10',
        priority: 'low',
        status: 'not-started'
      }
    ],
    examSchedule: [
      {
        id: '1',
        subject: 'Advanced Software Engineering',
        date: '2025-03-15',
        time: '10:00 AM - 1:00 PM',
        venue: 'Bharath Exam Hall A',
        type: 'Final Exam'
      },
      {
        id: '2',
        subject: 'Machine Learning',
        date: '2025-03-18',
        time: '2:00 PM - 5:00 PM',
        venue: 'Bharath Exam Hall B',
        type: 'Final Exam'
      },
      {
        id: '3',
        subject: 'Database Management Systems',
        date: '2025-03-20',
        time: '9:00 AM - 12:00 PM',
        venue: 'Bharath Exam Hall C',
        type: 'Final Exam'
      }
    ]
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
      case 'A': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400';
      case 'B+': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'B': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'low': return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-400';
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
            Academic Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track your academic progress and manage your studies at Bharath Organisation
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="current">Current Semester</option>
            <option value="previous">Previous Semester</option>
            <option value="all">All Semesters</option>
          </select>
        </div>
      </motion.div>

      {/* Academic Overview */}
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
              {academicData.currentSemester.gpa}
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
              <BookOpen size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {academicData.currentSemester.credits}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Credits Enrolled</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
              <Award size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {academicData.currentSemester.subjects.length}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Subjects</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
              <Calendar size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {academicData.upcomingAssignments.length}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Tasks</h3>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Current Subjects */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Current Subjects - {academicData.currentSemester.semester}
          </h2>
          <div className="space-y-4">
            {academicData.currentSemester.subjects.map((subject, index) => (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {subject.name}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGradeColor(subject.grade)}`}>
                        {subject.grade}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span>{subject.code}</span>
                      <span>•</span>
                      <span>{subject.instructor}</span>
                      <span>•</span>
                      <span>{subject.credits} Credits</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Attendance: </span>
                        <span className={`font-medium ${subject.attendance >= 90 ? 'text-green-600' : subject.attendance >= 75 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {subject.attendance}%
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Assignments: </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {subject.assignments.completed}/{subject.assignments.total}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Assignments */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Upcoming Assignments
            </h3>
            <div className="space-y-4">
              {academicData.upcomingAssignments.map((assignment) => (
                <div key={assignment.id} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                    {assignment.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {assignment.subject}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(assignment.priority)}`}>
                      {assignment.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Exam Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Upcoming Exams
            </h3>
            <div className="space-y-4">
              {academicData.examSchedule.map((exam) => (
                <div key={exam.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                    {exam.subject}
                  </h4>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-2" />
                      {new Date(exam.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={12} className="mr-2" />
                      {exam.time}
                    </div>
                    <div className="flex items-center">
                      <User size={12} className="mr-2" />
                      {exam.venue}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Academics;