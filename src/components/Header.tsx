import { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, MapPin, MessageSquare } from 'lucide-react';
import { DOCTOR_INFO } from '../data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="header_main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3' 
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clinic Brand and Icon */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            {/* Dynamic Spine/Health Inspired Logo */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-medical-primary to-medical-secondary flex items-center justify-center text-white shadow-md shadow-blue-200 group-hover:scale-105 transition-transform">
              <span className="font-display font-bold text-lg">Tp</span>
            </div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-gray-900 leading-none">
                  TelePhysio <span className="text-medical-secondary">Pro</span>
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold leading-none mt-0.5">
                Physiotherapy Clinic
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links (Enhanced with a modern centered pill look) */}
          <nav className="hidden md:flex items-center space-x-1.5 bg-gray-50/80 px-2 py-1.5 rounded-full border border-gray-100 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]">
            <a 
              href="#hero"
              className="px-4 py-1.5 text-[13px] font-semibold text-gray-600 hover:text-medical-primary rounded-full hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
            >
              Home
            </a>
            <a 
              href="#credentials"
              className="px-4 py-1.5 text-[13px] font-semibold text-gray-600 hover:text-medical-primary rounded-full hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
            >
              Credentials
            </a>
            <a 
              href="#specialties"
              className="px-4 py-1.5 text-[13px] font-semibold text-gray-600 hover:text-medical-primary rounded-full hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
            >
              Conditions Treated
            </a>
            <a 
              href="#about"
              className="px-4 py-1.5 text-[13px] font-semibold text-gray-600 hover:text-medical-primary rounded-full hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
            >
              Clinic Details
            </a>
          </nav>

          {/* Contact shortcuts and Book CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href={`tel:${DOCTOR_INFO.phone}`} 
              className="flex items-center space-x-2 text-gray-600 hover:text-medical-primary transition-colors"
            >
              <div className="p-2 bg-blue-50 rounded-lg text-medical-primary">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-mono uppercase font-bold leading-none">Call Support</p>
                <p className="text-sm font-bold text-gray-800 leading-none mt-1">{DOCTOR_INFO.phone}</p>
              </div>
            </a>

            <a
              href="#booking"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-medical-primary to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md shadow-blue-100 transition-all transform hover:-translate-y-0.5 pointer-events-auto cursor-pointer"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </a>
          </div>

          {/* Mobile Booking / Support CTAs */}
          <div className="flex items-center space-x-2 md:hidden">
            <a 
              href={`tel:${DOCTOR_INFO.phone}`} 
              className="p-2 bg-blue-50 text-medical-primary rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center"
              title="Call support"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/${DOCTOR_INFO.whatsappPhone}?text=Hi%2C%20I%20would%20like%20to%20book%20a%20physiotherapy%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4.5 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md shadow-emerald-100 transition-all transform active:scale-95 cursor-pointer"
              style={{ minHeight: '44px' }}
            >
              <MessageSquare className="w-4 h-4 mr-1.5" />
              Book Now
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
