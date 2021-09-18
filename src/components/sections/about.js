import React, { useEffect, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import about from '../../images/svg/about.svg'
import { srConfig } from '../../../data/config'
import { scrollr } from '../../utils'

const About = () => {
  const revealContainer = useRef(null)

  useEffect(() => {
    scrollr.reveal(revealContainer.current, srConfig())
  }, [])

  const skills = ['JavaScript (ES6+)', 'React', 'Eleventy', 'Vue', 'Node.js', 'WordPress']

  return (
    <StyledAboutSection id='about'>
      <article ref={revealContainer}>

        <h2 className='numbered-heading'>About Me</h2>

        <div className='inner'>
          <StyledText>
            <div>
              <p>
                Hello! My name is Dany and I enjoy creating things that live on the internet. My
                interest in web development started back in 2000 when I decided to try editing live
                Journal themes — turns out hacking together a custom reblog button taught me a lot
                about HTML &amp; CSS!
              </p>

              <p>
                Fast-forward to today, and I've had the privilege of working at{' '}
                <a href='https://us.mullenlowe.com/'>an advertising agency</a>,{' '}
                <a href='https://starry.com/'>a start-up</a>,{' '}
                <a href='https://www.apple.com/'>a huge corporation</a>, and{' '}
                <a href='https://scout.camd.northeastern.edu/'>a student-led design studio</a>. My
                main focus these days is building accessible, inclusive products and digital
                experiences at <a href='https://upstatement.com/'>Upstatement</a> for a variety of
                clients.
              </p>

              <p>Here are a few technologies I've been working with recently:</p>
            </div>

            <ul className='skills-list'>
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </StyledText>

          <StyledPic>
            <div className='wrapper'>
              <StaticImage
                className='img'
                src='../../../static/og@1.png'
                width={500}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt='Headshot'
              />
            </div>
          </StyledPic>

        </div>
      </article>
    </StyledAboutSection>
  )
}

export default About

const StyledAboutSection = styled.section`
  background-color: #4facf7;
  background-repeat: repeat-x;
  background-image: url(${about});

  article {
    .inner {}
  }

`

const StyledText = styled.div`
  ul.skills-list {
    padding: 0;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    list-style: none;
    overflow: hidden;

    li {
      position: relative;
      margin: 5px 0;
      padding-left: 20px;
      font-family: var(--font_mono);
      font-size: var(--fz_xs);

      &:before {
        left: 0;
        position: absolute;
        padding-top: 3px;
        content: '🟊'; /* ▹ 🠶 ☆ ⤏ */
        color: var(--yellow_200);
        font-size: var(--fz_sm);
        line-height: 12px;
      }
    }
  }

  a {
    color: var(--yellow_200);
    
    &:hover,
    &:focus,
    &:active {
      color: var(--yellow_200);
    }

    &:after {
      background-color: var(--yellow_200);
    }
  }
`

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border_radius);
    background-color: var(--pink_100);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border_radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border_radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--pink_100);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green_100);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`