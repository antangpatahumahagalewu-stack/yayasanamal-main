import React from 'react';
import { Users, Handshake, ArrowRight, Leaf } from 'lucide-react';
import images from '../assets/images';

const Kemitraan: React.FC = () => {
  const partnerTypes = [
    {
      icon: Leaf,
      title: 'Kerjasama Jasa Lingkungan',
      description: 'Kemitraan dalam pengelolaan jasa lingkungan untuk kelestarian ekosistem hutan',
      benefits: [
        'Pengelolaan sumber daya hutan berkelanjutan',
        'Konservasi keanekaragaman hayati',
        'Peningkatan kualitas air dan udara',
        'Mitigasi perubahan iklim melalui penyerapan karbon'
      ]
    },
    {
      icon: Users,
      title: 'Pemberdayaan Masyarakat PS',
      description: 'Program pemberdayaan ekonomi dan sosial masyarakat perhutanan sosial',
      benefits: [
        'Peningkatan pendapatan masyarakat melalui usaha produktif',
        'Penguatan kelembagaan kelompok perhutanan sosial',
        'Pelatihan keterampilan dan kapasitas pengelolaan',
        'Akses pasar untuk produk hasil hutan bukan kayu'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Kelompok Perhutanan Sosial Desa Tumbang Anoi',
      type: 'Kapuas',
      description: 'Kerjasama jasa lingkungan dan pemberdayaan ekonomi masyarakat melalui pengelolaan hutan desa',
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
      description: 'Formalisasi kemitraan melalui kesepakatan bersama yang saling menguntungkan'
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kemitraan dengan Kelompok Perhutanan Sosial
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Yayasan Antangpatahu Mahaga Lewu bermitra dengan Kelompok Perhutanan Sosial 
              di Kalimantan Tengah. Wilayah kerjasama meliputi Kabupaten Kapuas, Gunung Mas, 
              Katingan, dan Pulang Pisau dengan dua fokus utama: Kerjasama Jasa Lingkungan 
              dan Pemberdayaan Masyarakat PS.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Impact Kemitraan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Data aktual kerjasama Yayasan dengan Kelompok Perhutanan Sosial di Kalimantan Tengah
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="card p-8 text-center bg-gradient-to-br from-blue-50 to-emerald-50">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-10 w-10 text-emerald-600" />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kelompok PS Ber-PKS</h3>
              <p className="text-gray-600">
                Total Kelompok Perhutanan Sosial yang telah memiliki Perjanjian Kerjasama dengan Yayasan
              </p>
            </div>
            
            <div className="card p-8 text-center bg-gradient-to-br from-emerald-50 to-blue-50">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Leaf className="h-10 w-10 text-emerald-600" />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                9,001.5
                <span className="text-2xl"> ha</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Total Luasan Area</h3>
              <p className="text-gray-600">
                Total area kerjasama pengelolaan hutan berbasis masyarakat di Kalimantan Tengah
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Data diperbarui secara real-time dari database Supabase. Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fokus Kemitraan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dua fokus utama kemitraan kami dengan Kelompok Perhutanan Sosial di Kalimantan Tengah
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className="card p-8 group hover:shadow-xl transition-all">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <type.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Manfaat Kemitraan:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kelompok Perhutanan Sosial Mitra
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kelompok Perhutanan Sosial yang aktif bermitra dengan Yayasan Antangpatahu Mahaga Lewu di 4 kabupaten wilayah kerja
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{partner.description}</p>
                  <p className="text-emerald-600 font-medium text-sm">Durasi: {partner.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wilayah Kerjasama */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Wilayah Kerjasama
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              4 kabupaten di Kalimantan Tengah menjadi fokus kemitraan dengan Kelompok Perhutanan Sosial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Kabupaten Kapuas',
                description: 'Pusat kerjasama jasa lingkungan dengan fokus pengelolaan hutan desa berkelanjutan',
                color: 'bg-blue-50',
                textColor: 'text-blue-600'
              },
              {
                name: 'Kabupaten Gunung Mas',
                description: 'Program konservasi keanekaragaman hayati dan pengembangan ekowisata berbasis masyarakat',
                color: 'bg-green-50',
                textColor: 'text-green-600'
              },
              {
                name: 'Kabupaten Katingan',
                description: 'Pengelolaan hasil hutan bukan kayu dan pemberdayaan ekonomi masyarakat lokal',
                color: 'bg-purple-50',
                textColor: 'text-purple-600'
              },
              {
                name: 'Kabupaten Pulang Pisau',
                description: 'Restorasi ekosistem dan peningkatan kapasitas kelembagaan kelompok perhutanan sosial',
                color: 'bg-orange-50',
                textColor: 'text-orange-600'
              }
            ].map((region, index) => (
              <div key={index} className="card p-8 text-center hover:shadow-xl transition-all">
                <div className={`${region.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <div className={`${region.textColor} text-2xl font-bold`}>{index + 1}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{region.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proses Kemitraan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Langkah-langkah strategis untuk membangun kemitraan dengan Kelompok Perhutanan Sosial
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Step circle */}
                  <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold relative z-10">
                    {step.number}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
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
                    <p className="opacity-90">Program yang mendukung keberlanjutan ekosistem hutan dan jasa lingkungan</p>
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
                    <Handshake className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Kerjasama Berbasis Komunitas</h3>
                    <p className="opacity-90">Pendekatan partisipatif yang melibatkan langsung masyarakat sebagai aktor utama</p>
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="card p-12 text-center bg-gradient-to-br from-emerald-50 to-blue-50">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Bermitra untuk Kelestarian Hutan dan Pemberdayaan Masyarakat
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan Yayasan Antangpatahu Mahaga Lewu dalam membangun kemitraan strategis 
              dengan Kelompok Perhutanan Sosial di Kalimantan Tengah untuk dampak lingkungan dan sosial yang berkelanjutan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:partnership@yayasanamal.org" 
                className="btn-primary inline-flex items-center justify-center"
              >
                Ajukan Kemitraan Perhutanan Sosial
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
  );
};

export default Kemitraan;
