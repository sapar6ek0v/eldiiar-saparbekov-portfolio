import { FC, useState } from 'react'
import { useForm } from '@mantine/form'

import { variants } from '../../../../constants/animation-constants'
import { successNotification } from '../../../../helpers/succesNotification'
import {
  Form,
  Input,
  Textarea,
  FormFooter,
  Button,
  CircleIcon,
  InformTitle,
  CircleLoader,
} from './styles'

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Please, enter correct email'),
      name: (value) => (value.length < 2 ? 'Please, enter your name' : null),
      message: (value) => (value.length < 2 ? 'Please, write a message' : null),
    }
  });

  const handleSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
      const response = await fetch(`${SERVER_URL}/api/sent-mail`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
      });
      const content = await response.json();
      console.log({ content });
      successNotification(content?.message);
      form.reset();
      setIsLoading(false);

    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };
  console.log(form.errors)
  return (
    <Form
      initial='hidden'
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.2 }}
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <Input
        {...form.getInputProps('name')}
        type='text'
        placeholder='* Name'
        variants={variants}
        custom={1.3}
      />
      <Input
        {...form.getInputProps('email')}
        type='text'
        placeholder='* E-mail'
        variants={variants}
        custom={1.4}
      />
      <Textarea
        {...form.getInputProps('message')}
        rows={5}
        placeholder='* Message'
        variants={variants}
        custom={1.4}
      ></Textarea>
      <FormFooter variants={variants} custom={1.5}>
        <Button disabled={isLoading}>
          <span>Send</span>
          {isLoading ? <CircleLoader /> : <CircleIcon />}
        </Button>

        <InformTitle>* Marked fields are required to fill.</InformTitle>
      </FormFooter>
    </Form>
  )
}

export default ContactForm