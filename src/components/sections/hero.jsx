"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8e731e1f-39f2-40d4-a44c-c113637ed114/generated_videos/cinematic-aerial-footage-of-stunning-mor-cf19e5aa-20251126210253.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-wider drop-shadow-2xl whitespace-nowrap">
              MA TRIP GUIDE
            </h1>
            
            {/* Plane and Smoke Trail Animation */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center">
              {/* Animated Plane */}
              <motion.div
                animate={{
                  x: [0, 200, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20"
              >
                <Plane className="w-8 h-8 md:w-10 md:h-10 text-white transform rotate-45" />
              </motion.div>

              {/* Animated Smoke/Dots Trail */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-3">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0.5],
                      x: [-20 * i, -20 * i - 30],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeOut",
                    }}
                    className="w-2 h-2 md:w-3 md:h-3 bg-white/60 rounded-full"
                    style={{
                      filter: "blur(1px)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;