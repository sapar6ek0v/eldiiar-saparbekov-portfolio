import { FC } from 'react'

import { ComponentWrapper, Description, ExtraSmallTitle, Stack, Title, TitleLine, TitleStack } from '../styles'
import { Container, TimeLineGroup, TimeLineSubtitle, TimeLine, TimeLineCard, TimeLineTitle } from './styles'
import { experiences } from './data'

const Experience: FC = () => {
  return (
    <ComponentWrapper>
      <Container>
        <Stack>
          <TitleStack>
            <ExtraSmallTitle>RESUME</ExtraSmallTitle>
            <Title>Experience</Title>
            <TitleLine />
          </TitleStack>

          <Description>
            Lorem ipsum dolor sit amet, consectetur. Adipiscing elit. Aenean et elementum purus.
          </Description>
        </Stack>

        <TimeLine>
          {
            experiences.map((experience) => (
              <TimeLineCard key={experience.id}>
                <TimeLineGroup>
                  <TimeLineSubtitle>{experience.company}</TimeLineSubtitle>
                  <TimeLineSubtitle>{experience.workingDates}</TimeLineSubtitle>
                </TimeLineGroup>
                <TimeLineTitle>{experience.title}</TimeLineTitle>

                <Description>
                  Lorem Ipsum is simply dummy text of the printing industry.
                </Description>
              </TimeLineCard>
            ))
          }
        </TimeLine>

      </Container>
    </ComponentWrapper>
  )
}

export default Experience