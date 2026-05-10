import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Award, FileText, CheckCircle, Building } from 'lucide-react';
import CarbonParticles from '../../components/CarbonParticles';

const LegalitasPengakuan: React.FC = () => {
  const { t } = useTranslation();

  const legalDocuments = [
    {
      type: t('about.legalitas.docAkta.type'),
      number: 'No. 15 Tahun 2009',
      issuer: 'Notaris Hj. Siti Aminah, S.H',
      date: '15 Maret 2009',
      status: t('about.legalitas.statusActive'),
      description: t('about.legalitas.docAkta.description')
    },
    {
      type: t('about.legalitas.docKemenkumham.type'),
      number: 'AHU-0001234.AH.01.04.Tahun 2009',
      issuer: 'Kementerian Hukum dan HAM RI',
      date: '25 Maret 2009',
      status: t('about.legalitas.statusActive'),
      description: t('about.legalitas.docKemenkumham.description')
    },
    {
      type: t('about.legalitas.docNPWP.type'),
      number: '02.123.456.7-123.000',
      issuer: 'Direktorat Jenderal Pajak',
      date: '1 April 2009',
      status: t('about.legalitas.statusActive'),
      description: t('about.legalitas.docNPWP.description')
    },
    {
      type: t('about.legalitas.docIzin.type'),
      number: 'No. 456/DINSOS/2009',
      issuer: 'Dinas Sosial DKI Jakarta',
      date: '15 April 2009',
      status: t('about.legalitas.statusActive'),
      description: t('about.legalitas.docIzin.description')
    }
  ];

  const certifications = [
    {
      title: t('about.legalitas.certISO.title'),
      issuer: 'TÜV Rheinland',
      year: '2022',
      validity: '2025',
      description: t('about.legalitas.certISO.description'),
      icon: Award
    },
    {
      title: t('about.legalitas.certAkreditasi.title'),
      issuer: 'Lembaga Akreditasi Nasional',
      year: '2023',
      validity: '2026',
      description: t('about.legalitas.certAkreditasi.description'),
      icon: Shield
    },
    {
      title: t('about.legalitas.certTransparansi.title'),
      issuer: 'Indonesia Transparency Society',
      year: '2023',
      validity: '2024',
      description: t('about.legalitas.certTransparansi.description'),
      icon: CheckCircle
    },
    {
      title: t('about.legalitas.certGreen.title'),
      issuer: 'Ministry of Environment',
      year: '2022',
      validity: '2025',
      description: t('about.legalitas.certGreen.description'),
      icon: Building
    }
  ];

  const awards = [
    {
      year: '2023',
      title: t('about.legalitas.awardSustainability.title'),
      category: 'Best NGO for Environmental Impact',
      issuer: 'Indonesia Sustainability Forum',
      description: t('about.legalitas.awardSustainability.description')
    },
    {
      year: '2022',
      title: t('about.legalitas.awardCSR.title'),
      category: 'Outstanding Partnership Program',
      issuer: 'Indonesia CSR Awards',
      description: t('about.legalitas.awardCSR.description')
    },
    {
      year: '2021',
      title: t('about.legalitas.awardEducation.title'),
      category: 'Best Educational Program',
      issuer: 'Ministry of Education',
      description: t('about.legalitas.awardEducation.description')
    },
    {
      year: '2020',
      title: t('about.legalitas.awardSocialImpact.title'),
      category: 'Community Empowerment',
      issuer: 'Indonesia Development Forum',
      description: t('about.legalitas.awardSocialImpact.description')
    },
    {
      year: '2019',
      title: t('about.legalitas.awardTransparency.title'),
      category: 'Most Transparent NGO',
      issuer: 'Transparency International Indonesia',
      description: t('about.legalitas.awardTransparency.description')
    }
  ];

  const memberships = [
    {
      organization: t('about.legalitas.membershipForumLSM.organization'),
      role: t('about.legalitas.membershipForumLSM.role'),
      since: '2010',
      description: t('about.legalitas.membershipForumLSM.description')
    },
    {
      organization: t('about.legalitas.membershipUNDP.organization'),
      role: t('about.legalitas.membershipUNDP.role'),
      since: '2017',
      description: t('about.legalitas.membershipUNDP.description')
    },
    {
      organization: t('about.legalitas.membershipPhilanthropy.organization'),
      role: t('about.legalitas.membershipPhilanthropy.role'),
      since: '2019',
      description: t('about.legalitas.membershipPhilanthropy.description')
    },
    {
      organization: t('about.legalitas.membershipASEAN.organization'),
      role: t('about.legalitas.membershipASEAN.role'),
      since: '2021',
      description: t('about.legalitas.membershipASEAN.description')
    }
  ];

  const compliance = [
    {
      area: t('about.legalitas.complianceFinance.area'),
      status: 'Compliant',
      details: t('about.legalitas.complianceFinance.details')
    },
    {
      area: t('about.legalitas.complianceTax.area'),
      status: 'Compliant',
      details: t('about.legalitas.complianceTax.details')
    },
    {
      area: t('about.legalitas.complianceLabor.area'),
      status: 'Compliant',
      details: t('about.legalitas.complianceLabor.details')
    },
    {
      area: t('about.legalitas.complianceEnv.area'),
      status: 'Compliant',
      details: t('about.legalitas.complianceEnv.details')
    }
  ];

  return (
    <>
      <CarbonParticles />
      <div className="pt-20">
      {/* Hero Section - Enhanced */}
      <section className="relative pt-32 pb-16">
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              {t('about.legalitas.badge')}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
              {t('about.legalitas.title')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-300">
                {t('about.legalitas.titleHighlight')}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed animate-fade-in-up font-body">
              {t('about.legalitas.heroDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Legal Documents - Enhanced */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('about.legalitas.sectionDokumenLegal')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-4">
              {t('about.legalitas.headingDasarHukum')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('about.legalitas.subheadingDasarHukum')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {legalDocuments.map((doc, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-black text-forest-light">{doc.type}</h3>
                      <span className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200 animate-pulse">
                        {doc.status}
                      </span>
                    </div>
                    <p className="text-forest-light font-bold text-sm mb-3">{doc.number}</p>
                    <div className="space-y-1 text-sm text-gray-400 mb-4">
                      <p><span className="font-bold">{t('about.legalitas.labelPenerbit')}:</span> {doc.issuer}</p>
                      <p><span className="font-bold">{t('about.legalitas.labelTanggal')}:</span> {doc.date}</p>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-body">{doc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications - Enhanced */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('about.legalitas.sectionSertifikasi')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-4">
              {t('about.legalitas.headingSertifikasi')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('about.legalitas.subheadingSertifikasi')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-black text-forest-light mb-3">{cert.title}</h3>
                <p className="text-blue-600 font-bold text-sm mb-3">{cert.issuer}</p>
                <div className="flex justify-center space-x-2 text-xs text-white/50 mb-4 font-bold">
                  <span>{cert.year}</span>
                  <span>-</span>
                  <span>{cert.validity}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-body">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards - Enhanced */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('about.legalitas.sectionPenghargaan')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-4">
              {t('about.legalitas.headingPenghargaan')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('about.legalitas.subheadingPenghargaan')}
            </p>
          </div>
          
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-black">{award.year}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-black text-forest-light">{award.title}</h3>
                      <div className="bg-emerald-900/50 p-3 rounded-xl shadow-sm">
                        <Award className="h-6 w-6 text-forest-light" />
                      </div>
                    </div>
                    <p className="text-forest-light font-bold mb-2">{award.category}</p>
                    <p className="text-white/50 text-sm mb-3 font-bold">{award.issuer}</p>
                    <p className="text-gray-400 leading-relaxed font-body">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships - Enhanced */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('about.legalitas.sectionKeanggotaan')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-4">
              {t('about.legalitas.headingJejakDampak')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('about.legalitas.subheadingJejakDampak')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {memberships.map((membership, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-forest-light mb-3">{membership.organization}</h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-bold border border-purple-200">
                        {membership.role}
                      </span>
                      <span className="text-white/50 text-sm font-bold">{t('about.legalitas.since')} {membership.since}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-body">{membership.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance - Enhanced */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('about.legalitas.sectionKepatuhan')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-4">
              {t('about.legalitas.headingKepatuhan')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              {t('about.legalitas.subheadingKepatuhan')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((item, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-black text-forest-light mb-4">{item.area}</h3>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block border border-green-200 animate-pulse">
                  {item.status}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed font-body">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Verification - Enhanced */}
      <section className="py-28 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-300/10 animate-spin-slow" />
        
        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            {t('about.legalitas.ctaBadge')}
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            {t('about.legalitas.ctaHeading')}
          </h2>
          <p className="text-xl text-emerald-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
            {t('about.legalitas.ctaDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/kontak" 
              className="bg-white text-emerald-300 hover:bg-emerald-900/40 font-black py-4 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105"
            >
              {t('about.legalitas.ctaHubungiLegal')}
            </a>
            <a 
              href="/publikasi/berita" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-emerald-300 font-black py-4 px-12 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              {t('about.legalitas.ctaDownload')}
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default LegalitasPengakuan;
