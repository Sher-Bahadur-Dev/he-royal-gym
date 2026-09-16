export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  tagline: string;
  image: string;
  highlights: string[];
}

export interface FeatureItem {
  number: string;
  title: string;
  description: string;
  iconName: 'Dumbbell' | 'HeartPulse' | 'UserCheck' | 'ShieldCheck' | 'Sparkles' | 'TrendingUp';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  interestedProgram: string;
  message: string;
}
