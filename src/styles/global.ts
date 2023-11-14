import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  header, body, footer {
    -webkit-font-smoothing: antialised;
    background-color: ${props => props.theme.colors['white-700']};
  }
`