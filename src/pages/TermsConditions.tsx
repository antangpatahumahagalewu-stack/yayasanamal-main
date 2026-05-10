import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Globe, BookOpen, AlertTriangle, ExternalLink, Scale, Mail, Phone, MapPin } from 'lucide-react';
import CarbonParticles from '../components/CarbonParticles';
import SEO from '../components/SEO';

const TermsConditions: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: FileText,
      heading: t('terms.section1Heading'),
      description: t('terms.section1Desc'),
    },
    {
      icon: Globe,
      heading: t('terms.section2Heading'),
      description: t('terms.section2Desc'),
      items: [
        t('terms.section2Item1'),
        t('terms.section2Item2'),
        t('terms.section2Item3'),
        t('terms.section2Item4'),
      ]
    },
    {
      icon: BookOpen,
      heading: t('terms.section4Heading'),
      description: t('terms.section4Desc'),
      items: [
        t('terms.section4Item1'),
        t('terms.section4Item2'),
        t('terms.section4Item3'),
        t('terms.section4Item4'),
      ]
    },
    {
      icon: AlertTriangle,
      heading: t('terms.section5Heading'),
      description: t('terms.section5Desc'),
      items: [
        t('terms.section5Item1'),
        t('terms.section5Item2'),
        t('terms.section5Item3'),
        t('terms.section5Item4'),
      ]
    },
    {
      icon: ExternalLink,
      heading: t('terms.section6Heading'),
      description: t('terms.section6Desc'),
      items: [
        t('terms.section6Item1'),
        t('terms.section6Item2'),
        t('terms.section6Item3'),
      ]
    },
    {
      icon: Scale,
      heading: t('terms.section7Heading'),
      description: t('terms.section7Desc'),
    },
  ];

  return (
    <>
      <SEO
        title="Syarat & Ketentuan"
        description="Syarat & Ketentuan penggunaan website Yayasan AMAL — hak kekayaan intelektual, batasan tanggung jawab, dan hukum yang berlaku."
        url="https://yayasanamal.org/terms"
      />
      <CarbonParticles />
      <div className="pt-20">
        <section className="relative pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8 animate-fade-in">
              <FileText className="h-3 w-3" />
              {t('terms.heroBadge')}
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight animate-fade-in-up">
              {t('terms.heroTitle')}
            </h1>
            <p className="text-lg lg:text-xl text-emerald-50/90 leading-relaxed mb-4 animate-fade-in-up font-body">
              {t('terms.heroDesc')}
            </p>
            <p className="text-sm text-white/40 font-body">{t('terms.lastUpdated')}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-white">
                    {section.heading}
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 font-body">
                  {section.description}
                </p>
                {section.items && (
                  <ul className="space-y-3 pl-4">
                    {section.items.map((item, iidx) => (
                      <li key={iidx} className="flex items-start gap-3 text-gray-400 font-body">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-white">
                  {t('terms.section8Heading')}
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 font-body">
                {t('terms.section8Desc')}
              </p>
              <div className="space-y-3 pl-4">
                <div className="flex items-center gap-3 text-gray-400 font-body">
                  <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                  <span>{t('terms.contactEmail')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 font-body">
                  <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                  <span>{t('terms.contactPhone')}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-400 font-body">
                  <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-1" />
                  <span>{t('terms.contactAddress')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsConditions;
