'use client';

import { Map, Mountain, House, TreePine, Footprints, Waves, Filter } from 'lucide-react';
import React from 'react';
import { useFilter } from '@/contexts/FilterContext';

const CategoryFilter = () => {
  const { activeCategory, setActiveCategory } = useFilter();
  
  const categories = [
    {
      name: 'Todos',
      icon: Map,
    },
    {
      name: 'Refugios',
      icon: Mountain,
    },
    {
      name: 'Cerca',
      icon: House,
    },
    {
      name: 'Montañas Fáciles',
      icon: TreePine,
    },
    {
      name: 'Senderos para Caminar',
      icon: Footprints,
    },
    {
      name: 'Playas y Lagos',
      icon: Waves,
    },
    {
      name: 'Filtros',
      icon: Filter,
      extraClass: 'border-black',
    },
  ];

  const basePillClasses =
    'inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer text-base';

  return (
    <>
      <div className="shrink-0 my-4 bg-[#B8BCC2] h-[1px] w-full shadow-sm" />
      <div className="py-4 flex flex-col items-center">
        <div className="w-full max-w-4xl text-center">
          <p className="text-xl font-semibold text-gray-600 mb-3">
            Categorías de Búsqueda
          </p>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;
              const pillClasses = [basePillClasses];

              if (isActive) {
                pillClasses.push(
                  'bg-primary text-primary-foreground hover:bg-primary/80 border-transparent',
                );
              } else {
                pillClasses.push('text-foreground hover:bg-gray-100');
              }

              if (category.extraClass) {
                pillClasses.push(category.extraClass);
              }

              return (
                <div 
                  key={category.name} 
                  className={pillClasses.join(' ')}
                  onClick={() => setActiveCategory(category.name)}
                >
                  <Icon className="w-4 h-4 mr-1" aria-hidden="true" />
                  <span>{category.name}</span>
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