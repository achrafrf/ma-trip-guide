'use client';

import Image from 'next/image';

const TechPartners = () => {
  const partners = [
    {
      name: 'Waze',
      // Waze Logo SVG URL
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Waze_logo_2022.png?20220606205242',
      width: 120
    },
    {
      name: 'Google Maps',
      // Google Maps Logo URL
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg',
      width: 80
    },
    {
      name: 'Booking.com',
      // Booking Logo URL
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg',
      width: 150
    },
    {
      name: 'GetYourGuide',
      // GetYourGuide Logo URL
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/GetYourGuide_company_logo.png/1402px-GetYourGuide_company_logo.png',
      width: 150
    },
    {
      name: 'OpenStreetMap',
      // OSM Logo URL
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Openstreetmap_logo.svg',
      width: 90
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">
            تكنولوجيا موثوقة
          </h2>
          <h3 className="text-3xl font-extrabold text-gray-900">
            نعتمد على أفضل التقنيات العالمية
          </h3>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            نستخدم أحدث تقنيات الخرائط والحجوزات لضمان رحلة آمنة وممتعة لك.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-14 md:gap-24  duration-500">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group relative flex items-center justify-center  transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <div className="relative h-14 w-auto flex items-center justify-center">
                {/* Image Component */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{ height: '40px', width: 'auto', maxHeight: '50px' }}
                  className="object-contain filter drop-shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPartners;