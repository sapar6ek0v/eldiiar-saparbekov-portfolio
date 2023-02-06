import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { colors } from '../../../constants/colors';

export const HeaderFixedContainer = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 4;
  /* background: #181818; */
  background-color: #212121;
  /* backdrop-filter: blur(10px); */
`;

export const HeaderContainer = styled.nav`
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

type HeaderGroupProps = {
  gap?: number;
  justify?: string;
};

export const HeaderGroup = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: ${(props: HeaderGroupProps) => (props.justify ? `${props.justify}` : 'initial')};
  gap: ${(props: HeaderGroupProps) => (props.gap ? `${props.gap}px` : '0px')};
`;

export const HeaderItem = styled.li`
  padding: 2px 0;
`;

export const HeaderLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  color: #7c7c7c;
  position: relative;
  transition: all 0.4s linear;

  &::before {
    content: '';
    height: 2px;
    width: 100%;
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
    bottom: -8px;
    background-color: #fdc60c;
    transition: color 0.4s linear;
  }

  &:hover {
    color: #fdc60c;
    &::before {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export const HeaderButton = styled.button`
  background: none;
  border: 1px solid transparent;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  transition: all 0.4s linear;
  padding: 2px 7px;
  width: 37px;
  height: 35px;

  &:is(:hover, :active, :focus) {
    outline: none;
    border-color: #fdc60c;
    color: #fdc60c;
  }

  color: #7c7c7c;
  font-size: 16px;
  text-decoration: none;
`;
