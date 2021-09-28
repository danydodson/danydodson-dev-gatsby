/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { navLinks } from '../../content/meta/config'
import { useOnClickOutside } from '../hooks'
import { keys } from '../utilites'

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
      case keys.ESCAPE:
      case keys.ESCAPE_IE11: {
        setMenuOpen(false)
        break
      }

      case keys.TAB: {
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
    width: var(--ham-width);
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    height: var(--ham-height);
    width: var(--ham-width);
    background-color: var(--_orange-1);
    border-radius: var(--border-radius);
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
      height: var(--ham-height);
      width: var(--ham-width);
      border-radius: var(--border-radius);
      background-color: var(--_orange-1);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &:before {
      width: ${props => (props.menuOpen ? `100%` : `120%`)};
      top: ${props => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${props => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) => menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }

    &:after {
      width: ${props => (props.menuOpen ? `100%` : `80%`)};
      bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) => (menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
    }
  }
`

const StyledSidebar = styled.aside`
  display: none;

  @media (max-width: 768px) {
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 9;
    outline: 0;
    position: fixed;
    height: 100vh;
    width: min(75vw, 400px);
    padding: 50px 10px;
    ${({ theme }) => theme.mixins.flexCenter};
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    background-color: var(--_pink-1);
    box-shadow: -10px 0px 30px -15px var(--_black-2);
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    transition: var(--transition);
  }

  nav {
    width: 100%;
    flex-direction: column;
    color: var(--_blue-1);
    font-family: var(--mono);
    text-align: center;
    ${({ theme }) => theme.mixins.flexBetween};
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      position: relative;
      counter-increment: item 1;
      font-size: clamp(var(--sm), 4vw, var(--lg));

      @media (max-width: 600px) {}

      &:before {
        content: '0' counter(item) '.';
        display: block;
        color: var(--_blue-1);
        font-size: var(--sm);
      }
    }

    a {
      width: 100%;
      ${({ theme }) => theme.mixins.link};
    }
  }

  .resume-link {
    width: max-content;
    padding: 18px 50px;
    margin: 10% auto 0;
    ${({ theme }) => theme.mixins.bigButton};
  }
`
