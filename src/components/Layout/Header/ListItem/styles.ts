import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Group = styled(motion.ul)`
  display: flex;
  align-items: center;
  gap: clamp(0.94rem, calc(0.82rem + 0.61vw), 1.25rem);

  @media ${({ theme }) => theme.mixins.bpTinyS} {
    flex-direction: column;
  }
`;
