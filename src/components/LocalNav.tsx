import React, { useState, useEffect } from 'react';

interface LocalNavItem {
  label: string;
  anchorId: string;
}

interface LocalNavProps {
  items: LocalNavItem[];
}

const LocalNav: React.FC<LocalNavProps> = ({ items }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.getElementById(items[i].anchorId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(items[i].anchorId);
            return;
          }
        }
      }
      setActiveSection(items[0]?.anchorId || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, anchorId: string) => {
    e.preventDefault();
    const el = document.getElementById(anchorId);
    if (el) {
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="sticky top-16 lg:top-20 z-40 bg-forest-deep/90 backdrop-blur-lg border-b border-white/10 transition-all duration-300"
      aria-label="Page navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center gap-0 overflow-x-auto scrollbar-none py-3 -mx-2">
          {items.map((item) => (
            <li key={item.anchorId} className="flex-shrink-0">
              <button
                type="button"
                onClick={(e) => handleClick(e, item.anchorId)}
                className={`inline-block px-4 py-1.5 text-[13px] font-medium rounded-full transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  activeSection === item.anchorId
                    ? 'text-gold bg-white/10'
                    : 'text-white/60 hover:text-white/90 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default LocalNav;
