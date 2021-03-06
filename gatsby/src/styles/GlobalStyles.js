import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --purple: #cd7afa;
    --black: #2E2E2E;
    --blue: #34c2fa;
    --white: #fff;
    --grey: #efefef;
  }
  html {
    background-image: url(${bg});
    background-size: 100px;
    background-attachment: fixed;
    font-size: 10px;
  }
  body {
    font-size: 2rem;
  }
  footer {
    text-align: center;
    p {
      margin: 0;
    }
    div {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
  a:hover {
    color: var(--purple);
  }
  button {
    background: var(--purple);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
  }
  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--purple) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--purple) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
`;

export default GlobalStyles;