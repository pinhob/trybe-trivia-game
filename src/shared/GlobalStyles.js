import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html, :root {
  background-color: #273830;
  font-family: 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
