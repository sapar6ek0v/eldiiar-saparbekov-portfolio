import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { colors } from '../../../../constants/colors';

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const Input = styled(motion.input)`
  width: 100%;
  display: block;
  color: ${colors.white};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: -0.005em;
  font-weight: 300;
  padding: 0 0 1.2rem;
  border-bottom: 1px solid ${colors.white};
  border-radius: 0;
  background: transparent;
  transition: all 0.4s linear;

  &:is(:hover, :focus, :active, :focus-within) {
    border-bottom: 1px solid ${colors.yellow};
    outline: none;
  }
`;

export const Textarea = styled(motion.textarea)`
  width: 100%;
  display: block;
  color: ${colors.white};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: -0.005em;
  font-weight: 300;
  padding: 0 0 1.2rem;
  border-bottom: 1px solid ${colors.white};
  border-radius: 0;
  background: transparent;
  transition: all 0.4s linear;

  &:is(:hover, :focus, :active, :focus-within) {
    border-bottom: 1px solid ${colors.yellow};
    outline: none;
  }
`;

export const FormFooter = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Button = styled.button`
  height: 46px;
  user-select: none;
  background: 0 0;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  color: ${colors.white};
  font-size: 18px;
  line-height: 16px;
  font-weight: 300;
  letter-spacing: -0.005em;
  transition: all 0.4s linear;

  &:is(:hover, :active, :focus) {
    color: ${colors.yellow};
    outline: none;

    svg {
      border-color: ${colors.yellow};
    }
  }
`;

export const CircleIcon = styled(FontAwesomeIcon)`
  width: 27px;
  height: 27px;
  padding: 4px 5px;
  border-radius: 50%;
  border: 1px solid ${colors.white};
  transition: all 0.4s linear;
`;

export const InformTitle = styled.p`
  color: ${colors.darkGray};
  font-size: 0.7rem;
  line-height: 1.48em;
  letter-spacing: 0;
  font-weight: 400;
`;
