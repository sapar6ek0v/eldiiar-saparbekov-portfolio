import { motion } from 'framer-motion';
import styled from 'styled-components';

type BurgerMenuButtonProps = {
  $isOpen: boolean;
};

export const Button = styled(motion.button)`
  width: 20px;
  height: 35px;
  position: relative;
  ${({ theme }) => theme.mixins.column};
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  z-index: 5;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 100%;
    border-bottom: 0.1rem solid var(--white);
    transition: 0.25s ease;
  }

  &::before {
    transform: ${(props: BurgerMenuButtonProps) =>
      props.$isOpen ? 'translate(0px, 0.3rem) rotate(45deg)' : 'translate(0px, 0px)'};
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
