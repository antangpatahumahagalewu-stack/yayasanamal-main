import React from 'react';
import { Users, Crown, Shield, Briefcase, Heart, Award } from 'lucide-react';

const StrukturOrganisasi: React.FC = () => {
  const boardMembers = [
    {
      name: 'Miko Duwiter, S.Hut, M.Si',
      position: 'Ketua Dewan Pembina',
      background: 'Forestry Expert, Ahli Perhutanan Sosial',
      experience: '20+ tahun',
      icon: Crown
    },
    {
      name: 'Joko Listianto, S.Hut',
      position: 'Anggota Dewan Pembina',
      background: 'Forestry Expert, Ahli Perhutanan Sosial',
      experience: '20+ tahun',
      icon: Shield
    },
    {
      name: 'Herodes Djaya Prawira Atmaja, S.Hut',
      position: 'Anggota Dewan Pembina',
      background: 'Forestry Expert, Ahli Perhutanan Sosial',
      experience: '20+ tahun',
      icon: Heart
    }
  ];

  const executiveTeam = [
    {
      name: 'Ir. Apep Yusup',
      position: 'Ketua Yayasan',
      department: 'Kepemimpinan Strategis',
      background: 'Kandidat Lulusan Terbaik IPB Fakultas Kehutanan, Ahli perencana kehutanan',
      responsibilities: [
        'Kepemimpinan strategis organisasi',
        'Hubungan eksternal dan kemitraan',
        'Pengembangan visi dan misi',
        'Representasi organisasi'
      ],
      experience: '30+ tahun'
    },
    {
      name: 'Bambang Ralianto, S.Hut',
      position: 'Sekretaris Yayasan',
      department: 'Administrasi Yayasan',
      background: 'Forestry Expert, spesialisasi Community Development',
      responsibilities: [
        'Manajemen keuangan organisasi',
        'Pelaporan keuangan dan audit',
        'Sistem administrasi',
        'Compliance dan legal'
      ],
      experience: '30+ tahun'
    },
    {
      name: 'Riyan Kurniawan',
      position: 'Bendahara',
      department: 'Keuangan',
      background: 'Sarjana Ekonomi',
      responsibilities: [
        'Manajemen keuangan organisasi',
        'Pelaporan keuangan dan audit',
        'Sistem administrasi',
        'Compliance dan legal'
      ],
      experience: '10+ tahun'
    },
    {
      name: 'Miko Duwiter, S.Hut, M.Si',
      position: 'Kepala Kantor Yayasan Palangkaraya',
      department: 'Lead Operation office',
      background: 'Forestry Expert, spesialisasi Social Impact Assessment',
      responsibilities: [
        'Operasional Activity'
      ],
      experience: '20+ tahun'
    },
    {
      name: 'Boby H. Mihing',
      position: 'Head Perencana Program, Implementasi, & Monev',
      department: 'Perencana Program, Implementasi, & Monev',
      background: 'IT',
      responsibilities: [
        'Karbon Project Data manager', 'Developer Aplikasi Internal', 'R&D', 'Internal Analis',
      ],
      experience: '15+ tahun'
    }
  ];

  const departments = [
    {
      name: 'PIC wilayah katingan',
      head: 'OcaY',
      team: 5,
      focus: 'Perencana Project Karbon Wilayah Katingan',
      achievements: '¬'
    },
    {
      name: 'PIC wilayah Gunung Mas',
      head: 'Ambrin, AMD',
      team: 6,
      focus: 'Perencana Project Karbon Wilayah Gunung Mas',
      achievements: '¬'
    },
    {
      name: 'PIC wilayah Kapuas',
      head: 'Axel',
      team: 6,
      focus: 'Perencana Project Karbon Wilayah Kapuas',
      achievements: '¬'
    },
    {
      name: 'PIC wilayah Pulang Pisau',
      head: 'Arjuni, ST',
      team: 6,
      focus: 'Perencana Project Karbon Wilayah Pulang Pisau',
      achievements: '¬'
    }
  ];

  const advisoryBoard = [
    {
      name: 'Prof. Dr. Ani Soetjipto',
      expertise: 'Gender & Development',
      affiliation: 'Universitas Indonesia'
    },
    {
      name: 'Dr. Ir. Hadi Susilo',
      expertise: 'Environmental Science',
      affiliation: 'IPB University'
    },
    {
      name: 'Drs. Rudi Hartono, M.A',
      expertise: 'Community Development',
      affiliation: 'Praktisi Pembangunan'
    },
    {
      name: 'Dr. Fitri Amalia',
      expertise: 'Social Entrepreneurship',
      affiliation: 'Universitas Gadjah Mada'
    }
  ];

  /* ─── ORG CHART NODE STYLES ─── */
  const nodeBase =
    'flex flex-col items-center justify-center text-center px-4 py-3 rounded-xl font-medium text-sm leading-tight shadow-sm';

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Struktur Organisasi
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tim profesional dan berpengalaman yang memimpin Yayasan AMAL dalam
              menciptakan dampak positif berkelanjutan di seluruh Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          BAGAN ORGANISASI — improved layout
      ════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bagan Organisasi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Struktur kepemimpinan yang solid dengan pembagian tanggung jawab yang jelas
            </p>
          </div>

          <div className="flex flex-col items-center gap-0 select-none w-full">

            {/* ── Level 1 : Dewan Pembina ── */}
            <div className={`${nodeBase} bg-emerald-600 text-white w-64`}>
              <span className="text-xs font-normal opacity-75 mb-0.5">Level 1</span>
              Dewan Pembina
            </div>
            <div className="w-0.5 h-8 bg-gray-300" />

            {/* ── Level 2 : Ketua Yayasan ── */}
            <div className={`${nodeBase} bg-blue-600 text-white w-64`}>
              <span className="text-xs font-normal opacity-75 mb-0.5">Level 2</span>
              Ketua Yayasan
            </div>
            <div className="w-0.5 h-8 bg-gray-300" />

            {/* ── Level 3 : Sekretaris · Bendahara · Kepala Kantor ── */}
            <div className="relative w-full max-w-3xl">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-300" />
              <div className="flex justify-between w-full">
                <div className="flex flex-col items-center" style={{ width: '30%' }}>
                  <div className="w-0.5 h-8 bg-gray-300" />
                  <div className={`${nodeBase} bg-orange-100 text-orange-800 border border-orange-200 w-full`}>
                    <span className="text-xs font-normal text-orange-500 mb-0.5">Administrasi</span>
                    Sekretaris Yayasan
                  </div>
                </div>
                <div className="flex flex-col items-center" style={{ width: '30%' }}>
                  <div className="w-0.5 h-8 bg-gray-300" />
                  <div className={`${nodeBase} bg-orange-100 text-orange-800 border border-orange-200 w-full`}>
                    <span className="text-xs font-normal text-orange-500 mb-0.5">Keuangan</span>
                    Bendahara
                  </div>
                </div>
                <div className="flex flex-col items-center" style={{ width: '30%' }}>
                  <div className="w-0.5 h-8 bg-gray-300" />
                  <div className={`${nodeBase} bg-orange-100 text-orange-800 border border-orange-200 w-full`}>
                    <span className="text-xs font-normal text-orange-500 mb-0.5">Operasional</span>
                    Kepala Kantor Palangkaraya
                  </div>
                </div>
              </div>
            </div>

            {/* connector turun dari Kepala Kantor (kolom kanan ~83% dari kiri) */}
            <div className="w-full max-w-3xl flex" style={{ justifyContent: 'flex-end', paddingRight: '5%' }}>
              <div className="w-0.5 h-10 bg-gray-300" />
            </div>

            {/* ── Level 4 : 2 Divisi ── */}
            <div className="relative w-full max-w-2xl">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-300" />
              <div className="flex justify-between w-full">

                {/* Divisi Perencana Program */}
                <div className="flex flex-col items-center" style={{ width: '47%' }}>
                  <div className="w-0.5 h-8 bg-gray-300" />
                  <div className={`${nodeBase} bg-purple-100 text-purple-800 border border-purple-200 w-full`}>
                    <span className="text-xs font-normal text-purple-500 mb-0.5">Divisi</span>
                    Perencana Program, Implementasi &amp; Monev
                  </div>
                  <div className="w-0.5 h-8 bg-gray-300" />

                  {/* ── Level 5 : 4 PIC dalam 2×2 grid ── */}
                  <div className="w-full space-y-3">
                    {[
                      [
                        { wilayah: 'Katingan', head: 'OcaY', team: '5 anggota' },
                        { wilayah: 'Gunung Mas', head: 'Ambrin, AMD', team: '6 anggota' },
                      ],
                      [
                        { wilayah: 'Kapuas', head: 'Axel', team: '6 anggota' },
                        { wilayah: 'Pulang Pisau', head: 'Arjuni, ST', team: '6 anggota' },
                      ],
                    ].map((row, ri) => (
                      <div key={ri} className="relative w-full">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-300" />
                        <div className="flex justify-between w-full">
                          {row.map((pic, ci) => (
                            <div key={ci} className="flex flex-col items-center" style={{ width: '46%' }}>
                              <div className="w-0.5 h-6 bg-gray-300" />
                              <div className="bg-white border border-gray-200 rounded-xl text-center px-4 py-3 w-full shadow-sm">
                                <div className="text-sm font-semibold text-gray-800">{pic.wilayah}</div>
                                <div className="text-xs text-emerald-600 font-medium mt-0.5">{pic.head}</div>
                                <div className="text-xs text-gray-400 mt-0.5">{pic.team}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divisi Admin & Keuangan */}
                <div className="flex flex-col items-center" style={{ width: '47%' }}>
                  <div className="w-0.5 h-8 bg-gray-300" />
                  <div className={`${nodeBase} bg-purple-100 text-purple-800 border border-purple-200 w-full`}>
                    <span className="text-xs font-normal text-purple-500 mb-0.5">Divisi</span>
                    Administrasi &amp; Keuangan
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dewan Pembina */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dewan Pembina
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tokoh-tokoh senior yang memberikan arahan strategis dan pengawasan organisasi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="card p-8 text-center group hover:shadow-xl transition-shadow">
                <div className="bg-emerald-100 group-hover:bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                  <member.icon className="h-10 w-10 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{member.background}</p>
                <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {member.experience} pengalaman
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tim Eksekutif
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pemimpin operasional yang menjalankan program dan strategi organisasi
            </p>
          </div>

          <div className="space-y-8">
            {executiveTeam.map((member, index) => (
              <div key={index} className="card p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="text-center lg:text-left">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-emerald-600 font-medium mb-2">{member.position}</p>
                    <p className="text-gray-500 text-sm mb-3">{member.department}</p>
                    <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {member.experience}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Latar Belakang:</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.background}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Tanggung Jawab:</h4>
                    <ul className="space-y-2">
                      {member.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Departemen & Tim
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unit-unit kerja yang menjalankan program operasional sehari-hari
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="card p-6 group hover:shadow-lg transition-shadow">
                <div className="bg-emerald-100 group-hover:bg-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Briefcase className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-emerald-600 font-medium text-sm mb-3">{dept.head}</p>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{dept.focus}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    {dept.team} anggota tim
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-medium mb-1">Pencapaian:</p>
                  <p className="text-xs text-gray-600">{dept.achievements}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dewan Penasihat
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Para ahli dan akademisi yang memberikan masukan strategis dan teknis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryBoard.map((advisor, index) => (
              <div key={index} className="card p-6 text-center group hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 group-hover:bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Award className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{advisor.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">{advisor.expertise}</p>
                <p className="text-gray-600 text-xs">{advisor.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Bergabung dengan Tim Kami
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Kami selalu mencari talenta terbaik yang memiliki passion untuk
            menciptakan perubahan positif di Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontak"
              className="bg-white text-emerald-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Kirim Lamaran
            </a>
            <a
              href="/publikasi/dokumen"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Lihat Lowongan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrukturOrganisasi;
