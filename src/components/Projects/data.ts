import { nanoid } from 'nanoid';
import QuizApp from '../../public/quiz-app.png';
import FilmDb from '../../public/film-db.png';
import RememberWay from '../../public/remember-way.png';

export type Project = {
  id: string;
  imageUrl: string;
  siteUrl: string;
  stacks: string[];
};

export const projects: Project[] = [
  {
    id: nanoid(4),
    imageUrl: FilmDb.src,
    siteUrl: '',
    stacks: ['React', 'Bootstrap', 'SCSS'],
  },
  {
    id: nanoid(4),
    imageUrl: QuizApp.src,
    siteUrl: '',
    stacks: ['React', 'TS'],
  },
  {
    id: nanoid(4),
    imageUrl: RememberWay.src,
    siteUrl: '',
    stacks: ['JS', 'HTML', 'CSS'],
  },
];
