import { useRef } from 'react'
import { useMotionValue, useTransform, useScroll } from "framer-motion"

import { variants } from '../../../../constants/animation-constants'
import { ScrollBar, ScrollTitle, Wrapper } from "./styles"

const InformScrollBar = () => {
  const innerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ["end end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.25]);

  return (
    <Wrapper
      initial='hidden'
      whileInView='enter'
      exit='exit'
      variants={variants}
      viewport={{ amount: 0.1 }}
      style={{ opacity }}
    >
      <ScrollBar />
      <ScrollTitle>Scroll</ScrollTitle>
    </Wrapper>
  )
}

export default InformScrollBar