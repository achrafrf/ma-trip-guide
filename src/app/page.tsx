"use client";

import { motion } from "framer-motion";
import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import CategoryFilter from '@/components/sections/category-filter';
import DayHikesDirect from '@/components/sections/day-hikes-direct';
import DayHikesDirectContinued from '@/components/sections/day-hikes-direct-continued';
import DayHikesBus from '@/components/sections/day-hikes-bus';
import DayHikesBusContinued from '@/components/sections/day-hikes-bus-continued';
import MultiDayIntro from '@/components/sections/multi-day-intro';
import MultiDayBariloche from '@/components/sections/multi-day-bariloche';
import MultiDayBarilocheContinued from '@/components/sections/multi-day-bariloche-continued';
import MultiDayPampaLinda from '@/components/sections/multi-day-pampa-linda';
import BeachesLagos from '@/components/sections/beaches-lagos';
import BeachesLagosContinued from '@/components/sections/beaches-lagos-continued';
import Footer from '@/components/sections/footer';
import { FilterProvider } from '@/contexts/FilterContext';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function HomePage() {
  return (
    <FilterProvider>
      <div className="min-h-screen">
        {/* Hero with video background - fixed position covering entire viewport */}
        <HeroSection />
        
        {/* Header with transparent background over video */}
        <Header />
        
        {/* Main content starts after hero section */}
        <div className="relative z-10" style={{ marginTop: '100vh' }}>
          <div className="bg-gradient-to-b from-[#87CEEB] to-white">
            <main className="max-w-7xl mx-auto px-4 pt-12 pb-12">
              <motion.div {...fadeInUp}>
                <CategoryFilter />
              </motion.div>
              
              <motion.section id="day-hikes" className="mb-12" {...fadeInUp}>
                <DayHikesDirect />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <DayHikesDirectContinued />
                </div>
              </motion.section>

              <motion.section className="mb-12" {...fadeInUp}>
                <DayHikesBus />
                <DayHikesBusContinued />
              </motion.section>

              <motion.section id="multi-day" className="mb-12" {...fadeInUp}>
                <MultiDayIntro />
                <MultiDayBariloche />
                <MultiDayBarilocheContinued />
                <MultiDayPampaLinda />
              </motion.section>

              <motion.section id="beaches" className="mb-12" {...fadeInUp}>
                <BeachesLagos />
                <BeachesLagosContinued />
              </motion.section>
            </main>

            <motion.div {...fadeInUp}>
              <Footer />
            </motion.div>
          </div>
        </div>
      </div>
    </FilterProvider>
  );
}