import {
  Video,
  Music,
  FileText,
  Eye,
  Heart,
  Play,
  TrendingUp,
  Headphones
} from 'lucide-react';

export default function DashboardStats() {
  const uploadStats = [
    {
      icon: Video,
      label: 'Videos Uploaded',
      value: '24',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Music,
      label: 'Music Uploaded',
      value: '36',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: FileText,
      label: 'Stories Published',
      value: '12',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const engagementStats = [
    {
      icon: Eye,
      label: 'Total Views',
      value: '125K',
      change: '+12.5%',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Heart,
      label: 'Total Likes',
      value: '45.2K',
      change: '+8.3%',
      color: 'from-rose-500 to-rose-600'
    },
    {
      icon: Headphones,
      label: 'Total Listens',
      value: '78.9K',
      change: '+15.7%',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const trendingContent = [
    {
      icon: Play,
      label: 'Trending Video',
      title: 'Traditional Dance Performance',
      views: '12.5K',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Music,
      label: 'Trending Audio',
      title: 'Folk Music Collection',
      views: '8.9K',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      label: 'Most Popular Story',
      title: 'Tales of Our Ancestors',
      views: '15.2K',
      color: 'from-fuchsia-500 to-fuchsia-600'
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Upload Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {uploadStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-subheading">{stat.label}</p>
                <h3 className="text-2xl font-bold text-heading">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Engagement Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {engagementStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-heading mb-1">{stat.value}</h3>
            <p className="text-sm text-subheading">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Trending Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingContent.map((content) => (
          <div
            key={content.label}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${content.color}`}>
                <content.icon className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm text-subheading">{content.label}</p>
            </div>
            <h3 className="text-lg font-semibold text-heading mb-2 line-clamp-1">
              {content.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-subheading">
              <Eye className="h-4 w-4" />
              {content.views} views
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}