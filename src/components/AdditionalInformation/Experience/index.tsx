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
import ExperienceCard from './ExperienceCard'
import { Container, TimeLine } from './styles'
import { experiences } from './data'

const Experience: FC = () => {
  return (
    <ComponentWrapper
      id='experience'
      initial='hidden'
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.3 }}
      data-scroll-section
    >
      <Container>
        <Stack>
          <TitleStack>
            <ExtraSmallTitle variants={variants} custom={1.3}>RESUME</ExtraSmallTitle>
            <Title variants={variants} custom={1.4}>Experience</Title>
            <TitleLine variants={variants} custom={1.5} />
          </TitleStack>

          <Description variants={variants} custom={1.6}>
            Lorem ipsum dolor sit amet, consectetur. Adipiscing elit. Aenean et elementum purus.
          </Description>
        </Stack>

        <TimeLine>
          {
            experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index + 1} />
            ))
          }
        </TimeLine>

      </Container>
    </ComponentWrapper>
  )
}

export default Experience