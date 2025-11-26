import Image from 'next/image';
import {
  MapPin,
  ArrowUpRight,
  Clock,
  Mountain as MountainIcon,
  TrendingUp,
  Footprints,
  Car,
  ExternalLink,
  MessageSquareText,
} from 'lucide-react';

const MultiDayPampaLinda = () => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-[#4A7C2C] mb-4 border-l-4 border-[#2D5016] pl-3">
        Pampa Linda (2hs de viaje)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card: Refugio Otto Meiling */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 animate-fadeIn cursor-pointer">
          <div className="relative overflow-hidden rounded-t-lg h-48">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/ce14ff50-5572-4532-bef3-f198b4593918-20.png"
              alt="Refugio Otto Meiling"
              width={400}
              height={192}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 backdrop-blur-sm bg-opacity-90">
                Reserva Requerida
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1">
              <div className="text-blue-500">
                <Footprints className="w-4 h-4" />
              </div>
              <div className="text-blue-500">
                <Car className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="tracking-tight text-xl font-semibold">Refugio Otto Meiling</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  Pampa Linda (2 hrs drive from Los Coihues)
                </p>
              </div>
              <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-orange-500 text-white text-xs px-2 py-0.5">
                Difícil
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">14 km</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">6 horas ida</span>
                </div>
                <div className="flex items-center gap-2">
                  <MountainIcon className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">1900m</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">1050m↑</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">
              El inicio del sendero está a pocos metros de la parada de autobuses en Pampa Linda, donde también...
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Cómo Llegar Desde Camping Los Coihues</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5">
                    <Car className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  </div>
                  <div>
                    <span className="font-bold block">Transfer Disponible (2 horas)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#2D5016] text-white hover:bg-[#2D5016]/90 h-10 px-4 py-2 flex items-center gap-2 uppercase">
                  LINK RESERVA (WHATSAPP)
                  <MessageSquareText className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card: Laguna Ilón */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 animate-fadeIn cursor-pointer">
          <div className="relative overflow-hidden rounded-t-lg h-48">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/97d3a735-4ca9-469c-ae6e-f35916080c6c-21.png"
              alt="Laguna Ilón"
              width={400}
              height={192}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 backdrop-blur-sm bg-opacity-90">
                No Requiere Reserva
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1">
              <div className="text-blue-500">
                <Footprints className="w-4 h-4" />
              </div>
              <div className="text-blue-500">
                <Car className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="tracking-tight text-xl font-semibold">Laguna Ilón</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  Pampa Linda (2 hrs drive from Los Coihues)
                </p>
              </div>
              <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-orange-500 text-white text-xs px-2 py-0.5">
                Difícil
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">14 km</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">4.5 horas ida</span>
                </div>
                <div className="flex items-center gap-2">
                  <MountainIcon className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">1385m</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">600m↑</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">
              El sendero comienza a pocos metros de la seccional de Guardaparque de Pampa Linda, transitando el mismo...
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Cómo Llegar Desde Camping Los Coihues</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5">
                    <Car className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  </div>
                  <div>
                    <span className="font-bold block">Transfer Disponible (2 horas)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#2D5016] text-white hover:bg-[#2D5016]/90 h-10 px-4 py-2 flex items-center gap-2 uppercase">
                  LINK RESERVA
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card: Refugio Agostino Rocca */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 animate-fadeIn cursor-pointer">
          <div className="relative overflow-hidden rounded-t-lg h-48">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e731e1f-39f2-40d4-a44c-c113637ed114-t-146180-lovable-app/assets/images/7cd264e6-e8b5-4596-afba-7ee9212621d5-22.png"
              alt="Refugio Agostino Rocca"
              width={400}
              height={192}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 backdrop-blur-sm bg-opacity-90">
                Reserva Requerida
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1">
              <div className="text-blue-500">
                <Footprints className="w-4 h-4" />
              </div>
              <div className="text-blue-500">
                <Car className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="tracking-tight text-xl font-semibold">Refugio Agostino Rocca</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  Pampa Linda (2 hrs drive from Los Coihues)
                </p>
              </div>
              <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-orange-500 text-white text-xs px-2 py-0.5">
                Difícil
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">14 km</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">5 horas ida</span>
                </div>
                <div className="flex items-center gap-2">
                  <MountainIcon className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">1432m</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span className="text-base font-semibold">680m↑</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">
              A pocos metros de la casa del Guardaparque, verás un cartel, una huella de auto y una tranquera que marc...
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Cómo Llegar Desde Camping Los Coihues</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5">
                    <Car className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  </div>
                  <div>
                    <span className="font-bold block">Transfer Disponible (2 horas)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#2D5016] text-white hover:bg-[#2D5016]/90 h-10 px-4 py-2 flex items-center gap-2 uppercase">
                  LINK RESERVA (WHATSAPP)
                  <MessageSquareText className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiDayPampaLinda;