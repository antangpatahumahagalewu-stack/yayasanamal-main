import React from 'react';
import { ChevronRight, MapPin, Crown, Shield, Heart } from 'lucide-react';
import CarbonParticles from '../../components/CarbonParticles';

const StrukturOrganisasi: React.FC = () => {
  const boardMembers = [
    {
      name: 'Miko Duwiter, S.Hut, M.Si',
      position: 'Ketua Dewan Pembina',
      background: 'Forestry Expert, Ahli Perhutanan Sosial',
      experience: '20+ tahun',
      icon: Crown,
      initials: 'MD'
    },
    {
      name: 'Joko Listianto, S.Hut',
      position: 'Anggota Dewan Pembina',
      background: 'Forestry Expert, Ahli Perhutanan Sosial',
      experience: '20+ tahun',
      icon: Shield,
      initials: 'JL'
    },
    {
      name: 'Herodes Djaya Prawira Atmaja, S.Hut',
      position: 'Anggota Dewan Pembina',
      background: 'Forestry Expert, Ahli Perhutanan Sosial',
      experience: '20+ tahun',
      icon: Heart,
      initials: 'HD'
    }
  ];

  const executiveTeam = [
    {
      name: 'Ir. Apep Yusup',
      position: 'Ketua Yayasan',
      department: 'Kepemimpinan Strategis',
      background: 'Kandidat Lulusan Terbaik IPB Fakultas Kehutanan, Ahli perencana kehutanan',
      responsibilities: ['Kepemimpinan strategis organisasi', 'Hubungan eksternal dan kemitraan', 'Pengembangan visi dan misi', 'Representasi organisasi'],
      experience: '30+ tahun',
      initials: 'AY',
      color: 'from-emerald-500 to-emerald-700',
      accent: 'bg-emerald-600'
    },
    {
      name: 'Bambang Ralianto, S.Hut',
      position: 'Sekretaris Yayasan',
      department: 'Administrasi Yayasan',
      background: 'Forestry Expert, spesialisasi Community Development',
      responsibilities: ['Manajemen keuangan organisasi', 'Pelaporan keuangan dan audit', 'Sistem administrasi', 'Compliance dan legal'],
      experience: '30+ tahun',
      initials: 'BR',
      color: 'from-blue-500 to-blue-700',
      accent: 'bg-blue-600'
    },
    {
      name: 'Riyan Kurniawan',
      position: 'Bendahara',
      department: 'Keuangan',
      background: 'Sarjana Ekonomi',
      responsibilities: ['Manajemen keuangan organisasi', 'Pelaporan keuangan dan audit', 'Sistem administrasi', 'Compliance dan legal'],
      experience: '10+ tahun',
      initials: 'RK',
      color: 'from-teal-500 to-teal-700',
      accent: 'bg-teal-600'
    },
    {
      name: 'Miko Duwiter, S.Hut, M.Si',
      position: 'Kepala Kantor Yayasan Palangkaraya',
      department: 'Lead Operation Office',
      background: 'Forestry Expert, spesialisasi Social Impact Assessment',
      responsibilities: ['Operasional Activity'],
      experience: '20+ tahun',
      initials: 'MD',
      color: 'from-orange-500 to-orange-700',
      accent: 'bg-orange-600'
    },
    {
      name: 'Boby H. Mihing',
      position: 'Head Perencana Program, Implementasi, & Monev',
      department: 'Perencana Program, Implementasi, & Monev',
      background: 'IT',
      responsibilities: ['Karbon Project Data Manager', 'Developer Aplikasi Internal', 'R&D', 'Internal Analis'],
      experience: '15+ tahun',
      initials: 'BM',
      color: 'from-purple-500 to-purple-700',
      accent: 'bg-purple-600'
    }
  ];

  const departments = [
    { name: 'PIC Wilayah Katingan', head: 'OcaY', team: 5, focus: 'Perencana Project Karbon Wilayah Katingan', achievements: '¬' },
    { name: 'PIC Wilayah Gunung Mas', head: 'Ambrin, AMD', team: 6, focus: 'Perencana Project Karbon Wilayah Gunung Mas', achievements: '¬' },
    { name: 'PIC Wilayah Kapuas', head: 'Axel', team: 6, focus: 'Perencana Project Karbon Wilayah Kapuas', achievements: '¬' },
    { name: 'PIC Wilayah Pulang Pisau', head: 'Arjuni, ST', team: 6, focus: 'Perencana Project Karbon Wilayah Pulang Pisau', achievements: '¬' }
  ];

  const advisoryBoard = [
    { name: 'Prof. Dr. Ani Soetjipto', expertise: 'Gender & Development', affiliation: 'Universitas Indonesia', initials: 'AS' },
    { name: 'Dr. Ir. Hadi Susilo', expertise: 'Environmental Science', affiliation: 'IPB University', initials: 'HS' },
    { name: 'Drs. Rudi Hartono, M.A', expertise: 'Community Development', affiliation: 'Praktisi Pembangunan', initials: 'RH' },
    { name: 'Dr. Fitri Amalia', expertise: 'Social Entrepreneurship', affiliation: 'Universitas Gadjah Mada', initials: 'FA' }
  ];

  const picList = [
    { wilayah: 'Katingan', head: 'OcaY', team: '5 anggota' },
    { wilayah: 'Gunung Mas', head: 'Ambrin, AMD', team: '6 anggota' },
    { wilayah: 'Kapuas', head: 'Axel', team: '6 anggota' },
    { wilayah: 'Pulang Pisau', head: 'Arjuni, ST', team: '6 anggota' },
  ];

  const node = (extra = '') =>
    `flex flex-col items-center justify-center text-center px-5 py-4 rounded-2xl font-semibold text-sm leading-snug shadow-sm border transition-all duration-200 hover:shadow-md ${extra}`;

  const SectionLabel = ({ text }: { text: string }) => (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px w-16 bg-emerald-300" />
      <span className="text-xs font-bold tracking-[0.2em] text-forest-light uppercase">{text}</span>
      <div className="h-px w-16 bg-emerald-300" />
    </div>
  );

  return (
    <>
      <CarbonParticles />
      <div className="pt-20">

      {/* ══ HERO ══ */}
      <section className="relative pt-32 pb-16">

        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-10">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            Yayasan AMAL
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">
            Struktur<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">
              Organisasi
            </span>
          </h1>
          <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
            Tim profesional dan berpengalaman yang memimpin Yayasan AMAL dalam
            menciptakan dampak positif berkelanjutan di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* ══ BAGAN ORGANISASI ══ */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel text="Hierarki Organisasi" />
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-3">Bagan Organisasi</h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm">
              Struktur kepemimpinan yang solid dengan pembagian tanggung jawab yang jelas
            </p>
          </div>

          <div className="flex flex-col items-center select-none">

            {/* L1 */}
            <div className={node('bg-emerald-700 text-white border-emerald-600 w-72')}>
              <span className="text-[10px] font-bold opacity-60 tracking-[0.2em] uppercase mb-1">Level 1</span>
              Dewan Pembina
            </div>
            <div className="w-px h-10 bg-gray-300" />

            {/* L2 */}
            <div className={node('bg-blue-700 text-white border-blue-600 w-72')}>
              <span className="text-[10px] font-bold opacity-60 tracking-[0.2em] uppercase mb-1">Level 2</span>
              Ketua Yayasan
            </div>
            <div className="w-px h-10 bg-gray-300" />

            {/* L3 */}
            <div className="relative w-full max-w-3xl">
              <div className="absolute top-0 left-[16%] right-[16%] h-px bg-gray-300" />
              <div className="flex justify-between">
                {[
                  { label: 'Sekretaris Yayasan', sub: 'Administrasi' },
                  { label: 'Bendahara', sub: 'Keuangan' },
                  { label: 'Kepala Kantor Palangkaraya', sub: 'Operasional' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center" style={{ width: '30%' }}>
                    <div className="w-px h-10 bg-gray-300" />
                    <div className={node('bg-white border-orange-200 text-orange-900 w-full hover:border-orange-400')}>
                      <span className="text-[10px] font-bold text-orange-400 tracking-widest uppercase mb-1">{item.sub}</span>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* stem dari Kepala Kantor */}
            <div className="w-full max-w-3xl flex justify-end pr-[5%]">
              <div className="w-px h-10 bg-gray-300" />
            </div>

            {/* L4: 2 Divisi */}
            <div className="relative w-full max-w-2xl">
              <div className="absolute top-0 left-0 right-0 h-px bg-gray-300" />
              <div className="flex justify-between">

                {/* Divisi Perencana */}
                <div className="flex flex-col items-center" style={{ width: '47%' }}>
                  <div className="w-px h-10 bg-gray-300" />
                  <div className={node('bg-white border-purple-200 text-purple-900 w-full hover:border-purple-400')}>
                    <span className="text-[10px] font-bold text-purple-400 tracking-widest uppercase mb-1">Divisi</span>
                    Perencana Program, Implementasi &amp; Monev
                  </div>
                  <div className="w-px h-10 bg-gray-300" />

                  {/* L5: PIC 2×2 */}
                  <div className="w-full space-y-4">
                    {[[0, 1], [2, 3]].map((pair, ri) => (
                      <div key={ri} className="relative w-full">
                        <div className="absolute top-0 left-0 right-0 h-px bg-gray-300" />
                        <div className="flex justify-between">
                          {pair.map((idx) => (
                            <div key={idx} className="flex flex-col items-center" style={{ width: '46%' }}>
                              <div className="w-px h-8 bg-gray-300" />
                              <div className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-4 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 cursor-default">
                                <div className="flex items-center gap-2 mb-1">
                                  <MapPin className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                                  <span className="text-sm font-black text-forest-light">{picList[idx].wilayah}</span>
                                </div>
                                <p className="text-xs text-forest-light font-bold">{picList[idx].head}</p>
                                <p className="text-xs text-gray-400 mt-0.5">{picList[idx].team}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divisi Admin */}
                <div className="flex flex-col items-center" style={{ width: '47%' }}>
                  <div className="w-px h-10 bg-gray-300" />
                  <div className={node('bg-white border-purple-200 text-purple-900 w-full hover:border-purple-400')}>
                    <span className="text-[10px] font-bold text-purple-400 tracking-widest uppercase mb-1">Divisi</span>
                    Administrasi &amp; Keuangan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DEWAN PEMBINA ══ */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel text="Pengawasan Strategis" />
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-3">Dewan Pembina</h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm">
              Tokoh-tokoh senior yang memberikan arahan strategis dan pengawasan organisasi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {/* hover accent */}
                <div className="absolute inset-x-8 top-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative mx-auto mb-6 w-20 h-20">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-100">
                    <span className="text-white font-black text-2xl">{member.initials}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border-2 border-emerald-100 rounded-xl flex items-center justify-center shadow-sm">
                    <member.icon className="w-4 h-4 text-forest-light" />
                  </div>
                </div>

                <h3 className="text-lg font-black text-forest-light mb-1 leading-snug">{member.name}</h3>
                <p className="text-forest-light font-bold text-sm mb-4">{member.position}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{member.background}</p>
                <div className="inline-flex items-center gap-2 bg-emerald-900/40 text-emerald-300 px-4 py-2 rounded-full text-xs font-bold border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-900/400" />
                  {member.experience} pengalaman
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TIM EKSEKUTIF ══ */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel text="Kepemimpinan Operasional" />
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-3">Tim Eksekutif</h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm">
              Pemimpin operasional yang menjalankan program dan strategi organisasi
            </p>
          </div>

          <div className="space-y-5">
            {executiveTeam.map((member, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="flex">
                  {/* left accent bar */}
                  <div className={`w-1.5 bg-gradient-to-b ${member.color} flex-shrink-0`} />
                  <div className="flex-1 p-7">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">

                      {/* Identity */}
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                          <span className="text-white font-black text-lg">{member.initials}</span>
                        </div>
                        <div>
                          <h3 className="text-base font-black text-forest-light leading-snug">{member.name}</h3>
                          <p className="text-forest-light font-bold text-xs mt-1">{member.position}</p>
                          <p className="text-gray-400 text-xs">{member.department}</p>
                          <span className="mt-2 inline-block bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-bold">
                            {member.experience}
                          </span>
                        </div>
                      </div>

                      {/* Background */}
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2">Latar Belakang</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{member.background}</p>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2">Tanggung Jawab</p>
                        <ul className="space-y-1.5">
                          {member.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ChevronRight className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-400">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DEPARTEMEN ══ */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel text="Unit Wilayah" />
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-3">Departemen &amp; Tim</h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm">
              Unit-unit kerja yang menjalankan program operasional sehari-hari
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                {/* bg number */}
                <div className="absolute -bottom-2 -right-1 text-8xl font-black text-gray-50 leading-none select-none pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative">
                  <div className="w-12 h-12 bg-emerald-900/40 group-hover:bg-emerald-600 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 shadow-sm">
                    <MapPin className="w-5 h-5 text-forest-light group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-black text-forest-light mb-1 leading-snug">{dept.name}</h3>
                  <p className="text-forest-light font-bold text-sm mb-3">{dept.head}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{dept.focus}</p>
                  <div className="flex items-center gap-2.5">
                    <div className="flex -space-x-1.5">
                      {Array.from({ length: Math.min(dept.team, 5) }).map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-300 to-teal-400 border-2 border-white shadow-sm" />
                      ))}
                    </div>
                    <span className="text-xs text-white/50 font-bold">{dept.team} anggota</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DEWAN PENASIHAT ══ */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel text="Masukan Ahli" />
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-3">Dewan Penasihat</h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm">
              Para ahli dan akademisi yang memberikan masukan strategis dan teknis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryBoard.map((advisor, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-900/20 group-hover:shadow-blue-900/30 transition-shadow">
                  <span className="text-white font-black text-xl">{advisor.initials}</span>
                </div>
                <h3 className="text-base font-black text-forest-light mb-1 leading-snug">{advisor.name}</h3>
                <p className="text-blue-600 font-bold text-xs mb-2">{advisor.expertise}</p>
                <p className="text-gray-400 text-xs">{advisor.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-28 bg-gradient-to-br from-emerald-800 via-emerald-600 to-teal-500 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-300/10" />

        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-8">
            Bergabung Bersama Kami
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Jadilah Bagian dari<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">
              Perubahan Positif
            </span>
          </h2>
          <p className="text-emerald-100/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Kami selalu mencari talenta terbaik yang memiliki passion untuk
            menciptakan perubahan positif di Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontak"
              className="bg-white text-emerald-300 hover:bg-emerald-900/40 font-black py-4 px-12 rounded-2xl transition-all duration-200 shadow-2xl shadow-black/20 hover:shadow-black/30"
            >
              Kirim Lamaran
            </a>
            <a
              href="/publikasi/dokumen"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-black py-4 px-12 rounded-2xl transition-all duration-200"
            >
              Lihat Lowongan
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default StrukturOrganisasi;
