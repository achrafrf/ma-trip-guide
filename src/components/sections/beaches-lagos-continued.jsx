'use client';

import React, { useState } from 'react';
import { MapPin, Clock, Bus, Car } from 'lucide-react';

const destinations = [
  {
    title: 'Bahia Lopez',
    location: 'Circuito Chico, Km 33 Av. Bustillo',
    time: '40 min desde Camping Los Coihues',
    description: 'Una bahía impresionante con aguas claras y vistas a las montañas. Ubicada a lo largo de la famosa ruta del Circuito Chico, esta playa ofrece una combinación perfecta de bosque y paisaje lacustre.',
    transport: {
      bus: 'Líneas de Bus: Linea 50 (Desde Coihues hasta Rotonda Av. Pioneros) + Linea 10 (1 hr)',
      taxi: 'El viaje en taxi/uber dura aproximadamente 40 minutos.',
    },
  },
  {
    title: 'Villa Tacul',
    location: 'Circuito Chico, Km 29 Av. Bustillo',
    time: '30 min desde Camping Los Coihues',
    description: 'Una joya escondida con aguas turquesas rodeada de cipreses. Esta pequeña playa ofrece uno de los entornos más pintorescos de la zona de Bariloche, con agua clara perfecta para nadar.',
    transport: {
      bus: 'Líneas de Bus: Linea 50 (Desde Coihues) + Linea 20 hasta Llao Llao (1 hr)',
      taxi: 'El viaje en taxi/uber dura aproximadamente 30 minutos.',
    },
  },
  {
    title: 'Playa Melipal',
    location: 'Km 4 Av. Bustillo',
    time: '15 min desde Camping Los Coihues',
    description: 'Una playa conveniente ubicada en el Km 4 de la Avenida Bustillo, cerca del centro de la ciudad. Con fácil acceso y hermosas vistas del Lago Nahuel Huapi, es perfecta para una escapada rápida sin viajar lejos de la ciudad.',
    transport: {
      bus: 'Líneas de Bus: Linea 50 (Desde Coihues hasta Terminal) + Linea 20 o 21 Km. 4 Av. Bustillo (25 min)',
      taxi: 'El viaje en taxi/uber dura aproximadamente 15 minutos.',
    },
  },
];

const BeachCard = ({ destination }) => {
  const [activeTab, setActiveTab] = useState('bus');

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm group transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col p-6 cursor-pointer h-full">
      <div className="flex-grow">
        <h3 className="card-title text-black">{destination.title}</h3>
        <p className="body-sm text-stone-gray flex items-center gap-1 mt-1">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          {destination.location}
        </p>
        <div className="body-sm text-stone-gray flex items-center gap-2 mt-4">
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span>{destination.time}</span>
        </div>
        <p className="body-sm text-gray-text mt-4">
          {destination.description}
        </p>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-semibold mb-2 text-black">Cómo Llegar Desde Camping Los Coihues</h4>
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={() => setActiveTab('bus')}
            className={`caption inline-flex items-center gap-1.5 px-3 py-1 rounded-md border transition-colors ${
              activeTab === 'bus' ? 'bg-muted border-border' : 'bg-card border-border hover:bg-muted'
            }`}
          >
            <Bus className="w-4 h-4" />
            <span>bus</span>
          </button>
          <button
            onClick={() => setActiveTab('taxi')}
            className={`caption inline-flex items-center gap-1.5 px-3 py-1 rounded-md border transition-colors ${
              activeTab === 'taxi' ? 'bg-muted border-border' : 'bg-card border-border hover:bg-muted'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>taxi</span>
          </button>
        </div>
        <div className="body-sm text-gray-text">
          {activeTab === 'bus' && (
            <div className="flex items-start gap-2">
              <Bus className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-accent" />
              <p>{destination.transport.bus}</p>
            </div>
          )}
          {activeTab === 'taxi' && (
            <div className="flex items-start gap-2">
              <Car className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-accent" />
              <p>{destination.transport.taxi}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const BeachesLagosContinued = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((dest, index) => (
        <BeachCard key={index} destination={dest} />
      ))}
    </div>
  );
};

export default BeachesLagosContinued;