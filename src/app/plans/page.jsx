'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/sections/footer';

// --- SVGs Icons ---
const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);
const VerifiedIcon = () => (
  <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const LockIcon = () => (
    <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
);
// Dynamic Icon based on mode
const ModeIcon = ({ mode }) => {
  if (mode === 'football') return <svg className="w-5 h-5 text-[#C1272D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>;
  if (mode === 'tourism') return <svg className="w-5 h-5 text-[#C1272D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
  return <svg className="w-5 h-5 text-[#C1272D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>; // Activity/Fun icon
};
const CheckIcon = ({color = "text-green-500"}) => (
  <svg className={`w-5 h-5 ${color} mr-3 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
);
const XIcon = () => (
  <svg className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);
const TicketIcon = () => (
  <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
);

// --- CONTENT MAPPING (3 MODES) ---
const contentMap = {
  football: {
    heroBadge: "AFCON 2025 HUB",
    heroTitlePre: "Ready for",
    heroTitleHighlight: "The Cup?",
    heroDesc: "The ultimate guide for Fans. Stadiums, transport & safety.",
    ctaPrimary: "Find My Stadium",
    ctaSecondary: "Survival Kit",
    stats: [ { val: "24", label: "Teams" }, { val: "6", label: "Cities" }, { val: "30", label: "Days" }, { val: "100%", label: "Verified" } ],
    citiesTitle: "Host Cities",
    citiesSub: "Where is your team playing?",
    cityLabel: "Stadium",
    bgImage: "url('https://images.unsplash.com/photo-1504068367988-c7743d4638a5?auto=format&fit=crop&w=1920&q=80')",
    leadMagnetTitle: "Don't Miss Ticket Drops",
    leadMagnetDesc: "Get notified instantly when official tickets and hotel deals are released.",
    trustText: "Trusted by 2,500+ Fans",
    packName: "AFCON 2025"
  },
  tourism: {
    heroBadge: "MOROCCO TRAVEL",
    heroTitlePre: "Discover",
    heroTitleHighlight: "Magic",
    heroDesc: "Skip tourist traps. Authentic Riads, food & hidden gems.",
    ctaPrimary: "Top Destinations",
    ctaSecondary: "Travel Guide",
    stats: [ { val: "4", label: "Imp. Cities" }, { val: "12", label: "Regions" }, { val: "365", label: "Sunny Days" }, { val: "4.9/5", label: "Rating" } ],
    citiesTitle: "Top Destinations",
    citiesSub: "Plan your perfect Moroccan getaway.",
    cityLabel: "Must See",
    bgImage: "url('https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1920&q=80')",
    leadMagnetTitle: "Unlock Hidden Gems",
    leadMagnetDesc: "Join our community to get exclusive discounts on Riads and Tours.",
    trustText: "Used by 10,000+ Travelers",
    packName: "MOROCCO TRAVEL"
  },
  activities: {
    heroBadge: "ADVENTURE TIME",
    heroTitlePre: "Live The",
    heroTitleHighlight: "Action",
    heroDesc: "Quad biking, Surfing, Cooking classes. Book the best activities.",
    ctaPrimary: "Find Activities",
    ctaSecondary: "Activity Pass",
    stats: [ { val: "50+", label: "Activities" }, { val: "20%", label: "Discount" }, { val: "24/7", label: "Support" }, { val: "5★", label: "Fun" } ],
    citiesTitle: "Adventure Spots",
    citiesSub: "Where is the action happening?",
    cityLabel: "Top Spot",
    bgImage: "url('https://images.unsplash.com/photo-1531519754294-27921a8d5423?auto=format&fit=crop&w=1920&q=80')", // Desert/Quad image
    leadMagnetTitle: "Get Promo Codes",
    leadMagnetDesc: "Save up to 30% on activities with our exclusive weekly deals.",
    trustText: "Approved by Adrenaline Junkies",
    packName: "ACTIVITY PASS"
  }
};

const citiesData = [
  { id: 1, city: "Casablanca", footballPlace: "Mohammed V Stadium", tourismPlace: "Hassan II Mosque", activitiesPlace: "Surf at Ain Diab", vibe: "The Metropolis", image: "https://images.unsplash.com/photo-1574614926569-459eb5383df6?auto=format&fit=crop&w=800&q=80", features: ["Near Airport", "Nightlife Central", "Shopping"], price: "From $29" },
  { id: 2, city: "Rabat", footballPlace: "Prince Moulay Abdellah", tourismPlace: "Hassan Tower", activitiesPlace: "Jet Ski at Marina", vibe: "Capital History", image: "https://images.unsplash.com/photo-1594917382025-a4968c92a95c?auto=format&fit=crop&w=800&q=80", features: ["Safe & Clean", "High-End Hotels", "Tramway Access"], price: "From $25" },
  { id: 3, city: "Tangier", footballPlace: "Ibn Batouta Stadium", tourismPlace: "Hercules Caves", activitiesPlace: "Camel Ride on Beach", vibe: "Gateway to Europe", image: "https://images.unsplash.com/photo-1569420951336-2244a2c56a84?auto=format&fit=crop&w=800&q=80", features: ["Beach Vibes", "TGV Connection", "Spanish Influence"], price: "From $25" },
  { id: 4, city: "Marrakech", footballPlace: "Grand Stade Marrakech", tourismPlace: "Jemaa el-Fnaa", activitiesPlace: "Agafay Desert Quad", vibe: "The Red City", image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=800&q=80", features: ["Tourist Favorite", "Luxury Riads", "Desert Trips"], price: "From $35" },
];

export default function LandingPage() {
  const [email, setEmail] = useState('');
  // 3 Modes: 'football', 'tourism', 'activities'
  const [mode, setMode] = useState('football'); 
  
  const content = contentMap[mode];

  // Helper to get location based on mode
  const getCityPlace = (city) => {
    if (mode === 'football') return city.footballPlace;
    if (mode === 'tourism') return city.tourismPlace;
    return city.activitiesPlace;
  };

  // --- DYNAMIC PRICING PLANS (Defined INSIDE to access 'mode') ---
  const pricingPlans = [
    {
        id: 1,
        name: "Silver Pack",
        price: "$9.99",
        desc: "The Essentials for budget travelers.",
        color: "from-gray-500 to-gray-700",
        badge: "Basic",
        isPopular: false,
        features: [
            // Logic: Football ? Tourism ? Activities ?
            { text: mode === 'football' ? "Stadium Map PDF" : (mode === 'tourism' ? "City Guide PDF" : "Activity List PDF"), included: true },
            { text: "Transport Tips", included: true },
            { text: mode === 'activities' ? "Direct Booking Links" : "Safety Guide", included: true },
            { text: mode === 'activities' ? "Discount Codes (5%)" : "Scam Avoidance", included: false },
            { text: "WhatsApp Support", included: false }
        ]
    },
    {
        id: 2,
        name: "Gold Pack",
        price: "$19.99",
        desc: "Best value. Everything you need.",
        color: "from-yellow-400 to-amber-600",
        badge: "🔥 Best Seller",
        isPopular: true, 
        features: [
            { text: mode === 'football' ? "Stadium Map PDF" : (mode === 'tourism' ? "City Guide PDF" : "Activity List PDF"), included: true },
            { text: "Transport Tips", included: true },
            { text: mode === 'activities' ? "Discount Codes (20%)" : "Interactive Map Links", included: true },
            { text: mode === 'activities' ? "VIP Reservation Access" : "Hidden Gems List", included: true },
            { text: "Audio Phrasebook (Darija)", included: true }
        ]
    },
    {
        id: 3,
        name: "Platinum VIP",
        price: "$49.99",
        desc: "For those who want zero stress.",
        color: "from-purple-500 to-indigo-600",
        badge: "VIP Only",
        isPopular: false,
        features: [
            { text: "Everything in Gold Pack", included: true },
            { text: "Priority WhatsApp Support", included: true },
            { text: mode === 'activities' ? "We Book For You" : "Custom Itinerary", included: true },
            { text: "1-on-1 Planning Call", included: true },
            { text: "Cancel Anytime Protection", included: true }
        ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;600;700&display=swap');
        .font-sport { font-family: 'Anton', sans-serif; letter-spacing: 0.05em; }
        .font-body { font-family: 'Inter', sans-serif; }
        .clip-slant { clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%); }
        .clip-slant-reverse { clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%); }
        .hero-bg { transition: background-image 0.5s ease-in-out; }
      `}</style>

      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-4 py-4 md:px-6 flex justify-between items-center">
         <Link href="/" className="bg-white/90 backdrop-blur text-[#006233] px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm hover:bg-white transition shadow-lg">
            ← Back
         </Link>
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center bg-[#1a1a1a] clip-slant pb-12 md:pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay hero-bg duration-700"
          style={{ backgroundImage: content.bgImage }} 
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#C1272D]/30 to-[#006233]/40"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center pt-20 md:pt-0">
            
            {/* --- 3-WAY SWITCHER --- */}
            <div className="flex justify-center mb-6 md:mb-8 relative z-50">
                <div className="bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/20 flex relative shadow-2xl items-center gap-1">
                    <button 
                        onClick={() => setMode('football')}
                        className={`px-3 md:px-6 py-2 rounded-full font-bold text-[10px] md:text-xs transition-all duration-300 flex items-center gap-1 cursor-pointer ${mode === 'football' ? 'bg-[#C1272D] text-white shadow-lg scale-105' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
                    >
                        ⚽ AFCON
                    </button>
                    <button 
                        onClick={() => setMode('tourism')}
                        className={`px-3 md:px-6 py-2 rounded-full font-bold text-[10px] md:text-xs transition-all duration-300 flex items-center gap-1 cursor-pointer ${mode === 'tourism' ? 'bg-[#006233] text-white shadow-lg scale-105' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
                    >
                        🏖️ TRIP
                    </button>
                    <button 
                        onClick={() => setMode('activities')}
                        className={`px-3 md:px-6 py-2 rounded-full font-bold text-[10px] md:text-xs transition-all duration-300 flex items-center gap-1 cursor-pointer ${mode === 'activities' ? 'bg-amber-600 text-white shadow-lg scale-105' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
                    >
                        🏄 FUN
                    </button>
                </div>
            </div>

            <div key={mode} className="animate-fade-in-up">
                <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/80 text-[10px] md:text-xs tracking-[0.2em] mb-3 uppercase backdrop-blur-sm">
                    {content.heroBadge}
                </span>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-sport text-white mb-3 uppercase leading-[0.9] drop-shadow-2xl">
                    {content.heroTitlePre} <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1272D] to-white">{content.heroTitleHighlight}</span>
                </h1>
                <p className="text-sm md:text-2xl text-gray-200 mb-6 max-w-xl mx-auto font-body font-light px-2 leading-relaxed">
                    {content.heroDesc}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-10 w-full px-2">
                    <a href="#cities" className="w-full sm:w-auto bg-[#C1272D] hover:bg-[#a01f24] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg shadow-lg shadow-red-900/50 uppercase tracking-wide">
                        {content.ctaPrimary}
                    </a>
                    <a href="#pricing" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-slate-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg shadow-lg flex items-center justify-center gap-2">
                        <TicketIcon />
                        {content.ctaSecondary}
                    </a>
                </div>
            </div>
            
             {/* Stats */}
             <div className="mt-8 hidden md:grid grid-cols-4 gap-4 max-w-3xl mx-auto text-white/90">
                {content.stats.map((stat, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur p-3 rounded-lg border border-white/10">
                        <div className="text-2xl font-sport">{stat.val}</div>
                        <div className="text-[10px] uppercase opacity-70">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* --- CITIES GRID --- */}
      <section id="cities" className="py-12 md:py-20 container mx-auto px-4 -mt-8 md:-mt-20 relative z-20">
        <div className="mb-6 px-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-sport text-slate-900 uppercase">{content.citiesTitle}</h2>
            <p className="text-sm text-slate-500 mt-1">{content.citiesSub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {citiesData.map((city) => (
                <div key={city.id} className="bg-white rounded-xl overflow-hidden shadow-xl border border-slate-100">
                    <div className="h-40 md:h-48 overflow-hidden relative">
                        <img src={city.image} alt={city.city} className="w-full h-full object-cover" />
                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-[#C1272D] flex items-center gap-1">
                           <ModeIcon mode={mode} /> {content.cityLabel}
                        </div>
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3">
                            <h3 className="text-white font-sport text-xl uppercase tracking-wide">{city.city}</h3>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-600 uppercase">{city.vibe}</span>
                            <span className="text-xs font-bold text-green-600">{city.price}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                             <CheckIcon color="text-gray-400 h-3 w-3 mr-1" />
                             {getCityPlace(city)}
                        </p>
                        <button className="w-full py-2.5 border-2 border-[#1e293b] text-[#1e293b] font-bold rounded-lg hover:bg-[#1e293b] hover:text-white transition-colors uppercase text-xs tracking-widest">
                            {mode === 'football' ? `Plan ${city.city}` : `View ${city.city}`}
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* --- PRICING GRID SECTION --- */}
      <section id="pricing" className="bg-[#1e293b] py-16 text-white clip-slant-reverse relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-500 to-transparent"></div>
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10">
                <span className="text-[#006233] font-bold uppercase tracking-widest text-xs bg-white/10 px-3 py-1 rounded-full">
                    {content.packName} PACKS
                </span>
                <h2 className="text-3xl md:text-5xl font-sport uppercase mt-2">Choose Your Plan</h2>
                <p className="text-gray-400 mt-2 text-sm max-w-lg mx-auto">Instant download. Verified local information. Money-back guarantee.</p>
            </div>

            {/* Key={mode} is CRITICAL here. It forces React to destroy and rebuild the grid when mode changes */}
            <div key={mode} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-6xl mx-auto animate-fade-in-up">
                {pricingPlans.map((plan) => (
                    <div 
                        key={plan.id}
                        className={`relative rounded-2xl overflow-hidden transition-all duration-300 
                            ${plan.isPopular 
                                ? 'bg-slate-800 border-2 border-yellow-500 shadow-2xl scale-100 md:scale-105 z-10' 
                                : 'bg-slate-900 border border-white/10 shadow-lg scale-95 md:scale-100 opacity-90 hover:opacity-100'
                            }
                        `}
                    >
                        {plan.isPopular && (
                            <div className="absolute top-0 left-0 w-full bg-yellow-500 text-black text-center text-xs font-bold uppercase py-1 tracking-widest">
                                Most Popular
                            </div>
                        )}

                        <div className="p-6 md:p-8 flex flex-col h-full">
                            <div className="mb-4 mt-2">
                                <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase text-white mb-2 bg-gradient-to-r ${plan.color}`}>
                                    {plan.badge}
                                </span>
                                <h3 className="text-xl font-bold">{plan.name}</h3>
                                <div className="text-3xl font-sport mt-2">{plan.price}</div>
                                <p className="text-gray-400 text-xs mt-1">{plan.desc}</p>
                            </div>

                            <div className="w-full h-px bg-white/10 my-4"></div>

                            <ul className="space-y-3 mb-6 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={`flex items-start text-sm ${feature.included ? 'text-gray-200' : 'text-gray-600'}`}>
                                        {feature.included ? <CheckIcon color="text-green-500" /> : <XIcon />}
                                        <span className="text-xs md:text-sm">{feature.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-bold text-sm md:text-base shadow-lg uppercase tracking-wide transition-all bg-gradient-to-r ${plan.color} hover:brightness-110 text-white mt-auto`}>
                                Get Access Now
                            </button>
                            
                            <div className="text-center mt-3 text-[10px] text-gray-500 flex justify-center items-center gap-1">
                                <LockIcon /> Instant • Secure
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* --- LEAD MAGNET --- */}
      <section className="py-12 container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-sport uppercase text-slate-900 mb-3">{content.leadMagnetTitle}</h2>
        <p className="text-sm text-slate-500 mb-6 max-w-sm mx-auto">{content.leadMagnetDesc}</p>
        
        <form className="max-w-sm mx-auto flex flex-col sm:flex-row gap-2">
            <input 
                type="email" 
                placeholder="Enter email for updates" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#C1272D]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                Join
            </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}