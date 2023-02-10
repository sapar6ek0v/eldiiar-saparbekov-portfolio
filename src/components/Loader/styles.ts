import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

import { colors } from '../../constants/colors';

export const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.dark3};
`;

export const Centered = styled.div`
  overflow: hidden;
`;

export const Title = styled(motion.h1)`
  color: ${colors.white};
  font-size: 1.4rem;
  letter-spacing: 0.1em;
  margin-bottom: 0.3rem;
`;

const loader = keyframes`
  0% {
    transform: translate3d(-100%,0,0);
  }
  48% {
    transform: translateZ(0);
  }
  52% {
    transform: translateZ(0);
  }
  100% {
    transform: translate3d(100%,0,0);
  }
`;

export const Line = styled(motion.div)`
  width: 100%;
  height: 1.5px;
  background-color: ${colors.shadowGray2};
  animation-name: ${loader};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-play-state: running;
  animation-timing-function: cubic-bezier(0.4, 0.1, 0.2, 1);
`;

export const UnMountLoader = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.dark};
`;
