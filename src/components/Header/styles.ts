import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const HeaderFixedContainer = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
  background: ${colors.bg};
  backdrop-filter: blur(10px);
  /* box-shadow: 0 10px 30px -10px rgb(28 29 30 / 51%); */
`;

export const HeaderContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px 60px;
`;

type HeaderGroupProps = {
  gap?: number;
  justify?: string;
};

export const HeaderGroup = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: ${(props: HeaderGroupProps) => (props.justify ? `${props.justify}` : 'initial')};
  gap: ${(props: HeaderGroupProps) => (props.gap ? `${props.gap}px` : '0px')};
`;

export const HeaderLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  color: ${colors.white};
  text-transform: uppercase;
  display: inline-block;
  letter-spacing: 1.4px;
  position: relative;
  transition: color 0.4s linear;
  padding: 8px 0;

  &::before {
    content: '';
    height: 2px;
    width: 0%;
    position: absolute;
    top: 34px;
    background-color: ${colors.blue};
    transition: color 0.4s linear;
  }

  &:hover {
    color: ${colors.blue};
    &::before {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  background: none;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  transition: border 0.4s linear;
  padding: 5px;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    border: 1px solid ${colors.white};
  }
`;
