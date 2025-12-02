'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Navigation, Car, CloudSun, Loader2, Waves, TrendingUp } from 'lucide-react';
import TrailModal from '../ui/trail-modal';

const MoroccanSea = () => {
  // 1. DATA (High Quality - GetYourGuide Style)
  const seaData = [
    {
      id: 1,
      // Legzira
      image: 'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/6260da8bca94c.jpeg', 
      gallery: [
        'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/6260da8bca94c.jpeg', // Main
        'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=265,height=195,dpr=2/tour_img/6260da8acdf26.jpeg',   // Top Right
        'https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/6260da8ba905b.jpeg',   // Bottom Right
        'https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/6260da8c6ff01.jpeg'     // Extra
      ],
      title: 'شاطئ الكزيرة',
      location: 'سيدي إفني',
      coordinates: { lat: 29.4455, lng: -10.1136 },
      difficulty: 'طبيعة',
      difficultyClass: 'bg-orange-100 text-orange-800',
      description: 'من بين أجمل 40 شاطئ فالعالم. الأقواس الحمراء والغروب تما شي حاجة خيالية.',
      transport: { bus: 'متوفر', taxi: 'متوفر' },
      stats: { gain: 'أقواس صخرية' },
      hotels: [
        { name: 'Logis La Marine', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', rating: '4.5' },
        { name: 'Kasbah Legzira', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', rating: '4.2' }
      ],
      restaurants: [
        { name: 'Legzira Beach Resto', type: 'سمك طازج' },
        { name: 'Café Des Amis', type: 'طاجين' }
      ]
    },
    {
      id: 2,
      // Quemado (Al Hoceima)
      image: 'https://cloudfront-eu-central-1.images.arcpublishing.com/le360/W5WSNMMEEZDJXOL6LR5QDK6DGE.jfif',
      gallery: [
        'https://cloudfront-eu-central-1.images.arcpublishing.com/le360/W5WSNMMEEZDJXOL6LR5QDK6DGE.jfif',
        'https://cloudfront-eu-central-1.images.arcpublishing.com/le360/RPCMB3STUVG2NN6ZQOUSVP5ECQ.jpg',
        'https://cloudfront-eu-central-1.images.arcpublishing.com/le360/SUFU3HCBNRH6BAHQQQIB6UWOPY.jpg',
        'https://cloudfront-eu-central-1.images.arcpublishing.com/le360/SUFU3HCBNRH6BAHQQQIB6UWOPY.jpg'
      ],
      title: 'شاطئ كيمادو',
      location: 'الحسيمة',
      coordinates: { lat: 35.2447, lng: -3.9314 },
      difficulty: 'سباحة',
      difficultyClass: 'bg-blue-100 text-blue-800',
      description: 'جوهرة المتوسط. مياه كريستالية هادئة تحت الجبل، مثالية للعائلات والسباحة.',
      transport: { bus: 'قريب', taxi: 'متوفر' },
      stats: { gain: 'مياه هادئة' },
      hotels: [
        { name: 'Mercure Quemado', image: 'https://images.unsplash.com/photo-1571896349842-6e5c48dc52e3?w=400', rating: '4.8' },
        { name: 'Radisson Blu', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400', rating: '4.7' }
      ],
      restaurants: [
        { name: 'Espace Miramar', type: 'أكل عالمي' },
        { name: 'Club Nautique', type: 'فواكه البحر' }
      ]
    },
    {
      id: 3,
      // Imsouane
      image: 'https://images.pexels.com/photos/30450352/pexels-photo-30450352.jpeg',
      gallery: [
        'https://images.pexels.com/photos/30450352/pexels-photo-30450352.jpeg',
        'https://images.pexels.com/photos/13369662/pexels-photo-13369662.jpeg',
        'https://images.pexels.com/photos/17539758/pexels-photo-17539758.jpeg',
        'https://images.pexels.com/photos/17539760/pexels-photo-17539760.jpeg'
      ],
      title: 'إمسوان',
      location: 'أكادير',
      coordinates: { lat: 30.8413, lng: -9.8267 },
      difficulty: 'Surfing',
      difficultyClass: 'bg-teal-100 text-teal-800',
      description: 'جنة السورف. خليج ساحر كيجمع بين الجبل والبحر وأحسن غروب ممكن تشوفو.',
      transport: { bus: 'Shuttle', taxi: 'Grand Taxi' },
      stats: { gain: 'أطول موجة' },
      hotels: [
        { name: 'Olo Surf Nature', image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400', rating: '4.6' },
        { name: 'Auberge Tasra', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400', rating: '4.3' }
      ],
      restaurants: [
        { name: 'Chez Pierre', type: 'سمك مشوي' },
        { name: 'Auberge Restaurant', type: 'بلدي' }
      ]
    },
    {
      id: 4,
      // Dakhla
      image: 'https://desert-maroc.com/wordpress2012/wp-content/uploads/dakhla-plage-porto-rico.jpg',
      gallery: [
        'https://desert-maroc.com/wordpress2012/wp-content/uploads/dakhla-plage-porto-rico.jpg',
        'https://desert-maroc.com/wordpress2012/wp-content/uploads/dakhla-plage-el-moussafir.jpg',
        'https://desert-maroc.com/wordpress2012/wp-content/uploads/dakhla-ile-du-dragon.jpg',
        'https://desert-maroc.com/wordpress2012/wp-content/uploads/dakhla-pk25.jpg'
      ],
      title: 'الداخلة',
      location: 'الداخلة',
      coordinates: { lat: 23.9042, lng: -15.7483 },
      difficulty: 'Kitesurf',
      difficultyClass: 'bg-purple-100 text-purple-800',
      description: 'الصحراء تتلقي بالمحيط. الوجهة العالمية للكايت سورف والراحة النفسية.',
      transport: { bus: 'No', taxi: 'Transfer' },
      stats: { gain: 'Kitesurfing' },
      hotels: [
        { name: 'Dakhla Attitude', image: 'https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e?w=400', rating: '4.9' },
        { name: 'PK25 Hotel', image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=400', rating: '4.7' }
      ],
      restaurants: [
        { name: 'Talhamar', type: 'محار (Oysters)' },
        { name: 'Ntila', type: 'مغربي' }
      ]
    },
    {
      id: 5,
      // Oualidia
      image: 'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/1f35df9d082d1534d57d226f6f451f25f573345f0f8107f1de01d617a8dd9bf1.png',
      gallery: [
        'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/1f35df9d082d1534d57d226f6f451f25f573345f0f8107f1de01d617a8dd9bf1.png',
        'https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/cd59ac3fd9162a57e6a8b87b61e74fed3deb8a3859f59929db840fa1bf48cf9c.png',
        'https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/58fbfcbec94981871eaf1b94e4a7c24f718b8fea245a3df37bf51c1878e618f0.png',
        'https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/ff84fde34637e4abfacbdc00012ed62bb2ce806424b14fe2ade2be7541e0fd28.png'
      ],
      title: 'الواليدية',
      location: 'الواليدية',
      coordinates: { lat: 32.7303, lng: -9.0427 },
      difficulty: 'Relax',
      difficultyClass: 'bg-green-100 text-green-800',
      description: 'البحيرة الساحرة. معروفة بالمحار، والهدوء، وجولات القوارب التقليدية.',
      transport: { bus: 'Bus', taxi: 'Taxi' },
      stats: { gain: 'Lagoon' },
      hotels: [
        { name: 'La Sultana', image: 'https://images.unsplash.com/photo-1560662105-57f8ad6ae2d8?w=400', rating: '5.0' },
        { name: 'Chateau Eden', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400', rating: '4.4' }
      ],
      restaurants: [
        { name: 'L’Araignée Gourmande', type: 'فواكه البحر' },
        { name: 'Ostrea', type: 'محار' }
      ]
    },
    {
      id: 6,
      // Taghazout
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwlIi1Ww9ZwgV2ZrOrEK9VpI5CkPSXmHY8sX7d1BRiBfXLoBHUCBjLAWaDWuoGRvjhyjxNPKvnC9U0mrHWNJMyRRkI07_P5e-kTCcONH64lT2uo5ixNmvU25WJLK6U8QFWtCeih=w455-h306-n-k-no',
      gallery: [
        'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwlIi1Ww9ZwgV2ZrOrEK9VpI5CkPSXmHY8sX7d1BRiBfXLoBHUCBjLAWaDWuoGRvjhyjxNPKvnC9U0mrHWNJMyRRkI07_P5e-kTCcONH64lT2uo5ixNmvU25WJLK6U8QFWtCeih=w455-h306-n-k-no',
        'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyzbuuTqa7CGaefjdhmMfl288erzNJ1Xztm9uC9EId-HPClqCfpy00LdAUI-RKHS7543omEtHt0vlz2aV2mAs5OgbuTFYAMyUUeN2zkqqzEOYc19YKq2gk7zFgW7x1rvcUrHfCX=s1360-w1360-h1020-rw',
        'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyi7fM-Gv9JqBI7TBP5IcMCDFR7SEyVoaCcqyxDln3smHgnpqNphQoomXVJpRdSP9N9JHNYO8Lk_c3OVUpnFIOZwsd4WgNBA037YwiYyUZPhlY5z8DGh-4tz8jK2q5pmEf-1fymCw=s1360-w1360-h1020-rw',
        'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxTuYppSsicpYLEVsLmAcSQaTSCo-RdGuDzzNrFNsrV8g90XkxLvUoU0uEWF0qWhPgSdxh3a3e8cxeBNM6hQ0PrtAQgH0Z_OUH3cLNMjHQGq-WdUrOOvTNv54iwu9-soizfmuVVAA=s1360-w1360-h1020-rw'
      ],
      title: 'تغازوت',
      location: 'أكادير',
      coordinates: { lat: 30.5447, lng: -9.7093 },
      difficulty: 'Youth',
      difficultyClass: 'bg-yellow-100 text-yellow-800',
      description: 'فايبز عالمية. يوغا، سورف، مقاهي زوينة، وأجواء شبابية بامتياز.',
      transport: { bus: 'Bus 32', taxi: 'Taxi' },
      stats: { gain: 'Yoga/Surf' },
      hotels: [
        { name: 'Fairmont Taghazout', image: 'https://images.unsplash.com/photo-1551918120-9739cb7471c7?w=400', rating: '4.9' },
        { name: 'Amouage', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400', rating: '4.6' }
      ],
      restaurants: [
        { name: 'World of Waves', type: 'Healthy' },
        { name: 'L’Auberge', type: 'مغربي' }
      ]
    }
  ];

  // 2. STATES & HOOKS
  const [selectedTrail, setSelectedTrail] = useState(null);
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
        seaData.forEach(item => {
          newDistances[item.id] = calculateDistance(userLoc, item.coordinates);
        });
        setDistances(newDistances);
      });
    }

    // B. Fetch Weather
    seaData.forEach(item => {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${item.coordinates.lat}&longitude=${item.coordinates.lng}&current_weather=true`)
        .then(res => res.json())
        .then(data => {
          setWeathers(prev => ({ ...prev, [item.id]: data.current_weather?.temperature }));
        })
        .catch(err => console.log(err));
    });
  }, []);

  // Helper Function: Haversine Formula
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
    
    const driveDist = Math.round(distKm * 1.3);
    const hours = Math.floor(driveDist / 70);
    const mins = Math.round(((driveDist / 70) - hours) * 60);

    return {
      km: driveDist,
      time: hours > 0 ? `${hours}س ${mins}د` : `${mins} دقيقة`
    };
  };

  return (
    <div className="container mx-auto px-4 py-12" dir="rtl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b pb-4 gap-4">
        <h3 className="text-3xl font-extrabold text-blue-950 flex items-center gap-3">
          <span className="bg-blue-600 text-white p-2 rounded-lg"><Waves className="w-6 h-6" /></span>
          وجهاتك الساحلية
        </h3>
        {!userLocation ? (
          <div className="flex items-center gap-2 text-sm text-gray-500 animate-pulse bg-gray-50 px-4 py-2 rounded-full border">
            <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
            كنقلبو على موقعك باش نحسبو الطريق...
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm text-green-600 font-bold bg-green-50 px-4 py-2 rounded-full border border-green-100">
            <Navigation className="w-4 h-4" />
            تم تحديد موقعك بنجاح
          </div>
        )}
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {seaData.map((item) => (
          <div 
            key={item.id}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
            onClick={() => setSelectedTrail(item)}
          >
            {/* Image Section - Main Image */}
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
              
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-sm z-10">
                <CloudSun className="w-4 h-4 text-white" />
                <span className="font-bold text-sm text-white">
                  {weathers[item.id] ? `${weathers[item.id]}°` : '--'}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 text-white z-10">
                <h4 className="text-3xl font-bold mb-1 drop-shadow-lg tracking-tight">{item.title}</h4>
                <div className="flex items-center gap-1 text-sm font-medium opacity-90">
                  <MapPin className="w-4 h-4 text-blue-300" />
                  {item.location}
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6 flex flex-col flex-grow">
              
              <div className="flex items-center justify-between mb-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                 <div className="flex flex-col">
                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">المسافة</span>
                    <span className="text-gray-900 font-extrabold text-lg">
                      {distances[item.id] ? `${distances[item.id].km} km` : '...'}
                    </span>
                 </div>
                 <div className="h-8 w-px bg-gray-200"></div>
                 <div className="flex flex-col items-end">
                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">الزمن</span>
                    <span className="text-gray-900 font-extrabold text-lg">
                      {distances[item.id] ? distances[item.id].time : '...'}
                    </span>
                 </div>
              </div>

              <div className="flex gap-2 mb-6 flex-wrap">
                <span className={`px-3 py-1.5 rounded-xl text-xs font-bold ${item.difficultyClass}`}>
                  {item.difficulty}
                </span>
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-gray-100 text-gray-600 border border-gray-200">
                   <TrendingUp className="w-3 h-3" />
                   {item.stats.gain}
                </div>
              </div>

              <button className="w-full mt-auto font-bold bg-[#C1272D] hover:bg-[#a01f24] text-white py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95">
                <Navigation className="w-4 h-4" />
                عرض الصور والتفاصيل
              </button>
            </div>
          </div>
        ))}
      </div>

      <TrailModal 
        trail={selectedTrail} 
        isOpen={!!selectedTrail} 
        onClose={() => setSelectedTrail(null)}
        userLocation={userLocation}
        calculatedDistance={selectedTrail ? distances[selectedTrail.id] : null}
      />
    </div>
  );
};

export default MoroccanSea;