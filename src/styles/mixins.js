import { css } from 'styled-components'

const mixins = {

  flexColumn: css`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  `,

  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  inlineLink: css`
    position: relative;
    display: inline-block;
    color: var(--_blue-1);
    text-decoration: none;
    text-decoration-skip-ink: auto;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      outline: 0; &:after {width: 100%;} 
      & > * {transition: var(--transition);}
    }
    &:after {
      width: 0;
      height: 1px;
      content: '';
      display: block;
      position: relative;
      bottom: 0.37em;
      background-color: var(--_blue-1);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  button: css`
    cursor: pointer;
    color: var(--_blue-1);
    padding: 1.25rem 1.75rem;
    line-height: 1;
    text-decoration: none;
    font-size: var(--xs);
    font-family: var(--mono);
    background-color: transparent;
    border: 1px solid var(--_blue-1);
    border-radius: var(--border-radius);
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {background-color: var(--_blue-1); outline: none;}
    &:after {display: none !important; }
  `,

  smallButton: css`
    cursor: pointer;
    color: var(--_blue-1);
    padding: 0.75rem 1rem;
    line-height: 1;
    font-size: var(--xs);
    font-family: var(--mono);
    text-decoration: none;
    background-color: transparent;
    border: 1px solid var(--_blue-1);
    border-radius: var(--border-radius);
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {background-color: var(--_blue-1); outline: none;}
    &:after {display: none !important;}
  `,

  bigButton: css`
    cursor: pointer;
    color: var(--_blue-1);
    padding: 1.25rem 1.75rem;
    line-height: 1;
    font-size: var(--sm);
    font-family: var(--mono);
    text-decoration: none;
    background-color: transparent;
    border: 1px solid var(--_blue-1);
    border-radius: var(--border-radius);
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {background-color: var(--_blue-1); outline: none;}
    &:after {display: none !important;}
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--box-shadow);
    transition: var(--transition);
    &:hover,
    &:focus {box-shadow: 0 20px 30px -15px var(--box-shadow);}
  `,

  fancyList: css`
    margin: 0;
    padding: 0;
    font-size: var(--lg);
    list-style: none;
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {left: 0; position: absolute; content: '⤏';color: var(--_grey-2);}
    }
  `,
  
  resetList: css`
    margin: 0;
    padding: 0;
    list-style: none;
  `,

}

export default mixins
