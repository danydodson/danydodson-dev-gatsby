import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};
  
  body {
    margin: 0;
    color: var(--dark-gray);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
  }
`

export default GlobalStyle
