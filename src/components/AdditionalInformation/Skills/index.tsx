import { FC } from 'react'
import { faCss3Alt, faHtml5, faNode, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { nanoid } from 'nanoid'

import { ComponentContainer, ComponentWrapper, ExtraSmallTitle, Stack, Title, TitleLine, TitleStack } from '../styles'
import { Grid, SkillCard } from './styles'

const skills = [
  {
    id: nanoid(4),
    icon: faSquareJs,
  },
  {
    id: nanoid(4),
    icon: faHtml5,
  },
  {
    id: nanoid(4),
    icon: faCss3Alt,
  },
  {
    id: nanoid(4),
    icon: faReact,
  },
  {
    id: nanoid(4),
    icon: faNode,
  },
]

const Skills: FC = () => {
  return (
    <ComponentWrapper>
      <ComponentContainer>
        <Stack>
          <TitleStack>
            <ExtraSmallTitle>SKILLS</ExtraSmallTitle>
            <Title>
              Skills I have collected <br />
              over the years and days.
            </Title>
            <TitleLine />
          </TitleStack>

          <Grid>
            {
              skills.map((skill) =>
                <SkillCard key={skill.id}>
                  <FontAwesomeIcon icon={skill.icon} />
                </SkillCard>
              )
            }
          </Grid>
        </Stack>
      </ComponentContainer>
    </ComponentWrapper>
  )
}

export default Skills