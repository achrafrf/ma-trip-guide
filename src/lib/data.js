// src/lib/data.js

// 1. Import Data
import { forestsData } from "@/components/sections/forest";
// ⚠️ Mola7ada: Taakad mn smiya d fichier wach "sea.jsx" wla "Sea.jsx"
// Ila kan "sea.jsx" (sghira), dir .../sections/sea
import { seaData } from "@/components/sections/Sea"; 

const ALL_DATA = {
  forest: forestsData || [], 
  sea: seaData || [], // ✅ Hna dakhlnaha f l-objet l-kbir
  mountain: [],
  desert: [],
  stadium: [],
};

// Function 1: Katjib detail dyal blassa wa7da (Details Page)
export const getTrailData = (type, id) => {
  const categoryData = ALL_DATA[type];
  if (!categoryData) return null;
  // Kanjibo item b id dyalo
  return categoryData.find(item => item.id == id) || null;
};

// Function 2: Katjib iqtira7at (Related Items)
export const getRelatedTrails = (type, currentId) => {
  const categoryData = ALL_DATA[type];
  if (!categoryData) return [];
  // Kanjibo 3 d les items lokhrin mn ghir hada li 7na fih
  return categoryData.filter(item => item.id != currentId).slice(0, 3);
};

// ✅ Function 3: Search (Daba mkhadma Forest + Sea)
export const searchAllTrails = (query) => {
  
  // 1. Njam3o data kamla (Forest + Sea)
  const allTrails = [
    ...(ALL_DATA.forest || []).map(t => ({ ...t, type: 'forest' })),
    ...(ALL_DATA.sea || []).map(t => ({ ...t, type: 'sea' })), // ✅ Zdna had ster
  ];

  // 2. Logic Jdid: Ila kan query khawi (Focus), rajja3 5 lawlin (Mkhaltin)
  if (!query || query.trim() === "") {
    return allTrails.slice(0, 5);
  }

  // 3. Ila kan user kateb chi 7aja, qalab fiha
  const lowerQuery = query.toLowerCase();
  
  return allTrails.filter(item => 
    (item.title && item.title.toLowerCase().includes(lowerQuery)) || 
    (item.location && item.location.toLowerCase().includes(lowerQuery))
  ).slice(0, 5); // Rajja3 gha a7san 5 results
};