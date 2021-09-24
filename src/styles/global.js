import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'
import variables from './variables'
import Transitions from './transitions'
import Prism from './prism'

const Styles = createGlobalStyle`
  ${fonts};
  ${variables};
  
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  
  html {
    width: 100%;
    box-sizing: border-box;
  }
  
  body {
    min-height: 100%;
    overflow-x: hidden;
    line-height: 1.3;
    color: var(--black);
    font-size: var(--fz-xl);
    font-family: var(--ff-primary);
    scroll-behavior: smooth;
    background-color: var(--white);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    @media (max-width: 480px) {font-size: var(--fz-xl);}
    
    &.hidden {overflow: hidden;}
    &.blur {overflow: hidden; #content > * {user-select: none; pointer-events: none; filter: blur(5px) brightness(0.7); transition: var(--transition);}}
    &.blur > header{background-color: transparent;}
  }

  #root {
    display: grid;
    min-height: 100vh;
    grid-template-columns: 100%;
    grid-template-rows: 1fr auto;
  }

  main {
    min-height: 100vh;
    counter-reset: section;
    
    /* padding: 0 150px; */
    /* @media (max-width: 1080px) {padding: 0 100px;} */
    /* @media (max-width: 768px) {padding: 0 50px;} */
    /* @media (max-width: 480px) {padding: 0 25px;} */
  }
  
  section {
    /* padding: 0 120px 120px 120px; */
  }
  
  article {
    /* padding: 0 120px 120px 120px; */
    /* @media (max-width: 768px) { padding: 0 50px 50px 50px; } */
    /* @media (max-width: 480px) { padding: 0 25px 25px 25px; } */
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    color: var(--black);
    font-weight: 600;
    line-height: 1.1;
  }

  /* .layout {
    main {counter-reset: section;}
  } */

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .numbered-heading {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    padding: 130px 0 25px 0;
    font-size: clamp(26px, 5vw, var(--fz-xxxl));
    white-space: nowrap;

    &:before {
      bottom: 4px;
      margin-right: 10px;
      position: relative;
      counter-increment: section;
      content: '0' counter(section) '.';
      color: var(--grey_400);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-family: var(--ff-mono);
      font-weight: 400;

      @media (max-width: 480px) {margin-right: 5px;}
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--grey-100);

      @media (max-width: 1080px) { width: 200px; }
      @media (max-width: 768px) { width: 100%; }
      @media (max-width: 600px) { margin-left: 10px; }
    }
  }

  img, svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  
  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  img[alt=""], img:not([alt]) {
    filter: blur(5px);
  }
  
  svg {
    width: 100%;
    height: 100%;
    &.icon {fill: none;}
  }
  
  a {
    position: relative;
    display: inline-block;
    color: inherit;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {outline: 0;color: var(--blue-200);}
    &.inline-link {${({ theme }) => theme.mixins.inlineLink};}
    &[target='_blank'] {cursor: ne-resize;}
  }

  button {
    border: 0;
    border-radius: 0;
    cursor: pointer;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;
    &:focus {outline: 0;}
    &:focus,
    &:active {&::placeholder {opacity: 0.5;}}
  }

  p {
    margin: 0;
    &:last-child,
    &:last-of-type {margin: 0;}
    & > a {color: inherit;${({ theme }) => theme.mixins.inlineLink};}
    & > code {padding: 0.3em 0.5em;color: var(--white);font-size: var(--fz-sm);background-color: var(--grey);border-radius: var(--border-radius);}
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        margin-bottom: 10px;
        &:before {content: '▹';position: absolute;left: 0;color: var(--grey);}
      }
    }
  }

  blockquote {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: var(--blue);
    p {font-style: italic;font-size: 24px;}
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
    font-size: var(--fz-md);
    font-family: var(--ff-mono);
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
      color: #dbedff;
      background-color: var(--blue);
    }
  }

  #logo,
  #loader {color: var(--blue);}

  .overline {
    color: var(--blue);
    font-family: var(--ff-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {
    margin: 0 0 20px 0;
    color: var(--blue);
    font-size: var(--fz-md);
    font-family: var(--ff-mono);
    font-weight: 400;
    line-height: 1.5;

    @media (max-width: 1080px) { font-size: var(--fz-sm); }
    @media (max-width: 768px) { font-size: var(--fz-xs); }
    
    a {line-height: 1.5;${({ theme }) => theme.mixins.inlineLink};}
  }

  .breadcrumb {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    color: var(--blue);
    .arrow {margin-right: 10px;padding-top: 4px;display: block;}
    a {
      font-size: var(--fz-sm);
      font-family: var(--ff-mono);
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      ${({ theme }) => theme.mixins.inlineLink};
    } 
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: #016E8f #dbedff;
  }

  body::-webkit-scrollbar {
    width: 2;
  }
  
  body::-webkit-scrollbar-track {
    background: red;
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 3px solid red;
    background-color: var(--white);
  }

  ::selection {
    color: var(--blue);
    background-color: var(--grey);
  }

  :focus {
    outline: 2px dashed var(--blue);
    outline-offset: 3px;
  }

  ${Transitions};
  ${Prism};
`

export default Styles
