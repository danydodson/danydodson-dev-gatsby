/* eslint-disable */
import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import jobs from '../../assets/svg/jobs.svg'
import config from '../../config'
import { keys, sr } from '../../utilities'

const Jobs = () => {
  const data = useStaticQuery(graphql`
    {
      jobs: allMarkdownRemark(filter: { frontmatter: { template: { eq: "job" }, draft: { ne: true } } }, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            html
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMM D YYYY")
              company
              location
              range
              url
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

  const jobs = data.jobs.edges.filter(({ node }) => node)

  const [activeTabId, setActiveTabId] = useState(0)
  const [tabFocus, setTabFocus] = useState(null)
  const tabs = useRef([])
  const revealContainer = useRef(null)

  useEffect(() => {
    sr.reveal(revealContainer.current, config.srConfig())
  })

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus()
      return
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0)
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1)
    }
  }

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus])

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = e => {
    switch (e.key) {
      case keys.ARROW_UP: {
        e.preventDefault()
        setTabFocus(tabFocus - 1)
        break
      }

      case keys.ARROW_DOWN: {
        e.preventDefault()
        setTabFocus(tabFocus + 1)
        break
      }

      default: {
        break
      }
    }
  }

  return (
    <StyledJobsSection id='jobs'>
      <article ref={revealContainer}>
        <h2 className='numbered-heading'>Where I’ve Worked</h2>

        <div className='inner'>
          <StyledTabList role='tablist' aria-label='Job tabs' onKeyDown={e => onKeyDown(e)}>
            {jobs &&
              jobs.map(({ node }, i) => {
                const { company } = node.frontmatter
                return (
                  <StyledTabButton
                    key={i}
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    ref={el => (tabs.current[i] = el)}
                    id={`tab-${i}`}
                    role='tab'
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-selected={activeTabId === i ? true : false}
                    aria-controls={`panel-${i}`}
                  >
                    <span>{company}</span>
                  </StyledTabButton>
                )
              })}
            <StyledHighlight activeTabId={activeTabId} />
          </StyledTabList>

          <StyledTabPanels>
            {jobs &&
              jobs.map(({ node }, i) => {
                const { frontmatter, html } = node
                const { title, url, company, range } = frontmatter

                return (
                  <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames='fade'>
                    <StyledTabPanel
                      id={`panel-${i}`}
                      role='tabpanel'
                      tabIndex={activeTabId === i ? '0' : '-1'}
                      aria-labelledby={`tab-${i}`}
                      aria-hidden={activeTabId !== i}
                      hidden={activeTabId !== i}
                    >
                      <h3>
                        <span>{title}</span>
                        <span className='company'>
                          &nbsp;@&nbsp;
                          <a href={url} className='inline-link'>
                            {company}
                          </a>
                        </span>
                      </h3>

                      <p className='range'>{range}</p>

                      <div dangerouslySetInnerHTML={{ __html: html }} />
                    </StyledTabPanel>
                  </CSSTransition>
                )
              })}
          </StyledTabPanels>
        </div>
      </article>
    </StyledJobsSection>
  )
}

export default Jobs

const StyledJobsSection = styled.section`
  background-color: var(--col-jobs);
  background-repeat: repeat-x;
  background-image: url(${jobs});

  .inner {
    display: flex;
    @media (max-width: 600px) {
      display: block;
    }
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`

const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  display: flex;
  align-items: center;
  text-align: left;
  white-space: nowrap;
  color: ${({ isActive }) => (isActive ? 'var(--_yellow-1)' : 'var(--_green-1)')};
  font-size: var(--xs);
  font-family: var(--mono);
  background-color: transparent;
  border-left: 2px solid var(--_blue-1);

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }

  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--_blue-1);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--_blue-1);
  }
`

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--_green-1);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }

  @media (max-width: 480px) {
    margin-left: 25px;
  }
`

const StyledTabPanels = styled.div`
  width: 100%;
  margin-left: 20px;
  position: relative;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    line-height: 1.3;
    font-size: var(--lg);
    font-weight: 500;

    .company {
      color: var(--_green-1);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--_red-1);
    font-family: var(--mono);
    font-size: var(--xs);
  }
`
