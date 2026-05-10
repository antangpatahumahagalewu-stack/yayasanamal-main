import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import images from '../assets/images';
import CarbonParticles from '../components/CarbonParticles';
import { getNews } from '../data/news';

const Berita: React.FC = () => {
  const { t } = useTranslation();

  const news = getNews(t);

  const categoryLabelMap: Record<string, string> = {
    'Semua': t('berita.categoryAll'),
    'Kemitraan': t('berita.categoryPartnership'),
    'Lingkungan': t('berita.categoryEnvironment'),
    'Kolaborasi': t('berita.categoryCollaboration'),
    'Kelembagaan': t('berita.categoryInstitutional'),
    'Internasional': t('berita.categoryInternational'),
  };

  const getCategoryLabel = (cat: string) => categoryLabelMap[cat] || cat;

  const categoryKeys = ['Semua', 'Kemitraan', 'Lingkungan', 'Kolaborasi', 'Kelembagaan', 'Internasional'];

  const featuredNews = {
    id: 1,
    title: t('berita.featuredTitle'),
    excerpt: t('berita.featuredExcerpt'),
    content: t('berita.featuredContent'),
    image: images.pksPenandatangan1,
    date: t('berita.featuredDate'),
    author: t('berita.featuredAuthor'),
    category: 'Kemitraan'
  };

  const [selectedCategory, setSelectedCategory] = React.useState('Semua');

  const filteredNews = selectedCategory === 'Semua'
    ? news
    : news.filter(item => item.category === selectedCategory);

  return (
    <>
      <CarbonParticles />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">{t('berita.heroTitle')}</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            {t('berita.heroDesc')}
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container-custom">
          <div className="card overflow-hidden grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src={featuredNews.image.src}
                alt={featuredNews.image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {t('berita.featuredBadge')}
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/50 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredNews.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{featuredNews.author}</span>
                </div>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                  {getCategoryLabel(featuredNews.category)}
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-forest-light mb-4">
                {featuredNews.title}
              </h2>

              <p className="text-lg text-gray-400 mb-6 leading-relaxed line-clamp-4">
                {featuredNews.excerpt}
              </p>

              <Link 
                to={`/publikasi/berita/${featuredNews.id}`}
                className="btn-primary inline-flex items-center w-fit"
              >
                {t('berita.readMore')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categoryKeys.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-emerald-900/50 hover:text-forest-light'
                }`}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <article key={article.id} className="card overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image.src}
                    alt={article.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      article.category === 'Kemitraan' ? 'bg-blue-100 text-blue-600' :
                      article.category === 'Lingkungan' ? 'bg-emerald-100 text-emerald-600' :
                      article.category === 'Kolaborasi' ? 'bg-green-100 text-green-600' :
                      article.category === 'Kelembagaan' ? 'bg-orange-100 text-orange-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {getCategoryLabel(article.category)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-white/50 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-forest-light mb-3 group-hover:text-forest-light transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <Link 
                    to={`/publikasi/berita/${article.id}`}
                    className="text-forest-light font-medium inline-flex items-center hover:text-emerald-300 transition-colors"
                  >
                    {t('berita.readMore')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('berita.newsletterTitle')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('berita.newsletterDesc')}
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={t('berita.emailPlaceholder')}
              className="flex-1 px-4 py-3 rounded-lg text-forest-light focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 font-medium px-6 py-3 rounded-lg transition-colors duration-200">
              {t('berita.subscribe')}
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Berita;
