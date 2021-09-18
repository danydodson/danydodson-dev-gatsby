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

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:active,
    &:focus {
      color: var(--blue_200);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: inherit;
    
    &:hover,
    &:focus,
    &:active {
      outline: 0;
      
      &:after {
        width: 100%;
      }

      & > * {
        transition: var(--transition);
      }
    }

    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--blue_200);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  button: css`
    color: var(--blue_200);
    background-color: transparent;
    border: 1px solid var(--blue_200);
    border-radius: var(--border_radius);
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
    color: var(--blue_200);
    background-color: transparent;
    border: 1px solid var(--blue_200);
    border-radius: var(--border_radius);
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
    color: var(--blue_200);
    background-color: transparent;
    border: 1px solid var(--blue_200);
    border-radius: var(--border_radius);
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
      background-color: var(--blue_100);
      outline: none;
    }

    &:after {
      display: none !important;
    }
  `,
 
  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--black_tint);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--black_tint);
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

// const button = css`
//   color: var(--blue_200);
//   background-color: transparent;
//   border: 1px solid var(--blue_200);
//   border-radius: var(--border_radius);
//   font-size: var(--fz_xs);
//   font-family: var(--ff_mono);
//   line-height: 1;
//   text-decoration: none;
//   cursor: pointer;
//   transition: var(--transition);
//   padding: 1.25rem 1.75rem;

//   &:hover,
//   &:focus,
//   &:active {
//     background-color: var(--blue_tint);
//     outline: none;
//   }

//   &:after {
//     display: none !important;
//   }
// `