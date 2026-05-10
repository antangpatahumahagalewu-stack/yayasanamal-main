import React from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, Target, Heart, Users, Globe, Leaf, Shield, TrendingUp } from 'lucide-react';
import CarbonParticles from '../../components/CarbonParticles';


const VisiMisi: React.FC = () => {
  const { t } = useTranslation();

  const visiPoints = [
    {
      icon: Globe,
      title: t('about.visiMisi.visiPointIndonesia.title'),
      description: t('about.visiMisi.visiPointIndonesia.description')
    },
    {
      icon: Users,
      title: t('about.visiMisi.visiPointAdil.title'),
      description: t('about.visiMisi.visiPointAdil.description')
    },
    {
      icon: Heart,
      title: t('about.visiMisi.visiPointEkonomi.title'),
      description: t('about.visiMisi.visiPointEkonomi.description')
    }
  ];

  const misiItems = [
    {
      number: '01',
      title: t('about.visiMisi.misiKarbon.title'),
      description: t('about.visiMisi.misiKarbon.description'),
      details: [
        t('about.visiMisi.misiKarbon.detail1'),
        t('about.visiMisi.misiKarbon.detail2'),
        t('about.visiMisi.misiKarbon.detail3'),
        t('about.visiMisi.misiKarbon.detail4')
      ]
    },
    {
      number: '02',
      title: t('about.visiMisi.misiHHBK.title'),
      description: t('about.visiMisi.misiHHBK.description'),
      details: [
        t('about.visiMisi.misiHHBK.detail1'),
        t('about.visiMisi.misiHHBK.detail2'),
        t('about.visiMisi.misiHHBK.detail3'),
        t('about.visiMisi.misiHHBK.detail4')
      ]
    },
    {
      number: '03',
      title: t('about.visiMisi.misiKemitraan.title'),
      description: t('about.visiMisi.misiKemitraan.description'),
      details: [
        t('about.visiMisi.misiKemitraan.detail1'),
        t('about.visiMisi.misiKemitraan.detail2'),
        t('about.visiMisi.misiKemitraan.detail3'),
        t('about.visiMisi.misiKemitraan.detail4')
      ]
    },
    {
      number: '04',
      title: t('about.visiMisi.misiKonservasi.title'),
      description: t('about.visiMisi.misiKonservasi.description'),
      details: [
        t('about.visiMisi.misiKonservasi.detail1'),
        t('about.visiMisi.misiKonservasi.detail2'),
        t('about.visiMisi.misiKonservasi.detail3'),
        t('about.visiMisi.misiKonservasi.detail4')
      ]
    },
    {
      number: '05',
      title: t('about.visiMisi.misiInovasi.title'),
      description: t('about.visiMisi.misiInovasi.description'),
      details: [
        t('about.visiMisi.misiInovasi.detail1'),
        t('about.visiMisi.misiInovasi.detail2'),
        t('about.visiMisi.misiInovasi.detail3'),
        t('about.visiMisi.misiInovasi.detail4')
      ]
    }
  ];

  const values = [
    {
      icon: Shield,
      title: t('about.visiMisi.valueIntegritas.title'),
      description: t('about.visiMisi.valueIntegritas.description'),
      color: 'bg-emerald-900/50 text-forest-light'
    },
    {
      icon: Users,
      title: t('about.visiMisi.valueKolaborasi.title'),
      description: t('about.visiMisi.valueKolaborasi.description'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Eye,
      title: t('about.visiMisi.valueInovasi.title'),
      description: t('about.visiMisi.valueInovasi.description'),
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Leaf,
      title: t('about.visiMisi.valueKeberlanjutan.title'),
      description: t('about.visiMisi.valueKeberlanjutan.description'),
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: TrendingUp,
      title: t('about.visiMisi.valueDampakTerukur.title'),
      description: t('about.visiMisi.valueDampakTerukur.description'),
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: Globe,
      title: t('about.visiMisi.valueKearifan.title'),
      description: t('about.visiMisi.valueKearifan.description'),
      color: 'bg-orange-100 text-orange-600'
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
              {t('about.visiMisi.badge')}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
              {t('about.visiMisi.title')}
            </h1>
            
            <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed animate-fade-in-up font-body">
              {t('about.visiMisi.heroDescription')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('about.visiMisi.sectionVisi')}</span>
              <div className="section-label-line" />
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 shadow-lg mb-12 border-l-4 border-emerald-600">
              <Eye className="h-12 w-12 text-forest-light mx-auto mb-6" />
              <p className="text-3xl lg:text-4xl font-black text-forest-light leading-tight">
                {t('about.visiMisi.visiStatement')}
              </p>
            </div>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('about.visiMisi.visiSubheading')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {visiPoints.map((point, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-forest-light mb-4 text-center">{point.title}</h3>
                <p className="text-gray-400 leading-relaxed text-center font-body">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('about.visiMisi.sectionMisi')}</span>
              <div className="section-label-line" />
            </div>
            
            <Target className="h-12 w-12 text-forest-light mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-4">
              {t('about.visiMisi.misiHeading')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('about.visiMisi.misiSubheading')}
            </p>
          </div>
          
          <div className="space-y-6">
            {misiItems.map((item, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <div className="inline-flex w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl font-black">{item.number}</span>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-6">
                    <h3 className="text-2xl font-black text-forest-light mb-4">{item.title}</h3>
                    <p className="text-lg text-gray-300 leading-relaxed font-body">{item.description}</p>
                  </div>
                  
                  <div className="lg:col-span-4">
                    <h4 className="font-bold text-forest-light mb-4 text-sm uppercase tracking-wider">{t('about.visiMisi.misiKegiatanUtama')}</h4>
                    <ul className="space-y-3">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-emerald-900/400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                          <span className="text-sm text-gray-400 font-body">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('about.visiMisi.sectionNilaiNilai')}</span>
              <div className="section-label-line" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('about.visiMisi.nilaiHeading')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('about.visiMisi.nilaiSubheading')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${value.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-black text-forest-light mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed font-body">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-28 bg-gradient-to-br from-emerald-800 via-emerald-600 to-teal-500 text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-300/10 animate-spin-slow" />
        
        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            {t('about.visiMisi.ctaBadge')}
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            {t('about.visiMisi.ctaHeading')}
          </h2>
          <p className="text-xl text-emerald-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
            {t('about.visiMisi.ctaDescription')}
          </p>
          
          <div className="flex justify-center">
            <a 
              href="/kemitraan" 
              className="bg-white text-emerald-300 hover:bg-emerald-900/40 font-black py-4 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105"
            >
              {t('about.visiMisi.ctaKemitraan')}
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default VisiMisi;
