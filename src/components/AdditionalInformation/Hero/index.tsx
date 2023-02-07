import { FC } from 'react'

import { variants } from '../../../constants/animation-constants'
import { ExtraSmallTitle, Stack, Line, ComponentContainer } from '../styles'
import { Title, Wrapper } from './styles'

const Hero: FC = () => {
  return (
    <Wrapper
      id='hero'
      initial='hidden'
      whileInView='enter'
      exit='exit'
    >
      <ComponentContainer>
        <Stack>
          <ExtraSmallTitle variants={variants} custom={1.3}>INTRODUCTION</ExtraSmallTitle>

          <Title variants={variants} custom={1.4}>I&apos;m Frontend <br /> & React Developer</Title>

          <Line variants={variants} custom={1.5} />
        </Stack>
      </ComponentContainer>
    </Wrapper>
  )
}

export default Hero