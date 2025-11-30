'use client';

import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within FilterProvider');
  }
  return context;
};

export const FilterProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <FilterContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </FilterContext.Provider>
  );
};
