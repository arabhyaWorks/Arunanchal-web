import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './homepage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import SplashScreen from './components/SplashScreen';
import TribeListPage from './pages/TribeListPage';
import VideoPage from './pages/VideoPage';
import AdminDashboard from './components/Admin/AdminDashboard';
import TribePage from './pages/TribePage';
import FestivalsPage from './pages/FestivalsPage';
import MusicPage from './pages/MusicPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2.5 seconds (2s display + 0.5s fade out)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <SplashScreen />}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/tribes" element={<TribeListPage />} />
          <Route path="/videos" element={<VideoPage />} />
          <Route path="/tribepage" element={<TribePage />} />
          <Route path="/festivals" element={<FestivalsPage />} />
          <Route path="/music" element={<MusicPage />} />

                  {/* Admin routes */}
        <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;