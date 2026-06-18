export interface Experience {
  organization: string;
  industry: string;
  title: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface ExperienceData {
  experiences: Experience[];
}
