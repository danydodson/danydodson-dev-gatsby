import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import about from '../../assets/svg/about.svg'
import config from '../../config'
import { sr } from '../../utilities'

const About = () => {
  const revealContainer = useRef(null)

  useEffect(() => {
    sr.reveal(revealContainer.current, config.srConfig())
  }, [])

  return (
    <AboutSection id='about'>
      <article className='about' ref={revealContainer}>
        <h2 className='numbered-heading'>About Me</h2>

        <div className='about_grid'>
          <StyledText className='info'>
            <div dangerouslySetInnerHTML={{ __html: config.hello }} />
          </StyledText>

          <StyledList className='skills'>
            {config.skills &&
              config.skills.map((skill, i) => (
                <li key={i} className='skill'>
                  {skill}
                </li>
              ))}
          </StyledList>

          <StyledPic className='image'>
            <div className='inner' />
            <div className='wrapper'>
              <StaticImage className='me' width={500} quality={95} src='./../../../static/cards/og@2.png' formats={['AUTO', 'WEBP', 'AVIF']} alt='Headshot' />
            </div>
          </StyledPic>
        </div>
      </article>
    </AboutSection>
  )
}

export default About

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url(${about});
  background-repeat: repeat-x;
  background-color: var(--col-about);

  article.about {
    div.about_grid {
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-template-rows: 3fr 1fr;
      gap: 12px;
      grid-template-areas:
        'info image'
        'skills . ';
    }
  }
`

const StyledText = styled.div`
  grid-area: info;
  align-items: center;
  justify-content: center;

  p > a > .info-link {
    color: var(--_pink-1);

    &:hover,
    &:focus,
    &:active {
      color: var(--_pink-1);
    }
    &:after {
      background-color: var(--_pink-1);
    }
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
    font-size: var(--xs);
    font-weight: 400;
    font-family: var(--mono);

    &:before {
      left: 0;
      position: absolute;
      padding-top: 3px;
      content: '🟊';
      color: var(--_pink-1);
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

  .gatsby-image-wrapper {
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
