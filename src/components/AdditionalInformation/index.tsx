import { FC, useRef } from 'react'

import useScroll from '../../helpers/hooks/useScroll';
import Hero from './Hero'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Skills from './Skills'
import Contacts from './Contact'
import Projects from './Projects'
import { Container, Wrapper } from './styles'

const AdditionalInformation: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  // useScroll(containerRef);

  return (
    <Wrapper>
      <Container ref={containerRef} data-scroll-container>
        <Hero />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Contacts />
      </Container>
    </Wrapper>
  )
}

export default AdditionalInformation



