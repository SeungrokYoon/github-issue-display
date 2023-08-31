import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    font-family: "Helvetica Neue";
    box-sizing: border-box;
    margin:0;
    padding:0
  }

  html,#root,body {
    line-height: 1.5;
    height:100%;
    min-height: 100%;
  }
  a {
      color: inherit;
      text-decoration: none;
      font-size: inherit;
    }

  button, 
  input, 
  textarea, 
  select, 
  option {
      font-family: inherit;
      color: inherit;
      font-size: inherit;
      border: 0;
  }
  button,
  a,
  select > option{
    cursor:pointer
  }
  button:focus, 
  input:focus, 
  textarea:focus, 
  select:focus{
    outline: none;
  }
  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`

export default GlobalStyle
