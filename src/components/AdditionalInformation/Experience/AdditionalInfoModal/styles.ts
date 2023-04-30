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
    padding: 'clamp(1.25rem, calc(0.96rem + 1.46vw), 2.00rem)',
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
    paddingTop: 'clamp(1.56rem, calc(1.39rem + 0.85vw), 2.00rem) !important',
  },

  close: {
    width: 'var(--close-button-wd-ht)',
    height: 'var(--close-button-wd-ht)',
    color: 'var(--white)',
    border: '0.1rem solid var(--white)',
    borderRadius: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 'clamp(-0.81rem, calc(-0.38rem + -0.61vw), -0.50rem)',
    right: 'clamp(-0.81rem, calc(-0.38rem + -0.61vw), -0.50rem)',
    transition: 'all 0.2s ease',

    svg: {
      width: 'var(--close-button-svg-wd-ht)',
      height: 'var(--close-button-svg-wd-ht)',
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

    '&:active': {
      color: 'var(--yellow)',
      background: 'transparent',
      borderColor: 'var(--yellow)',
    },
  },
}));

export const Stack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(0.94rem, calc(0.69rem + 1.22vw), 1.56rem);
`;

export const SubStack = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(0.75rem, calc(0.65rem + 0.49vw), 1rem);
`;

export const Title = styled(motion.p)`
  ${({ theme }) => theme.mixins.fontSize22};
  font-weight: 500;
  color: var(--white);
`;

export const CompanyLink = styled(motion.a)`
  ${({ theme }) => theme.mixins.fontSize18};
  font-weight: 500;
  color: var(--purple);
  transition: var(--transition);

  &:is(:hover, :focus) {
    text-decoration: underline;
  }
`;

export const WorkingDates = styled(motion.p)`
  ${({ theme }) => theme.mixins.fontSize18};
  font-weight: 400;
  color: var(--white);
`;

export const ResponsibilitiesStack = styled(motion.ul)`
  ${({ theme }) => theme.mixins.column};
  gap: 0.5rem;
  padding-left: var(--pd-l);
`;

export const ResponsibilityItem = styled(motion.li)`
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    top: 0;
    left: var(--left);
    color: var(--purple);
  }

  p {
    ${({ theme }) => theme.mixins.fontSize16};
    color: var(--dark-gray);
    font-weight: 300;
  }
`;
