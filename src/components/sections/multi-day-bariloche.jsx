'use client';

import Image from 'next/image';
import {
  Mountain,
  Footprints,
  MapPin,
  ArrowUpRight,
  Clock,
  TrendingUp,
  Bus,
  CarFront,
  ExternalLink,
} from 'lucide-react';

const treksData = [
  {
    title: 'Travesía Frey-Jakob',
    location: 'Cerro Catedral (15 min drive from Los Coihues)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/3b45435b-d0d0-4fb7-ac3b-73c18e21fd50-14.png',
    reservationRequired: true,
    difficulty: {
      text: 'Difícil',
      className: 'bg-difficult-orange text-white',
    },
    stats: {
      distance: '9 km',
      duration: '5-6 horas ida',
      elevation: '1600m',
      gain: '676m↑',
    },
    description: 'Recomendamos tomarse un Uber desde el Camping hasta la base del Cerro Catedral. El viaje dura aproximadamente 15 minutos. Los buses muchas veces presentan una gran espera.',
    howToGetThere: [
      {
        icon: <Footprints className="w-4 h-4 text-blue-accent" />,
        text: 'Distancia a pie',
      },
    ],
    ctaLink: null,
  },
  {
    title: 'Refugio Laguna Negra desde Colonia Suiza',
    location: 'Colonia Suiza (1 hr from Los Coihues)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/b9aa2dd6-4efa-41fc-aae0-35165399628f-15.png',
    reservationRequired: true,
    difficulty: {
      text: 'Difícil',
      className: 'bg-difficult-orange text-white',
    },
    stats: {
      distance: '11 km',
      duration: '3 horas ida',
      elevation: '1640m',
      gain: '913m↑',
    },
    description: 'La senda parte desde Colonia Suiza, con una subida leve y constante, bordeando el arroyo Goye. Continúa a lo largo del valle que presenta algunos sectores con mallines.',
    howToGetThere: [
      {
        icon: <Bus className="w-4 h-4 text-blue-accent" />,
        text: 'Línea Bus - Línea 50 (Los Coihues) + Línea 10 (desde Av. Bustillo km 8) hasta la Pancheria del Circuito Chico (1 hr)',
      },
      {
        icon: <CarFront className="w-4 h-4 text-blue-accent" />,
        text: 'Taxi/Uber disponible (15 min)',
      },
    ],
    ctaLink: '#',
  },
  {
    title: 'Refugio San Martin Jakob',
    location: 'Tambo Baez (16 min drive from Los Coihues)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/8f08a419-86bc-49e3-8707-015d86806c3e-16.png',
    reservationRequired: true,
    difficulty: {
      text: 'Moderado',
      className: 'bg-moderate-yellow text-white',
    },
    stats: {
      distance: '14 km',
      duration: '5-6 horas ida',
      elevation: '1600m',
      gain: '800m↑',
    },
    description: 'El sendero comienza la estancia Tambo Baez a 16 min en auto del camping. Se puede llegar desde Bariloche en auto o transporte público.',
    howToGetThere: [
      {
        icon: <CarFront className="w-4 h-4 text-blue-accent" />,
        text: 'Taxi/Uber disponible (16 min)',
      },
    ],
    ctaLink: '#',
  },
];

const MultiDayBariloche = () => {
  return (
    <div className="mb-12">
      <h3 className="h3-subsection text-forest-light mb-4 border-l-4 border-primary pl-3">
        Región de Bariloche
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treksData.map((trek) => (
          <div key={trek.title} className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 animate-fadeIn cursor-pointer">
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <Image
                src={trek.image}
                alt={trek.title}
                width={400}
                height={192}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                {trek.reservationRequired && (
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-destructive text-destructive-foreground backdrop-blur-sm bg-opacity-90">
                    Reserva Requerida
                  </div>
                )}
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1">
                <Footprints className="w-4 h-4 text-blue-accent" />
                <Mountain className="w-4 h-4 text-blue-accent" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="card-title tracking-tight">{trek.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 flex-shrink-0" /> {trek.location}
                  </p>
                </div>
                <div className={`inline-flex items-center rounded-full border font-semibold transition-colors border-transparent text-xs px-2 py-0.5 ${trek.difficulty.className}`}>
                  {trek.difficulty.text}
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-blue-accent" />
                    <span className="metadata">{trek.stats.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0 text-blue-accent" />
                    <span className="metadata">{trek.stats.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 flex-shrink-0 text-blue-accent" />
                    <span className="metadata">{trek.stats.elevation}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 flex-shrink-0 text-blue-accent" />
                    <span className="metadata">{trek.stats.gain}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-text line-clamp-2">{trek.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Cómo Llegar Desde Camping Los Coihues</h4>
                <div className="space-y-2">
                  {trek.howToGetThere.map((method, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="mt-0.5 shrink-0">{method.icon}</div>
                      <p className="text-sm text-muted-foreground">{method.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              {trek.ctaLink && (
                <div className="mt-4">
                  <a
                    href={trek.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2 uppercase"
                  >
                    LINK RESERVA
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiDayBariloche;