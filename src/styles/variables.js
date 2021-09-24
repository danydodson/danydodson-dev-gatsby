import { css } from 'styled-components'

const variables = css`
  :root {
    --ff-sans: 'Calibre';
    --ff-mono: 'SF Mono';

    --fz-lg: 1.125rem;
    --fz-md: 1rem;
    --fz-sm: 0.875rem;
    --fz-xs: 0.75rem;;
 
    --fw-th: 100;
    --fw-lt: 300;
    --fw-rg: 400;
    --fw-md: 500;
    --fw-sb: 600;
    --fw-bo: 700;
    --fw-bk: 900;

    --lh-sm: 1.1;
    --lh-rg: 1.3;
    --lh-lg: 1.5;
    
    --white_100: #ffffff;
    --black-100: #1b1f23;
    --grey-100: #ededed;
    --grey-200: #292930;
    --blue-100: #519dd9;
    --blue-200: #99d9fd;
    --teal-100: #53bac1;
    --red-100: #e12b38;
    --red-200: #db0038;
    --indigo-100: #e742c3;
    --pink-100: #f692ce;
    --green-100: #3eb650;
    --yellow-100: #f7c200;
    --orange-100: #fcc133;

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
