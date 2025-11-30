'use client'; 

import React, { useRef } from 'react';
import Link from 'next/link';

// --- Icons ---
const CheckIcon = () => (
  <svg className="w-4 h-4 text-[#006233] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
);
const StarIcon = () => (
  <svg className="w-4 h-4 text-[#C1272D] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
);
const ChevronLeft = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
);
const ChevronRight = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);

// --- Moroccan Pattern ---
const ZelligePattern = () => (
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0" 
         style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23006233' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
    </div>
);

// --- Data ---
const travelPlans = [
  {
    id: 1,
    title: "Imperial Cities",
    sub: "Fes • Meknes • Rabat",
    price: "29",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80",
    popular: false,
    rating: "4.9",
    features: ["Ancient Medina Maps", "Best Riads Guide", "Authentic Food Spots"],
  },
  {
    id: 2,
    title: "Sahara Magic",
    sub: "Merzouga • Canyons",
    price: "49",
    image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=80",
    popular: true, 
    rating: "5.0",
    features: ["Luxury Camp Booking", "Camel Trek Tips", "Private Driver Contact"],
  },
  {
    id: 3,
    title: "Atlantic Vibes",
    sub: "Essaouira • Taghazout",
    price: "34",
    image: "https://images.unsplash.com/photo-1580665985834-e465366ba7b7?auto=format&fit=crop&w=800&q=80",
    popular: false,
    rating: "4.8",
    features: ["Surf Spots Map", "Seafood Restaurants", "Sunset Viewpoints"],
  },
  {
    id: 4,
    title: "Atlas Trekking",
    sub: "Imlil • Toubkal",
    price: "39",
    image: "https://images.unsplash.com/photo-1605218457298-65977926dc34?auto=format&fit=crop&w=800&q=80",
    popular: false,
    rating: "4.9",
    features: ["Hiking Trails PDF", "Refuge Contacts", "Gear Checklist"],
  },
  {
    id: 5,
    title: "Marrakech Insider",
    sub: "Red City Secrets",
    price: "19",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=800&q=80",
    popular: false,
    rating: "4.7",
    features: ["Souk Shopping Guide", "Hidden Gardens", "Rooftop Dining"],
  }
];

