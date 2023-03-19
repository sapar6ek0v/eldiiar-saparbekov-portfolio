import { motion } from 'framer-motion';
import styled from 'styled-components';

type WrapperProps = {
  opened: boolean;
};

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 500;
  overflow: hidden;
  touch-action: none;
  background: var(--dark6);
  display: ${(props: WrapperProps) => (props.opened ? 'block' : 'none')};
  height: ${(props: WrapperProps) => (props.opened ? '100vh' : '0')};
  opacity: ${(props: WrapperProps) => (props.opened ? '1' : 0)};
  transition: opacity 0.4s ease;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  ${({ theme }) => theme.mixins.fCenter}
`;

const BaseButton = styled(motion.button)`
  position: fixed;
  background: transparent;
  font-size: 1em;
  border-radius: 100%;
  ${({ theme }) => theme.mixins.fCenter};
  transition: all 0.2s ease;

  svg {
    height: 1.7rem;
  }

  &:is(:hover, :active, :focus) {
    color: var(--yellow);
    outline: none;
    border-color: var(--yellow);
  }
`;

export const XButton = styled(BaseButton)`
  width: 1.6rem;
  height: 1.6rem;
  top: 3.6rem;
  left: 3.2rem;
  right: unset;
  z-index: 500;
  color: var(--dark-gray);
  border: 1px solid transparent;
  padding: 2.5px;
`;

export const InfoButton = styled(BaseButton)`
  height: 2rem;
  width: 2rem;
  top: 3.6rem;
  right: 3.2rem;
  z-index: 700;
  color: var(--white);
  border: 1px solid var(--white);
`;

type SliderButtonProps = {
  $left?: boolean;
};

export const SliderButton = styled(motion.button)`
  height: 1.2rem;
  width: 1.2rem;
  display: block;
  background: transparent;
  border: none;
  position: fixed;
  top: 50%;
  left: ${(props: SliderButtonProps) => props.$left && '4.5rem'};
  right: ${(props: SliderButtonProps) => !props.$left && '4.5rem'};
  color: var(--dark-gray);
  transition: all 0.2s ease;

  &:is(:hover, :active, :focus) {
    color: var(--yellow);
    outline: none;
  }
`;
