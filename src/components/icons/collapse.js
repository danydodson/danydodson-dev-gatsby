import React from 'react'
// import  { keyframes } from 'styled-components';

const IconCollapse = props => (
  <svg id='collapse' viewBox='0 0 50 40' xmlns='http://www.w3.org/2000/svg' className='icon icon-collapse' {...props}>
    <title>Collapse</title>
    <g fill='none' stroke='currentColor' strokeWidth='4' strokeLinejoin='round' strokeLinecap='round' strokeMiterlimit='10'>
      <line className='topLine' x1='8' y1='16' x2='34' y2='16' />
      <line className='midLine' x1='8' y1='25' x2='34' y2='25' />
      <line className='botLine' x1='8' y1='34' x2='34' y2='34' />
      <polyline className='roof' points='5,11 21,2 37,11' />
      <line className='arrowBody' x1='8' y1='25' x2='48' y2='25' />
      <polyline className='arrowPoint' points='42,32 48,25 42,19' />
    </g>
  </svg>
)

export default IconCollapse

// const breatheAnimation = keyframes`
//  0% { height: 100px; width: 100px; }
//  30% { height: 400px; width: 400px; opacity: 1 }
//  40% { height: 405px; width: 405px; opacity: 0.3; }
//  100% { height: 100px; width: 100px; opacity: 0.6; }
// `;

// const Circle = styled.div`
//   height: 100px;
//   width: 100px;
//   border-style: solid;
//   border-width: 5px;
//   border-radius: 50%;
//   border-color: black;
//   animation-name: ${breatheAnimation};
//   animation-duration: 8s;
//   animation-iteration-count: infinite;
// `;

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   height: 450px;
// `;
