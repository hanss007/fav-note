import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap');

*,*::before,*::after {
    box-sizing:border-box;
}
html {
    font-size: 62.5%;  // 1rem === 10px
}

body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
}


`;
