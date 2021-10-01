/* eslint-disable */
import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import projects from '../../assets/svg/projects.svg';
import { srConfig } from '../../config';
import { sr } from '../../utilities';
import { Icon } from '../icons';

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        filter: {
          frontmatter: { template: { eq: "project" }, featured: { eq: false }, draft: { ne: true } }
        }
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
  `);

  const projects = data.projects.edges.filter(({ node }) => node);

  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const projectInner = node => {
    const { frontmatter, html } = node;
    const { github, external, title, tech } = frontmatter;

    return (
      <div className="project-inner">
        <header>
          <div className="project-top">
            <div className="folder">
              <Icon name="Folder" />
            </div>

            <div className="project-links">
              {github && (
                <a href={github} aria-label="GitHub Link">
                  <Icon name="GitHub" />
                </a>
              )}

              {external && (
                <a href={external} aria-label="External Link" className="external">
                  <Icon name="External" />
                </a>
              )}
            </div>
          </div>

          <h3 className="project-title">
            <a href={external}>{title}</a>
          </h3>

          <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
        </header>

        <footer>
          {tech && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <StyledProjectsSection id="projects">
      <article>
        <h2 ref={revealTitle}>Other Noteworthy Projects</h2>

        <Link className="inline-link archive-link" to="/projects" ref={revealArchiveLink}>
          view the archive
        </Link>

        <ul className="projects-grid">
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}
                >
                  <StyledProject
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    style={{ transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms` }}
                  >
                    {projectInner(node)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </ul>

        <button className="more-button" onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
        </button>
      </article>
    </StyledProjectsSection>
  );
};

export default Projects;

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4de059;
  background-repeat: repeat-x;
  background-image: url(${projects});

  article {
    padding-bottom: 125px;

    h2 {
      font-size: clamp(24px, 5vw, var(--lg));
    }

    .archive-link {
      font-family: var(--mono);
      font-size: var(--sm);

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
`;

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
    ${({ theme }) => theme.mixins.boxShadow};
    transition: var(--transition);
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border: 1px solid rgba(209, 213, 219, 0.3);
    border-radius: 12px;
  }

  .project-top {
    margin-bottom: 35px;
    ${({ theme }) => theme.mixins.flexBetween};

    .folder {
      width: 40px;
      height: 40px;
      color: var(--_red-1);
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--_black-2);

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
          stroke: var(--_grey-2);
          &:hover {
            stroke: var(--_green-1);
          }
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--_pink-1);
    font-size: var(--lg);

    a {
      position: static;

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

  .project-description {
    font-size: 17px;
    color: var(--_black-2);
    a {
      ${({ theme }) => {
        theme.mixins.inlineLink;
      }};
    }
  }

  .project-tech-list {
    padding: 0;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: flex-end;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      line-height: 1.75;
      font-size: var(--xs);
      font-family: var(--mono);

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;
