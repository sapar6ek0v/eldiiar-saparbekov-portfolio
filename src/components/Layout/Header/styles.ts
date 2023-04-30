import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeaderFixedContainer = styled(motion.header)`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 4;
  background: transparent;
`;

export const HeaderContainer = styled.nav`
  width: min(90%, 1140px);
  margin-inline: auto;
  padding: 20px var(--container-padding);
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
  position: relative;
`;

export const HeaderLink = styled(Link)`
  font-weight: 400;
  ${({ theme }) => theme.mixins.fontSize16};
  color: var(--dark-gray);
  display: block;
  overflow: hidden;
  position: relative;

  .inner-span {
    clip-path: inset(0);
    display: block;
    position: relative;
  }

  span {
    display: inline-block;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
      color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .default {
    position: absolute;
    right: 0;
    transform: translateY(0%);
  }

  .active {
    transform: translateY(100%);
  }

  &:hover {
    .default {
      transform: translateY(-100%);
    }

    .active {
      transform: translateY(0%);
      color: var(--yellow);
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

type BurgerMenuButtonProps = {
  $isOpen: boolean;
};

export const BurgerMenuButton = styled.button`
  width: 20px;
  height: 35px;
  position: relative;
  ${({ theme }) => theme.mixins.column};
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 100%;
    border-bottom: 0.1rem solid var(--white);
    transition: 0.25s ease;
    transform: ${(props: BurgerMenuButtonProps) =>
      props.$isOpen ? 'translate(0px, 0px)' : 'translate(0px, 0.4rem) rotate(45deg)'};
  }

  &::before {
    transform: ${(props: BurgerMenuButtonProps) =>
      props.$isOpen ? 'translate(0px, 0.4rem) rotate(45deg)' : 'translate(0px, 0px)'};
  }

  &::after {
    transform: ${(props: BurgerMenuButtonProps) =>
      props.$isOpen ? 'translate(0px, -0.22rem) rotate(-45deg)' : 'translate(0px, 0px)'};
  }

  &:is(:hover, :active, :focus) {
    &::before,
    &::after {
      border-color: var(--yellow);
    }
  }
`;
