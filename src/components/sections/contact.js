/* eslint-disable */
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import contact from '../../images/svg/contact.svg'
import { email, srConfig } from '../../../data/config'
import { sr } from '../../utils'

const Contact = () => {
  const revealContainer = useRef(null)

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig())
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

        <a className='email-link' href={`mailto:${email}`}>
          Say Hello
        </a>

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
    color: var(--green);
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