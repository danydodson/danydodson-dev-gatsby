import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Jobs = () => {

  const data = useStaticQuery(
    graphql`
      query JobsQuery {
        jobs: allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "job" }, showInJobs: { ne: false } } }
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

  const jobs = data.jobs.edges.filter(({ node }) => node)

  const jobInner = node => {
    const { frontmatter, html } = node
    const { title, company, location, range, url } = frontmatter

    return (
      <div>

        <a href={url} target='_blank' rel='noreferrer'>
          {title}
        </a>

        <a href={url} target='_blank' rel='noreferrer'>
          {company}
        </a>

        <div>
          {location}
        </div>

        <a href={url} target='_blank' rel='noreferrer'>
          {range}
        </a>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  }

  return (
    <JobsSection>
      {jobs &&
        jobs.map(({ node }, i) => (
          <StyledJob key={i}>{jobInner(node)}</StyledJob>
        ))
      }
    </JobsSection>
  )
}

export default Jobs

const JobsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledJob = styled.li`
`