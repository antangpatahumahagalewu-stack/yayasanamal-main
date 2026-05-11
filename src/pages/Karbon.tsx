import React from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf, TreePine, Cloud, MapPin, Users, ArrowRight, TrendingUp, Shield, Droplets,
  Handshake, Globe, Activity, FileCheck, Scale, AlertTriangle,
  Target, Clock, DollarSign, Bird, Flame, Waves, Building2, BookOpen,
  Camera, LineChart, Ruler, Satellite, Zap, Heart, Landmark, BarChart3
} from 'lucide-react';
import CarbonParticles from '../components/CarbonParticles';
import SEO from '../components/SEO';
import SisinfopsFlowchart from '../components/SisinfopsFlowchart';
import { useTranslation, Trans } from 'react-i18next';

const ProgramKarbon: React.FC = () => {
  const { t } = useTranslation();

  const wilayahKabupaten = [
    {
      name: 'Kapuas',
      ekosistem: t('karbon.wilayahKapuasEkosistem'),
      karakteristik: t('karbon.wilayahKapuasKarakteristik')
    },
    {
      name: 'Katingan',
      ekosistem: t('karbon.wilayahKatinganEkosistem'),
      karakteristik: t('karbon.wilayahKatinganKarakteristik')
    },
    {
      name: 'Pulang Pisau',
      ekosistem: t('karbon.wilayahPulangPisauEkosistem'),
      karakteristik: t('karbon.wilayahPulangPisauKarakteristik')
    },
    {
      name: 'Gunung Mas',
      ekosistem: t('karbon.wilayahGunungMasEkosistem'),
      karakteristik: t('karbon.wilayahGunungMasKarakteristik')
    }
  ];

  const ecosystemTypes = [
    {
      icon: TreePine,
      title: t('karbon.eco1Title'),
      description: t('karbon.eco1Desc'),
      carbonData: [
        { type: 'Hutan Primer (HP)', agb: '250–380', bgb: '50–80', total: '1.100–1.700', ref: 'IPCC Tier 2; KLHK 2021' },
        { type: 'Hutan Sekunder Tua (>20 th)', agb: '150–250', bgb: '30–55', total: '660–1.100', ref: 'Murdiyarso et al. 2019' },
        { type: 'Hutan Sekunder Muda (5–20 th)', agb: '60–150', bgb: '12–30', total: '264–660', ref: 'SNI 7724:2011' },
        { type: 'Hutan Terdegradasi', agb: '20–60', bgb: '4–12', total: '88–264', ref: 'Verra VM0007' }
      ],
      wilayahDominan: t('karbon.eco1WilayahDominan')
    },
    {
      icon: Droplets,
      title: t('karbon.eco2Title'),
      description: t('karbon.eco2Desc'),
      carbonData: [
        { type: 'Gambut Dangkal (< 1 m)', agb: '—', bgb: '300–700', total: '—', ref: t('karbon.eco2RefSedang') },
        { type: 'Gambut Sedang (1–2 m)', agb: '—', bgb: '700–1.400', total: '—', ref: t('karbon.eco2RefTinggi') },
        { type: 'Gambut Dalam (2–4 m)', agb: '—', bgb: '1.400–2.800', total: '—', ref: t('karbon.eco2RefSangatTinggi') },
        { type: 'Gambut Sangat Dalam (> 4 m)', agb: '—', bgb: '2.800–6.000+', total: '—', ref: t('karbon.eco2RefIrreversible') }
      ],
      wilayahDominan: t('karbon.eco2WilayahDominan')
    }
  ];

  const methodologies = [
    { code: 'VM0007', standar: 'Verra VCS', aplikasi: t('karbon.method1App') },
    { code: 'VM0036 / VM0012', standar: 'Verra VCS', aplikasi: t('karbon.method2App') },
    { code: 'VM0015', standar: 'Verra VCS', aplikasi: t('karbon.method3App') },
    { code: 'VM0032', standar: 'Verra VCS', aplikasi: t('karbon.method4App') },
    { code: 'AMS-III.D', standar: 'UNFCCC CDM', aplikasi: t('karbon.method5App') }
  ];

  const kegiatanMitigasi = [
    {
      no: 1, mineral: true, gambut: true,
      judul: t('karbon.mitigasi1Judul'),
      deskripsi: t('karbon.mitigasi1Deskripsi'),
      kpi: [t('karbon.mitigasi1Kpi1'), t('karbon.mitigasi1Kpi2'), t('karbon.mitigasi1Kpi3')],
      icon: Shield
    },
    {
      no: 2, mineral: true, gambut: true,
      judul: t('karbon.mitigasi2Judul'),
      deskripsi: t('karbon.mitigasi2Deskripsi'),
      kpi: [t('karbon.mitigasi2Kpi1'), t('karbon.mitigasi2Kpi2'), t('karbon.mitigasi2Kpi3')],
      icon: TreePine
    },
    {
      no: 3, mineral: true, gambut: true,
      judul: t('karbon.mitigasi3Judul'),
      deskripsi: t('karbon.mitigasi3Deskripsi'),
      kpi: [t('karbon.mitigasi3Kpi1'), t('karbon.mitigasi3Kpi2'), t('karbon.mitigasi3Kpi3')],
      icon: FileCheck
    },
    {
      no: 4, mineral: false, gambut: true,
      judul: t('karbon.mitigasi4Judul'),
      deskripsi: t('karbon.mitigasi4Deskripsi'),
      kpi: [t('karbon.mitigasi4Kpi1'), t('karbon.mitigasi4Kpi2'), t('karbon.mitigasi4Kpi3')],
      icon: Waves
    },
    {
      no: 5, mineral: false, gambut: true,
      judul: t('karbon.mitigasi5Judul'),
      deskripsi: t('karbon.mitigasi5Deskripsi'),
      kpi: [t('karbon.mitigasi5Kpi1'), t('karbon.mitigasi5Kpi2'), t('karbon.mitigasi5Kpi3')],
      icon: Ruler
    },
    {
      no: 6, mineral: true, gambut: true,
      judul: t('karbon.mitigasi6Judul'),
      deskripsi: t('karbon.mitigasi6Deskripsi'),
      kpi: [t('karbon.mitigasi6Kpi1'), t('karbon.mitigasi6Kpi2'), t('karbon.mitigasi6Kpi3')],
      icon: TrendingUp
    },
    {
      no: 7, mineral: true, gambut: true,
      judul: t('karbon.mitigasi7Judul'),
      deskripsi: t('karbon.mitigasi7Deskripsi'),
      kpi: [t('karbon.mitigasi7Kpi1'), t('karbon.mitigasi7Kpi2'), t('karbon.mitigasi7Kpi3')],
      icon: Flame
    },
    {
      no: 8, mineral: true, gambut: true,
      judul: t('karbon.mitigasi8Judul'),
      deskripsi: t('karbon.mitigasi8Deskripsi'),
      kpi: [t('karbon.mitigasi8Kpi1'), t('karbon.mitigasi8Kpi2'), t('karbon.mitigasi8Kpi3')],
      icon: Bird
    },
    {
      no: 9, mineral: true, gambut: true,
      judul: t('karbon.mitigasi9Judul'),
      deskripsi: t('karbon.mitigasi9Deskripsi'),
      kpi: [t('karbon.mitigasi9Kpi1'), t('karbon.mitigasi9Kpi2'), t('karbon.mitigasi9Kpi3')],
      icon: LineChart
    },
    {
      no: 10, mineral: false, gambut: true,
      judul: t('karbon.mitigasi10Judul'),
      deskripsi: t('karbon.mitigasi10Deskripsi'),
      kpi: [t('karbon.mitigasi10Kpi1'), t('karbon.mitigasi10Kpi2'), t('karbon.mitigasi10Kpi3')],
      icon: Activity
    },
    {
      no: 11, mineral: false, gambut: true,
      judul: t('karbon.mitigasi11Judul'),
      deskripsi: t('karbon.mitigasi11Deskripsi'),
      kpi: [t('karbon.mitigasi11Kpi1'), t('karbon.mitigasi11Kpi2'), t('karbon.mitigasi11Kpi3')],
      icon: Waves
    }
  ];

  const kegiatanAdaptasi = [
    {
      no: 1, mineral: true, gambut: true,
      judul: t('karbon.adaptasi1Judul'),
      deskripsi: t('karbon.adaptasi1Deskripsi'),
      standar: 'CCB Standard · IFC PS7 · UNDRIP',
      icon: Users
    },
    {
      no: 2, mineral: true, gambut: true,
      judul: t('karbon.adaptasi2Judul'),
      deskripsi: t('karbon.adaptasi2Deskripsi'),
      standar: 'SDG 8 · SDG 15 · VCS co-benefits',
      icon: DollarSign
    },
    {
      no: 3, mineral: true, gambut: true,
      judul: t('karbon.adaptasi3Judul'),
      deskripsi: t('karbon.adaptasi3Deskripsi'),
      standar: 'VM0032 Verra · FAO Agroforestry',
      icon: TreePine
    },
    {
      no: 4, mineral: true, gambut: true,
      judul: t('karbon.adaptasi4Judul'),
      deskripsi: t('karbon.adaptasi4Deskripsi'),
      standar: 'SDG 7 · SDG 11 · Green Infrastructure',
      icon: Building2
    },
    {
      no: 5, mineral: true, gambut: true,
      judul: t('karbon.adaptasi5Judul'),
      deskripsi: t('karbon.adaptasi5Deskripsi'),
      standar: 'PP No. 23/2021 · Permenlhk P.9/2021',
      icon: Landmark
    },
    {
      no: 6, mineral: true, gambut: true,
      judul: t('karbon.adaptasi6Judul'),
      deskripsi: t('karbon.adaptasi6Deskripsi'),
      standar: 'UNFCCC · Paris Agreement Art. 6',
      icon: Handshake
    },
    {
      no: 7, mineral: true, gambut: true,
      judul: t('karbon.adaptasi7Judul'),
      deskripsi: t('karbon.adaptasi7Deskripsi'),
      standar: 'Perpres 98/2021 · Permenlhk P.21/2022',
      icon: Globe
    },
    {
      no: 8, mineral: true, gambut: true,
      judul: t('karbon.adaptasi8Judul'),
      deskripsi: t('karbon.adaptasi8Deskripsi'),
      standar: 'SDG 2 · FAO SAFA Framework',
      icon: Leaf
    },
    {
      no: 9, mineral: true, gambut: true,
      judul: t('karbon.adaptasi9Judul'),
      deskripsi: t('karbon.adaptasi9Deskripsi'),
      standar: 'SDG 4 · SDG 13 · UNESCO ESD',
      icon: BookOpen
    }
  ];

  const prioritasMineral = [
    {
      prioritas: t('karbon.prioritasMineral1'),
      items: [t('karbon.prioritasMineral1Item1'), t('karbon.prioritasMineral1Item2'), t('karbon.prioritasMineral1Item3')],
      color: 'border-red-500',
      bg: 'bg-red-500/10'
    },
    {
      prioritas: t('karbon.prioritasMineral2'),
      items: [t('karbon.prioritasMineral2Item1'), t('karbon.prioritasMineral2Item2'), t('karbon.prioritasMineral2Item3')],
      color: 'border-amber-500',
      bg: 'bg-amber-500/10'
    },
    {
      prioritas: t('karbon.prioritasMineral3'),
      items: [t('karbon.prioritasMineral3Item1'), t('karbon.prioritasMineral3Item2'), t('karbon.prioritasMineral3Item3')],
      color: 'border-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      prioritas: t('karbon.prioritasMineral4'),
      items: [t('karbon.prioritasMineral4Item1'), t('karbon.prioritasMineral4Item2'), t('karbon.prioritasMineral4Item3')],
      color: 'border-blue-500',
      bg: 'bg-blue-500/10'
    }
  ];

  const prioritasGambut = [
    {
      prioritas: t('karbon.prioritasGambut1'),
      items: [t('karbon.prioritasGambut1Item1'), t('karbon.prioritasGambut1Item2'), t('karbon.prioritasGambut1Item3')],
      color: 'border-sky-500',
      bg: 'bg-sky-500/10'
    },
    {
      prioritas: t('karbon.prioritasGambut2'),
      items: [t('karbon.prioritasGambut2Item1'), t('karbon.prioritasGambut2Item2'), t('karbon.prioritasGambut2Item3'), t('karbon.prioritasGambut2Item4')],
      color: 'border-red-500',
      bg: 'bg-red-500/10'
    },
    {
      prioritas: t('karbon.prioritasGambut3'),
      items: [t('karbon.prioritasGambut3Item1'), t('karbon.prioritasGambut3Item2'), t('karbon.prioritasGambut3Item3')],
      color: 'border-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      prioritas: t('karbon.prioritasGambut4'),
      items: [t('karbon.prioritasGambut4Item1'), t('karbon.prioritasGambut4Item2'), t('karbon.prioritasGambut4Item3')],
      color: 'border-green-500',
      bg: 'bg-green-500/10'
    },
    {
      prioritas: t('karbon.prioritasGambut5'),
      items: [t('karbon.prioritasGambut5Item1'), t('karbon.prioritasGambut5Item2'), t('karbon.prioritasGambut5Item3')],
      color: 'border-blue-500',
      bg: 'bg-blue-500/10'
    }
  ];

  const monitoringComponents = [
    { komponen: t('karbon.monitor1Komponen'), metode: 'PSP (Permanent Sample Plot), allometric equation', frekuensi: t('karbon.monitor1Freq'), pj: t('karbon.monitor1Pj'), standar: 'Verra VCS VM0007', icon: Ruler },
    { komponen: t('karbon.monitor2Komponen'), metode: 'Sentinel-2, Landsat 8/9, Planet Scope', frekuensi: t('karbon.monitor2Freq'), pj: t('karbon.monitor2Pj'), standar: 'ATCOR classification', icon: Satellite },
    { komponen: t('karbon.monitor3Komponen'), metode: 'Piezometer, water level logger otomatis', frekuensi: t('karbon.monitor3Freq'), pj: t('karbon.monitor3Pj'), standar: 'BRGM Standard', icon: Waves },
    { komponen: t('karbon.monitor4Komponen'), metode: 'Closed dynamic chamber, eddy covariance', frekuensi: t('karbon.monitor4Freq'), pj: t('karbon.monitor4Pj'), standar: 'IPCC Tier 2/3', icon: Cloud },
    { komponen: t('karbon.monitor5Komponen'), metode: 'FIRMS NASA, LAPAN, drone thermal', frekuensi: t('karbon.monitor5Freq'), pj: t('karbon.monitor5Pj'), standar: 'Fire Management Plan', icon: Flame },
    { komponen: t('karbon.monitor6Komponen'), metode: 'Camera trap, line transect, point count', frekuensi: t('karbon.monitor6Freq'), pj: t('karbon.monitor6Pj'), standar: 'CCB Standard', icon: Camera },
    { komponen: t('karbon.monitor7Komponen'), metode: 'Survei rumah tangga, FGD, key informant', frekuensi: t('karbon.monitor7Freq'), pj: t('karbon.monitor7Pj'), standar: 'CCB Standard · SDGs', icon: Users },
    { komponen: t('karbon.monitor8Komponen'), metode: 'AWS (Automatic Weather Station)', frekuensi: t('karbon.monitor8Freq'), pj: t('karbon.monitor8Pj'), standar: 'BMKG Standard', icon: Zap },
    { komponen: t('karbon.monitor9Komponen'), metode: 'Citra satelit multitemporal', frekuensi: t('karbon.monitor9Freq'), pj: t('karbon.monitor9Pj'), standar: 'Blue Carbon Protocol', icon: Globe }
  ];

  const revenueEstimates = [
    { tipe: t('karbon.revenue1Tipe'), vcu: '3–8 tCO₂e', harga: '$8–25', pendapatan: '$24–200' },
    { tipe: t('karbon.revenue2Tipe'), vcu: '15–50 tCO₂e', harga: '$10–30', pendapatan: '$150–1.500' },
    { tipe: t('karbon.revenue3Tipe'), vcu: '30–80 tCO₂e', harga: '$12–35', pendapatan: '$360–2.800' },
    { tipe: t('karbon.revenue4Tipe'), vcu: '2–5 tCO₂e', harga: '$8–20', pendapatan: '$16–100' }
  ];

  const benefitSharing = [
    { komponen: t('karbon.benefit1Komponen'), proporsi: '30–50%', keterangan: t('karbon.benefit1Keterangan') },
    { komponen: t('karbon.benefit2Komponen'), proporsi: '20–35%', keterangan: t('karbon.benefit2Keterangan') },
    { komponen: t('karbon.benefit3Komponen'), proporsi: '10–20%', keterangan: t('karbon.benefit3Keterangan') },
    { komponen: t('karbon.benefit4Komponen'), proporsi: '5–15%', keterangan: t('karbon.benefit4Keterangan') },
    { komponen: t('karbon.benefit5Komponen'), proporsi: '10–20%', keterangan: t('karbon.benefit5Keterangan') }
  ];

  const regulasiNasional = [
    { regulasi: 'Perpres No. 98/2021', substansi: t('karbon.reg1Substansi'), relevansi: t('karbon.reg1Relevansi') },
    { regulasi: 'Permenlhk P.21/2022', substansi: t('karbon.reg2Substansi'), relevansi: t('karbon.reg2Relevansi') },
    { regulasi: 'Permenlhk P.9/2021', substansi: t('karbon.reg3Substansi'), relevansi: t('karbon.reg3Relevansi') },
    { regulasi: 'PP No. 23/2021', substansi: t('karbon.reg4Substansi'), relevansi: t('karbon.reg4Relevansi') },
    { regulasi: 'Permen LHK P.7/2018', substansi: t('karbon.reg5Substansi'), relevansi: t('karbon.reg5Relevansi') },
    { regulasi: 'Perpres No. 32/1990', substansi: t('karbon.reg6Substansi'), relevansi: t('karbon.reg6Relevansi') }
  ];

  const standarInternasional = [
    { standar: 'VCS (Verified Carbon Standard)', pengelola: 'Verra', relevansi: t('karbon.std1Relevansi') },
    { standar: 'CCB (Climate, Community & Biodiversity)', pengelola: 'Verra', relevansi: t('karbon.std2Relevansi') },
    { standar: 'CORSIA', pengelola: 'ICAO', relevansi: t('karbon.std3Relevansi') },
    { standar: 'Gold Standard', pengelola: 'Gold Standard Foundation', relevansi: t('karbon.std4Relevansi') },
    { standar: 'Article 6.2 / 6.4', pengelola: 'UNFCCC', relevansi: t('karbon.std5Relevansi') },
    { standar: 'IPCC Guidelines', pengelola: 'IPCC', relevansi: t('karbon.std6Relevansi') }
  ];

  const tujuanGroups = [
    {
      icon: Cloud,
      title: t('karbon.tujuan1Title'),
      items: [
        t('karbon.tujuan1Item1'),
        t('karbon.tujuan1Item2'),
        t('karbon.tujuan1Item3'),
        t('karbon.tujuan1Item4')
      ]
    },
    {
      icon: Bird,
      title: t('karbon.tujuan2Title'),
      items: [
        t('karbon.tujuan2Item1'),
        t('karbon.tujuan2Item2'),
        t('karbon.tujuan2Item3')
      ]
    },
    {
      icon: Heart,
      title: t('karbon.tujuan3Title'),
      items: [
        t('karbon.tujuan3Item1'),
        t('karbon.tujuan3Item2'),
        t('karbon.tujuan3Item3')
      ]
    },
    {
      icon: TrendingUp,
      title: t('karbon.tujuan4Title'),
      items: [
        t('karbon.tujuan4Item1'),
        t('karbon.tujuan4Item2'),
        t('karbon.tujuan4Item3')
      ]
    }
  ];

  const risikoProyek = [
    { kategori: t('karbon.risiko1Kategori'), risiko: t('karbon.risiko1Risiko'), mitigasi: t('karbon.risiko1Mitigasi'), dampak: t('karbon.risikoDampakTinggi'), color: 'text-red-400', bg: 'bg-red-500/10' },
    { kategori: t('karbon.risiko1Kategori'), risiko: t('karbon.risiko2Risiko'), mitigasi: t('karbon.risiko2Mitigasi'), dampak: t('karbon.risikoDampakTinggi'), color: 'text-red-400', bg: 'bg-red-500/10' },
    { kategori: t('karbon.risiko2Kategori'), risiko: t('karbon.risiko3Risiko'), mitigasi: t('karbon.risiko3Mitigasi'), dampak: t('karbon.risikoDampakSedang'), color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { kategori: t('karbon.risiko3Kategori'), risiko: t('karbon.risiko4Risiko'), mitigasi: t('karbon.risiko4Mitigasi'), dampak: t('karbon.risikoDampakTinggi'), color: 'text-red-400', bg: 'bg-red-500/10' },
    { kategori: t('karbon.risiko4Kategori'), risiko: t('karbon.risiko5Risiko'), mitigasi: t('karbon.risiko5Mitigasi'), dampak: t('karbon.risikoDampakSedang'), color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { kategori: t('karbon.risiko5Kategori'), risiko: t('karbon.risiko6Risiko'), mitigasi: t('karbon.risiko6Mitigasi'), dampak: t('karbon.risikoDampakSedang'), color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { kategori: t('karbon.risiko6Kategori'), risiko: t('karbon.risiko7Risiko'), mitigasi: t('karbon.risiko7Mitigasi'), dampak: t('karbon.risikoDampakSedang'), color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { kategori: t('karbon.risiko7Kategori'), risiko: t('karbon.risiko8Risiko'), mitigasi: t('karbon.risiko8Mitigasi'), dampak: t('karbon.risikoDampakTinggi'), color: 'text-red-400', bg: 'bg-red-500/10' },
    { kategori: t('karbon.risiko8Kategori'), risiko: t('karbon.risiko9Risiko'), mitigasi: t('karbon.risiko9Mitigasi'), dampak: t('karbon.risikoDampakTinggi'), color: 'text-red-400', bg: 'bg-red-500/10' },
    { kategori: t('karbon.risiko9Kategori'), risiko: t('karbon.risiko10Risiko'), mitigasi: t('karbon.risiko10Mitigasi'), dampak: t('karbon.risikoDampakSedang'), color: 'text-amber-400', bg: 'bg-amber-500/10' }
  ];

  const rekomendasiStrategis = [
    { prioritas: t('karbon.rekomPrioritasSegera'), item: t('karbon.rekom1Item'), timeline: 'Q1–Q2 2025', sumberdaya: t('karbon.rekom1Sumberdaya'), color: 'text-red-400', borderColor: 'border-red-500' },
    { prioritas: t('karbon.rekomPrioritasSegera'), item: t('karbon.rekom2Item'), timeline: 'Q1–Q2 2025', sumberdaya: t('karbon.rekom2Sumberdaya'), color: 'text-red-400', borderColor: 'border-red-500' },
    { prioritas: t('karbon.rekomPrioritasMenengah'), item: t('karbon.rekom3Item'), timeline: 'Q2–Q4 2025', sumberdaya: t('karbon.rekom3Sumberdaya'), color: 'text-amber-400', borderColor: 'border-amber-500' },
    { prioritas: t('karbon.rekomPrioritasMenengah'), item: t('karbon.rekom4Item'), timeline: 'Q2 2025–Q1 2026', sumberdaya: t('karbon.rekom4Sumberdaya'), color: 'text-amber-400', borderColor: 'border-amber-500' },
    { prioritas: t('karbon.rekomPrioritasPanjang'), item: t('karbon.rekom5Item'), timeline: '2026–2027', sumberdaya: t('karbon.rekom5Sumberdaya'), color: 'text-emerald-400', borderColor: 'border-emerald-500' },
    { prioritas: t('karbon.rekomPrioritasPanjang'), item: t('karbon.rekom6Item'), timeline: '2026–2028', sumberdaya: t('karbon.rekom6Sumberdaya'), color: 'text-emerald-400', borderColor: 'border-emerald-500' }
  ];

  return (
    <>
      <SEO
        title="Project Karbon — Hutan Mineral & Gambut"
        description="Proyek karbon pada hutan mineral dan hutan gambut — Nature-Based Solutions mitigasi perubahan iklim. Cadangan karbon strategis di Kalimantan Tengah hingga 3.000 ton CO₂e/ha."
        url="https://yayasanamal.org/program/karbon"
      />
      <CarbonParticles />
      <div className="pt-20">
        <section className="relative pt-32 pb-16">
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                {t('karbon.badge')}
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
                {t('karbon.heading1')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-forest-light mt-2">
                  {t('karbon.heading2')}
                </span>
              </h1>

              <div className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed mb-8 animate-fade-in-up font-body space-y-4">
                <p>
                  {t('karbon.heroDescription')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12 animate-scale-in">
                {[
                  { value: t('karbon.card1Value'), desc: t('karbon.card1Desc') },
                  { value: t('karbon.card2Value'), desc: t('karbon.card2Desc') },
                  { value: t('karbon.card3Value'), desc: t('karbon.card3Desc') },
                  { value: t('karbon.card4Value'), desc: t('karbon.card4Desc') }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-gold font-black text-lg mb-1">{item.value}</div>
                    <div className="text-xs text-gray-400 font-body">{item.desc}</div>
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
                <span className="section-label-text">{t('karbon.cakupanWilayah')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('karbon.kabupatenTitle')}</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">{t('karbon.kabupatenDesc')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wilayahKabupaten.map((item, idx) => (
                <div key={idx} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">{item.name}</h3>
                  <div className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {item.ekosistem}
                  </div>
                  <p className="text-sm text-gray-400 font-body leading-relaxed">{item.karakteristik}</p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto mt-12">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-center text-white shadow-xl">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-black text-gold">91</div>
                    <div className="text-sm text-emerald-50/80 mt-1">{t('karbon.statKelompokPs')}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-gold">183.531,99</div>
                    <div className="text-sm text-emerald-50/80 mt-1">{t('karbon.statHektar')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/[0.02]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('karbon.ekosistem')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('karbon.duaEkosistem')}</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">{t('karbon.duaEkosistemDesc')}</p>
            </div>

            {ecosystemTypes.map((eco, ecoIdx) => (
              <div key={ecoIdx} className={ecoIdx > 0 ? 'mt-16' : ''}>
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <eco.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-4">{eco.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-6 font-body text-sm">{eco.description}</p>
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                        <p className="text-xs text-emerald-300 font-semibold mb-1">{t('karbon.wilayahDominan')}:</p>
                        <p className="text-xs text-gray-300 font-body leading-relaxed">{eco.wilayahDominan}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-bold text-white mb-4">
                      {ecoIdx === 0 ? t('karbon.potensiKarbonMineral') : t('karbon.potensiKarbonGambut')}
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="py-3 px-4 text-gold font-semibold">{ecoIdx === 0 ? t('karbon.tableTipeHutan') : t('karbon.tableKedalamanGambut')}</th>
                            {ecoIdx === 0 ? (
                              <>
                                <th className="py-3 px-4 text-gold font-semibold">{t('karbon.tableAgb')}</th>
                                <th className="py-3 px-4 text-gold font-semibold">{t('karbon.tableBgb')}</th>
                                <th className="py-3 px-4 text-gold font-semibold">{t('karbon.tableKarbonTotal')}</th>
                              </>
                            ) : (
                              <>
                                <th className="py-3 px-4 text-gold font-semibold">{t('karbon.tableKarbonTanah')}</th>
                                <th className="py-3 px-4 text-gold font-semibold">{t('karbon.tableEmisiPotensial')}</th>
                              </>
                            )}
                            <th className="py-3 px-4 text-gold font-semibold">{t('karbon.tableReferensi')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {eco.carbonData.map((row, ridx) => (
                            <tr key={ridx} className={ridx % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                              <td className="py-3 px-4 text-white font-body whitespace-nowrap">{row.type}</td>
                              <td className="py-3 px-4 text-gray-300 font-body">{row.agb}</td>
                              <td className="py-3 px-4 text-gray-300 font-body">{row.bgb}</td>
                              {ecoIdx === 0 && <td className="py-3 px-4 text-gray-300 font-body">{row.total}</td>}
                              {ecoIdx === 1 && <td className="py-3 px-4 text-gray-300 font-body">{row.total}</td>}
                              <td className="py-3 px-4 text-gray-500 font-body text-xs">{row.ref}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {ecoIdx === 1 && (
                      <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                        <p className="text-sm text-amber-300 font-body">
                          <Trans i18nKey="karbon.benchmarkKatingan" components={{ 0: <span className="font-semibold" /> }} />
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('karbon.metodologi')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('karbon.metodologiTitle')}</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">{t('karbon.metodologiDesc')}</p>
              <p className="text-sm text-gray-400 italic leading-relaxed font-body mt-4 max-w-2xl mx-auto">{t('karbon.sisinfopsNote')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methodologies.map((m, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-xs font-bold px-3 py-1 rounded-lg inline-block mb-4">
                    {m.code}
                  </div>
                  <div className="inline-block bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full mb-4 ml-2">{m.standar}</div>
                  <p className="text-gray-300 font-body text-sm leading-relaxed">{m.aplikasi}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SisinfopsFlowchart />

        <section className="py-24 bg-white/[0.02]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('karbon.kegiatanMitigasi')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('karbon.kegiatanMitigasiTitle')}</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-body">{t('karbon.kegiatanMitigasiDesc')}</p>
            </div>

            <div className="space-y-6">
              {kegiatanMitigasi.map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="grid lg:grid-cols-12 gap-4 items-start">
                    <div className="lg:col-span-1 flex-shrink-0">
                      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="text-white font-black text-sm">{String(item.no).padStart(2, '0')}</span>
                      </div>
                    </div>
                    <div className="lg:col-span-7">
                      <h3 className="text-lg font-bold text-white mb-2">{item.judul}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed font-body">{item.deskripsi}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
                        {item.kpi.map((k, kidx) => (
                          <div key={kidx} className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-1.5 text-xs text-emerald-300 font-body">
                            KPI: {k}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                        <div className={`w-3 h-3 rounded-full ${item.mineral ? 'bg-emerald-400' : 'bg-gray-600'}`} />
                        <span className="text-xs text-gray-400">{t('karbon.hutanMineral')}</span>
                        {item.mineral ? <span className="text-xs text-emerald-400 ml-auto font-bold">&#10003;</span> : <span className="text-xs text-gray-600 ml-auto">—</span>}
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                        <div className={`w-3 h-3 rounded-full ${item.gambut ? 'bg-sky-400' : 'bg-gray-600'}`} />
                        <span className="text-xs text-gray-400">{t('karbon.hutanGambut')}</span>
                        {item.gambut ? <span className="text-xs text-sky-400 ml-auto font-bold">&#10003;</span> : <span className="text-xs text-gray-600 ml-auto">—</span>}
                      </div>
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
                <span className="section-label-text">{t('karbon.kegiatanAdaptasi')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('karbon.adaptasiTitle')}</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-body">{t('karbon.adaptasiDesc')}</p>
            </div>

            <div className="space-y-6">
              {kegiatanAdaptasi.map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="grid lg:grid-cols-12 gap-4 items-start">
                    <div className="lg:col-span-1 flex-shrink-0">
                      <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="text-white font-black text-sm">{String(item.no).padStart(2, '0')}</span>
                      </div>
                    </div>
                    <div className="lg:col-span-7">
                      <h3 className="text-lg font-bold text-white mb-2">{item.judul}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed font-body">{item.deskripsi}</p>
                      <div className="inline-flex items-center gap-1 mt-3 bg-white/10 rounded-full px-3 py-1">
                        <Scale className="h-3 w-3 text-amber-400" />
                        <span className="text-xs text-amber-300 font-body">{item.standar}</span>
                      </div>
                    </div>
                    <div className="lg:col-span-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                        <div className={`w-3 h-3 rounded-full ${item.mineral ? 'bg-emerald-400' : 'bg-gray-600'}`} />
                        <span className="text-xs text-gray-400">{t('karbon.hutanMineral')}</span>
                        {item.mineral ? <span className="text-xs text-emerald-400 ml-auto font-bold">&#10003;</span> : <span className="text-xs text-gray-600 ml-auto">—</span>}
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                        <div className={`w-3 h-3 rounded-full ${item.gambut ? 'bg-sky-400' : 'bg-gray-600'}`} />
                        <span className="text-xs text-gray-400">{t('karbon.hutanGambut')}</span>
                        {item.gambut ? <span className="text-xs text-sky-400 ml-auto font-bold">&#10003;</span> : <span className="text-xs text-gray-600 ml-auto">—</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/[0.02]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('karbon.strategiPrioritas')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('karbon.strategiEkosistem')}</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">{t('karbon.strategiEkosistemDesc')}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    <TreePine className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{t('karbon.hutanMineral')}</h3>
                    <p className="text-sm text-gray-400">{t('karbon.hutanMineralPrioritas')}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {prioritasMineral.map((p, pidx) => (
                    <div key={pidx} className={`${p.bg} border-l-4 ${p.color} rounded-r-xl p-5`}>
                      <h4 className="text-sm font-bold text-white mb-3">{p.prioritas}</h4>
                      <div className="space-y-2">
                        {p.items.map((item, iidx) => (
                          <div key={iidx} className="flex items-center gap-2 text-sm text-gray-300 font-body">
                            <div className="w-1.5 h-1.5 bg-white/50 rounded-full flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-br from-sky-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    <Droplets className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{t('karbon.hutanGambut')}</h3>
                    <p className="text-sm text-gray-400">{t('karbon.hutanGambutPrioritas')}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {prioritasGambut.map((p, pidx) => (
                    <div key={pidx} className={`${p.bg} border-l-4 ${p.color} rounded-r-xl p-5`}>
                      <h4 className="text-sm font-bold text-white mb-3">{p.prioritas}</h4>
                      <div className="space-y-2">
                        {p.items.map((item, iidx) => (
                          <div key={iidx} className="flex items-center gap-2 text-sm text-gray-300 font-body">
                            <div className="w-1.5 h-1.5 bg-white/50 rounded-full flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
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
                <span className="section-label-text">{t('karbon.sistemMrv')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('karbon.mrvTitle')}</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-body">{t('karbon.mrvDesc')}</p>
            </div>

            <div className="overflow-x-auto mb-16">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 px-4 text-gold font-semibold">{t('karbon.mrvTableKomponen')}</th>
                    <th className="py-3 px-4 text-gold font-semibold">{t('karbon.mrvTableMetode')}</th>
                    <th className="py-3 px-4 text-gold font-semibold">{t('karbon.mrvTableFrekuensi')}</th>
                    <th className="py-3 px-4 text-gold font-semibold">{t('karbon.mrvTablePj')}</th>
                    <th className="py-3 px-4 text-gold font-semibold">{t('karbon.mrvTableStandar')}</th>
                  </tr>
                </thead>
                <tbody>
                  {monitoringComponents.map((item, idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white/[0.02]' : ''} border-b border-white/5`}>
                      <td className="py-3 px-4 text-white font-body font-medium">{item.komponen}</td>
                      <td className="py-3 px-4 text-gray-300 font-body text-xs">{item.metode}</td>
                      <td className="py-3 px-4 text-gray-300 font-body text-xs whitespace-nowrap">{item.frekuensi}</td>
                      <td className="py-3 px-4 text-gray-300 font-body text-xs whitespace-nowrap">{item.pj}</td>
                      <td className="py-3 px-4 text-gray-400 font-body text-xs">{item.standar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white mb-2">{t('karbon.siklusPelaporan')}</h3>
              <p className="text-gray-400 font-body">{t('karbon.siklusPelaporanDesc')}</p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { year: t('karbon.siklus0Year'), title: t('karbon.siklus0Title'), desc: t('karbon.siklus0Desc'), color: 'border-amber-500', bg: 'bg-amber-500/10' },
                { year: t('karbon.siklus1Year'), title: t('karbon.siklus1Title'), desc: t('karbon.siklus1Desc'), color: 'border-sky-500', bg: 'bg-sky-500/10' },
                { year: t('karbon.siklus2Year'), title: t('karbon.siklus2Title'), desc: t('karbon.siklus2Desc'), color: 'border-emerald-500', bg: 'bg-emerald-500/10' },
                { year: t('karbon.siklus3Year'), title: t('karbon.siklus3Title'), desc: t('karbon.siklus3Desc'), color: 'border-gold', bg: 'bg-gold/10' },
                { year: t('karbon.siklus4Year'), title: t('karbon.siklus4Title'), desc: t('karbon.siklus4Desc'), color: 'border-purple-500', bg: 'bg-purple-500/10' }
              ].map((item, idx) => (
                <div key={idx} className={`${item.bg} border-l-4 ${item.color} rounded-r-xl p-5 relative`}>
                  <div className="text-sm font-bold text-white mb-1">{item.year}</div>
                  <div className="text-sm text-gray-200 font-body font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-400 font-body mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/[0.02]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('karbon.ekonomiKarbon')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('karbon.ekonomiKarbonTitle')}</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">{t('karbon.ekonomiKarbonDesc')}</p>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-6 text-center">{t('karbon.rantaiNilai')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { step: '01', label: t('karbon.rantaiStep1'), color: 'from-emerald-500 to-teal-600' },
                  { step: '02', label: t('karbon.rantaiStep2'), color: 'from-teal-500 to-cyan-600' },
                  { step: '03', label: t('karbon.rantaiStep3'), color: 'from-cyan-500 to-blue-600' },
                  { step: '04', label: t('karbon.rantaiStep4'), color: 'from-blue-500 to-indigo-600' },
                  { step: '05', label: t('karbon.rantaiStep5'), color: 'from-indigo-500 to-purple-600' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`bg-gradient-to-br ${item.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-sm shadow-lg`}>
                      {item.step}
                    </div>
                    <p className="text-xs text-gray-300 font-body leading-relaxed">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-6 text-center">{t('karbon.estimasiPendapatan')}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 text-gold font-semibold">{t('karbon.revTableTipe')}</th>
                      <th className="py-3 px-4 text-gold font-semibold">{t('karbon.revTableVcu')}</th>
                      <th className="py-3 px-4 text-gold font-semibold">{t('karbon.revTableHarga')}</th>
                      <th className="py-3 px-4 text-gold font-semibold">{t('karbon.revTablePendapatan')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {revenueEstimates.map((item, idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white/[0.02]' : ''} border-b border-white/5`}>
                        <td className="py-3 px-4 text-white font-body">{item.tipe}</td>
                        <td className="py-3 px-4 text-gray-300 font-body">{item.vcu}</td>
                        <td className="py-3 px-4 text-gray-300 font-body">{item.harga}</td>
                        <td className="py-3 px-4 text-gold font-body font-bold">{item.pendapatan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                <p className="text-xs text-amber-300 font-body">
                  <DollarSign className="h-3 w-3 inline mr-1" />
                  {t('karbon.revNote')}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6 text-center">{t('karbon.distribusiManfaat')}</h3>
              <div className="grid md:grid-cols-5 gap-4">
                {benefitSharing.map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                    <div className="text-3xl font-black text-forest-light mb-2">{item.proporsi}</div>
                    <div className="text-sm font-bold text-white mb-2">{item.komponen}</div>
                    <p className="text-xs text-gray-400 font-body leading-relaxed">{item.keterangan}</p>
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
                <span className="section-label-text">{t('karbon.regulasiStandar')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('karbon.regulasiTitle')}</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">{t('karbon.regulasiDesc')}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-gold" />
                  {t('karbon.regulasiNasional')}
                </h3>
                <div className="space-y-4">
                  {regulasiNasional.map((item, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all">
                      <h4 className="text-sm font-bold text-white mb-1">{item.regulasi}</h4>
                      <div className="inline-block bg-emerald-500/20 text-emerald-300 text-xs px-2 py-0.5 rounded mb-2">{item.substansi}</div>
                      <p className="text-xs text-gray-400 font-body">{item.relevansi}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-gold" />
                  {t('karbon.standarInternasional')}
                </h3>
                <div className="space-y-4">
                  {standarInternasional.map((item, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all">
                      <h4 className="text-sm font-bold text-white mb-1">{item.standar}</h4>
                      <div className="inline-block bg-amber-500/20 text-amber-300 text-xs px-2 py-0.5 rounded mb-2">{item.pengelola}</div>
                      <p className="text-xs text-gray-400 font-body">{item.relevansi}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/[0.02]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('karbon.tujuanUtama')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('karbon.tujuanUtamaTitle')}</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">{t('karbon.tujuanUtamaDesc')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {tujuanGroups.map((group, gidx) => (
                <div key={gidx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                      <group.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-black text-white">{group.title}</h3>
                  </div>
                  <ol className="space-y-3">
                    {group.items.map((item, iidx) => (
                      <li key={iidx} className="flex items-start gap-3 text-sm text-gray-300 font-body">
                        <span className="text-gold font-bold flex-shrink-0">{(gidx * 4 + iidx + 1).toString().padStart(2, '0')}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
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
                <span className="section-label-text">{t('karbon.risikoMitigasi')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('karbon.risikoMitigasiTitle')}</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">{t('karbon.risikoMitigasiDesc')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {risikoProyek.map((item, idx) => (
                <div key={idx} className={`${item.bg} border border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-bold text-white/60 uppercase tracking-wider">{item.kategori}</div>
                    <div className={`text-xs font-bold ${item.color} px-3 py-1 rounded-full border ${item.color.replace('text', 'border')}/30`}>
                      {t('karbon.risikoDampak')}: {item.dampak}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-3 flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    {item.risiko}
                  </h3>
                  <div className="border-t border-white/10 pt-3">
                    <p className="text-xs text-gray-400 font-body">
                      <span className="text-emerald-400 font-semibold">{t('karbon.mitigasiLabel')}:</span> {item.mitigasi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/[0.02]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">{t('karbon.kesimpulanRekom')}</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">{t('karbon.kesimpulanTitle')}</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">{t('karbon.kesimpulanDesc')}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Target className="h-5 w-5 text-gold" />
                  {t('karbon.kesimpulan')}
                </h3>
                <p className="text-sm text-gray-300 font-body mb-6 leading-relaxed">
                  <Trans i18nKey="karbon.kesimpulanIntro" components={{ 0: <strong className="font-semibold text-gold" /> }} />
                </p>
                <div className="space-y-3">
                  {[
                    t('karbon.kesimpulanItem1'),
                    t('karbon.kesimpulanItem2'),
                    t('karbon.kesimpulanItem3'),
                    t('karbon.kesimpulanItem4'),
                    t('karbon.kesimpulanItem5'),
                    t('karbon.kesimpulanItem6')
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                      <div className="bg-emerald-500/20 text-emerald-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{idx + 1}</div>
                      <p className="text-sm text-gray-300 font-body leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-gold" />
                  {t('karbon.rekomendasiStrategis')}
                </h3>
                <div className="space-y-4">
                  {rekomendasiStrategis.map((item, idx) => (
                    <div key={idx} className={`bg-white/5 backdrop-blur-sm border-l-4 ${item.borderColor} rounded-r-xl p-5`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-bold ${item.color} uppercase tracking-wider`}>{item.prioritas}</span>
                        <span className="text-xs text-gray-500 font-body">{item.timeline}</span>
                      </div>
                      <p className="text-sm text-white font-bold mb-1">{item.item}</p>
                      <p className="text-xs text-gray-400 font-body">
                        <Clock className="h-3 w-3 inline mr-1" />
                        {item.sumberdaya}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-xs text-gray-400 font-body leading-relaxed max-w-3xl mx-auto">
                <Trans i18nKey="karbon.disclaimer" components={{ 0: <span className="font-semibold" /> }} />
                <br />
                <span className="text-gray-500 mt-2 inline-block">
                  {t('karbon.referensiUtama')}
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-300/10 animate-spin-slow" />

          <div className="container-custom text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              {t('karbon.mulaiKemitraan')}
            </div>

            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">{t('karbon.tertarikKarbon')}</h2>
            <p className="text-xl text-emerald-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
              {t('karbon.tertarikKarbonDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kemitraan" className="bg-gold text-forest-deep font-black py-4 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:bg-yellow-400 hover:scale-105 inline-flex items-center gap-2">
                <Handshake className="h-5 w-5" />
                {t('karbon.bermitraKarbon')}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/kontak" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-emerald-700 font-black py-4 px-12 rounded-2xl transition-all duration-300 hover:scale-105">
                {t('karbon.hubungiKami')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProgramKarbon;
