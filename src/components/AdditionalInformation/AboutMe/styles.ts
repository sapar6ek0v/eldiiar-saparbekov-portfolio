import { Highlight as MantineHighlight } from '@mantine/core';
import styled from 'styled-components';

export const Highlight = styled(MantineHighlight)`
  font-size: 20px;
  line-height: 1.4em;
  letter-spacing: -0.005em;
  font-weight: 300;
  color: var(--dark-gray);

  mark {
    color: var(--yellow);
    font-weight: 400;
    background: transparent;
    position: relative;
    cursor: pointer;

    &::after {
      content: '';
      width: 0;
      height: 1.5px;
      position: absolute;
      left: 0;
      bottom: 1px;
      background: var(--yellow);
      transition: var(--transition);
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`;
