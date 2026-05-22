import React, { useState } from 'react';
import { MessageSquare, Calendar, User, Phone, CheckSquare, Stethoscope, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DOCTOR_INFO, CONDITIONS } from '../data';
import { AppointmentFormData } from '../types';

export default function BookingForm() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    phone: '',
    age: '',
    gender: 'Male',
    conditionId: CONDITIONS[0].id,
    appointmentType: 'In-Clinic',
    preferredDate: '',
    preferredTimeSlot: 'Morning (8:00 AM - 2:00 PM)',
    additionalNotes: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Validations
    if (!formData.patientName.trim()) {
      setValidationError('Please enter patient\'s name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setValidationError('Please enter a valid mobile number.');
      return;
    }
    if (!formData.age.trim() || Number(formData.age) <= 0) {
      setValidationError('Please enter a valid patient age.');
      return;
    }
    if (!formData.preferredDate) {
      setValidationError('Please select a preferred date.');
      return;
    }

    // Capture condition name
    const selectedCond = CONDITIONS.find(c => c.id === formData.conditionId);
    const conditionText = selectedCond ? selectedCond.name : 'General Consultation / Other';

    // Compile WhatsApp Message
    const textMessage = `*TelePhysio Pro - Appointment Request*
----------------------------------------
👤 *Patient Name:* ${formData.patientName.trim()}
🎂 *Age:* ${formData.age} (${formData.gender})
📱 *Contact:* ${formData.phone.trim()}
⚕️ *Condition:* ${conditionText}
💼 *Consultation Type:* ${formData.appointmentType}
📅 *Preferred Date:* ${formData.preferredDate}
⏰ *Preferred Time:* ${formData.preferredTimeSlot}
📝 *Symptoms / Notes:* ${formData.additionalNotes.trim() ? formData.additionalNotes.trim() : 'None provided'}
----------------------------------------
_Request submitted from Clinic Web Portal._`;

    // Encode URL
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsappPhone}?text=${encodedMessage}`;

    // Mark as success and redirect
    setIsSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSuccess(false);
    }, 1500);
  };

  return (
    <section id="booking" className="py-16 bg-white border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Informational Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-24">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1e40af] bg-blue-50 py-1 px-2.5 rounded">
                Direct WhatsApp Scheduling
              </span>
              <h2 className="mt-3 text-3xl font-display font-black text-slate-900 tracking-tight sm:text-4xl">
                Simple &amp; Fast Booking
              </h2>
              <p className="mt-3 text-base text-gray-500 leading-relaxed">
                Provide your clinical preferences, symptoms, or joint concerns below. The system automatically structures a message so Dr. Wassim Mushtaq and his triage staff can instantly register your appointment slot.
              </p>

              {/* Checkboxes of guarantees */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-teal-50 text-[#0d9488] mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Direct Doctor Connection</h4>
                    <p className="text-xs text-gray-500 leading-tight">No third-party call center. Book directly onto Dr. Wassim's clinical calendar.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-teal-50 text-[#0d9488] mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Flexible Consultations</h4>
                    <p className="text-xs text-gray-500 leading-tight">Choose In-Clinic at KaraNagar, Home Visits (Srinagar area), or Video Consultations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-teal-50 text-[#0d9488] mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Encrypted Privacy</h4>
                    <p className="text-xs text-gray-500 leading-tight">Your data transfers using standard WhatsApp end-to-end encryption security.</p>
                  </div>
                </div>
              </div>

              {/* Standard operating notice banner */}
              <div className="mt-8 bg-amber-50 rounded-xl p-4 border border-amber-200/50 flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-amber-900 uppercase">Emergency Notice</h4>
                  <p className="text-xs text-amber-800 mt-1">For acute trauma, suspected fractures, or signs of an active cardiopulmonary event, please call emergency services immediately or visit the nearest hospital.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Booking Form */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-slate-50 border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-display font-black text-slate-900 tracking-tight flex items-center mb-6">
                <Calendar className="w-5 h-5 text-[#1e40af] mr-2" />
                Fill Patient Information
              </h3>

              {validationError && (
                <div className="mb-4 bg-red-50 text-red-700 text-xs sm:text-sm p-3 rounded-lg border border-red-150 font-semibold">
                  {validationError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="relative">
                  <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-2">
                    Patient Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      name="patientName"
                      required
                      value={formData.patientName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full pl-10.5 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent transition-all sm:text-sm"
                    />
                  </div>
                </div>

                {/* Age & Gender Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-2">
                      Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="age"
                      required
                      min="1"
                      max="120"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Age"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent transition-all sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-2">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent transition-all sm:text-sm cursor-pointer"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Mobile & Consultation Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-2">
                      WhatsApp / Mobile <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                        <Phone className="w-4 h-4" />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9103099729"
                        className="w-full pl-10.5 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent transition-all sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-2">
                      Consultation Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent transition-all sm:text-sm cursor-pointer"
                    >
                      <option value="In-Clinic">In-Clinic Consultation (KaraNagar)</option>
                      <option value="Home Visit">Home Visit (Srinagar region)</option>
                      <option value="Online Video">Online Video Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Condition Selector */}
                <div>
                  <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-2">
                    Condition / Specialty Needed <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                      <Stethoscope className="w-4 h-4" />
                    </span>
                    <select
                      id="condition-select"
                      name="conditionId"
                      value={formData.conditionId}
                      onChange={handleChange}
                      className="w-full pl-10.5 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent transition-all sm:text-sm cursor-pointer"
                    >
                      {CONDITIONS.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                      <option value="other">Other Symptoms / General Advice</option>
                    </select>
                  </div>
                </div>

                {/* Preferred date and session */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      min={new Date().toISOString().split('T')[0]} // Block previous dates
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent transition-all sm:text-sm cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-2">
                      Preferred Session <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="preferredTimeSlot"
                      value={formData.preferredTimeSlot}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent transition-all sm:text-sm cursor-pointer"
                    >
                      <option value="Morning (8:00 AM - 2:00 PM)">Morning Session (8 AM - 2 PM)</option>
                      <option value="Evening (4:00 PM - 6:00 PM)">Evening Session (4 PM - 6 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-2">
                    Briefly Describe Symptoms (Optional)
                  </label>
                  <textarea
                    name="additionalNotes"
                    rows={3}
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Describe how long you've had this pain, things that make it worse, or previous doctor notes..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent transition-all sm:text-sm resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSuccess}
                  className={`w-full relative inline-flex items-center justify-center p-4 rounded-xl text-base font-bold text-white transition-all transform tracking-wide focus:ring-4 focus:ring-green-150 cursor-pointer ${
                    isSuccess 
                      ? 'bg-gradient-to-r from-green-600 to-teal-600'
                      : 'bg-gradient-to-r from-medical-primary to-medical-secondary hover:shadow-lg shadow-teal-100 hover:-translate-y-0.5'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isSuccess ? (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center text-sm"
                      >
                        <CheckSquare className="w-5 h-5 mr-3 animate-bounce" />
                        Generating WhatsApp message &amp; redirecting...
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center text-sm sm:text-base"
                      >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Book Appointment on WhatsApp
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                <p className="text-[11px] text-center text-gray-400">
                  By clicking, you will be directed containing structured fields to WhatsApp application to hit Send.
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
