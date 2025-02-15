import { useState } from 'react';
import {
  Video,
  Music,
  FileText,
  Filter,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Heart,
  Calendar,
  Clock,
  Utensils,
  BookOpen,
  Newspaper
} from 'lucide-react';

type ContentType = 'all' | 'video' | 'music' | 'story' | 'recipe' | 'book' | 'blog';
type SortBy = 'recent' | 'popular' | 'oldest';

interface Content {
  id: string;
  type: 'video' | 'music' | 'story' | 'recipe' | 'book' | 'blog';
  title: string;
  thumbnail: string;
  views: number;
  likes: number;
  date: string;
  duration?: string;
  tribe: string;
  description?: string;
}

export default function YourContent() {
  const [activeTab, setActiveTab] = useState<ContentType>('all');
  const [sortBy, setSortBy] = useState<SortBy>('recent');
  const [searchQuery, setSearchQuery] = useState('');

  const content: Content[] = [
    {
      id: '1',
      type: 'video',
      title: 'Traditional Dance Performance',
      thumbnail: 'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi1.jpg',
      views: 1250,
      likes: 89,
      date: '2024-01-15',
      duration: '5:30',
      tribe: 'Adi',
      description: 'A showcase of traditional Adi tribal dance forms'
    },
    {
      id: '2',
      type: 'music',
      title: 'Folk Music Collection',
      thumbnail: 'https://indigenous.arunachal.gov.in/upload/tribes/Content/Khamba1.jpg',
      views: 890,
      likes: 45,
      date: '2024-01-20',
      duration: '3:45',
      tribe: 'Khamba',
      description: 'Traditional Khamba folk songs compilation'
    },
    {
      id: '3',
      type: 'story',
      title: 'Tales of Our Ancestors',
      thumbnail: 'https://indigenous.arunachal.gov.in/upload/tribes/Content/nocte1.jpg',
      views: 567,
      likes: 34,
      date: '2024-01-25',
      tribe: 'Nocte',
      description: 'Collection of ancient Nocte folklore'
    },
    {
      id: '4',
      type: 'recipe',
      title: 'PO’ROK Amin',
      thumbnail: 'https://indigenous.arunachal.gov.in/assets/food/Ami.jpeg',
      views: 780,
      likes: 56,
      date: '2024-01-28',
      tribe: 'Apatani',
      description: 'Authentic Apatani-style bamboo shoot preparation'
    },
    {
      id: '5',
      type: 'book',
      title: 'Indigenous Art Forms',
      thumbnail: 'https://indigenous.arunachal.gov.in/upload/tribes/Content/tangsa1.jpg',
      views: 450,
      likes: 28,
      date: '2024-02-01',
      tribe: 'Tangsa',
      description: 'Comprehensive guide to Tangsa art forms'
    },
    {
      id: '6',
      type: 'blog',
      title: 'Festival Season Preparations',
      thumbnail: 'https://indigenous.arunachal.gov.in/upload/tribes/Content/Monpa1.jpg',
      views: 920,
      likes: 67,
      date: '2024-02-05',
      tribe: 'Monpa',
      description: 'Behind the scenes of Monpa festival preparations'
    },
    {
      id: '7',
      type: 'recipe',
      title: 'Zan',
      thumbnail: 'https://indigenous.arunachal.gov.in/assets/food/Za.jpeg',
      views: 645,
      likes: 42,
      date: '2024-02-08',
      tribe: 'Galo',
      description: 'Traditional Galo rice beer preparation process'
    },
    {
      id: '8',
      type: 'music',
      title: 'Harvest Festival Songs',
      thumbnail: 'https://indigenous.arunachal.gov.in/upload/tribes/Content/tutsa1.jpg',
      views: 730,
      likes: 51,
      date: '2024-02-10',
      duration: '4:15',
      tribe: 'Tutsa',
      description: 'Traditional harvest celebration music'
    },
    {
      id: '9',
      type: 'blog',
      title: 'Weaving Traditions',
      thumbnail: 'https://indigenous.arunachal.gov.in/upload/tribes/Content/apatani1.jpg',
      views: 510,
      likes: 38,
      date: '2024-02-12',
      tribe: 'Apatani',
      description: 'Exploring traditional textile patterns'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Content', icon: Filter },
    { id: 'video', label: 'Videos', icon: Video },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'story', label: 'Stories', icon: FileText },
    { id: 'recipe', label: 'Recipes', icon: Utensils },
    { id: 'book', label: 'Books', icon: BookOpen },
    { id: 'blog', label: 'Blogs', icon: Newspaper }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'music': return Music;
      case 'story': return FileText;
      case 'recipe': return Utensils;
      case 'book': return BookOpen;
      case 'blog': return Newspaper;
      default: return FileText;
    }
  };

  const filteredContent = content.filter(item => {
    if (activeTab !== 'all' && item.type !== activeTab) return false;
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'popular':
        return b.views - a.views;
      default:
        return 0;
    }
  });

  const handleDelete = (id: string) => {
    // Handle delete logic
    console.log('Delete content:', id);
  };

  const handleEdit = (id: string) => {
    // Handle edit logic
    console.log('Edit content:', id);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-heading mb-2">Your Content</h1>
        <p className="text-subheading">Manage and track your uploaded content</p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search your content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <label className="text-sm text-subheading">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortBy)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Content Type Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as ContentType)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white'
                : 'bg-white dark:bg-gray-800 text-subheading hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <tab.icon className="h-5 w-5" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedContent.map((item) => {
          const ItemIcon = getIcon(item.type);
          return (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.duration && (
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-white text-xs">
                    {item.duration}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
                  >
                    <Edit className="h-5 w-5 text-white" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
                  >
                    <Trash2 className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Content Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-500/10 to-teal-500/10">
                        <ItemIcon className="h-4 w-4 text-teal-600" />
                      </div>
                      <span className="text-xs font-medium text-teal-600 dark:text-teal-400">
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-heading mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-subheading mb-2">{item.tribe} Tribe</p>
                    {item.description && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <MoreVertical className="h-5 w-5 text-gray-400" />
                  </button>
                </div>

                <div className="flex items-center gap-4 text-sm text-subheading">
                  <div className="flex items-center gap-1.5">
                    <Eye className="h-4 w-4" />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart className="h-4 w-4" />
                    <span>{item.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {sortedContent.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-heading mb-2">No content found</h3>
          <p className="text-subheading">
            {searchQuery
              ? "We couldn't find any content matching your search"
              : "You haven't uploaded any content yet"}
          </p>
        </div>
      )}
    </div>
  );
}