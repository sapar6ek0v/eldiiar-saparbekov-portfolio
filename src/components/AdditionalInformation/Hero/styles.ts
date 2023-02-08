import { motion } from 'framer-motion';
import styled from 'styled-components';

import { colors } from '../../../constants/colors';

export const Wrapper = styled(motion.section)`
  min-height: calc(100vh - 75px);
  position: relative;
  display: flex;
  align-items: center;
`;

export const Title = styled(motion.h1)`
  color: ${colors.white};
  font-size: 55px;
  font-weight: 500;
  line-height: 1.2;

  letter-spacing: 0.1em;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0px;
  -webkit-text-stroke-color: ${colors.brownShadow};
  text-shadow: 0px 7px ${colors.white}, 5px 12px ${colors.brownShadow};
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding-left: 1.3rem;
`;

export const ButtonGroup = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1.2px;
  color: ${colors.white};
  padding: 5px 8px;

  background-color: ${colors.dark3};
  border: none;
  border-radius: 0 0 0 0% / 0% 0% 0% 0%;
  box-shadow: 15px 15px ${colors.darkShadow};
  transition: all 0.4s linear;

  &:is(:hover, :active, :focus) {
    outline: none;
    border-radius: 0 0 50% 50% / 0% 0% 5% 5%;
    box-shadow: 10px 10px ${colors.darkShadowHover};
    background-color: ${colors.yellow};
  }
`;
