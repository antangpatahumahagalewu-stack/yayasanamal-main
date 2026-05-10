// App.tsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import useGoogleAnalytics from './hooks/useGoogleAnalytics';

const Home = lazy(() => import('./pages/Home'));
const Program = lazy(() => import('./pages/Program'));
const Berita = lazy(() => import('./pages/Berita'));
const Galeri = lazy(() => import('./pages/Galeri'));
const Publikasi = lazy(() => import('./pages/Publikasi'));
const Kemitraan = lazy(() => import('./pages/Kemitraan'));
const Karbon = lazy(() => import('./pages/Karbon'));
const Hhbk = lazy(() => import('./pages/Hhbk'));
const ApiEsg = lazy(() => import('./pages/ApiEsg'));
const Kontak = lazy(() => import('./pages/Kontak'));
const FAQ = lazy(() => import('./pages/FAQ'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const ProfilYayasan = lazy(() => import('./pages/tentang/ProfilYayasan'));
const SejarahLatarBelakang = lazy(() => import('./pages/tentang/SejarahLatarBelakang'));
const VisiMisi = lazy(() => import('./pages/tentang/VisiMisi'));
const StrukturOrganisasi = lazy(() => import('./pages/tentang/StrukturOrganisasi'));
const LegalitasPengakuan = lazy(() => import('./pages/tentang/LegalitasPengakuan'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
    </div>
  );
}

// Inner component that uses Router hooks
function AppContent() {
  useSmoothScroll();
  useGoogleAnalytics();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* ScrollToTop component - placed inside Router but outside Routes */}
      <ScrollToTop />
      <Analytics />
      
      <Navbar />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
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
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
          </Routes>
          </Suspense>
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