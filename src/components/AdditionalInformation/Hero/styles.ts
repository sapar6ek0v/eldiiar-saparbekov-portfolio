import { motion } from 'framer-motion';
import styled from 'styled-components';

import { colors } from '../../../constants/colors';

export const Wrapper = styled(motion.section)`
  min-height: calc(100vh - 68px);
  position: relative;
  display: flex;
  align-items: center;
`;

export const Title = styled(motion.p)`
  color: ${colors.white};
  font-size: 55px;
  font-weight: 200;
  line-height: 1.2;
  padding-left: 1.3rem;
`;
