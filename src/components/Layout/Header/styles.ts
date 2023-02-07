import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { colors } from '../../../constants/colors';

export const HeaderFixedContainer = styled(motion.header)`
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 4;
  /* background: #181818; */
  background-color: ${colors.darkBrown};
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
  color: ${colors.darkGray};
  position: relative;
  transition: all 0.4s linear;

  &::before {
    content: '';
    height: 2px;
    width: 100%;
    opacity: 0;
    transform: translateY(-50%);
    position: absolute;
    bottom: -8px;
    background-color: ${colors.yellow};
    transition: all 0.4s linear;
  }

  &:hover {
    color: ${colors.yellow};
    &::before {
      opacity: 1;
      transform: translateY(0%);
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
  color: ${colors.darkGray};
  font-size: 16px;
  text-decoration: none;

  &:is(:hover, :active, :focus) {
    outline: none;
    border-color: ${colors.yellow};
    color: ${colors.yellow};
  }
`;
