import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';

export const TimeLineCard = styled(motion.div)`
  background: ${colors.dark};
  position: relative;
  text-align: start;
  padding: 2rem 2.2rem;
  margin-left: 1.5rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    z-index: 2;
  }

  &::before {
    left: 0;
    transform: translate(-50%, -50%) rotate(45deg);
    transform-origin: center center;
    width: 19px;
    height: 19px;
    background-color: inherit;
  }

  &::after {
    left: -1.5rem;
    transform: translate(-50%, -50%);
    height: 21px;
    width: 2px;
    background-color: ${colors.white};
  }
`;

export const TimeLineGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TimeLineSubtitle = styled.p`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0;
  font-weight: 600;
  color: ${colors.white};
`;

export const TimeLineTitle = styled.h6`
  font-size: 20px;
  line-height: 1.4em;
  letter-spacing: -0.005em;
  font-weight: 300;
  color: ${colors.white};
  margin: 10px 0 8px;
`;
