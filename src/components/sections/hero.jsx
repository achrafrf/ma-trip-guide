// src/components/sections/hero.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFilter } from '@/contexts/FilterContext';
import { searchAllTrails } from '@/lib/data';

const heroImages = [
  "sahara.jpg", 
  "marrkesh.jpg", 
  "kasbah.jpg", 
  "casablanca.jpg"
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // States للبحث
  const { setSearchQuery } = useFilter();
  const [localSearch, setLocalSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const router = useRouter();

  // Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  // عند الضغط على زر البحث
  const handleSearchClick = () => {
    setSearchQuery(localSearch);
    setShowSuggestions(false);
    scrollToNextSection();
  };

  // ✅ 1. عند الكتابة (Typing)
  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocalSearch(value);

    const results = searchAllTrails(value);
    setSuggestions(results);
    
    // إظهار القائمة إذا كانت هناك نتائج
    if (results.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  // ✅ 2. عند الضغط داخل الخانة (Focus) - الميزة الجديدة
  const handleFocus = () => {
    // نجلب النتائج حتى لو كان النص فارغاً (سيجلب أفضل 5 أماكن حسب تعديل data.js)
    const results = searchAllTrails(localSearch);
    
    if (results.length > 0) {
      setSuggestions(results);
      setShowSuggestions(true);
    }
  };

  // الانتقال للتفاصيل عند اختيار اقتراح
  const handleSuggestionClick = (trail) => {
    router.push(`/details?type=${trail.type}&id=${trail.id}`);
  };

  return (
    <section id="hero" className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0">
      
      {/* Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Playfair+Display:ital@0;1&family=Noto+Kufi+Arabic:wght@400;700&display=swap');
        .font-brush { font-family: 'Permanent Marker', cursive; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-arabic { font-family: 'Noto Kufi Arabic', sans-serif; }
      `}</style>

      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Morocco Nature"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
        <div className="text-center w-full max-w-5xl flex flex-col items-center pt-10"> 
            
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-brush tracking-wider drop-shadow-2xl mb-2 transform -rotate-2 break-words sm:whitespace-nowrap">
              <span className="text-[#C1272D] drop-shadow-md">MA</span> 
              <span className="text-white mx-2 sm:mx-4">TRIP</span> 
              <span className="text-[#006233] drop-shadow-md">GUIDE</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-2xl md:text-3xl text-white/95 italic mb-8 tracking-wide drop-shadow-lg font-serif px-2"
          >
            Your Authentic Moroccan Adventure
          </motion.p>

          {/* --- SEARCH BAR SECTION --- */}
          {/* z-50 ضروري باش يكون فوق كلشي */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="w-full max-w-xl px-2 mb-4 relative z-50" 
          >
            <div className="bg-white rounded-full p-1 pl-1 pr-5 shadow-2xl flex items-center justify-between h-12 sm:h-14 mx-auto transform transition-transform hover:scale-[1.02] relative z-50">
              
              {/* Search Button */}
              <button 
                onClick={handleSearchClick}
                className="bg-[#C1272D] hover:bg-[#a01f24] text-white font-bold text-sm sm:text-base rounded-full h-10 sm:h-12 px-6 sm:px-8 shadow-md transition-colors duration-300"
              >
                البحث
              </button>

              {/* Input Field */}
              <div className="flex-1 flex justify-end items-center h-full">
                <input 
                  type="text" 
                  value={localSearch}
                  onChange={handleInputChange}
                  onFocus={handleFocus} // ✅ هنا التغيير: يظهر الاقتراحات عند الضغط
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 300)} 
                  placeholder="ابحث في MA TRIP GUIDE" 
                  className="w-full h-full text-right text-gray-700 text-sm sm:text-base font-arabic outline-none bg-transparent placeholder-gray-400"
                  dir="rtl"
                />
                {/* Search Icon */}
                <div className="ml-2 text-gray-400 hidden sm:block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

            </div>

            {/* ✅ SUGGESTIONS DROPDOWN (القائمة المنسدلة) */}
            <AnimatePresence>
              {showSuggestions && suggestions.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl overflow-hidden z-[60] mx-4 border border-gray-100"
                  dir="rtl"
                >
                  {suggestions.map((item) => (
                    <div 
                      key={item.id}
                      // استخدمنا onMouseDown بدل onClick لأنه أسرع من onBlur
                      onMouseDown={(e) => {
                         e.preventDefault(); 
                         handleSuggestionClick(item);
                      }}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 transition-colors"
                    >
                      {/* Image Preview */}
                      <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg object-cover bg-gray-200" />
                      
                      <div className="flex flex-col text-right">
                        <span className="font-bold text-gray-900 text-sm">{item.title}</span>
                        <span className="text-xs text-gray-500 font-medium">
                            {item.location} • 
                            <span className="text-blue-600 mx-1">
                                {item.type === 'sea' ? 'شاطئ' : item.type === 'mountain' ? 'جبل' : item.type === 'forest' ? 'غابة' : item.type === 'desert' ? 'صحراء' : 'مكان'}
                            </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.9, duration: 0.8 }}
             className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center w-full mt-6 sm:mt-10 relative z-10"
          >
            <button 
              onClick={scrollToNextSection}
              className="w-full sm:w-auto font-bold bg-white/90 hover:bg-white text-[#1e293b] px-6 py-3 rounded-full text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-w-[180px]"
            >
              Discover Morocco
            </button>
            <Link 
              href="/plans" 
              className="w-full sm:w-auto font-bold bg-[#C1272D] hover:bg-[#a01f24] text-white px-6 py-3 rounded-full text-sm sm:text-base shadow-xl hover:shadow-red-900/30 hover:scale-105 transition-all duration-300 block text-center min-w-[180px]"
            >
              Get Your Custom Plan
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Footer Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center w-full px-4 z-20"
      >
        <p className="text-white/80 text-xs sm:text-sm tracking-widest italic mb-2 font-serif drop-shadow-md">
          Voyagez avec passion, découvrez avec cœur
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 text-white/80 text-[10px] md:text-xs uppercase tracking-[0.15em] font-sans font-bold drop-shadow-md">
          <span>Marrakech</span>
          <span className="text-[#C1272D]">•</span>
          <span>Sahara</span>
          <span className="text-[#006233]">•</span>
          <span>Fès</span>
          <span className="text-[#C1272D]">•</span>
          <span>Chefchaouen</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;