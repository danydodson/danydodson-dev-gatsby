import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'
import variables from './variables'
import Transitions from './transitions'
import Prism from './prism'

const Styles = createGlobalStyle`
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
    box-sizing: border-box;
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

  .bubbles-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    max-width: 15rem;
    transform: translateX(-50%);
  	opacity: 0.75;
  	overflow: visible;
  }
  
  .bubbles {
  	width: 100%;
  	height: auto;
  	
  	circle {
  		stroke: white;
  		fill: none;
  	}
  	
  	> g > g:nth-of-type(3n) circle {
  		stroke: #87f5fb;
  	}
  	
  	> g > g:nth-of-type(4n) circle {
  		stroke: #8be8cb;
  	}
  	
  }
  
  .bubbles-large {
  	overflow: visible;
  
  	> g {
  		transform: translateY(2048px);
  		opacity: 0;
  		will-change: transform, opacity;
  	}
  
  	g:nth-of-type(1) {
  		animation: up 6.5s infinite;
  		
  		g {
  			transform: translateX(350px);
  		}
  
  		circle {
  			animation: wobble 3s infinite ease-in-out;
  		}
  
  	}
  	
  	g:nth-of-type(2) {
  		animation: up 5.25s 250ms infinite;
  		
  		g {
  			transform: translateX(450px);
  		}
  
  		circle {
  			animation: wobble 3s infinite ease-in-out;
  		}
  
  	}
  	
  	g:nth-of-type(3) {
  		animation: up 6s 750ms infinite;
  		
  		g {
  			transform: translateX(700px);
  		}
  
  		circle {
  			animation: wobble 3s infinite ease-in-out;
  		}
  
  	}
  	
  	g:nth-of-type(4) {
  		animation: up 5.5s 1.5s infinite;
  		
  		g {
  			transform: translateX(500px);
  		}
  
  		circle {
  			animation: wobble 3s infinite ease-in-out;
  		}
  
  	}
  	
  	g:nth-of-type(5) {
  		animation: up 6.5s 4s infinite;
  		
  		g {
  			transform: translateX(675px);
  		}
  
  		circle {
  			animation: wobble 3s infinite ease-in-out;
  		}
  
  	}
  
  }

  .bubbles-small {
  	overflow: visible;
  
  	> g {
  		transform: translateY(2048px);
  		opacity: 0;
  		will-change: transform, opacity;
  	}
  
  	g circle {
  		transform: scale(0);
  	}
  
  	g:nth-of-type(1) {
  		animation: up 5.25s infinite;
  		
  		g {
  			transform: translateX(350px);
  		}
  
  		circle {
  			animation: wobble 3s infinite ease-in-out;
  		}
  
  	}
  
  	g:nth-of-type(2) {
  		animation: up 5.75s infinite;
  		
  		g {
  			transform: translateX(750px);
  		}
  
  		circle {
  			animation: wobble 3s infinite ease-in-out;
  		}
  
  	}
  
  	g:nth-of-type(3) {
  		animation: up 5.25s 250ms infinite;
  		
  		g {
  			transform: translateX(350px);
  		}
  
  		circle {
  			animation: wobble 3s 250ms infinite ease-in-out;
  		}
  
  	}
  
  	g:nth-of-type(4) {
  		animation: up 5.75s 325ms infinite;
  		
  		g {
  			transform: translateX(180px);
  		}
  
  		circle {
  			animation: wobble 3s 325ms infinite ease-in-out;
  		}
  
  	}
  
  	g:nth-of-type(5) {
  		animation: up 6s 125ms infinite;
  		
  		g {
  			transform: translateX(350px);
  		}
  
  		circle {
  			animation: wobble 3s 250ms infinite ease-in-out;
  		}
  
  	}
  
  	g:nth-of-type(6) {
  		animation: up 5.13s 250ms infinite;
  		
  		g {
  			transform: translateX(650px);
  		}
  
  		circle {
  			animation: wobble 3s 125ms infinite ease-in-out;
  		}
  
  	}
  
  	g:nth-of-type(7) {
  		animation: up 6.25s 350ms infinite;
  		
  		g {
  			transform: translateX(480px);
  		}
  
  		circle {
  			animation: wobble 3s 325ms infinite ease-in-out;
  		}
  
  	}
  	
  	g:nth-of-type(8) {
  		animation: up 7s 200ms infinite;
  		
  		g {
  			transform: translateX(330px);
  		}
  
  		circle {
  			animation: wobble 3s 325ms infinite ease-in-out;
  		}
  
  	}
  
  	g:nth-of-type(9) {
  		animation: up 6.25s 233ms infinite;
  		
  		g {
  			transform: translateX(230px);
  		}
  
  		circle {
  			animation: wobble 3s 275ms infinite ease-in-out;
  		}
  
  	}
  	
  	g:nth-of-type(10) {
  		animation: up 6s 900ms infinite;
  		
  		g {
  			transform: translateX(730px);
  		}
  
  		circle {
  			animation: wobble 2s 905ms infinite ease-in-out;
  		}
  
  	}
  	
  }
  
  @keyframes wobble {
  	
  	33% {
  		transform: translateX(-50px);
  	}
  	
  	66% {
  		transform: translateX(50px);
  	}
  	
  }
  
  @keyframes up {
  
  	0% {
  		opacity: 0;
  	}
  	
  	10%, 90% {
  		opacity: 1;
  	}
  	
  	100% {
  		opacity: 0;
  		transform: translateY(-1024px);
  	}
  	
  }

  ${Transitions};
  ${Prism};
  
`

export default Styles
