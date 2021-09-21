import React from 'react'

const IconCollapse = (props) => (
  <svg
    id="collapse"
    viewBox="0 0 50 40"
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-collapse"
    {...props}>
    <title>Collapse</title>
    <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10">
      <line className="topLine" x1="8" y1="16" x2="34" y2="16" />
      <line className="midLine" x1="8" y1="25" x2="34" y2="25" />
      <line className="botLine" x1="8" y1="34" x2="34" y2="34" />
      <polyline className="roof" points="5,11 21,2 37,11" />
      <line className="arrowBody" x1="8" y1="25" x2="48" y2="25" />
      <polyline className="arrowPoint" points="42,32 48,25 42,19" />
    </g>
  </svg>
)

export default IconCollapse
