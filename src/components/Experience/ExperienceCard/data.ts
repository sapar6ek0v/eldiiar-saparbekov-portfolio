import { nanoid } from 'nanoid';
import { Button, Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Junior Frontend Developer',
    company: '@Boomerang Delivery',
    workingDates: 'August - October 2022',
    companySiteUrl: 'https://boomerang.kg/',
    responsibilities: [
      {
        id: nanoid(4),
        experienceId: '1',
        responsibility:
          'Participation in a project to create an automated delivery system for goods by region using Next.js + trpc3 + prisma + supabase.',
      },
      {
        id: nanoid(4),
        experienceId: '1',
        responsibility: 'Site layout using Next.js + Mantine from Figma layout.',
      },
      {
        id: nanoid(4),
        experienceId: '1',
        responsibility:
          'Adding endpoints to entities using prisma + supabase + trpc and also creating migrations.',
      },
      {
        id: nanoid(4),
        experienceId: '1',
        responsibility:
          'Work with tables (Mantine), calendar (react-calendar timeline) and map connection (react-leaflet).',
      },
    ],
  },
  {
    id: '2',
    title: 'Full Stack Developer/Intern',
    company: '@ZenBit',
    workingDates: 'April - July 2022',
    companySiteUrl: 'https://zenbit.tech/',
    responsibilities: [
      {
        id: nanoid(4),
        experienceId: '2',
        responsibility:
          'Participation in the project to create a site in which the user can find a job, and also publish the work, using technologies such as React + Redux toolkit + Antd-design + TS + Nest.js + TypeOrm + MySql.',
      },
      {
        id: nanoid(4),
        experienceId: '2',
        responsibility: 'Authorization service development.',
      },
      {
        id: nanoid(4),
        experienceId: '2',
        responsibility: 'Authorization service development.',
      },
      {
        id: nanoid(4),
        experienceId: '2',
        responsibility: 'Components development (logic + styling).',
      },
      {
        id: nanoid(4),
        experienceId: '2',
        responsibility: 'Development of chats for communication between the employee and the employer.',
      },
      {
        id: nanoid(4),
        experienceId: '2',
        responsibility:
          'Working with Rest-API: receiving data, sending data, displaying on a page, processing data, etc.',
      },
      {
        id: nanoid(4),
        experienceId: '2',
        responsibility:
          'Creation of the server part of the application with Nest.js + MySql + TypeOrm technologies. Adding endpoints to entities and creating migrations.',
      },
      {
        id: nanoid(4),
        experienceId: '2',
        responsibility:
          'Adding endpoints for sending confirmation email (Mailtrap, Gmail) using Nodemailer + Nest.js.',
      },
      {
        id: nanoid(4),
        experienceId: '2',
        responsibility: 'Documenting the backend of an application using Swagger.',
      },
      {
        id: nanoid(4),
        experienceId: '2',
        responsibility: 'Working on git-flow.',
      },
    ],
  },
];

export const experienceButtons: Button[] = [
  {
    id: nanoid(4),
    text: 'Boomerang Delivery',
    experienceId: '1',
  },
  {
    id: nanoid(4),
    text: 'ZenBit',
    experienceId: '2',
  },
];
