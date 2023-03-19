import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

export const Wrapper = styled(motion.div)`
  position: absolute;
  right: -5rem;
  bottom: 2.5rem;
  z-index: 3;
  opacity: 1;
  ${({ theme }) => theme.mixins.column};
  align-items: center;
  gap: 1rem;
  pointer-events: none;
  transition: var(--transition);
`;

export const ScrollTitle = styled.p`
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--white);
  transform: rotate(90deg);
`;

const loader = keyframes`
    0% {
      transform: translateY(-100%);
    }
    48% {
      transform: translateY(0);
    }
    52% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
`;

export const ScrollBar = styled.div`
  width: 0.1rem;
  height: 2rem;
  background-color: var(--shadow-gray);
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    width: 0.1rem;
    height: 2rem;
    position: absolute;
    background-color: var(--white);
    animation-name: ${loader};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-timing-function: cubic-bezier(0.4, 0.1, 0.2, 1);
  }
`;
