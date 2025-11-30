'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/sections/footer';


// --- Assets & Icons ---
const ZelligePattern = () => (
    <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" 
         style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23006233' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
    </div>
);

const VisaLogo = () => (
  <svg className="h-4 md:h-6 w-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4615 30.2769L21.3231 12H25.8462L21.4154 30.2769H18.4615ZM31.6923 12.3077C31.2 12.1385 29.5692 11.9692 27.6 11.9692C23.3231 11.9692 20.2769 14.2462 20.2462 17.5077C20.2154 20.0308 22.4923 21.4462 24.2154 22.2769C25.9846 23.1385 26.5692 23.6923 26.5692 24.5231C26.5692 25.8154 25.0308 26.3846 23.6 26.3846C21.9385 26.3846 21.0154 25.9385 20.2462 25.6L19.5385 28.8C20.4615 29.2154 22.1846 29.5692 24.0308 29.5846C28.4923 29.5846 31.4462 27.3846 31.4769 24.0308C31.5077 22.1538 30.2769 20.7077 27.2 19.2308C25.7538 18.5077 24.8923 18.0615 24.8923 17.2615C24.8923 16.4 25.8462 15.4923 27.7231 15.4923C29.2923 15.4615 30.3385 15.8308 30.9538 16.1077L31.6923 12.3077ZM41.0769 30.2769H45.0462L41.5077 12H37.8154C36.9846 12 36.2769 12.4769 35.9692 13.2L30.6462 30.2769H35.1385L36.0615 27.7538H41.6L42.0615 30.2769H41.0769ZM37.2308 24.6462L39.1385 19.3385L40.2462 24.6462H37.2308ZM14.9231 30.2769L11.5692 12H7.93846C7.93846 12 5.38462 25.3231 5.26154 26.0615C4.24615 22.2 2.06154 17.5231 2.06154 17.5231H6.18462L9.29231 24.0308L11.5385 12H14.9231V30.2769Z" fill="#1434CB"/></svg>
);

const MastercardLogo = () => (
  <svg className="h-4 md:h-6 w-auto" viewBox="0 0 32 20" fill="none"><circle cx="10" cy="10" r="10" fill="#EB001B"/><circle cx="22" cy="10" r="10" fill="#F79E1B"/><path d="M22 10C22 13.95 19.94 17.43 16.83 19.48C18.36 19.82 19.94 20 21.6 20C27.12 20 31.6 15.52 31.6 10C31.6 4.48 27.12 0 21.6 0C19.94 0 18.36 0.18 16.83 0.52C19.94 2.57 22 6.05 22 10Z" fill="#FF5F00"/></svg>
);

const PaypalLogo = () => (
  <svg className="h-4 md:h-6 w-auto" viewBox="0 0 24 24" fill="currentColor" style={{color: '#003087'}}><path d="M7.076 21.337l.756-4.793h-1.564l-.756 4.793h1.564zm8.682-15.006c-.846-3.56-5.83-3.692-5.83-3.692H5.666L2.33 21.337h4.84l.87-5.513h2.646c4.697 0 7.828-2.296 8.783-6.666.257-1.177.17-2.18-.715-2.827z"/></svg>
);

const PayeerLogo = () => (
   <div className="flex items-center bg-gray-100 rounded px-2 h-4 md:h-5">
      <span className="text-[8px] md:text-[10px] font-black text-[#009473]">PAYEER</span>
   </div>
);

const ArrowRight = () => <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>;
const CheckCircle = () => <svg className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const EditIcon = () => <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>;


