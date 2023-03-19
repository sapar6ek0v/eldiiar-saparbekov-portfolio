import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.section)`
  position: fixed;
  height: 100%;
  width: 50%;
  top: 0;
  left: 20px;
  ${({ theme }) => theme.mixins.fCenter};
  z-index: 2;
  perspective: 38rem;
`;

export const Inner = styled.div`
  position: relative;
  width: 26vw;
  height: 32vw;
  transform: rotateY(11deg);
`;

export const NameWrapper = styled.div`
  position: absolute;
  left: 1.2rem;
  bottom: 0.7rem;
  z-index: 10;
`;

export const Name = styled.p`
  ${({ theme }) => theme.mixins.fontSize12};
  font-weight: 300;
  color: var(--white);
  letter-spacing: 0.02em;
`;

export const SeperatorLine = styled.div`
  margin-top: 0.4rem;
  width: 4rem;
  height: 0;
  border-bottom: 0.1rem solid var(--white);
`;

export const PictureBox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  overflow: hidden;
  top: 0;

  canvas {
    width: 354px;
    height: 448px;
  }
`;

export const Frame = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -2;
  border: 1px solid var(--white);
`;

export const Frame1 = styled(Frame)`
  opacity: 0.25;
  transform: translate(-0.85rem, 0.85rem);
`;

export const Frame2 = styled(Frame)`
  opacity: 0.15;
  transform: translate(-1.65rem, 1.65rem);
`;

export const Frame3 = styled(Frame)`
  opacity: 0.05;
  transform: translate(-2.45rem, 2.45rem);
`;
