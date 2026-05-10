import React from 'react';
import { Users, ArrowRight, Leaf, Cloud, Database, Globe } from 'lucide-react';
import CarbonParticles from '../components/CarbonParticles';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const Kemitraan: React.FC = () => {
  const { t } = useTranslation();

  const partnerTypes = [
    {
      icon: Cloud,
      title: t('kemitraan.partner1Title'),
      description: t('kemitraan.partner1Desc'),
      benefits: [
        t('kemitraan.partner1Benefit1'),
        t('kemitraan.partner1Benefit2'),
        t('kemitraan.partner1Benefit3'),
        t('kemitraan.partner1Benefit4')
      ]
    },
    {
      icon: Users,
      title: t('kemitraan.partner2Title'),
      description: t('kemitraan.partner2Desc'),
      benefits: [
        t('kemitraan.partner2Benefit1'),
        t('kemitraan.partner2Benefit2'),
        t('kemitraan.partner2Benefit3'),
        t('kemitraan.partner2Benefit4')
      ]
    },
    {
      icon: Database,
      title: t('kemitraan.partner3Title'),
      description: t('kemitraan.partner3Desc'),
      benefits: [
        t('kemitraan.partner3Benefit1'),
        t('kemitraan.partner3Benefit2'),
        t('kemitraan.partner3Benefit3'),
        t('kemitraan.partner3Benefit4')
      ]
    }
  ];

  const currentPartners = [
    {
      kabupaten: 'Kapuas',
      type: 'Kapuas',
      groupCount: '22+',
      name: 'Kabupaten Kapuas',
      description: t('kemitraan.partnerKapuasDesc'),
      image: '/logos/kapuas.png'
    },
    {
      kabupaten: 'Gunung Mas',
      type: 'Gunung Mas',
      groupCount: '18+',
      name: 'Kabupaten Gunung Mas',
      description: t('kemitraan.partnerGunungMasDesc'),
      image: '/logos/gunungmas.png'
    },
    {
      kabupaten: 'Katingan',
      type: 'Katingan',
      groupCount: '25+',
      name: 'Kabupaten Katingan',
      description: t('kemitraan.partnerKatinganDesc'),
      image: '/logos/katingan.png'
    },
    {
      kabupaten: 'Pulang Pisau',
      type: 'Pulang Pisau',
      groupCount: '26+',
      name: 'Kabupaten Pulang Pisau',
      description: t('kemitraan.partnerPulangPisauDesc'),
      image: '/logos/pulang_pisau.webp'
    }
  ];

  const steps = [
    {
      number: '01',
      title: t('kemitraan.step1Title'),
      description: t('kemitraan.step1Desc')
    },
    {
      number: '02',
      title: t('kemitraan.step2Title'),
      description: t('kemitraan.step2Desc')
    },
    {
      number: '03',
      title: t('kemitraan.step3Title'),
      description: t('kemitraan.step3Desc')
    },
    {
      number: '04',
      title: t('kemitraan.step4Title'),
      description: t('kemitraan.step4Desc')
    },
    {
      number: '05',
      title: t('kemitraan.step5Title'),
      description: t('kemitraan.step5Desc')
    }
  ];

  return (
    <>
      <SEO
        title="Kemitraan — Project Karbon, HHBK & API ESG"
        description="Yayasan AMAL membuka tiga jalur kemitraan: Project Karbon, Usaha HHBK, dan API Licence untuk ESG. Wilayah kerjasama di 4 kabupaten Kalimantan Tengah dengan 91 Kelompok Perhutanan Sosial."
        url="https://yayasanamal.org/kemitraan"
      />
      <CarbonParticles />
      <div className="pt-20">
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {t('kemitraan.heading')}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                {t('kemitraan.heroDescription')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('kemitraan.impactHeading')}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {t('kemitraan.impactDesc')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group relative bg-gradient-to-br from-emerald-500/20 to-teal-600/20 backdrop-blur-md border border-emerald-400/30 rounded-3xl p-8 text-center hover:border-emerald-300/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 mb-3">91</div>
                  <h3 className="text-xl font-bold text-forest-light mb-3">{t('kemitraan.impactStat1Title')}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{t('kemitraan.impactStat1Desc')}</p>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-gold/20 to-amber-600/20 backdrop-blur-md border border-gold/40 rounded-3xl p-8 text-center hover:border-gold/70 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="bg-gradient-to-br from-gold to-amber-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-300 mb-3">183.531,99</div>
                  <h3 className="text-xl font-bold text-forest-light mb-3">{t('kemitraan.impactStat2Title')}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{t('kemitraan.impactStat2Desc')}</p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-emerald-500/20 to-teal-600/20 backdrop-blur-md border border-emerald-400/30 rounded-3xl p-8 text-center hover:border-emerald-300/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 mb-3">4</div>
                  <h3 className="text-xl font-bold text-forest-light mb-3">{t('kemitraan.impactStat3Title')}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{t('kemitraan.impactStat3Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-forest-light mb-4">
                {t('kemitraan.tigaJalur')}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t('kemitraan.tigaJalurDesc')}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="card p-8 group hover:shadow-xl transition-all">
                  <div className="bg-emerald-900/50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                    <type.icon className="h-8 w-8 text-forest-light group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-forest-light mb-4">{type.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-forest-light">{t('kemitraan.manfaatKemitraan')}:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-forest-light mb-4">
                {t('kemitraan.kelompokPsMitra')}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t('kemitraan.kelompokPsMitraDesc')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentPartners.map((partner, index) => (
                <div key={index} className="card text-center group overflow-hidden">
                  <div className="relative h-48 bg-white/5 flex items-center justify-center p-8">
                    <img
                      src={partner.image}
                      alt={`Logo Kabupaten ${partner.type}`}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      partner.type === 'Kapuas' ? 'bg-blue-100/10 text-blue-400' :
                      partner.type === 'Gunung Mas' ? 'bg-green-100/10 text-green-400' :
                      partner.type === 'Katingan' ? 'bg-purple-100/10 text-purple-400' :
                      'bg-orange-100/10 text-orange-400'
                    }`}>
                      Kab. {partner.type}
                    </span>
                    <h3 className="text-lg font-bold text-forest-light mb-2">{partner.name}</h3>
                    <p className="text-forest-light font-semibold text-xl mb-2">{partner.groupCount} Kelompok PS</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-forest-light mb-4">
                {t('kemitraan.prosesKemitraan')}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t('kemitraan.prosesKemitraanDesc')}
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-600 transform -translate-y-1/2"></div>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative text-center">
                    <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold relative z-10">
                      {step.number}
                    </div>
                    
                    <h3 className="text-lg font-bold text-forest-light mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="card p-12 text-center bg-gradient-to-br from-emerald-900 via-emerald-700 to-teal-600">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {t('kemitraan.ctaHeading')}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('kemitraan.ctaDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:partnership@yayasanamal.org" 
                  className="btn-primary inline-flex items-center justify-center"
                >
                  {t('kemitraan.ajukanKemitraan')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/kontak" 
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  {t('kemitraan.pelajariLebihLanjut')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Kemitraan;
