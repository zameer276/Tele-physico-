import { Award, BookOpen, Globe, ShieldCheck, Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';
import { CREDENTIALS } from '../data';

export default function CredentialsSection() {
  return (
    <section id="credentials" className="bg-white py-16 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono font-bold tracking-widest text-medical-secondary uppercase">
            Clinical Qualifications
          </h2>
          <p className="mt-2 text-3xl font-display font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Distinguished Global &amp; Academic Expertise
          </p>
          <p className="mt-3 text-base text-gray-500">
            Backed by international clinical operations and years of academic leadership, Dr. Wassim Mushtaq offers highly specialized therapies based on modern, validated neuroscientific protocols.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Academic BWU */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-slate-50 border border-gray-200/60 p-6 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:border-blue-100"
          >
            <div className="absolute top-6 right-6 text-gray-200 group-hover:text-blue-100 transition-colors">
              <BookOpen className="w-12 h-12 stroke-1" />
            </div>
            <div className="p-3 bg-blue-100/50 text-medical-primary rounded-xl inline-flex mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-medical-primary transition-colors">
              Brainware University (BWU)
            </h3>
            <p className="text-xs font-bold text-medical-secondary font-mono uppercase tracking-wide mt-1">
              Former Assistant Professor
            </p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Educated the next generation of professional physical therapists. Researched advanced neurologic patient care dynamics and curriculum design in academic therapeutics.
            </p>
          </motion.div>

          {/* Card 2: Academic Jazan University */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-slate-50 border border-gray-200/60 p-6 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:border-teal-150"
          >
            <div className="absolute top-6 right-6 text-gray-200 group-hover:text-teal-100 transition-colors">
              <Globe className="w-12 h-12 stroke-1" />
            </div>
            <div className="p-3 bg-teal-100/50 text-medical-secondary rounded-xl inline-flex mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-medical-secondary transition-colors">
              Jazan University
            </h3>
            <p className="text-xs font-bold text-medical-primary font-mono uppercase tracking-wide mt-1">
              Former Faculty Lecturer
            </p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Delivered specialized physiotherapy training and clinical instruction in Jazan, Saudi Arabia. Collaborated on neurologic assessment standards and movement studies.
            </p>
          </motion.div>

          {/* Card 3: Clinical Saudi Arabia */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-slate-50 border border-gray-200/60 p-6 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:border-blue-150"
          >
            <div className="absolute top-6 right-6 text-gray-200 group-hover:text-blue-100 transition-colors">
              <Stethoscope className="w-12 h-12 stroke-1" />
            </div>
            <div className="p-3 bg-blue-100/50 text-blue-600 rounded-xl inline-flex mb-4">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
              Jazan Hospital, Saudi Arabia
            </h3>
            <p className="text-xs font-bold text-medical-secondary font-mono uppercase tracking-wide mt-1">
              Specialist Physiotherapist
            </p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Managed full-scale complex neurological, clinical rehabilitation in a major healthcare hub. Directed stroke-care, post-trauma spinal programs, and muscle recovery.
            </p>
          </motion.div>

        </div>

        {/* Core Guarantees Banner */}
        <div className="mt-12 bg-gradient-to-r from-medical-primary/5 to-medical-secondary/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between border border-blue-50">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="p-3 bg-white text-medical-secondary rounded-xl shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-black text-slate-900 text-lg">
                Evidence-Based Neurological Methodology
              </h4>
              <p className="text-sm text-gray-500 max-w-xl">
                Every service adheres strictly to contemporary guidelines issued by international physical therapy alliances for safe, effective recovery.
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="text-center px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-sm">
              <p className="text-2xl font-black text-medical-primary font-display">10+</p>
              <p className="text-[10px] text-gray-400 font-mono uppercase font-bold">Diagnoses</p>
            </div>
            <div className="text-center px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-sm">
              <p className="text-2xl font-black text-medical-secondary font-display">100%</p>
              <p className="text-[10px] text-gray-400 font-mono uppercase font-bold">Patient Focused</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
