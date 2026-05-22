import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import CredentialsSection from './components/CredentialsSection';
import ConditionsGrid from './components/ConditionsGrid';
import BookingForm from './components/BookingForm';
import LocationContact from './components/LocationContact';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col overflow-x-hidden antialiased text-slate-800">
      
      {/* Premium Medical Header */}
      <Header />

      {/* Main Clinical Sections layout */}
      <main className="flex-grow w-full">
        
        {/* Hero Section */}
        <Hero />

        {/* Credentials and International Experience */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <CredentialsSection />
        </motion.div>

        {/* Fully interactive Conditions Directory, Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <ConditionsGrid />
        </motion.div>

        {/* Dynamic WhatsApp Scheduling Engine */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <BookingForm />
        </motion.div>

        {/* Map, Timings, Clinic Open Status details */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <LocationContact />
        </motion.div>

        {/* Patient Awareness FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <FAQs />
        </motion.div>

      </main>

      {/* Footer copyright, fast links and medical disclaimer */}
      <Footer />

    </div>
  );
}
