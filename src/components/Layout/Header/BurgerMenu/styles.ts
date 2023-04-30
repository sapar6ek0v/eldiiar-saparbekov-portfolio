import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Background = styled(motion.div)`
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  ${({ theme }) => theme.mixins.fCenter};
  background: var(--dark);
  overflow: auto;
  `;
