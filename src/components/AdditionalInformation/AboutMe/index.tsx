import { FC } from 'react'

import { variants } from '../../../constants/animation-constants'
import {
  ExtraSmallTitle,
  TitleLine,
  Title,
  TitleStack,
  Stack,
  Description,
  ComponentWrapper,
  ComponentContainer
} from '../styles'

const AboutMe: FC = () => {
  return (
    <ComponentWrapper
      id='about'
      initial='hidden'
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.3 }}
      data-scroll-section
    >
      <ComponentContainer>
        <Stack>
          <TitleStack  >
            <ExtraSmallTitle variants={variants} custom={1.3}>ABOUT</ExtraSmallTitle>
            <Title variants={variants} custom={1.4}>Hi, I&apos;m Eldiiar, <br /> Frontend Developer</Title>
            <TitleLine variants={variants} custom={1.5} />
          </TitleStack>

          <Description variants={variants} custom={1.6}>
            Hello again, I&apos;m Frontend Developer with 1 year of experience and good knowledge in creating Web applications using React, Next.js . I also have experience creating full stack applications on the MERN stack. <br />
            <br />
            To this day, I have managed to work with awesome developers and great people and have been able to learn a lot from them. And I would like to use this knowledge to help my future team.
          </Description>
        </Stack>
      </ComponentContainer>
    </ComponentWrapper>
  )
}

export default AboutMe