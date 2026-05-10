import React from 'react';
import { Globe, Users, Handshake, Cloud } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Mission: React.FC = () => {
  const { t } = useTranslation();

  const missionValues = [
    {
      icon: Cloud,
      title: t('mission.card1Title'),
      description: t('mission.card1Desc'),
    },
    {
      icon: Users,
      title: t('mission.card2Title'),
      description: t('mission.card2Desc'),
    },
    {
      icon: Globe,
      title: t('mission.card3Title'),
      description: t('mission.card3Desc'),
    },
    {
      icon: Handshake,
      title: t('mission.card4Title'),
      description: t('mission.card4Desc'),
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Mission Statement */}
          <div>
            <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-4 font-body">
              {t('mission.label')}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-display">
              {t('mission.heading1')}{' '}
              <span className="text-gold">{t('mission.heading2')}</span>
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed font-body">
              <p className="text-lg">
                {t('mission.paragraph1')}
              </p>
              <p>
                {t('mission.paragraph2')}
              </p>
              <p>
                {t('mission.paragraph3')}
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
