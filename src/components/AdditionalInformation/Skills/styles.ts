import { motion } from 'framer-motion';
import styled from 'styled-components';

import { colors } from '../../../constants/colors';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

export const SkillCard = styled(motion.div)`
  color: ${colors.darkGray};
  svg {
    width: 40px;
    height: 40px;
  }
`;
