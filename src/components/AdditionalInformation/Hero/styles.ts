import { motion } from 'framer-motion';
import styled from 'styled-components';

import { colors } from '../../../constants/colors';

export const Wrapper = styled(motion.section)`
  min-height: calc(100vh - 75px);
  position: relative;
  display: flex;
  align-items: center;
`;

export const Title = styled(motion.h1)`
  color: ${colors.white};
  font-size: 55px;
  font-weight: 500;
  line-height: 1.2;

  letter-spacing: 0.1em;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0px;
  -webkit-text-stroke-color: ${colors.brownShadow};
  text-shadow: 0px 7px ${colors.white}, 5px 12px ${colors.brownShadow};
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding-left: 1.3rem;
`;

export const ButtonGroup = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
