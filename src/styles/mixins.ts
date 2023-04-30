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

  center: css`
    display: flex;
    align-items: center;
  `,

  fontSize12: css`
    font-size: 12px;
    line-height: 16px;
  `,

  fontSize14: css`
    font-size: 14px;
    line-height: 18px;
  `,

  fontSize16: css`
    font-size: clamp(0.88rem, calc(0.83rem + 0.24vw), 1rem);
    line-height: 1.3em;
  `,

  fontSize18: css`
    font-size: clamp(1rem, calc(0.95rem + 0.24vw), 1.13rem);
    line-height: clamp(1.13rem, calc(1.03rem + 0.49vw), 1.38rem);
  `,

  fontSize20: css`
    font-size: clamp(1.13rem, calc(1.08rem + 0.24vw), 1.25rem);
    line-height: 1.4em;
  `,

  fontSize22: css`
    font-size: clamp(1.13rem, calc(1.03rem + 0.49vw), 1.38rem);
    line-height: 1.1em;
  `,

  // components
  button: css`
    width: var(--close-button-wd-ht);
    height: var(--close-button-wd-ht);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;

    &:is(:hover, :active, :focus) {
      color: var(--yellow);
      outline: none;
      background: transparent;
      border-color: var(--yellow);
    }

    svg {
      width: var(--close-button-svg-wd-ht);
      height: var(--close-button-svg-wd-ht);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
};

export default mixins;
