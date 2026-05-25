import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Heart, TrendingUp, Users, Globe, Target, Building2 } from 'lucide-react';
import CarbonParticles from '../components/CarbonParticles';
import SEO from '../components/SEO';
import LocalNav from '../components/LocalNav';
import { useTranslation } from 'react-i18next';

const csrNavItems = [
  { label: 'Ikhtisar', anchorId: 'csr-overview' },
  { label: 'Skema', anchorId: 'csr-skema' },
  { label: 'Mekanisme', anchorId: 'csr-mekanisme' },
];

const Csr: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="CSR Perhutanan Sosial"
        description="Program CSR untuk masyarakat Perhutanan Sosial di Kalimantan Tengah — sinergi antara korporasi, masyarakat, dan kelestarian hutan."
        url="https://yayasanamal.org/program/csr"
      />
      <CarbonParticles />
      <LocalNav items={csrNavItems} />
      <div className="pt-20">
        <section id="csr-overview" className="relative pt-32 pb-16">
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                {t('csr.badge')}
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
                {t('csr.heading1')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-forest-light mt-2">
                  {t('csr.heading2')}
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed mb-8 animate-fade-in-up font-body">
                {t('csr.heroDesc')}
              </p>

              <div className="flex items-center justify-center animate-scale-in">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl">
                  <Handshake className="h-12 w-12 text-gold" />
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
                <span className="section-label-text">{t('csr.apaItuTitle')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('csr.apaItuHeading')}</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-body">{t('csr.apaItuDesc')}</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    {i === 1 && <Target className="h-7 w-7 text-white" />}
                    {i === 2 && <TrendingUp className="h-7 w-7 text-white" />}
                    {i === 3 && <Globe className="h-7 w-7 text-white" />}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{t(`csr.point${i}Title`)}</h3>
                  <p className="text-sm text-gray-400 font-body leading-relaxed">{t(`csr.point${i}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="csr-skema" className="py-24 bg-white/[0.02]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('csr.skemaTitle')}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('csr.skemaHeading')}</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">{t('csr.skemaDesc')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className={`bg-gradient-to-br ${i === 1 ? 'from-emerald-500 to-teal-600' : i === 2 ? 'from-amber-500 to-orange-600' : 'from-blue-500 to-indigo-600'} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {i === 1 && <Heart className="h-8 w-8 text-white" />}
                    {i === 2 && <Users className="h-8 w-8 text-white" />}
                    {i === 3 && <Building2 className="h-8 w-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{t(`csr.skema${i}Title`)}</h3>
                  <p className="text-gray-400 leading-relaxed font-body">{t(`csr.skema${i}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="csr-mekanisme" className="py-24">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('csr.mekanismeTitle')}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('csr.mekanismeHeading')}</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-lg">
                    {i}
                  </div>
                  <h4 className="font-bold text-white mb-1">{t(`csr.step${i}`)}</h4>
                  <p className="text-xs text-gray-400 font-body">{t(`csr.step${i}Desc`)}</p>
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
              {t('csr.ctaLabel')}
            </div>

            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">{t('csr.ctaTitle')}</h2>
            <p className="text-xl text-emerald-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
              {t('csr.ctaDesc')}
            </p>

            <div className="flex justify-center">
              <Link to="/kemitraan" className="bg-white text-emerald-700 hover:bg-emerald-50 font-black py-4 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105">
                {t('csr.ctaButton')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Csr;
