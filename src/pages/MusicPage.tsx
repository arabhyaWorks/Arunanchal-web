import { useState } from 'react';
import { Search, Filter, Music2, Mic, Play, Heart, Clock, ChevronRight, TrendingUp, Calendar, ArrowRight, Radio, Drum, Guitar, Headphones, Music, Sparkles, User, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import MusicPlayer from '../components/MusicPlayer';

interface Song {
  "Music Name": string;
  "Thumb Image Link": string;
  "Singer Name": string;
  "Tribe Name": string;
  "Duration": string;
  "Music Link": string;
  "Category": string;
  "Views": string;
  "Date": string;
}

const songs: Song[] = [
  {
    "Music Name": "Traditional Harvest Song",
    "Thumb Image Link": "https://indigenous.arunachal.gov.in/upload/tribes/Content/adi1.jpg",
    "Singer Name": "Traditional",
    "Tribe Name": "Adi",
    "Duration": "03:45",
    "Music Link": "https://indigenous.arunachal.gov.in/upload/adi/2/December2024/audio/81236KONGKU_RAYO_DANCE_OF_ADI.mp3",
    "Category": "Folk",
    "Views": "2.3K",
    "Date": "2024-01-15"
  },
  {
    "Music Name": "Festival Celebration",
    "Thumb Image Link": "https://indigenous.arunachal.gov.in/upload/tribes/Content/apatani1.jpg",
    "Singer Name": "Traditional",
    "Tribe Name": "Apatani",
    "Duration": "04:20",
    "Music Link": "https://indigenous.arunachal.gov.in/upload/adi/2/December2024/audio/81237TRIBAL_SONG.mp3",
    "Category": "Festival",
    "Views": "1.8K",
    "Date": "2024-01-20"
  },
  {
    "Music Name": "Ritual Chants",
    "Thumb Image Link": "https://indigenous.arunachal.gov.in/upload/tribes/Content/Monpa1.jpg",
    "Singer Name": "Traditional",
    "Tribe Name": "Monpa",
    "Duration": "05:15",
    "Music Link": "https://indigenous.arunachal.gov.in/upload/adi/2/December2024/audio/81238ADI_FESTIVAL_SONG.mp3",
    "Category": "Ritual",
    "Views": "3.1K",
    "Date": "2024-01-25"
  }
];

const tribes = [
  'All Tribes',
  'Adi',
  'Apatani',
  'Galo',
  'Monpa',
  'Nyishi',
  'Tagin',
  'Tangsa'
];

const categories = [
  'All Categories',
  'Folk',
  'Festival',
  'Ritual',
  'Dance',
  'Lullaby'
];

const genres = [
  {
    name: 'Instrumental',
    icon: Guitar,
    color: 'from-purple-500 to-pink-500',
    description: 'Traditional instrumental performances'
  },
  {
    name: 'Vocal',
    icon: Mic,
    color: 'from-blue-500 to-teal-500',
    description: 'Classical vocal renditions'
  },
  {
    name: 'Folk',
    icon: Radio,
    color: 'from-amber-500 to-orange-500',
    description: 'Traditional folk music'
  },
  {
    name: 'Ritual',
    icon: Sparkles,
    color: 'from-emerald-500 to-teal-500',
    description: 'Sacred ceremonial music'
  },
  {
    name: 'Festival',
    icon: Music,
    color: 'from-rose-500 to-pink-500',
    description: 'Celebratory festival songs'
  },
  {
    name: 'Dance',
    icon: Drum,
    color: 'from-indigo-500 to-purple-500',
    description: 'Traditional dance music'
  }
];


const artists = [
  {
    name: "Traditional Singer 1",
    tribe: "Adi",
    image: "https://indigenous.arunachal.gov.in/upload/tribes/Content/adi1.jpg",
    followers: "2.5K",
    songs: "12",
    genre: "Folk"
  },
  // Add more artists as needed
];

export default function MusicPage() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTribe, setSelectedTribe] = useState('All Tribes');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isLiked, setIsLiked] = useState<{ [key: string]: boolean }>({});
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const filteredSongs = songs.filter(song => {
    const matchesSearch = song["Music Name"].toLowerCase().includes(searchQuery.toLowerCase()) ||
                         song["Tribe Name"].toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTribe = selectedTribe === 'All Tribes' || song["Tribe Name"] === selectedTribe;
    const matchesCategory = selectedCategory === 'All Categories' || song["Category"] === selectedCategory;
    return matchesSearch && matchesTribe && matchesCategory;
  });

  const trendingSongs = [...songs].sort((a, b) => 
    parseInt(b.Views.replace('K', '000')) - parseInt(a.Views.replace('K', '000'))
  ).slice(0, 4);

  const newSongs = [...songs].sort((a, b) => 
    new Date(b.Date).getTime() - new Date(a.Date).getTime()
  ).slice(0, 4);

  const toggleLike = (songName: string) => {
    setIsLiked(prev => ({
      ...prev,
      [songName]: !prev[songName]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <div className="pt-32 mt-[100px] pb-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent mb-6">
            Traditional Music Collection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Experience the soul-stirring melodies of Arunachal Pradesh's indigenous tribes
          </p>
        </motion.div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search music..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              value={selectedTribe}
              onChange={(e) => setSelectedTribe(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              {tribes.map(tribe => (
                <option key={tribe} value={tribe}>{tribe}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </motion.div>
      </div>

      {/* Genre Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
            <Headphones className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-heading">Browse by Genre</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {genres.map((genre) => (
            <motion.div
              onClick={() => handleGenreClick(genre.name)}
              key={genre.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`group relative overflow-hidden rounded-2xl p-0.5 transition-all hover:shadow-lg bg-gradient-to-r ${genre.color} cursor-pointer`}
            >
              <div className="relative h-full rounded-[14px] bg-gradient-to-br from-black/10 to-black/30 backdrop-blur-sm p-6">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-white/5 rounded-tr-full" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <genre.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{genre.name}</h3>
                  </div>
                  <p className="text-white/80 text-sm mb-6">{genre.description}</p>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white text-sm transition-colors group">
                    <span>Explore {genre.name}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Artists Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
              <User className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-heading">Featured Artists</h2>
          </div>
          <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
            <span>View All</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-heading mb-1">{artist.name}</h3>
                  <p className="text-sm text-subheading">{artist.tribe} Tribe</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20">
                  <div className="text-lg font-bold text-heading mb-1">{artist.followers}</div>
                  <div className="text-xs text-subheading">Followers</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20">
                  <div className="text-lg font-bold text-heading mb-1">{artist.songs}</div>
                  <div className="text-xs text-subheading">Songs</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Music2 className="h-4 w-4 text-indigo-500" />
                  <span className="text-sm text-subheading">{artist.genre}</span>
                </div>
                <button className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                  View Profile
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Songs/Search Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <Music2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2
            onClick={() => handleGenreClick(genre.name)}
            className="text-2xl font-bold text-heading">
            {searchQuery || selectedTribe !== 'All Tribes' || selectedCategory !== 'All Categories' 
              ? 'Search Results' 
              : 'All Songs'
            }
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSongs.map((song) => (
            <div
              key={song['Music Name']}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-bl-full -z-1"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-teal-500/10 rounded-tr-full -z-1"></div>

              <div className="relative aspect-square overflow-hidden">
                <img
                  src={song['Thumb Image Link']}
                  alt={song['Music Name']}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedSong(song)}
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/80 to-teal-500/80 backdrop-blur-sm p-0.5 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform shadow-xl"
                    >
                      <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center">
                        <Play className="h-10 w-10 text-white fill-current" />
                      </div>
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {song.Duration}
                    </span>
                    <button
                      onClick={() => toggleLike(song["Music Name"])}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          isLiked[song["Music Name"]] ? 'fill-red-500 text-red-500' : 'text-white'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30">
                    {song.Category === 'Instrumental' ? (
                      <Guitar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <Music2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {song.Category}
                  </span>
                </div>

                <h3 className="font-semibold text-heading mb-3 line-clamp-2 text-lg">
                  {song['Music Name']}
                </h3>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-subheading flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    {song['Tribe Name']} Tribe
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSongs.length === 0 && (
          <div className="text-center py-20">
            <Music2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-heading mb-2">
              No songs found
            </h3>
            <p className="text-subheading">
              Try adjusting your search or filters to find what you're looking for
            </p>
          </div>
        )}
      {/* Show other sections only when not searching */}
      {!searchQuery && selectedTribe === 'All Tribes' && selectedCategory === 'All Categories' && (
        <>
          {/* Trending Songs Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-2xl font-bold text-heading">Trending Songs</h2>
              </div>
              <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                <span>View All</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingSongs.map((song) => (
                <div
                  key={song["Music Name"]}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-amber-500/10 rounded-bl-full -z-1"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-500/10 to-amber-500/10 rounded-tr-full -z-1"></div>

                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={song["Thumb Image Link"]}
                      alt={song["Music Name"]}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={() => setSelectedSong(song)}
                          className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500/80 to-amber-500/80 backdrop-blur-sm p-0.5 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform shadow-xl"
                        >
                          <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center">
                            <Play className="h-10 w-10 text-white fill-current" />
                          </div>
                        </button>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {song.Duration}
                        </span>
                        <button
                          onClick={() => toggleLike(song["Music Name"])}
                          className="p-2 hover:bg-white/20 rounded-full transition-colors"
                        >
                          <Heart
                            className={`h-5 w-5 ${
                              isLiked[song["Music Name"]] ? 'fill-red-500 text-red-500' : 'text-white'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 rounded-lg bg-gradient-to-r from-red-50 to-amber-50 dark:from-red-900/30 dark:to-amber-900/30">
                        <TrendingUp className="h-4 w-4 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-xs font-medium text-red-600 dark:text-red-400">
                        Trending
                      </span>
                    </div>

                    <h3 className="font-semibold text-heading mb-3 line-clamp-2 text-lg">
                      {song["Music Name"]}
                    </h3>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-subheading flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        {song["Tribe Name"]} Tribe
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Releases Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-heading">New Releases</h2>
              </div>
              <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                <span>View All</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newSongs.map((song) => (
                <div
                  key={song["Music Name"]}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-bl-full -z-1"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500/10 to-emerald-500/10 rounded-tr-full -z-1"></div>

                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={song["Thumb Image Link"]}
                      alt={song["Music Name"]}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={() => setSelectedSong(song)}
                          className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500/80 to-emerald-500/80 backdrop-blur-sm p-0.5 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform shadow-xl"
                        >
                          <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center">
                            <Play className="h-10 w-10 text-white fill-current" />
                          </div>
                        </button>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {song.Duration}
                        </span>
                        <button
                          onClick={() => toggleLike(song["Music Name"])}
                          className="p-2 hover:bg-white/20 rounded-full transition-colors"
                        >
                          <Heart
                            className={`h-5 w-5 ${
                              isLiked[song["Music Name"]] ? 'fill-red-500 text-red-500' : 'text-white'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30">
                        <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">
                        New Release
                      </span>
                    </div>

                    <h3 className="font-semibold text-heading mb-3 line-clamp-2 text-lg">
                      {song["Music Name"]}
                    </h3>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-subheading flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {song["Tribe Name"]} Tribe
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Music Player */}
      {selectedSong && (
        <MusicPlayer songs={[selectedSong]} />
      )}
            </div> 
    </div>
  );
}