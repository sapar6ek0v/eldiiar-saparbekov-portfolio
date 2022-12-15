import { nanoid } from 'nanoid';
import QuizApp from '../../public/quiz-app.png';
import FilmDb from '../../public/film-db.png';

export type Project = {
  id: string;
  imageUrl: string;
  stacks: string[];
};

export const projects: Project[] = [
  {
    id: nanoid(4),
    imageUrl: QuizApp.src,
    stacks: ['React', 'TS'],
  },
  {
    id: nanoid(4),
    imageUrl: FilmDb.src,
    stacks: ['React', 'Bootstrap', 'SCSS'],
  },
];
