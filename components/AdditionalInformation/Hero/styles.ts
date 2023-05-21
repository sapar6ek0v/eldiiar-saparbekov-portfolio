import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.section)`
  min-height: calc(100vh - 75px);
  position: relative;
  ${({ theme }) => theme.mixins.center};
`;

export const Title = styled(motion.h1)`
  color: var(--white);
  font-size: var(--font-size-hero);
  font-weight: 500;
  /* line-height: 1.2; */

  letter-spacing: 0.1em;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0px;
  -webkit-text-stroke-color: var(--brown-shadow);
  text-shadow: 0px 7px var(--white), 5px 12px var(--brown-shadow);
`;

export const Group = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 1.4rem;
  padding-left: 1.3rem;
`;

export const ButtonGroup = styled(motion.div)`
  ${({ theme }) => theme.mixins.center};
  gap: 1.5rem;
`;
