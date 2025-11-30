"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Footer
    'footer.title': 'MA TRIP GUIDE',
    'footer.description': 'Your complete guide to discovering the trails and natural wonders of Patagonia.',
    'footer.quickLinks': 'Quick Links',
    'footer.dayHikes': 'Day Hikes',
    'footer.multiDay': 'Multi-Day Treks',
    'footer.beaches': 'Beaches & Lakes',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.language': 'Language',
    'footer.rights': 'All rights reserved.',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    // Header
    'header.appMaps': 'MAPS APP',
    'header.designBy': 'Design by Alan',
    // categories
  'categorie.title': 'Categories',
  'categorie.mountains': 'Mountainous Areas',
  'categorie.forest': 'Forests',
  'categorie.sea': 'Sea',
  'categorie.river': 'River',
  'categorie.desert': 'Desert',
  'categorie.city_tourism': 'City Tourism',
  'categorie.stadium': 'stadium',
  'categorie.filters': 'Filters',
  'categorie.all': 'All',
  },
  es: {
    // Footer
    'footer.title': 'Guía de Senderos Los Coihues',
    'footer.description': 'Tu guía completa para descubrir los senderos y maravillas naturales de la Patagonia.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.dayHikes': 'Caminatas de un Día',
    'footer.multiDay': 'Varios Días',
    'footer.beaches': 'Playas y Lagos',
    'footer.contact': 'Contacto',
    'footer.followUs': 'Síguenos',
    'footer.language': 'Idioma',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
    // Header
    'header.appMaps': 'APP MAPAS',
    'header.designBy': 'Diseñado por Alan',
     // categories
 'categorie.title': 'Categorías',
  'categorie.mountains': 'Zonas Montañosas',
  'categorie.forest': 'Bosques',
  'categorie.sea': 'Mar',
  'categorie.river': 'Río',
  'categorie.desert': 'Desierto',
  'categorie.city_tourism': 'Turismo en la Ciudad',
  'categorie.stadium': 'estadio',
  'categorie.filters': 'Filtros',
  'categorie.all': 'Todos',
  },
  fr: {
    // Footer
    'footer.title': 'Guide des Sentiers Los Coihues',
    'footer.description': 'Votre guide complet pour découvrir les sentiers et merveilles naturelles de la Patagonie.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.dayHikes': 'Randonnées d\'une Journée',
    'footer.multiDay': 'Randonnées de Plusieurs Jours',
    'footer.beaches': 'Plages et Lacs',
    'footer.contact': 'Contact',
    'footer.followUs': 'Suivez-nous',
    'footer.language': 'Langue',
    'footer.rights': 'Tous droits réservés.',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.privacy': 'Politique de Confidentialité',
    // Header
    'header.appMaps': 'APPLICATION CARTES',
    'header.designBy': 'Conçu par Alan',
    // categories
    'categorie.title': 'Catégories',
  'categorie.mountains': 'Zones Montagneuses',
  'categorie.forest': 'Forêts',
  'categorie.sea': 'Mer',
  'categorie.river': 'Rivière',
  'categorie.desert': 'Désert',
  'categorie.city_tourism': 'Tourisme en Ville',
  'categorie.stadium': 'stade',
  'categorie.filters': 'Filtres',
  'categorie.all': 'Tous',
  },
  ar: {
    // Footer
    'footer.title': 'دليل مسارات لوس كويهويس',
    'footer.description': 'دليلك الكامل لاكتشاف المسارات والعجائب الطبيعية في باتاغونيا.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.dayHikes': 'رحلات يوم واحد',
    'footer.multiDay': 'رحلات متعددة الأيام',
    'footer.beaches': 'الشواطئ والبحيرات',
    'footer.contact': 'اتصل بنا',
    'footer.followUs': 'تابعنا',
    'footer.language': 'اللغة',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.terms': 'شروط الخدمة',
    'footer.privacy': 'سياسة الخصوصية',
    // Header
    'header.appMaps': 'تطبيق الخرائط',
    'header.designBy': 'تصميم آلان',
    // categories
    'categorie.title': 'التصنيفات',
  'categorie.mountains': 'مناطق جبلية',
  'categorie.forest': 'مناطق غابوية',
  'categorie.sea': 'البحر',
  'categorie.river': 'الواد',
  'categorie.desert': 'الصحراء',
  'categorie.city_tourism': 'مناطق سياحية داخل المدينة',
  'categorie.stadium': 'الملعب',
  'categorie.filters': 'فلاتر',
  'categorie.all': 'الكل',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'es', 'fr', 'ar'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Update document direction for RTL languages
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
