// src/contexts/FilterContext.js
'use client';
import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [activeCategory, setActiveCategory] = useState('all');
  // ✅ Zidna had state jdida dial search
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <FilterContext.Provider value={{ 
      activeCategory, 
      setActiveCategory, 
      searchQuery,    // ✅
      setSearchQuery  // ✅
    }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}