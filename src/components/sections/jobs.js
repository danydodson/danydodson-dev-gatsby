/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import jobs from '../../images/svg/jobs.svg'
import { srConfig } from '../../../data/config'
import { useReducedMotion } from '../../hooks'
import { KEY_CODES } from '../../constants'
import { scrollr } from '../../utils'

const Jobs = () => {

  const data = useStaticQuery(graphql`
    {
      jobs: allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "job" }, draft: { ne: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
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
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    scrollr.reveal(revealContainer.current, srConfig())
  }, [])

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
      case KEY_CODES.ARROW_UP: {
        e.preventDefault()
        setTabFocus(tabFocus - 1)
        break
      }

      case KEY_CODES.ARROW_DOWN: {
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
    <StyledJobsSection id='jobs' >
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
                    aria-controls={`panel-${i}`}>
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
                      hidden={activeTabId !== i}>
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
  background-color: #fb79df;
  background-repeat: repeat-x;
  background-image: url(${jobs});

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    /* Prevent container from jumping */
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
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab_height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--blue_200);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--yellow_200)' : 'var(--green_200)')};
  font-family: var(--ff_mono);
  font-size: var(--fz_xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(-- blue_200);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--blue_400);
  }
`

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab_height);
  border-radius: var(--border_radius);
  background: var(--green_300);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab_height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab_width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab_width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

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
    font-size: var(--fz_xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green_300);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--red_300);
    font-family: var(--ff_mono);
    font-size: var(--fz_xs);
  }
`