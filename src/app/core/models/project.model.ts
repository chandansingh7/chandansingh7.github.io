export interface ProjectDiagram {
  name: string;
  type: string;
  imageUrl?: string;
}

export interface ProjectSequence {
  title: string;
  steps: string[];
}

export interface RelatedRepo {
  label: string;
  url: string;
}

export interface ProjectRisk {
  risk: string;
  mitigation: string;
}

export interface ProjectApiDomain {
  prefix: string;
  capabilities: string;
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
  githubUrl: string;
  liveDemoUrl: string;
  reportSummary?: string;
  scope?: string[];
  deliverables?: string[];
  functionalRequirements?: string[];
  nonFunctionalRequirements?: string[];
  risks?: ProjectRisk[];
  apiDomains?: ProjectApiDomain[];
  relatedRepos: RelatedRepo[];
  diagrams: ProjectDiagram[];
  useCases: string[];
  sequences: ProjectSequence[];
  entities: string[];
  featured?: boolean;
}

export interface ProjectReportDialogData {
  project: Project;
  figjamBoardUrl: string;
}

export interface ProjectData {
  figjamBoardUrl: string;
  projects: Project[];
}
