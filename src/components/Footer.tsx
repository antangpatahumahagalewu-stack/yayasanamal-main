import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
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
                {t('nav.yayasanFull')}
              </span>
            </div>
            </div>
            <p className="text-sm leading-relaxed font-body">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link to="/tentang" className="text-sm hover:text-gold transition-colors font-body">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/program" className="text-sm hover:text-gold transition-colors font-body">{t('footer.programPs')}</Link></li>
              <li><Link to="/program/karbon" className="text-sm hover:text-gold transition-colors font-body">{t('footer.projectCarbon')}</Link></li>
              <li><Link to="/program/hhbk" className="text-sm hover:text-gold transition-colors font-body">{t('footer.hhbk')}</Link></li>
              <li><Link to="/berita" className="text-sm hover:text-gold transition-colors font-body">{t('footer.newsFooter')}</Link></li>
              <li><Link to="/galeri" className="text-sm hover:text-gold transition-colors font-body">{t('footer.galleryFooter')}</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display">{t('footer.mainPrograms')}</h4>
            <ul className="space-y-2">
              <li><span className="text-sm font-body">{t('footer.program1')}</span></li>
              <li><span className="text-sm font-body">{t('footer.program2')}</span></li>
              <li><span className="text-sm font-body">{t('footer.program3')}</span></li>
              <li><span className="text-sm font-body">{t('footer.program4')}</span></li>
              <li><span className="text-sm font-body">{t('footer.program5')}</span></li>
              <li><span className="text-sm font-body">{t('footer.program6')}</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display">{t('footer.contactFooter')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                <p className="text-sm font-body">
                  {t('footer.address1')}<br />
                  {t('footer.address1City')}<br />
                  {t('footer.address1Country')}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                <p className="text-sm font-body">
                  {t('footer.address2')}<br />
                  {t('footer.address2City')}<br />
                  {t('footer.address2Country')}
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
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-forest-light/50 hover:text-gold transition-colors font-body">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/terms" className="text-sm text-forest-light/50 hover:text-gold transition-colors font-body">
                {t('footer.termsConditions')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
