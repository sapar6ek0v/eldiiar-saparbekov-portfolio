import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const FooterWrapper = styled(motion.footer)`
  padding: 20px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterTitle = styled(motion.h6)`
  font-size: 14px;
  line-height: 20px;
  color: ${colors.secondaryGray};
`;
