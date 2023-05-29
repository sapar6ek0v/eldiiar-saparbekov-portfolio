import { FC, useId } from 'react'
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiStyledcomponents, SiExpress, SiMongodb, SiPrisma, SiDocker, SiVite, SiNextdotjs } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { TbBrandRedux } from 'react-icons/tb';
import { DiSass, DiNodejs } from 'react-icons/di';
import { BsGit } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

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
import { FlexContainer, SkillIcon, SkillTitle, SkillCard, GroupSkillIcons } from './styles'

const Skills: FC = () => {
  const data = [
    {
      id: useId(),
      title: "For Frontend Development",
      color: '--dark',
      skills: [
        {
          id: useId(),
          icon: <SiJavascript />,
        },
        {
          id: useId(),
          icon: <SiHtml5 />,
        },
        {
          id: useId(),
          icon: <SiCss3 />,
        },
        {
          id: useId(),
          icon: <SiTypescript />,
        },
        {
          id: useId(),
          icon: <GrReactjs />,
        },
        {
          id: useId(),
          icon: <SiNextdotjs />,
        },
        {
          id: useId(),
          icon: <TbBrandRedux />
        },
        {
          id: useId(),
          icon: <SiVite />
        },
        {
          id: useId(),
          icon: <SiStyledcomponents />
        },
        {
          id: useId(),
          icon: <DiSass />
        },
      ]
    },
    {
      id: useId(),
      title: "For Backend Development",
      color: '--dark4',
      skills: [
        {
          id: useId(),
          icon: <DiNodejs />
        },
        {
          id: useId(),
          icon: <SiExpress />
        },
        {
          id: useId(),
          icon: <SiMongodb />
        },
        {
          id: useId(),
          icon: <SiPrisma />
        },
      ]
    },
    {
      id: useId(),
      title: "Dev Tools",
      color: '--dark5',
      skills: [
        {
          id: useId(),
          icon: <BsGit />
        },
        {
          id: useId(),
          icon: <AiFillGithub />
        },
        {
          id: useId(),
          icon: <SiDocker />
        },
      ]
    },
  ]

  return (
    <ComponentWrapper
      initial='hidden'
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.3,  once: true }}
      data-scroll-section
    >
      <ComponentContainer>
        <Stack>
          <TitleStack>
            <ExtraSmallTitle variants={variants} custom={1.3}>SKILLS</ExtraSmallTitle>
            <Title variants={variants} custom={1.4}>
              Skills that help me<br />
              build applications.
            </Title>
            <TitleLine variants={variants} custom={1.5} />
          </TitleStack>

          <FlexContainer>
            {
              data.map((item, index) =>
                <SkillCard key={item.id} color={item.color} variants={variants} custom={`1.${6 + index}`}>
                  <SkillTitle>{item.title}</SkillTitle>
                  <GroupSkillIcons>
                    {
                      item.skills.map((skill, index) =>
                        <SkillIcon key={skill.id} variants={variants} custom={`1.${6 + index}`}>
                          {skill.icon}
                        </SkillIcon>
                      )
                    }
                  </GroupSkillIcons>
                </SkillCard>
              )
            }
          </FlexContainer>
        </Stack>
      </ComponentContainer>
    </ComponentWrapper>
  )
}

export default Skills