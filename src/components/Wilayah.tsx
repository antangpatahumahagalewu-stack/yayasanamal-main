import React from 'react';
import { MapPin, Users, Globe } from 'lucide-react';

const kabupaten = [
  { name: 'Gunung Mas', ps: 35, luas: '72.800,99', icon: MapPin },
  { name: 'Kapuas', ps: 25, luas: '56.771', icon: MapPin },
  { name: 'Pulang Pisau', ps: 16, luas: '24.721', icon: MapPin },
  { name: 'Katingan', ps: 15, luas: '29.239', icon: MapPin },
];

const Wilayah: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-600 font-semibold tracking-widest uppercase text-sm mb-4 font-body">
            Wilayah Kerja
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-display">
            4 Kabupaten Dampingan
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-body">
            Yayasan AMAL mendampingi masyarakat di 4 kabupaten di Kalimantan Tengah — mencakup hutan mineral dan hutan gambut — melalui program perhutanan sosial, project karbon, dan pemberdayaan ekonomi berkelanjutan.
          </p>
        </div>

        {/* Kabupaten Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kabupaten.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-gold/30 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-forest-green/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <item.icon className="h-6 w-6 text-forest-light group-hover:text-gold transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-display group-hover:text-gold transition-colors">
                {item.name}
              </h3>
              <div className="text-3xl font-bold text-gold font-display mb-1">
                {item.ps}
              </div>
              <div className="text-sm text-white/60 font-body mb-3">
                Kelompok PS
              </div>
              <div className="w-8 h-px bg-white/10 mx-auto mb-3" />
              <div className="text-xl font-bold text-white/90 font-display">
                {item.luas}
              </div>
              <div className="text-sm text-white/50 font-body">
                Hektar
              </div>
            </div>
          ))}
        </div>

        {/* Summary Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-forest-green/20 rounded-xl flex items-center justify-center">
                <Users className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gold font-display">91</div>
                <div className="text-xs text-white/50 font-body">Kelompok Perhutanan Sosial</div>
              </div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-forest-green/20 rounded-xl flex items-center justify-center">
                <Globe className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gold font-display">183.531,99</div>
                <div className="text-xs text-white/50 font-body">Hektar Total Kawasan Dampingan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wilayah;
