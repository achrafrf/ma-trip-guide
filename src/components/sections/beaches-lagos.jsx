import React from 'react';
import { MapPin, Clock, Bus, Car, Footprints } from 'lucide-react';

const beachesData = [
  {
    title: 'Playa Del Viento',
    location: 'Lago Moreno',
    time: '20 min desde Camping Los Coihues',
    description: 'Desde Playa del Viento, en el lago Moreno, se tienen vistas impresionantes del Cerro López, con sus imponentes paredes rocosas al fondo, y de los densos bosques que rodean el lago. Hacia el otro lado, se pueden ver las suaves laderas de la península San Pedro. Es un lugar muy popular para practicar kitesurf debido a los fuertes vientos que suelen soplar en la zona.',
    transport: {
      bus: 'Lineas de Bus: Linea 50 (Desde Coihues) conexión en Av. Pioneros y Rotonda + Linea 21 (desde Av. Bustillo Km 8) (50 min)',
      taxi: true,
    },
  },
  {
    title: 'Playa Con Viento',
    location: 'Lago Moreno',
    time: '25 min desde Camping Los Coihues',
    description: 'Fiel a su nombre, esta playa ofrece vientos constantes, perfectos para actividades de vela y windsurf. Presenta una mezcla de arena y guijarros con espectaculares vistas a la montaña.',
    transport: {
      bus: 'Lineas de Bus: Linea 50 (Desde Coihues) conexión en Av. Pioneros y Rotonda + Linea 10 o 13 (desde Av. Bustillo Km 8) (50 min)',
      taxi: true,
    },
  },
  {
    title: 'Playa Sin Viento',
    location: 'Lago Moreno',
    time: '35 min desde Camping Los Coihues',
    description: 'Una playa protegida que ofrece aguas tranquilas, ideal para familias con niños y para nadar. Ubicada en un área de bahía protegida con hermosos alrededores.',
    transport: {
      bus: 'Lineas de Bus: Linea 50 (Desde Coihues) conexión en Av. Pioneros y Rotonda + Linea 21 (desde Av. Bustillo Km 8) (50 min)',
      taxi: true,
    },
  },
  {
    title: 'Playa Muñoz',
    location: 'Lago Gutiérrez',
    time: '90 min desde Camping Los Coihues',
    description: 'Una playa tranquila con aguas azules prístinas rodeada de montañas, perfecta para relajarse y disfrutar de la atmósfera pacífica. Las aguas cristalinas invitan a nadar y la playa ofrece un gran lugar para la fotografía.',
    transport: {
      walking: true,
    },
  },
  {
    title: 'Playa Bonita',
    location: 'Lago Nahuel Huapi, Km 7.5 Av. Bustillo',
    time: '10 min desde Camping Los Coihues',
    description: 'Como su nombre lo indica, esta es una de las playas más pintorescas de Bariloche. Ofrece aguas cristalinas y está rodeada de bosque nativo, proporcionando un entorno perfecto para fotografías.',
    transport: {
      bus: 'Lineas de Bus: Linea 50 (Desde Coihues hasta Rotonda Av. Pioneros) (15 min)',
      taxi: true,
    },
  },
  {
    title: 'Bahía Serena',
    location: 'Lago Nahuel Huapi, Km 13 Av. Bustillo',
    time: '15 min desde Camping Los Coihues',
    description: 'Una bahía tranquila que ofrece un entorno pacífico y aguas relativamente más cálidas. Perfecta para un día tranquilo junto al lago con la familia.',
    transport: {
      bus: 'Lineas de Bus: Linea 20 (km. 13 Av. Bustillo) (30 min)',
      walking: true,
    },
  },
];

const BeachCard = ({ title, location, time, description, transport }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="tracking-tight text-xl font-semibold text-black">{title}</h3>
        <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
          <MapPin className="w-4 h-4 flex-shrink-0 text-gray-500" />
          {location}
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
          <Clock className="w-4 h-4 flex-shrink-0 text-gray-500" />
          {time}
        </p>
        <p className="text-sm text-gray-600 mt-4">{description}</p>
      </div>
      <div className="mt-auto pt-4">
        <h4 className="text-sm font-semibold mb-2 text-black">Cómo Llegar Desde Camping Los Coihues</h4>
        <div className="flex items-center flex-wrap gap-2 mb-2">
          {transport.walking && (
            <div className="inline-flex items-center justify-center rounded-md text-xs font-medium border border-input bg-background h-7 px-3">
              <Footprints className="w-3.5 h-3.5 mr-1.5" /> walking
            </div>
          )}
          {transport.bus && (
            <div className="inline-flex items-center justify-center rounded-md text-xs font-medium border border-input bg-background h-7 px-3">
              <Bus className="w-3.5 h-3.5 mr-1.5" /> bus
            </div>
          )}
          {transport.taxi && (
            <div className="inline-flex items-center justify-center rounded-md text-xs font-medium border border-input bg-background h-7 px-3">
              <Car className="w-3.5 h-3.5 mr-1.5" /> taxi
            </div>
          )}
        </div>
        {transport.bus && <p className="text-xs text-gray-600">{transport.bus}</p>}
      </div>
    </div>
  );
};

const BeachesLagos = () => {
  return (
    <section id="playas-y-lagos" className="mb-12">
      <h2 className="text-3xl font-bold text-black text-center mt-12 mb-8">Playas y Lagos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beachesData.map((beach) => (
          <BeachCard
            key={beach.title}
            title={beach.title}
            location={beach.location}
            time={beach.time}
            description={beach.description}
            transport={beach.transport}
          />
        ))}
      </div>
    </section>
  );
};

export default BeachesLagos;