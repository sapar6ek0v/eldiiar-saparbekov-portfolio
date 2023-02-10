import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Wrapper = styled.section`
  grid-column-start: 2;
  grid-column-end: 2;
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  /* height: 100%; */
  /* width: 100%; */
  /* overflow: hidden;
  pointer-events: none;
  position: fixed;
  height: 100%;
  width: 50%;
  top: 60px;
  right: 5px; */
`;

export const Container = styled.div`
  width: 82%;
  /* pointer-events: none; */
`;

export const ExtraSmallTitle = styled(motion.p)`
  font-size: 8px;
  letter-spacing: 0.14em;
  font-weight: 800;
  color: ${colors.white};
  text-align: start;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Line = styled(motion.div)`
  width: 1.6rem;
  height: 0;
  border-width: 0;
  margin-top: 1rem;
  border-color: ${colors.white};
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
  color: ${colors.white};
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
  color: ${colors.darkGray};
`;

export const ComponentWrapper = styled(motion.section)`
  padding-bottom: 107.6px;
`;

export const ComponentContainer = styled.div`
  padding: 10px;
`;