export default function MoroccoTravelPage() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 340; 
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-gray-800">
      
      {/* Import Permanent Marker (Brush) & other fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Playfair+Display:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap');
        
        .font-brush { font-family: 'Permanent Marker', cursive; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        .arch-shape { border-radius: 200px 200px 10px 10px; }
        
        .slider-mask {
            mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>

      {/* Back to Home Button - Green for Safety/Home */}
            <div className="fixed top-6 left-6 z-50">
              <Link 
                href="/"
                className="group inline-flex items-center text-white bg-[#006233] hover:bg-[#004d28] shadow-lg px-5 py-2 rounded-full transition-all duration-300 border border-[#006233] font-hand text-xl tracking-wide"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>

      {/* --- HERO SECTION --- */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549140600-78c9b8275e03?auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 to-[#FDFBF7]"></div>
        
        {/* Title Section (Updated with Brush Font) */}
        <div className="absolute top-4 w-full text-center z-20 px-4">
             {/* Logo Style */}
             <h1 className="text-5xl md:text-7xl tracking-wider font-brush transform -rotate-2 drop-shadow-lg mb-2">
                <span className='text-[#C1272D] drop-shadow-sm'>MA</span> <span className="text-white">TRIP</span> <span className='text-[#006233] drop-shadow-sm'>GUIDE</span>
            </h1>
            <p className="text-white/90 mt-4 font-serif italic text-lg tracking-wide">
                Your Authentic Moroccan Adventure
            </p>
        </div>
      </div>

      {/* --- SLIDER SECTION --- */}
      <div className="relative z-30 -mt-80 max-w-[1600px] mx-auto px-0 md:px-8 pb-20">
        <ZelligePattern />
        
        {/* Controls */}
        <div className="absolute top-[55%] -translate-y-1/2 left-2 md:left-6 z-50 hidden md:block">
            <button onClick={() => scroll('left')} className="bg-white/90 hover:bg-[#C1272D] hover:text-white text-[#C1272D] p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm border border-gray-100">
                <ChevronLeft />
            </button>
        </div>
        <div className="absolute top-[55%] -translate-y-1/2 right-2 md:right-6 z-50 hidden md:block">
            <button onClick={() => scroll('right')} className="bg-white/90 hover:bg-[#C1272D] hover:text-white text-[#C1272D] p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm border border-gray-100">
                <ChevronRight />
            </button>
        </div>

        {/* Slider */}
        <div className="slider-mask py-6 px-4 md:px-12">
            <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide items-stretch py-4"
            >
                <div className="w-1 md:w-4 flex-shrink-0"></div>

                {travelPlans.map((plan) => (
                <div key={plan.id} className="flex-shrink-0 snap-center w-[85vw] md:w-[320px]">
                    <div className={`
                        relative bg-white h-full flex flex-col transition-all duration-500 hover:-translate-y-3 group
                        rounded-t-[160px] rounded-b-2xl shadow-xl hover:shadow-2xl
                        ${plan.popular ? 'border-2 border-[#C1272D]' : 'border border-gray-100'}
                    `}>
                        {/* Bestseller */}
                        {plan.popular && (
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 bg-[#C1272D] text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg font-sans">
                                Bestseller
                            </div>
                        )}

                        <div className="h-48 overflow-hidden relative rounded-t-[160px] m-2">
                            <img 
                                src={plan.image} 
                                alt={plan.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            
                            {/* Rating */}
                            <div className="absolute bottom-3 right-3 flex items-center bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg shadow-sm">
                                <StarIcon />
                                <span className="text-gray-800 text-xs font-bold ml-1">{plan.rating}</span>
                            </div>
                        </div>

                        <div className="p-5 pt-2 flex flex-col flex-grow text-center">
                            {/* Title Hover - Red */}
                            <h3 className="font-serif text-2xl font-bold text-[#1e293b] group-hover:text-[#C1272D] transition-colors">{plan.title}</h3>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-4 font-sans">{plan.sub}</p>
                            
                            {/* Divider - Green */}
                            <div className="w-8 h-[3px] bg-[#006233] opacity-20 mx-auto mb-4 rounded-full"></div>

                            <ul className="space-y-2 mb-6 text-left px-2">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-600 text-xs font-medium">
                                        <CheckIcon />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <div className="flex justify-center items-center gap-1 mb-3">
                                    <span className="text-sm font-bold text-gray-400">$</span>
                                    <span className="text-3xl font-serif font-bold text-[#C1272D]">{plan.price}</span>
                                    <span className="text-xs text-gray-400">.99</span>
                                </div>
                                <button className="w-full bg-[#006233] hover:bg-[#004d28] text-white py-3 rounded-xl font-bold transition-colors duration-300 shadow-lg hover:shadow-green-900/20 text-sm uppercase tracking-wide flex justify-center items-center gap-2 group-hover:gap-3">
                                    Get Plan 
                                    <span className="transition-all">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                
                <div className="w-1 md:w-4 flex-shrink-0"></div>
            </div>
        </div>
      </div>

      {/* --- WHY CHOOSE US --- */}
      <section className="pb-20 pt-10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e293b] mb-4">Authentic Experiences</h2>
            <p className="text-gray-500 mb-12 max-w-2xl mx-auto">We don't just give you a map. We give you the keys to the real Morocco.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#006233]/5 rounded-bl-[100px] transition-all group-hover:scale-150"></div>
                    <div className="w-14 h-14 bg-[#e6f0eb] text-[#006233] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl relative z-10">🌿</div>
                    <h3 className="text-lg font-bold mb-2">Hidden Gems</h3>
                    <p className="text-sm text-gray-500">Places tourists miss. Secret gardens and local eateries.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#C1272D]/5 rounded-bl-[100px] transition-all group-hover:scale-150"></div>
                    <div className="w-14 h-14 bg-[#f9e9ea] text-[#C1272D] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl relative z-10">💎</div>
                    <h3 className="text-lg font-bold mb-2">Premium Tips</h3>
                    <p className="text-sm text-gray-500">Best time to visit spots to avoid crowds and get best photos.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#1e293b]/5 rounded-bl-[100px] transition-all group-hover:scale-150"></div>
                    <div className="w-14 h-14 bg-gray-100 text-[#1e293b] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl relative z-10">🤝</div>
                    <h3 className="text-lg font-bold mb-2">Trusted Locals</h3>
                    <p className="text-sm text-gray-500">Created by Moroccans who love their country.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}