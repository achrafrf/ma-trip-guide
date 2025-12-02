'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Navigation, Trophy, CloudSun, Loader2, Users, Calendar, Flag } from 'lucide-react';
import TrailModal from '../ui/trail-modal';

const MoroccanStadiums = () => {
  // 1. DATA (AFCON 2025 Stadiums)
  const stadiumsData = [
    {
      id: 1,
      // Tangier (Ibn Batouta)
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=1200', // Stadium vibe
        'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800',     // Crowd
        'https://images.unsplash.com/photo-1584350702766-3b95eb9c0496?q=80&w=800',   // Tangier City
        'https://images.unsplash.com/photo-1522778119026-d647f0565c6a?q=80&w=800'    // Modern architecture
      ],
      title: 'ملعب طنجة الكبير',
      location: 'طنجة (القرية الرياضية)',
      coordinates: { lat: 35.7408, lng: -5.8322 },
      difficulty: 'جاهز 2025',
      difficultyClass: 'bg-indigo-100 text-indigo-800',
      description: 'جوهرة الشمال. تمت توسعته وإزالة المضمار ليصبح من أجمل ملاعب المتوسط بطاقة استيعابية 75,000 متفرج. يطل على مضيق جبل طارق ويتميز بتصميم عالمي.',
      transport: { bus: 'محطة القطار TGV', taxi: 'متوفر (Careem/Taxi)' },
      stats: { gain: '75,000 مقعد' },
      hotels: [
        { name: 'Hilton Tangier City', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', rating: '4.8' },
        { name: 'Royal Tulip', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400', rating: '4.7' }
      ],
      restaurants: [
        { name: 'El Morocco Club', type: 'مغربي عصري' },
        { name: 'Café Hafa', type: 'شاي وإطلالة' }
      ]
    },
    {
      id: 2,
      // Casablanca (Mohammed V) - Or the New Stadium concept (Using Mohammed V for now as it's iconic)
      image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1200', // Generic big stadium atmosphere
      gallery: [
        'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1200',
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800', // Sports
        'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=800', // Casablanca Hassan II
        'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800'  // Crowd
      ],
      title: 'مركب محمد الخامس',
      location: 'الدار البيضاء (المعارف)',
      coordinates: { lat: 33.5826, lng: -7.6473 },
      difficulty: 'أسطوري',
      difficultyClass: 'bg-purple-100 text-purple-800',
      description: 'معقل "الرجا والوداد". يخضع لتحديث شامل لاستضافة الكان. الملعب الذي يهتز بأفضل الجماهير في العالم، يقع في قلب الدار البيضاء.',
      transport: { bus: 'ترامواي (محطة المركب)', taxi: 'متوفر (Taxi Rouge)' },
      stats: { gain: '45,000+ مقعد' },
      hotels: [
        { name: 'Hyatt Regency', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400', rating: '4.6' },
        { name: 'Onomo City Center', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400', rating: '4.3' }
      ],
      restaurants: [
        { name: 'Rick’s Café', type: 'تاريخي/دولي' },
        { name: 'La Sqala', type: 'فطور مغربي' }
      ]
    },
    {
      id: 3,
      // Marrakech (Grand Stade)
      image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1200', // Red tones
      gallery: [
        'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1200',
        'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=800', // Marrakech vibe
        'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?q=80&w=800', // Stadium lights
        'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=800'  // Architecture
      ],
      title: 'ملعب مراكش الكبير',
      location: 'مراكش (طريق البيضاء)',
      coordinates: { lat: 31.7056, lng: -7.9806 },
      difficulty: 'عالمي',
      difficultyClass: 'bg-pink-100 text-pink-800',
      description: 'تحفة معمارية مستوحاة من الأسوار المراكشية. يقع بالقرب من منطقة النخيل، ويوفر تجربة فرجة عالمية مع خلفية جبال الأطلس.',
      transport: { bus: 'حافلات ألزا (ALSA)', taxi: 'Taxi Vert' },
      stats: { gain: '45,000 مقعد' },
      hotels: [
        { name: 'Palmeraie Rotana', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', rating: '4.7' },
        { name: 'Radisson Blu', image: 'https://images.unsplash.com/photo-1571896349842-6e5c48dc52e3?w=400', rating: '4.5' }
      ],
      restaurants: [
        { name: 'Comptoir Darna', type: 'عشاء وعرض' },
        { name: 'Al Fassia', type: 'مطبخ تقليدي' }
      ]
    }
  ];

  // 2. LOGIC
  const [selectedStadium, setSelectedStadium] = useState(null);
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
        stadiumsData.forEach(item => {
          newDistances[item.id] = calculateDistance(userLoc, item.coordinates);
        });
        setDistances(newDistances);
      });
    }

    // B. Fetch Weather
    stadiumsData.forEach(item => {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${item.coordinates.lat}&longitude=${item.coordinates.lng}&current_weather=true`)
        .then(res => res.json())
        .then(data => {
          setWeathers(prev => ({ ...prev, [item.id]: data.current_weather?.temperature }));
        })
        .catch(err => console.log(err));
    });
  }, []);

  // Helper: Haversine
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
    
    // Add 20% for highways
    const driveDist = Math.round(distKm * 1.2);
    const hours = Math.floor(driveDist / 90); // Highway speed
    const mins = Math.round(((driveDist / 90) - hours) * 60);

    return {
      km: driveDist,
      time: hours > 0 ? `${hours}س ${mins}د` : `${mins} دقيقة`
    };
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-12" dir="rtl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-r-4 border-indigo-500 pr-4">
        <div>
           <h3 className="text-3xl font-extrabold text-indigo-950 flex items-center gap-3">
             <span className="bg-indigo-100 text-indigo-600 p-2 rounded-xl"><Trophy className="w-8 h-8" /></span>
             ملاعب كان 2025
           </h3>
           <p className="text-gray-500 mt-2 text-sm max-w-xl">تعرف على الملاعب العالمية التي ستستضيف كأس الأمم الأفريقية بالمغرب.</p>
        </div>
        
        {!userLocation ? (
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs text-gray-500 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
            <Loader2 className="w-3 h-3 animate-spin text-indigo-600" />
            تحديد المسافة للملعب...
          </div>
        ) : (
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs text-indigo-700 font-bold bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-200">
            <Navigation className="w-3 h-3" />
            المسافة دقيقة عبر الطريق السيار
          </div>
        )}
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stadiumsData.map((item) => (
          <div 
            key={item.id}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
            onClick={() => setSelectedStadium(item)}
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
                <CloudSun className="w-4 h-4 text-indigo-200" />
                <span className="font-bold text-sm text-white">
                  {weathers[item.id] ? `${weathers[item.id]}°` : '--'}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 text-white z-10">
                <h4 className="text-2xl font-bold mb-1 shadow-black drop-shadow-md">{item.title}</h4>
                <div className="flex items-center gap-1 text-sm font-medium opacity-90">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  {item.location}
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6 flex flex-col flex-grow">
              
              {/* Distance & Time Box */}
              <div className="flex items-center justify-between mb-4 bg-indigo-50/50 p-3 rounded-2xl border border-indigo-100">
                 <div className="flex flex-col">
                    <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider">المسافة</span>
                    <span className="text-gray-800 font-bold text-lg">
                      {distances[item.id] ? `${distances[item.id].km} km` : '...'}
                    </span>
                 </div>
                 <div className="h-8 w-px bg-indigo-200"></div>
                 <div className="flex flex-col items-end">
                    <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider">الوصول</span>
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
                   <Users className="w-3 h-3" />
                   {item.stats.gain}
                </div>
              </div>

              <button className="w-full mt-auto  bg-[#C1272D] hover:bg-[#a01f24] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2roup-hover:bg-indigo-700 transition-colors shadow-lg shadow-gray-200">
                <Navigation className="w-4 h-4" />
                تصفح الملعب
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Integration */}
      <TrailModal 
        trail={selectedStadium} 
        isOpen={!!selectedStadium} 
        onClose={() => setSelectedStadium(null)}
        userLocation={userLocation}
        calculatedDistance={selectedStadium ? distances[selectedStadium.id] : null}
      />
    </div>
  );
};

export default MoroccanStadiums;