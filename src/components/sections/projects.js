import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BgYellow from '../../assets/svgs/bg-yellow.svg'
import BorderBlue from '../../assets/svgs/border-blue.svg'
import { IconGitHub, IconFolder, IconExternal } from '../icons'

const Projects = () => {

  const data = useStaticQuery(
    graphql`
      query ProjectsQuery {
        projects: allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "project" }, showInProjects: { ne: false } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                tech
                github
                external
                tags
              }
            }
          }
        }
      }
    `
  )

  const projects = data.projects.edges.filter(({ node }) => node)

  const projectInner = node => {
    const { frontmatter, html } = node
    const { github, external, title, tech, } = frontmatter

    return (
      <>
        <header>
          <div>
            <div>
              <IconFolder />
            </div>
            <div>
              {github && (
                <a href={github} aria-label='GitHub Link' target='_blank' rel='noreferrer'>
                  <IconGitHub />
                </a>
              )}
              {external && (
                <a href={external} aria-label='External Link' target='_blank' rel='noreferrer'>
                  <IconExternal />
                </a>
              )}
            </div>
          </div>

          <h3>
            <a href={external} target='_blank' rel='noreferrer'>
              {title}
            </a>
          </h3>

          <div dangerouslySetInnerHTML={{ __html: html }} />
        </header>

        <footer>
          {tech && (
            <ul >
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </>
    )
  }

  return (
    <ProjectsSection id="projects">
      <div>

        {projects &&
          projects.map(({ node }, i) => (
            <StyledProject key={i}>{projectInner(node)}</StyledProject>
          ))
        }
      </ div>
      <StyledBorder />
    </ProjectsSection>
  )
}

export default Projects

const ProjectsSection = styled.section`
  background: url(${BgYellow});
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledBorder = styled.div`
  background-image: url(${BorderBlue});
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: contain;
  width: 100%;
  height: 5vh;
  position: absolute;
  bottom: -5px;
`

const StyledProject = styled.article`
`