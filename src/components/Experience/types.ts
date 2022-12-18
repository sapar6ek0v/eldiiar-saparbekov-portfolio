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
  experienceId: string;
  responsibility: string;
};

export type Button = {
  id: string;
  text: string;
  experienceId: string;
};
