'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { MapPin, Navigation, Trees, CloudSun, Loader2, Binoculars } from 'lucide-react';

// ✅ الداتا مخرجة برا (صحيح)
export const forestsData = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmssN22mgY3BjIzVhYmTMEIcUHEY1lhvhEA&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmssN22mgY3BjIzVhYmTMEIcUHEY1lhvhEA&s',
      'https://www.aljazeera.net/wp-content/uploads/2021/12/9-26.jpg?w=770&resize=770%2C513',
      'https://vid.alarabiya.net/images/2015/01/28/74d8ec08-3827-498c-8346-5ea776cd1c7f/74d8ec08-3827-498c-8346-5ea776cd1c7f_16x9_1200x676.JPG',
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/04/e2/09.jpg'
    ],
    title: 'غابة الأرز (إفران)',
    location: 'الأطلس المتوسط',
    coordinates: { lat: 33.4244, lng: -5.1764 },
    difficulty: 'متوسط',
    difficultyClass: 'bg-emerald-100 text-emerald-800',
    description: 'تلقب بسويسرا المغرب. غابة شجر الأرز المعمرة (Cèdre Gouraud) وموطن قرود المكاك.',
    transport: { bus: 'إلى إفران/أزرو', taxi: 'Grand Taxi متوفر' },
    stats: { gain: 'قرود / ثلوج' },
    hotels: [
      { name: 'Michlifen Resort', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', rating: '5.0' },
      { name: 'Le Palais des Cerisiers', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', rating: '4.6' }
    ],
    restaurants: [
      { name: 'Forest Restaurant', type: 'طاجين بالجوز' },
      { name: 'L’Empreinte', type: 'عالمي' }
    ]
  },
  // ... (باقي العناصر ديالك خليهم كيف ما هوما)
  {
    id: 2,
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwalPWZ-Q4-gK6DsJr_AGtsX8WNeDhHlog-64xwe7UwG1V0d95QKoxShTaiDkXRqaggtbDU1B5zvC-Vx2WVot75Z9OZIRbRZnZTQ9GEl9nbFlEnz7lSuLIz4yOJbc3rqPi7mvzSlw=w455-h306-n-k-no',
    gallery: [],
    title: 'منتزه أقشور',
    location: 'شفشاون',
    coordinates: { lat: 35.2372, lng: -5.1830 },
    difficulty: 'مشي (Hiking)',
    difficultyClass: 'bg-green-100 text-green-800',
    description: 'جنة الشلالات والمياه العذبة.',
    transport: { bus: 'إلى شفشاون', taxi: 'نقل سياحي لأقشور' },
    stats: { gain: 'شلالات' },
    hotels: [],
    restaurants: []
  },
  {
      id: 3,
      image: 'https://i1.hespress.com/wp-content/uploads/2019/07/maamoure_206604609.jpg',
      gallery: [],
      title: 'غابة المعمورة',
      location: 'سلا / القنيطرة',
      coordinates: { lat: 34.0209, lng: -6.7138 },
      difficulty: 'نزهة',
      difficultyClass: 'bg-lime-100 text-lime-800',
      description: 'أكبر غابة بلوط فليني في العالم.',
      transport: { bus: 'طوبيس رقم 2', taxi: 'متوفر' },
      stats: { gain: 'بلوط فليني' },
      hotels: [],
      restaurants: []
  }
];

const MoroccanForests = () => {
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
        forestsData.forEach(item => {
          newDistances[item.id] = calculateDistance(userLoc, item.coordinates);
        });
        setDistances(newDistances);
      });
    }

    // B. Fetch Weather
    forestsData.forEach(item => {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${item.coordinates.lat}&longitude=${item.coordinates.lng}&current_weather=true`)
        .then(res => res.json())
        .then(data => {
          setWeathers(prev => ({ ...prev, [item.id]: data.current_weather?.temperature }));
        })
        .catch(err => console.log(err));
    });
  }, []);

  const calculateDistance = (start, end) => {
    const R = 6371; 
    const dLat = (end.lat - start.lat) * Math.PI / 180;
    const dLon = (end.lng - start.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(start.lat * Math.PI / 180) * Math.cos(end.lat * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distKm = Math.round(R * c); 
    const driveDist = Math.round(distKm * 1.3);
    const hours = Math.floor(driveDist / 65);
    const mins = Math.round(((driveDist / 65) - hours) * 60);

    return { km: driveDist, time: hours > 0 ? `${hours}س ${mins}د` : `${mins} دقيقة` };
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-12" dir="rtl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-r-4 border-emerald-500 pr-4">
        <div>
           <h3 className="text-3xl font-extrabold text-emerald-950 flex items-center gap-3">
             <span className="bg-emerald-100 text-emerald-600 p-2 rounded-xl"><Trees className="w-8 h-8" /></span>
             الغابات والمنتزهات
           </h3>
           <p className="text-gray-500 mt-2 text-sm max-w-xl">استمتع بالهواء النقي، الأشجار المعمرة، والشلالات في أجمل غابات المغرب.</p>
        </div>
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {forestsData.map((item) => (
          // ✅ FIX: Link with KEY, and added 'block'
          <Link 
            key={item.id} 
            href={`/details?type=forest&id=${item.id}`}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1 block"
          >
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm z-10">
                <CloudSun className="w-4 h-4 text-emerald-200" />
                <span className="font-bold text-sm text-white">
                  {weathers[item.id] ? `${weathers[item.id]}°` : '--'}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 text-white z-10">
                <h4 className="text-2xl font-bold mb-1 shadow-black drop-shadow-md">{item.title}</h4>
                <div className="flex items-center gap-1 text-sm font-medium opacity-90">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  {item.location}
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6 flex flex-col flex-grow">
              
              <div className="flex items-center justify-between mb-4 bg-emerald-50/50 p-3 rounded-2xl border border-emerald-100">
                 <div className="flex flex-col">
                    <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">المسافة</span>
                    <span className="text-gray-800 font-bold text-lg">{distances[item.id] ? `${distances[item.id].km} km` : '...'}</span>
                 </div>
                 <div className="h-8 w-px bg-emerald-200"></div>
                 <div className="flex flex-col items-end">
                    <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">الوصول</span>
                    <span className="text-gray-800 font-bold text-lg">{distances[item.id] ? distances[item.id].time : '...'}</span>
                 </div>
              </div>

              <div className="flex gap-2 mb-6 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.difficultyClass}`}>{item.difficulty}</span>
                <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">
                   <Binoculars className="w-3 h-3" />
                   {item.stats.gain}
                </div>
              </div>

              {/* ✅ FIX: بدلنا button بـ div */}
              <div className="w-full mt-auto bg-[#C1272D] hover:bg-[#a01f24] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-gray-200">
                <Navigation className="w-4 h-4" />
                اكتشف المكان
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoroccanForests;