'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowUpRight, Clock, Mountain, TrendingUp, BusFront, Car, Trees } from 'lucide-react';

const forestsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1542272203526-0d52e6dccf0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'Forêt de la Maâmora',
    location: 'Près de Kénitra (45 min de voiture de Rabat)',
    difficulty: 'Facile',
    difficultyClass: 'bg-green-100 text-green-800',
    difficultyColor: 'bg-green-500',
    reservation: 'Accès Libre',
    reservationColor: 'bg-green-100 text-green-800',
    stats: {
      distance: '4.2 km',
      duration: '1h30 aller-retour',
      time: '1h30',
      altitude: '80m',
      elevation: '80m',
      gain: '50m↑',
    },
    description: 'La plus grande forêt de chêne-liège du Maroc, s\'étendant sur des milliers d\'hectares. Parfait pour les randonnées familiales et les pique-niques. Les sentiers bien tracés serpentent à travers des paysages de chênes centenaires et offrent une biodiversité remarquable avec une faune et une flore typiquement méditerranéennes.',
    transport: {
      bus: 'Bus CTM depuis Rabat vers Kénitra + taxi local (1h15)',
      taxi: 'Taxi/VTC disponible directement (45 min)',
    },
    busRoute: 'Bus CTM depuis Rabat vers Kénitra + taxi local (1h15)',
    taxiInfo: 'Taxi/VTC disponible directement (45 min)',
    accessType: 'transport',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1581833973757-8d13b43d3b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'Forêt d\'Ifrane',
    location: 'Région d\'Ifrane, Moyen Atlas (1h de Fès)',
    difficulty: 'Modérée',
    difficultyClass: 'bg-yellow-100 text-yellow-800',
    difficultyColor: 'bg-yellow-500',
    reservation: 'Accès Libre',
    reservationColor: 'bg-green-100 text-green-800',
    stats: {
      distance: '5.8 km',
      duration: '2h30 boucle complète',
      time: '2h30',
      altitude: '1650m',
      elevation: '1650m',
      gain: '280m↑',
    },
    description: 'Surnommée la "petite Suisse du Maroc", cette forêt de cèdres majestueux abrite une faune exceptionnelle dont les célèbres macaques de Barbarie. Les sentiers traversent des paysages alpins uniques au Maroc avec des points de vue spectaculaires sur les montagnes du Moyen Atlas.',
    transport: {
      bus: 'Bus depuis Fès vers Ifrane + taxi local (1h30)',
      taxi: 'Taxi grand taxi disponible (1h)',
    },
    busRoute: 'Bus depuis Fès vers Ifrane + taxi local (1h30)',
    taxiInfo: 'Taxi grand taxi disponible (1h)',
    accessType: 'transport',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'Forêt de l\'Ourika',
    location: 'Vallée de l\'Ourika, Haut Atlas (1h de Marrakech)',
    difficulty: 'Modérée à Difficile',
    difficultyClass: 'bg-orange-100 text-orange-800',
    difficultyColor: 'bg-orange-500',
    reservation: 'Guide Recommandé',
    reservationColor: 'bg-orange-100 text-orange-800',
    stats: {
      distance: '6.5 km',
      duration: '3h aller-retour',
      time: '3h',
      altitude: '1800m',
      elevation: '1800m',
      gain: '450m↑',
    },
    description: 'Une magnifique randonnée dans la vallée de l\'Ourika qui combine forêts de genévriers, de thuyas et paysages montagneux spectaculaires. Le sentier suit partiellement la rivière Ourika et mène à des points de vue exceptionnels sur les villages berbères et les sommets enneigés du Toubkal.',
    transport: {
      bus: 'Bus local depuis Marrakech + taxi collectif (1h15)',
      taxi: 'Taxi/VTC disponible (1h)',
    },
    busRoute: 'Bus local depuis Marrakech + taxi collectif (1h15)',
    taxiInfo: 'Taxi/VTC disponible (1h)',
    accessType: 'transport',
    reservationLink: 'https://example.com/guide-ourika',
  },
];

const MoroccanForests = ({ onTrailSelect }) => {
  const [selectedForest, setSelectedForest] = useState(null);

  const handleForestClick = (forest) => {
    setSelectedForest(forest);
    if (onTrailSelect) {
      onTrailSelect(forest);
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-emerald-800 mb-4 border-l-4 border-emerald-600 pl-3 flex items-center gap-2">
        <Trees className="w-6 h-6" />
        Randonnées Forestières au Maroc
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {forestsData.map((forest) => (
          <div 
            key={forest.id}
            className="rounded-lg border bg-white text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full"
            onClick={() => handleForestClick(forest)}
          >
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <Image
                src={forest.image}
                alt={forest.title}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-white text-gray-800 backdrop-blur-sm bg-opacity-90">
                  {forest.reservation}
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1">
                <div className="text-emerald-600">
                  <BusFront className="w-4 h-4" />
                </div>
                <div className="text-emerald-600">
                  <Car className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="tracking-tight text-xl font-semibold text-gray-900">{forest.title}</h4>
                  <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    {forest.location}
                  </p>
                </div>
                <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${forest.difficultyClass}`}>
                  {forest.difficulty}
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex-grow flex flex-col">
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                    <span className="text-base font-semibold text-gray-900">{forest.stats.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                    <span className="text-base font-semibold text-gray-900">{forest.stats.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                    <span className="text-base font-semibold text-gray-900">{forest.stats.altitude}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                    <span className="text-base font-semibold text-gray-900">{forest.stats.gain}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">{forest.description}</p>
              <div className="mt-auto">
                <h5 className="text-sm font-semibold mb-2 text-gray-900">Comment s'y rendre</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <BusFront className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">{forest.transport.bus}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <Car className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">{forest.transport.taxi}</p>
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

export default MoroccanForests;