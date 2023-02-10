import { FC } from 'react'

import { variants } from '../../../constants/animation-constants'
import ContactForm from './ContactForm'
import { Container } from './styles'
import {
  ComponentWrapper,
  Description,
  ExtraSmallTitle,
  Stack,
  Title,
  TitleLine,
  TitleStack
} from '../styles'

const Contacts: FC = () => {
  return (
    <ComponentWrapper
      id='contacts'
      initial='hidden'
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.3 }}
      data-scroll-section
    >
      <Container>
        <Stack>
          <TitleStack>
            <ExtraSmallTitle variants={variants} custom={1.3}>CONTACT</ExtraSmallTitle>
            <Title variants={variants} custom={1.4}>Let&apos;s get in touch</Title>
            <TitleLine variants={variants} custom={1.5} />
          </TitleStack>

          <Description variants={variants} custom={1.6}>
            Fill out my form below and send me an email.
          </Description>
        </Stack>

        <ContactForm />
      </Container>
    </ComponentWrapper>
  )
}

export default Contacts