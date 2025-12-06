'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Send, Loader2, CheckCircle 
} from 'lucide-react';

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden flex flex-col">
      <Header />
      
      {/* ================= MAIN SECTION (RED & WHITE SPLIT) ================= */}
      {/* زدنا pt-32 باش يهبط الفورم لتحت ومايتغطاش بالهيدر حيت حيدنا السيكشن لولة */}
      <section className="relative bg-white pt-32 pb-16 flex-grow">
        
        {/* ✅ الخلفية الحمراء (Top Red Layer) */}
        <div className="absolute top-0 left-0 w-full h-[60%] lg:h-[70%] bg-[#C1272D] overflow-hidden">
             
             {/* ✅ 3 خطوط خضرين و قد قد (Green Stripes) */}
             <div className="absolute inset-0 pointer-events-none">
                {/* الخط الأول */}
                <div className="absolute -top-20 left-[10%] w-24 h-[200%] bg-[#006233] opacity-40 rotate-12 transform origin-top-left mix-blend-multiply"></div>
                {/* الخط الثاني */}
                <div className="absolute -top-20 left-[30%] w-24 h-[200%] bg-[#006233] opacity-40 rotate-12 transform origin-top-left mix-blend-multiply"></div>
                {/* الخط الثالث */}
                <div className="absolute -top-20 left-[50%] w-24 h-[200%] bg-[#006233] opacity-40 rotate-12 transform origin-top-left mix-blend-multiply"></div>
             </div>

             {/* Texture خفيفة */}
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                
                {/* LEFT: CONTENT */}
                <motion.div {...fadeInUp} className="flex flex-col justify-between h-full pt-10">
                    
                    {/* Top Text (Black on Red) */}
                    <div className="text-gray-900 mb-16 lg:mb-0">
                        <span className="text-white/90 font-bold tracking-widest text-xs uppercase">Ask us anything</span>
                        <h1 className="text-5xl md:text-7xl font-black mt-4 leading-tight drop-shadow-sm">
                            SHARE YOUR 📩 <br/>
                            MESSAGE & WE'LL <br/>
                            RESPOND
                        </h1>
                    </div>

                    {/* Bottom Text (Black on White) */}
                    <div className="text-gray-900 mt-10 lg:mt-32 space-y-6">
                        <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                            MA TRIP GUIDE thrives on open communication! Whether you have a question about our trails, partnerships, or travel tips.
                        </p>
                        
                        <div className="border-t border-gray-100 pt-6">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative">
                                         <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Support" fill className="object-cover"/>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative">
                                         <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="Support" fill className="object-cover"/>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-[#006233] flex items-center justify-center text-[10px] font-bold text-white relative">
                                        Help
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 text-lg">Here to help</h5>
                                    <p className="text-gray-400 text-sm">Our Friendly Team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: FORM CARD */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="bg-white rounded-[2.5rem] p-8 md:p-12 text-gray-900 shadow-2xl shadow-gray-200 relative"
                >
                    {/* ✅ STAR IMAGE (Top Right) */}
                    <div className="absolute -top-10 -right-10 w-28 h-28 z-20 pointer-events-none">
                        {/* تأكد أن الصورة موجودة في public/star.png */}
                        <Image 
                            src="/star.png" 
                            alt="Star Decoration" 
                            width={120} 
                            height={120} 
                            className="object-contain drop-shadow-xl"
                        />
                    </div>

                    <div className="mb-8">
                        <h3 className="text-3xl font-black mb-2">Get in Touch</h3>
                        <p className="text-gray-500 text-sm">Please fill out the form below.</p>
                    </div>

                    {isSent ? (
                        <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center py-16">
                            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-green-800">Message Sent!</h3>
                            <p className="text-green-600 mt-2">We will get back to you soon.</p>
                            <button onClick={() => setIsSent(false)} className="mt-6 text-sm font-bold underline">Send another</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 ml-1">Name <span className="text-[#C1272D]">*</span></label>
                                <input 
                                    type="text" required placeholder="Enter your name"
                                    value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C1272D]/20 focus:border-[#C1272D] transition-all"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 ml-1">Email <span className="text-[#C1272D]">*</span></label>
                                <input 
                                    type="email" required placeholder="example@email.com"
                                    value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C1272D]/20 focus:border-[#C1272D] transition-all"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                <input 
                                    type="tel" placeholder="+212 6..."
                                    value={formState.phone} onChange={(e) => setFormState({...formState, phone: e.target.value})}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C1272D]/20 focus:border-[#C1272D] transition-all"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                                <textarea 
                                    rows="4" placeholder="Leave us a message..."
                                    value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C1272D]/20 focus:border-[#C1272D] transition-all resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" disabled={isSubmitting}
                                className="w-full bg-black hover:bg-gray-900 text-white font-bold py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 active:scale-[0.98] mt-4"
                            >
                                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin"/> : <Send className="w-5 h-5"/>}
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </motion.div>

            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}