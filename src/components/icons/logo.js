import React from 'react'
// import styled, { keyframes } from 'styled-components'

const IconLogo = (props) => (
  <svg
    id="logo"
    viewBox="0 0 100 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <title>Logo</title>
    <g transform="translate(11.000000, 5.000000)">
      <path fill="currentColor" d="M 38 30 C 44 30 52 32 52 46 C 52 59 44 61 38 61 L 28 61 L 28 30 Z M 38 55 C 42 55 46 53 46 46 C 46 39 42 36 38 36 L 33.5 36 L 33.5 55 Z Z" />
      <polygon id="Shape" fill="none" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round" points="39 0 0 22 0 67 39 90 78 68 78 23" />
    </g>
  </svg>
)

export default IconLogo

// const breathe = keyframes`
//  0% { opacity: 1 }
//  50% { opacity: 1 }
//  75% { opacity: 0.5 }
//  100% { opacity: 1 }
// `

// const StyledSvg = styled.svg`
//   :hover,
//   :focus,
//   :active {
//     animation-name: ${breathe};
//     animation-duration: 1.5s;
//     animation-iteration-count: infinite;
//   }
// `
