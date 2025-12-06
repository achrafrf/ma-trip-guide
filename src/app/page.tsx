'use client';

import { motion } from "framer-motion";

import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import CategoryFilter from '@/components/sections/category-filter';
import MoroccanSea from '@/components/sections/Sea';
import MoroccanForests from '@/components/sections/forest';
import MoroccanDeserts from '@/components/sections/desert';
import MoroccanStadiums from '@/components/sections/stadium';
import MoroccanMountains from "@/components/sections/MoroccanMountains";
import TechPartners from '@/components/sections/TechPartners';
import Footer from '@/components/sections/footer';
// حيدنا import TrailModal

import { FilterProvider, useFilter } from '@/contexts/FilterContext';
import { useLanguage } from '@/contexts/language-context';

// حيدنا Interfaces ديال Trail و Props حيت مبقيناش محتاجينهم هنا

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

// ✅ المكون الداخلي: مبقاش كياخد props
const FilteredSections = () => {
  const { activeCategory } = useFilter();
  const { t } = useLanguage(); // وخا ما مستعملاش هنا، خليتها ربما تحتاجها من بعد

  console.log('Active Category:', activeCategory);

  const showAllSections = !activeCategory || activeCategory === '' || activeCategory === 'all';

  // ملاحظة: الـ components لتحت (MoroccanSea, etc) خاصهم يكونو دابا فيهم Link لصفحة التفاصيل
  // ومبقاوش كيتسناو onTrailSelect prop

  return (
    <>
      {showAllSections ? (
        <>
          {/* الجبال */}
          <motion.section {...fadeInUp} className="mb-12">
            <MoroccanMountains />
          </motion.section>

          {/* البحر */}
          <motion.section {...fadeInUp} className="mb-12">
            <MoroccanSea />
          </motion.section>

          {/* الغابات */}
          <motion.section {...fadeInUp} className="mb-12">
            <MoroccanForests />
          </motion.section>

          {/* الصحراء */}
          <motion.section {...fadeInUp} className="mb-12">
            <MoroccanDeserts />
          </motion.section>

          {/* الملاعب */}
          <motion.section {...fadeInUp} className="mb-12">
            <MoroccanStadiums />
          </motion.section>

          {/* محتوى إضافي */}
          <motion.section {...fadeInUp} className="mb-12">
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">محتوى إضافي قريباً</h3>
              <p className="text-lg text-gray-600">سيتم إضافة المزيد من الأقسام والوجهات قريباً...</p>
            </div>
          </motion.section>
        </>
      ) : (
        <>
          {activeCategory === 'mountains' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanMountains />
            </motion.section>
          )}

          {activeCategory === 'sea' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanSea />
            </motion.section>
          )}

          {activeCategory === 'stadium' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanStadiums />
            </motion.section>
          )}

          {/* تأكد من Categories IDs واش متطابقين مع FilterContext */}
          {activeCategory === 'day_hikes' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanForests />
            </motion.section>
          )}

          {activeCategory === 'city_tourism' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanStadiums />
            </motion.section>
          )}

          {activeCategory === 'river' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanSea />
            </motion.section>
          )}

          {activeCategory === 'forest' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanForests />
            </motion.section>
          )}

          {activeCategory === 'desert' && (
            <motion.section {...fadeInUp} className="mb-12">
              <MoroccanDeserts />
            </motion.section>
          )}

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
  // حيدنا States ديال Modal
  
  return (
    <FilterProvider>
      <div className="min-h-screen">
        <HeroSection />
        <Header />

        <div className="relative z-10" style={{ marginTop: '100vh' }}>
          <div className="bg-white">
            <main className="max-w-7xl mx-auto px-4 pt-12 pb-12">
              <motion.div {...fadeInUp}>
                <CategoryFilter />
              </motion.div>

              {/* مبقيناش كندوزو حتى دالة هنا */}
              <FilteredSections />
            </main>
            
            <motion.div {...fadeInUp}>
              <TechPartners />
            </motion.div>

            <motion.div {...fadeInUp}>
              <Footer />
            </motion.div>
          </div>
        </div>

        {/* حيدنا TrailModal من هنا */}
      </div>
    </FilterProvider>
  );
}