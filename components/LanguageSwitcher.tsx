"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-5 right-5 z-50 flex gap-2 bg-[#2a2a2a] rounded-lg p-1 shadow-lg">
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 rounded-md transition-colors ${
          language === 'es' 
            ? 'bg-[#444] text-white' 
            : 'text-[#999] hover:text-white'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md transition-colors ${
          language === 'en' 
            ? 'bg-[#444] text-white' 
            : 'text-[#999] hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}