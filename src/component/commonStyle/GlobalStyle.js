import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  #root {
    display: flex;
    
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;