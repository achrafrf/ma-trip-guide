'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { MapPin, Navigation, Waves, CloudSun, Binoculars } from 'lucide-react';

export const seaData = [
  {
    id: 1,
    image: 'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/6260da8bca94c.jpeg', 
    gallery: [
       'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/6260da8bca94c.jpeg',
       'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/33/27/legzira-beach.jpg?w=1200&h=-1&s=1',
       'https://www.moroccoworldnews.com/wp-content/uploads/2018/08/Legzira-Beach-Sidi-Ifni-Morocco.jpg',
       'https://i.pinimg.com/originals/e8/34/09/e834091f093121545805527653654402.jpg'
    ],
    title: 'شاطئ الكزيرة',
    location: 'سيدي إفني',
    coordinates: { lat: 29.4455, lng: -10.1136 },
    difficulty: 'طبيعة',
    difficultyClass: 'bg-orange-100 text-orange-800',
    description: 'يُعتبر شاطئ الكزيرة من أجمل الشواطئ في العالم، ويشتهر بأقواسه الصخرية الحمراء الضخمة التي نحتتها أمواج المحيط عبر السنين. المكان مثالي لمحبي التصوير والمشي لمسافات طويلة على الرمال الذهبية.',
    transport: { bus: 'إلى تزنيت ثم طاكسي', taxi: 'متوفر بكثرة' },
    stats: { gain: 'أقواس صخرية' },
    hotels: [
        { name: 'Logis La Marine', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/186532847.jpg?k=3e33967401211756545195039210967414815457183617154567154', rating: '4.5' },
        { name: 'Hotel Beach Club', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/486532847.jpg?k=3e33967401211756545195039210967414815457183617154567154', rating: '4.2' }
    ],
    restaurants: [
        { name: 'Restaurant Legzira', type: 'سمك طازج' },
        { name: 'Chez Mbarek', type: 'طاجين الحوت' }
    ]
  },
  {
    id: 2,
    image: 'https://cloudfront-eu-central-1.images.arcpublishing.com/le360/W5WSNMMEEZDJXOL6LR5QDK6DGE.jfif',
    gallery: [
        'https://cloudfront-eu-central-1.images.arcpublishing.com/le360/W5WSNMMEEZDJXOL6LR5QDK6DGE.jfif',
        'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider_large/public/thumbnails/image/plage-quemado-al-hoceima-maroc.jpg',
        'https://mapio.net/images-p/31034509.jpg',
        'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=10156898402453634'
    ],
    title: 'شاطئ كيمادو',
    location: 'الحسيمة',
    coordinates: { lat: 35.2447, lng: -3.9314 },
    difficulty: 'سباحة',
    difficultyClass: 'bg-blue-100 text-blue-800',
    description: 'جوهرة البحر الأبيض المتوسط. يتميز شاطئ كيمادو بمياهه الفيروزية الهادئة ورماله الناعمة، ويقع مباشرة تحت جرف صخري يعطيه منظراً بانورامياً خلاباً. مثالي للعائلات والسباحة.',
    transport: { bus: 'محطة الحسيمة', taxi: 'Petit Taxi' },
    stats: { gain: 'مياه هادئة' },
    hotels: [
        { name: 'Mercure Quemado Resort', image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/49842563.jpg?k=23f954784564564123156489456123', rating: '4.8' },
        { name: 'Hotel La Perle', image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/12345678.jpg?k=23f954784564564123156489456123', rating: '4.0' }
    ],
    restaurants: [
        { name: 'Espace Miramar', type: 'أكل متوسطي' },
        { name: 'Club Nautique', type: 'فواكه البحر' }
    ]
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/30450352/pexels-photo-30450352.jpeg',
    gallery: [
        'https://images.pexels.com/photos/30450352/pexels-photo-30450352.jpeg',
        'https://surfberbere.com/wp-content/uploads/2019/10/Imsouane-Bay-Surf-Berbere.jpg',
        'https://www.moroccotripexcursions.com/wp-content/uploads/2020/01/imsouane-beach-agadir.jpg',
        'https://magicseaweed.com/images/photoLab/178556-XL.jpg'
    ],
    title: 'إمسوان',
    location: 'أكادير',
    coordinates: { lat: 30.8413, lng: -9.8267 },
    difficulty: 'Surfing',
    difficultyClass: 'bg-teal-100 text-teal-800',
    description: 'إمسوان هي قبلة عشاق ركوب الأمواج (Surfing) في العالم. تشتهر بكونها تتوفر على واحدة من أطول الأمواج في إفريقيا (The Bay). الجو هنا هادئ جداً ومناسب للاسترخاء وأكل السمك المشوي الطازج.',
    transport: { bus: 'من أكادير/الصويرة', taxi: 'Grand Taxi' },
    stats: { gain: 'أطول موجة' },
    hotels: [
        { name: 'Olo Surf Nature', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/123456.jpg', rating: '4.7' },
        { name: 'Imsouane Surf House', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/654321.jpg', rating: '4.3' }
    ],
    restaurants: [
        { name: 'Chez Jolo', type: 'سردين مشوي' },
        { name: 'O Happy Bay', type: 'بيتزا / سمك' }
    ]
  },
  {
    id: 4,
    image: 'https://desert-maroc.com/wordpress2012/wp-content/uploads/dakhla-plage-porto-rico.jpg',
    gallery: [
        'https://desert-maroc.com/wordpress2012/wp-content/uploads/dakhla-plage-porto-rico.jpg',
        'https://www.bladi.net/IMG/arton56789.jpg',
        'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider_large/public/thumbnails/image/kitesurf-dakhla.jpg',
        'https://www.dakhla-attitude.ma/wp-content/uploads/2015/09/slider-home-01.jpg'
    ],
    title: 'الداخلة',
    location: 'الداخلة',
    coordinates: { lat: 23.9042, lng: -15.7483 },
    difficulty: 'Kitesurf',
    difficultyClass: 'bg-purple-100 text-purple-800',
    description: 'الداخلة هي الجوهرة الخفية في الجنوب المغربي، حيث يلتقي البحر بالصحراء. تُعتبر من أفضل الأماكن في العالم لممارسة الكايت سورف (Kitesurfing) بفضل الرياح المستمرة والمياه الضحلة في اللاغون.',
    transport: { bus: 'CTM / طائرة', taxi: 'متوفر' },
    stats: { gain: 'Kitesurfing' },
    hotels: [
        { name: 'Dakhla Attitude', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/987654.jpg', rating: '4.9' },
        { name: 'Ocean Vagabond', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/456789.jpg', rating: '4.6' }
    ],
    restaurants: [
        { name: 'Talhamar', type: 'محار (Oysters)' },
        { name: 'Villa Dakhla', type: 'مأكولات عالمية' }
    ]
  },
  {
    id: 5,
    image: 'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/1f35df9d082d1534d57d226f6f451f25f573345f0f8107f1de01d617a8dd9bf1.png',
    gallery: [
        'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/1f35df9d082d1534d57d226f6f451f25f573345f0f8107f1de01d617a8dd9bf1.png',
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg',
        'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider_large/public/thumbnails/image/oualidia-lagune.jpg',
        'https://www.madein.city/media/image/event/36881.jpg'
    ],
    title: 'الواليدية',
    location: 'الواليدية',
    coordinates: { lat: 32.7303, lng: -9.0427 },
    difficulty: 'Relax',
    difficultyClass: 'bg-green-100 text-green-800',
    description: 'الواليدية تشتهر ببحيرتها الشاطئية (Lagoon) المفصولة عن المحيط، مما يجعل مياهها آمنة جداً للسباحة وركوب القوارب الصغيرة. المكان مشهور أيضاً بجودة المحار (Les Huîtres) والأسماك.',
    transport: { bus: 'متوفر', taxi: 'Grand Taxi' },
    stats: { gain: 'Lagoon' },
    hotels: [
        { name: 'La Sultana Oualidia', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/112233.jpg', rating: '5.0' },
        { name: 'L’Araignée Gourmande', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/332211.jpg', rating: '4.1' }
    ],
    restaurants: [
        { name: 'L’Ostrea', type: 'محار طازج' },
        { name: 'Le Parc à Huîtres', type: 'غداء بحري' }
    ]
  },
  {
    id: 6,
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwlIi1Ww9ZwgV2ZrOrEK9VpI5CkPSXmHY8sX7d1BRiBfXLoBHUCBjLAWaDWuoGRvjhyjxNPKvnC9U0mrHWNJMyRRkI07_P5e-kTCcONH64lT2uo5ixNmvU25WJLK6U8QFWtCeih=w455-h306-n-k-no',
    gallery: [
        'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwlIi1Ww9ZwgV2ZrOrEK9VpI5CkPSXmHY8sX7d1BRiBfXLoBHUCBjLAWaDWuoGRvjhyjxNPKvnC9U0mrHWNJMyRRkI07_P5e-kTCcONH64lT2uo5ixNmvU25WJLK6U8QFWtCeih=w455-h306-n-k-no',
        'https://www.surferrule.com/wp-content/uploads/2016/01/taghazout-morocco-surf.jpg',
        'https://lp-cms-production.imgix.net/2019-06/b8c6d860df87585b46e8c87071569472-taghazout.jpg',
        'https://www.moroccotripexcursions.com/wp-content/uploads/2020/01/taghazout-village.jpg'
    ],
    title: 'تغازوت',
    location: 'أكادير',
    coordinates: { lat: 30.5447, lng: -9.7093 },
    difficulty: 'Youth',
    difficultyClass: 'bg-yellow-100 text-yellow-800',
    description: 'تغازوت هي الوجهة المفضلة للشباب وعشاق "البوهيميان لايف ستايل". كانت قرية صيادين بسيطة وتحولت اليوم لمركز عالمي لمدارس السورف، اليوغا، والمقاهي العصرية المطلة على البحر.',
    transport: { bus: 'Alsa Bus', taxi: 'متوفر' },
    stats: { gain: 'Yoga/Surf' },
    hotels: [
        { name: 'Fairmont Taghazout Bay', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/778899.jpg', rating: '5.0' },
        { name: 'Amouage by Surf Maroc', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/998877.jpg', rating: '4.6' }
    ],
    restaurants: [
        { name: 'World of Waves', type: 'فطور صحي' },
        { name: 'L’Auberge', type: 'طاجين مع منظر' }
    ]
  }
];

const MoroccanSea = () => {
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

  const calculateDistance = (start, end) => {
    const R = 6371; 
    const dLat = (end.lat - start.lat) * Math.PI / 180;
    const dLon = (end.lng - start.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(start.lat * Math.PI / 180) * Math.cos(end.lat * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distKm = Math.round(R * c); 
    const driveDist = Math.round(distKm * 1.3);
    const hours = Math.floor(driveDist / 70);
    const mins = Math.round(((driveDist / 70) - hours) * 60);

    return { km: driveDist, time: hours > 0 ? `${hours}س ${mins}د` : `${mins} دقيقة` };
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-12" dir="rtl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-r-4 border-cyan-500 pr-4">
        <div>
           <h3 className="text-3xl font-extrabold text-cyan-950 flex items-center gap-3">
             <span className="bg-cyan-100 text-cyan-600 p-2 rounded-xl"><Waves className="w-8 h-8" /></span>
             الشواطئ والسواحل
           </h3>
           <p className="text-gray-500 mt-2 text-sm max-w-xl">استمتع بأجمل الشواطئ، الأمواج، والمناظر البحرية الخلابة في المغرب.</p>
        </div>
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {seaData.map((item) => (
          <Link 
            key={item.id} 
            href={`/details?type=sea&id=${item.id}`} 
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1 block"
          >
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm z-10">
                <CloudSun className="w-4 h-4 text-cyan-200" />
                <span className="font-bold text-sm text-white">
                  {weathers[item.id] ? `${weathers[item.id]}°` : '--'}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 text-white z-10">
                <h4 className="text-2xl font-bold mb-1 shadow-black drop-shadow-md">{item.title}</h4>
                <div className="flex items-center gap-1 text-sm font-medium opacity-90">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  {item.location}
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6 flex flex-col flex-grow">
              
              {/* Distance Box */}
              <div className="flex items-center justify-between mb-4 bg-cyan-50/50 p-3 rounded-2xl border border-cyan-100">
                 <div className="flex flex-col">
                    <span className="text-[10px] text-cyan-600 font-bold uppercase tracking-wider">المسافة</span>
                    <span className="text-gray-800 font-bold text-lg">{distances[item.id] ? `${distances[item.id].km} km` : '...'}</span>
                 </div>
                 <div className="h-8 w-px bg-cyan-200"></div>
                 <div className="flex flex-col items-end">
                    <span className="text-[10px] text-cyan-600 font-bold uppercase tracking-wider">الوصول</span>
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

export default MoroccanSea;