import { Condition, DoctorCredential } from './types';

export const DOCTOR_INFO = {
  name: "Dr. Wassim Mushtaq",
  degrees: ["MPT (Neurology)"],
  tagline: "Expert Care. Evidence Based. Patient Focused.",
  clinicName: "TelePhysio Pro",
  clinicSubtitle: "Physiotherapy Clinic",
  photoPlaceholder: "/doctor_placeholder.png", // A stylized fallback or beautiful visual SVG can be rendered matching this
  phone: "9103099729",
  whatsappPhone: "919103099729", // Country code 91 for India + phone 9103099729
  address: "Near to Sheikh ul Alam Hospital, KaraNagar, Srinagar",
  addressShort: "KaraNagar, Near Sheikh ul Alam Hospital",
  timings: [
    { label: "Morning Session", hours: "8:00 AM to 2:00 PM" },
    { label: "Evening Session", hours: "4:00 PM to 6:00 PM" }
  ],
  rawTimings: {
    morningStart: 8,
    morningEnd: 14,
    eveningStart: 16,
    eveningEnd: 18
  }
};

export const CREDENTIALS: DoctorCredential[] = [
  {
    role: "Ex Assistant Professor of Physiotherapy",
    institution: "Brainware University (BWU)",
    type: "academic"
  },
  {
    role: "Ex Lecturer of Physiotherapy",
    institution: "Jazan University",
    type: "academic"
  },
  {
    role: "Specialist Physiotherapist",
    institution: "Jazan Hospital, Saudi Arabia",
    type: "clinical"
  }
];

export const CONDITIONS: Condition[] = [
  {
    id: "neck-pain",
    name: "Neck Pain",
    category: "Spine & Joints",
    description: "Treatment for acute/chronic neck pain, physical cervical strains, and spasm rehabilitation.",
    symptoms: ["Cervical stiffness & tension", "Muscle spasms around neck & shoulders", "Radiating headache/migraine-like pain", "Occasional tingling radiating to arm"],
    iconName: "Activity",
    detailedInfo: "Physiotherapy restores cervical spine biomechanics, relieves muscle spindle tension via mechanical mobilization, and applies progressive postural muscle reconditioning."
  },
  {
    id: "low-back-pain",
    name: "Low Back Ache (Disc Prolapse)",
    category: "Spine & Joints",
    description: "Rehabilitation for herniated/slipped discs, severe lumbar strain, and sciatica relief.",
    symptoms: ["Sharp back pain with bending", "Sciatic nerve pain shooting down leg", "Localized lumbar muscle guarding", "Numbness or weakness in feet"],
    iconName: "Activity",
    detailedInfo: "Utilizes advanced lumbar unloading positions, McKenzie extension-flexion response, and deep spinal stabilizers (multifidus & transversus abdominis) activation to relieve pressure."
  },
  {
    id: "frozen-shoulder",
    name: "Frozen Shoulder (Adhesive Capsulitis)",
    category: "Spine & Joints",
    description: "Step-by-step restoration of shoulder movement stiffness and nighttime joint throbbing.",
    symptoms: ["Severe restriction in lifting arm", "Intense night pain when lying on shoulder", "Progressive loss of outer rotation", "Deep joint-capsule ache"],
    iconName: "Activity",
    detailedInfo: "Systematic glenohumeral capsular stretching, gentle grade mobilization, and active-assisted functional range exercises designed to minimize inflammatory stiffening."
  },
  {
    id: "knee-osteoarthritis",
    name: "Knee Osteoarthritis",
    category: "Spine & Joints",
    description: "Evidence-guided management of knee degeneration to prevent surgery and regain mobility.",
    symptoms: ["Grating feeling or crepitus on bending", "Morning knee stiffness lasting >15 mins", "Swelling after walking short distances", "Reduced thigh muscle strength"],
    iconName: "Activity",
    detailedInfo: "Targeted vastus medialis obliquus (VMO) strengthening, weight redistribution biofeedback, and progressive joint loading to enhance shock absorption naturally."
  },
  {
    id: "soft-tissue-injuries",
    name: "Soft Tissue Injuries",
    category: "Spine & Joints",
    description: "Rehab for ligament sprains, muscle strains, joint bruises, and sports injuries.",
    symptoms: ["Sudden joint swelling or bruising", "Instant tenderness over a tendon/ligament", "Inability to weight-bear comfortably", "Instability during joint movements"],
    iconName: "Activity",
    detailedInfo: "Structured progressive loading (PEACE & LOVE protocol), tissue-aligned stretching, balance proprioception retraining, and return-to-sport agility coaching."
  },
  {
    id: "post-stroke-rehab",
    name: "Post Stroke & Parkinson's Rehab",
    category: "Neurological",
    description: "Advanced neuro-rehabilitation to restore coordination, balance, and physical independence.",
    symptoms: ["One-sided arm/leg weakness (hemiparesis)", "Balance instability & high fall risk", "Tremors, rigidity, or walking freeze", "Spasticity or stiffening of fingers"],
    iconName: "Brain",
    detailedInfo: "Integrates Neurodevelopmental Treatment (NDT), balance platform coordination exercises, gait retraining, and motor imagery to facilitate brain neuroplasticity."
  },
  {
    id: "diabetic-neuropathy",
    name: "Diabetic & Peripheral Neuropathies",
    category: "Neuropathy & Pain",
    description: "Restoring sensation feedback and managing burning/tingling foot and hand sensations.",
    symptoms: ["Burning, tingling, or 'pins and needles'", "Complete numbness in feet / gloves feel", "Loss of ground sensation/unsteady walk", "Worse foot pain during rest or night"],
    iconName: "Zap",
    detailedInfo: "Multisensory balance training, customized non-weight-bearing circulatory exercises, sensation stimulation, and foot safety counseling to avoid ulcers."
  },
  {
    id: "compressive-neuropathy",
    name: "Pain due to Compressive Neuropathies",
    category: "Neuropathy & Pain",
    description: "Treating structural entrapments like Carpal Tunnel or Cubital Tunnel syndrome.",
    symptoms: ["Hand/wrist numbness (thumb & 2 fingers)", "Shooting pain near elbow or wrist joints", "Weakness in holding keys or utensils", "Pain radiating along the nerve path"],
    iconName: "Zap",
    detailedInfo: "Nerve flossing and mobilization techniques, customized splinting bio-education, soft tissue dynamic decompression, and mechanical ergonomics instruction."
  },
  {
    id: "bell-palsy",
    name: "Trigeminal Neuralgia / Bell's Palsy",
    category: "Neurological",
    description: "Rehab for facial weakness, asymmetrical smiles, and cranial nerve pain.",
    symptoms: ["Drooping of one side of the face", "Inability to close eyes or smile fully", "Severe shooting pain in cheeks or jaw", "Difficulty eating or speaking normally"],
    iconName: "Brain",
    detailedInfo: "Facial neuromuscular facilitation (PNF), symmetrical mirror feedback therapy, precise electrical stimulation guidance, and muscle-repatterning techniques."
  },
  {
    id: "urinary-incontinence",
    name: "Urinary Incontinence",
    category: "Specialized",
    description: "Discreet pelvic floor rehabilitation to restore control and confidence.",
    symptoms: ["Accidental leakage during cough/sneeze", "Frequent, uncontrollable sudden urge", "Weakened bladder support muscles", "Pelvic core muscle fatigue"],
    iconName: "Heart",
    detailedInfo: "Scientific pelvic floor muscle training (Kegel's progression) with sensory feedback instruction, core abdominal integration, and customized bladder retraining routines."
  }
];
