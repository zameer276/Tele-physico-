export interface Condition {
  id: string;
  name: string;
  category: 'Spine & Joints' | 'Neurological' | 'Neuropathy & Pain' | 'Specialized';
  description: string;
  symptoms: string[];
  iconName: string; // Used to match Lucide React icons
  detailedInfo: string;
}

export interface AppointmentFormData {
  patientName: string;
  phone: string;
  age: string;
  gender: string;
  conditionId: string;
  appointmentType: 'In-Clinic' | 'Home Visit' | 'Online Video';
  preferredDate: string;
  preferredTimeSlot: string; // "Morning (8 AM - 2 PM)" or "Evening (4 PM - 6 PM)"
  additionalNotes: string;
}

export interface DoctorCredential {
  role: string;
  institution: string;
  periodOrLocation?: string;
  type: 'academic' | 'clinical' | 'specialist';
}
