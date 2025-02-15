import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000); // Show splash for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img
        src="https://firebasestorage.googleapis.com/v0/b/kathavachak-95a17.appspot.com/o/Animation1_v2.gif?alt=media&token=b3763f09-a007-44b3-bc46-52b11d555d8c"
        alt="Loading..."
        className="w-80 h-80 object-contain"
      />
    </div>
  );
}