import { useState } from 'react';
import {
  Award,
  Heart,
  Eye,
  Music,
  Video,
  FileText,
  Crown,
  Star,
  Trophy,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Edit,
  Camera,
  Link as LinkIcon,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

export default function Profile() {
  const [user] = useState({
    firstName: 'Animesh',
    lastName: 'Animesh',
    email: 'animesh11062005@gmail.com',
    mobile: '945262411',
    address: 'India',
    about: 'Passionate about preserving and sharing the rich cultural heritage of Arunachal Pradesh through digital media.',
    tribe: 'Apatani',
    role: 'Creator',
    joinDate: 'January 2024',
    badges: [
      { icon: Heart, label: '100+ Likes', color: 'from-rose-500 to-rose-600' },
      { icon: Eye, label: '10K Views', color: 'from-blue-500 to-blue-600' },
      { icon: Trophy, label: 'Top Contributor', color: 'from-amber-500 to-amber-600' }
    ],
    stats: [
      { icon: Video, label: 'Videos', value: '24' },
      { icon: Music, label: 'Music', value: '36' },
      { icon: FileText, label: 'Stories', value: '12' }
    ],
    socialLinks: {
      facebook: 'https://facebook.com/username',
      twitter: 'https://twitter.com/username',
      instagram: 'https://instagram.com/username',
      youtube: 'https://youtube.com/channel'
    },
    recentActivity: [
      { type: 'upload', content: 'Traditional Dance Video', time: '2 hours ago' },
      { type: 'like', content: 'Folk Music Collection', time: '5 hours ago' },
      { type: 'comment', content: 'Festival Story', time: '1 day ago' }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-600 to-teal-500 rounded-t-2xl"></div>
        
        <div className="relative flex flex-col md:flex-row items-start gap-6 pt-16">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-white p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center text-4xl font-bold text-white">
                {user.firstName[0]}
              </div>
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Camera className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          
          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold text-white">
                {user.firstName} {user.lastName}
              </h2>
              <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full">
                <Crown className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">{user.role}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-subheading mb-4">
              <Star className="h-4 w-4 text-amber-500" />
              <span>{user.tribe} Tribe</span>
              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
              <Calendar className="h-4 w-4 text-gray-400" />
              <span>Joined {user.joinDate}</span>
            </div>

<div className="flex flex-wrap gap-3 mb-6">
  {user.badges.map((badge) => (
    <div
      key={badge.label}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
        badge.color === 'from-rose-500 to-rose-600'
          ? 'bg-gradient-to-r from-rose-500 to-rose-600'
          : badge.color === 'from-blue-500 to-blue-600'
          ? 'bg-gradient-to-r from-blue-500 to-blue-600'
          : 'bg-gradient-to-r from-amber-500 to-amber-600'
      }`}
    >
                  <badge.icon className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">{badge.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all shadow-md hover:shadow-lg"
              >
                <Edit className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>
              
              <div className="flex items-center gap-3">
                {Object.entries(user.socialLinks).map(([platform, url]) => {
                  const Icon = {
                    facebook: Facebook,
                    twitter: Twitter,
                    instagram: Instagram,
                    youtube: Youtube
                  }[platform];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <Icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {user.stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500">
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

      {/* About & Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-bold text-heading mb-4">About</h3>
          <p className="text-subheading leading-relaxed">{user.about}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-bold text-heading mb-4">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-medium text-heading">{user.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20">
                <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Mobile</p>
                <p className="font-medium text-heading">{user.mobile}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                <p className="font-medium text-heading">{user.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-bold text-heading mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {user.recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500">
                {activity.type === 'upload' && <Video className="h-5 w-5 text-white" />}
                {activity.type === 'like' && <Heart className="h-5 w-5 text-white" />}
                {activity.type === 'comment' && <FileText className="h-5 w-5 text-white" />}
              </div>
              <div className="flex-grow">
                <p className="text-heading font-medium">
                  {activity.type === 'upload' && 'Uploaded a new'}
                  {activity.type === 'like' && 'Liked'}
                  {activity.type === 'comment' && 'Commented on'}{' '}
                  {activity.content}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
              </div>
              <LinkIcon className="h-5 w-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Edit Profile Form */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-heading mb-6">Edit Profile</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-heading mb-2">
                  About
                </label>
                <textarea
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-heading mb-2">
                  Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all shadow-md hover:shadow-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}