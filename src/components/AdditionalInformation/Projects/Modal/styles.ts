import { motion } from 'framer-motion';
import styled from 'styled-components';

import { colors } from '../../../../constants/colors';

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
  background: rgba(22, 22, 22, 0.95);
  touch-action: none;

  height: ${(props: WrapperProps) => (props.opened ? '100vh' : '0')};
  opacity: ${(props: WrapperProps) => (props.opened ? '1' : 0)};
  transition: opacity 0.4s ease;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const XButton = styled(motion.button)`
  cursor: pointer;
  background: transparent;
  width: 1.6rem;
  height: 1.6rem;
  position: fixed;
  top: 3.6rem;
  left: 3.2rem;
  right: unset;
  color: ${colors.darkGray};
  border: 1px solid transparent;
  border-radius: 100%;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:is(:hover, :active, :focus) {
    color: ${colors.yellow};
    outline: none;
    border-color: ${colors.yellow};
  }
`;

export const InfoButton = styled(motion.button)`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  position: fixed;
  top: 3.6rem;
  right: 3.2rem;
  z-index: 100;
  font-size: 1em;
  color: ${colors.white};
  border: 1px solid ${colors.white};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  svg {
    height: 1.7rem;
    width: 0.6rem;
  }

  &:is(:hover, :active, :focus) {
    color: ${colors.yellow};
    outline: none;
    border-color: ${colors.yellow};
  }
`;

export const SliderWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 66vh;
`;

type SliderButtonProps = {
  left?: boolean;
};

export const SliderButton = styled(motion.button)`
  background: transparent;
  border: none;
  display: block;
  height: 1.2rem;
  width: 1.2rem;
  position: fixed;
  top: 50%;
  left: ${(props: SliderButtonProps) => props.left && '4.5rem'};
  right: ${(props: SliderButtonProps) => !props.left && '4.5rem'};
  color: ${colors.darkGray};
  transition: all 0.2s ease;

  &:is(:hover, :active, :focus) {
    color: ${colors.yellow};
    outline: none;
  }
`;
