import { FC, memo } from 'react'

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
    <Wrapper>
      <Inner>
        <NameWrapper>
          <Name>Eldiiar Saparbekov</Name>
          <SeperatorLine />
        </NameWrapper>
        <PictureBox >
          <Canvas />
        </PictureBox>
        <Frame1 />
        <Frame2 />
        <Frame3 />
      </Inner>
    </Wrapper>
  )
}

export default memo(ProfileImage)

