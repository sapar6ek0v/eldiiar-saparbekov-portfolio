import { FC } from 'react'

import { variants } from '../../../constants/animation-constants'
import { handleDownloadPDF } from '../../../helpers/functions/handleDownloadPDF'
import { ExtraSmallTitle, Stack, Line, ComponentContainer } from '../styles'
import InformScrollBar from './InformScrollBar'
import { Button, ButtonGroup, Group, Title, Wrapper } from './styles'

const Hero: FC = () => {
  return (
    <Wrapper
      id='hero'
      initial='hidden'
      whileInView='enter'
      exit='exit'
      data-scroll-section
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
              <a href='/cv.pdf' download>
                <Button type='button'>
                  Resume
                </Button>
              </a>
            </ButtonGroup>
          </Group>

          <Line variants={variants} custom={1.6} />
        </Stack>
      </ComponentContainer>

      <InformScrollBar />
    </Wrapper>
  )
}

export default Hero