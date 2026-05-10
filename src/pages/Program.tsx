import React from 'react';
import { Link } from 'react-router-dom';
import { Users, TreePine, Search, Leaf, Cloud, ShoppingBag, ArrowRight, TrendingUp } from 'lucide-react';
import images from '../assets/images';
import CarbonParticles from '../components/CarbonParticles';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const Program: React.FC = () => {
  const { t } = useTranslation();

  const programSub = [
    {
      icon: Cloud,
      title: t('program.projectKarbonTitle'),
      description: t('program.projectKarbonDesc'),
      items: [t('program.perencanaanPs'), t('program.penanaman'), t('program.perlindungan'), t('program.pemanfaatan')],
      link: '/program/karbon',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: ShoppingBag,
      title: t('program.hhbkTitle'),
      description: t('program.hhbkDesc'),
      items: [t('program.kerajinanPurun'), t('program.maduAren'), t('program.tanamanNipah'), t('program.perikananGambut'), t('program.pemasaranHhbk')],
      link: '/program/hhbk',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Search,
      title: t('program.penelitianTitle'),
      description: t('program.penelitianDesc'),
      items: [t('program.penelitianSpesies'), t('program.teknologiSilvikultur'), t('program.studiIklim'), t('program.inovasiHasilHutan')],
      link: '/program',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const statistik = [
    { value: '91', label: t('program.statKelompokPs'), icon: Users },
    { value: '183.531,99', label: t('program.statHektar'), icon: Leaf },
    { value: '100.000+', label: t('program.statPohon'), icon: TreePine },
    { value: '12', label: t('program.statProgram'), icon: TrendingUp }
  ];

  return (
    <>
      <SEO
        title="Program Perhutanan Sosial — Karbon, HHBK & API ESG"
        description="Program unggulan Yayasan AMAL: Project Karbon dari hutan mineral & gambut, pengembangan HHBK, dan API Licence untuk ESG — bersama 91 Kelompok Perhutanan Sosial."
        url="https://yayasanamal.org/program"
      />
      <CarbonParticles />
      <div className="pt-20">
      <section className="relative pt-32 pb-16">
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              {t('program.badge')}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
              {t('program.heading1')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-forest-light mt-2">
                {t('program.heading2')}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed mb-8 animate-fade-in-up font-body">
              {t('program.heroDescription')}
            </p>

            <div className="flex items-center justify-center animate-scale-in">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl">
                <Users className="h-12 w-12 text-gold" />
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
              <span className="section-label-text">{t('program.sectionLabel')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('program.tigaPilar')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('program.tigaPilarDesc')}
            </p>
          </div>
          
          <div className="space-y-8">
            {programSub.map((prog, idx) => (
              <Link
                key={idx}
                to={prog.link}
                className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-1 flex justify-center">
                    <div className={`bg-gradient-to-br ${prog.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <prog.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-6">
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-gold transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-body">{prog.description}</p>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h4 className="font-bold text-gray-300 mb-4 text-sm uppercase tracking-wider">{t('program.kegiatan')}</h4>
                    <div className="space-y-2">
                      {prog.items.map((item, iidx) => (
                        <div key={iidx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-400 font-body">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 flex items-center justify-end">
                    <div className="flex items-center text-forest-light font-semibold group-hover:text-gold transition-colors">
                      <span>{t('program.selengkapnya')}</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('program.pendekatan')}</span>
                <div className="section-label-line" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-8">
                {t('program.pendekatanHeading1')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">{t('program.pendekatanHeading2')}</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed font-body">
                  {t('program.pendekatanP1')}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-body">
                  {t('program.pendekatanP2')}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-body">
                  {t('program.pendekatanP3')}
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <img
                src={images.teamPhoto.src}
                alt={t('program.teamPhotoAlt')}
                className="relative rounded-3xl shadow-2xl w-full object-cover h-96 lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('program.dampak')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('program.angkaDampak')}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">{t('program.angkaDampakDesc')}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistik.map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-forest-light mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-300/10 animate-spin-slow" />
        
        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            {t('program.terlibat')}
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">{t('program.dukungKami')}</h2>
          <p className="text-xl text-emerald-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
            {t('program.dukungDesc')}
          </p>
          
          <div className="flex justify-center">
            <Link to="/kemitraan" className="bg-white text-emerald-700 hover:bg-emerald-50 font-black py-4 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105">
              {t('program.jadiMitraProgram')}
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Program;