const DonatePage = () => {
  const [step, setStep] = useState(1);
  const [donationAmount, setDonationAmount] = useState('50');
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const quickAmounts = [10, 25, 50, 100];

  const handleQuickAmount = (amount) => {
    setSelectedAmount(amount);
    setDonationAmount(amount.toString());
  };

  const handleCustomAmount = (e) => {
    setDonationAmount(e.target.value);
    setSelectedAmount(null);
  };

  const nextStep = () => {
    if (step === 1 && (!donationAmount || Number(donationAmount) < 1)) return;
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2500);
  };

  const GetMethodIcon = ({ method }) => {
      if (method === 'card') return <div className="flex gap-1"><VisaLogo /><MastercardLogo /></div>;
      if (method === 'paypal') return <PaypalLogo />;
      if (method === 'payeer') return <PayeerLogo />;
      return null;
  };

  return (
    <>
    <div className="min-h-screen bg-[#FDFBF7] font-sans flex flex-col items-center justify-center p-4 pt-20 md:pt-4 relative overflow-x-hidden">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        
        .font-brush { font-family: 'Permanent Marker', cursive; }
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

        .slide-in {
          animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <ZelligePattern />

      {/* --- HEADER --- */}
      <div className="relative z-10 text-center mb-8 md:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wider font-brush transform -rotate-2 drop-shadow-sm">
            <span className='text-[#C1272D]'>MA</span> <span className="text-[#1e293b]">TRIP</span> <span className='text-[#006233]'>GUIDE</span>
        </h1>
      </div>

      {/* Back to Home Button - Optimized for Mobile */}
      <div className="absolute top-4 left-4 md:fixed md:top-6 md:left-6 z-50">
        <Link 
          href="/"
          className="group inline-flex items-center text-white bg-[#006233] hover:bg-[#004d28] shadow-lg px-3 py-2 md:px-5 md:py-2 rounded-full transition-all duration-300 border border-[#006233] font-hand text-sm md:text-xl tracking-wide"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Home</span>
        </Link>
      </div>

      {/* --- WIZARD CARD --- */}
      <div className="w-full max-w-md relative z-10">
        
        {/* Step Indicators */}
        {!isSuccess && (
          <div className="flex justify-between items-center mb-4 md:mb-6 px-2 md:px-4">
             <div className="flex gap-1 md:gap-2">
                {[1, 2, 3].map((s) => (
                    <div key={s} className={`h-1.5 rounded-full transition-all duration-500 ${step >= s ? 'w-6 md:w-8 bg-[#006233]' : 'w-2 bg-gray-300'}`}></div>
                ))}
             </div>
             <span className="text-[10px] md:text-xs font-bold text-gray-400">Step {step} of 3</span>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden min-h-[420px] md:min-h-[460px] relative flex flex-col transition-all duration-300">
          
          {isSuccess ? (
             <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-8 text-center slide-in">
                <CheckCircle />
                <h2 className="text-2xl md:text-3xl font-brush text-[#1e293b] mb-2">Chokran!</h2>
                <div className="bg-green-50 rounded-xl p-4 w-full mb-6 border border-green-100">
                    <p className="text-gray-500 text-xs md:text-sm">Amount Donated</p>
                    <p className="text-xl md:text-2xl font-bold text-[#006233]">${donationAmount}</p>
                    <div className="w-full h-[1px] bg-green-200 my-2"></div>
                    <p className="text-[10px] md:text-xs text-gray-400 flex items-center justify-center gap-1">
                        Paid via <span className="uppercase font-bold text-gray-600">{paymentMethod}</span>
                    </p>
                </div>
                <Link href="/" className="w-full bg-[#1e293b] hover:bg-black text-white px-6 py-3 md:py-4 rounded-xl font-bold transition shadow-lg text-sm md:text-base">
                   Return to Website
                </Link>
             </div>
          ) : (
            <>
              {/* Dynamic Header */}
              <div className="p-4 md:p-6 pb-2">
                  <h2 className="text-xl md:text-2xl font-bold text-[#1e293b]">
                    {step === 1 && "Make a Donation"}
                    {step === 2 && "Payment Method"}
                    {step === 3 && "Confirm Details"}
                  </h2>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">
                    {step === 1 && "Choose how much you want to give."}
                    {step === 2 && "Select how you'd like to pay."}
                    {step === 3 && "Review your donation summary."}
                  </p>
              </div>

              {/* BODY CONTENT */}
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                
                {/* ---------------- STEP 1: AMOUNT ---------------- */}
                {step === 1 && (
                  <div className="slide-in flex-1 flex flex-col justify-center">
                     
                     <div className="relative mb-6 group">
                        <span className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-2xl md:text-3xl font-serif text-gray-300 transition-colors group-focus-within:text-[#006233]">$</span>
                        <input
                            type="number"
                            value={donationAmount}
                            onChange={handleCustomAmount}
                            placeholder="0"
                            className="w-full pl-10 md:pl-12 pr-4 py-4 md:py-6 bg-gray-50 border-2 border-transparent focus:border-[#006233] focus:bg-white rounded-2xl outline-none text-xl md:text-2xl font-bold text-[#1e293b] text-center transition-all placeholder-gray-200 shadow-inner"
                        />
                     </div>

                     <div className="grid grid-cols-4 gap-2 md:gap-3">
                        {quickAmounts.map((amount) => (
                            <button
                                key={amount}
                                onClick={() => handleQuickAmount(amount)}
                                className={`py-2 md:py-3 rounded-xl font-bold text-xs md:text-sm transition-all duration-200 ${
                                    selectedAmount === amount
                                    ? 'bg-[#006233] text-white shadow-lg transform scale-105'
                                    : 'bg-white border border-gray-100 text-gray-500 hover:border-[#006233] hover:text-[#006233]'
                                }`}
                            >
                                ${amount}
                            </button>
                        ))}
                     </div>
                  </div>
                )}

                {/* ---------------- STEP 2: METHOD ---------------- */}
                {step === 2 && (
                  <div className="slide-in flex-1 flex flex-col">
                     
                     <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-xl p-3 mb-6 flex justify-between items-center animate-pulse-once">
                        <div className="flex items-center gap-2">
                            <div className="bg-[#006233] text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-[10px] md:text-xs font-bold">✓</div>
                            <span className="text-xs md:text-sm text-[#006233] font-medium">Donating: <span className="font-bold text-base md:text-lg ml-1">${donationAmount}</span></span>
                        </div>
                        <button onClick={prevStep} className="text-xs text-gray-400 hover:text-[#006233] underline flex items-center gap-1">
                            Edit <EditIcon />
                        </button>
                     </div>

                     <div className="space-y-3">
                        {['card', 'paypal', 'payeer'].map((method) => (
                            <label key={method} className={`relative flex items-center justify-between p-3 md:p-4 border-2 rounded-2xl cursor-pointer transition-all duration-200 group ${
                                paymentMethod === method 
                                ? 'border-[#006233] bg-white shadow-md' 
                                : 'border-gray-50 bg-gray-50 hover:bg-white hover:border-gray-200'
                            }`}>
                                <div className="flex items-center gap-2 md:gap-4">
                                    <input type="radio" name="payment" value={method} checked={paymentMethod === method} onChange={(e) => setPaymentMethod(e.target.value)} className="w-4 h-4 md:w-5 md:h-5 accent-[#006233]" />
                                    <span className="font-bold text-sm md:text-base text-[#1e293b] capitalize">
                                        {method === 'card' ? 'Credit Card' : method}
                                    </span>
                                </div>
                                
                                <div className={`transition-opacity ${paymentMethod === method ? 'opacity-100' : 'opacity-60 grayscale group-hover:grayscale-0'}`}>
                                    <GetMethodIcon method={method} />
                                </div>
                            </label>
                        ))}
                     </div>
                  </div>
                )}

                {/* ---------------- STEP 3: CONFIRM ---------------- */}
                {step === 3 && (
                   <div className="slide-in flex-1 flex flex-col justify-center">
                      
                      <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-4 md:p-6 relative">
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FDFBF7] px-3 text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
                             Summary
                          </div>

                          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                             <span className="text-sm md:text-base text-gray-500 font-medium">Total Amount</span>
                             <span className="text-2xl md:text-3xl font-bold text-[#006233] font-serif">${donationAmount}</span>
                          </div>

                          <div className="flex justify-between items-center">
                             <span className="text-sm md:text-base text-gray-500 font-medium">Payment Method</span>
                             <div className="flex items-center gap-2">
                                <span className="text-xs md:text-sm font-bold text-[#1e293b] capitalize">{paymentMethod === 'card' ? 'Credit Card' : paymentMethod}</span>
                                <div className="scale-75 origin-right">
                                    <GetMethodIcon method={paymentMethod} />
                                </div>
                             </div>
                          </div>
                      </div>

                      <div className="mt-6 flex items-center justify-center gap-2 text-[#006233] bg-[#006233]/5 p-3 rounded-xl">
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">SSL Secure Encrypted</span>
                      </div>
                   </div>
                )}

              </div>

              {/* FOOTER ACTIONS */}
              <div className="p-4 md:p-6 pt-0 mt-auto">
                 {step === 3 ? (
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="w-full bg-[#C1272D] hover:bg-[#a01f24] text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-xl shadow-red-900/10 transition-all duration-300 flex justify-center items-center gap-2 transform active:scale-95"
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                Processing...
                            </span>
                        ) : (
                            <>Confirm Payment <ArrowRight /></>
                        )}
                    </button>
                 ) : (
                    <button
                        onClick={nextStep}
                        disabled={!donationAmount}
                        className="w-full bg-[#1e293b] hover:bg-black text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-lg transition-all duration-300 flex justify-center items-center gap-2 group"
                    >
                        Continue 
                        <span className="group-hover:translate-x-1 transition-transform"><ArrowRight /></span>
                    </button>
                 )}

                 {step > 1 && (
                    <button onClick={prevStep} className="w-full text-center text-gray-400 text-xs md:text-sm font-bold mt-3 md:mt-4 hover:text-gray-600 transition">
                        Go Back
                    </button>
                 )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DonatePage;