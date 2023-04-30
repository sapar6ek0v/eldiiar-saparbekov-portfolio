export type Project = {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  features: Feature[];
  demoUrl: string;
  githubUrl: string;
  stacks: Stack[];
  images: Image[];
};

export type Stack = {
  id: string;
  name: string;
};

export type Image = {
  id: string;
  imageUrl: string;
};

export type Feature = {
  id: string;
  title: string;
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  workingDates: string;
  companySiteUrl: string;
  responsibilities: Responsibility[];
};

export type Responsibility = {
  id: string;
  responsibility: string;
};

export type NavLink = {
  id: string;
  path: string;
  title: string;
};
