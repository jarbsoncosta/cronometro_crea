import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 

    html {
    @media (min-width: 720px) {
      font-size: 75%;
   
    }
  }
    
}

body{
  background:#030712;
    color:black;
    -webkit-font-smoothing: antialiased;
}
:focus{
outline: 0;
box-shadow: 0 0 0 1px ${(props) => props.theme["blue"]};
border: 0;
}
body, input, textarea, button{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

`;
