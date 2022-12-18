import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { Title } from '../styles';

export const CallToActionWrapper = styled(motion.div)`
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CallToActionTitle = styled(Title)`
  position: relative;
  &::after {
    position: absolute;
    bottom: -5px;
    width: 100%;
  }
`;

export const CallToActionDesc = styled(motion.p)`
  color: ${colors.secondaryGray};
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  max-width: 680px;
  text-align: center;
  margin-bottom: 45px;
`;

export const CallToActionButton = styled(motion.a)`
  background-color: ${colors.blue};
  color: ${colors.white};
  border: 1px solid transparent;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  padding: 15px 35px;
  transition: background-color 0.4s linear;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border-color: ${colors.blue};
    color: ${colors.blue};
    background-color: transparent;
  }
`;
