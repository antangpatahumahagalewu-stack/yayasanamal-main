// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import useGoogleAnalytics from './hooks/useGoogleAnalytics';
import Home from './pages/Home';
import TentangKami from './pages/TentangKami';
import Program from './pages/Program';
import Berita from './pages/Berita';
import Galeri from './pages/Galeri';
import Publikasi from './pages/Publikasi';
import Kemitraan from './pages/Kemitraan';
import Karbon from './pages/Karbon';
import Hhbk from './pages/Hhbk';
import ApiEsg from './pages/ApiEsg';
import Donasi from './pages/Donasi';
import Kontak from './pages/Kontak';
import FAQ from './pages/FAQ';

// Import NewsDetail component
import NewsDetail from './pages/NewsDetail';

// New Tentang submenu pages
import ProfilYayasan from './pages/tentang/ProfilYayasan';
import SejarahLatarBelakang from './pages/tentang/SejarahLatarBelakang';
import VisiMisi from './pages/tentang/VisiMisi';
import StrukturOrganisasi from './pages/tentang/StrukturOrganisasi';
import LegalitasPengakuan from './pages/tentang/LegalitasPengakuan';

// Inner component that uses Router hooks
function AppContent() {
  useSmoothScroll();
  useGoogleAnalytics();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* ScrollToTop component - placed inside Router but outside Routes */}
      <ScrollToTop />
      
      <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Tentang submenu routes */}
            <Route path="/tentang/profil" element={<ProfilYayasan />} />
            <Route path="/tentang/sejarah" element={<SejarahLatarBelakang />} />
            <Route path="/tentang/visi-misi" element={<VisiMisi />} />
            <Route path="/tentang/struktur" element={<StrukturOrganisasi />} />
            <Route path="/tentang/legalitas" element={<LegalitasPengakuan />} />
            
            {/* Redirect old tentang route to profil */}
            <Route path="/tentang" element={<ProfilYayasan />} />
            
            <Route path="/program" element={<Program />} />
            <Route path="/program/karbon" element={<Karbon />} />
            <Route path="/program/hhbk" element={<Hhbk />} />
            
            {/* Publikasi submenu routes */}
            <Route path="/publikasi/dokumen" element={<Publikasi />} />
            <Route path="/publikasi/berita" element={<Berita />} />
            <Route path="/publikasi/berita/:id" element={<NewsDetail />} />
            <Route path="/publikasi/galeri" element={<Galeri />} />
            <Route path="/publikasi/faq" element={<FAQ />} />
            
            {/* Redirect old routes to new publikasi structure */}
            <Route path="/publikasi" element={<Publikasi />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/berita/:id" element={<NewsDetail />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/faq" element={<FAQ />} />
            
            <Route path="/kemitraan" element={<Kemitraan />} />
            <Route path="/api-esg" element={<ApiEsg />} />
            <Route path="/donasi" element={<Donasi />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
        
        {/* Footer ditampilkan di semua halaman */}
        <Footer />
    </div>
  );
}

function App() {
  // Service worker disabled for now - can be re-enabled with proper PWA setup
  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.register('/sw.js').catch(() => {});
  //   }
  // }, []);
  
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </Router>
  );
}

export default App;