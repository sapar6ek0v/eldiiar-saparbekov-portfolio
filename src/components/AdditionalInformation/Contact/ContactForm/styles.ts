import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

export const Form = styled(motion.form)`
  ${({ theme }) => theme.mixins.column};
  gap: 1.8rem;
`;

export const Input = styled(motion.input)`
  width: 100%;
  display: block;
  color: var(--white);
  ${({ theme }) => theme.mixins.fontSize18};
  letter-spacing: -0.005em;
  padding: 0 0 1.2rem;
  border-bottom: 1px solid var(--white);
  border-radius: 0;
  background: transparent;
  transition: var(--transition);

  &:is(:hover, :focus, :active, :focus-within) {
    border-bottom: 1px solid var(--yellow);
    outline: none;
  }
`;

export const Textarea = styled(motion.textarea)`
  width: 100%;
  display: block;
  color: var(--white);
  ${({ theme }) => theme.mixins.fontSize18};
  letter-spacing: -0.005em;
  padding: 0 0 1.2rem;
  border-bottom: 1px solid var(--white);
  border-radius: 0;
  background: transparent;
  transition: var(--transition);

  &:is(:hover, :focus, :active, :focus-within) {
    border-bottom: 1px solid var(--yellow);
    outline: none;
  }
`;

export const FormFooter = styled(motion.div)`
  ${({ theme }) => theme.mixins.apart};
  gap: 1rem;
`;

export const Button = styled.button`
  height: 46px;
  user-select: none;
  background: 0 0;
  border: none;
  ${({ theme }) => theme.mixins.center};
  gap: 0.8rem;
  color: var(--white);
  ${({ theme }) => theme.mixins.fontSize18};
  letter-spacing: -0.005em;
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    color: var(--yellow);
    outline: none;

    svg {
      border-color: var(--yellow);
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const CircleIcon = styled(FaArrowRight)`
  width: 27px;
  height: 27px;
  padding: 4px 5px;
  border-radius: 50%;
  border: 1px solid var(--white);
  transition: var(--transition);
`;

export const InformTitle = styled.p`
  color: var(--dark-gray);
  font-size: 0.7rem;
  line-height: 1.48em;
  letter-spacing: 0;
  font-weight: 400;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CircleLoader = styled.div`
  width: 25px;
  height: 25px;
  border: 3px solid var(--yellow);
  border-radius: 50%;
  border-right-color: transparent;
  border-bottom-color: transparent;
  transition: all 0.5s ease-in;
  animation: ${rotate} 1s infinite linear;
`;
