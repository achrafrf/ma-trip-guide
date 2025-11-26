'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowUpRight, Clock, Mountain, TrendingUp, Footprints, Bus, Car } from 'lucide-react';
import { useFilter } from '@/contexts/FilterContext';
import TrailModal from '@/components/ui/trail-modal';

const continuedTrails = [
  {
    title: 'Cerro San Martín',
    location: 'Camping Los Coihues',
    difficulty: 'Fácil',
    difficultyColor: 'bg-green-500',
    reservation: 'No Requiere Reserva',
    reservationColor: 'bg-secondary text-secondary-foreground',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/5e7df03e-d176-4498-a3f7-bc5afac27381-6.png',
    stats: {
      distance: '2.6 km',
      time: '1 hora ida',
      elevation: '1275m',
      gain: '450m↑',
    },
    description: 'El inicio del sendero esta subiendo la Calle Balcón Gútierrez hasta al fondo. Ahí te chocas con el Camping Ecologico y tienes que seguir caminando 30 m a la izquierda donde vas a encontrar el inicio del sendero de mano derecha. Es empinado pero se sube rápido. La vista desde la cumbre es espectacular, con panorámicas del Lago Gutiérrez y las montañas circundantes.',
    accessType: 'walk',
    category: 'Montañas Fáciles',
  },
  {
    title: 'Playa Muñoz',
    location: 'Camping Los Coihues (direct access)',
    difficulty: 'Fácil',
    difficultyColor: 'bg-green-500',
    reservation: 'No Requiere Reserva',
    reservationColor: 'bg-secondary text-secondary-foreground',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/2669c291-db3b-4115-a8d9-0003a827de60-7.png',
    stats: {
      distance: '8 km',
      time: '1.5 horas ida',
      elevation: '900m',
      gain: '100m↑',
    },
    description: 'Una caminata corta y agradable a una playa aislada en el Lago Gutiérrez con aguas cristalinas. El sendero comienza directamente desde Camping Los Coihues y sigue la costa del lago a través del bosque nativo. Perfecto para un refrescante baño en verano. Es una playa tranquila y poco concurrida, ideal para relajarse y disfrutar de la naturaleza.',
    accessType: 'walk',
    category: 'Playas y Lagos',
  },
  {
    title: 'Cerro Llao Llao',
    location: 'Hotel Llao Llao (50 min by bus from Los Coihues)',
    difficulty: 'Fácil',
    difficultyColor: 'bg-green-500',
    reservation: 'No Requiere Reserva',
    reservationColor: 'bg-secondary text-secondary-foreground',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/a210f1ff-a5c5-4288-a37a-33d461911db7-8.png',
    stats: {
      distance: '2.6 km',
      time: '1 hora ida',
      elevation: '1080m',
      gain: '340m↑',
    },
    description: 'Tomando el bus 20, bajarse en la última parada en Hotel Llao Llao. De ahí caminas por la ruta 20 minutos hasta el comienzo del sendero. De ahí es 1 hr de caminata de leve subida en bosque de coihues y cipreses de 2,6 km. El esfuerzo se ve recompensado con una vista espectacular desde la cumbre, donde se pueden admirar el Lago Moreno, el Nahuel Huapi y la Cordillera de los Andes.',
    accessType: 'bus',
    busRoute: 'Línea 50 (desde Coihues) conectando con Línea 20 (Av. Bustillo) (50 min)',
    taxiInfo: 'Taxi/Uber disponible (35 min)',
    category: 'Montañas Fáciles',
  },
];

const TrailCard = ({ trail, onClick }) => (
  <div 
    onClick={onClick}
    className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 animate-fadeIn cursor-pointer"
  >
    <div className="relative overflow-hidden rounded-t-lg h-48">
      <Image
        src={trail.image}
        alt={trail.title}
        width={400}
        height={192}
        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 right-4 flex gap-2">
        <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${trail.reservationColor} backdrop-blur-sm`}>
          {trail.reservation}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1">
        {trail.accessType === 'walk' && <Footprints className="w-4 h-4 text-blue-500" />}
        {trail.accessType === 'bus' && (
          <>
            <Bus className="w-4 h-4 text-blue-500" />
            <Car className="w-4 h-4 text-blue-500" />
          </>
        )}
      </div>
    </div>
    <div className="flex flex-col space-y-1.5 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="tracking-tight text-xl font-semibold">{trail.title}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            {trail.location}
          </p>
        </div>
        <div className={`inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${trail.difficultyColor} text-white text-xs px-2 py-0.5`}>
          {trail.difficulty}
        </div>
      </div>
    </div>
    <div className="p-6 pt-0">
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 ">
          <div className="flex items-center gap-2">
            <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-blue-500" />
            <span className="text-base font-semibold">{trail.stats.distance}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 flex-shrink-0 text-blue-500" />
            <span className="text-base font-semibold">{trail.stats.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain className="w-4 h-4 flex-shrink-0 text-blue-500" />
            <span className="text-base font-semibold">{trail.stats.elevation}</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 flex-shrink-0 text-blue-500" />
            <span className="text-base font-semibold">{trail.stats.gain}</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 line-clamp-2">
        {trail.description}
      </p>
      <div className="mt-4">
        <h4 className="text-sm font-semibold mb-2">Cómo Llegar Desde Camping Los Coihues</h4>
        <div className="space-y-2">
          {trail.accessType === 'walk' && (
            <div className="flex items-start gap-2">
              <div className="mt-0.5">
                <Footprints className="w-4 h-4 flex-shrink-0 text-blue-500" />
              </div>
              <div>
                <span className="font-bold block text-sm">Distancia a pie</span>
              </div>
            </div>
          )}
          {trail.busRoute && (
            <div className="flex items-start gap-2">
              <Bus className="w-4 h-4 flex-shrink-0 text-blue-500 mt-0.5" />
              <span className="text-sm">{trail.busRoute}</span>
            </div>
          )}
          {trail.taxiInfo && (
            <div className="flex items-start gap-2">
              <Car className="w-4 h-4 flex-shrink-0 text-blue-500 mt-0.5" />
              <span className="text-sm">{trail.taxiInfo}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const DayHikesDirectContinued = () => {
  const { activeCategory } = useFilter();
  const [selectedTrail, setSelectedTrail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTrailClick = (trail) => {
    setSelectedTrail(trail);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTrail(null);
  };

  // Filter trails based on active category
  const filteredTrails = activeCategory === 'Todos' 
    ? continuedTrails 
    : continuedTrails.filter(trail => trail.category === activeCategory);

  // Don't render if no trails match the filter
  if (filteredTrails.length === 0) {
    return null;
  }

  return (
    <>
      {filteredTrails.map((trail, index) => (
        <TrailCard 
          key={index} 
          trail={trail}
          onClick={() => handleTrailClick(trail)}
        />
      ))}
      
      <TrailModal 
        trail={selectedTrail}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default DayHikesDirectContinued;