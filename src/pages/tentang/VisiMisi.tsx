import React from 'react';
import { Eye, Target, Heart, Users, Globe, Award, ArrowRight, Leaf, Shield, TrendingUp, Cloud } from 'lucide-react';
import CarbonParticles from '../../components/CarbonParticles';


const VisiMisi: React.FC = () => {
  const visiPoints = [
    {
      icon: Globe,
      title: 'Indonesia Berkelanjutan',
      description: 'Menciptakan ekosistem pembangunan yang ramah lingkungan dan berkelanjutan untuk generasi mendatang'
    },
    {
      icon: Users,
      title: 'Masyarakat Adil',
      description: 'Membangun tatanan sosial yang berkeadilan dengan akses yang setara untuk semua lapisan masyarakat'
    },
    {
      icon: Heart,
      title: 'Ekonomi Hijau',
      description: 'Meningkatkan kesejahteraan masyarakat melalui ekonomi berbasis hasil hutan dan karbon yang berkelanjutan'
    }
  ];

  const misiItems = [
    {
      number: '01',
      title: 'Project Karbon Berbasis Masyarakat',
      description: 'Mengembangkan project karbon terverifikasi dari hutan mineral dan hutan gambut yang dikelola bersama Kelompok Perhutanan Sosial di 4 kabupaten Kalimantan Tengah.',
      details: [
        'Pemetaan potensi karbon hutan mineral & gambut',
        'Fasilitasi registrasi project karbon',
        'Pendampingan monitoring & verifikasi karbon',
        'Distribusi manfaat karbon kredit ke masyarakat'
      ]
    },
    {
      number: '02',
      title: 'Pengembangan Usaha HHBK',
      description: 'Mendukung pengembangan, produksi, dan pemasaran Hasil Hutan Bukan Kayu dari Kelompok Perhutanan Sosial untuk meningkatkan nilai ekonomi hutan lestari.',
      details: [
        'Pendampingan pengembangan produk HHBK',
        'Inovasi kemasan dan branding produk',
        'Akses pemasaran nasional dan internasional',
        'Sertifikasi produk berkelanjutan'
      ]
    },
    {
      number: '03',
      title: 'Kemitraan Strategis Perhutanan Sosial',
      description: 'Menjadi mitra penghubung antara 91 Kelompok Perhutanan Sosial dengan pasar karbon, buyer HHBK, dan investor dampak untuk menciptakan ekosistem ekonomi hijau yang terintegrasi.',
      details: [
        'Fasilitasi Perjanjian Kerjasama (PKS)',
        'Koneksi dengan buyer karbon kredit',
        'Kemitraan ritel produk HHBK',
        'Kolaborasi dengan pemerintah daerah'
      ]
    },
    {
      number: '04',
      title: 'Pelestarian Hutan & Gambut',
      description: 'Melindungi dan melestarikan ekosistem hutan mineral dan hutan gambut Kalimantan Tengah melalui program konservasi berbasis masyarakat dan kearifan lokal Dayak.',
      details: [
        'Rehabilitasi hutan dan lahan gambut',
        'Perlindungan keanekaragaman hayati',
        'Pencegahan kebakaran hutan dan lahan',
        'Integrasi kearifan lokal dalam konservasi'
      ]
    },
    {
      number: '05',
      title: 'Inovasi Digital untuk Keberlanjutan',
      description: 'Menyediakan API Licence untuk mitra strategis yang membutuhkan data transparan dan terverifikasi dari 183.531 hektar kawasan Perhutanan Sosial untuk kebutuhan ESG dan carbon accounting.',
      details: [
        'API data stok karbon & serapan',
        'Platform traceability produk HHBK',
        'Dashboard ESG reporting untuk korporasi',
        'Transparansi data real-time untuk publik'
      ]
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integritas',
      description: 'Berkomitmen pada kejujuran, transparansi, dan akuntabilitas dalam setiap pengelolaan program',
      color: 'bg-emerald-900/50 text-forest-light'
    },
    {
      icon: Users,
      title: 'Kolaborasi',
      description: 'Membangun kemitraan strategis dan melibatkan partisipasi aktif masyarakat Perhutanan Sosial',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Eye,
      title: 'Inovasi',
      description: 'Menggunakan pendekatan kreatif dan solusi digital untuk tantangan lingkungan dan sosial',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Leaf,
      title: 'Keberlanjutan',
      description: 'Memastikan setiap program memberikan dampak jangka panjang bagi hutan dan masyarakat',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Dampak Terukur',
      description: 'Mengutamakan hasil yang terukur dan terverifikasi — dari karbon kredit hingga pendapatan masyarakat',
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: Globe,
      title: 'Kearifan Lokal',
      description: 'Mengintegrasikan nilai-nilai budaya Dayak sebagai fondasi dalam setiap program',
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
              Landasan Organisasi
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
              Visi & Misi
            </h1>
            
            <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed animate-fade-in-up font-body">
              Landasan filosofis dan arah strategis Yayasan AMAL dalam mengelola project karbon, 
              mengembangkan usaha HHBK, dan menyediakan inovasi digital untuk keberlanjutan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">Visi Kami</span>
              <div className="section-label-line" />
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 shadow-lg mb-12 border-l-4 border-emerald-600">
              <Eye className="h-12 w-12 text-forest-light mx-auto mb-6" />
              <p className="text-3xl lg:text-4xl font-black text-forest-light leading-tight">
                "Menjadi yayasan terdepan dalam menciptakan Indonesia yang berkelanjutan, 
                adil, dan sejahtera melalui Project Karbon, pengembangan HHBK, dan kemitraan 
                strategis Perhutanan Sosial."
              </p>
            </div>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Tiga dimensi utama yang menjadi fokus visi kami
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
              <span className="section-label-text">Misi Kami</span>
              <div className="section-label-line" />
            </div>
            
            <Target className="h-12 w-12 text-forest-light mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-4">
              Nilai-Nilai Inti
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Lima pilar strategis yang menjadi panduan Yayasan AMAL dalam menjalankan mandat sebagai mitra Perhutanan Sosial
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
                    <h4 className="font-bold text-forest-light mb-4 text-sm uppercase tracking-wider">Kegiatan Utama:</h4>
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
              <span className="section-label-text">Nilai-Nilai</span>
              <div className="section-label-line" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Prinsip Organisasi
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Prinsip-prinsip fundamental yang mendasari setiap keputusan dan tindakan Yayasan AMAL
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
            Terlibat Sekarang
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Wujudkan Visi Bersama
          </h2>
          <p className="text-xl text-emerald-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
            Bergabunglah dengan kami dalam mengembangkan Project Karbon, 
            usaha HHBK, dan inovasi digital untuk Perhutanan Sosial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/donasi" 
              className="bg-white text-emerald-300 hover:bg-emerald-900/40 font-black py-4 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105"
            >
              Dukung Program Kami
            </a>
            <a 
              href="/kemitraan" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-emerald-300 font-black py-4 px-12 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Jadi Mitra Strategis
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default VisiMisi;
