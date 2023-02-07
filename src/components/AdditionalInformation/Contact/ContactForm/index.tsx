import { FC } from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { variants } from '../../../../constants/animation-constants'
import { Form, Input, Textarea, FormFooter, Button, CircleIcon, InformTitle } from './styles'

const ContactForm: FC = () => {
  return (
    <Form
      initial='hidden'
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.2 }}
    >
      <Input type='text' placeholder='* Name' variants={variants} custom={1.3} />
      <Input type='text' placeholder='* E-mail' variants={variants} custom={1.4} />
      <Input type='number' placeholder='Phone' variants={variants} custom={1.4} />
      <Textarea rows={5} placeholder='* Message' variants={variants} custom={1.5}></Textarea>
      <FormFooter variants={variants} custom={1.6}>
        <Button>
          <span>Send</span>
          <CircleIcon icon={faArrowRight} />
        </Button>

        <InformTitle>* Marked fields are required to fill.</InformTitle>
      </FormFooter>
    </Form>
  )
}

export default ContactForm