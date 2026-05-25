import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, Info, Leaf, BookOpen, Handshake, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { useChatContext } from '../context/ChatContext';

type ScrollState = 'top' | 'scrolling' | 'scrolled';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { isOpen: isChatOpen } = useChatContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState<ScrollState>('top');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isDropdownOpen = openDropdown !== null;

  const handleDropdownEnter = useCallback((name: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(name);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, []);

  const tentangSubmenu = [
    { path: '/tentang/profil', label: t('navSub.tentangProfil') },
    { path: '/tentang/sejarah', label: t('navSub.tentangSejarah') },
    { path: '/tentang/visi-misi', label: t('navSub.tentangVisiMisi') },
    { path: '/tentang/struktur', label: t('navSub.tentangStruktur') },
    { path: '/tentang/legalitas', label: t('navSub.tentangLegalitas') },
  ];

  const programSubmenu = [
    { path: '/program', label: t('navSub.programOverview') },
    { path: '/program/karbon', label: t('navSub.programKarbon') },
    { path: '/program/hhbk', label: t('navSub.programHhbk') },
    { path: '/program/csr', label: t('navSub.programCsr') },
    { path: '/api-esg', label: t('nav.apiEsg') },
  ];
  const publikasiSubmenu = [
    { path: '/publikasi/berita', label: t('navSub.publikasiBerita') },
    { path: '/publikasi/galeri', label: t('navSub.publikasiGaleri') },
    { path: '/publikasi/faq', label: t('navSub.publikasiFaq') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setScrollState('top');
      } else if (window.scrollY < 150) {
        setScrollState('scrolling');
      } else {
        setScrollState('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMenuOpen(false); setOpenDropdown(null); }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const linkClasses = (path: string) =>
    `inline-flex items-center space-x-1 px-2.5 py-1.5 text-[13px] font-medium transition-colors duration-200 rounded-lg ${
      location.pathname === path
        ? 'text-gold bg-white/10'
        : 'text-white/80 hover:text-white hover:bg-white/10'
    }`;

  const dropdownLinkClasses = (path: string) =>
    `block px-4 py-2 text-sm transition-colors duration-200 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis ${
      location.pathname === path
        ? 'text-gold bg-forest-deep/30'
        : 'text-gray-700 hover:text-forest-mid hover:bg-cream'
    }`;

  const headerBgClass = isDropdownOpen
    ? 'bg-forest-deep'
    : scrollState === 'top'
      ? 'bg-transparent'
      : scrollState === 'scrolling'
        ? 'bg-forest-deep/50 backdrop-blur-sm'
        : 'bg-forest-deep/85 backdrop-blur-xl saturate-180 shadow-lg';

  return (
    <header
      className={`fixed top-0 z-50 transition-all duration-500 ${
        isChatOpen ? 'md:w-[calc(100%-420px)]' : 'w-full'
      } ${headerBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo6.png"
              alt="Yayasan AMAL"
              className="h-10 lg:h-12 w-auto transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-white leading-tight font-display">
                YAMAL
              </span>
                <span className="text-[8px] lg:text-[10px] text-white/60 leading-tight hidden sm:block">
                {t('nav.yayasanFull')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className={linkClasses('/')}>
              <Home className="h-3.5 w-3.5" />
              <span>{t('nav.home')}</span>
            </Link>

            {/* Tentang Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('tentang')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`px-2.5 py-1.5 text-[13px] font-medium transition-colors duration-200 rounded-lg flex items-center space-x-1 ${
                  location.pathname.startsWith('/tentang')
                    ? 'text-gold bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Info className="h-3.5 w-3.5" />
                <span>{t('nav.about')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 w-full h-1" />
              {openDropdown === 'tentang' && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-in-up">
                  {tentangSubmenu.map((item) => (
                    <Link key={item.path} to={item.path} className={dropdownLinkClasses(item.path)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Program Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('program')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`px-2.5 py-1.5 text-[13px] font-medium transition-colors duration-200 rounded-lg flex items-center space-x-1 ${
                  location.pathname.startsWith('/program') || location.pathname.startsWith('/api-esg')
                    ? 'text-gold bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Leaf className="h-3.5 w-3.5" />
                <span>{t('nav.programs')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 w-full h-1" />
              {openDropdown === 'program' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-in-up">
                  {programSubmenu.map((item) => (
                    <Link key={item.path} to={item.path} className={dropdownLinkClasses(item.path)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Publikasi Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('publikasi')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`px-2.5 py-1.5 text-[13px] font-medium transition-colors duration-200 rounded-lg flex items-center space-x-1 ${
                  location.pathname.startsWith('/publikasi') || location.pathname.startsWith('/berita') || location.pathname.startsWith('/galeri') || location.pathname.startsWith('/faq')
                    ? 'text-gold bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>{t('nav.publications')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 w-full h-1" />
              {openDropdown === 'publikasi' && (
                <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-in-up">
                  {publikasiSubmenu.map((item) => (
                    <Link key={item.path} to={item.path} className={dropdownLinkClasses(item.path)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/kemitraan" className={linkClasses('/kemitraan')}>
              <Handshake className="h-3.5 w-3.5" />
              <span>{t('nav.partnership')}</span>
            </Link>
            <Link to="/kontak" className={linkClasses('/kontak')}>
              <Mail className="h-3.5 w-3.5" />
              <span>{t('nav.contact')}</span>
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="hidden lg:flex items-center ml-2">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold transition-colors rounded-lg"
            aria-expanded={isMenuOpen}
            aria-label={t('nav.menuLabel')}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-forest-dark border-t border-white/10 shadow-xl">
            <nav className="px-4 pt-4 pb-6 space-y-1">
              <Link to="/" className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === '/' ? 'text-gold bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
                {t('nav.home')}
              </Link>

              <div className="space-y-1">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'tentang-mobile' ? null : 'tentang-mobile')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span>{t('nav.about')}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'tentang-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'tentang-mobile' && (
                  <div className="pl-6 space-y-1">
                    {tentangSubmenu.map((item) => (
                      <Link key={item.path} to={item.path} className={`block px-4 py-2 rounded-lg text-sm transition-colors ${location.pathname === item.path ? 'text-gold' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'program-mobile' ? null : 'program-mobile')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span>{t('nav.programs')}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'program-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'program-mobile' && (
                  <div className="pl-6 space-y-1">
                    {programSubmenu.map((item) => (
                      <Link key={item.path} to={item.path} className={`block px-4 py-2 rounded-lg text-sm transition-colors ${location.pathname === item.path ? 'text-gold' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'publikasi-mobile' ? null : 'publikasi-mobile')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span>{t('nav.publications')}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'publikasi-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'publikasi-mobile' && (
                  <div className="pl-6 space-y-1">
                    {publikasiSubmenu.map((item) => (
                      <Link key={item.path} to={item.path} className={`block px-4 py-2 rounded-lg text-sm transition-colors ${location.pathname === item.path ? 'text-gold' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/kemitraan" className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === '/kemitraan' ? 'text-gold bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
                {t('nav.partnership')}
              </Link>
              <Link to="/kontak" className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === '/kontak' ? 'text-gold bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
                {t('nav.contact')}
              </Link>

              <div className="pt-3 border-t border-white/10">
                <div className="px-2 py-2">
                  <p className="text-xs text-white/40 mb-2 px-2">{t('common.languageLabel')}</p>
                  <LanguageSwitcher />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
