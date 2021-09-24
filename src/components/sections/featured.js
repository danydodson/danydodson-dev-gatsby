/* eslint-disable */
import React, { useEffect, useRef } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Icon } from '../icons'
import featured from '../../images/svg/featured.svg'
import config from '../../../data/config'
import { sr } from '../../utils'


const Featured = () => {

  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "project" }, featured: { eq: true }, draft: { ne: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            html
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMM D YYYY")
              github
              external
              tech
              cover {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  const featured = data.featured.edges.filter(({ node }) => node)

  const revealTitle = useRef(null)
  const revealProjects = useRef([])

  useEffect(() => {
    sr.reveal(revealTitle.current, config.srConfig())
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, config.srConfig(i * 100)))
  }, [])

  return (
    <StyledFeaturedSection id='featured'>
      <article>

        <h2 className='numbered-heading' ref={revealTitle}>
          Some Things I’ve Built
        </h2>

        <StyledProjectsGrid>

          {featured && featured.map(({ node }, i) => {
            const { frontmatter, html } = node
            const { external, title, tech, github, cover } = frontmatter
            const image = getImage(cover)

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <div className='project-content'>
                  <div>
                    <p className='project-overline'>Featured Project</p>

                    <h3 className='project-title'>
                      <a rel='preload' href={external}>{title}</a>
                    </h3>

                    <div
                      className='project-description'
                      dangerouslySetInnerHTML={{ __html: html }}
                    />

                    {tech.length && (
                      <ul className='project-tech-list'>
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className='project-links'>
                      {github && (
                        <a rel='preload' href={github} aria-label='GitHub Link'>
                          <Icon name='GitHub' />
                        </a>
                      )}
                      {external && (
                        <a rel='preload' href={external} aria-label='External Link' className='external'>
                          <Icon name='External' />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className='project-image'>
                  <a rel='preload' href={external ? external : github ? github : '#'}>
                    <GatsbyImage image={image} alt={title} className='img' />
                  </a>
                </div>
              </StyledProject>
            )
          })}

        </StyledProjectsGrid>

      </article>
    </StyledFeaturedSection>
  )
}

export default Featured

const StyledFeaturedSection = styled.section`
  background-color: #ffeb3b;
  background-repeat: repeat-x;
  background-image: url(${featured});

  article {
  }
`

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    @media (max-width: 768px) {}
    @media (max-width: 480px) {}
  }

  &:nth-of-type(odd) {

    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }

      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }

      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }

    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;
        @media (max-width: 768px) {margin: 0 10px 5px 0;}
      }
    }

    .project-links {
      margin-left: 0;
      margin-right: -10px;
      justify-content: flex-end;
      color: var(--black-100);

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }

    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--white-100);
    font-family: var(--ff-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: inherit;
    font-size: clamp(24px, 5vw, 28px);
    
    @media (min-width: 768px) {margin: 0 0 20px;}

    @media (max-width: 768px) {
      color: var(--grey-100);
      
      a {
        position: static;
        
        &:hover {color: var(--teal-100);}

        &:before {
          top: 0;
          left: 0;
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          position: absolute;
          z-index: 0;
        }
      }
    }
  }

  .project-description {
    z-index: 2;
    padding: 25px;
    position: relative;
    color: var(--grey-100);
    font-size: var(--fz-lg);
    backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    transition: var(--transition);
    ${({ theme }) => theme.mixins.boxShadow};
    border: 1px solid rgba(209, 213, 219, 0.3);
    border-radius: var(--border-radius);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      &:hover {box-shadow: none;}
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    margin: 25px 0 10px;
    padding: 0;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    z-index: 2;

    li {
      margin: 0 20px 5px 0;
      color: var(--white-100);
      font-family: var(--ff-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--white-100);
      }
    }
  }

  .project-links {
    margin-top: 10px;
    margin-left: -10px;
    position: relative;
    display: flex;
    align-items: center;
    color: var(--pink-100);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    position: relative;
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    ${({ theme }) => theme.mixins.boxShadow};
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--green-100);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        z-index: 3;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        background-color: #df76cac7;
        mix-blend-mode: screen;
        transition: var(--transition);
      }
    }

    .img {
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);
      border-radius: var(--border-radius);

      @media (max-width: 768px) {
        width: auto;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%) contrast(1) brightness(80%);
      }
    }
  }
`
