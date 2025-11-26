'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Footprints,
  ArrowUpRight,
  Clock,
  Mountain,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';
import { useFilter } from '@/contexts/FilterContext';
import TrailModal from '@/components/ui/trail-modal';

const trails = [
  {
    title: 'Refugio Frey desde Lago Gutierrez',
    location: 'Camping Los Coihues (direct access)',
    difficulty: 'Moderado',
    difficultyColor: 'bg-yellow-500',
    reservation: 'Reserva Requerida',
    reservationColor: 'bg-destructive text-destructive-foreground',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/5fd20688-6816-43ff-87bc-fb5b01ab43eb-2.png',
    stats: {
      distance: '14 km',
      time: '5 horas ida',
      elevation: '1800m',
      gain: '975m↑',
    },
    description: 'El sendero comienza en Villa Los Coihues y toma aproximadamente 1 hora más que si se inicia desde Cerro Catedral. Comparte el mismo recorrido con los senderos hacia Playa Muñoz y Cascada de los Duendes, para luego continuar hacia el refugio. Es un sendero rodeado de bosque, con vistas panorámicas al Lago Gutiérrez y la cordillera. Al llegar al refugio, disfrutarás de una vista espectacular de las agujas de granito que rodean la Laguna Toncek.',
    accessType: 'walk',
    reservationLink: 'https://example.com/reserva-frey',
    category: 'Refugios',
  },
  {
    title: 'Lago Gutiérrez',
    location: 'Camping Los Coihues (direct access)',
    difficulty: 'Fácil',
    difficultyColor: 'bg-green-500',
    reservation: 'No Requiere Reserva',
    reservationColor: 'bg-secondary text-secondary-foreground',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/cb09422a-2482-4fe6-b577-82a48fc72887-3.png',
    stats: {
      distance: '300 metros',
      time: '5 min ida',
      elevation: '800m',
      gain: '0m↑',
    },
    description: 'A tres cuadras del camping se encuentra el Lago Gutiérrez. Podés caminar por la costa hacia la izquierda, en dirección a la zona de Arelauquen, o seguir la calle de autos que bordea el lago y lleva al camino de la Cascada de los Duendes. En este recorrido, encontrarás algunas playitas hermosas en la costa del lago, perfectas para un picnic o un baño refrescante en verano.',
    accessType: 'walk',
    category: 'Cerca',
  },
  {
    title: 'Mirador Lago Gutiérrez',
    location: 'Camping Los Coihues (direct access)',
    difficulty: 'Fácil',
    difficultyColor: 'bg-green-500',
    reservation: 'No Requiere Reserva',
    reservationColor: 'bg-secondary text-secondary-foreground',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/93c2508f-ddf6-4b0b-bf08-0fc63590f9ae-4.png',
    stats: {
      distance: '3.9 km',
      time: '1 hora ida',
      elevation: '950m',
      gain: '408m↑',
    },
    description: 'El Mirador al lago Gutierrez se encuentra a 1hr del Camping caminando. Hay que caminar 25 min hasta la entrada del parque nacional bordeando el Lago Gutierrez por la calle de autos hasta llegar a la entrada del Parque Nacional. De ahí, vas a encontrar un cartel señalizando el Mirador Lago Gutierrez, y es subir por 45 minutos. La recompensa es una vista panorámica impresionante del Lago Gutiérrez rodeado de montañas.',
    accessType: 'walk',
    category: 'Montañas Fáciles',
  },
  {
    title: 'Cascada de los Duendes',
    location: 'Camping Los Coihues (direct access)',
    difficulty: 'Fácil',
    difficultyColor: 'bg-green-500',
    reservation: 'No Requiere Reserva',
    reservationColor: 'bg-secondary text-secondary-foreground',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/1f998a53-3c5b-429f-8ea5-709a0af96d94-5.png',
    stats: {
      distance: '3.1 km',
      time: '45 min ida',
      elevation: '900m',
      gain: '0m↑',
    },
    description: 'Está a 30 min del Camping caminando. Hay que caminar 20 min hasta la entrada del parque nacional bordeando el Lago Gutierrez por la calle de autos hasta llegar a la entrada del Parque Nacional. Desde allí, continúa por el sendero bien señalizado que te llevará a esta hermosa cascada escondida en el bosque. Es un lugar mágico, perfecto para disfrutar de la naturaleza y refrescarse.',
    accessType: 'walk',
    category: 'Senderos para Caminar',
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
        fill
        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 right-4 flex gap-2">
        <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${trail.reservationColor} backdrop-blur-sm bg-opacity-90`}>
          {trail.reservation}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 bg-white/80 rounded-full p-2">
        <Footprints className="h-4 w-4 text-blue-500" />
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="tracking-tight text-xl font-semibold">{trail.title}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            {trail.location}
          </p>
        </div>
        <div className={`inline-flex items-center rounded-full border font-semibold ${trail.difficultyColor} text-white text-xs px-2 py-0.5 shrink-0 ml-2`}>
          {trail.difficulty}
        </div>
      </div>
    </div>
    <div className="p-6 pt-0">
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
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
      <p className="text-sm text-gray-600 line-clamp-2">{trail.description}</p>
      <div className="mt-4">
        <h4 className="text-sm font-semibold mb-2">Cómo Llegar Desde Camping Los Coihues</h4>
        <div className="space-y-2">
          {trail.accessType === 'walk' && (
            <div className="flex items-start gap-2">
              <div className="mt-0.5">
                <Footprints className="w-4 h-4 flex-shrink-0 text-blue-500" />
              </div>
              <div>
                <span className="font-bold block">Distancia a pie</span>
              </div>
            </div>
          )}
        </div>
        {trail.reservationLink && (
          <div className="mt-4">
            <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex items-center gap-2 uppercase">
              LINK RESERVA
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);

const DayHikesDirect = () => {
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
    ? trails 
    : trails.filter(trail => trail.category === activeCategory);

  // Don't render if no trails match the filter
  if (filteredTrails.length === 0) {
    return null;
  }

  return (
    <>
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-6">Caminatas de un Día</h2>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#4A7C2C] mb-4 border-l-4 border-primary pl-3">
            Acceso Directo desde Camping Los Coihues (Caminando)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrails.map((trail, index) => (
              <TrailCard 
                key={index} 
                trail={trail} 
                onClick={() => handleTrailClick(trail)}
              />
            ))}
          </div>
        </div>
      </section>

      <TrailModal 
        trail={selectedTrail}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default DayHikesDirect;