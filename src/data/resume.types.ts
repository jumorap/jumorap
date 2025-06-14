export type Resume = {
  projects: ProjectItem[];
  socialLinks: SocialLink[];
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
};

type ProjectLink = {
  url: string;
  label: string;
  icon: React.ReactNode;
};

export type ProjectItem = {
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  icon: React.ReactNode;
};

export type SocialLink = {
  url: string;
  label: string;
  icon: React.ReactNode;
};

export type EducationItem = {
  key: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  icon: React.ReactNode;
};

export type ExperienceItem = {
  company: string;
  link: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
};

type Skill = {
  name: string;
  key: string;
};

export type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};
