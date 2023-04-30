import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CustomCursor = styled(motion.div)`
  height: 32px;
  width: 32px;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background: #e3af00;
  border-radius: 100%;
  pointer-events: none;
`;

export const Ring = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  border: 2px solid rgba(31, 30, 30, 0.808);
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition-duration: 100ms;
  transition-timing-function: ease-out;
  will-change: width, height, transform, border;
  z-index: 999;
  pointer-events: none;

  .ring.hovered {
    width: 50px;
    height: 50px;
    border-width: 3px;
    border-color: lightgray;
  }
`;

export const Dot = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;

  .dot.hovered {
    display: none;
  }
`;
