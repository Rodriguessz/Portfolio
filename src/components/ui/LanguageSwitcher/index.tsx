'use client';

import { useEffect, useState } from 'react';

export function LanguageSwitcher() {
  const [locale, setLocale] = useState<'pt' | 'en'>('pt');

  useEffect(() => {
    const value = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1];

    if (value === 'pt' || value === 'en') {
      setLocale(value);
    }
  }, []);

  const changeLanguage = (lang: 'pt' | 'en') => {
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;
    location.reload();
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-neutral-900/90 backdrop-blur-md  rounded-full md:rounded-[6px] px-3 py-1 flex  gap-2 shadow-md">
      <button
        onClick={() => changeLanguage('pt')}
        className={`text-lg transition-transform hover:scale-130 cursor-pointer ${
          locale === 'pt' ? 'opacity-100' : 'opacity-50'
        }`}
        aria-label="Trocar para português"
      >
        🇧🇷
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`text-lg transition-transform hover:scale-130 cursor-pointer ${
          locale === 'en' ? 'opacity-100' : 'opacity-50'
        }`}
        aria-label="Switch to English"
      >
        🇺🇸
      </button>
    </div>
  );
}
