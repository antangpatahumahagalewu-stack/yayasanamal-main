import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import CarbonParticles from '../components/CarbonParticles';
import SEO from '../components/SEO';


const Kontak: React.FC = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('kontak.addressTitle'),
      details: [
        'Jl. G. obos No 80',
        'Palangka Raya, 73112',
        'Kalimantan Tengah, Indonesia'
      ]
    },
    {
      icon: Phone,
      title: t('kontak.phoneTitle'),
      details: [
        '+62 536 1234 5678',
        '+62 812 3456 7890',
        'Fax: +62 536 1234 5679'
      ]
    },
    {
      icon: Mail,
      title: t('kontak.emailTitle'),
      details: [
        'info@antang.org',
        'program@antang.org',
        'partnership@antang.org'
      ]
    },
    {
      icon: Clock,
      title: t('kontak.hoursTitle'),
      details: [
        t('kontak.hoursWeekday'),
        t('kontak.hoursSaturday'),
        t('kontak.hoursSunday')
      ]
    }
  ];

  const departments = [
    {
      name: t('kontak.deptProgram'),
      email: 'program@antang.org',
      description: t('kontak.deptProgramDesc')
    },
    {
      name: t('kontak.deptPartnership'),
      email: 'partnership@antang.org',
      description: t('kontak.deptPartnershipDesc')
    },
    {
      name: t('kontak.deptMedia'),
      email: 'media@antang.org',
      description: t('kontak.deptMediaDesc')
    }
  ];

  return (
    <>
      <SEO
        title="Hubungi Kami"
        description="Hubungi Yayasan AMAL — Jl. G. Obos No 80, Palangka Raya, Kalimantan Tengah. Telepon +62 823 5173 2449, email info@antang.org. Bermitra untuk perhutanan sosial dan project karbon."
        url="https://yayasanamal.org/kontak"
      />
      <CarbonParticles />
      <div className="pt-20">
      {/* Hero Section - Enhanced */}
      <section className="relative pt-32 pb-16">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              {t('kontak.heroBadge')}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
              {t('kontak.heroTitle')}
            </h1>
            <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed animate-fade-in-up font-body">
              {t('kontak.heroDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards - Enhanced */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">{t('kontak.contactInfo')}</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('kontak.contactWays')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 text-center">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400 text-sm text-center font-body">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments - Enhanced */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                  {t('kontak.sendMessage')}
                </h2>
                <p className="text-xl text-gray-400 font-body">
                  {t('kontak.formDescription')}
                </p>
              </div>
              <ContactForm />
            </div>

            <div>
              <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                  {t('kontak.departmentTitle')}
                </h2>
                <p className="text-xl text-gray-400 font-body">
                  {t('kontak.departmentDesc')}
                </p>
              </div>
              
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-black text-white mb-2">{dept.name}</h3>
                        <p className="text-gray-400 text-sm mb-3 font-body">{dept.description}</p>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-forest-light hover:text-emerald-300 font-bold text-sm transition-colors"
                        >
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 p-8 rounded-3xl mt-8 text-white relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 animate-pulse" />
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black mb-2">{t('kontak.visitTitle')}</h3>
                      <p className="text-emerald-50 text-sm mb-4 font-body">
                        {t('kontak.visitDesc')}
                      </p>
                      <a
                        href="mailto:info@antang.org?subject=Janji Temu Kunjungan"
                        className="inline-flex items-center bg-white text-emerald-300 px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-900/40 transition-colors"
                      >
                        {t('kontak.makeAppointment')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-300/10 animate-spin-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              {t('kontak.locationBadge')}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              {t('kontak.locationTitle')}
            </h2>
            <p className="text-xl text-emerald-50/90 max-w-2xl mx-auto leading-relaxed font-body">
              {t('kontak.locationDesc')}
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <div className="h-96 bg-gradient-to-br from-emerald-900/40 to-teal-900/40 flex items-center justify-center backdrop-blur-sm border border-white/10">
              <div className="text-center">
                <MapPin className="h-20 w-20 text-emerald-200 mx-auto mb-6 animate-pulse" />
                <h3 className="text-2xl font-black text-white mb-3">{t('kontak.mapTitle')}</h3>
                <p className="text-emerald-100 text-lg font-body">
                  {t('kontak.mapPlaceholder')}
                </p>
              </div>
            </div>
          </div>
        </div>
       </section>
     </div>
    </>
   );
 };
 
 export default Kontak;
