import { FC, useRef, useState, useCallback, useLayoutEffect, ReactNode } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion"

type Props = {
  children: ReactNode;
}

const SmoothScroll: FC<Props> = ({ children }) => {
  const scrollRef = useRef(null)

  const [pageHeight, setPageHeight] = useState(0)

  const resizePageHeight = useCallback((entries: any) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  // useLayoutEffect(() => {
  //   const resizeObserver = new ResizeObserver((entries: any) =>
  //     resizePageHeight(entries)
  //   )
  //   !!scrollRef && resizeObserver.observe(scrollRef.current)
  //   return () => resizeObserver.disconnect()
  // }, [scrollRef, resizePageHeight])

  const { scrollY } = useViewportScroll()
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="scroll-container"
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  )
}

export default SmoothScroll
