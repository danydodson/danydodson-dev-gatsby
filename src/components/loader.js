/* eslint-disable */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import anime from 'animejs'

import { Icon } from '../components/icons'

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false)

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #D',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledLoader className='loader' isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />
      <div className='logo-wrapper'>
        <Icon name='Logo' />
      </div>
    </StyledLoader>
  )
}

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
}

export default Loader

const StyledLoader = styled.div`
  z-index: 99;
  width: 100%;
  height: 100%;
  
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  ${({ theme }) => theme.mixins.flexCenter};
  
  background-color: var(--_white-2);

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    opacity: ${props => (props.isMounted ? 1 : 0)};
    
    transition: var(--transition);

    svg {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      display: block;      
      user-select: none;
      
      fill: none;

      #D {opacity: 0;}
    }
  }
`
