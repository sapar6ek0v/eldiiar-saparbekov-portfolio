import { FC } from 'react'

import Hero from './Hero'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import { Container, Wrapper } from './styles'

const AdditionalInformation: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Hero />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </Wrapper>
  )
}

export default AdditionalInformation