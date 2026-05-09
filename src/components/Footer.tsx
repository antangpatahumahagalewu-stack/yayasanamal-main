import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-deep text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <img 
                  src="/logo6.png" 
                  alt="Yayasan AMAL - AntangPatahu Mahaga Lewu" 
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white leading-tight font-display">AMAL</span>
              <span className="text-xs text-forest-light/60 block leading-tight">
                Yayasan AntangPatahu Mahaga Lewu
              </span>
            </div>
            </div>
            <p className="text-sm leading-relaxed font-body">
              Yayasan AMAL adalah mitra strategis Perhutanan Sosial dalam project karbon, pengembangan usaha HHBK, dan inovasi digital untuk ESG di Kalimantan Tengah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display">Menu Cepat</h4>
            <ul className="space-y-2">
              <li><Link to="/tentang" className="text-sm hover:text-gold transition-colors font-body">Tentang Kami</Link></li>
              <li><Link to="/program" className="text-sm hover:text-gold transition-colors font-body">Program PS</Link></li>
              <li><Link to="/program/karbon" className="text-sm hover:text-gold transition-colors font-body">Project Karbon</Link></li>
              <li><Link to="/program/hhbk" className="text-sm hover:text-gold transition-colors font-body">HHBK</Link></li>
              <li><Link to="/api-esg" className="text-sm hover:text-gold transition-colors font-body">API & ESG</Link></li>
              <li><Link to="/berita" className="text-sm hover:text-gold transition-colors font-body">Berita</Link></li>
              <li><Link to="/galeri" className="text-sm hover:text-gold transition-colors font-body">Galeri</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display">Program Utama</h4>
            <ul className="space-y-2">
              <li><span className="text-sm font-body">Pemanfaatan Hasil Hutan Bukan Kayu (HHBK)</span></li>
              <li><span className="text-sm font-body">Konservasi dan Ekowisata</span></li>
              <li><span className="text-sm font-body">Tata Kelola Hutan Berkelanjutan</span></li>
              <li><span className="text-sm font-body">Rehabilitasi Hutan Berkelanjutan</span></li>
              <li><span className="text-sm font-body">Pemberdayaan Komunitas Hutan</span></li>
              <li><span className="text-sm font-body">Budaya & Tradisi</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                <p className="text-sm font-body">
                  Jl. Kwitang Raya No. 13 Gd. Graha Ketut Mas Agung Lt.4<br />
                  Jakarta Pusat, 10340<br />
                  Indonesia
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                <p className="text-sm font-body">
                  Jl. G. Obos No 80<br />
                  Palangka Raya, 73112<br />
                  Indonesia
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold" />
                <p className="text-sm font-body">+62 823 5173 2449</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold" />
                <p className="text-sm font-body">info@antang.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-dark">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-forest-light/50 font-body">
              © 2026 Yayasan AntangPatahu Mahaga Lewu (AMAL). Seluruh hak cipta dilindungi. Develop by BobyMihing
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-forest-light/50 hover:text-gold transition-colors font-body">
                Kebijakan Privasi
              </Link>
              <Link to="/terms" className="text-sm text-forest-light/50 hover:text-gold transition-colors font-body">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
