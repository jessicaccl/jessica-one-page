import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-j-bg);
    color: var(--color-j-text);
    -webkit-font-smoothing: antialiased;

    background-image: radial-gradient(rgba(0, 0, 0, 0.15) 2px, transparent 2px);
    background-size: 32px 32px;
    background-position: 0 0;
    background-attachment: fixed;
  }
`;