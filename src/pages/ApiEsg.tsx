import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Database, Shield, Globe, TrendingUp, Leaf, ArrowRight, Handshake, BarChart3, Lock, RefreshCw, FileCheck, Users, ShoppingBag, Search } from 'lucide-react';
import CarbonParticles from '../components/CarbonParticles';

const ApiEsg: React.FC = () => {
  const programSources = [
    {
      icon: Cloud,
      title: 'Project Karbon',
      description: 'Data stok karbon, emisi dihindari, MRV, metodologi Verra VCS, dan VCU dari 183.531 ha hutan mineral & gambut yang dikelola 91 Kelompok PS.',
      link: '/program/karbon',
      color: 'from-emerald-500 to-teal-600',
      label: 'Data Karbon & MRV'
    },
    {
      icon: ShoppingBag,
      title: 'HHBK',
      description: 'Data traceability, volume produksi, asal kawasan, dan sertifikasi produk Hasil Hutan Bukan Kayu — kerajinan purun, rotan, madu kelulut, aren, nipah, dan perikanan gambut.',
      link: '/program/hhbk',
      color: 'from-amber-500 to-orange-600',
      label: 'Traceability & Produk'
    },
    {
      icon: Search,
      title: 'Penelitian & Pengembangan',
      description: 'Data ilmiah dari penelitian spesies unggul, teknologi silvikultur, studi dampak perubahan iklim, dan inovasi pengolahan hasil hutan untuk mendukung keberlanjutan program.',
      link: '/program',
      color: 'from-purple-500 to-indigo-600',
      label: 'Data Riset & Inovasi'
    }
  ];

  const dataCategories = [
    {
      icon: Cloud,
      title: 'Data Project Karbon',
      description: 'Data stok karbon, serapan karbon tahunan, baseline, dan proyeksi dari hutan mineral dan hutan gambut yang dikelola 91 Kelompok PS. Mencakup data MRV (Monitoring, Reporting, Verification) sesuai standar Verra VCS, CCB, dan CORSIA.',
      metrics: ['Stok karbon per hektar', 'Laju serapan CO₂', 'Emisi dihindari (avoided)', 'Data MRV terverifikasi'],
      programLink: '/program/karbon',
      programLabel: 'Project Karbon'
    },
    {
      icon: Leaf,
      title: 'Data Keanekaragaman Hayati',
      description: 'Informasi biodiversitas dari kawasan Perhutanan Sosial — spesies flora fauna, status konservasi IUCN, indeks biodiversitas, dan luasan habitat kritis terlindungi. Data hasil monitoring camera trap, line transect, dan point count.',
      metrics: ['Daftar spesies teridentifikasi', 'Status kelangkaan IUCN', 'Indeks biodiversitas', 'Luas habitat terlindungi'],
      programLink: '/program/karbon',
      programLabel: 'Project Karbon — Biodiversity'
    },
    {
      icon: Users,
      title: 'Data Sosial & Dampak',
      description: 'Data dampak sosial-ekonomi dari program Perhutanan Sosial — jumlah keluarga diberdayakan, pendapatan masyarakat, distribusi manfaat karbon (benefit sharing), dan program pemberdayaan masyarakat lokal & adat.',
      metrics: ['Jumlah penerima manfaat', 'Pendapatan rata-rata PS', 'Jumlah kelompok usaha', 'Distribusi manfaat karbon'],
      programLink: '/program',
      programLabel: 'Program PS'
    },
    {
      icon: TrendingUp,
      title: 'Data Traceability HHBK',
      description: 'Ketertelusuran produk Hasil Hutan Bukan Kayu dari hutan ke pasar — memastikan transparansi rantai pasok dari 91 Kelompok PS. Meliputi kerajinan purun, rotan, madu kelulut, aren, nipah, dan produk perikanan gambut.',
      metrics: ['Asal produk per kawasan PS', 'Jenis komoditas HHBK', 'Volume produksi', 'Sertifikasi produk'],
      programLink: '/program/hhbk',
      programLabel: 'HHBK'
    }
  ];

  const useCases = [
    {
      icon: BarChart3,
      title: 'ESG Reporting',
      description: 'Perusahaan dapat menggunakan data dari Project Karbon, HHBK, dan Program PS untuk memenuhi kewajiban pelaporan ESG, sustainability report, dan compliance GRI/IFRS.',
      programs: ['/program/karbon', '/program/hhbk']
    },
    {
      icon: Cloud,
      title: 'Carbon Accounting',
      description: 'Data karbon terverifikasi dari Project Karbon — stok karbon, emisi dihindari, dan VCU — untuk perhitungan jejak karbon korporasi dan strategi net-zero emission.',
      programs: ['/program/karbon']
    },
    {
      icon: Globe,
      title: 'Supply Chain Transparency',
      description: 'Ketertelusuran produk HHBK dari Kelompok PS di Kalimantan Tengah ke pasar — memastikan rantai pasok berkelanjutan dan bebas deforestasi.',
      programs: ['/program/hhbk']
    },
    {
      icon: Shield,
      title: 'Impact Investment',
      description: 'Data dampak dari Program PS dan Project Karbon untuk investor yang ingin memvalidasi investasi hijau dan mengukur social return on investment (SROI).',
      programs: ['/program/karbon', '/program']
    },
    {
      icon: FileCheck,
      title: 'Due Diligence Karbon',
      description: 'Informasi lengkap dari Project Karbon untuk due diligence — metodologi Verra VCS, baseline, additionality, permanence, dan buffer pool.',
      programs: ['/program/karbon']
    },
    {
      icon: RefreshCw,
      title: 'Real-time Monitoring',
      description: 'Akses data yang diperbarui berkala dari lapangan — monitoring TMAT, hotspot, tutupan lahan, dan data MRV Project Karbon.',
      programs: ['/program/karbon']
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
      description: 'Data diperbarui secara periodik berdasarkan hasil monitoring lapangan dan verifikasi MRV'
    },
    {
      icon: Shield,
      title: 'Data Terverifikasi',
      description: 'Seluruh data melalui proses verifikasi oleh tim ahli kehutanan dan pihak ketiga (VVB)'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Konsultasi Kebutuhan',
      description: 'Diskusikan kebutuhan data ESG Anda dengan tim kami — tentukan data mana dari Project Karbon, HHBK, atau Program PS yang relevan'
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
                Akses Data Program untuk Mitra ESG
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed mb-8 animate-fade-in-up font-body">
              YAMAL menyediakan API Licence untuk mengakses data terverifikasi dari{' '}
              <strong className="text-gold">Project Karbon</strong>,{' '}
              <strong className="text-gold">HHBK</strong>, dan{' '}
              <strong className="text-gold">Penelitian & Pengembangan</strong>{' '}
              — mencakup 91 Kelompok Perhutanan Sosial di 183.531 hektar kawasan Kalimantan Tengah.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { value: '91', label: 'Kelompok PS' },
                { value: '183.531', label: 'Hektar Area Data' },
                { value: '4', label: 'Kategori Data API' }
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
              <span className="section-label-text">Sumber Data</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Tiga Pilar Program Sumber Data API
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Seluruh data API berasal dari tiga program utama YAMAL yang berjalan bersama 91 Kelompok Perhutanan Sosial
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
                      <span>Lihat Program</span>
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
              <span className="section-label-text">Kategori Data</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Data Terverifikasi dari Lapangan
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Empat kategori data yang dapat diakses melalui API Licence, bersumber langsung dari program YAMAL
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
                  <span>Sumber: {cat.programLabel}</span>
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
                <div className="flex flex-wrap gap-2 mt-4">
                  {use.programs.map((link, lidx) => {
                    const label = link.includes('karbon') ? 'Project Karbon' : link.includes('hhbk') ? 'HHBK' : 'Program';
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
              <span className="section-label-text">Proses</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Cara Mendapatkan API Licence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Empat langkah untuk mengakses data ESG dari program Perhutanan Sosial Kalimantan Tengah
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
            Siap Integrasikan Data ESG Anda?
          </h2>
          <p className="text-xl text-emerald-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
            Akses data terverifikasi dari Project Karbon, HHBK, dan Program PS — mendukung ESG reporting,
            carbon accounting, traceability, dan impact investment.
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
