'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Navigation, Mountain, CloudSun, Loader2, TrendingUp, Tent } from 'lucide-react';
import TrailModal from '../ui/trail-modal';

const MoroccanMountains = () => {
  // 1. DATA (High Peaks)
  const mountainsData = [
    {
      id: 1,
      // Toubkal
      image: 'https://images.unsplash.com/photo-1605537964076-3cb0ea2e3522?q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1605537964076-3cb0ea2e3522?q=80&w=1200', // Snowy peak
        'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800',   // Trekking
        'https://images.unsplash.com/photo-1549487959-1974d6c63749?q=80&w=800',     // View
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800'    // Summit
      ],
      title: 'قمة توبقال',
      location: 'إمليل (الحوز)',
      coordinates: { lat: 31.0619, lng: -7.9161 },
      difficulty: 'صعب (4167m)',
      difficultyClass: 'bg-stone-100 text-stone-800',
      description: 'سقف شمال إفريقيا وأعلى قمة في العالم العربي. رحلة الصعود تتطلب يومين وتوفر مشهداً بانورامياً خيالياً. في الشتاء تكسوه الثلوج وفي الصيف يتميز بجوه البارد.',
      transport: { bus: 'طاكسي كبير من مراكش', taxi: 'إلى قرية إمليل' },
      stats: { gain: '4167 متر' },
      hotels: [
        { name: 'Refuge du Toubkal', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400', rating: '4.5' },
        { name: 'Kasbah du Toubkal', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', rating: '4.8' }
      ],
      restaurants: [
        { name: 'Imlil Authentique', type: 'أكل جبلي' },
        { name: 'Café Soleil', type: 'شاي بالأعشاب' }
      ]
    },
    {
      id: 2,
      // M'Goun
      image: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=1200',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
        'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800',
        'https://images.unsplash.com/photo-1534008779603-524d73280540?q=80&w=800'
      ],
      title: 'قمة مكون',
      location: 'قلعة مكونة / أزيلال',
      coordinates: { lat: 31.5126, lng: -6.4468 },
      difficulty: 'تحدي (4071m)',
      difficultyClass: 'bg-zinc-100 text-zinc-800',
      description: 'ثاني أعلى قمة. تتميز بمسار "التيغرمت" الطويل والجميل جداً. المنطقة معروفة بوادي آيت بوكماز (الهضبة السعيدة) وكرم سكانها الأمازيغ.',
      transport: { bus: 'إلى أزيلال/تابانت', taxi: 'نقل مزدوج' },
      stats: { gain: '4071 متر' },
      hotels: [
        { name: 'Gîte Flilou', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', rating: '4.6' },
        { name: 'Kasbah Ait Bouguemez', image: 'https://images.unsplash.com/photo-1571896349842-6e5c48dc52e3?w=400', rating: '4.4' }
      ],
      restaurants: [
        { name: 'Dar Itrane', type: 'طبخ محلي' },
        { name: 'Gîte Tawada', type: 'كسكس' }
      ]
    },
    {
      id: 3,
      // Jbel Moussa (The North)
      image: 'https://images.unsplash.com/photo-1596489886364-79366e40d829?q=80&w=1200', // Using a view that looks like Belyounech
      gallery: [
        'https://images.unsplash.com/photo-1596489886364-79366e40d829?q=80&w=1200',
        'https://images.unsplash.com/photo-1534234828563-026c91a34e0c?q=80&w=800',
        'https://images.unsplash.com/photo-1629837934789-f53835f8e653?q=80&w=800',
        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800'
      ],
      title: 'جبل موسى',
      location: 'بليونيش (شمال المملكة)',
      coordinates: { lat: 35.8988, lng: -5.4126 },
      difficulty: 'متوسط (851m)',
      difficultyClass: 'bg-slate-100 text-slate-800',
      description: 'المرأة النائمة. يطل مباشرة على مضيق جبل طارق وإسبانيا. يجمع بين زرقة البحر وخضرة الجبل. تجربة هايكينغ فريدة في شمال المغرب.',
      transport: { bus: 'إلى الفنيدق', taxi: 'طاكسي لبليونيش' },
      stats: { gain: 'إطلالة بحرية' },
      hotels: [
        { name: 'Belyounech Resort', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400', rating: '4.5' },
        { name: 'Marina Smir Hotel', image: 'https://images.unsplash.com/photo-1560662105-57f8ad6ae2d8?w=400', rating: '4.7' }
      ],
      restaurants: [
        { name: 'Chiringuito Belyounech', type: 'سردين مشوي' },
        { name: 'Café Detroit', type: 'منظر بانورامي' }
      ]
    }
  ];

  // 2. LOGIC
  const [selectedMountain, setSelectedMountain] = useState(null);
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
        mountainsData.forEach(item => {
          newDistances[item.id] = calculateDistance(userLoc, item.coordinates);
        });
        setDistances(newDistances);
      });
    }

    // B. Fetch Weather
    mountainsData.forEach(item => {
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
    
    // Mountain roads are slower (+40% dist calculation adjustment, avg speed 60km/h)
    const driveDist = Math.round(distKm * 1.4);
    const hours = Math.floor(driveDist / 60);
    const mins = Math.round(((driveDist / 60) - hours) * 60);

    return {
      km: driveDist,
      time: hours > 0 ? `${hours}س ${mins}د` : `${mins} دقيقة`
    };
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-12" dir="rtl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-r-4 border-stone-500 pr-4">
        <div>
           <h3 className="text-3xl font-extrabold text-stone-800 flex items-center gap-3">
             <span className="bg-stone-200 text-stone-700 p-2 rounded-xl"><Mountain className="w-8 h-8" /></span>
             قمم المغرب الشاهقة
           </h3>
           <p className="text-gray-500 mt-2 text-sm max-w-xl">تحدي المرتفعات واكتشف جمال الأطلس والريف من الأعلى.</p>
        </div>
        
        {!userLocation ? (
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs text-gray-500 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200">
            <Loader2 className="w-3 h-3 animate-spin text-stone-600" />
            جاري تحديد موقعك...
          </div>
        ) : (
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs text-stone-700 font-bold bg-stone-100 px-3 py-1.5 rounded-full border border-stone-300">
            <Navigation className="w-3 h-3" />
            المسافة للطريق الجبلي
          </div>
        )}
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mountainsData.map((item) => (
          <div 
            key={item.id}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-stone-100 flex flex-col h-full transform hover:-translate-y-1"
            onClick={() => setSelectedMountain(item)}
          >
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
              
              {/* Weather Badge */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm z-10">
                <CloudSun className="w-4 h-4 text-stone-100" />
                <span className="font-bold text-sm text-white">
                  {weathers[item.id] ? `${weathers[item.id]}°` : '--'}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 text-white z-10">
                <h4 className="text-2xl font-bold mb-1 shadow-black drop-shadow-md">{item.title}</h4>
                <div className="flex items-center gap-1 text-sm font-medium opacity-90">
                  <MapPin className="w-4 h-4 text-stone-300" />
                  {item.location}
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6 flex flex-col flex-grow">
              
              {/* Distance & Time Box */}
              <div className="flex items-center justify-between mb-4 bg-stone-50 p-3 rounded-2xl border border-stone-200">
                 <div className="flex flex-col">
                    <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">المسافة</span>
                    <span className="text-stone-900 font-bold text-lg">
                      {distances[item.id] ? `${distances[item.id].km} km` : '...'}
                    </span>
                 </div>
                 <div className="h-8 w-px bg-stone-300"></div>
                 <div className="flex flex-col items-end">
                    <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">الوصول</span>
                    <span className="text-stone-900 font-bold text-lg">
                      {distances[item.id] ? distances[item.id].time : '...'}
                    </span>
                 </div>
              </div>

              <div className="flex gap-2 mb-6 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.difficultyClass}`}>
                  {item.difficulty}
                </span>
                <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">
                   <TrendingUp className="w-3 h-3" />
                   {item.stats.gain}
                </div>
              </div>

              <button className="w-full mt-auto bg-[#C1272D] hover:bg-[#a01f24] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-gray-200">
                <Navigation className="w-4 h-4" />
                تفاصيل القمة
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Integration */}
      <TrailModal 
        trail={selectedMountain} 
        isOpen={!!selectedMountain} 
        onClose={() => setSelectedMountain(null)}
        userLocation={userLocation}
        calculatedDistance={selectedMountain ? distances[selectedMountain.id] : null}
      />
    </div>
  );
};

export default MoroccanMountains;