export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface ProfileStat {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  profileImageUrl: string;
  profileImageAlt: string;
  summary: string;
  aboutParagraphs: string[];
  differentiators?: string[];
  stats?: ProfileStat[];
  education: Education[];
  certifications: string[];
}
