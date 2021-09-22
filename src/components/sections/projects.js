/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import projects from '../../images/svg/projects.svg'
import { useReducedMotion } from '../../hooks'
import { srConfig } from '../../../data/config'
import { sr } from '../../utils'
import { Icon } from '../icons'

const Projects = () => {

  const data = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "project" }, featured: { eq: false }, draft: { ne: true } } }
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

  const projects = data.projects.edges.filter(({ node }) => node)

  const revealTitle = useRef(null)
  const revealArchiveLink = useRef(null)
  const revealProjects = useRef([])
  const [showMore, setShowMore] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    sr.reveal(revealTitle.current, srConfig())
    sr.reveal(revealArchiveLink.current, srConfig())
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)))
  }, [])

  const GRID_LIMIT = 6
  const firstSix = projects.slice(0, GRID_LIMIT)
  const projectsToShow = showMore ? projects : firstSix

  const projectInner = node => {
    const { frontmatter, html } = node
    const { github, external, title, tech } = frontmatter

    return (
      <div className='project-inner'>

        <header>
          <div className='project-top'>

            <div className='folder'>
              <Icon name='Folder' />
            </div>

            <div className='project-links'>

              {github && (
                <a href={github} aria-label='GitHub Link' target='_blank' rel='noreferrer'>
                  <Icon name='GitHub' />
                </a>
              )}

              {external && (
                <a href={external} aria-label='External Link' className='external' target='_blank' rel='noreferrer'>
                  <Icon name='External' />
                </a>
              )}

            </div>
          </div>

          <h3 className='project-title'>
            <a href={external} target='_blank' rel='noreferrer'>
              {title}
            </a>
          </h3>

          <div className='project-description' dangerouslySetInnerHTML={{ __html: html }} />

        </header>

        <footer>
          {tech && (
            <ul className='project-tech-list'>
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    )
  }

  return (
    <StyledProjectsSection>
      <article>

        <h2 ref={revealTitle}>Other Noteworthy Projects</h2>

        <Link className='inline-link archive-link' to='/projects' ref={revealArchiveLink}>
          view the archive
        </Link>

        <ul className='projects-grid'>
          {prefersReducedMotion ? (
            projectsToShow && projectsToShow.map(({ node }, i) => (
              <StyledProject key={i}>
                {projectInner(node)}
              </StyledProject>
            ))
          ) : (
            <TransitionGroup component={null}>
              {projectsToShow && projectsToShow.map(({ node }, i) => (
                <CSSTransition key={i} classNames='fadeup' timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300} exit={false}>
                  <StyledProject key={i} ref={el => (revealProjects.current[i] = el)} style={{ transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`, }}>
                    {projectInner(node)}
                  </StyledProject>
                </CSSTransition>
              ))}
            </TransitionGroup>
          )}
        </ul>

        <button className='more-button' onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
        </button>

      </article>
    </StyledProjectsSection>
  )
}

export default Projects

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background-color: #4de059;
  background-repeat: repeat-x;
  background-image: url(${projects});
  
  article {
    padding-bottom: 125px;

    h2 {
      font-size: clamp(24px, 5vw, var(--fz_lg));
    }

    .archive-link {
      font-family: var(--ff_mono);
      font-size: var(--fz_sm);

      &:after {
        bottom: 0.1em;
      }
    }

    .projects-grid {
      position: relative;    
      margin-top: 50px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 15px;
      ${({ theme }) => theme.mixins.resetList};

      @media (max-width: 1080px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      }
    }

    .more-button {
      margin: 80px auto 0;
      ${({ theme }) => theme.mixins.button};
    }
  }
`

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    height: 100%;
    position: relative;
    padding: 2rem 1.75rem;
    flex-direction: column;
    align-items: flex-start;
    ${({ theme }) => theme.mixins.flexBetween};
    /* background-color: var(--blue_200); */
    /* border-radius: var(--border_radius); */
    ${({ theme }) => theme.mixins.boxShadow};
    transition: var(--transition);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
  }

  .project-top {
    margin-bottom: 35px;
    ${({ theme }) => theme.mixins.flexBetween};

    .folder {
      width: 40px;
      height: 40px;
      color: #a269cc;
      /* svg {} */
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--black_200);

      a {
        padding: 5px 7px;
        ${({ theme }) => theme.mixins.flexCenter};

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
          stroke: var(--grey_300);
          &:hover {
            stroke: var(--blue_200);
          }
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--pink_300);
    font-size: var(--fz_xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    font-size: 17px;
    color: var(--black_200);

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--ff_mono);
      font-size: var(--fz_xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`
