import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Cookie, Lock, Users, Mail, Phone, MapPin } from 'lucide-react';
import CarbonParticles from '../components/CarbonParticles';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Users,
      heading: t('privacy.section1Heading'),
      description: t('privacy.section1Desc'),
      items: [
        t('privacy.section1Item1'),
        t('privacy.section1Item2'),
        t('privacy.section1Item3'),
        t('privacy.section1Item4'),
        t('privacy.section1Item5'),
      ]
    },
    {
      icon: Mail,
      heading: t('privacy.section2Heading'),
      description: t('privacy.section2Desc'),
      items: [
        t('privacy.section2Item1'),
        t('privacy.section2Item2'),
        t('privacy.section2Item3'),
        t('privacy.section2Item4'),
        t('privacy.section2Item5'),
      ]
    },
    {
      icon: Lock,
      heading: t('privacy.section3Heading'),
      description: t('privacy.section3Desc'),
      items: [
        t('privacy.section3Item1'),
        t('privacy.section3Item2'),
        t('privacy.section3Item3'),
        t('privacy.section3Item4'),
        t('privacy.section3Item5'),
      ]
    },
    {
      icon: Cookie,
      heading: t('privacy.section4Heading'),
      description: t('privacy.section4Desc'),
      items: [
        t('privacy.section4Item1'),
        t('privacy.section4Item2'),
        t('privacy.section4Item3'),
      ],
      note: t('privacy.section4Note')
    },
    {
      icon: Shield,
      heading: t('privacy.section5Heading'),
      description: t('privacy.section5Desc'),
      items: [
        t('privacy.section5Item1'),
        t('privacy.section5Item2'),
        t('privacy.section5Item3'),
      ]
    },
    {
      icon: Users,
      heading: t('privacy.section6Heading'),
      description: t('privacy.section6Desc'),
      items: [
        t('privacy.section6Item1'),
        t('privacy.section6Item2'),
        t('privacy.section6Item3'),
        t('privacy.section6Item4'),
        t('privacy.section6Item5'),
      ]
    },
    {
      icon: Lock,
      heading: t('privacy.section7Heading'),
      descriptionLong: t('privacy.section7Desc')
    },
  ];

  return (
    <>
      <SEO
        title="Kebijakan Privasi"
        description="Kebijakan Privasi Yayasan AMAL — bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda sesuai peraturan yang berlaku."
        url="https://yayasanamal.org/privacy"
      />
      <CarbonParticles />
      <div className="pt-20">
        <section className="relative pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8 animate-fade-in">
              <Shield className="h-3 w-3" />
              {t('privacy.heroBadge')}
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight animate-fade-in-up">
              {t('privacy.heroTitle')}
            </h1>
            <p className="text-lg lg:text-xl text-emerald-50/90 leading-relaxed mb-4 animate-fade-in-up font-body">
              {t('privacy.heroDesc')}
            </p>
            <p className="text-sm text-white/40 font-body">{t('privacy.lastUpdated')}</p>
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
                {section.descriptionLong && (
                  <p className="text-gray-400 leading-relaxed font-body">{section.descriptionLong}</p>
                )}
                {section.note && (
                  <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <p className="text-sm text-emerald-200 font-body">{section.note}</p>
                  </div>
                )}
              </div>
            ))}

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-white">
                  {t('privacy.section8Heading')}
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 font-body">
                {t('privacy.section8Desc')}
              </p>
              <div className="space-y-3 pl-4">
                <div className="flex items-center gap-3 text-gray-400 font-body">
                  <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                  <span>{t('privacy.contactEmail')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 font-body">
                  <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                  <span>{t('privacy.contactPhone')}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-400 font-body">
                  <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-1" />
                  <span>{t('privacy.contactAddress')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
