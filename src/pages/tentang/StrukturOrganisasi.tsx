import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, MapPin, Crown, Shield, Heart } from 'lucide-react';
import CarbonParticles from '../../components/CarbonParticles';

const StrukturOrganisasi: React.FC = () => {
  const { t } = useTranslation();

  const boardMembers = [
    {
      name: 'Miko Duwiter, S.Hut, M.Si',
      position: t('about.struktur.boardChairman'),
      background: t('about.struktur.boardBgForestry'),
      experience: '20+',
      icon: Crown,
      initials: 'MD'
    },
    {
      name: 'Joko Listianto, S.Hut',
      position: t('about.struktur.boardMember'),
      background: t('about.struktur.boardBgForestry'),
      experience: '20+',
      icon: Shield,
      initials: 'JL'
    },
    {
      name: 'Herodes Djaya Prawira Atmaja, S.Hut',
      position: t('about.struktur.boardMember'),
      background: t('about.struktur.boardBgForestry'),
      experience: '20+',
      icon: Heart,
      initials: 'HD'
    }
  ];

  const executiveTeam = [
    {
      name: 'Ir. Apep Yusup',
      position: t('about.struktur.execChairman'),
      department: t('about.struktur.execDeptStrategic'),
      background: t('about.struktur.execBgApep'),
      responsibilities: [
        t('about.struktur.execRespStrategic'),
        t('about.struktur.execRespExternal'),
        t('about.struktur.execRespVision'),
        t('about.struktur.execRespRepresentation')
      ],
      experience: '30+',
      initials: 'AY',
      color: 'from-emerald-500 to-emerald-700',
      accent: 'bg-emerald-600'
    },
    {
      name: 'Bambang Ralianto, S.Hut',
      position: t('about.struktur.execSecretary'),
      department: t('about.struktur.execDeptAdmin'),
      background: t('about.struktur.execBgBambang'),
      responsibilities: [
        t('about.struktur.execRespFinanceMgt'),
        t('about.struktur.execRespFinanceReport'),
        t('about.struktur.execRespAdminSystem'),
        t('about.struktur.execRespCompliance')
      ],
      experience: '30+',
      initials: 'BR',
      color: 'from-blue-500 to-blue-700',
      accent: 'bg-blue-600'
    },
    {
      name: 'Riyan Kurniawan',
      position: t('about.struktur.execTreasurer'),
      department: t('about.struktur.execDeptFinance'),
      background: t('about.struktur.execBgRiyan'),
      responsibilities: [
        t('about.struktur.execRespFinanceMgt'),
        t('about.struktur.execRespFinanceReport'),
        t('about.struktur.execRespAdminSystem'),
        t('about.struktur.execRespCompliance')
      ],
      experience: '10+',
      initials: 'RK',
      color: 'from-teal-500 to-teal-700',
      accent: 'bg-teal-600'
    },
    {
      name: 'Miko Duwiter, S.Hut, M.Si',
      position: t('about.struktur.execKepalaKantor'),
      department: t('about.struktur.execDeptLeadOp'),
      background: t('about.struktur.execBgMiko'),
      responsibilities: [
        t('about.struktur.execRespOperational')
      ],
      experience: '20+',
      initials: 'MD',
      color: 'from-orange-500 to-orange-700',
      accent: 'bg-orange-600'
    },
    {
      name: 'Boby H. Mihing',
      position: t('about.struktur.execHeadPlanner'),
      department: t('about.struktur.execDeptPlanner'),
      background: t('about.struktur.execBgBoby'),
      responsibilities: [
        t('about.struktur.execRespCarbonData'),
        t('about.struktur.execRespAppDev'),
        t('about.struktur.execRespRnD'),
        t('about.struktur.execRespInternalAnalis')
      ],
      experience: '15+',
      initials: 'BM',
      color: 'from-purple-500 to-purple-700',
      accent: 'bg-purple-600'
    }
  ];

  const departments = [
    { name: t('about.struktur.deptKatingan'), head: 'OcaY', team: 5, focus: t('about.struktur.deptFocusKatingan'), achievements: '\u00ac' },
    { name: t('about.struktur.deptGunungMas'), head: 'Ambrin, AMD', team: 6, focus: t('about.struktur.deptFocusGunungMas'), achievements: '\u00ac' },
    { name: t('about.struktur.deptKapuas'), head: 'Axel', team: 6, focus: t('about.struktur.deptFocusKapuas'), achievements: '\u00ac' },
    { name: t('about.struktur.deptPulangPisau'), head: 'Arjuni, ST', team: 6, focus: t('about.struktur.deptFocusPulangPisau'), achievements: '\u00ac' }
  ];

  const advisoryBoard = [
    { name: 'Prof. Dr. Ani Soetjipto', expertise: 'Gender & Development', affiliation: t('about.struktur.advisoryAffiliationUI'), initials: 'AS' },
    { name: 'Dr. Ir. Hadi Susilo', expertise: 'Environmental Science', affiliation: t('about.struktur.advisoryAffiliationIPB'), initials: 'HS' },
    { name: 'Drs. Rudi Hartono, M.A', expertise: 'Community Development', affiliation: t('about.struktur.advisoryAffiliationPractitioner'), initials: 'RH' },
    { name: 'Dr. Fitri Amalia', expertise: 'Social Entrepreneurship', affiliation: t('about.struktur.advisoryAffiliationUGM'), initials: 'FA' }
  ];

  const picList = [
    { wilayah: 'Katingan', head: 'OcaY', team: t('about.struktur.teamMemberCount', { count: 5 }) },
    { wilayah: 'Gunung Mas', head: 'Ambrin, AMD', team: t('about.struktur.teamMemberCount', { count: 6 }) },
    { wilayah: 'Kapuas', head: 'Axel', team: t('about.struktur.teamMemberCount', { count: 6 }) },
    { wilayah: 'Pulang Pisau', head: 'Arjuni, ST', team: t('about.struktur.teamMemberCount', { count: 6 }) },
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
            {t('about.struktur.badge')}
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">
            {t('about.struktur.title')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">
              {t('about.struktur.titleHighlight')}
            </span>
          </h1>
          <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
            {t('about.struktur.heroDescription')}
          </p>
        </div>
      </section>

      {/* ══ BAGAN ORGANISASI ══ */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel text={t('about.struktur.sectionHierarki')} />
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-3">{t('about.struktur.headingBagan')}</h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm">
              {t('about.struktur.subheadingBagan')}
            </p>
          </div>

          <div className="flex flex-col items-center select-none">

            {/* L1 */}
            <div className={node('bg-emerald-700 text-white border-emerald-600 w-72')}>
              <span className="text-[10px] font-bold opacity-60 tracking-[0.2em] uppercase mb-1">{t('about.struktur.chartLevel1')}</span>
              {t('about.struktur.chartDewanPembina')}
            </div>
            <div className="w-px h-10 bg-gray-300" />

            {/* L2 */}
            <div className={node('bg-blue-700 text-white border-blue-600 w-72')}>
              <span className="text-[10px] font-bold opacity-60 tracking-[0.2em] uppercase mb-1">{t('about.struktur.chartLevel2')}</span>
              {t('about.struktur.chartKetuaYayasan')}
            </div>
            <div className="w-px h-10 bg-gray-300" />

            {/* L3 */}
            <div className="relative w-full max-w-3xl">
              <div className="absolute top-0 left-[16%] right-[16%] h-px bg-gray-300" />
              <div className="flex justify-between">
                {[
                  { label: t('about.struktur.chartSekretaris'), sub: t('about.struktur.chartSubAdmin') },
                  { label: t('about.struktur.chartBendahara'), sub: t('about.struktur.chartSubKeuangan') },
                  { label: t('about.struktur.chartKepalaKantor'), sub: t('about.struktur.chartSubOperasional') },
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
                    <span className="text-[10px] font-bold text-purple-400 tracking-widest uppercase mb-1">{t('about.struktur.chartDivisi')}</span>
                    {t('about.struktur.chartDivisiPerencana')}
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
                    <span className="text-[10px] font-bold text-purple-400 tracking-widest uppercase mb-1">{t('about.struktur.chartDivisi')}</span>
                    {t('about.struktur.chartDivisiAdmin')}
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
            <SectionLabel text={t('about.struktur.sectionPengawasan')} />
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-3">{t('about.struktur.headingDewanPembina')}</h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm">
              {t('about.struktur.subheadingDewanPembina')}
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
                  {member.experience} {t('about.struktur.boardExperience')}
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
            <SectionLabel text={t('about.struktur.sectionKepemimpinan')} />
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-3">{t('about.struktur.headingTimEksekutif')}</h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm">
              {t('about.struktur.subheadingTimEksekutif')}
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
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2">{t('about.struktur.execLabelBackground')}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{member.background}</p>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2">{t('about.struktur.execLabelResponsibility')}</p>
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
            <SectionLabel text={t('about.struktur.sectionUnitWilayah')} />
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-3">{t('about.struktur.headingDepartemen')}</h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm">
              {t('about.struktur.subheadingDepartemen')}
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
                    <span className="text-xs text-white/50 font-bold">{dept.team} {t('about.struktur.deptAnggota')}</span>
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
            <SectionLabel text={t('about.struktur.sectionMasukanAhli')} />
            <h2 className="text-3xl lg:text-4xl font-black text-forest-light mb-3">{t('about.struktur.headingDewanPenasihat')}</h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm">
              {t('about.struktur.subheadingDewanPenasihat')}
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
            {t('about.struktur.ctaBadge')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            {t('about.struktur.ctaHeading')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">
              {t('about.struktur.ctaHeadingHighlight')}
            </span>
          </h2>
          <p className="text-emerald-100/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('about.struktur.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontak"
              className="bg-white text-emerald-300 hover:bg-emerald-900/40 font-black py-4 px-12 rounded-2xl transition-all duration-200 shadow-2xl shadow-black/20 hover:shadow-black/30"
            >
              {t('about.struktur.ctaKirimLamaran')}
            </a>
            <a
              href="/publikasi/berita"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-black py-4 px-12 rounded-2xl transition-all duration-200"
            >
              {t('about.struktur.ctaLihatLowongan')}
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default StrukturOrganisasi;
