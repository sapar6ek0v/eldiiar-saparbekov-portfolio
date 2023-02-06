import { nanoid } from 'nanoid';

import QuizApp from '../../../public/quiz-app.png';
import FilmDb from '../../../public/film-db.png';
import RememberWay from '../../../public/remember-way.png';

export type Project = {
  id: string;
  imageUrl: string;
  name: string;
  siteUrl: string;
  stacks: string[];
  images: string[];
};

export const projects: Project[] = [
  {
    id: nanoid(4),
    imageUrl: FilmDb.src,
    images: [FilmDb.src, FilmDb.src],
    name: 'The Movie DB',
    siteUrl: '',
    stacks: ['React', 'Bootstrap', 'SCSS'],
  },
  {
    id: nanoid(4),
    imageUrl: QuizApp.src,
    siteUrl: '',
    images: [FilmDb.src, FilmDb.src],
    name: 'Quiz App',
    stacks: ['React', 'TS'],
  },
  {
    id: nanoid(4),
    imageUrl: RememberWay.src,
    siteUrl: '',
    images: [FilmDb.src, FilmDb.src],
    name: 'Remember Way',
    stacks: ['JS', 'HTML', 'CSS'],
  },
];
