import { css } from 'styled-components';

const variables = css`
  :root {
    --yellow: #fdc60c;
    --orange: #fdcb6e;
    --light-pink: #ff7675;
    --pink: #e84393;
    --red: #fa5252;
    --red2: #fe0707;
    --hover-red: #b63737;
    --purple: #4a3abdab;
    --shadow-gray: rgba(255, 255, 255, 0.2);
    --shadow-gray2: rgba(255, 255, 255, 0.6);
    --white: #fff;
    --brown-shadow: #4c4242;
    --dark-gray: #7c7c7c;
    --dark-brown: #212121;
    --dark: #181818;
    --dark2: rgba(0, 0, 0, 0.7);
    --dark3: #161616;
    --dark4: #111111;
    --dark5: #080808;
    --dark6: rgba(22, 22, 22, 0.95);
    --dark7: #000;
    --dark-shadow: rgba(0, 0, 0, 0.15);
    --dark-shadow2: rgba(0, 0, 0, 0.7);
    --light-dark-gray: rgba(0, 0, 0, 0);
    --dark-shadow-hover: rgba(0, 0, 0, 0.25);

    --font-family: 'Montserrat', sans-serif;
    --font-source-sans-pro: 'Source Sans Pro', sans-serif;
    --transition: all 0.4s linear;

    --font-size-extra-small: clamp(0.44rem, calc(0.41rem + 0.12vw), 0.5rem);
    --font-size-hero: clamp(2.38rem, calc(1.96rem + 2.07vw), 3.44rem);
    --font-size-link-btn: clamp(0.88rem, calc(0.83rem + 0.24vw), 1rem);
    --font-size-title: clamp(1.75rem, calc(1.65rem + 0.49vw), 2rem);
    --container-padding: clamp(0.63rem, calc(0.02rem + 3.05vw), 2.19rem);
    --gap: clamp(1.25rem, calc(1.1rem + 0.73vw), 1.63rem);
    --pd-l: clamp(1.81rem, calc(1.67rem + 0.73vw), 2.19rem);
    --left: clamp(-1.56rem, calc(-1.13rem + -0.61vw), -1.25rem);
    --font-size-22: clamp(1.13rem, calc(1.03rem + 0.49vw), 1.38rem);
    --font-size-16: clamp(0.88rem, calc(0.83rem + 0.24vw), 1rem);
    --button-width: clamp(6.25rem, calc(5.76rem + 2.44vw), 7.5rem);
    --close-button-wd-ht: clamp(1.88rem, calc(1.75rem + 0.61vw), 2.19rem);
    --close-button-svg-wd-ht: clamp(1rem, calc(0.95rem + 0.24vw), 1.13rem);
  }
`;

export default variables;
