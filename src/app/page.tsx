'use client';

import { useState } from "react";
import { motion } from "framer-motion";

import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import CategoryFilter from '@/components/sections/category-filter';
import MoroccanSea from '@/components/sections/Sea';
import MoroccanForests from '@/components/sections/forest'
import MoroccanDeserts from '@/components/sections/desert';
import MoroccanStadiums from '@/components/sections/stadium';
import MoroccanMountains from "@/components/sections/MoroccanMountains";
import TechPartners from '@/components/sections/TechPartners';
import Footer from '@/components/sections/footer';
import TrailModal from "@/components/ui/trail-modal";

import { FilterProvider, useFilter } from '@/contexts/FilterContext';
import { useLanguage } from '@/contexts/language-context';

// تعريف نوع للمسار
interface Trail {
  id: number;
  image: string;
  title: string;
  location: string;
  difficulty: string;
  difficultyClass: string;
  difficultyColor: string;
  reservation: string;
  reservationColor: string;
  stats: {
    distance: string;
    duration: string;
    time: string;
    altitude: string;
    elevation: string;
    gain: string;
  };
  description: string;
  transport: {
    bus: string;
    taxi: string;
  };
  busRoute?: string;
  taxiInfo?: string;
  accessType?: string;
  reservationLink?: string;
}

// تعريف نوع للـ props
interface FilteredSectionsProps {
  onTrailSelect: (trail: Trail) => void;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

// ✅ المكون الداخلي لمعالجة العرض المصفى مع تعريف الأنواع
const FilteredSections = ({ onTrailSelect }: FilteredSectionsProps) => {
  const { activeCategory } = useFilter();
  const { t } = useLanguage();

  console.log('Active Category:', activeCategory);

  // عرض جميع الأقسام عندما تكون الفئة 'all' أو فارغة أو غير محددة
  const showAllSections = !activeCategory || activeCategory === '' || activeCategory === 'all';

  return (
    <>
      {showAllSections ? (
        <>
        {/* قسم البحر */}
          <motion.section {...fadeInUp} className="mb-12">
            <MoroccanMountains onTrailSelect={onTrailSelect}/>
          </motion.section>

          {/* قسم البحر */}
          <motion.section {...fadeInUp} className="mb-12">
            <MoroccanSea onTrailSelect={onTrailSelect}/>
          </motion.section>

          {/* الغابات المغربية */}
          <motion.section {...fadeInUp} className="mb-12">
            <MoroccanForests onTrailSelect={onTrailSelect} />
          </motion.section>

          {/* الصحراء المغربية */}
          <motion.section {...fadeInUp} className="mb-12">
            <MoroccanDeserts onTrailSelect={onTrailSelect} />
          </motion.section>

          {/* الملاعب المغربية */}
          <motion.section {...fadeInUp} className="mb-12">
            <MoroccanStadiums onTrailSelect={onTrailSelect} />
          </motion.section>

          {/* قسم إضافي للمحتوى المستقبلي */}
          <motion.section {...fadeInUp} className="mb-12">
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">محتوى إضافي قريباً</h3>
              <p className="text-lg text-gray-600">سيتم إضافة المزيد من الأقسام والوجهات قريباً...</p>
            </div>
          </motion.section>
        </>
      ) : (
        <>
         {/* عندما يتم اختيار فئة "البحر" */}
          {activeCategory === 'mountains' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanMountains onTrailSelect={onTrailSelect}/>
            </motion.section>
          )}


          {/* عندما يتم اختيار فئة "البحر" */}
          {activeCategory === 'sea' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanSea onTrailSelect={onTrailSelect}/>
            </motion.section>
          )}

          {/* عندما يتم اختيار فئة "الطيران" */}
          {activeCategory === 'stadium' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanStadiums onTrailSelect={onTrailSelect} />
            </motion.section>
          )}

          {/* عندما يتم اختيار فئة "جولات النهار" */}
          {activeCategory === 'day_hikes' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanForests onTrailSelect={onTrailSelect} />
            </motion.section>
          )}

          {/* عندما يتم اختيار فئة "السياحة في المدينة" */}
          {activeCategory === 'city_tourism' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanStadiums onTrailSelect={onTrailSelect} />
            </motion.section>
          )}

          {/* عندما يتم اختيار فئة "النهر" */}
          {activeCategory === 'river' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanSea onTrailSelect={onTrailSelect}/>
            </motion.section>
          )}

          {/* عندما يتم اختيار فئة "الغابة" */}
          {activeCategory === 'forest' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanForests onTrailSelect={onTrailSelect} />
            </motion.section>
          )}

          {/* عندما يتم اختيار فئة "الصحراء" */}
          {activeCategory === 'desert' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanDeserts onTrailSelect={onTrailSelect} />
            </motion.section>
          )}

          {/* عندما يتم اختيار فئة "الفلاتر" */}
          {activeCategory === 'filters' && (
            <motion.section {...fadeInUp} className="mb-12">
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">فلاتر متقدمة قريباً...</p>
              </div>
            </motion.section>
          )}
        </>
      )}
    </>
  );
};

export default function HomePage() {
  const [selectedTrail, setSelectedTrail] = useState<Trail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTrailSelect = (trail: Trail) => {
    setSelectedTrail(trail);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTrail(null);
  };

  return (
    <FilterProvider>
      <div className="min-h-screen">
        <HeroSection />
        <Header />

        <div className="relative z-10" style={{ marginTop: '100vh' }}>
          <div className="bg-gradient-to-b from-[#87CEEB] to-white">
            <main className="max-w-7xl mx-auto px-4 pt-12 pb-12">
              <motion.div {...fadeInUp}>
                <CategoryFilter />
              </motion.div>

              {/* عرض الأقسام المصفاة مع تمرير دالة المودال */}
              <FilteredSections onTrailSelect={handleTrailSelect} />
            </main>
          <motion.div {...fadeInUp}>
            <TechPartners />
          </motion.div>

           <motion.div {...fadeInUp}>
              <Footer />
            </motion.div>
          </div>
        </div>

        {/* ✅ المودال - تم إضافته هنا */}
        <TrailModal 
          trail={selectedTrail} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      </div>
    </FilterProvider>
  );
}