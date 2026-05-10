import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Database, Shield, Globe, TrendingUp, Leaf, ArrowRight, Handshake, BarChart3, Lock, RefreshCw, FileCheck, Users, ShoppingBag, Search } from 'lucide-react';
import CarbonParticles from '../components/CarbonParticles';
import { useTranslation, Trans } from 'react-i18next';

const ApiEsg: React.FC = () => {
  const { t } = useTranslation();

  const programSources = [
    {
      icon: Cloud,
      title: t('apiEsg.source1Title'),
      description: t('apiEsg.source1Desc'),
      link: '/program/karbon',
      color: 'from-emerald-500 to-teal-600',
      label: t('apiEsg.source1Label')
    },
    {
      icon: ShoppingBag,
      title: t('apiEsg.source2Title'),
      description: t('apiEsg.source2Desc'),
      link: '/program/hhbk',
      color: 'from-amber-500 to-orange-600',
      label: t('apiEsg.source2Label')
    },
    {
      icon: Search,
      title: t('apiEsg.source3Title'),
      description: t('apiEsg.source3Desc'),
      link: '/program',
      color: 'from-purple-500 to-indigo-600',
      label: t('apiEsg.source3Label')
    }
  ];

  const dataCategories = [
    {
      icon: Cloud,
      title: t('apiEsg.cat1Title'),
      description: t('apiEsg.cat1Desc'),
      metrics: [t('apiEsg.cat1Metric1'), t('apiEsg.cat1Metric2'), t('apiEsg.cat1Metric3'), t('apiEsg.cat1Metric4')],
      programLink: '/program/karbon',
      programLabel: t('apiEsg.cat1ProgLabel')
    },
    {
      icon: Leaf,
      title: t('apiEsg.cat2Title'),
      description: t('apiEsg.cat2Desc'),
      metrics: [t('apiEsg.cat2Metric1'), t('apiEsg.cat2Metric2'), t('apiEsg.cat2Metric3'), t('apiEsg.cat2Metric4')],
      programLink: '/program/karbon',
      programLabel: t('apiEsg.cat2ProgLabel')
    },
    {
      icon: Users,
      title: t('apiEsg.cat3Title'),
      description: t('apiEsg.cat3Desc'),
      metrics: [t('apiEsg.cat3Metric1'), t('apiEsg.cat3Metric2'), t('apiEsg.cat3Metric3'), t('apiEsg.cat3Metric4')],
      programLink: '/program',
      programLabel: t('apiEsg.cat3ProgLabel')
    },
    {
      icon: TrendingUp,
      title: t('apiEsg.cat4Title'),
      description: t('apiEsg.cat4Desc'),
      metrics: [t('apiEsg.cat4Metric1'), t('apiEsg.cat4Metric2'), t('apiEsg.cat4Metric3'), t('apiEsg.cat4Metric4')],
      programLink: '/program/hhbk',
      programLabel: t('apiEsg.cat4ProgLabel')
    }
  ];

  const useCases = [
    {
      icon: BarChart3,
      title: t('apiEsg.useCase1Title'),
      description: t('apiEsg.useCase1Desc'),
      programs: ['/program/karbon', '/program/hhbk']
    },
    {
      icon: Cloud,
      title: t('apiEsg.useCase2Title'),
      description: t('apiEsg.useCase2Desc'),
      programs: ['/program/karbon']
    },
    {
      icon: Globe,
      title: t('apiEsg.useCase3Title'),
      description: t('apiEsg.useCase3Desc'),
      programs: ['/program/hhbk']
    },
    {
      icon: Shield,
      title: t('apiEsg.useCase4Title'),
      description: t('apiEsg.useCase4Desc'),
      programs: ['/program/karbon', '/program']
    },
    {
      icon: FileCheck,
      title: t('apiEsg.useCase5Title'),
      description: t('apiEsg.useCase5Desc'),
      programs: ['/program/karbon']
    },
    {
      icon: RefreshCw,
      title: t('apiEsg.useCase6Title'),
      description: t('apiEsg.useCase6Desc'),
      programs: ['/program/karbon']
    }
  ];

  const apiFeatures = [
    {
      icon: Lock,
      title: t('apiEsg.feature1Title'),
      description: t('apiEsg.feature1Desc')
    },
    {
      icon: Database,
      title: t('apiEsg.feature2Title'),
      description: t('apiEsg.feature2Desc')
    },
    {
      icon: RefreshCw,
      title: t('apiEsg.feature3Title'),
      description: t('apiEsg.feature3Desc')
    },
    {
      icon: Shield,
      title: t('apiEsg.feature4Title'),
      description: t('apiEsg.feature4Desc')
    }
  ];

  const steps = [
    {
      number: '01',
      title: t('apiEsg.step1Title'),
      description: t('apiEsg.step1Desc')
    },
    {
      number: '02',
      title: t('apiEsg.step2Title'),
      description: t('apiEsg.step2Desc')
    },
    {
      number: '03',
      title: t('apiEsg.step3Title'),
      description: t('apiEsg.step3Desc')
    },
    {
      number: '04',
      title: t('apiEsg.step4Title'),
      description: t('apiEsg.step4Desc')
    }
  ];

  return (
    <div className="pt-20">
      <CarbonParticles />
      <section className="relative pt-32 pb-16">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              {t('apiEsg.badge')}
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
              {t('apiEsg.heading1')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-forest-light mt-2">
                {t('apiEsg.heading2')}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed mb-8 animate-fade-in-up font-body">
              <Trans i18nKey="apiEsg.heroDescription" components={{ 1: <strong className="font-semibold text-emerald-200" /> }} />
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { value: '91', label: t('apiEsg.statKelompokPs') },
                { value: '183.531', label: t('apiEsg.statHektar') },
                { value: '4', label: t('apiEsg.statKategori') }
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-black text-gold">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('apiEsg.sumberData')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('apiEsg.tigaPilarApi')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('apiEsg.tigaPilarApiDesc')}
            </p>
          </div>

          <div className="space-y-8">
            {programSources.map((prog, idx) => (
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
                    <div className="bg-white/5 rounded-xl px-4 py-3 inline-block">
                      <span className="text-xs text-gray-400 font-body">{prog.label}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 flex items-center justify-end">
                    <div className="flex items-center text-forest-light font-semibold group-hover:text-gold transition-colors">
                      <span>{t('apiEsg.lihatProgram')}</span>
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
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('apiEsg.kategoriData')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('apiEsg.dataTerverifikasi')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('apiEsg.dataTerverifikasiDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataCategories.map((cat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-5 mb-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <cat.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-2">{cat.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm font-body">{cat.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {cat.metrics.map((metric, midx) => (
                    <div key={midx} className="bg-emerald-900/40 text-emerald-300 px-3 py-2 rounded-lg text-xs font-semibold text-center">
                      {metric}
                    </div>
                  ))}
                </div>
                <Link
                  to={cat.programLink}
                  className="inline-flex items-center gap-1 text-xs text-forest-light hover:text-gold transition-colors group/link"
                >
                  <ArrowRight className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                  <span>{t('apiEsg.sumber')}: {cat.programLabel}</span>
                </Link>
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
              <span className="section-label-text">{t('apiEsg.fiturApi')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('apiEsg.keunggulanApi')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('apiEsg.keunggulanApiDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiFeatures.map((feat, idx) => (
              <div key={idx} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <feat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-black text-white mb-3">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-body">{feat.description}</p>
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
              <span className="section-label-text">{t('apiEsg.useCases')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('apiEsg.siapaMembutuhkan')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('apiEsg.siapaMembutuhkanDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((use, idx) => (
              <div key={idx} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow group-hover:scale-110 transition-transform">
                  <use.icon className="h-7 w-7 text-emerald-700" />
                </div>
                <h3 className="text-lg font-black text-white mb-3">{use.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-body">{use.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {use.programs.map((link, lidx) => {
                    const label = link.includes('karbon') ? t('apiEsg.useCaseLinkKarbon') : link.includes('hhbk') ? t('apiEsg.useCaseLinkHhbk') : t('apiEsg.useCaseLinkProgram');
                    return (
                      <Link key={lidx} to={link} className="text-xs text-forest-light hover:text-gold transition-colors bg-white/5 rounded-full px-3 py-1">
                        {label} →
                      </Link>
                    );
                  })}
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
              <span className="section-label-text">{t('apiEsg.proses')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('apiEsg.caraDapatkan')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('apiEsg.caraDapatkanDesc')}
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-emerald-200" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold relative z-10 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-body">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-300/10 animate-spin-slow" />

        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            {t('apiEsg.dapatkanAkses')}
          </div>

          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            {t('apiEsg.siapIntegrasikan')}
          </h2>
          <p className="text-xl text-emerald-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
            {t('apiEsg.siapIntegrasikanDesc')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kemitraan"
              className="bg-gold text-forest-deep font-black py-4 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:bg-yellow-400 hover:scale-105 inline-flex items-center gap-2"
            >
              <Handshake className="h-5 w-5" />
              {t('apiEsg.dapatkanApiLicence')}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/kontak"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-emerald-700 font-black py-4 px-12 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              {t('apiEsg.konsultasiKebutuhan')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiEsg;
