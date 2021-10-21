import { css } from 'styled-components'

const variables = css`
  :root {
    /*====Font Family=========*/

    --sans: 'Calibre';
    --mono: 'SF Mono';

    /*====Font Size===========*/

    --xl: 1.125rem;
    --lg: 1.125rem;
    --md: 1rem;
    --sm: 0.875rem;
    --xs: 0.75rem;

    /*====Color================*/

    --_black-1: #000000;
    --_black-2: #1b1f23;
    --_white-1: #ffffff;
    --_white-2: #fafffd;
    --_grey-1: #ededed;
    --_grey-2: #292930;
    --_blue-1: #519dd9;
    --_blue-2: #99d9fd;
    --_blue-3: #186cb8;
    --_green-1: #3eb650;
    --_orange-1: #e83611;
    --_orange-2: #ff5722;
    --_pink-1: #f692ce;
    --_pink-2: #f9002f;
    --_purple-1: #e742c3;
    --_red-1: #db0038;
    --_red-2: #e12b38;
    --_teal-1: #53bac1;
    --_teal-2: #2a9a9f;
    --_yellow-1: #f7c200;
    --_yellow-2: #f1b211;

    /*=======================*/

    --box-shadow: #1b1f23;

    /*=======================*/

    --border-radius: 4px;

    /*=======================*/

    --tab-width: 120px;
    --tab-height: 42px;

    /*=======================*/

    --foot-height: 90px;

    /*=======================*/

    --nav-height: 90px;
    --nav-scroll-height: 60px;

    /*====Transitions===================*/

    --ham-width: 30px;
    --ham-height: 2px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;

    /*=======================*/

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --trans-nav-header: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`

export default variables
