import { FC } from 'react'

import { variants } from '../../constants/animation-constants';
import Canvas from './Canvas';
import {
  Frame1,
  Frame2,
  Frame3,
  Inner,
  Name,
  NameWrapper,
  PictureBox,
  Wrapper,
  SeperatorLine
} from './styles'

const ProfileImage: FC = () => {

  return (
    <Wrapper
      id='hero'
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants} custom={1.3}
    >
      <Inner>
        <NameWrapper>
          <Name>Eldiiar Saparbekov</Name>
          <SeperatorLine />
        </NameWrapper>
        <PictureBox>
          <Canvas />
        </PictureBox>
        <Frame1 />
        <Frame2 />
        <Frame3 />
      </Inner>
    </Wrapper>
  )
}

export default ProfileImage;

