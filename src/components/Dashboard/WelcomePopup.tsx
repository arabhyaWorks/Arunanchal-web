import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { X } from 'lucide-react';

interface WelcomePopupProps {
  onClose: () => void;
  userName: string;
}

export default function WelcomePopup({ onClose, userName }: WelcomePopupProps) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={200}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
        
        <img
          src="https://indigenous.arunachal.gov.in/assets/images/logo_ap.png"
          alt="Welcome"
          className="w-24 h-24 mx-auto mb-6"
        />
        
        <h2 className="text-2xl font-bold text-heading mb-4">
          Welcome, {userName}! 🎉
        </h2>
        
        <p className="text-subheading mb-6">
          We're excited to have you join our community. Start exploring and sharing the rich cultural heritage of Arunachal Pradesh.
        </p>
        
        <button
          onClick={onClose}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full hover:from-blue-700 hover:to-teal-600 transition-all shadow-md hover:shadow-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}