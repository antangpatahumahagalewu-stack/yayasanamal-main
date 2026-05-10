import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Mail } from 'lucide-react';
import { getNews } from '../data/news';
import images from '../assets/images';
import CarbonParticles from '../components/CarbonParticles';



const NewsDetail: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  
  const news = getNews(t);
  const article = news.find(item => item.id === parseInt(id || '0'));
  
  const categoryLabelMap: Record<string, string> = {
    'Kemitraan': t('newsDetail.categoryPartnership'),
    'Lingkungan': t('newsDetail.categoryEnvironment'),
    'Kolaborasi': t('newsDetail.categoryCollaboration'),
    'Kelembagaan': t('newsDetail.categoryInstitutional'),
    'Internasional': t('newsDetail.categoryInternational'),
  };

  const getCategoryLabel = (cat: string) => categoryLabelMap[cat] || cat;

  const featuredNews = {
    id: 1,
    title: t('newsDetail.featuredTitle'),
    excerpt: t('newsDetail.featuredExcerpt'),
    content: t('newsDetail.featuredContent'),
    image: images.pksPenandatangan1,
    date: t('newsDetail.featuredDate'),
    author: t('newsDetail.featuredAuthor'),
    category: 'Kemitraan',
    bodyImages: [
      {
        index: 7,
        src: images.pksPenandatangan2.src,
        alt: images.pksPenandatangan2.alt
      }
    ]
  };

  const currentArticle = id === '1' ? featuredNews : article;

  if (!currentArticle) {
    return <Navigate to="/publikasi/berita" replace />;
  }

  const relatedArticles = news
    .filter(item => item.category === article.category && item.id !== article.id)
    .slice(0, 3);

  const shareUrl = window.location.href;
  const shareTitle = article.title;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'email':
        url = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`;
        break;
    }
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  const defaultContent = [
    t('newsDetail.defaultContent1'),
    t('newsDetail.defaultContent2'),
    t('newsDetail.defaultContent3'),
  ];

  const renderBodyContent = () => {
    if (!article.content) {
      return (
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            {article.excerpt}
          </p>
          {defaultContent.map((paragraph, index) => (
            <p key={index} className="text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      );
    }

    const bodyImages = (article as any).bodyImages as Array<{ index: number; src: string; alt: string }> | undefined;
    const paragraphs = article.content.split('\n\n');

    const renderHTML = (text: string) => {
      const html = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-forest-light">$1</strong>');
      return { __html: html };
    };

    const isHeading = (text: string): 'h2' | 'h3' | null => {
      if (text.startsWith('## ')) return 'h2';
      if (text.startsWith('### ')) return 'h3';
      if (text.startsWith('**') && text.endsWith('**') && text.indexOf('**', 2) === text.length - 2) return 'h2';
      return null;
    };

    const stripHeadingMarkers = (text: string): string => {
      if (text.startsWith('## ')) return text.slice(3);
      if (text.startsWith('### ')) return text.slice(4);
      if (isHeading(text) === 'h2') return text.slice(2, -2);
      return text;
    };

    const elements: React.ReactNode[] = [];

    paragraphs.forEach((paragraph, idx) => {
      const headingType = isHeading(paragraph);
      const displayText = stripHeadingMarkers(paragraph);

      if (headingType === 'h2') {
        elements.push(
          <h2 key={`h2-${idx}`} className="text-2xl lg:text-3xl font-bold text-forest-light mt-12 mb-4 first:mt-0" dangerouslySetInnerHTML={renderHTML(displayText)} />
        );
      } else if (headingType === 'h3') {
        elements.push(
          <h3 key={`h3-${idx}`} className="text-xl font-bold text-forest-light mt-8 mb-3" dangerouslySetInnerHTML={renderHTML(displayText)} />
        );
      } else {
        elements.push(
          <p key={`p-${idx}`} className="text-gray-300 leading-relaxed mb-6" dangerouslySetInnerHTML={renderHTML(paragraph)} />
        );
      }

      if (bodyImages) {
        bodyImages.forEach((img, imgIdx) => {
          if (img.index === idx) {
            elements.push(
              <div key={`img-${imgIdx}`} className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            );
          }
        });
      }
    });

    return <>{elements}</>;
  };

  return (
    <>
      <CarbonParticles />
      <div className="pt-20">
      {/* Breadcrumb */}
      <section className="py-8">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/50 hover:text-forest-light transition-colors">
              {t('newsDetail.breadcrumbHome')}
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/publikasi/berita" className="text-white/50 hover:text-forest-light transition-colors">
              {t('newsDetail.breadcrumbNews')}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-forest-light font-medium">{article.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/publikasi/berita"
              className="inline-flex items-center text-forest-light hover:text-emerald-300 transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t('newsDetail.backToNews')}
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  article.category === 'Kemitraan' ? 'bg-blue-100 text-blue-600' :
                  article.category === 'Lingkungan' ? 'bg-emerald-100 text-emerald-600' :
                  article.category === 'Kolaborasi' ? 'bg-green-100 text-green-600' :
                  article.category === 'Kelembagaan' ? 'bg-orange-100 text-orange-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {getCategoryLabel(article.category)}
                </span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/50">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-forest-light mb-6 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                {article.excerpt}
              </p>
            </header>

            {/* Featured Image */}
            <div className="relative mb-8 rounded-2xl overflow-hidden shadow-xl bg-white/5">
              <img
                src={article.image.src}
                alt={article.image.alt}
                className="w-full object-contain"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none mb-12">
              {renderBodyContent()}
            </div>

            {/* Share Section */}
            <div className="border-t border-gray-200 pt-8 mb-12">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-forest-light">{t('newsDetail.shareArticle')}</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                    title={t('newsDetail.shareFacebook')}
                  >
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-lg transition-colors"
                    title={t('newsDetail.shareTwitter')}
                  >
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare('email')}
                    className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
                    title={t('newsDetail.shareEmail')}
                  >
                    <Mail className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => navigator.clipboard.writeText(shareUrl)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg transition-colors"
                    title={t('newsDetail.copyLink')}
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-forest-light mb-8">
                {t('newsDetail.relatedNews')}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/publikasi/berita/${relatedArticle.id}`}
                    className="card overflow-hidden group hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedArticle.image.src}
                        alt={relatedArticle.image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          relatedArticle.category === 'Kemitraan' ? 'bg-blue-100 text-blue-600' :
                          relatedArticle.category === 'Lingkungan' ? 'bg-emerald-100 text-emerald-600' :
                          relatedArticle.category === 'Kolaborasi' ? 'bg-green-100 text-green-600' :
                          relatedArticle.category === 'Kelembagaan' ? 'bg-orange-100 text-orange-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {getCategoryLabel(relatedArticle.category)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-white/50 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{relatedArticle.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-forest-light mb-3 group-hover:text-forest-light transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
       )}
     </div>
    </>
   );
 };
 
 export default NewsDetail;
