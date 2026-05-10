import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Zap } from 'lucide-react';
import images from '../../assets/images';
import CarbonParticles from '../../components/CarbonParticles';


const SejarahLatarBelakang: React.FC = () => {
  const { t } = useTranslation();

  const timeline = [
    {
      year: '2025',
      title: t('about.sejarah.timelinePendirian.title'),
      description: t('about.sejarah.timelinePendirian.description'),
      milestone: t('about.sejarah.timelinePendirian.milestone')
    },
    {
      year: '2025',
      title: t('about.sejarah.timelineKickoff.title'),
      description: t('about.sejarah.timelineKickoff.description'),
      milestone: t('about.sejarah.timelineKickoff.milestone')
    },
    {
      year: '2026',
      title: t('about.sejarah.timelineHHBK.title'),
      description: t('about.sejarah.timelineHHBK.description'),
      milestone: t('about.sejarah.timelineHHBK.milestone')
    },
    {
      year: '2026',
      title: t('about.sejarah.timelineAPI.title'),
      description: t('about.sejarah.timelineAPI.description'),
      milestone: t('about.sejarah.timelineAPI.milestone')
    }
  ];

  return (
    <>
      <CarbonParticles />
      <div className="pt-20">
      <section className="relative pt-32 pb-16">
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              {t('about.sejarah.badge')}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
              {t('about.sejarah.title')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-300">
                {t('about.sejarah.titleHighlight')}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed animate-fade-in-up font-body">
              {t('about.sejarah.heroDescription')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('about.sejarah.sectionLatarBelakang')}</span>
                <div className="section-label-line" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-8">
                {t('about.sejarah.headingMengapaBerdiri')}
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed font-body">
                  {t('about.sejarah.latarBelakangText1')}
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed font-body">
                  {t('about.sejarah.latarBelakangText2')}
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed font-body">
                  {t('about.sejarah.latarBelakangText3')}
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <img
                src={images.teamPhoto.src}
                alt={t('about.sejarah.altTimPhoto')}
                className="relative rounded-3xl shadow-2xl w-full object-cover h-96 lg:h-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-6 w-6 text-yellow-300" />
                  <p className="text-3xl font-black">2025</p>
                </div>
                <p className="text-sm font-body">{t('about.sejarah.tahunBerdiri')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('about.sejarah.sectionPerjalananWaktu')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('about.sejarah.headingTonggakPenting')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('about.sejarah.subheadingTonggakPenting')}
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-300 via-emerald-500 to-teal-500" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <Calendar className="h-5 w-5 text-forest-light flex-shrink-0" />
                        <span className="text-3xl font-black text-forest-light">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 mb-4 leading-relaxed font-body">{item.description}</p>
                      <div className="bg-emerald-900/40 text-emerald-300 px-4 py-2 rounded-full text-sm font-bold inline-block border border-emerald-200">
                        {item.milestone}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full border-4 border-white shadow-lg animate-pulse" />
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-300/10 animate-spin-slow" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              {t('about.sejarah.filosofiBadge')}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              {t('about.sejarah.filosofiHeading')}
            </h2>
            <p className="text-xl text-emerald-50/90 max-w-3xl mx-auto leading-relaxed font-body">
              {t('about.sejarah.filosofiDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { word: 'AntangPatahu', meaning: t('about.sejarah.filosofiAntangPatahu.meaning'), desc: t('about.sejarah.filosofiAntangPatahu.desc') },
              { word: 'Mahaga', meaning: t('about.sejarah.filosofiMahaga.meaning'), desc: t('about.sejarah.filosofiMahaga.desc') },
              { word: 'Lewu', meaning: t('about.sejarah.filosofiLewu.meaning'), desc: t('about.sejarah.filosofiLewu.desc') }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-300 group-hover:text-emerald-100 transition-all duration-300 shadow-lg">
                  <span className="text-2xl font-black">{item.word.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.word}</h3>
                <p className="text-gold text-sm font-semibold mb-3">"{item.meaning}"</p>
                <p className="text-sm text-emerald-50/80 font-body">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-emerald-50/80 italic font-body text-lg leading-relaxed">
              {t('about.sejarah.filosofiQuote')}
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default SejarahLatarBelakang;
