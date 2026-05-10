import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, ShoppingBag, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Programs: React.FC = () => {
  const { t } = useTranslation();

  const programCards = [
    {
      icon: Cloud,
      title: t('programs.card1Title'),
      description: t('programs.card1Desc'),
      link: '/program/karbon',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: ShoppingBag,
      title: t('programs.card2Title'),
      description: t('programs.card2Desc'),
      link: '/program/hhbk',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: Users,
      title: t('programs.card3Title'),
      description: t('programs.card3Desc'),
      link: '/program',
      gradient: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-4 font-body">
            {t('programs.label')}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-display">
            {t('programs.heading')}
          </h2>
          <p className="text-lg text-forest-light/80 max-w-2xl mx-auto font-body">
            {t('programs.subheading')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programCards.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-forest-green/40 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-forest-green/10 p-8 flex flex-col items-center text-center"
            >
              <div className={`bg-gradient-to-br ${item.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-forest-light/70 text-sm leading-relaxed mb-6 font-body flex-grow">
                {item.description}
              </p>
              <div className="flex items-center text-forest-green font-medium text-sm group-hover:text-gold transition-colors">
                <span>{t('common.learnMore')}</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/program"
            className="inline-flex items-center space-x-2 border-2 border-forest-green/50 text-forest-light hover:border-gold hover:text-gold px-8 py-3 rounded-full text-base font-semibold transition-all duration-300"
          >
            <span>{t('programs.viewAllPrograms')}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;
