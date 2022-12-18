import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Title = styled(motion.h5)`
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  white-space: nowrap;
  color: ${colors.white};
  margin-bottom: 40px;

  &::after {
    content: '';
    display: block;
    width: 300px;
    height: 1px;
    background-color: ${colors.blue};
  }
`;

export const Container = styled.section`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 60px 0;

  &:first-child {
    padding-top: 55px;
  }

  &:nth-child(2) {
    padding: 100px 60px;
  }

  &:nth-child(3) {
    padding: 100px 60px;
  }
`;
