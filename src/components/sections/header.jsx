'use client';

import { Heart, DollarSign, HandHeart, Linkedin, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';


const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[1];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-4 w-full flex justify-between items-center px-4 z-50">
      <div className="flex items-center gap-2 flex-wrap">
       <Link href="/donate">
  <button
    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-bold text-black shadow-sm transition-transform hover:scale-105"
  >
    <HandHeart className="w-4 h-4 text-blue-600" />
    Donate
  </button>
</Link>
        <a
          href="https://www.linkedin.com/in/achraf-rafiq/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-bold transition-all hover:scale-105 bg-white/90 px-3 py-1.5 rounded-md shadow-sm border border-purple-600/20 hover:bg-white hover:shadow-md"
        >
          <span
            className="hidden sm:inline text-lg"
            style={{ fontFamily: 'var(--font-brand, sans-serif)' }}
          >
            Design by Achraf
          </span>
          <div className="flex items-center justify-center w-7 h-7">
            <Linkedin fill="#0A66C2" stroke="none" className="h-full w-full" />
          </div>
        </a>
      </div>
      
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-white/90 hover:bg-white border border-input h-10 px-4 py-2 text-sm shadow-sm hover:shadow-md transition-all"
        >
          <Globe className="w-4 h-4" />
          <span className="text-base">{currentLanguage.flag}</span>
          <span className="hidden sm:inline">{currentLanguage.label}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-[#B8BCC2] overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-2 px-4 py-2.5 text-sm transition-colors ${
                  language === lang.code
                    ? 'bg-[#2D5016] text-white font-semibold'
                    : 'text-[#6B7280] hover:bg-[#F5F5F5]'
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;