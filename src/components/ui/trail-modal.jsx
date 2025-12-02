'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, MapPin, Navigation, Map as MapIcon, CloudSun, Utensils, BedDouble, Image as ImageIcon, Share2, Heart } from 'lucide-react';

const TrailModal = ({ trail, isOpen, onClose, userLocation, calculatedDistance }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (isOpen && trail) {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${trail.coordinates.lat}&longitude=${trail.coordinates.lng}&current_weather=true`)
        .then(res => res.json())
        .then(data => setWeather(data.current_weather))
        .catch(err => console.error(err));
    }
  }, [isOpen, trail]);

  if (!isOpen || !trail) return null;

  const getMapUrl = () => {
    if (userLocation) {
      return `https://maps.google.com/maps?saddr=${userLocation.lat},${userLocation.lng}&daddr=${trail.coordinates.lat},${trail.coordinates.lng}&output=embed&z=7`;
    }
    const offset = 0.05;
    const bbox = `${trail.coordinates.lng - offset},${trail.coordinates.lat - offset},${trail.coordinates.lng + offset},${trail.coordinates.lat + offset}`;
    return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${trail.coordinates.lat},${trail.coordinates.lng}`;
  };

  // Fallback if gallery is empty
  const galleryImages = trail.gallery && trail.gallery.length > 0 
    ? trail.gallery 
    : [trail.image, trail.image, trail.image, trail.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose} dir="rtl">
      <div 
        className="bg-white rounded-[1.5rem] shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-y-auto relative animate-in fade-in zoom-in duration-300 scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Navbar inside Modal */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center">
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-5 h-5 text-gray-800" />
            </button>
            <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
                   <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
                   <Heart className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* --- GALLERY GRID (1 Big Left, 2 Small Right) --- */}
        <div className="p-6 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                
                {/* 1. Main Image (Left - Big - Takes 2 cols & 2 rows) */}
                <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer">
                    <Image 
                        src={galleryImages[0]} 
                        alt={trail.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* 2. Top Right Image */}
                <div className="hidden md:block md:col-span-2 md:row-span-1 relative group cursor-pointer">
                    <Image 
                        src={galleryImages[1]} 
                        alt="Detail 1" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                </div>

                {/* 3. Bottom Right Image (Split into 2 columns if needed, or keeping it wide) */}
                {/* Here we actually want 2 small images at bottom right to mimic 'View All' usually */}
                <div className="hidden md:block md:col-span-1 md:row-span-1 relative group cursor-pointer">
                    <Image 
                        src={galleryImages[2]} 
                        alt="Detail 2" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                </div>
                 <div className="hidden md:block md:col-span-1 md:row-span-1 relative group cursor-pointer">
                    <Image 
                        src={galleryImages[3] || galleryImages[0]} 
                        alt="Detail 3" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    
                    {/* The "+ Photos" Button */}
                    <div className="absolute bottom-4 right-4 bg-white text-gray-900 px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2 hover:bg-gray-50 transition-colors pointer-events-none">
                        <ImageIcon className="w-4 h-4" />
                        عرض الكل
                    </div>
                </div>
            </div>
        </div>

        {/* Title & Header Info */}
        <div className="px-6 lg:px-10 pt-8 pb-4 border-b border-gray-100">
             <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">{trail.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm md:text-base">
                        <p className="flex items-center gap-1.5 font-medium">
                            <MapPin className="w-5 h-5 text-blue-600" /> {trail.location}
                        </p>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <p className="font-medium text-gray-900">{trail.difficulty}</p>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        {weather && (
                            <div className="flex items-center gap-1 font-bold text-gray-900">
                                <CloudSun className="w-5 h-5 text-orange-500" />
                                <span>{weather.temperature}°C</span>
                            </div>
                        )}
                    </div>
                </div>
                {/* Stats */}
                <div className="flex gap-3 self-start">
                   <div className="bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100 text-center min-w-[90px]">
                      <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">المسافة</span>
                      <span className="block text-xl font-black text-gray-900">{calculatedDistance ? `${calculatedDistance.km}` : '--'}</span>
                      <span className="text-[10px] text-gray-400">km</span>
                   </div>
                   <div className="bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100 text-center min-w-[90px]">
                      <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">الوقت</span>
                      <span className="block text-xl font-black text-gray-900">{calculatedDistance ? calculatedDistance.time.split('س')[0] : '--'}</span>
                      <span className="text-[10px] text-gray-400">ساعة</span>
                   </div>
                </div>
             </div>
        </div>

        {/* Content Body */}
        <div className="p-6 lg:p-10 bg-white">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
             
             {/* Left Column (Content) */}
             <div className="md:col-span-2 space-y-10">
                <section>
                   <h3 className="text-2xl font-bold mb-4 text-gray-900">ما الذي يميز هذا المكان؟</h3>
                   <p className="text-gray-600 leading-8 text-lg font-light">{trail.description}</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                        <MapIcon className="w-5 h-5" />
                        الموقع على الخريطة
                    </h3>
                    <div className="w-full h-[350px] bg-gray-100 rounded-3xl overflow-hidden shadow-inner border border-gray-200 relative group">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            src={getMapUrl()}
                            className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                            title="Route Map"
                        />
                         <a 
                            href={`https://www.google.com/maps/dir/?api=1&destination=${trail.coordinates.lat},${trail.coordinates.lng}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                         >
                            <Navigation className="w-4 h-4" />
                            فتح الاتجاهات (GPS)
                         </a>
                    </div>
                </section>
             </div>

             {/* Right Column (Sidebar Information) */}
             <div className="space-y-8">
                 {/* Hotels */}
                 <div className="bg-white border border-gray-100 shadow-lg shadow-gray-100/50 p-6 rounded-3xl sticky top-24">
                    <h3 className="text-lg font-bold flex items-center gap-2 mb-6">
                       <BedDouble className="w-5 h-5 text-gray-900" />
                       أماكن المبيت
                    </h3>
                    <div className="space-y-5">
                       {trail.hotels?.map((hotel, idx) => (
                          <div key={idx} className="flex gap-4 items-center group cursor-pointer">
                             <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-gray-200 shadow-sm">
                                <Image src={hotel.image} alt={hotel.name} fill className="object-cover group-hover:scale-110 transition-transform" />
                             </div>
                             <div className="flex flex-col">
                                <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{hotel.name}</h4>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="text-orange-500 text-xs">★</span>
                                    <span className="text-gray-500 text-xs font-medium">{hotel.rating}</span>
                                </div>
                             </div>
                          </div>
                       ))}
                    </div>

                    <div className="w-full h-px bg-gray-100 my-6"></div>

                    <h3 className="text-lg font-bold flex items-center gap-2 mb-6">
                       <Utensils className="w-5 h-5 text-gray-900" />
                       أين تأكل؟
                    </h3>
                    <div className="space-y-5">
                       {trail.restaurants?.map((resto, idx) => (
                          <div key={idx} className="flex gap-4 items-center group cursor-pointer">
                             <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center shrink-0 text-orange-500 border border-orange-100">
                                <Utensils className="w-6 h-6" />
                             </div>
                             <div className="flex flex-col">
                                <h4 className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">{resto.name}</h4>
                                <span className="text-gray-400 text-xs">{resto.type}</span>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailModal;