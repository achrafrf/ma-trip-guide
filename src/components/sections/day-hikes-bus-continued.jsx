import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ArrowUpRight, Clock, Mountain, TrendingUp, Bus, Car } from 'lucide-react';

const trailsData = [
  {
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/2d1500b3-3ff7-49f4-8523-acf161b6f388-11.png',
    title: 'Circuito Chico - Lago Moreno',
    location: 'Circuito Chico entrance (35 min bus ride)',
    difficulty: 'Fácil',
    stats: {
      distance: '8 km',
      duration: '3 horas ida',
      elevation: '150m',
      gain: '~0m↑',
    },
    description: 'Un pintoresco sendero junto al lago siguiendo la famosa ruta del Circuito Chico. Hermosas vistas del Lago Moreno y las montañas circundantes.',
    transport: {
      bus: 'Línea Bus - Línea 50 (desde Colhues) + Línea 10 ó 13 (Av. Bustillo) (50 min)',
      uber: 'Taxi/Uber disponible (30 min)',
    },
  },
  {
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/964a6f6b-ae4d-469a-833a-a5f5c4aad336-12.png',
    title: 'Colonia Suiza',
    location: 'Colonia Suiza (30 min bus ride)',
    difficulty: 'Fácil',
    stats: {
      duration: '1 hora ida',
      elevation: '850m',
    },
    description: 'Para llegar a Colonia Suiza desde Camping Los Coihues, puedes tomar el colectivo bus 50 hacia el centro de Bariloche y luego hacer combinación con el bus 10, que te lleva directamente a Colonia Suiza.',
    transport: {
      bus: 'Línea Bus - Línea 50 (desde Colhues) hasta Rotonda Av. Pioneros) + Línea 10 (desde Av. Bustillo km 8) (50 min)',
      uber: 'Taxi/Uber disponible (35 min)',
    },
  },
  {
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/57c8b30f-1d60-4eda-b748-834262a3a463-13.png',
    title: 'Mirador Brazo Tristeza, Lago Escondido & Bahía López',
    location: 'Bahía López parking lot (40 min drive from Los Coihues)',
    difficulty: 'Fácil',
    stats: {
      distance: '2 km',
      duration: '0.67 horas ida',
      elevation: '850m',
      gain: '95m↑',
    },
    description: 'El sendero parte desde el estacionamiento de Bahía López (Km 32 del "Circuito Chico") ubicado junto al Hotel Alun Nehuen, perteneciente al Sindicato de Luz y Fuerza.',
    transport: {
      bus: 'Línea Bus - Línea 50 (Desde Colhues) hasta Av. Pioneros y Rotonda + Linea 10 hasta Playa López (50 min)',
      uber: 'Taxi/Uber disponible (35 min)',
    },
  },
];

const TrailCard = ({ trail }) => {
  const difficultyColors = {
    'Fácil': 'bg-easy-green',
    'Moderado': 'bg-moderate-yellow',
    'Difícil': 'bg-difficult-orange',
    'Experto': 'bg-destructive',
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 animate-fadeIn cursor-pointer overflow-hidden">
      <div className="relative overflow-hidden h-48">
        <Image
          src={trail.imageSrc}
          alt={trail.title}
          width={400}
          height={192}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-muted-foreground">No Requiere Reserva</Badge>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1 items-center">
          <Bus className="w-4 h-4 text-blue-500" />
          <Car className="w-4 h-4 text-blue-500" />
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
          <Badge className={`${difficultyColors[trail.difficulty]} text-white text-xs`}>
            {trail.difficulty}
          </Badge>
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {trail.stats.distance && (
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-blue-500" />
                <span className="text-base font-semibold">{trail.stats.distance}</span>
              </div>
            )}
            {trail.stats.duration && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0 text-blue-500" />
                <span className="text-base font-semibold">{trail.stats.duration}</span>
              </div>
            )}
            {trail.stats.elevation && (
              <div className="flex items-center gap-2">
                <Mountain className="w-4 h-4 flex-shrink-0 text-blue-500" />
                <span className="text-base font-semibold">{trail.stats.elevation}</span>
              </div>
            )}
            {trail.stats.gain && (
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 flex-shrink-0 text-blue-500" />
                <span className="text-base font-semibold">{trail.stats.gain}</span>
              </div>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{trail.description}</p>
        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-2">Cómo Llegar Desde Camping Los Coihues</h4>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
                <Bus className="w-4 h-4 flex-shrink-0 text-blue-500 mt-0.5" />
              <p className="text-sm text-gray-600">{trail.transport.bus}</p>
            </div>
            <div className="flex items-start gap-2">
                <Car className="w-4 h-4 flex-shrink-0 text-blue-500 mt-0.5" />
              <p className="text-sm text-gray-600">{trail.transport.uber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DayHikesBusContinued = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trailsData.map((trail) => (
        <TrailCard key={trail.title} trail={trail} />
      ))}
    </div>
  );
};

export default DayHikesBusContinued;