import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ComponentContainer } from '../styles';

export const Container = styled(ComponentContainer)`
  ${({ theme }) => theme.mixins.column};
  gap: 1.6rem;
`;

export const TimeLine = styled(motion.div)`
  border-left: 0.1rem solid var(--shadow-gray);
  ${({ theme }) => theme.mixins.column};
  gap: clamp(1.88rem, calc(1.68rem + 0.98vw), 2.38rem);
`;
