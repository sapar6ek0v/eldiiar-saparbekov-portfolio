import { createStyles } from '@mantine/core';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const useModalStyles = createStyles(() => ({
  overlay: {
    background: 'var(--dark6)',
  },

  content: {
    background: 'var(--dark-brown)',
    borderRadius: 0,
    padding: '2rem',
    position: 'relative',

    /* width */
    '::-webkit-scrollbar': {
      width: 4,
    },

    /* Track */
    '::-webkit-scrollbar-track': {
      borderRadius: 0,
    },

    /* Handle */
    '::-webkit-scrollbar-thumb': {
      background: 'var(--dark-gray)',
      borderRadius: 2,
      cursor: 'pointer',
      transition: 'var(--transition)',
    },

    /* Handle on hover */
    '::-webkit-scrollbar-thumb:hover': {
      background: 'var(--shadow-gray2)',
    },
  },

  header: {
    background: 'var(--dark-brown)',
    padding: 0,
  },

  body: {
    padding: 0,
    paddingTop: '2rem !important',
  },

  close: {
    width: 35,
    height: 35,
    color: 'var(--white)',
    border: '0.1rem solid var(--white)',
    borderRadius: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -13,
    right: -13,
    transition: 'all 0.2s ease',

    svg: {
      width: 18,
      height: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '&:hover': {
      color: 'var(--yellow)',
      background: 'transparent',
      borderColor: 'var(--yellow)',
    },

    '&:focus': {
      color: 'var(--yellow)',
      outline: 'none',
      background: 'transparent',
      borderColor: 'var(--yellow)',
    },
  },
}));

export const Stack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: 1.6rem;
`;

export const Title = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.1em;
  font-weight: 400;
  color: var(--white);
`;

export const CompanyLink = styled(motion.a)`
  font-size: 1.1rem;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--purple);
  transition: var(--transition);

  &:is(:hover, :focus) {
    text-decoration: underline;
  }
`;

export const WorkingDates = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--white);
`;

export const ResponsibilitiesStack = styled(motion.ul)`
  ${({ theme }) => theme.mixins.column};
  gap: 0.5rem;
  padding-left: 35px;
`;

export const ResponsibilityItem = styled(motion.li)`
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    top: 0;
    left: -25px;
    color: var(--purple);
  }

  p {
    font-size: 1rem;
    line-height: 20px;
    color: var(--dark-gray);
    font-weight: 300;
  }
`;
