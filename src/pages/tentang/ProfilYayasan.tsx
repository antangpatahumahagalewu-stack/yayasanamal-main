import React from 'react';
import { Heart, Users, TreePine, Leaf, Shield } from 'lucide-react';
import images from '../../assets/images';
import CarbonParticles from '../../components/CarbonParticles';


const ProfilYayasan: React.FC = () => {
  const highlights = [
    {
      icon: TreePine,
      title: '183.531,99+',
      subtitle: 'Hektar Perhutanan Sosial',
      description: 'Kawasan hutan mineral dan gambut yang dikelola bersama Kelompok Perhutanan Sosial'
    },
    {
      icon: Users,
      title: '1,500+',
      subtitle: 'Keluarga Diberdayakan',
      description: 'Masyarakat Dayak yang terlibat aktif dalam program pemberdayaan ekonomi berkelanjutan'
    },
    {
      icon: Leaf,
      title: '12',
      subtitle: 'Program Unggulan',
      description: 'Luas kebun gaharu yang dikembangkan sebagai hasil hutan bukan kayu unggulan'
    },
    {
      icon: Shield,
      title: '183.531,99+',
      subtitle: 'Hektar Area Kerja',
      description: 'Total kawasan Perhutanan Sosial yang dikelola di 4 kabupaten Kalimantan Tengah'
    }
  ];

  const mainGoals = [
    {
      icon: TreePine,
      title: 'Melestarikan Hutan dan Alam',
      description: 'Menggalang partisipasi aktif masyarakat dalam menjaga hutan adat dan ekosistem sekitarnya melalui program perhutanan sosial yang berkelanjutan.',
      color: 'bg-emerald-900/50 text-forest-light'
    },
    {
      icon: Users,
      title: 'Pemberdayaan Ekonomi Masyarakat',
      description: 'Mendorong pengembangan potensi lokal berbasis hasil hutan bukan kayu, agroforestri, serta kewirausahaan berbasis lingkungan guna meningkatkan pendapatan dan kesejahteraan masyarakat.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Heart,
      title: 'Pelestarian Kearifan Lokal',
      description: 'Memperkuat nilai-nilai budaya dan tradisi masyarakat Dayak sebagai bagian tak terpisahkan dari upaya pelestarian lingkungan.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const keyFacts = [
    {
      category: 'Perhutanan Sosial',
      facts: [
        'Mengelola 167.437,99+ hektar Perhutanan Sosial bersama masyarakat Dayak di Kalimantan Tengah',
        'Mengembangkan 500+ hektar kebun aren berkelanjutan',
        'Melindungi 10+ spesies flora fauna endemik Kalimantan'
      ]
    },
    {
      category: 'Pemberdayaan Ekonomi',
      facts: [
        '12.467+ keluarga terlibat dalam program ekonomi hijau',
        '50+ kelompok usaha berbasis hasil hutan bukan kayu',
        '85% tingkat keberhasilan program pemberdayaan ekonomi'
      ]
    },
    {
      category: 'Kearifan Lokal',
      facts: [
        'Dokumentasi 100+ tradisi dan kearifan lokal Dayak',
        'Pelatihan 200+ pemuda dalam pelestarian budaya',
        'Revitalisasi 25+ ritual adat terkait pelestarian hutan'
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
              Yayasan AMAL
            </div>
            
            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
              Profil Yayasan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-300 mt-2">
                AMAL
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed mb-8 animate-fade-in-up font-body">
              Yayasan AntangPatahu Mahaga Lewu (AMAL) merupakan organisasi yang berkomitmen 
              sebagai mitra strategis Perhutanan Sosial — memfasilitasi Project Karbon dari hutan mineral dan gambut, 
              mendukung pengembangan usaha HHBK, serta menyediakan inovasi digital untuk ESG di Kalimantan Tengah.
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
              <span className="section-label-text">Pencapaian Utama</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Angka-Angka Dampak
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Statistik konkret yang menunjukkan komitmen dan dampak program Yayasan AMAL
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
                <span className="section-label-text">Tentang Kami</span>
                <div className="section-label-line" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-8">
                Yayasan AMAL:<br />
                <span className="gradient-text">Menjaga & Memberdayakan</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed font-body">
                  Melalui pendekatan perhutanan sosial, Yayasan AMAL berperan sebagai mitra strategis yang menjembatani masyarakat dengan peluang ekonomi hijau. Program-program yang dijalankan difokuskan pada Project Karbon dari hutan mineral dan gambut, pengembangan usaha HHBK, serta inovasi digital API Licence untuk ESG — guna menciptakan ekosistem yang seimbang dan ekonomi masyarakat yang mandiri.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed font-body">
                  Nama "AntangPatahu Mahaga Lewu" berasal dari bahasa Dayak Ngaju Kalimantan Tengah yang bermakna "Burung Elang Keramat dan perkasa yang menjaga tanah Dayak Kalimantan Tengah", mencerminkan filosofi "Mengatang Utus Mahaga Panatau Lewu" yang bermakna mengangkat harkat dan martabat dengan menjaga kekayan sumber daya alam Tanah Dayak bahwa Yayasan ini berupaya untuk menjaga dan mensejahterakan mitra kerja yaitu masyakarat Dayak di kalimantan Tengah.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed font-body">
                  Sebagai organisasi yang berakar pada kearifan lokal Dayak, kami memahami bahwa 
                  pelestarian hutan tidak dapat dipisahkan dari pemberdayaan masyarakat yang telah 
                  menjadi penjaga hutan selama berabad-abad. Project Karbon yang kami fasilitasi 
                  menjadi sumber pendapatan berkelanjutan bagi masyarakat Perhutanan Sosial.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <img
                src={images.teamPhoto.src}
                alt="Tim Yayasan AMAL bersama masyarakat Dayak"
                className="relative rounded-3xl shadow-2xl w-full object-cover h-96 lg:h-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8 rounded-2xl shadow-2xl">
                <p className="text-3xl font-black">2025</p>
                <p className="text-sm font-body">Tahun Berdiri</p>
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
              <span className="section-label-text">Fokus Utama</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Tiga Pilar Utama
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Tiga pilar utama yang menjadi fokus Yayasan AMAL dalam mewujudkan visi perhutanan sosial berkelanjutan
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
              <span className="section-label-text">Data & Fakta</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Fakta & Pencapaian
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Angka-angka yang menunjukkan dampak nyata dari program perhutanan sosial Yayasan AMAL
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
              Metodologi Kami
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Pendekatan Perhutanan Sosial
            </h2>
            <p className="text-xl text-emerald-50/90 max-w-3xl mx-auto leading-relaxed font-body">
              Metodologi yang kami gunakan untuk memastikan setiap program memberikan 
              dampak maksimal bagi kelestarian hutan dan kesejahteraan masyarakat Dayak
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '1', title: 'Pemetaan Partisipatif', desc: 'Identifikasi potensi hutan bersama masyarakat adat' },
              { number: '2', title: 'Kearifan Lokal', desc: 'Mengintegrasikan tradisi Dayak dalam pengelolaan hutan' },
              { number: '3', title: 'Ekonomi Hijau', desc: 'Pengembangan HHBK dan jasa lingkungan berkelanjutan' },
              { number: '4', title: 'Monitoring Bersama', desc: 'Evaluasi dampak dengan partisipasi masyarakat' }
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
