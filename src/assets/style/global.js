import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  'Sora', sans-serif;
  }

  body {
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    color: #fff;
    min-height: 100vh;
  }
`;