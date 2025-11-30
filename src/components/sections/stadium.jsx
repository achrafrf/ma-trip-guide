'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowUpRight, Clock, Users, TrendingUp, BusFront, Car, Trophy, Calendar } from 'lucide-react';

const stadiumsData = [
  {
    id: 1,
    // صورة تعبيرية لملعب حديث مغطى (الرباط)
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0565c6a?q=80&w=1000&auto=format&fit=crop',
    title: 'المجمع الرياضي الأمير مولاي عبد الله',
    location: 'الرباط (العاصمة)',
    difficulty: 'جاهز 2025',
    difficultyClass: 'bg-green-100 text-green-800',
    difficultyColor: 'bg-green-500',
    reservation: 'المباراة النهائية',
    reservationColor: 'bg-green-100 text-green-800',
    stats: {
      capacity: '69,500 مقعد',
      status: 'تجديد شامل',
      type: 'مغطى بالكامل',
      year: 'تسليم 2025',
    },
    description: 'يخضع لعملية إعادة بناء شاملة ليكون جوهرة ملاعب إفريقيا. تم إزالة المضمار وتغطيته بالكامل بطاقة استيعابية تناهز 70 ألف متفرج، بتصميم عصري عالمي.',
    transport: {
      bus: 'الترامواي (محطة المدينة الرياضية) والحافلات الحضرية',
      taxi: 'متوفر عبر الطريق السريع الحضري (10 د من أكدال)',
    },
    reservationLink: '#',
  },
  {
    id: 2,
    // صورة تعبيرية لملعب طنجة (أزرق/حديث)
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=1000&auto=format&fit=crop',
    title: 'ملعب طنجة الكبير (ابن بطوطة)',
    location: 'طنجة (القرية الرياضية)',
    difficulty: 'توسعة كبرى',
    difficultyClass: 'bg-blue-100 text-blue-800',
    difficultyColor: 'bg-blue-500',
    reservation: 'نصف النهائي',
    reservationColor: 'bg-blue-100 text-blue-800',
    stats: {
      capacity: '75,000 مقعد',
      status: 'إزالة المضمار',
      type: 'تصميم عالمي',
      year: 'جاهز',
    },
    description: 'تمت إزالة الحلبة المطاطية وزيادة الطاقة الاستيعابية وإضافة سقف كامل. يعتبر من أجمل الملاعب حالياً بمواصفات "الفيفا" ويطل على مضيق جبل طارق.',
    transport: {
      bus: 'حافلات ألزا وخدمة النقل المباشر من المطار',
      taxi: '10 دقائق من مطار ابن بطوطة',
    },
    reservationLink: '#',
  },
  {
    id: 3,
    // صورة تعبيرية لملعب كازا
    image: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=1000&auto=format&fit=crop',
    title: 'مركب محمد الخامس',
    location: 'الدار البيضاء (المعارف)',
    difficulty: 'تحديث شامل',
    difficultyClass: 'bg-yellow-100 text-yellow-800',
    difficultyColor: 'bg-yellow-500',
    reservation: 'مباريات المجموعات',
    reservationColor: 'bg-yellow-100 text-yellow-800',
    stats: {
      capacity: '45,000 مقعد',
      status: 'تأهيل كامل',
      type: 'تاريخي',
      year: 'تحديث 2025',
    },
    description: 'الملعب الأسطوري للدار البيضاء يخضع لعمليات تأهيل شاملة للمرافق والمدرجات والمنصة الشرفية ليكون جاهزاً لاستقبال كبار ضيوف إفريقيا.',
    transport: {
      bus: 'الترامواي (محطة المركب) والحافلات',
      taxi: 'وسط المدينة (حي المعارف)',
    },
    reservationLink: '#',
  },
  {
    id: 4,
    // صورة تعبيرية لملعب مراكش (ألوان حمراء)
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
    title: 'ملعب مراكش الكبير',
    location: 'مراكش (طريق الدار البيضاء)',
    difficulty: 'تأهيل',
    difficultyClass: 'bg-orange-100 text-orange-800',
    difficultyColor: 'bg-orange-500',
    reservation: 'مباريات المجموعات',
    reservationColor: 'bg-orange-100 text-orange-800',
    stats: {
      capacity: '45,000 مقعد',
      status: 'تجويد المرافق',
      type: 'طابع مغربي',
      year: 'جاهز',
    },
    description: 'تحفة معمارية تمزج بين الحداثة والأصالة المغربية. يخضع لتحسينات تشمل المداخل ومحيط الملعب والمرافق الداخلية لاستقبال الجماهير.',
    transport: {
      bus: 'خطوط الحافلات الخاصة (ألزا) أثناء المباريات',
      taxi: '15 دقيقة من جيليز',
    },
    reservationLink: '#',
  },
  {
    id: 5,
    // صورة تعبيرية لملعب أكدير
    image: 'https://images.unsplash.com/photo-1516054717294-1645f5218d07?q=80&w=1000&auto=format&fit=crop',
    title: 'ملعب أدرار',
    location: 'أكادير (شرق المدينة)',
    difficulty: 'تحديث',
    difficultyClass: 'bg-red-100 text-red-800',
    difficultyColor: 'bg-red-500',
    reservation: 'ربع النهائي',
    reservationColor: 'bg-red-100 text-red-800',
    stats: {
      capacity: '45,000 مقعد',
      status: 'تغطية السقف',
      type: 'تصميم أمازيغي',
      year: 'تجديد 2025',
    },
    description: 'يتميز بتصميمه المستوحى من جبال الأطلس. الأشغال تهم تحسين الإنارة وتغطية الملعب وتحديث غرف الملابس والمنصة الصحفية.',
    transport: {
      bus: 'حافلات النقل الحضري (خط 22)',
      taxi: '20 دقيقة من المنطقة السياحية',
    },
    reservationLink: '#',
  },
  {
    id: 6,
    // صورة تعبيرية لملعب فاس
    image: 'https://images.unsplash.com/photo-1590634628292-0545f1b5377f?q=80&w=1000&auto=format&fit=crop',
    title: 'المركب الرياضي بفاس',
    location: 'فاس (طريق صفرو)',
    difficulty: 'إزالة المضمار',
    difficultyClass: 'bg-emerald-100 text-emerald-800',
    difficultyColor: 'bg-emerald-500',
    reservation: 'مباريات المجموعات',
    reservationColor: 'bg-emerald-100 text-emerald-800',
    stats: {
      capacity: '45,000 مقعد',
      status: 'تصميم جديد',
      type: 'تراثي عصري',
      year: 'تسليم 2025',
    },
    description: 'تغيير جذري للملعب بإزالة مضمار ألعاب القوى وتقريب المدرجات وتغطيته بالكامل، مع الحفاظ على اللمسة الفاسية الأصيلة في التصميم الخارجي.',
    transport: {
      bus: 'خطوط سيتي باص فاس',
      taxi: '15 دقيقة من وسط المدينة',
    },
    reservationLink: '#',
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
        ملاعب كأس أمم أفريقيا 2025
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
                  {/* Capacity */}
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 flex-shrink-0 text-purple-600" />
                    <span className="text-sm font-semibold text-gray-900">{stadium.stats.capacity}</span>
                  </div>
                   {/* Status */}
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 flex-shrink-0 text-purple-600" />
                    <span className="text-sm font-semibold text-gray-900">{stadium.stats.status}</span>
                  </div>
                   {/* Type */}
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-purple-600" />
                    <span className="text-sm font-semibold text-gray-900">{stadium.stats.type}</span>
                  </div>
                   {/* Year */}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 flex-shrink-0 text-purple-600" />
                    <span className="text-sm font-semibold text-gray-900">{stadium.stats.year}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">{stadium.description}</p>
              <div className="mt-auto">
                <h5 className="text-sm font-semibold mb-2 text-gray-900">وسائل النقل</h5>
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