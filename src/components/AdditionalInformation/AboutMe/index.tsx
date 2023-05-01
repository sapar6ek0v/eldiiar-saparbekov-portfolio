import { FC } from 'react'
import { Highlight } from '@mantine/core'

import { variants } from '../../../constants/animation-constants'
import {
  ExtraSmallTitle,
  TitleLine,
  Title,
  TitleStack,
  Stack,
  Description,
  ComponentWrapper,
  ComponentContainer
} from '../styles'

const AboutMe: FC = () => {

  return (
    <ComponentWrapper
      id='about'
      initial='hidden'
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.3 }}
      data-scroll-section
    >
      <ComponentContainer>
        <Stack>
          <TitleStack>
            <ExtraSmallTitle variants={variants} custom={1.3}>ABOUT</ExtraSmallTitle>
            <Title
              variants={variants}
              custom={1.4}
            >
              <span>
                Hi, I&apos;m Eldiiar, <br /> Frontend Developer
              </span>
            </Title>
            <TitleLine variants={variants} custom={1.5} />
          </TitleStack>

          <Description variants={variants} custom={1.6}>
            <Highlight
              highlight={['Frontend Developer', 'React', 'Next.js', 'MERN stack']}
              highlightStyles={(theme) => ({
                color: "var(--yellow)",
                fontWeight: 400,
                background: 'transparent',
                position: 'relative',
                cursor: 'pointer',

                "&::after": {
                  content: '""',
                  width: 0,
                  height: 1.5,
                  position: 'absolute',
                  left: 0,
                  bottom: 1,
                  background: 'var(--yellow)',
                  transition: 'var(--transition)',
                },

                '&:hover': {
                  '&::after': {
                    width: '100%',
                  },
                },
              })}

            >
              Hello again, I&apos;m Frontend Developer with 1 year of experience and good knowledge in creating Web applications using React, Next.js . I also have experience creating full stack applications on the MERN stack.
            </Highlight>
            <br />
            To this day, I have managed to work with awesome developers and great people and have been able to learn a lot from them. And I would like to use this knowledge to help my future team.
          </Description>
        </Stack>
      </ComponentContainer>
    </ComponentWrapper>
  )
}

export default AboutMe