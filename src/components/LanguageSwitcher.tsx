import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'EN', label: 'languageSwitcher.en', lng: 'en' },
  { code: 'JA', label: 'languageSwitcher.ja', lng: 'ja' },
  { code: 'ZH', label: 'languageSwitcher.zh', lng: 'zh' },
  { code: 'ID', label: 'languageSwitcher.id', lng: 'id' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLang = languages.find((l) => l.lng === i18n.language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-1.5 text-[13px] font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
        aria-expanded={isOpen}
        aria-label={t('common.languageLabel')}
      >
        <Globe className="h-4 w-4" />
        <span>{currentLang.code}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-in-up z-50">
          {languages.map((lang) => (
            <button
              key={lang.lng}
              onClick={() => changeLanguage(lang.lng)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 whitespace-nowrap ${
                i18n.language === lang.lng
                  ? 'text-gold bg-forest-deep/5 font-semibold'
                  : 'text-gray-700 hover:text-forest-mid hover:bg-cream'
              }`}
            >
              {t(lang.label)}
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;
