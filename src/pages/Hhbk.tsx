import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Zap, Flower2, Droplets, Palmtree, ArrowRight, Fish, ShoppingBag, Users, Package } from 'lucide-react';
import CarbonParticles from '../components/CarbonParticles';

const Hhbk: React.FC = () => {
  const produkHhbk = [
    {
      icon: Scissors,
      title: 'Kerajinan Purun',
      description: 'Pengembangan kerajinan purun sebagai komoditas unggulan yang menggabungkan nilai budaya Dayak dengan ekonomi kreatif berkelanjutan. Purun diolah menjadi tikar, tas, topi, dan produk dekoratif bernilai tinggi.',
      details: ['Teknik menganyam purun modern', 'Desain produk inovatif', 'Kelompok pengrajin', 'Pemasaran nasional'],
      image: { src: "https://infopublik.id/assets/upload/headline//IMG-20230507-WA0009.jpg", alt: "Kerajinan purun tradisional Kalimantan" },
      impact: '300+ pengrajin dilatih, 500+ produk kerajinan per bulan'
    },
    {
      icon: Zap,
      title: 'Kerajinan Rotan',
      description: 'Industri kerajinan rotan berkelanjutan yang memadukan teknik tradisional Dayak dengan desain kontemporer untuk pasar nasional dan internasional. Menghasilkan furniture, anyaman, dan aksesoris.',
      details: ['Budidaya rotan berkelanjutan', 'Teknik pengolahan modern', 'Desain kontemporer', 'Ekspor ke pasar global'],
      image: { src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Tikar_Rotan.jpg", alt: "Kerajinan rotan berkualitas tinggi" },
      impact: '200+ keluarga diberdayakan, 1.000+ produk diekspor'
    },
    {
      icon: Flower2,
      title: 'Budidaya Madu Kelulut',
      description: 'Budidaya lebah kelulut (trigona) untuk menghasilkan madu berkualitas tinggi. Madu kelulut dikenal kaya manfaat kesehatan dan menjadi produk premium dengan nilai ekonomi tinggi.',
      details: ['Koloni lebah kelulut', 'Teknik budidaya modern', 'Pengolahan & pengemasan', 'Sertifikasi organik'],
      image: { src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Extracting_stingless_bee_honey.jpg", alt: "Budidaya madu kelulut berkelanjutan" },
      impact: '2.000+ botol madu per bulan, populasi lebah terlindungi'
    },
    {
      icon: Droplets,
      title: 'Budidaya Aren',
      description: 'Pengembangan budidaya pohon aren untuk produksi gula aren, nira segar, dan produk turunan bernilai ekonomi tinggi. Aren menjadi sumber pendapatan andalan masyarakat sekitar hutan.',
      details: ['Penanaman bibit aren unggul', 'Teknik sadap nira', 'Gula aren organik', 'Diversifikasi produk'],
      image: { src: "https://perkebunan.bsip.pertanian.go.id/storage/assets/uploads/images/berita/b4v0JozpZO1mD7HA6N0tubQK35Pzy8DjP7V8LLwI.jpg", alt: "Budidaya aren dan pengolahan gula aren" },
      impact: '5.000+ pohon aren ditanam, 10 ton gula aren per bulan'
    },
    {
      icon: Palmtree,
      title: 'Tanaman Nipah',
      description: 'Pemanfaatan tanaman nipah sebagai bahan baku gula nipah, atap, dan produk ramah lingkungan. Nipah tumbuh alami di kawasan gambut dan pesisir, mendukung ekonomi masyarakat tanpa merusak ekosistem.',
      details: ['Konservasi mangrove nipah', 'Gula nipah tradisional', 'Atap ramah lingkungan', 'Anyaman daun nipah'],
      image: { src: "https://static.republika.co.id/uploads/images/inpicture_slide/buah-nipah-_170125135638-501.jpg", alt: "Pemanfaatan tanaman nipah berkelanjutan" },
      impact: '1.000 hektar nipah dilestarikan, 200+ produk per bulan'
    }
  ];

  const produkPerikanan = [
    {
      title: 'Ikan Lokal Ekosistem Gambut',
      description: 'Ekosistem gambut Kalimantan Tengah kaya akan spesies ikan lokal seperti ikan gabus, toman, betok, sepat, dan papuyu. Masyarakat PS mengelola perikanan secara berkelanjutan sebagai sumber pangan dan pendapatan.',
      methods: ['Penangkapan ikan tradisional berkelanjutan', 'Konservasi habitat ikan di lahan gambut', 'Pengelolaan kawasan perikanan berbasis masyarakat']
    },
    {
      title: 'Budidaya Perikanan Gambut',
      description: 'Pengembangan budidaya perikanan di kawasan gambut dengan sistem yang ramah lingkungan — memanfaatkan kanal dan kolam alami tanpa merusak ekosistem gambut. Jenis budidaya meliputi ikan patin, nila, dan lele lokal.',
      methods: ['Sistem budidaya ramah lingkungan', 'Integrasi dengan konservasi gambut', 'Pakan alami dari ekosistem lokal', 'Pendampingan teknis budidaya']
    },
    {
      title: 'Produk Olahan Perikanan',
      description: 'Pengolahan hasil perikanan menjadi produk bernilai tambah — ikan asap, ikan kering, abon ikan, kerupuk ikan, dan produk fermentasi khas Dayak. Meningkatkan nilai ekonomi sekaligus memperpanjang masa simpan.',
      methods: ['Teknik pengasapan tradisional & modern', 'Pengemasan higienis', 'Branding produk lokal', 'Akses pasar regional']
    }
  ];

  const pemasaran = [
    {
      icon: ShoppingBag,
      title: 'Branding & Pengemasan',
      description: 'Pengembangan merek produk HHBK dengan identitas visual yang kuat, kemasan profesional, dan storytelling yang menghubungkan konsumen dengan masyarakat PS dan hutan Kalimantan.'
    },
    {
      icon: Package,
      title: 'Jaringan Distribusi',
      description: 'Membangun jalur distribusi dari desa ke kota — melalui platform digital, kemitraan ritel, pameran, dan direct-to-consumer untuk memperluas akses pasar produk HHBK.'
    },
    {
      icon: Users,
      title: 'Kemitraan Buyer',
      description: 'Menjembatani Kelompok PS dengan buyer nasional dan internasional yang berkomitmen pada produk berkelanjutan dan fair trade — menciptakan hubungan dagang yang adil dan jangka panjang.'
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
              HHBK — Hasil Hutan Bukan Kayu
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
              Dari Hutan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-forest-light mt-2">
                Ke Pasar
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed mb-8 animate-fade-in-up font-body">
              Mengembangkan potensi Hasil Hutan Bukan Kayu dari 91 Kelompok Perhutanan Sosial — 
              dari kerajinan tradisional, produk hutan unggulan, perikanan gambut, hingga ke pasar nasional dan global.
            </p>

            <div className="flex items-center justify-center animate-scale-in">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl">
                <ShoppingBag className="h-12 w-12 text-gold" />
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
              <span className="section-label-text">Produk Unggulan</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Lima Produk HHBK Utama
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Produk Hasil Hutan Bukan Kayu yang dikembangkan bersama Kelompok Perhutanan Sosial di Kalimantan Tengah
            </p>
          </div>
          
          <div className="space-y-16">
            {produkHhbk.map((produk, idx) => (
              <div key={idx} className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''} group`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105">
                    <img
                      src={produk.image.src}
                      alt={produk.image.alt}
                      className="w-full h-80 object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/90 p-2 rounded-xl">
                          <produk.icon className="h-6 w-6 text-emerald-200" />
                        </div>
                        <span className="text-white font-bold text-lg">{produk.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                    <produk.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-white">{produk.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-body text-lg">{produk.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {produk.details.map((d, didx) => (
                      <div key={didx} className="flex items-center gap-2 bg-emerald-900/40 text-emerald-300 px-4 py-2 rounded-lg text-sm font-medium">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border border-emerald-700/30 p-6 rounded-2xl border-l-4 border-l-emerald-400">
                    <h4 className="font-bold text-emerald-300 mb-2">Dampak:</h4>
                    <p className="text-emerald-200 font-medium">{produk.impact}</p>
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
              <span className="section-label-text">Perikanan Gambut</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Produk Perikanan Wilayah Gambut
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Selain hasil hutan, ekosistem gambut Kalimantan Tengah juga menyimpan potensi perikanan yang dikelola masyarakat PS secara berkelanjutan
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {produkPerikanan.map((item, idx) => (
              <div key={idx} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Fish className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 font-body">{item.description}</p>
                <div className="space-y-3">
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider">Metode:</h4>
                  {item.methods.map((method, midx) => (
                    <div key={midx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-400 font-body">{method}</span>
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
              <span className="section-label-text">Pemasaran</span>
              <div className="section-label-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Pemasaran Produk HHBK
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Yayasan AMAL mendukung penuh pemasaran produk HHBK — dari hutan ke tangan konsumen dengan nilai tambah maksimal
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pemasaran.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-emerald-200" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-300/10 animate-spin-slow" />
        
        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            Kemitraan HHBK
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Tertarik dengan Produk HHBK Kami?
          </h2>
          <p className="text-xl text-emerald-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
            Yayasan AMAL membuka kemitraan dengan buyer, ritel, dan eksportir untuk produk HHBK berkualitas dari Perhutanan Sosial Kalimantan Tengah.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kemitraan"
              className="bg-gold text-forest-deep font-black py-4 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:bg-yellow-400 hover:scale-105 inline-flex items-center gap-2"
            >
              <ShoppingBag className="h-5 w-5" />
              Bermitra Produk HHBK
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/kontak"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-emerald-200 font-black py-4 px-12 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
       </section>
     </div>
    </>
   );
 };
 
 export default Hhbk;
