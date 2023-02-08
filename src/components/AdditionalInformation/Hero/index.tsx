import { FC } from 'react'

import { variants } from '../../../constants/animation-constants'
import { ExtraSmallTitle, Stack, Line, ComponentContainer } from '../styles'
import { Button, ButtonGroup, Group, Title, Wrapper } from './styles'

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

          <Group>
            <Title variants={variants} custom={1.4}>
              I&apos;m Frontend <br /> & React Developer
              <span>.</span>
            </Title>
            <ButtonGroup variants={variants} custom={1.5}>
              <Button type='button'>Hello</Button>
              <Button type='button'>Resume</Button>
            </ButtonGroup>
          </Group>

          <Line variants={variants} custom={1.6} />
        </Stack>
      </ComponentContainer>
    </Wrapper>
  )
}

export default Hero