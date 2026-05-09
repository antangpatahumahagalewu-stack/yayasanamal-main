import React from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf, TreePine, Cloud, MapPin, Users, ArrowRight, TrendingUp, Shield, Droplets,
  Handshake, Globe, ShieldCheck, Activity, FileCheck, Scale, AlertTriangle,
  Target, Clock, DollarSign, Percent, Bird, Flame, Waves, Building2, BookOpen,
  Camera, LineChart, Ruler, Satellite, Zap, Heart, Landmark, BarChart3
} from 'lucide-react';
import CarbonParticles from '../components/CarbonParticles';

const ProgramKarbon: React.FC = () => {
  const wilayahKabupaten = [
    {
      name: 'Kapuas',
      ekosistem: 'Hutan Mineral + Hutan Gambut',
      karakteristik: 'Lanskap campuran, DAS besar, masyarakat adat Dayak'
    },
    {
      name: 'Katingan',
      ekosistem: 'Hutan Gambut',
      karakteristik: 'Kubah gambut dalam, tinggi emisi potensial, keanekaragaman hayati tinggi'
    },
    {
      name: 'Pulang Pisau',
      ekosistem: 'Hutan Gambut',
      karakteristik: 'Lahan gambut eks-PLG, risiko kebakaran tinggi, restorasi intensif'
    },
    {
      name: 'Gunung Mas',
      ekosistem: 'Hutan Mineral',
      karakteristik: 'Hutan pegunungan, DAS hulu, keanekaragaman hayati tinggi'
    }
  ];

  const ecosystemTypes = [
    {
      icon: TreePine,
      title: 'Hutan Mineral',
      description: 'Hutan mineral menyimpan karbon terutama pada biomassa vegetasi di atas permukaan tanah (AGB) dan akar (BGB), dengan kontribusi terbatas dari karbon tanah mineral. Perlindungan tutupan hutan menjadi prioritas absolut.',
      carbonData: [
        { type: 'Hutan Primer (HP)', agb: '250–380', bgb: '50–80', total: '1.100–1.700', ref: 'IPCC Tier 2; KLHK 2021' },
        { type: 'Hutan Sekunder Tua (>20 th)', agb: '150–250', bgb: '30–55', total: '660–1.100', ref: 'Murdiyarso et al. 2019' },
        { type: 'Hutan Sekunder Muda (5–20 th)', agb: '60–150', bgb: '12–30', total: '264–660', ref: 'SNI 7724:2011' },
        { type: 'Hutan Terdegradasi', agb: '20–60', bgb: '4–12', total: '88–264', ref: 'Verra VM0007' }
      ],
      wilayahDominan: 'Gunung Mas (hutan pegunungan, DAS hulu Barito dan Kahayan) serta sebagian Kapuas (zona mineral di luar kubah gambut)'
    },
    {
      icon: Droplets,
      title: 'Hutan Gambut',
      description: 'Ekosistem gambut tropis menyimpan cadangan karbon yang jauh melebihi hutan mineral, sebagian besar di bawah permukaan dalam lapisan gambut yang dapat mencapai kedalaman 10–15 meter. Gangguan hidrologi adalah pemicu utama emisi gambut.',
      carbonData: [
        { type: 'Gambut Dangkal (< 1 m)', agb: '—', bgb: '300–700', total: '—', ref: 'Risiko sedang' },
        { type: 'Gambut Sedang (1–2 m)', agb: '—', bgb: '700–1.400', total: '—', ref: 'Risiko tinggi' },
        { type: 'Gambut Dalam (2–4 m)', agb: '—', bgb: '1.400–2.800', total: '—', ref: 'Risiko sangat tinggi' },
        { type: 'Gambut Sangat Dalam (> 4 m)', agb: '—', bgb: '2.800–6.000+', total: '—', ref: 'Irreversible jika terbakar' }
      ],
      wilayahDominan: 'Katingan (kubah gambut dalam, benchmark Katingan Mentaya), Pulang Pisau (eks-PLG, restorasi intensif BRGM), sebagian Kapuas (gambut transisi dan pesisir DAS)'
    }
  ];

  const methodologies = [
    { code: 'VM0007', standar: 'Verra VCS', aplikasi: 'Pencegahan deforestasi & degradasi hutan mineral (REDD+)' },
    { code: 'VM0036 / VM0012', standar: 'Verra VCS', aplikasi: 'Restorasi & rehabilitasi lahan gambut' },
    { code: 'VM0015', standar: 'Verra VCS', aplikasi: 'Pengelolaan hutan lestari (IFM)' },
    { code: 'VM0032', standar: 'Verra VCS', aplikasi: 'Agroforestri dan peningkatan stok karbon' },
    { code: 'AMS-III.D', standar: 'UNFCCC CDM', aplikasi: 'Pencegahan metana dari dekomposisi gambut' }
  ];

  const kegiatanMitigasi = [
    {
      no: 1, mineral: true, gambut: true,
      judul: 'Pencegahan Deforestasi & Degradasi Hutan',
      deskripsi: 'Perlindungan kawasan hutan dari alih fungsi lahan, pembalakan liar, dan perambahan untuk menjaga cadangan karbon tetap tersimpan di dalam biomassa dan tanah. Mencakup penegakan batas kawasan, patroli rutin, dan resolusi konflik tenurial.',
      kpi: ['Luas hutan terlindungi (ha)', 'Tingkat deforestasi (%/tahun)', 'Jumlah insiden perambahan'],
      icon: Shield
    },
    {
      no: 2, mineral: true, gambut: true,
      judul: 'Rehabilitasi Hutan & Lahan Terdegradasi',
      deskripsi: 'Pemulihan kawasan kritis melalui revegetasi, penanaman kembali spesies lokal, rehabilitasi DAS, serta pengayaan vegetasi alami. Di gambut mencakup revegetasi spesies Shorea balangeran, Dyera costulata, dan jenis rawa gambut endemik.',
      kpi: ['Luas lahan direhabilitasi (ha/tahun)', 'Tingkat keberhasilan tumbuh (%)', 'Biomassa terpulihkan (ton CO₂e/ha)'],
      icon: TreePine
    },
    {
      no: 3, mineral: true, gambut: true,
      judul: 'Pengelolaan Hutan Lestari (SFM)',
      deskripsi: 'Penerapan praktik pengelolaan hutan berkelanjutan seperti Reduced Impact Logging (RIL), silvikultur intensif (SILIN), dan pengaturan rotasi panen untuk menjaga produktivitas dan stok karbon hutan. Mensyaratkan sertifikasi FSC atau PEFC pada area komersial.',
      kpi: ['Volume kayu dipanen vs. MAI', 'Kerusakan tegakan residual (%)', 'Stok karbon terjaga (ton CO₂e/ha)'],
      icon: FileCheck
    },
    {
      no: 4, mineral: false, gambut: true,
      judul: 'Restorasi Hidrologi Gambut & Pengelolaan Tata Air',
      deskripsi: 'Pemulihan fungsi hidrologi melalui pembasahan kembali (rewetting), penutupan kanal, pembangunan sekat kanal (canal blocking), dan pengaturan tata air untuk menjaga kelembapan gambut serta menekan emisi karbon dan risiko kebakaran. Berdasarkan Peatland Rewetting and Conservation (PRC) approach.',
      kpi: ['Jumlah sekat kanal terbangun', 'TMAT rata-rata (cm dari permukaan)', 'Luas kubah gambut terpulihkan (ha)'],
      icon: Waves
    },
    {
      no: 5, mineral: false, gambut: true,
      judul: 'Pemantauan Tinggi Muka Air Tanah (TMAT)',
      deskripsi: 'Pengamatan tinggi muka air tanah gambut secara berkala menggunakan piezometer, water level logger otomatis, atau sumur pantau untuk memastikan kondisi gambut tetap basah sesuai target restorasi. Target TMAT: ≤ 40 cm dari permukaan gambut sesuai regulasi BRG/BRGM Indonesia.',
      kpi: ['TMAT rata-rata musim kemarau (cm)', 'Jumlah titik pantau aktif', '% waktu TMAT ≤ 40 cm'],
      icon: Ruler
    },
    {
      no: 6, mineral: true, gambut: true,
      judul: 'Peningkatan Cadangan Karbon (Carbon Stock Enhancement)',
      deskripsi: 'Pengembangan hutan tanaman, agroforestri, enrichment planting (ENR), dan konservasi vegetasi untuk meningkatkan biomassa dan penyerapan karbon jangka panjang. Pada hutan gambut, termasuk penanaman jenis pohon gambut asli (Calophyllum, Pandanus, Syzygium).',
      kpi: ['Laju sekuestrasi karbon (ton CO₂e/ha/tahun)', 'Luas area ENR (ha)', 'Biomassa tambahan (AGB+BGB, ton/ha)'],
      icon: TrendingUp
    },
    {
      no: 7, mineral: true, gambut: true,
      judul: 'Pencegahan & Pengendalian Kebakaran Hutan dan Lahan (Karhutla)',
      deskripsi: 'Patroli rutin, sistem peringatan dini terintegrasi (LAPAN, BMKG, FIRMS NASA), pembangunan sekat bakar, pengelolaan tata air gambut, pelatihan Masyarakat Peduli Api (MPA), penyediaan sarana pemadaman, serta rencana tanggap darurat (Fire Management Plan).',
      kpi: ['Jumlah hotspot (titik panas/bulan)', 'Luas terbakar (ha/tahun)', 'Waktu respons pemadaman (jam)'],
      icon: Flame
    },
    {
      no: 8, mineral: true, gambut: true,
      judul: 'Perlindungan Keanekaragaman Hayati (Biodiversity Conservation)',
      deskripsi: 'Perlindungan habitat satwa liar dan spesies endemik (orangutan, bekantan, proboscis monkey, ikan arwana, buaya sinyulong) untuk menjaga keseimbangan ekosistem. Menggunakan standar CCB (Climate, Community & Biodiversity Standards) sebagai kerangka co-benefits.',
      kpi: ['Indeks kekayaan spesies', 'Jumlah individu spesies kunci (kamera trap)', '% habitat kritis terlindungi'],
      icon: Bird
    },
    {
      no: 9, mineral: true, gambut: true,
      judul: 'Monitoring, Reporting, and Verification (MRV)',
      deskripsi: 'Pengukuran stok karbon berbasis Permanent Sample Plots (PSP), pemantauan perubahan tutupan lahan dengan citra satelit multispektral (Sentinel-2, Landsat), LiDAR, drone, serta inventarisasi lapangan periodik. Pelaporan sesuai standar Verra VCS dengan verifikasi pihak ketiga akreditasi (Validation and Verification Body / VVB).',
      kpi: ['Jumlah PSP aktif', 'Akurasi peta tutupan lahan (%)', 'Frekuensi verifikasi VVB (tahun)'],
      icon: LineChart
    },
    {
      no: 10, mineral: false, gambut: true,
      judul: 'Pengukuran dan Pelaporan Emisi Gambut (Peat Emission Monitoring)',
      deskripsi: 'Pengukuran emisi CO₂ dan CH₄ dari permukaan gambut menggunakan closed dynamic chamber, eddy covariance tower, dan model emisi berbasis TMAT. Penggunaan Tier 2/Tier 3 IPCC emission factors untuk gambut tropis.',
      kpi: ['Flux emisi CO₂ (g CO₂/m²/hari)', 'Emisi CH₄ (termasuk kanal dan lahan basah)', 'Korelasi TMAT–emisi (R²)'],
      icon: Activity
    },
    {
      no: 11, mineral: false, gambut: true,
      judul: 'Manajemen Karbon Biru (Blue Carbon)',
      deskripsi: 'Integrasi ekosistem mangrove dan rawa pesisir ke dalam perhitungan stok karbon total, jika wilayah proyek berbatasan dengan kawasan pesisir atau muara sungai besar.',
      kpi: ['Luas mangrove terlindungi (ha)', 'Stok karbon mangrove (ton CO₂e/ha)', 'Tingkat abrasi pantai'],
      icon: Waves
    }
  ];

  const kegiatanAdaptasi = [
    {
      no: 1, mineral: true, gambut: true,
      judul: 'Pemberdayaan Masyarakat Lokal & Adat',
      deskripsi: 'Penguatan kapasitas masyarakat melalui pelatihan, pendidikan lingkungan, peningkatan peran perempuan dan pemuda, pengembangan kelembagaan desa, serta pemenuhan hak Free, Prior and Informed Consent (FPIC) masyarakat adat.',
      standar: 'CCB Standard · IFC PS7 · UNDRIP',
      icon: Users
    },
    {
      no: 2, mineral: true, gambut: true,
      judul: 'Pengembangan Ekonomi Hijau Berkelanjutan',
      deskripsi: 'Diversifikasi mata pencaharian melalui hasil hutan bukan kayu (HHBK/NTFP) seperti madu (Trigona dan Apis), rotan, purun, tanaman obat, perikanan rawa (ikan arwana, papuyu), ekowisata, serta usaha berbasis jasa lingkungan (Payment for Ecosystem Services / PES).',
      standar: 'SDG 8 · SDG 15 · VCS co-benefits',
      icon: DollarSign
    },
    {
      no: 3, mineral: true, gambut: true,
      judul: 'Pengembangan Agroforestri dan Pertanian Berkelanjutan',
      deskripsi: 'Integrasi tanaman kehutanan (karet, tengkawang, jelutung) dan pertanian (padi, hortikultura lokal) untuk meningkatkan produktivitas lahan tanpa konversi hutan. Pada gambut: pengembangan paludikultur (pertanian berbasis lahan basah) dengan jenis sagu, purun, dan jelutung.',
      standar: 'VM0032 Verra · FAO Agroforestry',
      icon: TreePine
    },
    {
      no: 4, mineral: true, gambut: true,
      judul: 'Pembangunan Infrastruktur Ramah Lingkungan',
      deskripsi: 'Pengembangan energi biomassa, biogas komunal, panel surya skala desa, pengelolaan air bersih berbasis DAS, jembatan ramah satwa liar (wildlife crossing), serta infrastruktur adaptif terhadap banjir dan kekeringan.',
      standar: 'SDG 7 · SDG 11 · Green Infrastructure',
      icon: Building2
    },
    {
      no: 5, mineral: true, gambut: true,
      judul: 'Penguatan Tata Kelola & Kelembagaan',
      deskripsi: 'Penyusunan Rencana Pengelolaan Hutan Jangka Panjang (RPHJP), penguatan regulasi desa (peraturan desa perlindungan hutan), pembentukan kelompok pengelola kawasan, dan peningkatan transparansi pengelolaan proyek karbon melalui sistem pelaporan terbuka.',
      standar: 'PP No. 23/2021 · Permenlhk P.9/2021',
      icon: Landmark
    },
    {
      no: 6, mineral: true, gambut: true,
      judul: 'Kolaborasi dan Kemitraan Multipihak',
      deskripsi: 'Kerja sama terstruktur antara pemerintah pusat dan daerah, masyarakat adat, sektor swasta (off-taker karbon), akademisi, NGO konservasi, dan lembaga internasional (UNDP, World Bank, GEF, GCF) untuk mendukung keberlanjutan proyek jangka panjang.',
      standar: 'UNFCCC · Paris Agreement Art. 6',
      icon: Handshake
    },
    {
      no: 7, mineral: true, gambut: true,
      judul: 'Partisipasi dalam Pasar dan Standar Karbon Internasional',
      deskripsi: 'Pengembangan proyek sesuai standar Verra VCS, CCB, CORSIA (penerbangan), dan mekanisme perdagangan karbon nasional (Pasar Karbon Indonesia / IDXCarbon, SPEI) maupun internasional (Article 6.2 bilateral dan Article 6.4 UNFCCC multilateral).',
      standar: 'Perpres 98/2021 · Permenlhk P.21/2022',
      icon: Globe
    },
    {
      no: 8, mineral: true, gambut: true,
      judul: 'Penguatan Ketahanan Pangan Berbasis Ekosistem',
      deskripsi: 'Pengembangan sistem pangan lokal berbasis ekosistem hutan (forest-based food systems): budidaya ikan lokal, pemanfaatan pangan hutan (tuber, buah-buahan hutan, madu), dan bank benih lokal untuk adaptasi terhadap perubahan iklim.',
      standar: 'SDG 2 · FAO SAFA Framework',
      icon: Leaf
    },
    {
      no: 9, mineral: true, gambut: true,
      judul: 'Pendidikan dan Penyadaran Iklim (Climate Literacy)',
      deskripsi: 'Program pendidikan iklim untuk sekolah, pemuda desa, dan kader lingkungan: materi perubahan iklim kontekstual lokal, kartografi partisipatif (participatory mapping), dan pelatihan pemantauan lingkungan berbasis komunitas.',
      standar: 'SDG 4 · SDG 13 · UNESCO ESD',
      icon: BookOpen
    }
  ];

  const prioritasMineral = [
    {
      prioritas: 'PRIORITAS 1 — Perlindungan',
      items: ['Penegakan batas kawasan & patroli rutin', 'Resolusi konflik tenurial & FPIC', 'Sistem peringatan dini deforestasi (GLAD Alert, GFW)'],
      color: 'border-red-500',
      bg: 'bg-red-500/10'
    },
    {
      prioritas: 'PRIORITAS 2 — Pengelolaan',
      items: ['Implementasi SFM & RIL', 'Inventarisasi karbon berkala (PSP)', 'Pengembangan RPHJP berbasis karbon'],
      color: 'border-amber-500',
      bg: 'bg-amber-500/10'
    },
    {
      prioritas: 'PRIORITAS 3 — Restorasi',
      items: ['Revegetasi kawasan kritis', 'Enrichment planting (ENR) spesies lokal', 'Rehabilitasi DAS hulu'],
      color: 'border-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      prioritas: 'PRIORITAS 4 — Pemberdayaan',
      items: ['Agroforestri & NTFP', 'Patroli berbasis masyarakat (MPA)', 'Ekowisata berbasis hutan'],
      color: 'border-blue-500',
      bg: 'bg-blue-500/10'
    }
  ];

  const prioritasGambut = [
    {
      prioritas: 'PRIORITAS 1 — Hidrologi',
      items: ['Pembangunan sekat kanal & bunding', 'Rewetting kubah gambut', 'Pemantauan TMAT (target: ≤ 40 cm)'],
      color: 'border-sky-500',
      bg: 'bg-sky-500/10'
    },
    {
      prioritas: 'PRIORITAS 2 — Perlindungan Kebakaran',
      items: ['Sistem deteksi dini hotspot (FIRMS, LAPAN)', 'Pelatihan & mobilisasi MPA', 'Penyediaan pompa & peralatan pemadaman', 'Rencana kontingensi kebakaran gambut'],
      color: 'border-red-500',
      bg: 'bg-red-500/10'
    },
    {
      prioritas: 'PRIORITAS 3 — Monitoring',
      items: ['Pengukuran flux CO₂/CH₄ (chamber & tower)', 'Citra satelit & drone periodik', 'Inventarisasi PSP stok karbon gambut'],
      color: 'border-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      prioritas: 'PRIORITAS 4 — Revegetasi',
      items: ['Penanaman spesies gambut asli', 'Pengembangan paludikultur', 'Pembibitan spesies rawa lokal'],
      color: 'border-green-500',
      bg: 'bg-green-500/10'
    },
    {
      prioritas: 'PRIORITAS 5 — Pemberdayaan',
      items: ['Pengembangan NTFP gambut (purun, sagu, madu)', 'Perikanan rawa berkelanjutan', 'Desa bebas bakar (FireFree Village)'],
      color: 'border-blue-500',
      bg: 'bg-blue-500/10'
    }
  ];

  const monitoringComponents = [
    { komponen: 'Stok Karbon Biomassa', metode: 'PSP (Permanent Sample Plot), allometric equation', frekuensi: '5 tahun sekali', pj: 'Tim Inventarisasi', standar: 'Verra VCS VM0007', icon: Ruler },
    { komponen: 'Tutupan Lahan', metode: 'Sentinel-2, Landsat 8/9, Planet Scope', frekuensi: 'Bulanan / Tahunan', pj: 'Tim GIS', standar: 'ATCOR classification', icon: Satellite },
    { komponen: 'Tinggi Muka Air Tanah (TMAT)', metode: 'Piezometer, water level logger otomatis', frekuensi: 'Harian / Mingguan', pj: 'Tim Hidrologi', standar: 'BRGM Standard', icon: Waves },
    { komponen: 'Emisi CO₂ Gambut', metode: 'Closed dynamic chamber, eddy covariance', frekuensi: 'Mingguan / Musiman', pj: 'Tim Gambut', standar: 'IPCC Tier 2/3', icon: Cloud },
    { komponen: 'Hotspot & Kebakaran', metode: 'FIRMS NASA, LAPAN, drone thermal', frekuensi: 'Real-time', pj: 'Tim Karhutla', standar: 'Fire Management Plan', icon: Flame },
    { komponen: 'Biodiversitas', metode: 'Camera trap, line transect, point count', frekuensi: 'Tahunan', pj: 'Tim Biodiversitas', standar: 'CCB Standard', icon: Camera },
    { komponen: 'Sosial-Ekonomi', metode: 'Survei rumah tangga, FGD, key informant', frekuensi: '3 tahun sekali', pj: 'Tim Sosial', standar: 'CCB Standard · SDGs', icon: Users },
    { komponen: 'Curah Hujan', metode: 'AWS (Automatic Weather Station)', frekuensi: 'Harian', pj: 'Tim Hidrologi', standar: 'BMKG Standard', icon: Zap },
    { komponen: 'Perubahan Garis Pantai / Mangrove', metode: 'Citra satelit multitemporal', frekuensi: 'Tahunan', pj: 'Tim GIS', standar: 'Blue Carbon Protocol', icon: Globe }
  ];

  const revenueEstimates = [
    { tipe: 'REDD+ Hutan Mineral', vcu: '3–8 tCO₂e', harga: '$8–25', pendapatan: '$24–200' },
    { tipe: 'REDD+ + Restorasi Gambut', vcu: '15–50 tCO₂e', harga: '$10–30', pendapatan: '$150–1.500' },
    { tipe: 'Gambut Dalam (> 3m)', vcu: '30–80 tCO₂e', harga: '$12–35', pendapatan: '$360–2.800' },
    { tipe: 'Agroforestri + Hutan', vcu: '2–5 tCO₂e', harga: '$8–20', pendapatan: '$16–100' }
  ];

  const benefitSharing = [
    { komponen: 'Masyarakat Desa / Adat', proporsi: '30–50%', keterangan: 'Langsung ke rekening kelompok / koperasi desa' },
    { komponen: 'Kegiatan Proyek (operasional)', proporsi: '20–35%', keterangan: 'Implementasi mitigasi & adaptasi' },
    { komponen: 'Pengelola Proyek (YAMAL/Yayasan)', proporsi: '10–20%', keterangan: 'Administrasi, MRV, pengembangan kapasitas' },
    { komponen: 'Pemerintah Daerah', proporsi: '5–15%', keterangan: 'Pajak, retribusi, PNBP' },
    { komponen: 'Cadangan Buffer (karbon)', proporsi: '10–20%', keterangan: 'Sesuai Verra buffer pool requirements' }
  ];

  const regulasiNasional = [
    { regulasi: 'Perpres No. 98/2021', substansi: 'Nilai Ekonomi Karbon (NEK)', relevansi: 'Landasan hukum perdagangan karbon Indonesia' },
    { regulasi: 'Permenlhk P.21/2022', substansi: 'Tata cara pelaksanaan NEK', relevansi: 'Prosedur registrasi, perdagangan, verifikasi' },
    { regulasi: 'Permenlhk P.9/2021', substansi: 'Pengelolaan hutan berbasis masyarakat', relevansi: 'Skema Perhutanan Sosial (PS)' },
    { regulasi: 'PP No. 23/2021', substansi: 'Penyelenggaraan Kehutanan', relevansi: 'Dasar hukum pengelolaan hutan' },
    { regulasi: 'Permen LHK P.7/2018', substansi: 'Pengelolaan Ekosistem Gambut', relevansi: 'Restorasi dan perlindungan gambut' },
    { regulasi: 'Perpres No. 32/1990', substansi: 'Kawasan Lindung', relevansi: 'Definisi dan perlindungan kawasan' }
  ];

  const standarInternasional = [
    { standar: 'VCS (Verified Carbon Standard)', pengelola: 'Verra', relevansi: 'Sertifikasi VCU utama pasar sukarela' },
    { standar: 'CCB (Climate, Community & Biodiversity)', pengelola: 'Verra', relevansi: 'Co-benefits sosial dan biodiversitas' },
    { standar: 'CORSIA', pengelola: 'ICAO', relevansi: 'Kompensasi karbon penerbangan internasional' },
    { standar: 'Gold Standard', pengelola: 'Gold Standard Foundation', relevansi: 'Standar alternatif, kuat di SDGs' },
    { standar: 'Article 6.2 / 6.4', pengelola: 'UNFCCC', relevansi: 'Mekanisme pasar karbon internasional' },
    { standar: 'IPCC Guidelines', pengelola: 'IPCC', relevansi: 'Metodologi inventarisasi GHG' }
  ];

  const tujuanGroups = [
    {
      icon: Cloud,
      title: 'Mitigasi Iklim',
      items: [
        'Mengurangi emisi gas rumah kaca dari deforestasi, degradasi, oksidasi gambut, dan kebakaran (avoided emissions)',
        'Meningkatkan penyerapan karbon melalui restorasi, rehabilitasi, dan konservasi (removals)',
        'Mendukung target iklim nasional (NDC Indonesia: -29% tanpa kondisionalitas, -41% dengan dukungan internasional, berbasis 2030)',
        'Berkontribusi pada Net Zero Emission Indonesia 2060 dan global 1,5°C pathway'
      ]
    },
    {
      icon: Bird,
      title: 'Konservasi Ekosistem',
      items: [
        'Melindungi keanekaragaman hayati dan fungsi ekologis hutan tropis',
        'Memulihkan ekosistem gambut yang terdegradasi untuk ketahanan jangka panjang',
        'Menjaga fungsi DAS sebagai penyedia air bagi masyarakat hilir'
      ]
    },
    {
      icon: Heart,
      title: 'Sosial-Ekonomi',
      items: [
        'Meningkatkan kesejahteraan masyarakat lokal melalui ekonomi hijau dan PES',
        'Memperkuat hak-hak masyarakat adat (indigenous peoples\' rights) sesuai UNDRIP',
        'Menciptakan lapangan kerja hijau (green jobs) berbasis hutan'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Ekonomi Karbon',
      items: [
        'Menghasilkan Verified Carbon Units (VCU) yang diperdagangkan di pasar karbon',
        'Membangun portofolio proyek karbon berkualitas tinggi di Kalimantan Tengah',
        'Menarik investasi iklim (climate finance) untuk pembangunan berkelanjutan daerah'
      ]
    }
  ];

  const risikoProyek = [
    { kategori: 'Risiko Permanen', risiko: 'Kebakaran hutan skala besar', mitigasi: 'Buffer pool Verra + FMP + MPA', dampak: 'Tinggi', color: 'text-red-400', bg: 'bg-red-500/10' },
    { kategori: 'Risiko Permanen', risiko: 'Deforestasi akibat tekanan eksternal', mitigasi: 'Penegakan hukum + resolusi konflik', dampak: 'Tinggi', color: 'text-red-400', bg: 'bg-red-500/10' },
    { kategori: 'Risiko Leakage', risiko: 'Perpindahan aktivitas ke area lain', mitigasi: 'Analisis leakage + monitoring landscape', dampak: 'Sedang', color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { kategori: 'Risiko Additionality', risiko: 'Proyek tidak memenuhi syarat additionality', mitigasi: 'Analisis baseline ketat + financial additionality', dampak: 'Tinggi', color: 'text-red-400', bg: 'bg-red-500/10' },
    { kategori: 'Risiko Verifikasi', risiko: 'Gagal verifikasi VVB', mitigasi: 'Persiapan dokumentasi + pre-audit', dampak: 'Sedang', color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { kategori: 'Risiko Pasar', risiko: 'Penurunan harga VCU', mitigasi: 'Diversifikasi off-taker + long-term contract', dampak: 'Sedang', color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { kategori: 'Risiko Regulasi', risiko: 'Perubahan kebijakan NEK', mitigasi: 'Legal review + engagement pemerintah', dampak: 'Sedang', color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { kategori: 'Risiko Sosial', risiko: 'Konflik komunitas / FPIC tidak terpenuhi', mitigasi: 'Proses FPIC genuine + benefit sharing adil', dampak: 'Tinggi', color: 'text-red-400', bg: 'bg-red-500/10' },
    { kategori: 'Risiko Hidrologi', risiko: 'Kekeringan ekstrem El Niño', mitigasi: 'Manajemen tata air + early warning system', dampak: 'Tinggi', color: 'text-red-400', bg: 'bg-red-500/10' },
    { kategori: 'Risiko Data', risiko: 'Kualitas data MRV rendah', mitigasi: 'Capacity building tim + standarisasi protokol', dampak: 'Sedang', color: 'text-amber-400', bg: 'bg-amber-500/10' }
  ];

  const rekomendasiStrategis = [
    { prioritas: 'SEGERA', item: 'Finalisasi baseline carbon stock seluruh 91 PS unit', timeline: 'Q1–Q2 2025', sumberdaya: 'Tim MRV + konsultan VCS', color: 'text-red-400', borderColor: 'border-red-500' },
    { prioritas: 'SEGERA', item: 'Pembangunan sistem TMAT otomatis di area gambut', timeline: 'Q1–Q2 2025', sumberdaya: 'Anggaran teknis + BRGM', color: 'text-red-400', borderColor: 'border-red-500' },
    { prioritas: 'MENENGAH', item: 'Penyusunan PDD (Project Design Document) per kluster', timeline: 'Q2–Q4 2025', sumberdaya: 'Konsultan Verra akreditasi', color: 'text-amber-400', borderColor: 'border-amber-500' },
    { prioritas: 'MENENGAH', item: 'Pengembangan platform SISINFOPS terintegrasi MRV', timeline: 'Q2 2025–Q1 2026', sumberdaya: 'Tim IT internal', color: 'text-amber-400', borderColor: 'border-amber-500' },
    { prioritas: 'JANGKA PANJANG', item: 'Validasi pertama VVB & penerbitan VCU', timeline: '2026–2027', sumberdaya: 'Pendanaan awal (pre-financing)', color: 'text-emerald-400', borderColor: 'border-emerald-500' },
    { prioritas: 'JANGKA PANJANG', item: 'Pengembangan pasar karbon domestik (IDXCarbon)', timeline: '2026–2028', sumberdaya: 'Legal & compliance team', color: 'text-emerald-400', borderColor: 'border-emerald-500' }
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
                Project Karbon
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up">
                Project Karbon
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-forest-light mt-2">
                  Hutan Mineral & Gambut
                </span>
              </h1>

              <div className="text-xl lg:text-2xl text-emerald-50/90 leading-relaxed mb-8 animate-fade-in-up font-body space-y-4">
                <p>
                  Proyek karbon pada hutan mineral dan hutan gambut merupakan instrumen mitigasi perubahan iklim berbasis alam (Nature-Based Solutions / NbS) yang paling efektif secara biaya di tingkat global. Ekosistem tropis Indonesia — khususnya di Kalimantan Tengah — menyimpan cadangan karbon dalam jumlah yang sangat strategis: hutan gambut tropis dapat menyimpan hingga <strong className="text-gold">2.000–3.000 ton CO₂e/ha</strong>, sementara hutan mineral tropis menyimpan rata-rata <strong className="text-gold">150–400 ton CO₂e/ha</strong> biomassa di atas dan bawah permukaan.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12 animate-scale-in">
                {[
                  { value: 'Mencegah Emisi', desc: 'Deforestasi, degradasi & oksidasi gambut' },
                  { value: 'Menyerap Karbon', desc: 'Restorasi & konservasi hutan' },
                  { value: 'Kredit Karbon', desc: 'VCU untuk pasar karbon global' },
                  { value: 'Co-benefits', desc: 'Kesejahteraan masyarakat lokal & adat' }
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
                <span className="section-label-text">Cakupan Wilayah</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">4 Kabupaten Project Karbon</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">Wilayah proyek di Kalimantan Tengah bersama 91 Kelompok Perhutanan Sosial</p>
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
                    <div className="text-sm text-emerald-50/80 mt-1">Kelompok Perhutanan Sosial</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-gold">183.531,99</div>
                    <div className="text-sm text-emerald-50/80 mt-1">Total Hektar Area Kerja</div>
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
                <span className="section-label-text">Ekosistem</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Dua Ekosistem Vital</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">Hutan mineral dan hutan gambut — dua ekosistem dengan karakteristik dan strategi pengelolaan karbon yang sangat berbeda</p>
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
                        <p className="text-xs text-emerald-300 font-semibold mb-1">Wilayah Dominan:</p>
                        <p className="text-xs text-gray-300 font-body leading-relaxed">{eco.wilayahDominan}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-bold text-white mb-4">
                      {ecoIdx === 0 ? 'Potensi Karbon Referensi (Hutan Mineral Kalimantan)' : 'Potensi Karbon Gambut (Referensi Kalimantan Tengah)'}
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="py-3 px-4 text-gold font-semibold">{ecoIdx === 0 ? 'Tipe Hutan' : 'Kedalaman Gambut'}</th>
                            {ecoIdx === 0 ? (
                              <>
                                <th className="py-3 px-4 text-gold font-semibold">AGB (ton/ha)</th>
                                <th className="py-3 px-4 text-gold font-semibold">BGB (ton/ha)</th>
                                <th className="py-3 px-4 text-gold font-semibold">Karbon Total (ton CO₂e/ha)</th>
                              </>
                            ) : (
                              <>
                                <th className="py-3 px-4 text-gold font-semibold">Karbon Tanah (ton C/ha)</th>
                                <th className="py-3 px-4 text-gold font-semibold">Emisi Potensial (ton CO₂e/ha/tahun)</th>
                              </>
                            )}
                            <th className="py-3 px-4 text-gold font-semibold">Referensi</th>
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
                          <strong>Benchmark Proyek Katingan Mentaya:</strong> Sebagai proyek karbon gambut terbesar di dunia (120.000+ ha), menghasilkan {'>'}7,5 juta VCU/tahun dengan kandungan karbon tanah rata-rata {'>'}2.400 ton CO₂e/ha. Proyek YAMAL berada dalam konteks lanskap yang sama.
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
                <span className="section-label-text">Metodologi</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Metodologi Karbon yang Relevan</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">Standar dan metodologi internasional yang digunakan dalam project karbon YAMAL</p>
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

        <section className="py-24 bg-white/[0.02]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="section-label">
                <div className="section-label-line" />
                <span className="section-label-text">Kegiatan Mitigasi</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Kegiatan Mitigasi Karbon</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-body">Pengurangan emisi dan peningkatan serapan karbon melalui 11 kegiatan mitigasi terintegrasi</p>
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
                        <span className="text-xs text-gray-400">Hutan Mineral</span>
                        {item.mineral ? <span className="text-xs text-emerald-400 ml-auto font-bold">&#10003;</span> : <span className="text-xs text-gray-600 ml-auto">—</span>}
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                        <div className={`w-3 h-3 rounded-full ${item.gambut ? 'bg-sky-400' : 'bg-gray-600'}`} />
                        <span className="text-xs text-gray-400">Hutan Gambut</span>
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
                <span className="section-label-text">Kegiatan Adaptasi</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Adaptasi & Pemberdayaan Masyarakat</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-body">Peningkatan ketahanan sosial, ekonomi, dan ekologi melalui 9 kegiatan adaptasi dan pemberdayaan</p>
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
                        <span className="text-xs text-gray-400">Hutan Mineral</span>
                        {item.mineral ? <span className="text-xs text-emerald-400 ml-auto font-bold">&#10003;</span> : <span className="text-xs text-gray-600 ml-auto">—</span>}
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                        <div className={`w-3 h-3 rounded-full ${item.gambut ? 'bg-sky-400' : 'bg-gray-600'}`} />
                        <span className="text-xs text-gray-400">Hutan Gambut</span>
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
                <span className="section-label-text">Strategi Prioritas</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Strategi Berdasarkan Ekosistem</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">Pendekatan prioritas yang disesuaikan dengan karakteristik masing-masing ekosistem</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    <TreePine className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">Hutan Mineral</h3>
                    <p className="text-sm text-gray-400">Prioritas absolut: perlindungan tutupan hutan</p>
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
                    <h3 className="text-xl font-black text-white">Hutan Gambut</h3>
                    <p className="text-sm text-gray-400">Prioritas absolut: restorasi hidrologi gambut</p>
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
                <span className="section-label-text">Sistem MRV</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Monitoring, Reporting & Verification</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-body">Monitoring proyek karbon harus memenuhi standar measurable, reportable, and verifiable sesuai Verra VCS dan regulasi nasional</p>
            </div>

            <div className="overflow-x-auto mb-16">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 px-4 text-gold font-semibold">Komponen Monitoring</th>
                    <th className="py-3 px-4 text-gold font-semibold">Metode / Alat</th>
                    <th className="py-3 px-4 text-gold font-semibold">Frekuensi</th>
                    <th className="py-3 px-4 text-gold font-semibold">Penanggung Jawab</th>
                    <th className="py-3 px-4 text-gold font-semibold">Standar Acuan</th>
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
              <h3 className="text-2xl font-black text-white mb-2">Siklus Pelaporan dan Verifikasi</h3>
              <p className="text-gray-400 font-body">Siklus proyek karbon 5–10 tahun</p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { year: 'Tahun 0', title: 'Baseline Survey & PDD', desc: 'Project Design Document', color: 'border-amber-500', bg: 'bg-amber-500/10' },
                { year: 'Tahun 1', title: 'Implementasi Awal', desc: 'Monitoring dasar', color: 'border-sky-500', bg: 'bg-sky-500/10' },
                { year: 'Tahun 2–4', title: 'Monitoring Rutin', desc: 'Pelaporan tahunan internal', color: 'border-emerald-500', bg: 'bg-emerald-500/10' },
                { year: 'Tahun 5', title: 'Verifikasi Pertama', desc: 'VVB → Issuance VCU pertama', color: 'border-gold', bg: 'bg-gold/10' },
                { year: 'Tahun 10', title: 'Re-verification', desc: 'Renewal PDD', color: 'border-purple-500', bg: 'bg-purple-500/10' }
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
                <span className="section-label-text">Ekonomi Karbon</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Kerangka Ekonomi Karbon</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">Rantai nilai, estimasi pendapatan, dan distribusi manfaat project karbon</p>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Rantai Nilai Proyek Karbon</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { step: '01', label: 'Kegiatan Lapangan + Data MRV', color: 'from-emerald-500 to-teal-600' },
                  { step: '02', label: 'PDD & Validasi VVB', color: 'from-teal-500 to-cyan-600' },
                  { step: '03', label: 'Verifikasi → Issuance VCU oleh Verra', color: 'from-cyan-500 to-blue-600' },
                  { step: '04', label: 'Penjualan di Pasar Karbon', color: 'from-blue-500 to-indigo-600' },
                  { step: '05', label: 'Distribusi Manfaat ke Masyarakat', color: 'from-indigo-500 to-purple-600' }
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
              <h3 className="text-xl font-bold text-white mb-6 text-center">Estimasi Pendapatan Karbon (Referensi Benchmark)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 text-gold font-semibold">Tipe Proyek</th>
                      <th className="py-3 px-4 text-gold font-semibold">Estimasi VCU/ha/tahun</th>
                      <th className="py-3 px-4 text-gold font-semibold">Harga Pasar (USD/VCU)</th>
                      <th className="py-3 px-4 text-gold font-semibold">Pendapatan Gross (USD/ha/tahun)</th>
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
                  Harga VCU bervariasi berdasarkan co-benefits (CCB label, SDGs alignment, biodiversity), vintage tahun, jenis pembeli, dan mekanisme pasar (voluntary vs. compliance). Harga premium dapat mencapai $30–50/VCU untuk proyek dengan label CCB Gold + biodiversity premium.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6 text-center">Distribusi Manfaat (Benefit Sharing)</h3>
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
                <span className="section-label-text">Regulasi & Standar</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Kerangka Regulasi dan Kebijakan</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">Landasan hukum nasional dan standar internasional yang mendasari project karbon</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-gold" />
                  Regulasi Nasional Indonesia
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
                  Standar Internasional
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
                <span className="section-label-text">Tujuan Utama</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Tujuan Utama Proyek Karbon</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">Hierarki tujuan yang menyeluruh — dari mitigasi iklim hingga ekonomi karbon</p>
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
                <span className="section-label-text">Risiko & Mitigasi</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Risiko dan Mitigasi Risiko Proyek</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">Identifikasi, strategi mitigasi, dan penilaian dampak risiko project karbon</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {risikoProyek.map((item, idx) => (
                <div key={idx} className={`${item.bg} border border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-bold text-white/60 uppercase tracking-wider">{item.kategori}</div>
                    <div className={`text-xs font-bold ${item.color} px-3 py-1 rounded-full border ${item.color.replace('text', 'border')}/30`}>
                      Dampak: {item.dampak}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-3 flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    {item.risiko}
                  </h3>
                  <div className="border-t border-white/10 pt-3">
                    <p className="text-xs text-gray-400 font-body">
                      <span className="text-emerald-400 font-semibold">Mitigasi:</span> {item.mitigasi}
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
                <span className="section-label-text">Kesimpulan & Rekomendasi</span>
                <div className="section-label-line" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Kesimpulan dan Rekomendasi Strategis</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">Enam pilar keberhasilan dan rekomendasi strategis untuk YAMAL</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Target className="h-5 w-5 text-gold" />
                  Kesimpulan
                </h3>
                <p className="text-sm text-gray-300 font-body mb-6 leading-relaxed">
                  Keberhasilan proyek karbon memerlukan <strong className="text-gold">pendekatan terintegrasi</strong> yang menggabungkan:
                </p>
                <div className="space-y-3">
                  {[
                    'Perlindungan ekosistem — menjaga stok karbon yang ada dari deforestasi dan degradasi',
                    'Pengelolaan hutan berkelanjutan — mengoptimalkan produktivitas tanpa mengorbankan karbon',
                    'Restorasi kawasan terdegradasi — memulihkan ekosistem dan meningkatkan sekuestrasi karbon',
                    'Pengelolaan hidrologi gambut — kunci utama pengurangan emisi gambut tropis',
                    'Pemberdayaan masyarakat lokal — fondasi sosial keberhasilan proyek jangka panjang',
                    'Sistem MRV yang robust — syarat mutlak penerbitan VCU yang credible'
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
                  Rekomendasi Strategis untuk YAMAL
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
                <strong>Dokumen ini disusun berdasarkan praktik terbaik proyek karbon internasional,</strong> standar Verra VCS/CCB, regulasi NEK Indonesia (Perpres 98/2021), dan konteks spesifik wilayah kerja YAMAL di Kalimantan Tengah.
                <br />
                <span className="text-gray-500 mt-2 inline-block">
                  Referensi Utama: Verra (2022) VCS Standard v4.4 · IPCC (2014) Wetlands Supplement · KLHK (2021) Tier 2 Emission Factors Indonesia · BRG/BRGM Peatland Restoration Guidelines · Murdiyarso et al. (2019) Tropical Peatland Carbon · Katingan Mentaya Project PDD (2016, rev. 2022)
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
              Mulai Kemitraan
            </div>

            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Tertarik dengan Project Karbon Kami?</h2>
            <p className="text-xl text-emerald-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body">
              YAMAL membuka kemitraan dengan buyer karbon kredit, broker, investor,
              dan perusahaan yang berkomitmen pada net-zero emission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kemitraan" className="bg-gold text-forest-deep font-black py-4 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:bg-yellow-400 hover:scale-105 inline-flex items-center gap-2">
                <Handshake className="h-5 w-5" />
                Bermitra Project Karbon
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/kontak" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-emerald-700 font-black py-4 px-12 rounded-2xl transition-all duration-300 hover:scale-105">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProgramKarbon;
