import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

*{
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box; 
  scroll-behavior: smooth;
  scroll-padding-top: var(--scroll-padding, 50px);
}

body {
  //widht: 100vw;
  height: 100vh;
}

}
`