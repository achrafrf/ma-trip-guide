"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, ArrowUpRight, Clock, Mountain, TrendingUp, Footprints, Bus, Car, ExternalLink } from 'lucide-react';

const trails = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/18aa5c8f-d10c-4295-a1d7-665ad54ba5c5-17.png",
    alt: "Refugio Cerro López",
    reservation: "Reserva Requerida",
    imgCategoryIcons: ['walk', 'bus', 'car'],
    title: "Refugio Cerro López",
    location: "Villa Tacul (30 min drive from Los Coihues)",
    difficulty: "Difícil",
    difficultyClass: "bg-orange-500",
    stats: {
      distance: "8 km",
      duration: "2 horas ida",
      altitude: "1620m",
      gain: "1260m↑",
    },
    description: "Esta exigente caminata de alta montaña ofrece impresionantes vistas panorámicas del Parque Nacional Nahuel Huapi y los lagos circundantes. El sendero comienza en Villa Tacul y asciende empinadamente a través del bosque nativo antes de alcanzar un terreno rocoso más expuesto en altitudes más elevadas.",
    transport: [
      { type: "bus", text: "Linea Bus - Linea 50 (desde Los Coihues hasta Rotonda Av. Pioneros) + Linea 10 ó 13 (Av. Bustillo km 8) (50 min)" },
      { type: "car", text: "Taxi/Uber disponible (30 min)" },
    ],
    cta: "LINK RESERVA (WHATSAPP)",
    ctaLink: "#",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/3345ac42-9795-42d0-88c1-27c0dea43762-18.png",
    alt: "Travesía Cerro López – Laguna Negra",
    reservation: "Reserva Requerida",
    imgCategoryIcons: ['walk', 'bus', 'car'],
    title: "Travesía Cerro López – Laguna Negra",
    location: "Circuito Chico (50 min from Los Coihues)",
    difficulty: "Experto",
    difficultyClass: "bg-red-500",
    stats: {
      distance: "25 km",
      duration: "7 horas ida",
      altitude: "2050m",
      gain: "500m↑",
    },
    description: "La travesía comienza en el cruce de Circuito Chico con el arroyo López, donde se inicia un ascenso empinado pero relativamente corto de menos de 5 km hasta el Refugio López. En el trayecto se pasa por el Refugio Roca Negra antes de llegar, tras aproximadamente 1 hora y 40 minutos, al refugio.",
    transport: [
      { type: "bus", text: "Linea Bus - Linea 50 (desde Los Coihues) + Linea 10 (desde Av. Bustillo km 8) hasta la Panchería del Circuito Chico" },
      { type: "car", text: "Taxi/Uber disponible (40 min)" },
    ],
    cta: "LINK RESERVA",
    ctaLink: "#",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/c2cfed37-332c-49bb-8f26-e701a5a11d48-19.png",
    alt: "Refugio Frey",
    reservation: "Reserva Requerida",
    imgCategoryIcons: ['walk', 'car'],
    title: "Refugio Frey",
    location: "Villa Los Coihues or Cerro Catedral",
    difficulty: "Moderado",
    difficultyClass: "bg-yellow-500",
    stats: {
      distance: "10 km",
      duration: "4 horas ida",
      altitude: "1750m",
      gain: "700m↑",
    },
    description: "Hay dos caminos. Uno desde Villa Catedral y otro, desde Los Coihues. El sendero que comienza en Villa Los Coihues toma aproximadamente 1 hora más que si se inicia desde Cerro Catedral.",
    transport: [
      { type: "walk", text: "Distancia a pie" },
      { type: "car", text: "Taxi/Uber disponible (15 min)" },
    ],
    cta: "LINK RESERVA",
    ctaLink: "#",
  },
];

const TransportIcon = ({ type }) => {
  const commonClasses = "w-4 h-4 flex-shrink-0 text-blue-500"
  switch (type) {
    case 'walk':
      return <Footprints className={commonClasses} />;
    case 'bus':
      return <Bus className={commonClasses} />;
    case 'car':
      return <Car className={commonClasses} />;
    default:
      return null;
  }
};

const ImgCategoryIcons = ({ types }) => (
  <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1">
    {types.map((type, index) => (
      <div key={index} className="text-blue-500">
        <TransportIcon type={type} />
      </div>
    ))}
  </div>
);


export default function MultiDayBarilocheContinued() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trails.map((trail, index) => (
        <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 animate-fadeIn cursor-pointer flex flex-col">
          <div className="relative overflow-hidden rounded-t-lg h-48">
            <Image
              src={trail.image}
              alt={trail.alt}
              fill
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 backdrop-blur-sm bg-opacity-90">
                {trail.reservation}
              </div>
            </div>
            <ImgCategoryIcons types={trail.imgCategoryIcons} />
          </div>
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="tracking-tight text-xl font-semibold">{trail.title}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 flex-shrink-0" /> {trail.location}
                </p>
              </div>
              <div className={`inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 ${trail.difficultyClass} text-white text-xs px-2 py-0.5`}>
                {trail.difficulty}
              </div>
            </div>
          </div>
          <div className="p-6 pt-0 flex-grow flex flex-col">
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">{trail.stats.distance}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">{trail.stats.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">{trail.stats.altitude}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">{trail.stats.gain}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">{trail.description}</p>
            <div className="mt-4 flex-grow flex flex-col justify-end">
              <div>
                <h4 className="text-sm font-semibold mb-2">Cómo Llegar Desde Camping Los Coihues</h4>
                <div className="space-y-2">
                  {trail.transport.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <TransportIcon type={item.type} />
                      </div>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <a href={trail.ctaLink} className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex items-center gap-2 uppercase w-full">
                  {trail.cta}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}