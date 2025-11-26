import Image from 'next/image';
import { MapPin, ArrowUpRight, Clock, Mountain, TrendingUp, BusFront, Car } from 'lucide-react';

const hikesData = [
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/a210f1ff-a5c5-4288-a37a-33d461911db7-8.png',
    title: 'Cerro Llao Llao',
    location: 'Hotel Llao Llao (50 min by bus from Los Coihues)',
    difficulty: 'Fácil',
    difficultyClass: 'bg-easy-green',
    reservation: 'No Requiere Reserva',
    stats: {
      distance: '2.6 km',
      duration: '1 hora ida',
      altitude: '1080m',
      gain: '340m↑',
    },
    description: 'Tomando el bus 20, bajarse en la última parada en Hotel Llao Llao. De ahí caminas por la ruta 20 minutos hasta el comienzo del sendero. De ahí es 1 hr de caminata de leve subida en bosque de coihues y cipreses de 2,6 km. El esfuerzo se ve recompensado con una vista espectacular desde la cumbre, donde se pueden admirar el Lago Moreno, el Nahuel Huapi y la Cordillera de los Andes. Después de disfrutar del mirador, el sendero desciende y permite completar el circuito de manera circular, pasando por más tramos de bosque y pequeñas playas a orillas del lago.',
    transport: {
      bus: 'Línea Bus - Línea 50 (desde Coihues) conectando con Linea 20 (Av. Bustillo) (50 min)',
      taxi: 'Taxi/Uber disponible (35 min)',
    },
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/291df6e4-5c22-4747-85e4-d706e969db6b-9.png',
    title: 'Cerro Otto & Piedra de Habsburgo',
    location: 'Cerro Otto base (20 min drive)',
    difficulty: 'Moderado',
    difficultyClass: 'bg-moderate-yellow',
    reservation: 'No Requiere Reserva',
    stats: {
      distance: '3 km',
      duration: '2 horas ida',
      altitude: '1405m',
      gain: '622m↑',
    },
    description: 'Para llegar al Cerro Otto desde Camping Los Coihues, puedes tomar el colectivo 50 en la avenida principal y bajarte en la parada cercana a la Estación Inferior del Teleférico, en el kilómetro 5 de la Avenida de los Pioneros. Desde allí, puedes subir en teleférico o hacer la caminata hasta la cumbre. Si vas en auto, sigue la Ruta 82 y luego toma la Avenida de los Pioneros hasta el acceso al teleférico, donde puedes dejar el vehículo o continuar hasta la cumbre por el camino de ripio.',
    transport: {
      bus: 'Línea Bus - Línea 50 (25 min)',
      taxi: 'Taxi/Uber disponible (15 min)',
    },
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/1f6daf6e-7023-4399-9b7b-85dee316066e-10.png',
    title: 'Cerro Campanario',
    location: 'Base of Cerro Campanario (25 min bus ride)',
    difficulty: 'Fácil',
    difficultyClass: 'bg-easy-green',
    reservation: 'No Requiere Reserva',
    stats: {
      distance: '2 km',
      duration: '45 min ida',
      altitude: '1080m',
      gain: '280m↑',
    },
    description: 'Tienes que tomar el bus 50 desde los Coihues hasta la rotonda de Av. Pioneros y luego, conectar con el bus 20 en Av. Bustillo en el km 8. Luego, bajate en el km 17.5 donde se encuentra la aerosilla al cerro campanario. En la cumbre hay una confitería, sanitarios, y un mirador desde el cual se pueden observar los lagos Nahuel Huapi y Moreno, la laguna El Trébol, la península San Pedro, la Isla Victoria, los cerros Otto, López, Goye, Bella Vista, Catedral, Capilla, el Hotel Llao Llao y las arboledas de Colonia Suiza.',
    transport: {
      bus: 'Línea Bus - Línea 50 (desde Coihues) + Línea 20 (Av. Bustillo) (40 min)',
      taxi: 'Taxi/Uber disponible (35 min)',
    },
  },
];

const DayHikesBus = () => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-forest-light mb-4 border-l-4 border-primary pl-3">
        Cerca en Bus o Uber
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hikesData.map((hike, index) => (
          <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col">
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <Image
                src={hike.image}
                alt={hike.title}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-secondary text-secondary-foreground backdrop-blur-sm bg-opacity-90">
                  {hike.reservation}
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1">
                <div className="text-blue-accent">
                  <BusFront className="w-4 h-4" />
                </div>
                <div className="text-blue-accent">
                  <Car className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="tracking-tight text-xl font-semibold">{hike.title}</h4>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    {hike.location}
                  </p>
                </div>
                <div className={`inline-flex items-center rounded-full border-transparent font-semibold text-white text-xs px-2 py-0.5 ${hike.difficultyClass}`}>
                  {hike.difficulty}
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex-grow flex flex-col">
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-blue-accent" />
                    <span className="text-base font-semibold">{hike.stats.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0 text-blue-accent" />
                    <span className="text-base font-semibold">{hike.stats.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 flex-shrink-0 text-blue-accent" />
                    <span className="text-base font-semibold">{hike.stats.altitude}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 flex-shrink-0 text-blue-accent" />
                    <span className="text-base font-semibold">{hike.stats.gain}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{hike.description}</p>
              <div className="mt-auto">
                <h5 className="text-sm font-semibold mb-2">Cómo Llegar Desde Camping Los Coihues</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <BusFront className="w-4 h-4 flex-shrink-0 text-blue-accent" />
                    </div>
                    <p className="text-muted-foreground">{hike.transport.bus}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <Car className="w-4 h-4 flex-shrink-0 text-blue-accent" />
                    </div>
                    <p className="text-muted-foreground">{hike.transport.taxi}</p>
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

export default DayHikesBus;