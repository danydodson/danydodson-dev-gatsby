import React, { useEffect, useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { navDelay, loadDelay } from '../../utils'
import hero from '../../images/svg/hero.svg'
import config from '../../../data/config'


const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay)
    return () => clearTimeout(timeout)
  })

  const greet = (
    <h1>Hi, my name is</h1>
  )

  const name = (
    <h2 className='big-heading'>Dany Dodson.</h2>
  )

  const quote = (
    <h3 className='big-heading'>I build things for the web.</h3>
  )

  const bio = (
    <p>I'm a software engineer specializing in building (and occasionally
      designing) exceptional digital experiences. Currently, I'm focused on
      building accessible, human-centered products at
      {' '}<a rel='preload' href='https://upstatement.com/' target='_blank' rel='noreferrer'>Upstatement</a>.
    </p>
  )

  const contact = (
    <a rel='preload' href={`mailto:${config.email}`} className='email-link'>Get In Touch</a>
  )

  const items = [greet, name, quote, bio, contact]

  return (
    <StyledHero id='hero'>
      <article>
        <TransitionGroup component={null}>
          {isMounted && items.map((item, i) => (
            <CSSTransition key={i} classNames='fadeup' timeout={loadDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </article>
    </StyledHero>
  )
}

export default Hero

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fafffd;
  background-repeat: repeat-x;
  background-image: url(${hero});

  h1 {
    margin: 0 0 30px 4px;
    color: var(--blue-100);
    font-family: var(--ff-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: var(--fw-rg);
  }
  
  h3 {
    margin-top: 10px;
    line-height: 0.9;
  }
  
  p {
    margin: 20px 0 0;
    max-width: 525px;

    a {}
  }
  
  a.email-link {
    margin-top: 50px;
    ${({ theme }) => theme.mixins.bigButton};
  }
`