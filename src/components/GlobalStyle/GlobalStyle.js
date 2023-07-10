import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;

  ::-webkit-scrollbar { width: 0; }
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

p, h1, h2 {
    padding: 5px;
    margin: 0;
}

button::before {
     color: black !important;
}

`;

export default GlobalStyle;
