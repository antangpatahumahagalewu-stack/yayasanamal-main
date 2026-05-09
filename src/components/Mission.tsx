import React from 'react';
import { Globe, Users, Handshake, Cloud } from 'lucide-react';

const missionValues = [
  {
    icon: Cloud,
    title: 'Project Karbon',
    description: 'Mitigasi perubahan iklim melalui karbon kredit dari hutan mineral & gambut yang dikelola masyarakat PS.',
  },
  {
    icon: Users,
    title: 'Pemberdayaan Ekonomi',
    description: 'Mendukung pengembangan dan pemasaran hasil hutan bukan kayu untuk kesejahteraan masyarakat.',
  },
  {
    icon: Globe,
    title: 'Pelestarian Hutan',
    description: 'Konservasi hutan mineral dan hutan gambut Kalimantan Tengah melalui pendekatan perhutanan sosial.',
  },
  {
    icon: Handshake,
    title: 'Kemitraan Strategis',
    description: 'Menjembatani masyarakat PS dengan pasar karbon, buyer HHBK, dan mitra ESG untuk dampak berkelanjutan.',
  },
];

const Mission: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Mission Statement */}
          <div>
            <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-4 font-body">
              Misi Kami
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-display">
              Membangun Masa Depan{' '}
              <span className="text-gold">Berkelanjutan</span>
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed font-body">
              <p className="text-lg">
                AntangPatahu Mahaga Lewu (AMAL) adalah yayasan yang berperan sebagai mitra strategis Perhutanan Sosial di Kalimantan Tengah. Kami memfasilitasi Project Karbon dari hutan mineral dan gambut, mendukung pengembangan usaha Hasil Hutan Bukan Kayu (HHBK), serta menyediakan API Licence untuk kebutuhan ESG mitra strategis.
              </p>
              <p>
                Dengan fokus pada project karbon, pemanfaatan hasil hutan bukan kayu, dan kemitraan strategis, kami mendampingi masyarakat di 4 kabupaten Kalimantan Tengah dengan komitmen tinggi terhadap kelestarian alam dan kesejahteraan masyarakat.
              </p>
              <p>
                Kami percaya bahwa kesejahteraan masyarakat dan kelestarian hutan adalah dua sisi mata uang yang tidak terpisahkan — keduanya harus berjalan seiring untuk mencapai pembangunan yang benar-benar berkelanjutan.
              </p>
            </div>
          </div>

          {/* Right - Value Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {missionValues.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-gold/30 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-forest-green/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="h-6 w-6 text-forest-light group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
