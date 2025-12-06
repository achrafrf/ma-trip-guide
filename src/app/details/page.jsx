'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  ArrowRight, MapPin, Navigation, CloudSun, 
  Utensils, BedDouble, Share2, Heart, 
  Loader2, Car, ImageIcon, Star, ExternalLink, X, ChevronLeft, ChevronRight, Info 
} from 'lucide-react';

import Header from '@/components/sections/header'; 
import Footer from '@/components/sections/footer'; 
import { getTrailData, getRelatedTrails } from '@/lib/data'; 

const PLACEHOLDER = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80";

// --- LIGHTBOX SLIDER COMPONENT ---
const ImageGalleryModal = ({ images, isOpen, onClose, startIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    useEffect(() => { setCurrentIndex(startIndex); }, [startIndex]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex]);

    if (!isOpen) return null;

    const nextSlide = (e) => { e?.stopPropagation(); setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)); };
    const prevSlide = (e) => { e?.stopPropagation(); setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); };

    return (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-300" dir="ltr">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition z-50 border border-white/10"><X className="w-6 h-6" /></button>
            <div className="absolute top-6 left-6 text-white font-bold text-lg z-50 drop-shadow-md">{currentIndex + 1} / {images.length}</div>
            <button onClick={prevSlide} className="absolute left-4 md:left-8 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition z-50 hidden md:block border border-white/10"><ChevronLeft className="w-8 h-8" /></button>
            <div className="relative w-full h-full md:w-[90vw] md:h-[90vh] flex items-center justify-center p-4" onClick={onClose}>
                <div className="relative w-full h-full max-h-[85vh] max-w-[1200px]" onClick={(e) => e.stopPropagation()}>
                    <Image src={images[currentIndex]} alt={`Gallery ${currentIndex}`} fill className="object-contain drop-shadow-2xl" priority unoptimized />
                </div>
            </div>
            <button onClick={nextSlide} className="absolute right-4 md:right-8 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition z-50 hidden md:block border border-white/10"><ChevronRight className="w-8 h-8" /></button>
        </div>
    );
};

