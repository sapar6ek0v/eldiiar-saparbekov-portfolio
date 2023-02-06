import { FC } from 'react'

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
    <ComponentWrapper id='about'>
      <ComponentContainer>
        <Stack>
          <TitleStack>
            <ExtraSmallTitle>ABOUT</ExtraSmallTitle>
            <Title>I`m passionate Developer <br /> That like coding</Title>
            <TitleLine />
          </TitleStack>

          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
          </Description>
        </Stack>
      </ComponentContainer>
    </ComponentWrapper>
  )
}

export default AboutMe