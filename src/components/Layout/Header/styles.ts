import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeaderFixedContainer = styled(motion.header)`
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 4;
  background-color: var(--dark-brown);
`;

export const HeaderContainer = styled.nav`
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px 35px;
  ${({ theme }) => theme.mixins.apart};
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
  ${({ theme }) => theme.mixins.fontSize16};
  color: var(--dark-gray);
  position: relative;
  transition: var(--transition);

  &::before {
    content: '';
    height: 0;
    width: 100%;
    opacity: 0;
    transform: translateY(50%);
    position: absolute;
    bottom: -8px;
    background-color: var(--yellow);
    transition: var(--transition);
  }

  &:hover {
    color: var(--yellow);
    &::before {
      opacity: 1;
      height: 2px;
      transform: translateY(0%);
    }
  }
`;

export const HeaderButton = styled.button`
  width: 40px;
  height: 35px;
  background: none;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 2px 7px;
  ${({ theme }) => theme.mixins.fCenter};
  ${({ theme }) => theme.mixins.fontSize16};
  color: var(--dark-gray);
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    outline: none;
    border-color: var(--yellow);
    color: var(--yellow);
  }

  a {
    font-size: 20px;
  }
`;
