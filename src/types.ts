export type Language = 'hi' | 'en';
export type FontTheme = 'editorial' | 'modern' | 'academic' | 'indian';

export interface Course {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  category: 'ac-hvac' | 'refrigeration' | 'appliances' | 'electronics' | 'electrical';
  duration: {
    en: string;
    hi: string;
  };
  level: {
    en: string;
    hi: string;
  };
  badge: {
    en: string;
    hi: string;
  };
  shortDesc: {
    en: string;
    hi: string;
  };
  iconName: string;
  practicalPercent: number;
  expectedSalary: {
    en: string;
    hi: string;
  };
  businessPotential: {
    en: string;
    hi: string;
  };
  keyTopics: {
    en: string[];
    hi: string[];
  };
  syllabus: {
    module: { en: string; hi: string };
    topics: { en: string[]; hi: string[] };
  }[];
  toolsLearned: { en: string[]; hi: string[] };
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: { en: string; hi: string };
  city: string;
  rating: number;
  review: {
    en: string;
    hi: string;
  };
  courseTaken: { en: string; hi: string };
  currentStatus: { en: string; hi: string };
  avatar: string;
  date: string;
  source: 'google' | 'instagram' | 'direct';
}

export interface FaqItem {
  id: string;
  question: {
    en: string;
    hi: string;
  };
  answer: {
    en: string;
    hi: string;
  };
  category: string;
}

export interface AdmissionInquiry {
  id: string;
  name: string;
  phone: string;
  courseId: string;
  courseName: string;
  city: string;
  hostelRequired?: boolean;
  preferredBatch: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'enrolled';
}

export interface GalleryItem {
  id: string;
  title: { en: string; hi: string };
  category: 'lab' | 'students' | 'tools' | 'certificates';
  image: string;
  description: { en: string; hi: string };
}
