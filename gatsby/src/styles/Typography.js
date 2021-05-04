import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/indie-flower-v12-latin-regular.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: IndieFlower;
    src: url(${font});
  }
  html {
    font-family: IndieFlower, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  h2, h3 {
    font-weight: bold;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--purple);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--blue);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }
  .center {
    text-align: center;
  }
  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;