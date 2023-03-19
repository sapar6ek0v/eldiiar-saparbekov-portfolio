import { useId } from 'react';

export default function useExperiencesData() {
  const experiences = [
    {
      id: useId(),
      title: 'Junior Frontend Developer',
      company: '@Boomerang Delivery',
      workingDates: 'August 2022 - January 2023',
      companySiteUrl: 'https://boomerang.kg/',
      responsibilities: [
        {
          id: useId(),
          responsibility:
            'Participation in a project to create an automated delivery system for goods by region using Next.js + trpc3 + prisma + supabase.',
        },
        {
          id: useId(),
          responsibility: 'Site layout using Next.js + Mantine from Figma layout.',
        },
        {
          id: useId(),
          responsibility:
            'Adding endpoints to entities using prisma + supabase + trpc and also creating migrations.',
        },
        {
          id: useId(),
          responsibility:
            'Work with tables (Mantine), calendar (react-calendar timeline) and map connection (react-leaflet).',
        },
      ],
    },
    {
      id: useId(),
      title: 'Full Stack Developer/Intern',
      company: '@ZenBit',
      workingDates: 'April - July 2022',
      companySiteUrl: 'https://zenbit.tech/',
      responsibilities: [
        {
          id: useId(),
          responsibility:
            'Participation in the project to create a site in which the user can find a job, and also publish the work, using technologies such as React + Redux toolkit + Antd-design + TS + Nest.js + TypeOrm + MySql.',
        },
        {
          id: useId(),
          responsibility: 'Authorization service development.',
        },
        {
          id: useId(),
          responsibility: 'Authorization service development.',
        },
        {
          id: useId(),
          responsibility: 'Components development (logic + styling).',
        },
        {
          id: useId(),
          responsibility: 'Development of chats for communication between the employee and the employer.',
        },
        {
          id: useId(),
          responsibility:
            'Working with Rest-API: receiving data, sending data, displaying on a page, processing data, etc.',
        },
        {
          id: useId(),
          responsibility:
            'Creation of the server part of the application with Nest.js + MySql + TypeOrm technologies. Adding endpoints to entities and creating migrations.',
        },
        {
          id: useId(),
          responsibility:
            'Adding endpoints for sending confirmation email (Mailtrap, Gmail) using Nodemailer + Nest.js.',
        },
        {
          id: useId(),
          responsibility: 'Documenting the backend of an application using Swagger.',
        },
        {
          id: useId(),
          responsibility: 'Working on git-flow.',
        },
      ],
    },
  ];

  return { experiences };
}
