import { GraduationCap, Award, Stethoscope, ChevronRight, MessageSquareCode } from 'lucide-react';
import { motion } from 'motion/react';
import { DOCTOR_INFO, CREDENTIALS } from '../data';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToSpecialties = () => {
    const element = document.getElementById('specialties');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-blue-50/70 via-white to-gray-50/50 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-20 right-[-10%] w-[350px] h-[350px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-[-10%] w-[300px] h-[300px] rounded-full bg-teal-50/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Columns */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Tagline / Capsule */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center space-x-2 bg-blue-50 border border-blue-100 text-medical-primary font-mono text-xs font-bold uppercase py-1.5 px-3.5 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-medical-secondary animate-pulse" />
              <span>{DOCTOR_INFO.tagline}</span>
            </motion.div>

            {/* Main Heading & Degree */}
            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
              >
                <span className="block text-medical-primary font-medium text-2xl sm:text-3xl font-sans mb-1">
                  Welcome to TelePhysio Pro
                </span>
                {DOCTOR_INFO.name}
              </motion.h1>

              {/* MPT Neurology Speciality Band */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-medical-primary to-medical-secondary text-white text-base md:text-lg font-bold px-4 py-1.5 rounded-lg shadow-sm font-display tracking-wide uppercase"
              >
                <span>{DOCTOR_INFO.degrees[0]}</span>
              </motion.div>
            </div>

            {/* Short Introduction Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl"
            >
              Leading-edge neurological and musculoskeletal rehabilitation under Dr. Wassim Mushtaq. Restoring movement, enhancing neural pathways, and improving quality of life with <strong className="font-semibold text-slate-800">evidence-based physiotherapy in Srinagar</strong>.
            </motion.p>

            {/* Local SEO Trust Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-xs text-gray-400 font-mono tracking-wide leading-relaxed border-l-2 border-teal-500 pl-3 py-1"
            >
              ⭐ Best rated Physiotherapy Clinic in Karan Nagar, near Sheikh ul Alam Hospital, Srinagar, Kashmir. Specializing in advanced stroke rehabilitation, lumbar disc prolapse (sciatica) recovery, and pediatric/adult neuro care.
            </motion.p>

            {/* High-Contrast Quick Credentials bullets matching the flyer */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
            >
              {CREDENTIALS.map((cred, i) => (
                <div key={i} className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-gray-150/80 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-2 rounded-lg bg-blue-50 text-medical-primary mt-0.5">
                    {i === 0 ? (
                      <GraduationCap className="w-5 h-5 text-medical-primary" />
                    ) : i === 1 ? (
                      <Award className="w-5 h-5 text-medical-secondary" />
                    ) : (
                      <Stethoscope className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-tight">{cred.role}</h4>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5 leading-tight">{cred.institution}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-bold text-white bg-medical-primary hover:bg-blue-800 shadow-lg shadow-blue-100 transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                Book Appointment
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
              
              <a
                href="#specialties"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-bold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200/80 hover:border-gray-300 transition-all cursor-pointer text-center"
              >
                View Treatments
              </a>
            </motion.div>
          </div>

          {/* Spine Graphic (Rebuilt matching the flyer) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] flex items-center justify-center"
            >
              {/* Spinning background circles inspired by the flyer logo */}
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-200/50 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-blue-100/80" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-blue-50/50 to-teal-50/50 flex items-center justify-center" />
              
              {/* Outer logo curve borders resembling the medical circle emblem */}
              <svg className="absolute w-full h-full transform -rotate-45" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="url(#blueGreenGrad)" 
                  strokeWidth="2" 
                  strokeDasharray="210 100"
                  strokeLinecap="round"
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="41" 
                  fill="none" 
                  stroke="#0d9488" 
                  strokeWidth="1" 
                  strokeDasharray="140 180"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="blueGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e40af" />
                    <stop offset="100%" stopColor="#0d9488" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Inner content representing spine alignment and neuro pathways */}
              <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center p-6">
                <svg className="w-full h-full text-medical-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  {/* Spine Vertebrae dots and linkage from the logo */}
                  <path d="M50 15 C45 25, 45 35, 50 45 C55 55, 55 65, 50 85" strokeWidth="2.5" strokeLinecap="round" className="text-medical-secondary opacity-60" />
                  <circle cx="50" cy="18" r="3.5" fill="#1e40af" />
                  <circle cx="48" cy="25" r="3" fill="#1e40af" />
                  <circle cx="47" cy="32" r="3" fill="#1e40af" />
                  <circle cx="48" cy="39" r="3" fill="#0d9488" />
                  <circle cx="50" cy="46" r="3.5" fill="#0d9488" />
                  <circle cx="52" cy="53" r="3" fill="#1e40af" />
                  <circle cx="53" cy="60" r="3" fill="#1e40af" />
                  <circle cx="52" cy="67" r="3" fill="#1e40af" />
                  <circle cx="50" cy="74" r="3.5" fill="#0d9488" />
                  <circle cx="49" cy="81" r="4" fill="#0d9488" />

                  {/* Left curve rib line */}
                  <path d="M43 28 C 30 35, 30 55, 44 72" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 1" />
                  {/* Right curve rib line */}
                  <path d="M57 28 C 70 35, 70 55, 56 72" stroke="#0d9488" strokeWidth="2.4" strokeLinecap="round" />

                  {/* Neural spark lines */}
                  <path d="M35 42 L25 40" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M34 56 L24 58" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M66 42 L76 40" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M66 56 L76 58" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Floating indicators displaying core attributes */}
              <div className="absolute -top-3 right-[5%] bg-white py-1.5 px-3 rounded-full border border-gray-150 shadow-sm text-xs font-bold text-gray-700 font-mono tracking-tight flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Expert Care</span>
              </div>

              <div className="absolute -bottom-2 md:-bottom-4 left-[2%] bg-white py-2 px-3 rounded-xl border border-gray-150 shadow-md text-xs font-bold text-gray-700 font-mono tracking-tight flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                <span>Patient Focused</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