// --- HELPER: DISTANCE CALCULATION ---
const calculateDistance = (start, end) => {
    if (!start || !end) return null;
    const R = 6371; 
    const dLat = (end.lat - start.lat) * Math.PI / 180;
    const dLon = (end.lng - start.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(start.lat * Math.PI / 180) * Math.cos(end.lat * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distKm = Math.round(R * c); 
    const driveDist = Math.round(distKm * 1.3);
    const hours = Math.floor(driveDist / 60);
    const mins = Math.round(((driveDist / 60) - hours) * 60);
    return { km: driveDist, time: hours > 0 ? `${hours}س ${mins}د` : `${mins} دقيقة` };
};

// --- MAIN CONTENT COMPONENT ---
const TrailContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const id = searchParams.get('id');
  
  const trail = getTrailData(type, id);
  const relatedTrails = getRelatedTrails(type, id);

  const [weather, setWeather] = useState(null);
  const [distanceInfo, setDistanceInfo] = useState(null);
  const [userLocation, setUserLocation] = useState(null); 
  const [loadingLoc, setLoadingLoc] = useState(true);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (trail?.coordinates) {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${trail.coordinates.lat}&longitude=${trail.coordinates.lng}&current_weather=true`)
        .then(res => res.json()).then(data => setWeather(data.current_weather)).catch(err => console.error(err));
    }
  }, [trail]);

  useEffect(() => {
    if (trail?.coordinates && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLoc = { lat: position.coords.latitude, lng: position.coords.longitude };
          setUserLocation(userLoc); 
          const dist = calculateDistance(userLoc, trail.coordinates);
          setDistanceInfo(dist);
          setLoadingLoc(false);
        },
        () => setLoadingLoc(false)
      );
    } else setLoadingLoc(false);
  }, [trail]);

  const getMapUrl = () => {
    if (!trail?.coordinates) return "";
    if (userLocation) return `https://maps.google.com/maps?saddr=${userLocation.lat},${userLocation.lng}&daddr=${trail.coordinates.lat},${trail.coordinates.lng}&output=embed`;
    return `https://maps.google.com/maps?q=${trail.coordinates.lat},${trail.coordinates.lng}&z=14&output=embed`;
  };

  if (!trail) return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">الوجهة غير متوفرة</h2>
          <button onClick={() => router.push('/')} className="bg-blue-600 text-white px-6 py-2 rounded-full">العودة للرئيسية</button>
      </div>
  );

  const galleryImages = trail.gallery && trail.gallery.length > 0 ? trail.gallery : [trail.image || PLACEHOLDER, trail.image || PLACEHOLDER, trail.image || PLACEHOLDER, trail.image || PLACEHOLDER];
  const openGallery = (index) => { setCurrentImageIndex(index); setIsGalleryOpen(true); };

  return (
    <div className="animate-in fade-in duration-500 bg-white">
        <ImageGalleryModal images={galleryImages} isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} startIndex={currentImageIndex} />

        <div className="max-w-[1600px] mx-auto px-4 md:px-8 pt-24 pb-12">
            
            {/* Header Actions */}
            <div className="flex justify-between items-center mb-6">
                <button onClick={() => router.back()} className="flex items-center gap-2 font-bold text-gray-600 hover:text-blue-600 transition bg-gray-50 px-4 py-2 rounded-full shadow-sm border border-gray-100"><ArrowRight className="w-5 h-5"/><span>رجوع</span></button>
                <div className="flex gap-2">
                    <button className="p-2.5 bg-gray-50 border border-gray-100 rounded-full hover:bg-gray-100 shadow-sm text-gray-600"><Share2 className="w-5 h-5"/></button>
                    <button className="p-2.5 bg-gray-50 border border-gray-100 rounded-full hover:bg-gray-100 shadow-sm text-gray-600"><Heart className="w-5 h-5"/></button>
                </div>
            </div>

            {/* 🔥 GRID SYSTEM: 70% Content | 30% Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12">
                
                {/* --- 70% COLUMN --- */}
                <div className="lg:col-span-7 space-y-6">
                    
                    {/* ✅ 1. COMPACT TITLE & STATS (تم التصغير) */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">{trail.title}</h1>
                            <div className="flex flex-wrap items-center gap-3 text-gray-600 font-medium text-sm">
                                <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-bold"><MapPin className="w-3.5 h-3.5" /> {trail.location}</div>
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                <div className="text-purple-600 font-bold flex items-center gap-1"><Info className="w-3.5 h-3.5"/> {trail.difficulty || 'سهل'}</div>
                                {weather && (
                                    <>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <div className="flex items-center gap-1 text-orange-600 font-bold"><CloudSun className="w-4 h-4" /> {weather.temperature}°C</div>
                                    </>
                                )}
                            </div>
                        </div>
                        {/* Stats Pills (Compact) */}
                        <div className="flex gap-2 shrink-0">
                           <div className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 text-center min-w-[90px]">
                              <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">المسافة</span>
                              <span className="block text-lg font-black text-blue-900">{loadingLoc ? <Loader2 className="w-4 h-4 animate-spin mx-auto"/> : (distanceInfo ? distanceInfo.km : '--')}<span className="text-[10px] font-normal text-gray-400 mr-1">km</span></span>
                           </div>
                           <div className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 text-center min-w-[90px]">
                              <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">الوقت</span>
                              <span className="block text-lg font-black text-blue-900">{loadingLoc ? <Loader2 className="w-4 h-4 animate-spin mx-auto"/> : (distanceInfo ? distanceInfo.time.split('س')[0] : '--')}<span className="text-[10px] font-normal text-gray-400 mr-1">س</span></span>
                           </div>
                        </div>
                    </div>

                    {/* ✅ 2. COMPACT GALLERY GRID (تم تصغير الطول) */}
                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-[300px] md:h-[380px] rounded-3xl overflow-hidden shadow-sm bg-gray-100 border border-gray-100">
                        <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer" onClick={() => openGallery(0)}>
                            <Image src={galleryImages[0]} alt={trail.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority unoptimized />
                        </div>
                        <div className="hidden md:block md:col-span-2 md:row-span-1 relative group cursor-pointer" onClick={() => openGallery(1)}>
                            <Image src={galleryImages[1]} alt="img" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                        </div>
                        <div className="hidden md:block md:col-span-1 md:row-span-1 relative group cursor-pointer" onClick={() => openGallery(2)}>
                            <Image src={galleryImages[2]} alt="img" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                        </div>
                        <div className="hidden md:block md:col-span-1 md:row-span-1 relative group cursor-pointer" onClick={() => openGallery(3)}>
                            <Image src={galleryImages[3]} alt="img" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5 pointer-events-none hover:bg-white transition">
                                <ImageIcon className="w-3 h-3" /> عرض الكل
                            </div>
                        </div>
                    </div>

                    
                    {/* 3. DESCRIPTION */}
                    <section>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                             <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                             عن المكان
                        </h3>
                        <p className="text-gray-600 leading-8 text-lg text-justify font-light">{trail.description || "استمتع برحلة رائعة..."}</p>
                    </section>

                    {/* 4. MAP SECTION */}
                    {trail.coordinates && (
                        <section>
                            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-gray-900"><Navigation className="w-5 h-5 text-blue-600" />الموقع على الخريطة</h3>
                            <div className="w-full h-[400px] bg-gray-100 rounded-[2rem] overflow-hidden shadow-inner border border-gray-200 relative group">
                                <iframe width="100%" height="100%" frameBorder="0" src={getMapUrl()} className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" title="Route Map" />
                                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 w-full justify-center px-4 z-10">
                                     <a href={`https://waze.com/ul?ll=${trail.coordinates.lat},${trail.coordinates.lng}&navigate=yes`} target="_blank" className="bg-[#33ccff] hover:bg-[#2cb5e3] text-white px-5 py-2.5 rounded-full font-bold shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 text-sm"><img className='h-6' src={'https://upload.wikimedia.org/wikipedia/commons/3/37/Waze_logo_2022.png?20220606205242'}/> <span></span></a>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* 🔥 5. RELATED TRAILS */}
                    <section className="pt-8 border-t border-gray-100">
                        <h3 className="text-xl font-bold mb-6 text-gray-900">أماكن أخرى قد تعجبك</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {relatedTrails && relatedTrails.length > 0 ? relatedTrails.map((item, idx) => (
                                <div key={idx} onClick={() => router.push(`/details?type=${type}&id=${item.id}`)} className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer">
                                    <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                                        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[10px] font-bold text-gray-800 flex items-center gap-1"><Star className="w-2.5 h-2.5 text-yellow-500 fill-current" /> 4.8</div>
                                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-bold text-gray-900 text-base mb-1 group-hover:text-blue-600 transition truncate">{item.title}</h4>
                                        <p className="text-gray-500 text-xs flex items-center gap-1"><MapPin className="w-3 h-3" /> {item.location}</p>
                                    </div>
                                </div>
                            )) : (
                                <p className="col-span-3 text-center text-gray-400 py-8 bg-gray-50 rounded-xl text-sm border border-dashed border-gray-200">لا توجد اقتراحات مشابهة</p>
                            )}
                        </div>
                    </section>
                </div>

                {/* --- 30% COLUMN (SIDEBAR) --- */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white border border-gray-100 shadow-xl shadow-blue-900/5 p-5 rounded-[2rem] sticky top-24">
                        
                        {/* HOTELS */}
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-base font-bold flex items-center gap-2 text-gray-900"><BedDouble className="w-5 h-5 text-blue-600" /> فين تبات ؟</h3>
                            <span className="text-[10px] bg-green-50 text-green-700 px-2 py-1 rounded-full font-bold border border-green-100">أسعار ممتازة</span>
                        </div>
                        <div className="space-y-4">
                            {trail.hotels?.map((h, i) => (
                                <div key={i} className="flex gap-3 bg-white p-2 rounded-xl transition-all border border-gray-100 hover:border-blue-200 hover:shadow-md group">
                                    <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-gray-200">
                                        <Image src={h.image} alt={h.name} fill className="object-cover group-hover:scale-110 transition" unoptimized />
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow py-0.5">
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-xs line-clamp-1">{h.name}</h4>
                                            <div className="flex items-center gap-1 mt-0.5">
                                                <Star className="w-2.5 h-2.5 text-orange-400 fill-current"/>
                                                <span className="text-[10px] text-gray-500 font-bold">{h.rating}</span>
                                            </div>
                                        </div>
                                        <a href={h.affiliateLink || '#'} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold py-1 px-2 rounded-md text-center w-full transition-colors flex items-center justify-center gap-1 shadow-sm shadow-blue-200 mt-1">
                                            تحقق من السعر <ExternalLink className="w-2.5 h-2.5"/>
                                        </a>
                                    </div>
                                </div>
                            )) || <p className="text-gray-400 text-xs text-center">لا توجد فنادق</p>}
                        </div>

                        <div className="w-full h-px bg-gray-100 my-6"></div>

                        {/* RESTAURANTS */}
                        <h3 className="text-base font-bold flex items-center gap-2 mb-5 text-gray-900"><Utensils className="w-5 h-5 text-orange-500" /> فين تاكل ؟</h3>
                        <div className="space-y-3">
                            {trail.restaurants?.map((r, i) => (
                                <div key={i} className="flex gap-3 items-center group cursor-default hover:bg-orange-50/50 p-2 rounded-xl transition border border-transparent hover:border-orange-100">
                                    <div className="bg-orange-50 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-orange-500 border border-orange-100 shadow-sm">
                                        <Utensils className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-bold text-gray-900 text-xs group-hover:text-orange-600 transition-colors">{r.name}</h4>
                                        <span className="text-gray-400 text-[10px] mt-0.5 font-medium">{r.type}</span>
                                    </div>
                                </div>
                            )) || <p className="text-gray-400 text-xs text-center">لا توجد مطاعم</p>}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

const TrailDetailsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white" dir="rtl">
      <Header />
      <div className="flex-grow">
        <Suspense fallback={<div className="h-[60vh] flex items-center justify-center"><Loader2 className="w-10 h-10 animate-spin text-blue-600"/></div>}>
            <TrailContent />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default TrailDetailsPage;