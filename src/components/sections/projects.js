import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
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
    const { github, external, title, tech } = frontmatter

    return (
      <div className='project-inner'>
        <header>
          <div className='project-top'>
            <div className='folder'>
              <IconFolder />
            </div>
            <div className='project-links'>
              {github && (
                <a href={github} aria-label='GitHub Link' target='_blank' rel='noreferrer'>
                  <IconGitHub />
                </a>
              )}
              {external && (
                <a href={external} aria-label='External Link' className='external' target='_blank' rel='noreferrer'>
                  <IconExternal />
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
    <ProjectsSection>
      {projects &&
        projects.map(({ node }, i) => (
          <StyledProject key={i}>{projectInner(node)}</StyledProject>
        ))
      }
    </ProjectsSection>
  )
}

export default Projects

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledProject = styled.li`
`