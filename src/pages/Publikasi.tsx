import React from 'react';
import { Download, Calendar, FileText, BarChart3, BookOpen } from 'lucide-react';
import CarbonParticles from '../components/CarbonParticles';
import { useTranslation } from 'react-i18next';

const Publikasi: React.FC = () => {
  const { t } = useTranslation();

  const publications = [
    {
      id: 1,
      type: t('publikasi.typeLaporanTahunan'),
      title: t('publikasi.pub1Title'),
      description: t('publikasi.pub1Desc'),
      date: '31 Desember 2024',
      size: '2.5 MB',
      pages: 48,
      icon: BarChart3,
      featured: true
    },
    {
      id: 2,
      type: t('publikasi.typeLaporanKeuangan'),
      title: t('publikasi.pub2Title'),
      description: t('publikasi.pub2Desc'),
      date: '15 Januari 2025',
      size: '1.8 MB',
      pages: 32,
      icon: FileText,
      featured: true
    },
    {
      id: 3,
      type: t('publikasi.typePanduan'),
      title: t('publikasi.pub3Title'),
      description: t('publikasi.pub3Desc'),
      date: '10 Januari 2025',
      size: '856 KB',
      pages: 16,
      icon: BookOpen,
      featured: false
    },
    {
      id: 4,
      type: t('publikasi.typeStudiKasus'),
      title: t('publikasi.pub4Title'),
      description: t('publikasi.pub4Desc'),
      date: '5 Januari 2025',
      size: '3.2 MB',
      pages: 64,
      icon: BarChart3,
      featured: false
    },
    {
      id: 5,
      type: t('publikasi.typePanduan'),
      title: t('publikasi.pub5Title'),
      description: t('publikasi.pub5Desc'),
      date: '20 Desember 2024',
      size: '1.2 MB',
      pages: 24,
      icon: BookOpen,
      featured: false
    },
    {
      id: 6,
      type: t('publikasi.typeLaporanProgram'),
      title: t('publikasi.pub6Title'),
      description: t('publikasi.pub6Desc'),
      date: '15 Desember 2024',
      size: '2.1 MB',
      pages: 40,
      icon: BarChart3,
      featured: false
    },
    {
      id: 7,
      type: t('publikasi.typeNewsletter'),
      title: t('publikasi.pub7Title'),
      description: t('publikasi.pub7Desc'),
      date: '30 November 2024',
      size: '1.5 MB',
      pages: 12,
      icon: FileText,
      featured: false
    },
    {
      id: 8,
      type: t('publikasi.typePenelitian'),
      title: t('publikasi.pub8Title'),
      description: t('publikasi.pub8Desc'),
      date: '25 November 2024',
      size: '4.1 MB',
      pages: 88,
      icon: BarChart3,
      featured: false
    }
  ];

  const categories = [t('publikasi.filterSemua'), t('publikasi.typeLaporanTahunan'), t('publikasi.typeLaporanKeuangan'), t('publikasi.typeLaporanProgram'), t('publikasi.typePanduan'), t('publikasi.typeNewsletter'), t('publikasi.typeStudiKasus'), t('publikasi.typePenelitian')];
  const [selectedCategory, setSelectedCategory] = React.useState(t('publikasi.filterSemua'));

  const filteredPublications = selectedCategory === t('publikasi.filterSemua') 
    ? publications 
    : publications.filter(pub => pub.type === selectedCategory);

  const featuredPublications = publications.filter(pub => pub.featured);

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      [t('publikasi.typeLaporanTahunan')]: 'bg-emerald-900/50 text-forest-light',
      [t('publikasi.typeLaporanKeuangan')]: 'bg-blue-100 text-blue-600',
      [t('publikasi.typeLaporanProgram')]: 'bg-purple-100 text-purple-600',
      [t('publikasi.typePanduan')]: 'bg-orange-100 text-orange-600',
      [t('publikasi.typeNewsletter')]: 'bg-pink-100 text-pink-600',
      [t('publikasi.typeStudiKasus')]: 'bg-cyan-100 text-cyan-600',
      [t('publikasi.typePenelitian')]: 'bg-indigo-100 text-indigo-600'
    };
    return colors[type] || 'bg-white/10 text-gray-300';
  };

  return (
    <>
      <CarbonParticles />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('publikasi.heading')}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {t('publikasi.heroDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-forest-light mb-4">
              {t('publikasi.featuredHeading')}
            </h2>
            <p className="text-xl text-gray-400">
              {t('publikasi.featuredDesc')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPublications.map((publication) => (
              <div key={publication.id} className="card p-8 group hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-900/50 p-3 rounded-lg group-hover:bg-emerald-600 transition-colors">
                    <publication.icon className="h-8 w-8 text-forest-light group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(publication.type)}`}>
                        {publication.type}
                      </span>
                      <span className="text-sm text-white/50 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {publication.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-forest-light mb-3 group-hover:text-forest-light transition-colors">
                      {publication.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {publication.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-white/50">
                        <span>{publication.pages} {t('publikasi.halaman')}</span>
                        <span>{publication.size}</span>
                      </div>
                      
                      <button className="btn-primary inline-flex items-center text-sm">
                        <Download className="h-4 w-4 mr-2" />
                        {t('publikasi.download')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 bg-gray-50">
        <div className="container-custom pt-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-400 hover:bg-emerald-900/50 hover:text-forest-light shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Publications */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t('publikasi.semuaPublikasi')}
            </h2>
            <p className="text-xl text-gray-400">
              {t('publikasi.semuaPublikasiDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map((publication) => (
              <div key={publication.id} className="card group hover:shadow-lg transition-all">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-emerald-900/50 transition-colors">
                      <publication.icon className="h-6 w-6 text-gray-400 group-hover:text-forest-light transition-colors" />
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(publication.type)}`}>
                      {publication.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-forest-light mb-2 group-hover:text-forest-light transition-colors">
                    {publication.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {publication.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-white/50 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{publication.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span>{publication.pages}p</span>
                      <span>{publication.size}</span>
                    </div>
                  </div>
                  
                  <button className="w-full btn-secondary text-sm inline-flex items-center justify-center group-hover:btn-primary">
                    <Download className="h-4 w-4 mr-2" />
                    {t('publikasi.downloadPdf')}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPublications.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">{t('publikasi.tidakAdaPublikasi')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('publikasi.berlangganan')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('publikasi.berlanggananDesc')}
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={t('publikasi.emailPlaceholder')}
              className="flex-1 px-4 py-3 rounded-lg text-forest-light focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 font-medium px-6 py-3 rounded-lg transition-colors duration-200">
              {t('publikasi.subscribe')}
            </button>
          </div>
        </div>
       </section>
     </div>
    </>
   );
 };
 
 export default Publikasi;
