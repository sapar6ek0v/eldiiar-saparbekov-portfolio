import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { createStyles } from '@mantine/core';

export const Form = styled(motion.form)`
  ${({ theme }) => theme.mixins.column};
  gap: 2rem;
`;

export const InputBox = styled(motion.div)``;

export const useInputStyles = createStyles(() => ({
  input: {
    width: '100%',
    display: ' block',
    color: 'var(--white)',
    fontSize: 18,
    lineHeight: '22px',
    letterSpacing: '-0.005em',
    padding: '0 0 1.2rem',
    border: 'none',
    borderBottom: '1px solid var(--white)',
    borderRadius: 0,
    background: 'transparent',
    transition: 'var(--transition)',

    '&:hover, &:focus, &:active, &:focus-within': {
      borderBottom: '1px solid var(--yellow)',
      outline: 'none',
    },
  },

  error: {
    fontSize: 15,
  },
}));

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
