import { css } from 'styled-components'

const variables = css`
  :root {
    --ff-primary: 'Calibre';
    --ff-secondary: 'SF Mono';

    --fz-lg: 1.125rem;
    --fz-md: 1rem;;
    --fz-sm: 0.875rem;
    --fz-xs: 0.75rem;;
 
    --fw-thin: 100;
    --fw-lite: 300;
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-semibold: 600;
    --fw-bold: 700;
    --fw-black: 900;

    --lh-regular: 1.3;
    
    --white: #ffffff;
    --black: #1b1f23;
    --grey: #ededed;
    --red: #db0038;
    --green: #26d878;
    --blue: #519dd9;
    --light_blue: #99d9fd;
    --yellow: #f7c200;
    --orange: #f96622;
    --pink: #f692ce;
    --teal: #53bac1;
    --indigo: #e742c3;
    
    --box-shadow: #1b1f23;

    --border-radius: 4px;

    --tab-width: 120px;
    --tab-height: 42px;

    --foot-height: 90px;

    --nav-height: 90px;
    --nav-scroll-height: 60px;
    
    --ham-width: 30px;
    --ham-height: 2px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;

    
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --trans-nav-header: all 0.50s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`

export default variables
