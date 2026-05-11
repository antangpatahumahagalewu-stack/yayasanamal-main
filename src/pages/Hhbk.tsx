import React from 'react';
import { Link } from 'react-router-dom';
import { Trees, ShoppingBag, Droplets, Scissors, Fish, Factory, Gem, Flame, ArrowRight, CheckCircle2, MapPin, BarChart3, TrendingUp, Heart, Leaf, Building2 } from 'lucide-react';
import CarbonParticles from '../components/CarbonParticles';
import SEO from '../components/SEO';
import SisinfopsFlowchart from '../components/SisinfopsFlowchart';
import { useTranslation } from 'react-i18next';

const Hhbk: React.FC = () => {
  const { t } = useTranslation();

  const komoditas = [
    { icon: Scissors, key: 'rotan', eco: 'mineral' },
    { icon: Gem, key: 'gaharu', eco: 'mineral' },
    { icon: Droplets, key: 'maduHutan', eco: 'both' },
    { icon: Flame, key: 'jernang', eco: 'mineral' },
    { icon: Leaf, key: 'tengkawang', eco: 'mineral' },
    { icon: Factory, key: 'purunTikus', eco: 'gambut' },
    { icon: Trees, key: 'jelutung', eco: 'gambut' },
    { icon: Fish, key: 'ikanRawa', eco: 'gambut' },
  ];

  const kabupatenData = [
    { nameKey: 'kabupaten1', ps: 35, luas: '72.800,99', hhbkKey: 'kabupaten1Hhbk' },
    { nameKey: 'kabupaten2', ps: 15, luas: '29.239,00', hhbkKey: 'kabupaten2Hhbk' },
    { nameKey: 'kabupaten3', ps: 25, luas: '56.771,00', hhbkKey: 'kabupaten3Hhbk' },
    { nameKey: 'kabupaten4', ps: 16, luas: '24.721,00', hhbkKey: 'kabupaten4Hhbk' },
  ];

  const volumeData: { key: string; value: string }[] = [
    { key: 'rotan', value: '10.102.079 kg' },
    { key: 'gaharu', value: '42.092 kg' },
    { key: 'maduHutan', value: '1.170.212 liter' },
    { key: 'jernang', value: '252.552 kg' },
    { key: 'tengkawang', value: '1.262.759 kg' },
    { key: 'purunTikus', value: '79.478.400 kg' },
    { key: 'jelutung', value: '1.192.176 liter' },
    { key: 'ikanRawa', value: '3.973.920 kg' },
  ];

  const hargaData: { key: string; satuan: string; harga: string; catatanKey: string; eco: string }[] = [
    { key: 'rotan', satuan: 'kg', harga: '8.000', catatanKey: 'hargaCatatan1', eco: 'mineral' },
    { key: 'gaharu', satuan: 'kg', harga: '2.500.000', catatanKey: 'hargaCatatan2', eco: 'mineral' },
    { key: 'maduHutan', satuan: 'liter', harga: '120.000', catatanKey: 'hargaCatatan3', eco: 'both' },
    { key: 'jernang', satuan: 'kg', harga: '450.000', catatanKey: 'hargaCatatan4', eco: 'mineral' },
    { key: 'tengkawang', satuan: 'kg', harga: '15.000', catatanKey: 'hargaCatatan5', eco: 'mineral' },
    { key: 'purunTikus', satuan: 'kg', harga: '3.000', catatanKey: 'hargaCatatan6', eco: 'gambut' },
    { key: 'jelutung', satuan: 'liter', harga: '18.000', catatanKey: 'hargaCatatan7', eco: 'gambut' },
    { key: 'ikanRawa', satuan: 'kg', harga: '35.000', catatanKey: 'hargaCatatan8', eco: 'gambut' },
  ];

  const pemasaran = [
    { icon: ShoppingBag, titleKey: 'pemasaran1Title', descKey: 'pemasaran1Desc' },
    { icon: Factory, titleKey: 'pemasaran2Title', descKey: 'pemasaran2Desc' },
    { icon: Building2, titleKey: 'pemasaran3Title', descKey: 'pemasaran3Desc' },
  ];

  return (
    <>
      <SEO
        title="HHBK — Hasil Hutan Bukan Kayu Kalimantan Tengah"
        description="Pengembangan dan pemasaran Hasil Hutan Bukan Kayu dari 91 Kelompok Perhutanan Sosial — rotan, gaharu, madu hutan, jernang, tengkawang, hingga perikanan gambut."
        url="https://yayasanamal.org/program/hhbk"
      />
      <CarbonParticles />
      <div className="pt-20">
        {/* ======== 1. HERO SECTION ======== */}
        <section className="relative pt-28 pb-20">
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                {t('hhbk.badge')}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up">
                {t('hhbk.h1Line1')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-forest-light mt-2">
                  {t('hhbk.h1Line2')}
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-emerald-50/90 leading-relaxed mb-10 animate-fade-in-up font-body max-w-3xl mx-auto">
                {t('hhbk.tagline')}
              </p>

              {/* Stat Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-scale-in">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-gold/30 transition-all duration-300">
                  <div className="text-4xl font-black text-gold mb-1">{t('hhbk.stat1Value')}</div>
                  <div className="text-sm text-white/60 font-body">{t('hhbk.stat1Label')}</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-gold/30 transition-all duration-300">
                  <div className="text-4xl font-black text-gold mb-1">{t('hhbk.stat2Value')}</div>
                  <div className="text-sm text-white/60 font-body">{t('hhbk.stat2Label')}</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-gold/30 transition-all duration-300">
                  <div className="text-4xl font-black text-gold mb-1">{t('hhbk.stat3Value')}</div>
                  <div className="text-sm text-white/60 font-body">{t('hhbk.stat3Label')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======== 2. APA ITU HHBK ======== */}
        <section className="py-20 lg:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="section-label">
                  <div className="section-label-line" />
                  <span className="section-label-text">{t('hhbk.apaItuTitle')}</span>
                  <div className="section-label-line" />
                </div>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed font-body text-lg mb-12">
                <p>{t('hhbk.apaItuP1')}</p>
                <p>{t('hhbk.apaItuP2')}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-forest-green/30 transition-all duration-300">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{t(`hhbk.point${i}Title`)}</h4>
                      <p className="text-sm text-gray-400 font-body">{t(`hhbk.point${i}Desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======== 3. TABEL REKAPITULASI PER KABUPATEN ======== */}
        <section className="py-20 lg:py-24 bg-white/[0.02]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('hhbk.tabelTitle')}</span>
                <div className="section-label-line" />
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4 font-body">{t('hhbk.tabelDesc')}</p>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 px-4 text-sm font-semibold text-gold uppercase tracking-wider">{t('hhbk.colKabupaten')}</th>
                    <th className="py-3 px-4 text-sm font-semibold text-gold uppercase tracking-wider text-center">{t('hhbk.colUnitPs')}</th>
                    <th className="py-3 px-4 text-sm font-semibold text-gold uppercase tracking-wider text-right">{t('hhbk.colLuas')}</th>
                    <th className="py-3 px-4 text-sm font-semibold text-gold uppercase tracking-wider">{t('hhbk.colHhbkDominan')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {kabupatenData.map((kab, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 text-white font-medium font-body">{t(`hhbk.${kab.nameKey}Name`)}</td>
                      <td className="py-3 px-4 text-white text-center font-body">{kab.ps}</td>
                      <td className="py-3 px-4 text-white text-right font-body">{kab.luas}</td>
                      <td className="py-3 px-4 text-gray-300 text-sm font-body">{t(`hhbk.${kab.hhbkKey}`)}</td>
                    </tr>
                  ))}
                  <tr className="bg-white/10 font-bold">
                    <td className="py-3 px-4 text-gold font-body">{t('hhbk.totalRow')}</td>
                    <td className="py-3 px-4 text-gold text-center font-body">91</td>
                    <td className="py-3 px-4 text-gold text-right font-body">183.531,99</td>
                    <td className="py-3 px-4 text-gold text-sm font-body">{t('hhbk.totalHhbk')}</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-4 italic font-body">{t('hhbk.sumberData')}</p>
            </div>
          </div>
        </section>

        {/* ======== 4. 8 KARTU KOMODITAS ======== */}
        <section className="py-20 lg:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('hhbk.komoditasSection')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('hhbk.komoditasTitle')}</h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-body">{t('hhbk.komoditasDesc')}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {komoditas.map((item, i) => (
                <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-gold/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{t(`hhbk.komoditas${item.key}Name`)}</h3>
                  <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${item.eco === 'mineral' ? 'bg-amber-500/20 text-amber-300' : item.eco === 'gambut' ? 'bg-teal-500/20 text-teal-300' : 'bg-purple-500/20 text-purple-300'}`}>
                    {item.eco === 'mineral' ? t('hhbk.ecoMineral') : item.eco === 'gambut' ? t('hhbk.ecoGambut') : t('hhbk.ecoBoth')}
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed font-body">{t(`hhbk.komoditas${item.key}Oneliner`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======== 5. TABEL VOLUME & HARGA ======== */}
        <section className="py-20 lg:py-24 bg-white/[0.02]">
          <div className="container-custom">
            {/* Tabel Volume */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-black text-white mb-3 flex items-center justify-center gap-3">
                  <TrendingUp className="h-7 w-7 text-gold" />
                  {t('hhbk.volumeTitle')}
                </h2>
                <p className="text-gray-400 font-body">{t('hhbk.volumeDesc')}</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 text-sm font-semibold text-gold uppercase tracking-wider">{t('hhbk.colKomoditas')}</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gold uppercase tracking-wider text-right">{t('hhbk.colVolume')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {volumeData.map((item, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="py-2.5 px-4 text-white font-body">{t(`hhbk.komoditas${item.key}Name`)}</td>
                        <td className="py-2.5 px-4 text-white text-right font-body">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4 italic font-body">{t('hhbk.volumeNote')}</p>
            </div>

            {/* Tabel Harga */}
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-black text-white mb-3 flex items-center justify-center gap-3">
                  <BarChart3 className="h-7 w-7 text-gold" />
                  {t('hhbk.hargaTitle')}
                </h2>
                <p className="text-gray-400 font-body">{t('hhbk.hargaDesc')}</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 text-sm font-semibold text-gold uppercase tracking-wider">{t('hhbk.colKomoditas')}</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gold uppercase tracking-wider text-center">{t('hhbk.colSatuan')}</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gold uppercase tracking-wider text-right">{t('hhbk.colHarga')}</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gold uppercase tracking-wider text-center">{t('hhbk.colEkosistem')}</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gold uppercase tracking-wider">{t('hhbk.colCatatan')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {hargaData.map((item, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="py-2.5 px-4 text-white font-body">{t(`hhbk.komoditas${item.key}Name`)}</td>
                        <td className="py-2.5 px-4 text-white text-center font-body">{item.satuan}</td>
                        <td className="py-2.5 px-4 text-white text-right font-body">Rp {item.harga}</td>
                        <td className="py-2.5 px-4 text-center">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.eco === 'mineral' ? 'bg-amber-500/20 text-amber-300' : item.eco === 'gambut' ? 'bg-teal-500/20 text-teal-300' : 'bg-purple-500/20 text-purple-300'}`}>
                            {item.eco === 'mineral' ? t('hhbk.ecoMineral') : item.eco === 'gambut' ? t('hhbk.ecoGambut') : t('hhbk.ecoBoth')}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-gray-400 text-sm font-body">{t(`hhbk.${item.catatanKey}`)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ======== 6. METODOLOGI & DISCLAIMER ======== */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" />
                {t('hhbk.metodologiTitle')}
              </h3>
              <p className="text-sm text-gray-400 italic leading-relaxed font-body">{t('hhbk.metodologiText')}</p>
              <p className="text-sm text-gray-400 italic leading-relaxed font-body mt-4">{t('hhbk.sisinfopsNote')}</p>
            </div>
          </div>
        </section>

        <SisinfopsFlowchart />

        {/* ======== 7. EKOSISTEM PRODUKSI ======== */}
        <section className="py-20 lg:py-24 bg-white/[0.02]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('hhbk.ekosistemTitle')}</span>
                <div className="section-label-line" />
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4 font-body">{t('hhbk.ekosistemDesc')}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Mineral */}
              <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-700/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                    <Trees className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-black text-white">{t('hhbk.mineralTitle')}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed font-body text-sm mb-4">{t('hhbk.mineralNarrative')}</p>
                <div className="flex flex-wrap gap-2">
                  {['rotan', 'gaharu', 'maduHutan', 'jernang', 'tengkawang'].map((k) => (
                    <span key={k} className="bg-amber-500/10 text-amber-300 text-xs px-3 py-1 rounded-full font-medium">{t(`hhbk.komoditas${k}Name`)}</span>
                  ))}
                </div>
              </div>

              {/* Gambut */}
              <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/10 border border-teal-700/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-black text-white">{t('hhbk.gambutTitle')}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed font-body text-sm mb-4">{t('hhbk.gambutNarrative')}</p>
                <div className="flex flex-wrap gap-2">
                  {['purunTikus', 'jelutung', 'ikanRawa', 'maduHutan'].map((k) => (
                    <span key={k} className="bg-teal-500/10 text-teal-300 text-xs px-3 py-1 rounded-full font-medium">{t(`hhbk.komoditas${k}Name`)}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Perikanan Gambut Sub-section */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-teal-900/40 border border-teal-700/30 text-teal-300 text-xs font-bold tracking-[0.15em] uppercase px-5 py-2 rounded-full mb-4">
                  <Fish className="h-3.5 w-3.5" />
                  {t('hhbk.perikananGambut')}
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{t('hhbk.produkPerikananTitle')}</h3>
                <p className="text-gray-400 font-body">{t('hhbk.produkPerikananDesc')}</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                {['perikanan1', 'perikanan2', 'perikanan3'].map((key, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-teal-500/30 transition-all">
                    <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                      <Fish className="h-5 w-5 text-teal-400" />
                    </div>
                    <h4 className="font-bold text-white mb-2 text-sm">{t(`hhbk.${key}Title`)}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-body">{t(`hhbk.${key}Desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======== 8. DAMPAK SOSIAL ======== */}
        <section className="py-20 lg:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('hhbk.dampakSosialTitle')}</span>
                <div className="section-label-line" />
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4 font-body">{t('hhbk.dampakSosialDesc')}</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-white/5">
                <img
                  src="/galeri/Communities harvesting rattan in Katingan.jpg"
                  alt={t('hhbk.photo1Alt')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Heart className="h-4 w-4 text-gold" />
                    <span className="text-white text-sm font-medium">{t('hhbk.photo1Caption')}</span>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-white/5">
                <img
                  src="/galeri/Artisans weaving purun in Kapuas.jpg"
                  alt={t('hhbk.photo2Alt')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Heart className="h-4 w-4 text-gold" />
                    <span className="text-white text-sm font-medium">{t('hhbk.photo2Caption')}</span>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-white/5">
                <img
                  src="/galeri/Wild forest honey harvest in gunungmas.jpg"
                  alt={t('hhbk.photo3Alt')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Heart className="h-4 w-4 text-gold" />
                    <span className="text-white text-sm font-medium">{t('hhbk.photo3Caption')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======== 9. PEMASARAN HHBK ======== */}
        <section className="py-20 lg:py-24 bg-white/[0.02]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('hhbk.pemasaran')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('hhbk.pemasaranHhbkTitle')}</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">{t('hhbk.pemasaranHhbkDesc')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pemasaran.map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-emerald-200" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{t(`hhbk.${item.titleKey}`)}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-body">{t(`hhbk.${item.descKey}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======== 10. CTA SECTION ======== */}
        <section className="py-24 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-300/10 animate-spin-slow" />

          <div className="container-custom text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              {t('hhbk.kemitraanHhbk')}
            </div>

            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">{t('hhbk.ctaTitle')}</h2>
            <p className="text-xl text-emerald-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body">{t('hhbk.ctaDesc')}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/kemitraan" className="bg-gold text-forest-deep font-black py-4 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:bg-yellow-400 hover:scale-105 inline-flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                {t('hhbk.ctaPrimary')}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/kontak" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-emerald-800 font-black py-4 px-12 rounded-2xl transition-all duration-300 hover:scale-105">
                {t('hhbk.ctaSecondary2')}
              </Link>
            </div>

            <Link to="/program/karbon" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white transition-colors font-medium text-sm">
              {t('hhbk.ctaSecondary1')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hhbk;
