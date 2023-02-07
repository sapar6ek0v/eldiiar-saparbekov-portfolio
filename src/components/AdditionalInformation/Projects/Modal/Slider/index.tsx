import { FC, memo } from 'react'

import { Image, Wrapper } from './styles'

type Props = {
  image: string
}

const Slider: FC<Props> = ({ image }) => {
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
    <Wrapper variants={variants}>
      <Image src={image} alt='photo' />
    </Wrapper>
  )
}

export default memo(Slider)