'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowUpRight, Clock, Mountain, TrendingUp, BusFront, Car, Sun } from 'lucide-react';

const desertsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'صحراء مرزوكة',
    location: 'إقليم الراشيدية، جهة درعة تافيلالت (6 ساعات من مراكش)',
    difficulty: 'سهل إلى متوسط',
    difficultyClass: 'bg-orange-100 text-orange-800',
    difficultyColor: 'bg-orange-500',
    reservation: 'يحتاج حجز',
    reservationColor: 'bg-orange-100 text-orange-800',
    stats: {
      distance: 'جولة متعددة الأيام',
      duration: '2-3 أيام',
      time: '2-3 أيام',
      altitude: '800m',
      elevation: '800m',
      gain: '150m↑',
    },
    description: 'أشهر الكثبان الرملية في المغرب بارتفاع يصل إلى 150 متر. تجربة فريدة للتخييم تحت النجوم، ركوب الجمال، والاستمتاع بجمال الصحراء المطلقة. من أفضل الأماكن لمشاهدة شروق وغروب الشمس مع إطلالات بانورامية مذهلة.',
    transport: {
      bus: 'حافلة CTM من مراكش إلى الراشيدية + سيارة 4x4 محلية (6-7 ساعات)',
      taxi: 'سيارة خاصة مع سائق (5-6 ساعات)',
    },
    busRoute: 'حافلة CTM من مراكش إلى الراشيدية + سيارة 4x4 محلية (6-7 ساعات)',
    taxiInfo: 'سيارة خاصة مع سائق (5-6 ساعات)',
    accessType: 'transport',
    reservationLink: 'https://example.com/merzouga-tours',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'صحراء الشيبة',
    location: 'إقليم زاكورة، جهة درعة تافيلالت (5 ساعات من ورزازات)',
    difficulty: 'متوسط',
    difficultyClass: 'bg-yellow-100 text-yellow-800',
    difficultyColor: 'bg-yellow-500',
    reservation: 'يحتاج دليل',
    reservationColor: 'bg-yellow-100 text-yellow-800',
    stats: {
      distance: 'جولة متعددة الأيام',
      duration: '3 أيام',
      time: '3 أيام',
      altitude: '700m',
      elevation: '700m',
      gain: '120m↑',
    },
    description: 'كثبان رملية ذهبية خلابة مع واحات النخيل المحيطة. منطقة أقل ازدحاماً من مرزوكا وتوفر تجربة صحراوية أكثر هدوءاً. مثالية للمشي لمسافات طويلة والتخييم في البرية.',
    transport: {
      bus: 'حافلة من ورزازات إلى زاكورة + نقل محلي (5 ساعات)',
      taxi: 'سيارة دفع رباعي من ورزازات (4 ساعات)',
    },
    busRoute: 'حافلة من ورزازات إلى زاكورة + نقل محلي (5 ساعات)',
    taxiInfo: 'سيارة دفع رباعي من ورزازات (4 ساعات)',
    accessType: 'transport',
    reservationLink: 'https://example.com/chegaga-tours',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'واحة فكيك',
    location: 'جهة الشرق، فكيك (7 ساعات من وجدة)',
    difficulty: 'سهل',
    difficultyClass: 'bg-green-100 text-green-800',
    difficultyColor: 'bg-green-500',
    reservation: 'دليل مستحسن',
    reservationColor: 'bg-green-100 text-green-800',
    stats: {
      distance: 'مسارات متعددة',
      duration: '1-2 أيام',
      time: '1-2 أيام',
      altitude: '1000m',
      elevation: '1000m',
      gain: '50m↑',
    },
    description: 'واحة صحراوية خصبة تشتهر ببساتين النخيل والينابيع الطبيعية. توفر تجربة فريدة تجمع بين جمال الصحراء وخصوبة الواحات. مثالية للمشي عبر القصور القديمة والاستمتاع بالثقافة المحلية.',
    transport: {
      bus: 'حافلة من وجدة إلى فكيك (7 ساعات)',
      taxi: 'سيارة خاصة (6 ساعات)',
    },
    busRoute: 'حافلة من وجدة إلى فكيك (7 ساعات)',
    taxiInfo: 'سيارة خاصة (6 ساعات)',
    accessType: 'transport',
  }
];

const MoroccanDeserts = ({ onTrailSelect }) => {
  const handleDesertClick = (desert) => {
    if (onTrailSelect) {
      onTrailSelect(desert);
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-amber-800 mb-4 border-l-4 border-amber-600 pl-3 flex items-center gap-2">
        <Sun className="w-6 h-6" />
        الرحلات الصحراوية في المغرب
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {desertsData.map((desert) => (
          <div 
            key={desert.id}
            className="rounded-lg border bg-white text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full"
            onClick={() => handleDesertClick(desert)}
          >
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <Image
                src={desert.image}
                alt={desert.title}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-white text-gray-800 backdrop-blur-sm bg-opacity-90">
                  {desert.reservation}
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1">
                <div className="text-amber-600">
                  <BusFront className="w-4 h-4" />
                </div>
                <div className="text-amber-600">
                  <Car className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="tracking-tight text-xl font-semibold text-gray-900">{desert.title}</h4>
                  <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    {desert.location}
                  </p>
                </div>
                <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${desert.difficultyClass}`}>
                  {desert.difficulty}
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex-grow flex flex-col">
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-amber-600" />
                    <span className="text-base font-semibold text-gray-900">{desert.stats.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0 text-amber-600" />
                    <span className="text-base font-semibold text-gray-900">{desert.stats.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 flex-shrink-0 text-amber-600" />
                    <span className="text-base font-semibold text-gray-900">{desert.stats.altitude}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 flex-shrink-0 text-amber-600" />
                    <span className="text-base font-semibold text-gray-900">{desert.stats.gain}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">{desert.description}</p>
              <div className="mt-auto">
                <h5 className="text-sm font-semibold mb-2 text-gray-900">كيفية الوصول</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <BusFront className="w-4 h-4 flex-shrink-0 text-amber-600" />
                    </div>
                    <p className="text-gray-600">{desert.transport.bus}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <Car className="w-4 h-4 flex-shrink-0 text-amber-600" />
                    </div>
                    <p className="text-gray-600">{desert.transport.taxi}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoroccanDeserts;