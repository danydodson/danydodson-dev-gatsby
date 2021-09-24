import { css } from 'styled-components'

const mixins = {

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
    color: inherit;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      outline: 0;
        &:after {width: 100%;} 
        & > * {transition: var(--transition);}
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--blue);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  button: css`
    color: var(--blue);
    background-color: transparent;
    border: 1px solid var(--blue);
    border-radius: var(--border-radius);
    font-size: var(--fz_xs);
    font-family: var(--ff_mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 1.25rem 1.75rem;
    &:hover,
    &:focus,
    &:active {
      background-color: var(--blue_tint);
      outline: none;
    }
    &:after { 
      display: none !important; 
    }
  `,

  smallButton: css`
    color: var(--blue);
    background-color: transparent;
    border: 1px solid var(--blue);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz_xs);
    font-family: var(--ff_mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: #fff281;
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: var(--blue);
    background-color: transparent;
    border: 1px solid var(--blue);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz_sm);
    font-family: var(--ff_mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: #dbedff;
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    transition: var(--transition);
    box-shadow: 0 10px 30px -15px var(--box-shadow);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--box-shadow);
    }
  `,

  fancyList: css`
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: var(--fz_lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        left: 0;
        position: absolute;
        content: '⤏'; /* ▹ */
        color: var(--grey_100);
      }
    }
  `,

  resetList: css`
    margin: 0;
    padding: 0;
    list-style: none;
  `,

}

export default mixins
