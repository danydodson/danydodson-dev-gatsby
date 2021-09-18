import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import menu from '../images/svg/menu.svg'
import { loaderDelay } from '../utils'
import { useScrollDirection, useReducedMotion } from '../hooks'
import { navLinks } from '../../data/config'
import { Menu } from '../components'
import { Icon } from './icons'

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome)
  const scrollDirection = useScrollDirection('down')
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const timeout = isHome ? loaderDelay : 0
  const fadeClass = isHome ? 'fade' : ''
  const fadeDownClass = isHome ? 'fadedown' : ''

  const Logo = (
    <div className='logo' tabIndex='-1'>
      {isHome ? (
        <a href='/' aria-label='home'>
          <Icon name='Logo' />
        </a>
      ) : (
        <Link to='/' aria-label='home'>
          <Icon name='Logo' />
        </Link>
      )}
    </div>
  )

  const ResumeLink = (
    <a className='resume-button' href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
      Resume
    </a>
  )

  return (
    <StyledHeader id='nav' scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav >
        {prefersReducedMotion ? (
          <>
            <div className='nav'>
              {Logo}
              <StyledLinks>
                <ol>
                  {navLinks && navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <Link to={url}>{name}</Link>
                    </li>
                  ))}
                </ol>
              </StyledLinks>
            </div>

            <Menu />
          </>
        ) : (
          <>
            <div className='nav'>
              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeClass} timeout={timeout}>
                    <>{Logo}</>
                  </CSSTransition>
                )}
              </TransitionGroup>
              <StyledLinks>
                <ol>
                  <TransitionGroup component={null}>
                    {isMounted && navLinks && navLinks.map(({ url, name }, i) => (
                      <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                        <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                          <Link to={url}>{name}</Link>
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
          </>
        )}

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
  height: var(--nav_height);
  background-position: top;
  background-repeat: repeat-x;
  background-image: url(${menu});
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  transition: var(--trans_nav_header);
  z-index: 11;
  
  @media (max-width: 768px) {}
  
  @media (prefers-reduced-motion: no-preference) {
    ${props => props.scrollDirection === 'up' && !props.scrolledToTop && css`
      height: var(--nav_scroll_height);
      opacity: 0.9;
      transform: translateY(0px);
      box-shadow: 0 10px 30px -10px var(--black_tint);
    `};
    
    ${props => props.scrollDirection === 'down' && !props.scrolledToTop && css`
      height: var(--nav_scroll_height);
      transform: translateY(calc(var(--nav_scroll_height) * -1));
      box-shadow: 0 10px 30px -10px var(--black_tint);
    `};
  }
  `

const StyledNav = styled.nav`
  height: 60px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  .nav {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--grey_400);
    font-family: var(--ff_mono);
    counter-reset: item 0;
    z-index: 12;
    
    /* @media (max-width: 768px) {} */

    .logo {
      display: flex;
      align-items: flex-start;
      
      a {
        width: 32px;
        height: 32px;
        color: var(--blue_200);
        
        svg {
          user-select: none;
          
          &:hover,
          &:focus 
          &:active {
            polygon{fill: var(--blue_tint);}
          }
        }
      }
    }
  }
`

const StyledLinks = styled.ol`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }

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
      font-size: var(--fz_xs);

      a {
        padding: 10px;

        &:hover,
        &:active,
        &:focus {
          color: var(--blue_200);
        }

        &:before {
          margin-right: 5px;
          text-align: right;
          font-size: var(--fz_xxs);
          color: var(--blue_200);
          content: '0' counter(item) '.';
        }
      }
    }
  }

  .resume-button {
    margin-left: 15px;
    font-size: var(--fz_xs);
    ${({ theme }) => theme.mixins.smallButton};
  }
`
