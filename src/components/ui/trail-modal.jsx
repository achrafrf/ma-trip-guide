'use client';

import React from 'react';
import Image from 'next/image';
import { X, MapPin, ArrowUpRight, Clock, Mountain, TrendingUp, Footprints, Bus, Car, ExternalLink } from 'lucide-react';

const TrailModal = ({ trail, isOpen, onClose }) => {
  if (!isOpen || !trail) return null;

  // Generate Google Maps embed URL with the trail location
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dN8OV1c-P7Z6L8&q=${encodeURIComponent(trail.title + ' Bariloche Argentina')}&zoom=13`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-64 w-full">
          <Image
            src={trail.image}
            alt={trail.title}
            fill
            className="object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute top-4 left-4 flex gap-2">
            <div className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold ${trail.reservationColor} backdrop-blur-sm bg-opacity-90`}>
              {trail.reservation}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Title and difficulty */}
          <div className="flex justify-between items-start gap-4">
            <div>
              <h2 className="text-3xl font-bold text-black">{trail.title}</h2>
              <p className="text-base text-muted-foreground flex items-center gap-2 mt-2">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                {trail.location}
              </p>
            </div>
            <div className={`inline-flex items-center rounded-full border font-semibold ${trail.difficultyColor} text-white text-sm px-3 py-1 shrink-0`}>
              {trail.difficulty}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex flex-col items-center gap-2">
              <ArrowUpRight className="w-6 h-6 text-blue-500" />
              <span className="text-sm text-gray-600">Distancia</span>
              <span className="text-lg font-bold">{trail.stats.distance}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-6 h-6 text-blue-500" />
              <span className="text-sm text-gray-600">Duración</span>
              <span className="text-lg font-bold">{trail.stats.time}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mountain className="w-6 h-6 text-blue-500" />
              <span className="text-sm text-gray-600">Elevación</span>
              <span className="text-lg font-bold">{trail.stats.elevation}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-500" />
              <span className="text-sm text-gray-600">Desnivel</span>
              <span className="text-lg font-bold">{trail.stats.gain}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Descripción</h3>
            <p className="text-base text-gray-700 leading-relaxed">{trail.description}</p>
          </div>

          {/* How to get there */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Cómo Llegar Desde Camping Los Coihues</h3>
            <div className="space-y-3">
              {trail.accessType === 'walk' && (
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Footprints className="w-5 h-5 flex-shrink-0 text-blue-500 mt-0.5" />
                  <div>
                    <span className="font-bold block">Distancia a pie</span>
                    {trail.accessDetails && <span className="text-sm text-gray-600">{trail.accessDetails}</span>}
                  </div>
                </div>
              )}
              {trail.busRoute && (
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Bus className="w-5 h-5 flex-shrink-0 text-blue-500 mt-0.5" />
                  <div>
                    <span className="font-bold block">Bus</span>
                    <span className="text-sm text-gray-600">{trail.busRoute}</span>
                  </div>
                </div>
              )}
              {trail.taxiInfo && (
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Car className="w-5 h-5 flex-shrink-0 text-blue-500 mt-0.5" />
                  <div>
                    <span className="font-bold block">Taxi/Uber</span>
                    <span className="text-sm text-gray-600">{trail.taxiInfo}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Reservation Link */}
          {trail.reservationLink && (
            <div>
              <button 
                onClick={() => window.open(trail.reservationLink, '_blank')}
                className="w-full justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 py-2 flex items-center gap-2 uppercase"
              >
                LINK RESERVA
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Map Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Ubicación</h3>
            <div className="w-full h-80 rounded-lg overflow-hidden border border-gray-200">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={mapUrl}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailModal;
