import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, TreePine, ArrowRight } from 'lucide-react';
import { useFadeInUp } from '../hooks/useAnimations';

const stats = [
  { label: 'Hektar Dilindungi', value: '183.531,99+' },
  { label: 'Pohon Ditanam', value: '100,000+' },
  { label: 'Kelompok Perhutanan Sosial', value: '91+' },
  { label: 'Program Unggulan', value: '12' },
];

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeInUpRef = useFadeInUp(0.5);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">


      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20" ref={fadeInUpRef}>
        {/* Tagline */}
        <p className={`text-forest-light font-medium tracking-widest uppercase text-sm mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Perhutanan Sosial · Project Karbon · HHBK · Gambut
        </p>

        <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-300 font-display ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          Melestarikan Hutan &{' '}
          <span className="bg-gradient-to-r from-gold via-yellow-400 to-forest-light bg-clip-text text-transparent">
            Memberdayakan Masyarakat
          </span>
        </h1>

        <p className={`text-base sm:text-lg lg:text-xl text-forest-light/90 max-w-3xl mx-auto mb-10 leading-relaxed font-body ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000 delay-500`}>
          Mitra strategis Perhutanan Sosial dalam project karbon dari hutan mineral & gambut, pengembangan usaha HHBK, dan inovasi digital untuk ESG di Kalimantan Tengah.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <Link
            to="/donasi"
            className="group inline-flex items-center space-x-2 bg-gold text-forest-deep px-8 py-4 rounded-full text-base font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-xl shadow-gold/25 hover:shadow-2xl hover:shadow-gold/30 hover:scale-105"
          >
            <Heart className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Dukung Program Kami</span>
          </Link>
          <Link
            to="/program"
            className="group inline-flex items-center space-x-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
          >
            <TreePine className="h-5 w-5" />
            <span>Lihat Program Kehutanan</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stats Bar */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/15 pt-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold text-gold font-display group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-forest-light/80 mt-1 font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gold/70 rounded-full mt-2 animate-pulse" />
        </div>
        <span className="text-white/40 text-xs font-body">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
