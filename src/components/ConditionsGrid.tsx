import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, Activity, Brain, Zap, Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONDITIONS } from '../data';
import { Condition } from '../types';

export default function ConditionsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedConditionId, setExpandedConditionId] = useState<string | null>(null);

  const categories = ['All', 'Spine & Joints', 'Neurological', 'Neuropathy & Pain', 'Specialized'];

  const filteredConditions = selectedCategory === 'All' 
    ? CONDITIONS 
    : CONDITIONS.filter(c => c.category === selectedCategory);

  const toggleExpand = (id: string) => {
    if (expandedConditionId === id) {
      setExpandedConditionId(null);
    } else {
      setExpandedConditionId(id);
    }
  };

  const getIcon = (iconName: string, category: string) => {
    const sizeClasses = "w-6 h-6";
    switch(category) {
      case 'Neurological':
        return <Brain className={`${sizeClasses} text-indigo-500`} />;
      case 'Neuropathy & Pain':
        return <Zap className={`${sizeClasses} text-amber-500`} />;
      case 'Specialized':
        return <Heart className={`${sizeClasses} text-rose-500`} />;
      default:
        return <Activity className={`${sizeClasses} text-medical-primary`} />;
    }
  };

  const scrollToBookingWithCondition = (conditionName: string) => {
    // Fill the appointment booking block with the pre-selected condition
    const formElement = document.getElementById('booking');
    const selectElement = document.getElementById('condition-select') as HTMLSelectElement;
    
    if (selectElement) {
      // Find matches
      const options = Array.from(selectElement.options);
      const match = options.find(opt => opt.text.toLowerCase().includes(conditionName.toLowerCase()));
      if (match) {
        selectElement.value = match.value;
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
    
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="specialties" className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0d9488] bg-teal-50 py-1.5 px-3 rounded-full">
            Specialized Care Directory
          </span>
          <h2 className="mt-3 text-3xl font-display font-black text-slate-900 tracking-tight sm:text-4xl">
            Symptom Checklist &amp; Consultations
          </h2>
          <p className="mt-2.5 text-base text-gray-500">
            If you have explored all medical options and are still suffering, select your condition below to learn about Dr. Wassim Mushtaq's advanced rehabilitative strategy.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setExpandedConditionId(null);
              }}
              className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-medical-primary to-medical-secondary text-white shadow-md'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredConditions.map((cond: Condition, index: number) => {
              const isExpanded = expandedConditionId === cond.id;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  key={cond.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 shadow-sm overflow-hidden ${
                    isExpanded 
                      ? 'border-medical-accent shadow-md ring-1 ring-blue-50/50' 
                      : 'border-gray-200/80 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  
                  {/* Card Visible Header */}
                  <div 
                    onClick={() => toggleExpand(cond.id)}
                    className="p-5 sm:p-6 flex items-start justify-between cursor-pointer group select-none"
                  >
                    <div className="flex space-x-4">
                      {/* Stylized Category Color Badges */}
                      <div className="p-3 bg-slate-50 border border-gray-100/80 rounded-xl group-hover:scale-105 transition-transform flex-shrink-0">
                        {getIcon(cond.iconName, cond.category)}
                      </div>
                      
                      <div className="text-left">
                        <span className="text-[10px] font-mono uppercase font-bold text-gray-400 tracking-wider">
                          {cond.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-medical-primary transition-colors leading-tight mt-0.5">
                          {cond.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
                          {cond.description}
                        </p>
                      </div>
                    </div>

                    <div className="pl-2 mt-2 text-gray-400 group-hover:text-gray-600 transition-colors">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Expanded Treatment Info */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-gradient-to-b from-white to-slate-50/50 border-t border-gray-100"
                      >
                        <div className="p-5 sm:p-6 space-y-5 text-left">
                          
                          {/* Symptoms Block */}
                          <div>
                            <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest flex items-center mb-2.5">
                              <CheckCircle className="w-4 h-4 text-medical-secondary mr-1.5 flex-shrink-0" />
                              Common Presenting Symptoms
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {cond.symptoms.map((sym, i) => (
                                <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                                  <span className="w-1.5 h-1.5 rounded-full bg-medical-secondary flex-shrink-0" />
                                  <span>{sym}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Treatment Strategy Block */}
                          <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100/40">
                            <h4 className="text-xs font-mono font-bold text-medical-primary uppercase tracking-widest flex items-center mb-2">
                              <Sparkles className="w-4 h-4 mr-1.5 flex-shrink-0" />
                              Dr. Wassim's Clinical Approach
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                              {cond.detailedInfo}
                            </p>
                          </div>

                          {/* Quick booking CTA and closing */}
                          <div className="flex items-center justify-between pt-2 border-t border-gray-100/90 text-[11px] sm:text-xs">
                            <span className="text-gray-400 font-medium">Have these symptoms?</span>
                            <button
                              onClick={() => scrollToBookingWithCondition(cond.name)}
                              className="px-4.5 py-2 hover:bg-medical-primary hover:text-white border border-medical-primary/40 text-medical-primary rounded-lg font-bold transition-all cursor-pointer"
                            >
                              Consult This Symptom
                            </button>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Safe-Guaranteed Info Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500 italic">
            Not sure which category your symptoms fit? Feel free to contact Dr. Wassim Mushtaq directly for advice or make a booking with "Other" condition.
          </p>
        </div>

      </div>
    </section>
  );
}
