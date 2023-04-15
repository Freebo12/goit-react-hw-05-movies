import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  background-image:url('/img/Background.jpg');
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  line-height: 100%;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.2em;
}

img {  
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
    list-style:none
}

a{
    text-decoration: none;
}

div {
  .wrapper {
      position: relative;
  height: 100%;
  min-height: 100vh;
  }
}

`;
