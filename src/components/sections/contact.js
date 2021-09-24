/* eslint-disable */
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import contact from '../../images/svg/contact.svg'
import config from '../../../data/config'
import { sr } from '../../utils'

const Contact = () => {
  const revealContainer = useRef(null)

  useEffect(() => {
    sr.reveal(revealContainer.current, config.srConfig())
  }, [])

  return (
    <StyledContactSection id='contact'>
      <StyledContactArticle ref={revealContainer}>

        <h2 className='numbered-heading overline'>What’s Next?</h2>

        <h2 className='title'>Get In Touch</h2>

        <p>
          Although I'm not currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a className='email-link' rel='preload' href={`mailto:${config.email}`}>
          Say Hello
        </a>


        <div className='fonts'>
          <p className='sfmono-400'>I'm a software engineer. sfmono-400</p>
          <p className='sfmono-400-i'>I'm a software engineer. sfmono-400-i</p>
          <p className='sfmono-500'>I'm a software engineer. sfmono-400</p>
          <p className='sfmono-500-i'>I'm a software engineer. sfmono-400-i</p>
          <p className='sfmono-600'>I'm a software engineer. sfmono-400</p>
          <p className='sfmono-600-i'>I'm a software engineer. sfmono-400-i</p>
          <p className='calibre-100'>I'm a software engineer. calibre-100</p>
          <p className='calibre-100-i'>I'm a software engineer. calibre-100-i</p>
          <p className='calibre-300'>I'm a software engineer. calibre-300</p>
          <p className='calibre-300-i'>I'm a software engineer. calibre-300-i</p>
          <p className='calibre-400'>I'm a software engineer. calibre-400</p>
          <p className='calibre-400-i'>I'm a software engineer. calibre-400-i</p>
          <p className='calibre-500'>I'm a software engineer. calibre-500</p>
          <p className='calibre-500-i'>I'm a software engineer. calibre-500-i</p>
          <p className='calibre-600'>I'm a software engineer. calibre-600</p>
          <p className='calibre-600-i'>I'm a software engineer. calibre-600-i</p>
          <p className='calibre-700'>I'm a software engineer. calibre-700</p>
          <p className='calibre-700-i'>I'm a software engineer. calibre-700-i</p>
          <p className='calibre-900'>I'm a software engineer. calibre-900</p>
          <p className='calibre-900-i'>I'm a software engineer. calibre-900-i</p>
        </div>

      </StyledContactArticle>
    </StyledContactSection>
  )
}

export default Contact

const StyledContactSection = styled.section`
  background-color: #fafffd;
  background-repeat: repeat-x;
  background-image: url(${contact});

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green-100);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`

const StyledContactArticle = styled.article``