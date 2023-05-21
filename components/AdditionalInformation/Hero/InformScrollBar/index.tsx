import { useMotionValue, useTransform } from "framer-motion"

import { variants } from '../../../../constants/animation-constants'
import { ScrollBar, ScrollTitle, Wrapper } from "./styles"

const InformScrollBar = () => {
  const x = useMotionValue(0)
  const input = [9, 90]
  const output = [1, 0]
  const opacity = useTransform(x, input, output)

  return (
    <Wrapper
      initial='hidden'
      whileInView='enter'
      exit='exit'
      variants={variants}
      viewport={{ amount: 0.1 }}
      style={{ x, opacity }}
    >
      <ScrollBar />
      <ScrollTitle>Scroll</ScrollTitle>
    </Wrapper>
  )
}

export default InformScrollBar