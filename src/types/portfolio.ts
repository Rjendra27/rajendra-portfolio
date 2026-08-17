export interface Candidate {
  name: string;
  headline: string;
  shortHeadline: string;
  bio: string;
  email: string;
  phone: string;
  github: string;
  linkedin?: string;
  location: string;
  education: Education[];
  focusAreas: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  details?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Full Stack' | 'AI / ML' | 'Computer Vision' | 'Data';
  description: string;
  highlightText: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  mockupType?: 'terminal' | 'flowchart' | 'calculator' | 'chart' | 'voice';
  caseStudy: {
    overview: string;
    problem: string;
    approach: string;
    architecture?: string[];
    challenges?: string;
    whatILearned: string;
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    icon?: string;
    badge?: string;
  }[];
}

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  badge?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  description?: string;
}
