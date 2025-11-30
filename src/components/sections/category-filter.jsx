'use client';

import { 
  Globe,
  Mountain, 
  Trees, 
  Waves, 
  Fish, 
  Sun, 
  Building, 
  Plane, 
  Filter 
} from 'lucide-react';
import React from 'react';
import { useFilter } from '@/contexts/FilterContext';
import { useLanguage } from '@/contexts/language-context';

const CategoryFilter = () => {
  const { activeCategory, setActiveCategory } = useFilter();
  const { t } = useLanguage();

  const categories = [
    { key: 'all', translationKey: 'categorie.all', icon: Globe, label: 'All' },
    { key: 'day_hikes', translationKey: 'categorie.mountains', icon: Mountain, label: 'Day Hikes' },
    { key: 'forest', translationKey: 'categorie.forest', icon: Trees, label: 'Forest' },
    { key: 'sea', translationKey: 'categorie.sea', icon: Waves, label: 'Sea' },
    { key: 'river', translationKey: 'categorie.river', icon: Fish, label: 'River' },
    { key: 'desert', translationKey: 'categorie.desert', icon: Sun, label: 'Desert' },
    { key: 'city_tourism', translationKey: 'categorie.city_tourism', icon: Building, label: 'City Tours' },
    { key: 'flight', translationKey: 'categorie.flight', icon: Plane, label: 'Flights' },
    { key: 'filters', translationKey: 'categorie.filters', icon: Filter, extraClass: 'border-black', label: 'Filters' },
  ];

  const basePillClasses =
    'inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer text-base';

  // Set default to 'all' if no active category
  React.useEffect(() => {
    if (!activeCategory) {
      setActiveCategory('all');
    }
  }, [activeCategory, setActiveCategory]);

  return (
    <>
      <div className="shrink-0 my-4 bg-[#B8BCC2] h-[1px] w-full shadow-sm" />
      <div className="py-4 flex flex-col items-center">
        <div className="w-full max-w-4xl text-center">
          <p className="text-xl font-semibold text-gray-600 mb-3">
            {t('categorie.title')}
          </p>

          <div className="flex flex-wrap justify-center gap-2 items-center">
            {categories.map((item) => {
              const Icon = item.icon;
              const translatedName = t(item.translationKey) || item.label;
              const isActive = activeCategory === item.key;

              const pillClasses = [basePillClasses];
              if (isActive) {
                pillClasses.push(
                  'bg-primary text-primary-foreground hover:bg-primary/80 border-transparent'
                );
              } else {
                pillClasses.push('text-foreground hover:bg-gray-100');
              }

              if (item.extraClass) {
                pillClasses.push(item.extraClass);
              }

              return (
                <div
                  key={item.key}
                  className={pillClasses.join(' ')}
                  onClick={() => setActiveCategory(item.key)}
                >
                  <Icon className="w-4 h-4 mr-1" aria-hidden="true" />
                  <span>{translatedName}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="shrink-0 my-4 bg-[#B8BCC2] h-[1px] w-full shadow-sm" />
    </>
  );
};

export default CategoryFilter;