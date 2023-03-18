export type Project = {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  stacks: Stack[];
  images: string[];
};

export type Stack = {
  id: string;
  name: string;
};
