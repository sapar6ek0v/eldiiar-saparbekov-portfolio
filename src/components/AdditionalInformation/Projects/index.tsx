import { FC } from 'react'

import { variants } from '../../../constants/animation-constants'
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
import { projects } from './data'


const Projects: FC = () => {
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
            Lorem ipsum dolor sit amet, consectetur. Adipiscing elit. Aenean et elementum purus.
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