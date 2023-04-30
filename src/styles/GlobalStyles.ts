import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
  ${variables};
  
  * {
    box-sizing: border-box;
    /* cursor: none; */
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Source Sans Pro',sans-serif;
    font-weight: 300;
    background-color: var(--dark-brown) !important;
    overscroll-behavior-y: none;
    user-select: none;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }


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
