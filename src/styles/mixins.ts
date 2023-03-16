import { css } from 'styled-components';

const mixins = {
  column: css`
    display: flex;
    flex-direction: column;
  `,

  fontSize16: css`
    font-size: 16px;
    line-height: 20px;
  `,

  fontSize18: css`
    font-size: 18px;
    line-height: 24px;
  `,
};

export default mixins;
