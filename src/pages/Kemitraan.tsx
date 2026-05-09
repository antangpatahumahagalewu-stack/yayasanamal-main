import React from 'react';
import { Users, Handshake, ArrowRight, Leaf, Cloud, Database, Globe } from 'lucide-react';
import images from '../assets/images';
import CarbonParticles from '../components/CarbonParticles';


const Kemitraan: React.FC = () => {
  const partnerTypes = [
    {
      icon: Cloud,
      title: 'Kemitraan Project Karbon',
      description: 'Kemitraan dalam project karbon dari hutan mineral dan hutan gambut yang dikelola Kelompok Perhutanan Sosial. Menghasilkan karbon kredit terverifikasi untuk buyer, broker, dan investor.',
      benefits: [
        'Akses karbon kredit terverifikasi dari 183.531 ha',
        'Due diligence dan dokumentasi project karbon',
        'Distribusi manfaat langsung ke masyarakat PS',
        'Mendukung komitmen net-zero emission korporasi'
      ]
    },
    {
      icon: Users,
      title: 'Kemitraan Usaha HHBK',
      description: 'Kemitraan pengembangan dan pemasaran Hasil Hutan Bukan Kayu dari 91 Kelompok Perhutanan Sosial — dari kerajinan purun, rotan, madu kelulut, hingga gula aren.',
      benefits: [
        'Akses produk HHBK berkualitas',
        'Traceability dari hutan ke pasar',
        'Dukungan pengembangan produk & kemasan',
        'Kemitraan ritel dan ekspor'
      ]
    },
    {
      icon: Database,
      title: 'Kemitraan API & ESG',
      description: 'API Licence untuk mitra strategis yang membutuhkan data ESG dari kawasan Perhutanan Sosial — carbon accounting, biodiversity metrics, social impact, dan traceability.',
      benefits: [
        'Data karbon & lingkungan terverifikasi',
        'ESG reporting dan compliance',
        'Supply chain transparency',
        'Impact investment validation'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Kelompok Perhutanan Sosial Desa Tumbang Anoi',
      type: 'Kapuas',
      description: 'Kerjasama project karbon dan pemberdayaan ekonomi masyarakat melalui pengelolaan hutan desa',
      duration: '2 tahun',
      image: images.partnership1
    },
    {
      name: 'Kelompok Perhutanan Sosial Desa Batu Nyiwuh',
      type: 'Gunung Mas',
      description: 'Program konservasi keanekaragaman hayati dan pengembangan ekowisata berbasis masyarakat',
      duration: '1.5 tahun',
      image: images.partnership2
    },
    {
      name: 'Kelompok Perhutanan Sosial Desa Petak Bahandang',
      type: 'Katingan',
      description: 'Pengelolaan hasil hutan bukan kayu dan pelatihan pengolahan produk lokal',
      duration: '3 tahun',
      image: images.partnership1
    },
    {
      name: 'Kelompok Perhutanan Sosial Desa Bangun Jaya',
      type: 'Pulang Pisau',
      description: 'Program restorasi ekosistem dan peningkatan kapasitas kelembagaan kelompok',
      duration: 'Ongoing',
      image: images.partnership2
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Identifikasi Kebutuhan',
      description: 'Analisis kebutuhan dan potensi Kelompok Perhutanan Sosial melalui assessment lapangan'
    },
    {
      number: '02',
      title: 'Perencanaan Program',
      description: 'Penyusunan program kemitraan yang sesuai dengan kondisi lokal dan kebutuhan masyarakat'
    },
    {
      number: '03',
      title: 'Penandatanganan Kesepakatan',
      description: 'Formalisasi kemitraan melalui Perjanjian Kerjasama yang saling menguntungkan'
    },
    {
      number: '04',
      title: 'Implementasi Lapangan',
      description: 'Pelaksanaan program dengan pendampingan intensif dan partisipasi aktif masyarakat'
    },
    {
      number: '05',
      title: 'Monitoring & Evaluasi',
      description: 'Pemantauan berkala dan evaluasi dampak program untuk perbaikan berkelanjutan'
    }
  ];

  return (
    <>
      <CarbonParticles />
      <div className="pt-20">
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Kemitraan Strategis
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Yayasan AMAL membuka tiga jalur kemitraan — Project Karbon, Usaha HHBK, dan API Licence untuk ESG. 
              Wilayah kerjasama meliputi Kabupaten Kapuas, Gunung Mas, Katingan, dan Pulang Pisau dengan 
              91 Kelompok Perhutanan Sosial.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Impact Kemitraan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Data aktual kerjasama Yayasan dengan Kelompok Perhutanan Sosial di Kalimantan Tengah
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
                <h3 className="text-xl font-bold text-forest-light mb-3">Kelompok PS Ber-PKS</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Total Kelompok Perhutanan Sosial yang memiliki Perjanjian Kerjasama</p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-gold/20 to-amber-600/20 backdrop-blur-md border border-gold/40 rounded-3xl p-8 text-center hover:border-gold/70 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="bg-gradient-to-br from-gold to-amber-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-300 mb-3">183.531,99</div>
                <h3 className="text-xl font-bold text-forest-light mb-3">Total Hektar Area</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Total area kerjasama pengelolaan hutan berbasis masyarakat</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-emerald-500/20 to-teal-600/20 backdrop-blur-md border border-emerald-400/30 rounded-3xl p-8 text-center hover:border-emerald-300/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-400 to-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 mb-3">4</div>
                <h3 className="text-xl font-bold text-forest-light mb-3">Kabupaten</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Wilayah kerja di Kalimantan Tengah</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-forest-light mb-4">
              Tiga Jalur Kemitraan
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Yayasan AMAL membuka kemitraan strategis dalam tiga jalur utama untuk dampak lingkungan dan sosial yang berkelanjutan
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
                      <h4 className="font-semibold text-forest-light">Manfaat Kemitraan:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-900/400 rounded-full mt-2 flex-shrink-0"></div>
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
              Kelompok Perhutanan Sosial Mitra
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Kelompok Perhutanan Sosial yang aktif bermitra dengan Yayasan AMAL di 4 kabupaten wilayah kerja
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="card text-center group">
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={partner.image.src}
                    alt={partner.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    partner.type === 'Kapuas' ? 'bg-blue-100 text-blue-600' :
                    partner.type === 'Gunung Mas' ? 'bg-green-100 text-green-600' :
                    partner.type === 'Katingan' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    Kab. {partner.type}
                  </span>
                  <h3 className="text-lg font-bold text-forest-light mb-2">{partner.name}</h3>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">{partner.description}</p>
                  <p className="text-forest-light font-medium text-sm">Durasi: {partner.duration}</p>
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
              Proses Kemitraan
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Langkah-langkah strategis untuk membangun kemitraan dengan Yayasan AMAL
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200 transform -translate-y-1/2"></div>
            
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

      <section className="py-20 bg-emerald-600 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Manfaat Kemitraan dengan Kami
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Kelestarian Lingkungan</h3>
                    <p className="opacity-90">Project karbon yang mendukung keberlanjutan hutan mineral dan gambut</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Pemberdayaan Masyarakat</h3>
                    <p className="opacity-90">Peningkatan kapasitas dan ekonomi masyarakat perhutanan sosial secara berkelanjutan</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <Database className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data Transparan & Terverifikasi</h3>
                    <p className="opacity-90">Akses data ESG real-time untuk mendukung pengambilan keputusan dan pelaporan</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={images.teamPhoto.src}
                alt={images.teamPhoto.alt}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="card p-12 text-center bg-gradient-to-br from-emerald-900 via-emerald-700 to-teal-600">
            <h2 className="text-3xl lg:text-4xl font-bold text-forest-light mb-6">
              Kemitraan Strategis
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan Yayasan AMAL dalam membangun kemitraan strategis untuk Project Karbon, 
              pengembangan HHBK, dan akses API Licence ESG.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:partnership@yayasanamal.org" 
                className="btn-primary inline-flex items-center justify-center"
              >
                Ajukan Kemitraan
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/kontak" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Pelajari Lebih Lanjut
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
