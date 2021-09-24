import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled, { css } from 'styled-components'
import menu from '../images/svg/menu.svg'
import { loadDelay } from '../utils'
import { navLinks } from '../../data/config'
import { useScrollDirection } from '../hooks'
import { Menu } from '../components'
import { Icon } from './icons'

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome)
  const scrollDirection = useScrollDirection('down')
  const [scrolledToTop, setScrolledToTop] = useState(true)

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const timeout = isHome ? loadDelay : 0
  const fadeClass = isHome ? 'fade' : ''
  const fadeDownClass = isHome ? 'fadedown' : ''

  const Logo = (
    <div className='logo' tabIndex='-1'>
      {isHome
        ? <a href='/#' aria-label='home'><Icon name='Logo' /></a>
        : <Link to='/' aria-label='home'><Icon name='Logo' /></Link>
      }
    </div>
  )

  const ResumeLink = (
    <a className='resume-button' href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
      Resume
    </a>
  )

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>

        <div className='nav'>
          <TransitionGroup component={null}>

            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                {Logo}
              </CSSTransition>
            )}
          </TransitionGroup>

          <StyledLinks>
            <ol>
              <TransitionGroup component={null}>
                {isMounted && navLinks && navLinks.map(({ url, name }, i) => (
                  <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                    <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                      <a href={url}>{name}</a>
                    </li>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </ol>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                  <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                    {ResumeLink}
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </StyledLinks>
        </div>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <Menu />
            </CSSTransition>
          )}
        </TransitionGroup>

      </StyledNav>
    </StyledHeader>
  )
}

Nav.propTypes = {
  isHome: PropTypes.bool,
}

export default Nav

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--nav-height);
  background-position: top;
  background-repeat: repeat-x;
  background-image: url(${menu});
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  transition: var(--trans-nav-header);
  z-index: 11;
  
  @media (max-width: 768px) {}
  
  @media (prefers-reduced-motion: no-preference) {
    ${props => props.scrollDirection === 'up' && !props.scrolledToTop && css`
      height: var(--nav-scroll-height);
      opacity: 0.9;
      transform: translateY(0px);
      box-shadow: 0 10px 30px -10px var(--black);
    `};
    
    ${props => props.scrollDirection === 'down' && !props.scrolledToTop && css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: 0 10px 30px -10px var(--black);
    `};
  }
  `

const StyledNav = styled.nav`
  height: 60px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {padding: 0 25px;}

  .nav {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--grey);
    font-family: var(--ff-mono);
    counter-reset: item 0;
    z-index: 12;
    
    /* @media (max-width: 768px) {} */

    .logo {
      display: flex;
      align-items: flex-start;
      
      a {
        width: 32px;
        height: 32px;
        color: var(--blue);
        
        svg {
          user-select: none;
          
          &:hover,
          &:focus 
          &:active {polygon{fill: var(--blue);}}
        }
      }
    }
  }
`

const StyledLinks = styled.ol`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {display: none;}

  ol {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:hover,
        &:active,
        &:focus {color: var(--blue);}
        &:before {
          margin-right: 5px;
          text-align: right;
          font-size: var(--fz-xxs);
          color: var(--blue);
          content: '0' counter(item) '.';
        }
      }
    }
  }

  .resume-button {
    margin-left: 15px;
    font-size: var(--fz-xs);
    ${({ theme }) => theme.mixins.smallButton};
  }
`
