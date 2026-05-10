import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getNews } from '../data/news';

const News: React.FC = () => {
  const { t } = useTranslation();
  const allNews = getNews(t);
  const news = allNews.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-4 font-body">
              {t('berita.heroTitle')}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-display">
              {t('berita.heroTitle')}
            </h2>
          </div>
          <Link
            to="/publikasi/berita"
            className="hidden md:inline-flex items-center space-x-2 text-forest-light hover:text-gold font-medium font-body transition-colors mt-4 md:mt-0"
          >
            <span>{t('common.viewAll')} {t('navSub.publikasiBerita')}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Link
              key={index}
              to={`/publikasi/berita/${article.id}`}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* Featured first post gets taller image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={article.image.src}
                  alt={article.image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-forest-mid/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center space-x-2 text-sm text-white/40 mb-3 font-body">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors font-display line-clamp-2 min-h-[3.5rem]">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 font-body">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-forest-green font-medium text-sm group-hover:text-gold transition-colors mt-auto pt-2">
                  <span>{t('common.readMore')}</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            to="/publikasi/berita"
            className="inline-flex items-center space-x-2 text-forest-light hover:text-gold font-medium font-body transition-colors"
          >
            <span>{t('common.viewAll')} {t('navSub.publikasiBerita')}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
