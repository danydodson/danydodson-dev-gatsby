import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { loadDelay, navDelay } from '../../utilites'
import config from '../../../content/meta/config'
import hero from '../../assets/svg/hero.svg'
import styled from 'styled-components'


const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), navDelay)
    return () => clearTimeout(timeout)
  })

  const greeting = (
    <h1 className='small-heading'>Hi, my name is</h1>
  )

  const name = (
    <h2 className='big-heading'>Dany Dodson.</h2>
  )

  const quote = (
    <h2 className='big-heading'>I build things for the web.</h2>
  )

  const bio = (
    <p className='hero-text'>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at <span><a href='https://upstatement.com/'>Upstatement</a></span>.</p>
  )

  const contact = (
    <a className='email-link' href={`mailto:${config.email}`}>Get In Touch</a>
  )

  const data = [greeting, name, quote, bio, contact]

  const inner = (
    mounted && data.map((item, i) => (
      <CSSTransition key={i} classNames='fadeup' timeout={loadDelay}>
        <span style={{ transitionDelay: `${i + 1}00ms` }}>{item}</span>
      </CSSTransition>))
  )

  return (
    <StyledHeroSection id='hero'>
      <article className='hero'>
        <TransitionGroup component={null}>{inner}</TransitionGroup>
      </article>
    </StyledHeroSection>
  )
}

export default Hero

const StyledHeroSection = styled.section`    
  display: flex;
  flex-direction: column;
  
  background-image: url(${hero});
  background-repeat: repeat-x;
  background-color: var(--_white-2);
  
  & span > h1.small-heading {
    margin-top: 18vh;
  }
  
  & span > .name {}
  & span > .name {}
  & span > .quote {}
  & span > .email-link {}

  & h1 {
    color: var(--_blue-1);
    font-family: var(--mono);
  }

  & h2 {
    color: transparent;
    background: linear-gradient(
      219deg, 
      var(--_blue-1) 19%, transparent 19%, transparent 20%, var(--_teal-2) 20%, 
      var(--_teal-2) 39%, transparent 39%, transparent 40%, var(--_yellow-2) 40%, 
      var(--_yellow-2) 59%, transparent 59%, transparent 60%, var(--_orange-2) 60%, 
      var(--_orange-2) 79%, transparent 79%, transparent 80%, var(--_pink-2) 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
  }

  & h3 {
    font-size: 1.5em;
  }
  
  & p {
    & a {}
  }
  
  & a.email-link {
    ${({ theme }) => theme.mixins.bigButton};
  }
`