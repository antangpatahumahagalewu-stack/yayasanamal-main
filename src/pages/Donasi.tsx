import React from 'react';
import { Heart, Shield, Users, Award, Check, Building2 } from 'lucide-react';
import DonationForm from '../components/DonationForm';
import CarbonParticles from '../components/CarbonParticles';


const Donasi: React.FC = () => {
  const impactExamples = [
    { amount: 'Rp 50.000', impact: 'Menyediakan buku pelajaran untuk 1 anak selama 1 bulan' },
    { amount: 'Rp 100.000', impact: 'Membiayai makan siang 20 anak di program pendidikan' },
    { amount: 'Rp 250.000', impact: 'Menanam dan merawat 50 pohon untuk program lingkungan' },
    { amount: 'Rp 500.000', impact: 'Memberikan pelatihan keterampilan untuk 1 keluarga' },
    { amount: 'Rp 1.000.000', impact: 'Membangun 1 toilet sehat untuk komunitas desa' }
  ];

  const whyDonate = [
    {
      icon: Shield,
      title: 'Transparansi Penuh',
      description: 'Laporan penggunaan dana yang detail dan dapat diakses publik'
    },
    {
      icon: Users,
      title: 'Dampak Terukur',
      description: 'Setiap donasi memiliki indikator dampak yang jelas dan terverifikasi'
    },
    {
      icon: Award,
      title: 'Terakreditasi',
      description: 'Lembaga resmi dengan sertifikat dan pengakuan nasional'
    },
    {
      icon: Heart,
      title: 'Fokus Berkelanjutan',
      description: 'Program jangka panjang yang menciptakan perubahan sistemik'
    }
  ];

  return (
    <>
      <CarbonParticles />
      <div className="pt-20">
      {/* Hero Section - Enhanced */}
      <section className="relative pt-32 pb-16">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              Berdonasi
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
              Berdonasi untuk<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-300">
                Masa Depan
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed mb-12 animate-fade-in-up font-body">
              Setiap kontribusi Anda, sekecil apapun, akan memberikan dampak besar 
              bagi ribuan penerima manfaat di seluruh Indonesia.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: '10,000+', label: 'Penerima Manfaat', color: 'from-emerald-500 to-teal-600' },
                { value: '500+', label: 'Beasiswa Diberikan', color: 'from-blue-500 to-blue-700' },
                { value: '50,000+', label: 'Pohon Ditanam', color: 'from-green-500 to-emerald-600' },
                { value: '100+', label: 'Program Selesai', color: 'from-orange-500 to-orange-700' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
                  <h3 className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </h3>
                  <p className="text-sm text-emerald-50 font-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form & Info - Enhanced */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-8">
                  Form Donasi
                </h2>
                <DonationForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-black text-white mb-6">
                  Dampak Donasi Anda
                </h3>
                <div className="space-y-4">
                  {impactExamples.map((example, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-forest-light">{example.amount}</h4>
                        <p className="text-sm text-gray-400 font-body">{example.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-black text-white mb-6">
                  Mengapa Berdonasi ke AMAL?
                </h3>
                <div className="space-y-4">
                  {whyDonate.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <reason.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{reason.title}</h4>
                        <p className="text-xs text-gray-400 font-body">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 p-8 rounded-3xl text-white">
                <h3 className="text-lg font-black mb-6">
                  Kepercayaan & Keamanan
                </h3>
                <div className="space-y-3">
                  {[
                    'Lembaga resmi berizin',
                    'Laporan keuangan auditan',
                    'Pembayaran aman & terenkripsi',
                    'Tax deductible donation'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="bg-white/20 p-1.5 rounded-lg">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-300/10 animate-spin-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              Cara Lain Membantu
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Cara Lain Membantu
            </h2>
            <p className="text-xl text-emerald-50/90 max-w-2xl mx-auto leading-relaxed font-body">
              Selain donasi uang, ada berbagai cara lain untuk berkontribusi
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Volunteer', desc: 'Sumbangkan waktu dan keahlian Anda', color: 'from-blue-500 to-blue-700' },
              { icon: Building2, title: 'Donasi Barang', desc: 'Sumbangkan barang yang dibutuhkan', color: 'from-green-500 to-emerald-600' },
              { icon: Heart, title: 'Kemitraan', desc: 'Bermitra dalam program CSR', color: 'from-purple-500 to-purple-700' },
              { icon: Award, title: 'Sebarkan', desc: 'Bagikan informasi ke jaringan Anda', color: 'from-orange-500 to-orange-700' }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${item.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-black text-white mb-3">{item.title}</h3>
                <p className="text-emerald-50 text-sm mb-6 font-body">{item.desc}</p>
                <button className="bg-white text-emerald-300 hover:bg-emerald-900/40 font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            ))}
          </div>
        </div>
       </section>
     </div>
    </>
   );
 };
 
 export default Donasi;
