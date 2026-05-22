import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items: FAQItem[] = [
    {
      q: "What is Neurological Physiotherapy (MPT Neurology)?",
      a: "Neurological physiotherapy is a highly specialized branch focusing on diagnosing and treating movement dysfunctions stemming from the nervous system (brain, spinal cord, and peripheral nerves). Unlike standard physical therapy, it uses Neurodevelopmental Treatment (NDT), sensory re-education, and movement retraining to trigger neuroplasticity—helping the nervous system repair or bypass damaged pathways."
    },
    {
      q: "Can a low back disc prolapse heal without surgery?",
      a: "Yes. Clinical studies reveal that over 90% of dynamic disc herniations and nerve impingements resolve positively with expert, non-surgical mechanical unloading. Under structured assessment, we use precise McKenzie physical therapies, neural flossing, and deep spinal stabilizer retraining to reduce nerve compression safely."
    },
    {
      q: "What can I expect during my first session at TelePhysio Pro?",
      a: "Dr. Wassim Mushtaq will perform a full-scale clinical evaluation. This covers motor control testing, sensory checkups, spinal biomechanics tracking, lifestyle analysis, and a comprehensive symptoms history. Based on this, you will receive a diagnostic-informed blueprint covering in-clinic procedures and prescribed home care exercises."
    },
    {
      q: "How many sessions will I need?",
      a: "It depends entirely on the pathology. Acute muscle strains or simple sprains can see major resolution in 3 to 6 sessions. Complex neurological rehabilitation—such as post-stroke re-education, Parkinson's posture support, or long-standing neuropathy—requires structured, incremental care over weeks or months to secure lasting gains."
    },
    {
      q: "Do you offer Home Visits in Srinagar?",
      a: "Yes. For severely movement-restricted patients, post-stroke transitions, or elderly spinal cases, home care sessions are available throughout Srinagar. You can request this directly inside the consultation form above by selecting 'Home Visit'."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-xs font-mono font-bold tracking-widest text-medical-primary uppercase flex items-center justify-center">
            <HelpCircle className="w-4 h-4 mr-1.5 text-medical-secondary" />
            Patient Awareness
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Frequently Clinical Questions
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-medical-accent bg-blue-50/10' : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 focus:outline-none select-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base pr-4">{item.q}</span>
                  <div className="text-gray-400 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-5 pt-0 border-t border-gray-100/60 text-xs sm:text-sm text-gray-500 leading-relaxed text-left">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
