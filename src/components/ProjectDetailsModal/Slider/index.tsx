import { FC } from 'react'

import { Project } from '../../../helpers/types';
import { Image, ImageWrapper, Wrapper } from './styles'

type Props = {
  project: Project | null;
  slideIndex: number;
};

const Slider: FC<Props> = ({ project, slideIndex }) => {
  const variants = {
    hidden: { opacity: 0, x: 20, y: 0 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'tween',
        delay: 0.2,
        bounce: 0.4,
      },
    },
    exit: { opacity: 0, x: -20, y: 0 },
  }

  return (
    <Wrapper
      initial='hidden'
      animate='enter'
      exit='exit'
    >
      {
        !!project ?
          <ImageWrapper variants={variants}>
            <Image src={project.images[slideIndex].imageUrl} alt='photo' />
          </ImageWrapper>
          : null
      }
    </Wrapper>
  )
}

export default Slider;