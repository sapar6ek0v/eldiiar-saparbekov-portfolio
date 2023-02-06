import { FC } from 'react'

import { ExtraSmallTitle, Stack, Line, ComponentContainer } from '../styles'
import { Title, Wrapper } from './styles'

const Hero: FC = () => {
  return (
    <Wrapper>
      <ComponentContainer>
        <Stack>
          <ExtraSmallTitle>INTRODUCTION</ExtraSmallTitle>

          <Title>I&apos;m Frontend Developer & React Developer</Title>

          <Line />
        </Stack>
      </ComponentContainer>
    </Wrapper>
  )
}

export default Hero