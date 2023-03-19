import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section`
  grid-column-start: 2;
  grid-column-end: 2;
`;

export const Container = styled.div`
  width: 82%;
`;

export const ExtraSmallTitle = styled(motion.p)`
  font-size: 8px;
  letter-spacing: 0.14em;
  font-weight: 800;
  color: var(--white);
  text-align: start;
`;

export const Stack = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 1.5rem;
`;

export const Line = styled(motion.div)`
  width: 1.6rem;
  height: 0;
  margin-top: 1rem;
  border-color: var(--white);
  border-style: solid;
  border-bottom-width: 0.1rem;
`;

export const TitleStack = styled(Stack)`
  gap: 1.4rem;
`;

export const Title = styled(motion.h5)`
  font-size: 2rem;
  letter-spacing: 0.03em;
  line-height: 1;
  font-weight: 300;
  color: var(--white);
  padding-left: 1rem;
`;

export const TitleLine = styled(Line)`
  margin-top: 1px;
`;

export const Description = styled(motion.p)`
  font-size: 20px;
  line-height: 1.4em;
  letter-spacing: -0.005em;
  font-weight: 300;
  color: var(--dark-gray);
`;

export const ComponentWrapper = styled(motion.section)`
  padding-bottom: 107.6px;
`;

export const ComponentContainer = styled.div`
  padding: 10px;
`;
