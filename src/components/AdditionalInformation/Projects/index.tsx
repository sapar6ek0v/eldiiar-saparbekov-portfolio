import { FC, useId } from 'react'

import { variants } from '../../../constants/animation-constants'
import { Project } from '../../../helpers/types';
import QuizApp from '../../../public/quiz-app.png';
import FilmDb from '../../../public/film-db.png';
import RememberWay from '../../../public/remember-way.png';
import {
  ComponentWrapper,
  Description,
  ExtraSmallTitle,
  Stack,
  Title,
  TitleLine,
  TitleStack
} from '../styles'
import ProjectCard from './ProjectCard'
import { Container } from './styles'

const Projects: FC = () => {
  const projects: Project[] = [
    {
      id: useId(),
      imageUrl: FilmDb.src,
      images: [FilmDb.src, FilmDb.src],
      name: 'The Movie DB',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      demoUrl: '',
      githubUrl: '',
      stacks: [
        {
          id: useId(),
          name: 'React',
        },
        {
          id: useId(),
          name: 'react-query',
        },
        {
          id: useId(),
          name: 'styled-components',
        },
      ],
    },
    {
      id: useId(),
      imageUrl: QuizApp.src,
      demoUrl: '',
      githubUrl: '',
      images: [FilmDb.src, FilmDb.src],
      name: 'Quiz App',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      stacks: [
        {
          id: useId(),
          name: 'React',
        },
        {
          id: useId(),
          name: 'TS',
        },
      ],
    },
    {
      id: useId(),
      imageUrl: RememberWay.src,
      demoUrl: '',
      githubUrl: '',
      images: [FilmDb.src, FilmDb.src],
      name: 'Remember Way',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      stacks: [
        {
          id: useId(),
          name: 'JS',
        },
        {
          id: useId(),
          name: 'HTML',
        },
        {
          id: useId(),
          name: 'SCSS',
        },
      ],
    },
  ];

  return (
    <ComponentWrapper
      id='projects'
      initial='hidden'
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.3 }}
      data-scroll-section
    >
      <Container>
        <Stack>
          <TitleStack>
            <ExtraSmallTitle variants={variants} custom={1.3}>PROJECT</ExtraSmallTitle>
            <Title variants={variants} custom={1.4}>Project, I&apos;ve created</Title>
            <TitleLine variants={variants} custom={1.5} />
          </TitleStack>

          <Description variants={variants} custom={1.6}>
            Here are some projects that I did myself and participated in.
          </Description>
        </Stack>
        {
          projects.map((project, index) =>
            <ProjectCard key={project.id} project={project} index={index + 1} />
          )
        }
      </Container>
    </ComponentWrapper>
  )
}

export default Projects