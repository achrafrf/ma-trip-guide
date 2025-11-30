'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowUpRight, Clock, Waves, TrendingUp, BusFront, Car, Anchor } from 'lucide-react';

const seaData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'شاطئ الصويرة',
    location: 'الصويرة (2.5 ساعة من مراكش)',
    difficulty: 'سهل',
    difficultyClass: 'bg-green-100 text-green-800',
    difficultyColor: 'bg-green-500',
    reservation: 'دخول مجاني',
    reservationColor: 'bg-green-100 text-green-800',
    stats: {
      distance: '4.5 كم',
      duration: '1-2 ساعات',
      time: '1-2 ساعات',
      altitude: '0m',
      elevation: '0m',
      gain: '0m↑',
    },
    description: 'شاطئ ممتد بطول 4.5 كم مع رياح مثالية لممارسة رياضات الماء. المدينة العتيقة المصنفة تراث عالمي من قبل اليونسكو تجعل الزيارة تجربة ثقافية وسياحية فريدة.',
    transport: {
      bus: 'حافلة CTM من مراكش إلى الصويرة (2.5 ساعة)',
      taxi: 'سيارة خاصة (2 ساعة)',
    },
    busRoute: 'حافلة CTM من مراكش إلى الصويرة (2.5 ساعة)',
    taxiInfo: 'سيارة خاصة (2 ساعة)',
    accessType: 'transport',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'شاطئ أغادير',
    location: 'أغادير (30 دقيقة من المطار)',
    difficulty: 'سهل',
    difficultyClass: 'bg-green-100 text-green-800',
    difficultyColor: 'bg-green-500',
    reservation: 'دخول مجاني',
    reservationColor: 'bg-green-100 text-green-800',
    stats: {
      distance: '6 كم',
      duration: '2-3 ساعات',
      time: '2-3 ساعات',
      altitude: '0m',
      elevation: '0m',
      gain: '0m↑',
    },
    description: 'أشهر شواطئ المغرب بطول 6 كم، مزود بكل المرافق والخدمات. مثالي للعائلات مع ممارسة الرياضات المائية والاستمتاع بشمس المغرب الدافئة طوال العام.',
    transport: {
      bus: 'حافلة من محطة أغادير إلى الشاطئ (15 دقيقة)',
      taxi: 'سيارة أجرة (10 دقائق)',
    },
    busRoute: 'حافلة من محطة أغادير إلى الشاطئ (15 دقيقة)',
    taxiInfo: 'سيارة أجرة (10 دقائق)',
    accessType: 'transport',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'شاطئ الداخلة',
    location: 'الداخلة (2 ساعة بالطائرة من الدار البيضاء)',
    difficulty: 'سهل',
    difficultyClass: 'bg-green-100 text-green-800',
    difficultyColor: 'bg-green-500',
    reservation: 'دخول مجاني',
    reservationColor: 'bg-green-100 text-green-800',
    stats: {
      distance: '40 كم',
      duration: 'يوم كامل',
      time: 'يوم كامل',
      altitude: '0m',
      elevation: '0m',
      gain: '0m↑',
    },
    description: 'واحد من أفضل الوجهات العالمية لرياضة ركوب الأمواج والرياضات المائية. مياه نقية ورياح مثالية تجعله جنة لمحبي المغامرات المائية في المحيط الأطلسي.',
    transport: {
      bus: 'طائرة من الدار البيضاء إلى الداخلة + نقل محلي',
      taxi: 'سيارة أجرة من المطار (20 دقيقة)',
    },
    busRoute: 'طائرة من الدار البيضاء إلى الداخلة + نقل محلي',
    taxiInfo: 'سيارة أجرة من المطار (20 دقيقة)',
    accessType: 'transport',
  }
];

const MoroccanSea = ({ onTrailSelect }) => {
  const handleSeaClick = (sea) => {
    if (onTrailSelect) {
      onTrailSelect(sea);
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4 border-l-4 border-blue-600 pl-3 flex items-center gap-2">
        <Waves className="w-6 h-6" />
        الشواطئ والمناطق الساحلية
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {seaData.map((sea) => (
          <div 
            key={sea.id}
            className="rounded-lg border bg-white text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full"
            onClick={() => handleSeaClick(sea)}
          >
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <Image
                src={sea.image}
                alt={sea.title}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-white text-gray-800 backdrop-blur-sm bg-opacity-90">
                  {sea.reservation}
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1">
                <div className="text-blue-600">
                  <BusFront className="w-4 h-4" />
                </div>
                <div className="text-blue-600">
                  <Car className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="tracking-tight text-xl font-semibold text-gray-900">{sea.title}</h4>
                  <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    {sea.location}
                  </p>
                </div>
                <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${sea.difficultyClass}`}>
                  {sea.difficulty}
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex-grow flex flex-col">
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-blue-600" />
                    <span className="text-base font-semibold text-gray-900">{sea.stats.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0 text-blue-600" />
                    <span className="text-base font-semibold text-gray-900">{sea.stats.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 flex-shrink-0 text-blue-600" />
                    <span className="text-base font-semibold text-gray-900">ساحلي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 flex-shrink-0 text-blue-600" />
                    <span className="text-base font-semibold text-gray-900">{sea.stats.gain}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">{sea.description}</p>
              <div className="mt-auto">
                <h5 className="text-sm font-semibold mb-2 text-gray-900">كيفية الوصول</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <BusFront className="w-4 h-4 flex-shrink-0 text-blue-600" />
                    </div>
                    <p className="text-gray-600">{sea.transport.bus}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <Car className="w-4 h-4 flex-shrink-0 text-blue-600" />
                    </div>
                    <p className="text-gray-600">{sea.transport.taxi}</p>
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

export default MoroccanSea;