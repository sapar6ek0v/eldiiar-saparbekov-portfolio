import { FC } from 'react'

import { variants } from '../../../constants/animation-constants'
import { cvUrl } from '../../../constants/cvUrl'
import useMediaQuery from '../../../helpers/hooks/useMediaQuery'
import { LinkBtn } from '../../styles'
import { ExtraSmallTitle, Stack, Line, ComponentContainer } from '../styles'
import InformScrollBar from './InformScrollBar'
import { ButtonGroup, Group, Title, Wrapper } from './styles'

const Hero: FC = () => {
  const matches = useMediaQuery('(min-width: 768px)')

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
              <LinkBtn href='#contacts'>Let&apos;s Talk</LinkBtn>
              <LinkBtn
                href={cvUrl}
                target='_blank'
              >
                Resume
              </LinkBtn>
            </ButtonGroup>
          </Group>

          <Line variants={variants} custom={1.6} />
        </Stack>
      </ComponentContainer>

      {matches ? <InformScrollBar /> : null}
    </Wrapper>
  )
}

export default Hero