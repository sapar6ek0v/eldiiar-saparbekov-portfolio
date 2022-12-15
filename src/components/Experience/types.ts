export type Experience = {
  id: string;
  title: string;
  company: string;
  workingDates: string;
  responsibilities: Responsibility[];
};

export type Responsibility = {
  id: string;
  experienceId: string;
  responsibility: string;
};

export type ExperienceButton = {
  id: string;
  text: string;
  experienceId: string;
};
