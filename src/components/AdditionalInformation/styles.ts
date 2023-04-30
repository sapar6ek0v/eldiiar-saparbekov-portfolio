import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section`
  /* grid-column-start: 2;
  grid-column-end: 2; */

  @media ${({ theme }) => theme.bp.bpTinyS} {
    margin-top: 100vh;
  }
`;

export const Container = styled.div`
  width: 82%;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
  }
  /* margin-left: auto; */
`;

export const ExtraSmallTitle = styled(motion.p)`
  font-family: var(--font-source-sans-pro);
  font-size: var(--font-size-extra-small);
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
  font-size: var(--font-size-title);
  letter-spacing: 0.03em;
  line-height: 1;
  font-weight: 300;
  color: var(--white);
  padding-left: clamp(0.81rem, calc(0.74rem + 0.37vw), 1rem);
`;

export const TitleLine = styled(Line)`
  margin-top: 1px;
`;

export const Description = styled(motion.p)`
  font-size: clamp(1.13rem, calc(1.08rem + 0.24vw), 1.25rem);
  line-height: 1.4em;
  letter-spacing: -0.005em;
  font-weight: 300;
  color: var(--dark-gray);
`;

export const ComponentWrapper = styled(motion.section)`
  padding-top: clamp(0.5rem, calc(-1.18rem + 8.41vw), 4.81rem);
  padding-bottom: clamp(2.06rem, calc(6.32rem + -5.98vw), 5.13rem);

  &:last-child {
    padding-bottom: 0;
  }
`;

export const ComponentContainer = styled.div`
  padding: clamp(0.31rem, calc(0.19rem + 0.61vw), 0.63rem);
`;
