import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Users, TreePine, Leaf, Shield } from 'lucide-react';
import images from '../../assets/images';
import CarbonParticles from '../../components/CarbonParticles';


const ProfilYayasan: React.FC = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: TreePine,
      title: '183.531,99+',
      subtitle: t('about.profil.highlightPerhutananSosial.subtitle'),
      description: t('about.profil.highlightPerhutananSosial.description')
    },
    {
      icon: Users,
      title: '1,500+',
      subtitle: t('about.profil.highlightKeluargaDiberdayakan.subtitle'),
      description: t('about.profil.highlightKeluargaDiberdayakan.description')
    },
    {
      icon: Leaf,
      title: '12',
      subtitle: t('about.profil.highlightProgramUnggulan.subtitle'),
      description: t('about.profil.highlightProgramUnggulan.description')
    },
    {
      icon: Shield,
      title: '183.531,99+',
      subtitle: t('about.profil.highlightAreaKerja.subtitle'),
      description: t('about.profil.highlightAreaKerja.description')
    }
  ];

  const mainGoals = [
    {
      icon: TreePine,
      title: t('about.profil.goalLestarikan.title'),
      description: t('about.profil.goalLestarikan.description'),
      color: 'bg-emerald-900/50 text-forest-light'
    },
    {
      icon: Users,
      title: t('about.profil.goalPemberdayaan.title'),
      description: t('about.profil.goalPemberdayaan.description'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Heart,
      title: t('about.profil.goalKearifan.title'),
      description: t('about.profil.goalKearifan.description'),
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const keyFacts = [
    {
      category: t('about.profil.factsPerhutananSosial.category'),
      facts: [
        t('about.profil.factsPerhutananSosial.item1'),
        t('about.profil.factsPerhutananSosial.item2'),
        t('about.profil.factsPerhutananSosial.item3')
      ]
    },
    {
      category: t('about.profil.factsPemberdayaanEkonomi.category'),
      facts: [
        t('about.profil.factsPemberdayaanEkonomi.item1'),
        t('about.profil.factsPemberdayaanEkonomi.item2'),
        t('about.profil.factsPemberdayaanEkonomi.item3')
      ]
    },
    {
      category: t('about.profil.factsKearifanLokal.category'),
      facts: [
        t('about.profil.factsKearifanLokal.item1'),
        t('about.profil.factsKearifanLokal.item2'),
        t('about.profil.factsKearifanLokal.item3')
      ]
    }
  ];

  return (
    <>
      <CarbonParticles />
      <div className="pt-20">
      {/* Hero Section - Enhanced with gradient and shapes */}
      <section className="relative pt-32 pb-16">
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              {t('about.profil.badge')}
            </div>
            
            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
              {t('about.profil.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-300 mt-2">
                {t('about.profil.titleHighlight')}
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed mb-8 animate-fade-in-up font-body">
              {t('about.profil.heroDescription')}
            </p>
            
            {/* Icon */}
            <div className="flex items-center justify-center animate-scale-in">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl">
                <TreePine className="h-12 w-12 text-emerald-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights - Enhanced with glassmorphism and animations */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('about.profil.sectionPencapaianUtama')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('about.profil.headingAngkaDampak')}
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              {t('about.profil.subheadingAngkaDampak')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-900/20 group-hover:shadow-emerald-700/30 transition-all duration-300 group-hover:scale-110">
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-forest-light mb-3 text-center">{item.title}</h3>
                <h4 className="text-lg font-bold text-white mb-4 text-center">{item.subtitle}</h4>
                <p className="text-gray-400 text-sm leading-relaxed text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Enhanced with image animation */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('about.profil.sectionTentangKami')}</span>
                <div className="section-label-line" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-8">
                {t('about.profil.aboutHeading')}<br />
                <span className="gradient-text">{t('about.profil.aboutHeadingHighlight')}</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed font-body">
                  {t('about.profil.aboutText1')}
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed font-body">
                  {t('about.profil.aboutText2')}
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed font-body">
                  {t('about.profil.aboutText3')}
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <img
                src={images.teamPhoto.src}
                alt={t('about.profil.altTimPhoto')}
                className="relative rounded-3xl shadow-2xl w-full object-cover h-96 lg:h-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8 rounded-2xl shadow-2xl">
                <p className="text-3xl font-black">2025</p>
                <p className="text-sm font-body">{t('about.profil.tahunBerdiri')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Goals - Enhanced with glassmorphism cards */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('about.profil.sectionFokusUtama')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('about.profil.headingTigaPilar')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('about.profil.subheadingTigaPilar')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mainGoals.map((goal, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient accent on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${goal.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <goal.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{goal.title}</h3>
                <p className="text-gray-400 leading-relaxed font-body">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts - Enhanced with better layout */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('about.profil.sectionDataFakta')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('about.profil.headingFaktaPencapaian')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('about.profil.subheadingFaktaPencapaian')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {keyFacts.map((section, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl font-black text-white">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-6 text-center">{section.category}</h3>
                <ul className="space-y-4">
                  {section.facts.map((fact, idx) => (
                    <li key={idx} className="flex items-start space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-2 h-2 bg-emerald-900/400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                      <span className="text-gray-300 leading-relaxed font-body">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section - Enhanced with gradient and animations */}
      <section className="py-24 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-300/10 animate-spin-slow" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              {t('about.profil.approachBadge')}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              {t('about.profil.approachHeading')}
            </h2>
            <p className="text-xl text-emerald-50/90 max-w-3xl mx-auto leading-relaxed font-body">
              {t('about.profil.approachDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '1', title: t('about.profil.stepPemetaan.title'), desc: t('about.profil.stepPemetaan.desc') },
              { number: '2', title: t('about.profil.stepKearifan.title'), desc: t('about.profil.stepKearifan.desc') },
              { number: '3', title: t('about.profil.stepEkonomi.title'), desc: t('about.profil.stepEkonomi.desc') },
              { number: '4', title: t('about.profil.stepMonitoring.title'), desc: t('about.profil.stepMonitoring.desc') }
            ].map((step, idx) => (
              <div key={idx} className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-300 group-hover:text-emerald-100 transition-all duration-300 shadow-lg">
                  <span className="text-2xl font-black">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-emerald-50/80 font-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ProfilYayasan;
