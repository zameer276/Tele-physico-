import { ShieldCheck, Phone, MapPin, Calendar, Heart } from 'lucide-react';
import { DOCTOR_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-slate-800">
          
          {/* Column 1: Clinic identity */}
          <div className="md:col-span-2 space-y-4 text-left">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={scrollToTop}>
              <div className="w-9 h-9 rounded-lg bg-[#0d9488] flex items-center justify-center text-white font-black">
                Tp
              </div>
              <span className="font-display font-extrabold text-white text-lg tracking-tight">
                TelePhysio <span className="text-[#0d9488]">Pro</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Dr. Wassim Mushtaq's highly specialized clinical physiotherapy unit in Srinagar. Offering world-class physical therapy, post-stroke re-education, lumbar disc decompression, and nerve guidance treatments under international standards.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono mt-2">
              <ShieldCheck className="w-4 h-4 text-[#0d9488]" />
              <span>Certified Dr. Wassim Mushtaq, MPT Neurology</span>
            </div>
          </div>

          {/* Column 2: Fast Quicklinks */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              Clinic Sections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Doctor Profile
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('credentials')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Expertise &amp; Credentials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Conditions Treated
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  WhatsApp Booking Form
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Shortcuts */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span className=" leading-relaxed">
                  Near to Sheikh ul Alam Hospital, KaraNagar, Srinagar, Jammu &amp; Kashmir
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href={`tel:${DOCTOR_INFO.phone}`} className="hover:text-white transition-colors font-bold font-mono">
                  {DOCTOR_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Timings: 8 AM - 2 PM, 4 PM - 6 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Subtext and notice board */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} TelePhysio Pro Clinical Portal. All rights reserved.</p>
            <p className="mt-1">Designed with professional attention for patient health, spinal biomechanics and neurological recovery.</p>
          </div>
          
          <div className="flex items-center space-x-1 font-mono uppercase bg-slate-950/50 py-1.5 px-3 rounded-lg border border-slate-800">
            <span>Made with Care for Patient Focus</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
}
