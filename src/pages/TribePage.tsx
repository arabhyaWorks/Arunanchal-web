import { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  History, 
  Music, 
  BookOpen, 
  Palette, 
  Users, 
  ChevronRight, 
  Play, 
  ArrowRight, 
  Music2, 
  Mic, 
  Ambulance as Dance, 
  BookMarked, 
  Shirt, 
  Sparkles, 
  Cake, 
  Hammer, 
  Languages, 
  ScrollText, 
  Image as ImageIcon,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Video from '../video';
import MusicPlayer from '../components/MusicPlayer';
import Books from '../components/Books';
import Foods from '../components/Foods';

// Mock data for the tribe
const tribeData = {
  name: 'Adi Tribe',
  image: 'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi1.jpg',
  about: 'The Adi, formerly known as Abor, are one of the most populous tribes of Arunachal Pradesh. They are believed to have migrated from southern China in the 16th century. The Adi are known for their rich cultural heritage, vibrant festivals, and unique traditions.',
  location: 'East Siang, Upper Siang, Lower Dibang Valley',
  population: '150,000+',
  language: 'Adi language (Tibeto-Burman family)',
  festivals: [
    {
      name: 'Solung',
      date: 'September 1-5',
      description: 'Harvest festival celebrating agricultural abundance',
      image: 'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi2.jpg'
    },
    {
      name: 'Aran',
      date: 'March 7',
      description: 'Spring festival marking the new year',
      image: 'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi3.jpg'
    },
    {
      name: 'Etor',
      date: 'January 15',
      description: 'Festival of social bonding and community feast',
      image: 'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi4.jpg'
    }
  ],
  history: `The Adi tribe has a rich historical background dating back several centuries. They are known for their strong administrative system called "Kebang" which serves as a traditional court. The tribe has played a significant role in preserving the ecological balance of their region through sustainable practices.

The Kebang system is particularly noteworthy as it demonstrates the democratic principles that have been part of Adi society for generations. This traditional institution handles both judicial and administrative matters, ensuring social harmony and justice within the community.

The Adi people have also maintained a deep connection with their natural environment, developing sophisticated agricultural practices and a profound knowledge of local flora and fauna. Their traditional ecological knowledge has been passed down through generations, contributing to the sustainable management of natural resources in their region.`,
  distribution: {
    mainAreas: ['East Siang District', 'Upper Siang District', 'Lower Dibang Valley'],
    population: 'Approximately 150,000 people',
    settlements: '20+ major villages'
  },
  gallery: [
    'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi2.jpg',
    'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi3.jpg',
    'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi4.jpg',
    'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi5.jpg',
    'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi6.jpg',
    'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi7.jpg'
  ],
  traditions: {
    dress: {
      title: 'Traditional Dress',
      description: 'The Adi traditional dress is known for its intricate weaving patterns and vibrant colors. Women wear "galuk" (a traditional skirt) and men wear "bukuk" (a sleeveless coat).',
      items: ['Galuk', 'Bukuk', 'Traditional Jewelry', 'Ceremonial Attire']
    },
    crafts: {
      title: 'Arts & Crafts',
      description: 'The tribe is skilled in bamboo and cane crafts, creating various items for daily use and ceremonial purposes.',
      items: ['Bamboo Crafts', 'Weaving', 'Traditional Tools', 'Ceremonial Objects']
    },
    cuisine: {
      title: 'Traditional Cuisine',
      description: 'Adi cuisine is characterized by its use of local ingredients, fermented foods, and unique preparation methods.',
      items: ['Apong (Rice Beer)', 'Adi Style Pork', 'Bamboo Shoot Dishes', 'Traditional Preserves']
    }
  }
};

const culturalElements = [
  { icon: Music2, label: 'Music', color: 'from-emerald-500 to-teal-500', count: '24+ Songs' },
  { icon: Mic, label: 'Songs', color: 'from-blue-500 to-cyan-500', count: '36+ Records' },
  { icon: Dance, label: 'Dance', color: 'from-purple-500 to-pink-500', count: '12+ Forms' },
  { icon: BookMarked, label: 'Tales', color: 'from-amber-500 to-orange-500', count: '48+ Stories' },
  { icon: Shirt, label: 'Dresses', color: 'from-yellow-500 to-amber-500', count: '15+ Styles' },
  { icon: Sparkles, label: 'Rituals', color: 'from-indigo-500 to-purple-500', count: '20+ Types' }
];

const musicData = [
  {
    'Music Name': 'Adi Folk Song',
    'Thumb Image Link': 'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi1.jpg',
    'Singer Name': 'Traditional',
    'Tribe Name': 'Adi Tribe',
    'Duration': '03:45',
    'Music Link': 'https://indigenous.arunachal.gov.in/upload/adi/2/December2024/audio/81236KONGKU_RAYO_DANCE_OF_ADI.mp3'
  },
  {
    'Music Name': 'Harvest Celebration',
    'Thumb Image Link': 'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi2.jpg',
    'Singer Name': 'Traditional',
    'Tribe Name': 'Adi Tribe',
    'Duration': '04:20',
    'Music Link': 'https://indigenous.arunachal.gov.in/upload/adi/2/December2024/audio/81237TRIBAL_SONG.mp3'
  },
  {
    'Music Name': 'Festival Rhythms',
    'Thumb Image Link': 'https://indigenous.arunachal.gov.in/upload/tribes/Content/adi3.jpg',
    'Singer Name': 'Traditional',
    'Tribe Name': 'Adi Tribe',
    'Duration': '05:15',
    'Music Link': 'https://indigenous.arunachal.gov.in/upload/adi/2/December2024/audio/81238ADI_FESTIVAL_SONG.mp3'
  }
];

export default function TribePage() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showHistoryFull, setShowHistoryFull] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Header */}
      <Header />

      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[70vh] overflow-hidden mt-[100px]">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${tribeData.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
        </motion.div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-900/90 to-transparent z-10">
          <div className="max-w-7xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {tribeData.name}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center text-white/90 gap-4"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                <MapPin className="h-4 w-4" />
                <span>{tribeData.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                <Users className="h-4 w-4" />
                <span>{tribeData.population}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                <Languages className="h-4 w-4" />
                <span>{tribeData.language}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Navigation Pills */}
        <div className="absolute -bottom-16 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-2 overflow-x-auto scrollbar-hide"
            >
              {['about', 'gallery', 'festivals', 'history', 'distribution', 'videos', 'music', 'books', 'food'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                    ${activeSection === section
                      ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About the Tribe</h2>
                <p className="text-gray-500 dark:text-gray-400">Learn about our rich heritage</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {tribeData.about}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(tribeData.traditions).map(([key, value]) => (
                <div key={key} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <ul className="space-y-1">
                    {value.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-teal-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl p-8 shadow-md text-white relative overflow-hidden"
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/20 rounded-full translate-x-1/3 translate-y-1/3" />
            </div>
            
            <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
            <div className="grid grid-cols-2 gap-6 relative">
              <div>
                <p className="text-sm text-white/80">Population</p>
                <p className="text-2xl font-bold">{tribeData.population}</p>
              </div>
              <div>
                <p className="text-sm text-white/80">Language Family</p>
                <p className="text-2xl font-bold">Tibeto-Burman</p>
              </div>
              <div>
                <p className="text-sm text-white/80">Major Festivals</p>
                <p className="text-2xl font-bold">{tribeData.festivals.length}</p>
              </div>
              <div>
                <p className="text-sm text-white/80">Main Districts</p>
                <p className="text-2xl font-bold">{tribeData.distribution.mainAreas.length}</p>
              </div>
              <div>
                <p className="text-sm text-white/80">Traditional Court</p>
                <p className="text-2xl font-bold">Kebang</p>
              </div>
              <div>
                <p className="text-sm text-white/80">Primary Occupation</p>
                <p className="text-2xl font-bold">Agriculture</p>
              </div>
              <div>
                <p className="text-sm text-white/80">Cultural Forms</p>
                <p className="text-2xl font-bold">25+</p>
              </div>
              <div>
                <p className="text-sm text-white/80">Sacred Sites</p>
                <p className="text-2xl font-bold">12+</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Festival Calendar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-md mt-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Festival Calendar</h2>
              <p className="text-gray-500 dark:text-gray-400">Annual celebrations and events</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {tribeData.festivals.map((festival, index) => (
              <motion.div
                key={festival.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-xl bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 hover:shadow-lg transition-all border border-purple-100/50 dark:border-purple-700/30"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {festival.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {festival.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                      <Calendar className="h-4 w-4" />
                      <span>{festival.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* History Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                <History className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Historical Background
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our journey through time
                </p>
              </div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className={`relative ${!showHistoryFull && 'max-h-48 overflow-hidden'}`}>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {tribeData.history}
                </p>
                {!showHistoryFull && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-800 to-transparent" />
                )}
              </div>
              <button
                onClick={() => setShowHistoryFull(!showHistoryFull)}
                className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                {showHistoryFull ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </motion.div>

          {/* Distribution Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-md"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Geographic Distribution
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Where our community thrives
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(tribeData.distribution).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 border border-teal-100/50 dark:border-teal-700/30"
                >
                  <h3 className="text-lg font-semibold text-teal-900 dark:text-teal-300 mb-3">
                    {key.split(/(?=[A-Z])/).join(' ')}
                  </h3>
                  <div className="space-y-2">
                    {Array.isArray(value) ? (
                      value.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {item}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300">
                        {value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-md"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                <ImageIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Photo Gallery
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Visual journey through our culture
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {tribeData.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${tribeData.name} Gallery ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-sm font-medium">
                      View Image
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6 mt-6">
          {/* Videos Section */}
          <motion.div 
            id="videos" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-md mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                <Play className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {tribeData.name} Videos
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Watch our traditions come alive
                </p>
              </div>
            </div>
            <Video />
          </motion.div>
          
          {/* Music Section */}
          <motion.div 
            id="music" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-md mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                <Music className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {tribeData.name} Music
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Experience our traditional melodies
                </p>
              </div>
            </div>
            <MusicPlayer songs={musicData} />
          </motion.div>

          {/* Books Section */}
          <div id="books" className="mb-12">
            <Books />
          </div>

          {/* Food Section */}
          <div id="food">
            <Foods />
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery Preview"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}