import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  html {
    min-height: 100%;
    font-size: 10px;
  }

  body {
    font-family: sans-serif;
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;
