import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 50px 20px;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  background-image: url("https://www.dziennikprawny.pl/img/zdjecia/1/2022_04/7706.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
`;