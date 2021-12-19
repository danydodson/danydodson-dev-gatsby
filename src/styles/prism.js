import { css } from 'styled-components'

const prismColors = {
  bg: `#112340`,
  lineHighlight: `#1d2d50`,
  title: '#efefef',
  blue: `#5ccfe6`,
  purple: `#c3a6ff`,
  green: `#bae67e`,
  yellow: `#ffd580`,
  orange: `#ffae57`,
  red: `#ef6b73`,
  grey: `#a2aabc`,
  comment: `#8695b799`,
  variable: `#efefef`
}

// https://www.gatsbyjs.org/packages/gatsby-remark-prismjs

const PrismStyles = css`
  /**
  * Add back the container background-color, border-radius, padding, margin
  * and overflow that we removed from <pre>.
  */
  .gatsby-highlight {
    position: relative;
    margin: 2em 0;
    padding: 1.25em;
    color: ${prismColors.variable};
    font-family: var(--mono);
    font-size: var(--md);
    border-radius: var(--border-radius);
    background-color: ${prismColors.bg};
    overflow: auto;
  }

  .gatsby-highlight code[class*='language-'],
  .gatsby-highlight pre[class*='language-'] {
    height: auto !important;
    font-size: var(--sm);
    line-height: 1.5;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 2;
    hyphens: none;
  }

  /**
  * Remove the default PrismJS theme background-color, border-radius, margin,
  * padding and overflow.
  * 1. Make the element just wide enough to fit its content.
  * 2. Always fill the visible space in .gatsby-highlight.
  * 3. Adjust the position of the line numbers
  */
  .gatsby-highlight pre[class*='language-'] {
    margin: 0;
    padding: 0;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
    padding-top: 2em;
    background-color: transparent;
    overflow: initial;
  }

  /* File names */
  .gatsby-code-title {
    padding: 1em 1.5em;
    font-family: var(--mono);
    font-size: var(--xs);
    color: ${prismColors.grey};
    background-color: ${prismColors.bg};
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    border-bottom: 1px solid ${prismColors.lineHighlight};
    & + .gatsby-highlight {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  /* Line highlighting */
  .gatsby-highlight-code-line {
    display: block;
    margin-left: -1.35em;
    margin-right: -1.35em;
    padding-left: calc(1em + 2px);
    padding-right: 1em;
    background-color: ${prismColors.lineHighlight};
    border-left: 2px solid var(--_blue-1);
  }

  /* Language badges */
  .gatsby-highlight pre[class*='language-']::before {
    position: absolute;
    top: 0;
    left: 1.25rem;
    padding: 0.25rem 0.5rem;
    background: #5471a0;
    color: ${prismColors.title};
    font-size: var(--xs);
    font-family: var(--mono);
    line-height: 1.5;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-bottom: 1px solid var(--_blue-1);
    border-right: 1px solid var(--_blue-1);
    border-left: 1px solid var(--_blue-1);
    border-radius: 0 0 3px 3px;
  }

  .gatsby-highlight pre[class='language-js']::before {
    content: 'js';
  }
  .gatsby-highlight pre[class='language-javascript']::before {
    content: 'js';
  }
  .gatsby-highlight pre[class='language-jsx']::before {
    content: 'jsx';
  }
  .gatsby-highlight pre[class='language-html']::before {
    content: 'html';
  }
  .gatsby-highlight pre[class='language-css']::before {
    content: 'css';
  }
  .gatsby-highlight pre[class='language-mdx']::before {
    content: 'mdx';
  }
  .gatsby-highlight pre[class='language-shell']::before {
    content: 'shell';
  }
  .gatsby-highlight pre[class='language-sh']::before {
    content: 'sh';
  }
  .gatsby-highlight pre[class='language-bash']::before {
    content: 'bash';
  }
  .gatsby-highlight pre[class='language-graphql']::before {
    content: 'GraphQL';
  }
  .gatsby-highlight pre[class='language-yaml']::before {
    content: 'yaml';
  }
  .gatsby-highlight pre[class='language-markdown']::before {
    content: 'md';
  }
  .gatsby-highlight pre[class='language-json']::before {
    content: 'json';
  }
  .gatsby-highlight pre[class='language-json5']::before {
    content: 'json';
  }
  .gatsby-highlight pre[class='language-diff']::before {
    content: 'diff';
  }
  .gatsby-highlight pre[class='language-text']::before {
    content: 'text';
  }
  .gatsby-highlight pre[class='language-flow']::before {
    content: 'flow';
  }

  /* Prism Styles */
  .token {
    display: inline;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${prismColors.comment};
  }

  .token.punctuation {
    color: ${prismColors.grey};
  }

  .token.namespace,
  .token.deleted {
    color: ${prismColors.red};
  }

  .token.function-name,
  .token.function,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: ${prismColors.yellow};
  }

  .token.attr-name,
  .token.operator,
  .token.rule {
    color: ${prismColors.orange};
  }

  .token.keyword,
  .token.boolean,
  .token.number,
  .token.property {
    color: ${prismColors.purple};
  }

  .token.tag,
  .token.parameter,
  .token.selector,
  .token.important,
  .token.atrule,
  .token.builtin,
  .token.entity,
  .token.url {
    color: ${prismColors.blue};
  }

  .token.variable,
  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.inserted {
    color: ${prismColors.green};
  }

  .token.parameter {
    color: ${prismColors.variable};
  }

  .token.important,
  .token.bold {
    font-weight: 600;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .namespace {
    opacity: 0.7;
  }
`

export default PrismStyles
