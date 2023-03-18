import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
  ${variables};

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
