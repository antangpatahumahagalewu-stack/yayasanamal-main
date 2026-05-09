import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const tentangSubmenu = [
    { path: '/tentang/profil', label: 'Profil Yayasan' },
    { path: '/tentang/sejarah', label: 'Sejarah & Latar Belakang' },
    { path: '/tentang/visi-misi', label: 'Visi & Misi' },
    { path: '/tentang/struktur', label: 'Struktur Organisasi' },
    { path: '/tentang/legalitas', label: 'Legalitas & Pengakuan' },
  ];

  const programSubmenu = [
    { path: '/program', label: 'Gambaran Program PS' },
    { path: '/program/karbon', label: 'Project Karbon' },
    { path: '/program/hhbk', label: 'HHBK' },
  ];
  const publikasiSubmenu = [
    { path: '/publikasi/dokumen', label: 'Dokumen & Laporan' },
    { path: '/publikasi/berita', label: 'Berita' },
    { path: '/publikasi/galeri', label: 'Galeri' },
    { path: '/publikasi/faq', label: 'FAQ' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMenuOpen(false); setOpenDropdown(null); }, [location.pathname]);

  const linkClasses = (path: string) =>
    `px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
      location.pathname === path
        ? 'text-gold bg-white/10'
        : 'text-white/80 hover:text-white hover:bg-white/10'
    }`;

  const dropdownLinkClasses = (path: string) =>
    `block px-4 py-2 text-sm transition-colors duration-200 rounded-lg ${
      location.pathname === path
        ? 'text-gold bg-forest-deep/30'
        : 'text-gray-700 hover:text-forest-mid hover:bg-cream'
    }`;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-forest-deep/95 backdrop-blur-md shadow-lg'
          : 'bg-forest-deep/80 backdrop-blur-sm'
      }`}
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
              <span className="text-[10px] lg:text-xs text-white/60 leading-tight hidden sm:block">
                Yayasan AntangPatahu Mahaga Lewu
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className={linkClasses('/')}>Beranda</Link>

            {/* Tentang Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('tentang')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg flex items-center space-x-1 ${
                  location.pathname.startsWith('/tentang')
                    ? 'text-gold bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>Tentang</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {openDropdown === 'tentang' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-in-up">
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
              onMouseEnter={() => setOpenDropdown('program')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg flex items-center space-x-1 ${
                  location.pathname.startsWith('/program')
                    ? 'text-gold bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>Program</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {openDropdown === 'program' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-in-up">
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
              onMouseEnter={() => setOpenDropdown('publikasi')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg flex items-center space-x-1 ${
                  location.pathname.startsWith('/publikasi') || location.pathname.startsWith('/berita') || location.pathname.startsWith('/galeri') || location.pathname.startsWith('/faq')
                    ? 'text-gold bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>Publikasi</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {openDropdown === 'publikasi' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-in-up">
                  {publikasiSubmenu.map((item) => (
                    <Link key={item.path} to={item.path} className={dropdownLinkClasses(item.path)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/kemitraan" className={linkClasses('/kemitraan')}>Kemitraan</Link>
            <Link to="/api-esg" className={linkClasses('/api-esg')}>API & ESG</Link>
            <Link to="/kontak" className={linkClasses('/kontak')}>Kontak</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center ml-4">
            <Link
              to="/kontak"
              className="inline-flex items-center space-x-2 bg-gold text-forest-deep px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors duration-200 shadow-lg shadow-gold/20"
            >
              <Phone className="h-4 w-4" />
              <span>Hubungi Kami</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold transition-colors rounded-lg"
            aria-expanded={isMenuOpen}
            aria-label="Menu navigasi"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-forest-dark border-t border-white/10 shadow-xl">
            <nav className="px-4 pt-4 pb-6 space-y-1">
              <Link to="/" className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === '/' ? 'text-gold bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
                Beranda
              </Link>

              <div className="space-y-1">
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'tentang-mobile' ? null : 'tentang-mobile')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span>Tentang</span>
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
                  <span>Program</span>
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
                  <span>Publikasi</span>
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
                Kemitraan
              </Link>
              <Link to="/api-esg" className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === '/api-esg' ? 'text-gold bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
                API & ESG
              </Link>
              <Link to="/kontak" className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === '/kontak' ? 'text-gold bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
                Kontak
              </Link>

              <div className="pt-3">
                <Link
                  to="/kontak"
                  className="block w-full text-center bg-gold text-forest-deep px-6 py-3 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Hubungi Kami
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
