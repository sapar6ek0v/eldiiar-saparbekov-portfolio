import { css } from 'styled-components';

const mixins = {
  column: css`
    display: flex;
    flex-direction: column;
  `,

  fCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  apart: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  fontSize16: css`
    font-size: 16px;
    line-height: 20px;
  `,

  fontSize18: css`
    font-size: 18px;
    line-height: 24px;
  `,

  fontSize20: css`
    font-size: 20px;
    line-height: 16px;
  `,
};

export default mixins;
