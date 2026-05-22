import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Star, HelpCircle } from 'lucide-react';
import { DOCTOR_INFO } from '../data';

export default function LocationContact() {
  const [openStatus, setOpenStatus] = useState({ state: 'Closed', label: 'Closed for the day', color: 'bg-red-500' });
  const [mapView, setMapView] = useState<'google' | 'landmark'>('google');

  useEffect(() => {
    const checkClinicStatus = () => {
      // Get J&K (Indian Standard Time)
      // Srinagar is GMT+5:30.
      const now = new Date();
      // Adjust to Indian Standard Time offset manually for global predictability
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (3600000 * 5.5));
      
      const hours = istTime.getHours();
      const day = istTime.getDay(); // 0 is Sunday

      if (day === 0) {
        // Sunday closed physically
        setOpenStatus({
          state: 'Closed',
          label: 'Closed details: Sunday Appointment only',
          color: 'bg-amber-500'
        });
        return;
      }

      const raw = DOCTOR_INFO.rawTimings;
      
      // Morning Segment: 8 AM (8) to 2 PM (14)
      if (hours >= raw.morningStart && hours < raw.morningEnd) {
        setOpenStatus({
          state: 'Open',
          label: 'Clinic Open (Morning Session)',
          color: 'bg-green-500'
        });
      // Resting Segment: 2 PM (14) to 4 PM (16)
      } else if (hours >= raw.morningEnd && hours < raw.eveningStart) {
        setOpenStatus({
          state: 'Resting',
          label: 'Intermission (Reopens at 4:00 PM)',
          color: 'bg-blue-500'
        });
      // Evening Segment: 4 PM (16) to 6 PM (18)
      } else if (hours >= raw.eveningStart && hours < raw.eveningEnd) {
        setOpenStatus({
          state: 'Open',
          label: 'Clinic Open (Evening Session)',
          color: 'bg-green-500'
        });
      } else {
        setOpenStatus({
          state: 'Closed',
          label: 'Closed for today (Opens 8:00 AM)',
          color: 'bg-gray-500'
        });
      }
    };

    checkClinicStatus();
    const interval = setInterval(checkClinicStatus, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(DOCTOR_INFO.address);
    alert('Address copied to clipboard!');
  };

  return (
    <section id="about" className="py-16 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Hour & Contacts Block */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0d9488] bg-teal-50 py-1.5 px-3 rounded-full">
                Contact &amp; Timings
              </span>
              <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight sm:text-4xl">
                Come Visit TelePhysio Pro
              </h2>
              <p className="text-base text-gray-500 leading-relaxed max-w-xl">
                The clinic is located in the healthcare center of Srinagar, KaraNagar, in close proximity to Sheikh ul Alam Hospital. We provide an accessible ground-floor clinical environment suited for neurological and movement-restricted patients.
              </p>

              {/* Status Indicator */}
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-150">
                <span className={`w-3 h-3 rounded-full ${openStatus.color} animate-pulse`} />
                <span className="text-sm font-semibold text-gray-800">{openStatus.label}</span>
              </div>
            </div>

            {/* Timings List */}
            <div className="bg-white border border-gray-200/60 p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 flex items-center">
                <Clock className="w-4.5 h-4.5 text-medical-primary mr-1.5" />
                Clinic Session Structures
              </h3>
              
              <div className="divide-y divide-gray-105">
                {DOCTOR_INFO.timings.map((session, i) => (
                  <div key={i} className="flex justify-between items-center py-3 first:pt-0 last:pb-0">
                    <span className="text-sm font-bold text-gray-700">{session.label}</span>
                    <span className="text-sm font-mono font-semibold text-[#1e40af] bg-blue-50 py-1 px-2.5 rounded-lg">
                      {session.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-gray-400 italic font-medium leading-none flex items-center">
                <HelpCircle className="w-3.5 h-3.5 mr-1 text-gray-300" />
                Sundays: Please enquire via WhatsApp booking for special emergency calls.
              </div>
            </div>

            {/* Quick dials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href={`tel:${DOCTOR_INFO.phone}`} 
                className="flex items-center space-x-3.5 bg-gradient-to-r from-medical-primary to-blue-700 text-white p-4.5 rounded-2xl shadow-md transition-all hover:translate-y-[-2px] hover:shadow-lg"
              >
                <div className="p-2.5 bg-white/10 rounded-xl">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-mono tracking-wider text-blue-100 font-bold">Call Support</h4>
                  <p className="text-sm sm:text-base font-black tracking-tight">{DOCTOR_INFO.phone}</p>
                </div>
              </a>

              <button 
                onClick={handleCopyAddress}
                className="flex items-center space-x-3.5 bg-white border border-gray-200 text-gray-800 p-4.5 rounded-2xl shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-md cursor-pointer text-left"
              >
                <div className="p-2.5 bg-blue-50 rounded-xl text-medical-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">Address Details</h4>
                  <p className="text-sm font-bold truncate max-w-[150px] sm:max-w-xs">{DOCTOR_INFO.addressShort}</p>
                </div>
              </button>
            </div>
          </div>

          {/* Map and Location Card */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-gray-200 p-6 rounded-3xl shadow-sm flex flex-col justify-between h-full space-y-6 font-sans">
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-display font-black text-slate-900 tracking-tight flex items-center">
                    <MapPin className="w-5 h-5 text-[#0d9488] mr-2" />
                    KaraNagar Clinic Map
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Located in KaraNagar, near Sheikh ul Alam Hospital.
                  </p>
                </div>
                {/* Segmented control for toggling map view */}
                <div className="inline-flex p-1 bg-gray-100 rounded-xl self-start sm:self-center">
                  <button
                    onClick={() => setMapView('google')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      mapView === 'google'
                        ? 'bg-white text-medical-primary shadow-xs font-semibold'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    Google Map
                  </button>
                  <button
                    onClick={() => setMapView('landmark')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      mapView === 'landmark'
                        ? 'bg-white text-medical-primary shadow-xs font-semibold'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    Landmark Guide
                  </button>
                </div>
              </div>

              {mapView === 'google' ? (
                <div className="relative bg-slate-100 border border-gray-200 rounded-2xl h-64 overflow-hidden">
                  <iframe
                    title="Google Maps Location - TelePhysio Pro"
                    src="https://maps.google.com/maps?q=Sheikh%20Ul%20Alam%20Hospital,%20Karan%20Nagar,%20Srinagar&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 rounded-2xl"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating directions link */}
                  <a
                    href="https://maps.google.com/maps?q=Sheikh%20Ul%20Alam%20Hospital,%20Karan%20Nagar,%20Srinagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-medical-primary hover:text-blue-800 border border-gray-200 text-xs font-bold py-1.5 px-3 rounded-xl flex items-center shadow-md transition-all whitespace-nowrap"
                  >
                    <DirectionIcon className="w-3.5 h-3.5 mr-1 text-medical-primary" />
                    Open Directions
                  </a>
                </div>
              ) : (
                /* Simulated Landmarks layout detailing KaraNagar */
                <div className="relative bg-slate-50 border border-gray-150 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                  {/* Visual grid backdrop lines */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-40">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className="border-r border-b border-gray-200" />
                    ))}
                  </div>

                  {/* Simulated Landmarks layout detailing KaraNagar */}
                  {/* Horizontal Road */}
                  <div className="absolute h-10 w-full bg-gray-200/80 top-[40%] flex items-center px-4 font-bold text-[10px] text-gray-400 font-mono tracking-wider uppercase select-none">
                    KaraNagar Main Bazaar Road
                  </div>

                  {/* Vertical Intersection Road */}
                  <div className="absolute w-10 h-full bg-gray-200/80 left-[35%] flex justify-center items-center font-bold text-[10px] text-gray-400 font-mono tracking-wider [writing-mode:vertical-rl] uppercase select-none">
                    Sheikh ul Alam Hospital Lane
                  </div>

                  {/* Sheikh ul Alam Hospital Landmark node */}
                  <div className="absolute top-[10%] right-[10%] bg-rose-50 border border-rose-150 py-2.5 px-3 rounded-xl shadow-xs text-center">
                    <p className="text-[9px] font-mono font-black text-rose-500 uppercase leading-none">Medical</p>
                    <p className="text-xs font-bold text-gray-800 tracking-tight mt-1 leading-none">Sheikh ul Alam Hospital</p>
                  </div>

                  {/* TelePhysio Pro Highlight node */}
                  <div className="absolute bottom-[10%] left-[20%] z-20 bg-gradient-to-tr from-medical-primary to-[#0d9488] border-2 border-white py-3 px-4.5 rounded-2xl shadow-xl text-center flex flex-col items-center">
                    <div className="w-5 h-5 bg-white text-medical-primary rounded-full flex items-center justify-center shadow-xs">
                      <Star className="w-3.5 h-3.5 text-medical-secondary fill-medical-secondary" />
                    </div>
                    <p className="text-xs font-extrabold text-white mt-1.5 leading-none">TelePhysio Pro</p>
                    <p className="text-[9px] text-teal-100 font-mono font-medium leading-none mt-1 uppercase">Srinagar Clinic</p>
                  </div>

                  {/* Direct locator badge link */}
                  <div className="absolute bottom-3 right-3 bg-white/95 text-gray-600 border border-gray-200 text-[11px] font-bold py-1 px-2.5 rounded-lg flex items-center shadow-xs">
                    <DirectionIcon className="w-3.5 h-3.5 text-medical-primary mr-1" />
                    2 mins walk from hospital
                  </div>
                </div>
              )}

              {/* Exact full text description and instructions */}
              <div className="border-t border-gray-100/90 pt-4 space-y-2">
                <p className="text-sm font-bold text-slate-800">
                  Exact Address:
                </p>
                <p className="text-xs text-gray-600 leading-relaxed font-mono">
                  {DOCTOR_INFO.address}
                </p>
                
                <div className="flex items-center space-x-3 pt-2 text-xs font-semibold text-medical-secondary flex-row">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>Ground floor entrance. Wheelchair accessible available upon arrival.</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export function DirectionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}
