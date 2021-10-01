import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';
import Transitions from './transitions';
import Prism from './prism';

const Styles = createGlobalStyle`
  ${fonts};
  ${variables};
  
  html {
    /* width: 100%; */
    /* box-sizing: border-box; */
  }
  
  /*==========================================*/
  
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /*==========================================*/
  
  body {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    
    font-size: var(--lg);
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.6rem;
    font-family: var(--sans);
    
    color: var(--_grey-2);
    background-color: var(--_white-2);
    
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  
  /*==========================================*/

  #root {
    display: grid;
    min-height: 100vh;
    grid-template-columns: 100%;
    grid-template-rows: 1fr auto;
  }
  
  /*==========================================*/

  main {
    min-height: 100vh;
    counter-reset: section;
  }

  /*==========================================*/
  
  section {
    /* width: 100%; */
    height: 100vh;
  }
  
  /*==========================================*/
  
  article {
    margin: 0 auto;
    width: calc(100vw - 20px);
    @media (min-width: 480px) {width: calc(100vw - 50px);}
    @media (min-width: 768px) {width: calc(100vw - 166px);}
    @media (min-width: 1080px) {width: calc(100vw - 240px);}
  } 

  /*==========================================*/
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: var(--_black-2);
    font-weight: normal;
    /* font-weight: 600; */
    line-height: 1.4;
    /* line-height: 1.3; */
  }
  
  /*==========================================*/

  .small-heading {
    font-size: clamp(12px, 2vw, 30px);
    /* @media (max-width: 768px) {margin: 18vh auto 0 auto;} */
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }
  
  /*==========================================*/

  .medium-heading {
    margin: 0;font-size: clamp(40px, 8vw, 60px);
  }
  
  /*==========================================*/

  .numbered-heading {
    width: 100%;
    padding: 130px 0 25px 0;
    
    display: flex;
    align-items: center;
    position: relative;
    white-space: nowrap;
    
    font-size: clamp(26px, 5vw, var(--lg));
    
    &:before {
      bottom: 4px;
      margin-right: 10px;
      position: relative;
      
      content: '0' counter(section) '.';
      counter-increment: section;
      
      font-weight: 400;
      color: var(--_grey-2);
      font-family: var(--mono);
      font-size: clamp(var(--md), 3vw, var(--lg));
      
      @media (max-width: 480px) {margin-right: 5px;}
    }
    
    &:after {
      content: '';
      width: 300px;
      height: 1px;
      margin-left: 20px;
      
      top: -5px;
      display: block;
      position: relative;
      
      background-color: var(--_grey-2);
      
      @media (max-width: 1080px) { width: 200px; }
      @media (max-width: 768px) { width: 100%; }
      @media (max-width: 600px) { margin-left: 10px; }
    }
  }

  /*==========================================*/
  
  img, 
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  
  /*==========================================*/

  svg {
    width: 100%;
    height: 100%;
    &.icon {fill: none;}
  }
  
  /*==========================================*/

  #logo,
  #loader {color: var(--_yellow-1);}

  /*==========================================*/

  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  
  /*==========================================*/

  img[alt=""], img:not([alt]) {
    filter: blur(5px);
  }
  
  /*==========================================*/
  
  a {
    position: relative;
    display: inline-block;
    
    color: var(--_blue-1);
    text-decoration: none;
    text-decoration-skip-ink: auto;
    
    transition: var(--transition);
    
    &:hover,
    &:active,
    &:focus {outline: 0; color: var(--_blue-1);}
    
    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
    
    &[target='_blank'] {
      cursor: ne-resize;
    }
  }
  
  /*==========================================*/

  button {
    border: 0;
    border-radius: 0;
    cursor: pointer;
  }

  /*==========================================*/
  
  input, textarea {
    border-radius: 0;
    outline: 0;
    &:focus {outline: 0;}
    &:focus,
    &:active {&::placeholder {opacity: 0.5;}}
  }

  /*==========================================*/
  
  p {
    margin: 0;

    &:last-child,
    &:last-of-type {margin: 0;}

    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
    
    & > code {
      /* padding: 0.3em 0.5em;  */
      /* color: var(--_white-1);  */
      /* font-size: var(--sm);  */
      /* background-color: var(--_gre-1y);  */
      /* border-radius: var(--border-radius); */
    }
  }

  /*==========================================*/

  ul {
    &.fancy-list {
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: var(--lg);
      li {
        position: relative;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          left: 0;
          position: absolute;
          color: var(--_grey);
        }
      }
    }
  }
  
  /*==========================================*/

  blockquote {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: var(--_teal-1);
    p {font-style: italic; font-size: 24px;}
  }
  
  /*==========================================*/

  hr {
    margin: 0;
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
  }
  
  /*==========================================*/

  code {
    font-size: var(--md);
    font-family: var(--mono);
  }
  
  /*==========================================*/

  .skip-to-content {
    z-index: -99;
    width: 1px;
    height: 1px;
    top: auto;
    left: -999px;
    position: absolute;
    overflow: hidden;
    ${({ theme }) => theme.mixins.button};
    
    &:focus,
    &:active {
      z-index: 99;
      width: auto;
      height: auto;
      top: 0;
      left: 0;
      overflow: auto;
      color: #dbedff;
      background-color: var(--_blue-1);
    }
  }

  /*==========================================*/

  .overline {
    font-weight: 400;
    font-size: var(--md);
    font-family: var(--mono);
    color: var(--_blue-1);
  }
  
  /*==========================================*/
  
  .subtitle {
    margin: 0 0 20px 0;
    
    line-height: 1.5;
    font-weight: 400;
    color: var(--_blue-1);
    font-size: var(--md);
    font-family: var(--mono);
    
    @media (max-width: 1080px) { font-size: var(--sm); }
    @media (max-width: 768px) { font-size: var(--xs); }

    a {
      line-height: 1.5; 
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }
  
  /*==========================================*/
  
  .breadcrumb {
    color: var(--_blue-1);
    align-items: center;
    display: flex;
    margin-bottom: 50px;

    .arrow {
      margin-right: 10px; 
      padding-top: 4px; 
      display: block;
    }

    a {
      font-size: var(--sm);
      font-family: var(--mono);
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      ${({ theme }) => theme.mixins.inlineLink};
    } 
  }

  /*==========================================*/

  ::selection {
    background-color: var(--_teal-1);
    color: var(--_white-1);
  }
  
  /*==========================================*/

  :focus {
    outline: 2px dashed green;
    outline-offset: 3px;
  }
  
  /*====Scrollbar Styles=======================*/
  
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--_white-2) var(--_blue-2);
  }
  
  /*==========================================*/
  
  body::-webkit-scrollbar {
    width: 2px;
  }
  
  /*==========================================*/
  
  body::-webkit-scrollbar-track {
    background: var(--_white-2);
  }
  
  /*==========================================*/
  
  body::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: var(--_blue-2);
  }
  
  /*==========================================*/

  body {
    scroll-behavior: smooth;
    &.hidden {overflow: hidden;}
    &.blur {overflow: hidden; #content > * {user-select: none; pointer-events: none; filter: blur(5px) brightness(0.7); transition: var(--transition);}}
    &.blur > header{background-color: transparent;}
  }
  ${Transitions};
  ${Prism};
`;

export default Styles;
