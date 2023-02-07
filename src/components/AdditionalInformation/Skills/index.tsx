import { FC } from 'react'
import { faCss3Alt, faHtml5, faNode, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { nanoid } from 'nanoid'

import { variants } from '../../../constants/animation-constants'
import {
  ComponentContainer,
  ComponentWrapper,
  ExtraSmallTitle,
  Stack,
  Title,
  TitleLine,
  TitleStack
} from '../styles'
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
    <ComponentWrapper
      initial='hidden'
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.3 }}
    >
      <ComponentContainer>
        <Stack>
          <TitleStack>
            <ExtraSmallTitle variants={variants} custom={1.3}>SKILLS</ExtraSmallTitle>
            <Title variants={variants} custom={1.4}>
              Skills I have collected <br />
              over the years and days.
            </Title>
            <TitleLine variants={variants} custom={1.5} />
          </TitleStack>

          <Grid>
            {
              skills.map((skill, index) =>
                <SkillCard key={skill.id} variants={variants} custom={`1.${6 + index}`}>
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