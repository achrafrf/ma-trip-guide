"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0">
      
      {/* Load Font Globally */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Playfair+Display:ital@0;1&display=swap');
        .font-brush { font-family: 'Permanent Marker', cursive; }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8e731e1f-39f2-40d4-a44c-c113637ed114/generated_videos/cinematic-aerial-footage-of-stunning-mor-cf19e5aa-20251126210253.mp4"
          type="video/mp4"
        /> 
      </video>

      {/* Overlay: Darker gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center">
          <div className="relative inline-block">
            
            {/* Main Title - Updated Font & Colors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-brush tracking-wider drop-shadow-2xl whitespace-nowrap mb-6 transform -rotate-2">
                <span className="text-[#C1272D] drop-shadow-md">MA</span> 
                <span className="text-white mx-4">TRIP</span> 
                <span className="text-[#006233] drop-shadow-md">GUIDE</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-3xl text-white/90 italic mb-12 tracking-wide drop-shadow-lg font-serif"
            >
              Your Authentic Moroccan Adventure
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8, duration: 0.8 }}
               className="flex flex-col md:flex-row gap-4 justify-center items-center"
            >
              <button 
                onClick={scrollToNextSection}
                className="w-full md:w-auto font-bold bg-white/90 hover:bg-white text-[#1e293b] px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Discover Morocco
              </button>
              <Link 
                href="/plans" 
                className="w-full md:w-auto font-bold bg-[#C1272D] hover:bg-[#a01f24] text-white px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-red-900/30 hover:scale-105 transition-all duration-300"
              >
                Get Your Custom Plan
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full"
      >
        <p className="text-white/80 text-sm md:text-lg tracking-widest italic mb-3 font-serif">
          Voyagez avec passion, découvrez avec cœur
        </p>
        <div className="flex justify-center items-center gap-4 text-white/60 text-xs uppercase tracking-[0.2em] font-sans font-bold">
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