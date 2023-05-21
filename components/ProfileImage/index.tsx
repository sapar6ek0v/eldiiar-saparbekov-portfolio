import { FC, useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion';

import { variants } from '../../constants/animation-constants';
import useMediaQuery from '../../helpers/hooks/useMediaQuery';
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
  const innerRef = useRef<HTMLDivElement | null>(null);

  const matches = useMediaQuery('(min-width: 768px)');

  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ["end end", "end start"]
  });
  console.log({ scrollYProgress });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.25]);
  const transform = useTransform(scrollYProgress,
    [0, 0.5],
    ['translate(0%, 0px) rotateY(0)', 'translate(-55%, 0px) rotateY(50deg)']
  );

  return (
    <Wrapper
      id='hero'
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants} custom={1.3}
    >
      <Inner
        ref={innerRef}
        style={{ opacity, transform }}
      >
        <NameWrapper>
          <Name>Eldiiar Saparbekov</Name>
          <SeperatorLine />
        </NameWrapper>
        <PictureBox>
          <Canvas />
        </PictureBox>
        {matches ?
          <>
            <Frame1 />
            <Frame2 />
            <Frame3 />
          </>
          : null}
      </Inner>
    </Wrapper>
  )
}

export default ProfileImage;

