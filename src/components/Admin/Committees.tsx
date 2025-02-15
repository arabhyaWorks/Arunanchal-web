import { useState } from 'react';
import { Users2, Plus, Search, Edit, Trash2, MoreVertical, Mail } from 'lucide-react';

export default function Committees() {
  const committees = [
    {
      id: 1,
      name: 'Cultural Preservation Committee',
      members: 12,
      lead: 'Dr. John Smith',
      status: 'Active',
      lastMeeting: '2024-01-15'
    },
    {
      id: 2,
      name: 'Festival Planning Committee',
      members: 8,
      lead: 'Sarah Johnson',
      status: 'Active',
      lastMeeting: '2024-01-20'
    },
    {
      id: 3,
      name: 'Documentation Committee',
      members: 6,
      lead: 'Michael Brown',
      status: 'Inactive',
      lastMeeting: '2024-01-10'
    }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Committees</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Manage committees and their members</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5" />
          <span>Create Committee</span>
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search committees..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Committees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {committees.map((committee) => (
          <div
            key={committee.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/20">
                  <Users2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {committee.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {committee.members} members
                  </p>
                </div>
              </div>
              <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <MoreVertical className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Committee Lead:</span>
                <span className="font-medium text-gray-900 dark:text-white">{committee.lead}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Status:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  committee.status === 'Active'
                    ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                    : 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                }`}>
                  {committee.status}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Last Meeting:</span>
                <span className="text-gray-900 dark:text-white">
                  {new Date(committee.lastMeeting).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors">
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}