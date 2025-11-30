'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowUpRight, Clock, Users, TrendingUp, BusFront, Car, Trophy } from 'lucide-react';

const stadiumsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'ملعب مراكش',
    location: 'مراكش (15 دقيقة من المدينة القديمة)',
    difficulty: 'زيارة سهلة',
    difficultyClass: 'bg-green-100 text-green-800',
    difficultyColor: 'bg-green-500',
    reservation: 'حجز التذاكر',
    reservationColor: 'bg-green-100 text-green-800',
    stats: {
      distance: 'جولة داخلية',
      duration: '1-2 ساعات',
      time: '1-2 ساعات',
      altitude: '0m',
      elevation: '0m',
      gain: '0m↑',
    },
    description: 'ملعب متعدد الاستخدامات بسعة 45,000 متفرج. يستضيف مباريات كرة القدم والحفلات الموسيقية والفعاليات الكبرى. تصميم معماري متميز يجمع بين الحداثة والطابع المغربي.',
    transport: {
      bus: 'حافلة خط 1 من المدينة القديمة إلى الملعب (20 دقيقة)',
      taxi: 'سيارة أجرة (15 دقيقة)',
    },
    busRoute: 'حافلة خط 1 من المدينة القديمة إلى الملعب (20 دقيقة)',
    taxiInfo: 'سيارة أجرة (15 دقيقة)',
    accessType: 'transport',
    reservationLink: 'https://example.com/marrakech-stadium',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'مركب محمد الخامس',
    location: 'الدار البيضاء (10 دقيقة من وسط المدينة)',
    difficulty: 'زيارة سهلة',
    difficultyClass: 'bg-green-100 text-green-800',
    difficultyColor: 'bg-green-500',
    reservation: 'حجز التذاكر',
    reservationColor: 'bg-green-100 text-green-800',
    stats: {
      distance: 'جولة داخلية',
      duration: '1-2 ساعات',
      time: '1-2 ساعات',
      altitude: '0m',
      elevation: '0m',
      gain: '0m↑',
    },
    description: 'أشهر ملعب في المغرب بسعة 67,000 متفرج. مقر نادي الرجاء البيضاوي ويستضيف المباريات الدولية. تحفة معمارية وتاريخية في قلب الدار البيضاء.',
    transport: {
      bus: 'حافلة خط 10 من وسط المدينة إلى الملعب (15 دقيقة)',
      taxi: 'سيارة أجرة (10 دقيقة)',
    },
    busRoute: 'حافلة خط 10 من وسط المدينة إلى الملعب (15 دقيقة)',
    taxiInfo: 'سيارة أجرة (10 دقيقة)',
    accessType: 'transport',
    reservationLink: 'https://example.com/mohammed-v-stadium',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'ملعب طنجة',
    location: 'طنجة (20 دقيقة من وسط المدينة)',
    difficulty: 'زيارة سهلة',
    difficultyClass: 'bg-green-100 text-green-800',
    difficultyColor: 'bg-green-500',
    reservation: 'حجز التذاكر',
    reservationColor: 'bg-green-100 text-green-800',
    stats: {
      distance: 'جولة داخلية',
      duration: '1-2 ساعات',
      time: '1-2 ساعات',
      altitude: '0m',
      elevation: '0m',
      gain: '0m↑',
    },
    description: 'ملعب عصري بسعة 65,000 متفرج مع إطلالة رائعة على مضيق جبل طارق. يستضيف أهم المباريات الدولية والحفلات العالمية. تحفة معمارية فريدة.',
    transport: {
      bus: 'حافلة خط 5 من وسط المدينة إلى الملعب (25 دقيقة)',
      taxi: 'سيارة أجرة (20 دقيقة)',
    },
    busRoute: 'حافلة خط 5 من وسط المدينة إلى الملعب (25 دقيقة)',
    taxiInfo: 'سيارة أجرة (20 دقيقة)',
    accessType: 'transport',
    reservationLink: 'https://example.com/tangier-stadium',
  }
];

const MoroccanStadiums = ({ onTrailSelect }) => {
  const handleStadiumClick = (stadium) => {
    if (onTrailSelect) {
      onTrailSelect(stadium);
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-purple-800 mb-4 border-l-4 border-purple-600 pl-3 flex items-center gap-2">
        <Trophy className="w-6 h-6" />
        الملاعب الرياضية في المغرب
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stadiumsData.map((stadium) => (
          <div 
            key={stadium.id}
            className="rounded-lg border bg-white text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full"
            onClick={() => handleStadiumClick(stadium)}
          >
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <Image
                src={stadium.image}
                alt={stadium.title}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-white text-gray-800 backdrop-blur-sm bg-opacity-90">
                  {stadium.reservation}
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1">
                <div className="text-purple-600">
                  <BusFront className="w-4 h-4" />
                </div>
                <div className="text-purple-600">
                  <Car className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="tracking-tight text-xl font-semibold text-gray-900">{stadium.title}</h4>
                  <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    {stadium.location}
                  </p>
                </div>
                <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${stadium.difficultyClass}`}>
                  {stadium.difficulty}
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex-grow flex flex-col">
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-purple-600" />
                    <span className="text-base font-semibold text-gray-900">{stadium.stats.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0 text-purple-600" />
                    <span className="text-base font-semibold text-gray-900">{stadium.stats.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 flex-shrink-0 text-purple-600" />
                    <span className="text-base font-semibold text-gray-900">جماهيري</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 flex-shrink-0 text-purple-600" />
                    <span className="text-base font-semibold text-gray-900">{stadium.stats.gain}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">{stadium.description}</p>
              <div className="mt-auto">
                <h5 className="text-sm font-semibold mb-2 text-gray-900">كيفية الوصول</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <BusFront className="w-4 h-4 flex-shrink-0 text-purple-600" />
                    </div>
                    <p className="text-gray-600">{stadium.transport.bus}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <Car className="w-4 h-4 flex-shrink-0 text-purple-600" />
                    </div>
                    <p className="text-gray-600">{stadium.transport.taxi}</p>
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

export default MoroccanStadiums;