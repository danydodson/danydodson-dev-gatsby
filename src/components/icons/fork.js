import React from 'react';

const IconFork = props => (
  <svg
    id="gitfork"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-fork"
    {...props}
  >
    <title>Git Fork</title>
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <line x1="6" y1="3" x2="6" y2="15" />
      <circlec x="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </g>
  </svg>
);

export default IconFork;
