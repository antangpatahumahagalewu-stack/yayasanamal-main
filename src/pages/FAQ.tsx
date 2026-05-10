import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Search, HelpCircle, BookOpen, Users } from 'lucide-react';
import CarbonParticles from '../components/CarbonParticles';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categoryLabelMap: Record<string, string> = {
    'Semua': t('faq.categoryAll'),
    'Program': t('faq.categoryProgram'),
    'Kemitraan': t('faq.categoryPartnership'),
  };

  const getCategoryLabel = (cat: string) => categoryLabelMap[cat] || cat;

  const categories = [
    { name: 'Semua', icon: HelpCircle },
    { name: 'Program', icon: BookOpen },
    { name: 'Kemitraan', icon: Users }
  ];

  const faqs = [
    {
      id: 1,
      category: 'Program',
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      id: 2,
      category: 'Program',
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      id: 3,
      category: 'Program',
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      id: 8,
      category: 'Kemitraan',
      question: t('faq.q8'),
      answer: t('faq.a8')
    },
    {
      id: 9,
      category: 'Kemitraan',
      question: t('faq.q9'),
      answer: t('faq.a9')
    },
    {
      id: 10,
      category: 'Program',
      question: t('faq.q10'),
      answer: t('faq.a10')
    },
    {
      id: 12,
      category: 'Program',
      question: t('faq.q12'),
      answer: t('faq.a12')
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'Semua' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
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
              {t('faq.heroTitle')}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {t('faq.heroDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 sticky top-16 lg:top-20 z-10 border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('faq.searchPlaceholder')}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-emerald-900/50 hover:text-forest-light'
                  }`}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {getCategoryLabel(category.name)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="card overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-center space-x-3 mb-1">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            faq.category === 'Program' ? 'bg-blue-100 text-blue-600' :
                            'bg-purple-100 text-purple-600'
                          }`}>
                            {getCategoryLabel(faq.category)}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-forest-light">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-white/50 transition-transform duration-200 ${
                          openFAQ === faq.id ? 'transform rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {openFAQ === faq.id && (
                      <div className="px-6 pb-6 border-t border-white/10">
                        <div className="pt-4">
                          <p className="text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-forest-light mb-2">
                  {t('faq.noResults')}
                </h3>
                <p className="text-gray-400 mb-6">
                  {t('faq.noResultsHint')}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('Semua');
                  }}
                  className="btn-secondary"
                >
                  {t('faq.resetFilter')}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('faq.ctaTitle')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('faq.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/kontak" 
              className="bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              {t('faq.contactUs')}
            </a>
            <a 
              href="mailto:info@yayasanamal.org" 
              className="border-2 border-white text-white hover:bg-white hover:text-forest-light font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              {t('faq.emailDirect')}
            </a>
          </div>
        </div>
       </section>
     </div>
    </>
   );
 };

 export default FAQ;
