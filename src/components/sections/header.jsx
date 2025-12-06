'use client';

import { HandHeart, Linkedin, Globe, ChevronDown } from 'lucide-react';
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
    // top-2 f mobile, top-4 f pc (sm)
    <header className="fixed top-2 sm:top-4 w-full flex justify-between items-center px-2 sm:px-4 z-50 pointer-events-none">
      
      {/* LEFT SIDE: Buttons (Pointer events auto bach ykhedmo hit header fih pointer-events-none) */}
      <div className="flex items-center gap-2 pointer-events-auto">
       <Link href="/contact">
          <button
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-[#C1272D] hover:bg-[#a01f24] text-white font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input  hover:text-white/50 h-8 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm  shadow-sm transition-transform hover:scale-105"
          >
            <HandHeart className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            <span>Contact Us</span>
          </button>
        </Link>
      
      </div>

      {/* CENTER LOGO - Absolute Position */}
      {/* Logo sghir f mobile (text-3xl) w kbir f pc (md:text-5xl) */}
      <h5 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-brush drop-shadow-2xl -rotate-2 break-words whitespace-nowrap pointer-events-auto mt-0.5 sm:mt-0">
        <img 
            src="/star.png" 
            alt="Moroccan Star" 
            // Tswira katbda sghira (w-6) w katkber (sm:w-10)
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
        />
        <div className="flex items-center text-3xl sm:text-4xl md:text-5xl lg:text-4xl">
            <span className="text-[#C1272D] drop-shadow-md">M</span>
            <span className="text-white">T</span>
            <span className="text-[#006233] drop-shadow-md">G</span>
        </div>
      </h5>
      
      {/* RIGHT SIDE: Language Dropdown */}
      <div className="relative pointer-events-auto" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-white/90 hover:bg-white border border-input h-8 px-2 sm:h-10 sm:px-4 text-xs sm:text-sm shadow-sm hover:shadow-md transition-all"
        >
          <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-sm sm:text-base">{currentLanguage.flag}</span>
          {/* Label mkhabbi f mobile */}
          <span className="hidden sm:inline">{currentLanguage.label}</span>
          <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white rounded-md shadow-lg border border-[#B8BCC2] overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm transition-colors ${
                  language === lang.code
                    ? 'bg-[#2D5016] text-white font-semibold'
                    : 'text-[#6B7280] hover:bg-[#F5F5F5]'
                }`}
              >
                <span className="text-sm sm:text-base">{lang.flag}</span>
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