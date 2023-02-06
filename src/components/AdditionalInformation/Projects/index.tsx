import { FC } from 'react'


import { ComponentWrapper, Description, ExtraSmallTitle, Stack, Title, TitleLine, TitleStack } from '../styles'
import ProjectCard from './ProjectCard'
import { Container } from './styles'
import { projects } from './data'


const Projects: FC = () => {
  return (
    <ComponentWrapper>
      <Container>
        <Stack>

          <TitleStack>
            <ExtraSmallTitle>PROJECT</ExtraSmallTitle>
            <Title>Project, I&apos;ve created</Title>
            <TitleLine />
          </TitleStack>

          <Description>
            Lorem ipsum dolor sit amet, consectetur. Adipiscing elit. Aenean et elementum purus.
          </Description>
        </Stack>

        {
          projects.map((project) => <ProjectCard key={project.id} project={project} />)
        }
      </Container>
    </ComponentWrapper>
  )
}

export default Projects