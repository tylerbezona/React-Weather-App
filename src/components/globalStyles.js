import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0%;
        z-index: 2;
        font-family: "Roboto", Arial;
        overflow: none;
        
    }

    html {
        
    }

`;

export default GlobalStyle;

export const BackgroundImage = styled.img`
  display: block;
  position: absolute;
  height: 100vh;
  filter: blur(3px);
  z-index: -1;
  margin: 0;
  top: 0;
  width: 100%;
  object-fit: cover;
  /* transform: scale(1.01); */
  overflow: hidden !important;
`;
