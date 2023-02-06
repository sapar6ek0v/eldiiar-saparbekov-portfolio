import { FC } from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { ComponentWrapper, Description, ExtraSmallTitle, Stack, Title, TitleLine, TitleStack } from '../styles'
import { Button, CircleIcon, Container, Form, FormFooter, Input, InformTitle, Textarea } from './styles'

const Contact: FC = () => {
  return (
    <ComponentWrapper>
      <Container>
        <Stack>
          <TitleStack>
            <ExtraSmallTitle>CONTACT</ExtraSmallTitle>
            <Title>Let&apos;s get in touch</Title>
            <TitleLine />
          </TitleStack>

          <Description>
            Fill out my form below and send me an email.
          </Description>
        </Stack>

        <Form>
          <Input type='text' placeholder='* Name' />
          <Input type='text' placeholder='* E-mail' />
          <Input type='number' placeholder='Phone' />
          <Textarea rows={5} placeholder='* Message'></Textarea>
          <FormFooter>
            <Button>
              <span>Send</span>
              <CircleIcon icon={faArrowRight} />
            </Button>

            <InformTitle>* Marked fields are required to fill.</InformTitle>
          </FormFooter>
        </Form>
      </Container>
    </ComponentWrapper>
  )
}

export default Contact