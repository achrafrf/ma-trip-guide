"use client";
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-6 md:bottom-6 md:right-6 lg:bottom-8 lg:right-6 xl:bottom-6 xl:right-6
                     w-12 h-12 md:w-12 md:h-14 lg:w-14 lg:h-14
                     bg-green-800 hover:bg-green-700 active:bg-green-900
                     text-white font-bold
                     rounded-full shadow-lg hover:shadow-xl
                     transition-all duration-300 ease-in-out
                     transform hover:-translate-y-1 active:translate-y-0
                     flex items-center justify-center
                     z-50
                     border-2 border-white"
          aria-label="Scroll to top"
        >
          {/* Up arrow icon */}
          <svg 
            className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;