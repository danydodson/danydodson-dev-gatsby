import React, { useEffect, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import about from '../../images/svg/about.svg'
import config from '../../../data/config'
import { sr } from '../../utils'

const About = () => {
  const revealContainer = useRef(null)

  useEffect(() => {
    sr.reveal(revealContainer.current, config.srConfig())
  }, [])

  return (
    <AboutSection id='about'>
      <article className='about' ref={revealContainer}>

        <h2 className='numbered_heading'>About Me</h2>

        <div className='about_grid'>

          <StyledText className='info'>
            <div dangerouslySetInnerHTML={{ __html: config.hello }} />
          </StyledText>

          <StyledList className='skills'>
            {config.skills && config.skills.map((skill, i) => (
              <li key={i} className='skill'>{skill}</li>
            ))}
          </StyledList>

          <StyledPic className='image'>
            <div className='inner' />
            <div className='wrapper'>
              <StaticImage
                className='me'
                src='../../../static/og@2.png'
                width={500}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt='Headshot'
              />
            </div>
          </StyledPic>

        </div>

      </article>
    </AboutSection>
  )
}

export default About

const AboutSection = styled.section`
  background-color: #4facf7;
  background-repeat: repeat-x;
  background-image: url(${about});

  article.about {
    /* margin: 0 100px; */

    div.about_grid {
      display: grid;
      grid-template-columns: 3fr 2fr; 
      grid-template-rows: 3fr 1fr; 
      gap: 12px;
      grid-template-areas: 
      "info image"
      "skills . "; 
    }
  }
`

const StyledText = styled.div` 
  grid-area: info;

  p > a > .info-link {
    color: var(--pink);
    &:hover,
    &:focus,
    &:active {color: var(--pink);}
    &:after {background-color: var(--pink);}
  }
`

const StyledList = styled.ul`
  grid-area: skills;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px 0 10px 0;
  overflow: hidden;
  list-style: none;
  
  li.skill {
    position: relative;
    margin: 5px 0;
    padding-left: 20px;
    font-size: var(--fz-xs);
    font-weight: var(--fw-regular);
    font-family: var(--ff-secondary);      
  
    &:before {
      left: 0;
      position: absolute;
      padding-top: 3px;
      content: '🟊';
      color: var(--pink);
      font-size: 20px;
      line-height: 12px;
    }
  }

`

const StyledPic = styled.div`
  grid-area: image;
  width: 200px;
  height: 200px;
  position: relative;
  justify-self: center; 
  align-self: center;
  
  .wrapper {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 100%;
  }
  
  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  .gatsby-image-wrapper{
    border-radius: 100%;
  }

  img.me {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px #ccc solid;
  }

  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 220px;
    height: 220px;
    transform: translate(-50%, -50%);
    border: 1px #ccc solid;
    border-radius: 50%;
  }

`
