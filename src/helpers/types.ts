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
