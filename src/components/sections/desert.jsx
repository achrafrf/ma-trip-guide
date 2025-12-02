'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Navigation, Sun, CloudSun, Loader2, Mountain, TrendingUp, Tent } from 'lucide-react';
import TrailModal from '../ui/trail-modal';

const MoroccanDeserts = () => {
  // 1. DATA (High Quality - Desert Edition)
  const desertsData = [
    {
      id: 1,
      // Merzouga
      image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200',
        'https://images.unsplash.com/photo-1539659392211-155054320922?q=80&w=800',
        'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
        'https://images.unsplash.com/photo-1590762697843-255d4c827011?q=80&w=800'
      ],
      title: 'صحراء مرزوكة',
      location: 'الراشيدية',
      coordinates: { lat: 31.1309, lng: -4.0137 }, 
      difficulty: 'سهل',
      difficultyClass: 'bg-orange-100 text-orange-800',
      description: 'الكثبان الذهبية المشهورة عالمياً (عرق الشبي). تجربة التخييم الفاخر تحت النجوم وركوب الجمال وقت الغروب هي تجربة لا تنسى.',
      transport: { bus: 'CTM إلى الراشيدية', taxi: 'متوفر من أرفود' },
      stats: { gain: 'عرق الشبي' },
      hotels: [
        { name: 'Luxury Desert Camp', image: 'https://images.unsplash.com/photo-1520023424458-963a4362d294?w=400', rating: '4.9' },
        { name: 'Riad Madu', image: 'https://images.unsplash.com/photo-1598413554030-22c608f61559?w=400', rating: '4.7' }
      ],
      restaurants: [
        { name: 'Café Nora', type: 'مدفونة (Pizza Berber)' },
        { name: 'Restaurant Dakar', type: 'طاجين صحراوي' }
      ]
    },
    {
      id: 2,
      // Chegaga / Zagora
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1200',
        'https://images.unsplash.com/photo-1605537964076-3cb0ea2e3522?q=80&w=800',
        'https://images.unsplash.com/photo-1542052600-09852264585c?q=80&w=800',
        'https://images.unsplash.com/photo-1518182170546-0766bd6f5a04?q=80&w=800'
      ],
      title: 'عرق شقاقة',
      location: 'محاميد الغزلان',
      coordinates: { lat: 29.8281, lng: -6.1557 }, // إحداثيات محاميد الغزلان
      difficulty: 'مغامرة',
      difficultyClass: 'bg-amber-100 text-amber-800',
      description: 'الصحراء البرية الحقيقية. كثبان رملية تمتد لـ 40 كم، بعيدة عن العمران، كتوصل ليها بـ 4x4. الهدوء المطلق.',
      transport: { bus: 'إلى زاكورة', taxi: '4x4 ضروري' },
      stats: { gain: 'سفاري 4x4' },
      hotels: [
        { name: 'Chigaga Luxury Camp', image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400', rating: '4.8' },
        { name: 'Bab Rimal', image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=400', rating: '4.5' }
      ],
      restaurants: [
        { name: 'Chez Le Pacha', type: 'كسكس' },
        { name: 'Oasis Resto', type: 'شاي صحراوي' }
      ]
    },
    {
      id: 3,
      // Agafay (بدلت فكيك بأكفاي حيت سياحية كثر وقريبة لمراكش وكتجي واعرة فالصور)
      image: 'https://images.unsplash.com/photo-1545167622-3a6ac156f422?q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1545167622-3a6ac156f422?q=80&w=1200',
        'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800',
        'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800',
        'https://images.unsplash.com/photo-1580041029603-1e58ab814714?q=80&w=800'
      ],
      title: 'صحراء أكفاي',
      location: 'مراكش (40 دقيقة)',
      coordinates: { lat: 31.4385, lng: -8.1887 }, // إحداثيات أكفاي
      difficulty: 'استجمام',
      difficultyClass: 'bg-stone-100 text-stone-800',
      description: 'الصحراء الحجرية الساحرة. أقرب تجربة صحراوية لمراكش، مثالية للعشاء تحت النجوم مع خلفية جبال الأطلس.',
      transport: { bus: 'لا يوجد', taxi: 'نقل سياحي' },
      stats: { gain: 'جبال الأطلس' },
      hotels: [
        { name: 'Inara Camp', image: 'https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=400', rating: '4.7' },
        { name: 'White Camel', image: 'https://images.unsplash.com/photo-1523531294919-947c638d9753?w=400', rating: '4.6' }
      ],
      restaurants: [
        { name: 'Bohëmia', type: 'Fine Dining' },
        { name: 'Le Bédouin', type: 'مشويات' }
      ]
    }
  ];

  // 2. LOGIC (نفس اللوجيك ديال البحر: GPS, Weather, Distance)
  const [selectedDesert, setSelectedDesert] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [distances, setDistances] = useState({}); 
  const [weathers, setWeathers] = useState({});

  useEffect(() => {
    // A. Get User Location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLoc = { lat: position.coords.latitude, lng: position.coords.longitude };
        setUserLocation(userLoc);
        
        const newDistances = {};
        desertsData.forEach(item => {
          newDistances[item.id] = calculateDistance(userLoc, item.coordinates);
        });
        setDistances(newDistances);
      });
    }

    // B. Fetch Weather
    desertsData.forEach(item => {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${item.coordinates.lat}&longitude=${item.coordinates.lng}&current_weather=true`)
        .then(res => res.json())
        .then(data => {
          setWeathers(prev => ({ ...prev, [item.id]: data.current_weather?.temperature }));
        })
        .catch(err => console.log(err));
    });
  }, []);

  // Helper: Haversine Formula
  const calculateDistance = (start, end) => {
    const R = 6371; 
    const dLat = (end.lat - start.lat) * Math.PI / 180;
    const dLon = (end.lng - start.lng) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(start.lat * Math.PI / 180) * Math.cos(end.lat * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distKm = Math.round(R * c); 
    
    // الصحراء الطريق فيها طويلة شوية، نزيدو 40% كتقدير
    const driveDist = Math.round(distKm * 1.4);
    const hours = Math.floor(driveDist / 60); // السرعة المتوسطة فالطريق الوطنية
    const mins = Math.round(((driveDist / 60) - hours) * 60);

    return {
      km: driveDist,
      time: hours > 0 ? `${hours}س ${mins}د` : `${mins} دقيقة`
    };
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-12" dir="rtl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-r-4 border-amber-500 pr-4">
        <div>
           <h3 className="text-3xl font-extrabold text-amber-950 flex items-center gap-3">
             <span className="bg-amber-100 text-amber-600 p-2 rounded-xl"><Sun className="w-8 h-8" /></span>
             سحر الصحراء المغربية
           </h3>
           <p className="text-gray-500 mt-2 text-sm max-w-xl">اكتشف الكثبان الرملية الذهبية والواحات المخفية. تجربة التخييم والمغامرة.</p>
        </div>
        
        {!userLocation ? (
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs text-gray-500 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">
            <Loader2 className="w-3 h-3 animate-spin text-amber-600" />
            كنحسبو الطريق للصحراء...
          </div>
        ) : (
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs text-amber-700 font-bold bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
            <Navigation className="w-3 h-3" />
            المسافة محسوبة من موقعك
          </div>
        )}
      </div>
      
      {/* Cards Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {desertsData.map((item) => (
          <div 
            key={item.id}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
            onClick={() => setSelectedDesert(item)}
          >
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              
              {/* Weather Badge */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm z-10">
                <Sun className="w-4 h-4 text-amber-300" />
                <span className="font-bold text-sm text-white">
                  {weathers[item.id] ? `${weathers[item.id]}°` : '--'}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 text-white z-10">
                <h4 className="text-2xl font-bold mb-1 shadow-black drop-shadow-md">{item.title}</h4>
                <div className="flex items-center gap-1 text-sm font-medium opacity-90">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  {item.location}
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6 flex flex-col flex-grow">
              
              {/* Distance & Time Box */}
              <div className="flex items-center justify-between mb-4 bg-amber-50/50 p-3 rounded-2xl border border-amber-100">
                 <div className="flex flex-col">
                    <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider">المسافة</span>
                    <span className="text-gray-800 font-bold text-lg">
                      {distances[item.id] ? `${distances[item.id].km} km` : '...'}
                    </span>
                 </div>
                 <div className="h-8 w-px bg-amber-200"></div>
                 <div className="flex flex-col items-end">
                    <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider">الطريق</span>
                    <span className="text-gray-800 font-bold text-lg">
                      {distances[item.id] ? distances[item.id].time : '...'}
                    </span>
                 </div>
              </div>

              <div className="flex gap-2 mb-6 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.difficultyClass}`}>
                  {item.difficulty}
                </span>
                <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">
                   <Tent className="w-3 h-3" />
                   {item.stats.gain}
                </div>
              </div>

              <button className="w-full mt-auto  bg-[#C1272D] hover:bg-[#a01f24] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-gray-200">
                <Navigation className="w-4 h-4" />
                تفاصيل الرحلة
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Integration */}
      <TrailModal 
        trail={selectedDesert} 
        isOpen={!!selectedDesert} 
        onClose={() => setSelectedDesert(null)}
        userLocation={userLocation}
        calculatedDistance={selectedDesert ? distances[selectedDesert.id] : null}
      />
    </div>
  );
};

export default MoroccanDeserts;