import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap');

*,*::before,*::after {
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
    font-size: 62.5%;  // 1rem === 10px tzw happy rems
}

body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
}

`;

export default GlobalStyle;
