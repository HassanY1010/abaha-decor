export interface CompanyInfo {
  name: string;
  isNameConfirmed: boolean;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  city: string;
  country: string;
  serviceArea: string;
  isCityConfirmed: boolean;
  phone: string;
  whatsappNumber: string;
  email: string;
  isContactConfigured: boolean;
  workingHours: string;
  workingDays: string;
  addressSnippet?: string;
  commercialRegistration?: string; // Optional CR or license note
  socialLinks: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    snapchat?: string;
    tiktok?: string;
  };
  features: {
    showTestimonials: boolean;
    showProjects: boolean;
    showFAQ: boolean;
    showFloatingWhatsApp: boolean;
    showQuoteEstimator: boolean;
  };
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  iconName: string;
  deliverables: string[];
  materialsInfo?: string[];
  processSteps?: { title: string; description: string }[];
  faq?: { question: string; answer: string }[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'hospitality' | 'renovation';
  categoryLabel: string;
  description: string;
  scope: string[];
  location: string;
  imageUrl?: string;
  imageAlt: string;
  accentColor?: string;
  featured?: boolean;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  durationApprox?: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface WhyUsPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface NavLink {
  href: string;
  label: string;
}
