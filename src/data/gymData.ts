import { FeatureItem, GalleryItem, ProgramItem } from '../types';

export const BUSINESS_INFO = {
  name: 'The Royal Gym',
  tagline: 'BUILD YOUR STRONGEST SELF',
  address: {
    line1: '1st Floor, Khan Arcade',
    line2: 'Ferdous Market, Gulberg III',
    city: 'Lahore',
    postalCode: '54000',
    country: 'Pakistan',
    full: '1st Floor, Khan Arcade, Ferdous Market, Gulberg III, Lahore, 54000',
  },
  phone: {
    display: '+92 321 8430880',
    tel: '+923218430880',
  },
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Khan+Arcade+Ferdous+Market+Gulberg+III+Lahore+Pakistan',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Khan+Arcade+Ferdous+Market+Gulberg+III+Lahore&output=embed',
};

export const FEATURES: FeatureItem[] = [
  {
    number: '01',
    title: 'Strength Training',
    description: 'Focused training for building strength and improving physical performance.',
    iconName: 'Dumbbell',
  },
  {
    number: '02',
    title: 'Cardio & Fitness',
    description: 'Training designed to support overall fitness and endurance.',
    iconName: 'HeartPulse',
  },
  {
    number: '03',
    title: 'Personal Training',
    description: 'One-on-one training support for members who want more personalized guidance.',
    iconName: 'UserCheck',
  },
  {
    number: '04',
    title: 'Modern Training Environment',
    description: 'A focused environment designed around consistent training.',
    iconName: 'ShieldCheck',
  },
  {
    number: '05',
    title: 'Beginner-Friendly Workouts',
    description: 'Approachable training options for people starting or returning to fitness.',
    iconName: 'Sparkles',
  },
  {
    number: '06',
    title: 'Consistent Fitness Progress',
    description: 'Encourage consistency and sustainable progress through regular training.',
    iconName: 'TrendingUp',
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'strength-muscle',
    title: 'Strength & Muscle Building',
    tagline: 'Power & Muscular Development',
    description:
      'Build strength and work toward improved muscular development through structured training.',
    image:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Compound movements', 'Progressive loading', 'Technique mastery'],
  },
  {
    id: 'weight-management',
    title: 'Weight Management',
    tagline: 'Active & Sustainable Lifestyle',
    description:
      'Fitness-focused training to support an active and consistent lifestyle.',
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Metabolic conditioning', 'High-energy routines', 'Sustainable habit building'],
  },
  {
    id: 'general-fitness',
    title: 'General Fitness',
    tagline: 'Endurance & Physical Conditioning',
    description:
      'Improve overall fitness, movement, endurance, and physical conditioning.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Functional movement', 'Core stability', 'Stamina building'],
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    tagline: 'Customized 1-on-1 Guidance',
    description:
      'Personalized training support based on individual fitness goals.',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Goal-specific plans', 'Form correction', 'Individual pace & accountability'],
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'img-1',
    title: 'Free Weights & Resistance',
    category: 'Strength Zone',
    image:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    caption: 'Modern barbell and weight racks arranged for uninterrupted training focus.',
  },
  {
    id: 'img-2',
    title: 'Dedicated Lifting Platform',
    category: 'Powerlifting',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    caption: 'Solid platforms designed for safe, heavy, and structured strength sessions.',
  },
  {
    id: 'img-3',
    title: 'Functional Conditioning Area',
    category: 'Endurance',
    image:
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
    caption: 'Open space optimized for functional athletic drills and body conditioning.',
  },
  {
    id: 'img-4',
    title: 'Dumbbell & Bench Station',
    category: 'Hypertrophy',
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop',
    caption: 'Graduated dumbbell stations supporting varied strength and physique targets.',
  },
  {
    id: 'img-5',
    title: 'Focused Training Environment',
    category: 'Athletic Space',
    image:
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop',
    caption: 'Clean, energetic visual aesthetic designed to maximize training motivation.',
  },
  {
    id: 'img-6',
    title: 'Cardio & Movement Zone',
    category: 'Conditioning',
    image:
      'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop',
    caption: 'Cardiovascular training equipment supporting cardiovascular endurance.',
  },
];
