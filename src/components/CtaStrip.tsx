import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Handshake, ArrowRight, Leaf } from 'lucide-react';

const CtaStrip: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full border-2 border-white/30 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border border-white/20 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-display">
          Mari Bergabung Melestarikan Hutan & Mendukung Project Karbon
        </h2>
        <p className="text-xl text-forest-light/90 max-w-2xl mx-auto mb-10 font-body">
          Setiap kontribusi Anda mendukung project karbon dari hutan mineral dan gambut, memberdayakan masyarakat Perhutanan Sosial di Kalimantan Tengah.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/donasi"
            className="group inline-flex items-center justify-center space-x-2 bg-gold text-forest-deep px-8 py-4 rounded-full text-base font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-xl shadow-black/20 hover:scale-105"
          >
            <Heart className="h-5 w-5" />
            <span>Donasi Sekarang</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/program/karbon"
            className="group inline-flex items-center justify-center space-x-2 border-2 border-white/60 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105"
          >
            <Leaf className="h-5 w-5" />
            <span>Project Karbon</span>
          </Link>
          <Link
            to="/kemitraan"
            className="group inline-flex items-center justify-center space-x-2 border-2 border-white/60 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105"
          >
            <Handshake className="h-5 w-5" />
            <span>Jadi Mitra</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaStrip;
