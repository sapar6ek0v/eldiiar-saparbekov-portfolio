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
            <Title variants={variants} custom={1.4}>I`m passionate Developer <br /> That like coding</Title>
            <TitleLine variants={variants} custom={1.5} />
          </TitleStack>

          <Description variants={variants} custom={1.6}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
          </Description>
        </Stack>
      </ComponentContainer>
    </ComponentWrapper>
  )
}

export default AboutMe