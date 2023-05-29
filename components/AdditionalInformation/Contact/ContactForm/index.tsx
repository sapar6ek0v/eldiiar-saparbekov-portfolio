import { FC, useState } from 'react'
import { useForm } from '@mantine/form'
import { TextInput, Textarea } from '@mantine/core'

import { variants } from '../../../../constants/animation-constants'
import { successNotification } from '../../../../helpers/successNotification'
import { errorNotification } from '../../../../helpers/errorNotification'
import {
  Form,
  InputBox,
  FormFooter,
  Button,
  CircleIcon,
  InformTitle,
  CircleLoader,
  useInputStyles,
} from './styles'

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { classes } = useInputStyles();
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
      successNotification(content?.message);
      form.reset();
      setIsLoading(false);

    } catch (error: any) {
      form.reset();
      errorNotification(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      initial='hidden'
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.2, once: true }}
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <InputBox
        variants={variants}
        custom={1.3}
      >
        <TextInput
          {...form.getInputProps('name')}
          type='text'
          placeholder='* Name'
          classNames={{
            input: classes.input,
            error: classes.error
          }}
        />
      </InputBox>
      <InputBox
        variants={variants}
        custom={1.4}
      >
        <TextInput
          {...form.getInputProps('email')}
          type='text'
          placeholder='* E-mail'
          classNames={{
            input: classes.input,
            error: classes.error
          }}
        />
      </InputBox>
      <InputBox
        variants={variants}
        custom={1.5}
      >
        <Textarea
          {...form.getInputProps('message')}
          rows={10}
          placeholder='* Message'
          classNames={{
            input: classes.input,
            error: classes.error
          }}
        ></Textarea>
      </InputBox>
      <FormFooter variants={variants} custom={1.6}>
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