import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    background:${props => props.theme.secondary};
    font-size:18px;
    min-height:100vh;
    color:${props => props.theme.mainFont};
    font-family:'Poppins', 'san-serif';
  }
`