import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.li)`
  padding: 2px 0;
  position: relative;
`;

export const LinkItem = styled(Link)`
  font-weight: 400;
  ${({ theme }) => theme.mixins.fontSize16};
  color: var(--dark-gray);
  ${({ theme }) => theme.mixins.center};
  gap: 8px;
  overflow: hidden;
  position: relative;

  span, svg {
    display: inline-block;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
      color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .inner-span {
    clip-path: inset(0);
    display: block;
    position: relative;
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

    svg {
      color: var(--yellow);
    }
  }
`;
