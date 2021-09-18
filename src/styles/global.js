import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'
import variables from './variables'
import Transitions from './transitions'
import Prism from './prism'

const GlobalStyles = createGlobalStyle`
  ${fonts};
  ${variables};
  
  html {
    width: 100%;
    box-sizing: border-box;
  }
  
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  ::selection {
    color: var(--blue_300);
    background-color: var(--grey_100);
  }

  :focus {
    outline: 2px dashed var(--blue_200);
    outline-offset: 3px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--_200) var(--blue_100);
  }
  
  body::-webkit-scrollbar {
    width: 4;
  }
  
  body::-webkit-scrollbar-track {
    background: var(--blue_100);
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 3px solid var(--blue_100);
    background-color: var(--white_300);
  }

  body {
    /* margin: 0; */
    /* width: 100%; */
    min-height: 100%;
    overflow-x: hidden;
    color: var(--grey_400);
    font-size: var(--fz_xl);
    font-family: var(--ff_primary);
    line-height: 1.3;
    background-color: var(--white_100);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (max-width: 480px) { 
      font-size: var(--fz_xl); 
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        user-select: none;
        pointer-events: none;
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr auto;
  }

  main {
    /* width: 100%; */
    /* margin: 0 auto; */
    min-height: 100vh;
  }
  
  section {}
  
  article {
    padding: 0 120px 120px 120px;

    @media (max-width: 768px) { padding: 0 50px 50px 50px; }
    @media (max-width: 480px) { padding: 0 25px 25px 25px; }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    color: var(--black_100);
    font-weight: 600;
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    padding: 130px 0 25px 0;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz_heading));
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--grey_400);
      font-family: var(--ff_mono);
      font-size: clamp(var(--fz_md), 3vw, var(--fz_xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--grey_100);

      @media (max-width: 1080px) { width: 200px; }
      @media (max-width: 768px) { width: 100%; }
      @media (max-width: 600px) { margin-left: 10px; }
    }
  }

  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
    
    &.icon {
      fill: none;
    }
  }

  a {
    position: relative;
    display: inline-block;
    color: inherit;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    transition: var(--transition);
    
    &:hover,
    &:focus {
      color: inherit;
    }

    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    &[target='_blank'] {
      cursor: ne-resize;
    }
  }

  button {
    border: 0;
    border-radius: 0;
    cursor: pointer;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 0 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      color: inherit;
      ${({ theme }) => theme.mixins.inlineLink};
    }

    & > code {
      padding: 0.3em 0.5em;
      color: var(--white_100);
      font-size: var(--fz_sm);
      background-color: var(--grey_400);
      border-radius: var(--border_radius);
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz_lg);
    
      li {
        position: relative;
        margin-bottom: 10px;
    
        &:before {
          content: '🠶';
          ${'' /* content: '▹'; */}
          position: absolute;
          left: 0;
          color: var(--grey_100);
        }
      }
    }
  }

  blockquote {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: var(--blue_200);

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    margin: 0;
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
  }

  code {
    font-size: var(--fz_md);
    font-family: var(--ff_mono);
  }

  .skip-to-content {
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    ${({ theme }) => theme.mixins.button};
    overflow: hidden;
    z-index: -99;
    
    &:focus,
    &:active {
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
      color: var(--blue_100);
      background-color: var(--blue_200);
    }
  }

  #logo,
  #loader {
    color: var(--blue_200);
  }

  .overline {
    color: var(--blue_200);
    font-family: var(--ff_mono);
    font-size: var(--fz_md);
    font-weight: 400;
  }

  .subtitle {
    margin: 0 0 20px 0;
    color: var(--blue_200);
    font-size: var(--fz_md);
    font-family: var(--ff_mono);
    font-weight: 400;
    line-height: 1.5;

    @media (max-width: 1080px) { font-size: var(--fz_sm); }
    @media (max-width: 768px) { font-size: var(--fz_xs); }

    a {
      line-height: 1.5;
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .breadcrumb {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    color: var(--blue_200);

    .arrow {
      margin-right: 10px;
      padding-top: 4px;
      display: block;
    }

    a {
      font-size: var(--fz_sm);
      font-family: var(--ff_mono);
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      ${({ theme }) => theme.mixins.inlineLink};
    } 
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  ${Transitions};
  ${Prism};
  
`

export default GlobalStyles
