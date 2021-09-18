/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { KEY_CODES } from '../constants'
import { navLinks } from '../../data/config'
import { useOnClickOutside } from '../hooks'

const Menu = () => {
  const navRef = useRef(null)
  const buttonRef = useRef(null)
  
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  
  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => setMenuOpen(false))

  let menuFocusables
  let firstFocusableEl
  let lastFocusableEl

  const setFocusables = () => {
    menuFocusables = [buttonRef.current, ...Array.from(navRef.current.querySelectorAll('a'))]
    firstFocusableEl = menuFocusables[0]
    lastFocusableEl = menuFocusables[menuFocusables.length - 1]
  }

  const handleBackwardTab = e => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault()
      lastFocusableEl.focus()
    }
  }

  const handleForwardTab = e => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault()
      firstFocusableEl.focus()
    }
  }

  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false)
        break
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault()
          break
        }
        if (e.shiftKey) {
          handleBackwardTab(e)
        } else {
          handleForwardTab(e)
        }
        break
      }
      default: {
        break
      }
    }
  }

  const onResize = e => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    setFocusables()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <StyledMenu>

      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef}>
        <StyledHamburgerButton onClick={toggleMenu} menuOpen={menuOpen} ref={buttonRef} aria-label='Menu'>
          <div className='ham-box'>
            <div className='ham-box-inner' />
          </div>
        </StyledHamburgerButton>

        <StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <nav ref={navRef}>
            {navLinks && (
              <ol>
                {navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <Link to={url} onClick={() => setMenuOpen(false)}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ol>
            )}
            <a href='/resume.pdf' className='resume-link'>
              Resume
            </a>
          </nav>
        </StyledSidebar>
      </div>

    </StyledMenu>
  )
}

export default Menu

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const StyledHamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    position: relative;
    ${({ theme }) => theme.mixins.flexCenter};
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
    z-index: 10;
  }

  .ham-box {
    display: block;
    position: relative;
    height: 30px;
    width: var(--ham_width);
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    height: var(--ham_height);
    width: var(--ham_width);
    background-color: var(--blue_200);
    border-radius: var(--border_radius);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)});

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      height: var(--ham_height);
      width: var(--ham_width);
      border-radius: var(--border_radius);
      background-color: var(--blue_200);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &:before {
      width: ${props => (props.menuOpen ? `100%` : `120%`)};
      top: ${props => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${props => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) => menuOpen ? 'var(--ham_before_active)' : 'var(--ham_before)'};
    }

    &:after {
      width: ${props => (props.menuOpen ? `100%` : `80%`)};
      bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) => (menuOpen ? 'var(--ham_after_active)' : 'var(--ham_after)')};
    }
  }
`

const StyledSidebar = styled.aside`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    ${({ theme }) => theme.mixins.flexCenter};
    z-index: 9;
    outline: 0;
    background-color: var(--bg_hero);
    box-shadow: -10px 0px 30px -15px var(--black_tint);
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);

  }

  nav {
    width: 100%;
    flex-direction: column;
    color: var(--blue_200);
    font-family: var(--ff_mono);
    text-align: center;
    ${({ theme }) => theme.mixins.flexBetween};
  }

  ol {
    padding: 0;
    margin: 0;
    /* width: 100%; */
    list-style: none;

    li {
      position: relative;
      /* display: flex; */
      /* margin: 0 auto 20px; */
      counter-increment: item 1;
      font-size: clamp(var(--fz_sm), 4vw, var(--fz_lg));

      @media (max-width: 600px) {
        /* margin: 0 auto 10px; */
      }

      &:before {
        content: '0' counter(item) '.';
        display: block;
        /* margin-bottom: 5px; */
        color: var(--blue_200);
        font-size: var(--fz_sm);
      }
    }

    a {
      ${({ theme }) => theme.mixins.link};
      width: 100%;
      /* padding: 3px 20px 20px; */
    }
  }

  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`