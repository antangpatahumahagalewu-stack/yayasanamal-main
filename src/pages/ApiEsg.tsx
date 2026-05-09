import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Database, Shield, Globe, TrendingUp, Leaf, ArrowRight, Handshake, BarChart3, Lock, RefreshCw, FileCheck, Users } from 'lucide-react';
import CarbonParticles from '../components/CarbonParticles';

const ApiEsg: React.FC = () => {
  const dataCategories = [
    {
      icon: Cloud,
      title: 'Data Karbon',
      description: 'Data stok karbon, serapan karbon tahunan, dan proyeksi dari 183.531 hektar kawasan Perhutanan Sosial di hutan mineral dan hutan gambut.',
      metrics: ['Stok karbon per hektar', 'Laju serapan CO₂', 'Emisi yang dihindari', 'Proyeksi forward-looking']
    },
    {
      icon: Leaf,
      title: 'Data Keanekaragaman Hayati',
      description: 'Informasi keanekaragaman hayati dari kawasan yang dikelola — spesies flora fauna, status konservasi, dan indeks biodiversitas.',
      metrics: ['Daftar spesies teridentifikasi', 'Status kelangkaan IUCN', 'Indeks biodiversitas', 'Luas habitat terlindungi']
    },
    {
      icon: Users,
      title: 'Data Sosial & Dampak',
      description: 'Data dampak sosial dari program Perhutanan Sosial — jumlah keluarga diberdayakan, pendapatan masyarakat, dan program pemberdayaan.',
      metrics: ['Jumlah penerima manfaat', 'Pendapatan rata-rata PS', 'Jumlah kelompok usaha', 'Distribusi manfaat karbon']
    },
    {
      icon: TrendingUp,
      title: 'Data Traceability HHBK',
      description: 'Ketertelusuran produk Hasil Hutan Bukan Kayu dari hutan ke pasar — memastikan transparansi rantai pasok dan keberlanjutan.',
      metrics: ['Asal produk per kawasan', 'Jenis komoditas HHBK', 'Volume produksi', 'Sertifikasi produk']
    }
  ];

  const useCases = [
    {
      icon: BarChart3,
      title: 'ESG Reporting',
      description: 'Perusahaan dapat menggunakan data API untuk memenuhi kewajiban pelaporan ESG, sustainability report, dan compliance GRI/IFRS.'
    },
    {
      icon: Cloud,
      title: 'Carbon Accounting',
      description: 'Data karbon terverifikasi untuk perhitungan jejak karbon korporasi, carbon offset, dan strategi net-zero emission.'
    },
    {
      icon: Globe,
      title: 'Supply Chain Transparency',
      description: 'Ketertelusuran produk HHBK untuk memastikan rantai pasok yang berkelanjutan dan bebas deforestasi.'
    },
    {
      icon: Shield,
      title: 'Impact Investment',
      description: 'Data dampak untuk investor yang ingin memvalidasi investasi hijau dan mengukur social return on investment (SROI).'
    },
    {
      icon: FileCheck,
      title: 'Due Diligence Karbon',
      description: 'Informasi lengkap untuk due diligence project karbon — metodologi, baseline, additionality, dan permanence.'
    },
    {
      icon: RefreshCw,
      title: 'Real-time Monitoring',
      description: 'Akses data yang diperbarui secara berkala dari lapangan untuk pemantauan berkelanjutan.'
    }
  ];

  const apiFeatures = [
    {
      icon: Lock,
      title: 'Keamanan Data',
      description: 'API diakses melalui autentikasi token yang aman dengan enkripsi end-to-end'
    },
    {
      icon: Database,
      title: 'Format Standar',
      description: 'Data tersedia dalam format JSON/RESTful API yang kompatibel dengan sistem ESG korporasi'
    },
    {
      icon: RefreshCw,
      title: 'Pembaruan Berkala',
      description: 'Data diperbarui secara periodik berdasarkan hasil monitoring lapangan dan verifikasi'
    },
    {
      icon: Shield,
      title: 'Data Terverifikasi',
      description: 'Seluruh data melalui proses verifikasi oleh tim ahli kehutanan dan pihak ketiga'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Konsultasi Kebutuhan',
      description: 'Diskusikan kebutuhan data ESG Anda dengan tim kami untuk menentukan paket API yang sesuai'
    },
    {
      number: '02',
      title: 'Penandatanganan Lisensi',
      description: 'Formalisasi kerjasama melalui Perjanjian Lisensi API dengan ketentuan penggunaan data yang jelas'
    },
    {
      number: '03',
      title: 'Integrasi Teknis',
      description: 'Tim teknis kami membantu proses integrasi API dengan sistem Anda melalui dokumentasi lengkap'
    },
    {
      number: '04',
      title: 'Akses & Monitoring',
      description: 'Dapatkan akses langsung ke data ESG real-time dengan dukungan teknis berkelanjutan'
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
              API & ESG
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
              API Licence
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-forest-light mt-2">
                Data ESG untuk Mitra Strategis
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed mb-8 animate-fade-in-up font-body">
              Yayasan AMAL menyediakan API Licence bagi mitra strategis yang membutuhkan data terverifikasi 
              dari 183.531 hektar kawasan Perhutanan Sosial untuk kebutuhan ESG, carbon accounting, dan traceability.
            </p>

            <div className="flex items-center justify-center animate-scale-in">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl">
                <Database className="h-12 w-12 text-gold" />
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
              <span className="section-label-text">Data yang Tersedia</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Data Terverifikasi dari Lapangan
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Empat kategori data yang dapat diakses melalui API Licence untuk mendukung kebutuhan ESG mitra strategis
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
                <div className="grid grid-cols-2 gap-2">
                  {cat.metrics.map((metric, midx) => (
                    <div key={midx} className="bg-emerald-900/40 text-emerald-300 px-3 py-2 rounded-lg text-xs font-semibold text-center">
                      {metric}
                    </div>
                  ))}
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
              <span className="section-label-text">Fitur API</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Keunggulan API Licence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              API Licence dirancang untuk memenuhi standar keamanan, transparansi, dan kompatibilitas korporasi
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
              <span className="section-label-text">Use Cases</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Siapa yang Membutuhkan API Ini
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Berbagai skenario penggunaan API Licence untuk memenuhi kebutuhan ESG dan keberlanjutan
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
              <span className="section-label-text">Proses</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Cara Mendapatkan API Licence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Empat langkah mudah untuk mengakses data ESG dari Perhutanan Sosial Kalimantan Tengah
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200 transform -translate-y-1/2" />
            
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
            Dapatkan Akses
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Integrasikan Data ESG Anda
          </h2>
          <p className="text-xl text-emerald-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
            Dapatkan API Licence untuk mengakses data terverifikasi dari 183.531 hektar kawasan 
            Perhutanan Sosial. Mendukung ESG reporting, carbon accounting, dan traceability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kemitraan"
              className="bg-gold text-forest-deep font-black py-4 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:bg-yellow-400 hover:scale-105 inline-flex items-center gap-2"
            >
              <Handshake className="h-5 w-5" />
              Dapatkan API Licence
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/kontak"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-emerald-700 font-black py-4 px-12 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Konsultasi Kebutuhan
            </Link>
          </div>
        </div>
       </section>
     </div>
  );
};
 
 export default ApiEsg;
