/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import posts from '../../assets/svg/posts.svg';
import config from '../../../content/meta/config';
import { sr } from '../../utilities';
import { Icon } from '../icons';

const Posts = () => {
  const data = useStaticQuery(graphql`
    {
      posts: allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            html
            fields {
              slug
              categorySlug
              tagSlugs
            }
            frontmatter {
              title
              date(formatString: "MMM D YYYY")
              description
              category
              tags
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

  const posts = data.posts.edges.filter(({ node }) => node);

  const revealTitle = useRef(null);
  const revealLink = useRef(null);
  const revealPosts = useRef([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    sr.reveal(revealTitle.current, config.srConfig());
    sr.reveal(revealLink.current, config.srConfig());
    revealPosts.current.forEach((ref, i) => sr.reveal(ref, config.srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const firstSix = posts.slice(0, GRID_LIMIT);
  const postsToShow = showMore ? posts : firstSix;

  const postInner = node => {
    const { frontmatter } = node;
    const { slug, title, tags } = frontmatter;
    // const image = getImage(cover)

    return (
      <div className="post-inner">
        <header>
          <div className="post-top">
            <div className="folder">
              <Icon name="Bookmark" />
            </div>

            <div className="post-links">
              {slug && (
                <a href={slug} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                  <Icon name="GitHub" />
                </a>
              )}
            </div>
          </div>

          <h3 className="post-title">
            <a href={slug} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>

          {/* <div className='post-description' dangerouslySetInnerHTML={{ __html: html }} /> */}
        </header>

        <footer>
          {tags && (
            <ul className="post-tag-list">
              {tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <StyledPostsSection id="posts">
      <article>
        <h2 ref={revealTitle} className="numbered-heading">
          Posts
        </h2>

        <Link to="/posts" className="inline-link archive-link" ref={revealLink}>
          view archive
        </Link>

        <ul className="posts-grid">
          <TransitionGroup component={null}>
            {postsToShow &&
              postsToShow.map(({ node }, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}
                >
                  <StyledPost
                    key={i}
                    ref={el => (revealPosts.current[i] = el)}
                    style={{ transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms` }}
                  >
                    {postInner(node)}
                  </StyledPost>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </ul>

        <button onClick={() => setShowMore(!showMore)} className="more-button">
          Show {showMore ? 'Less' : 'More'}
        </button>
      </article>
    </StyledPostsSection>
  );
};

export default Posts;

const StyledPostsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fb3640;
  background-repeat: repeat-x;
  background-image: url(${posts});

  article {
    padding-bottom: 125px;

    h2 {
      font-size: clamp(24px, 5vw, var(--fz_lg));
    }

    .archive-link {
      font-family: var(--mono);
      font-size: var(--sm);
      &:after {
        bottom: 0.1em;
      }
    }

    .posts-grid {
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

const StyledPost = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .post-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .post-inner {
    height: 100%;
    position: relative;
    padding: 2rem 1.75rem;
    flex-direction: column;
    align-items: flex-start;
    ${({ theme }) => theme.mixins.flexBetween};
    ${({ theme }) => theme.mixins.boxShadow};
    transition: var(--transition);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
  }

  .post-top {
    margin-bottom: 35px;
    ${({ theme }) => theme.mixins.flexBetween};

    .folder {
      color: #a269cc;
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .post-links {
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
            stroke: var(--_blue-1);
          }
        }
      }
    }
  }

  .post-title {
    margin: 0 0 10px;
    color: var(--_pink-1);
    font-size: var(--xl);

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

  .post-description {
    color: var(--_black-2);
    font-size: var(--xs);

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .post-tag-list {
    padding: 0;
    margin: 20px 0 0 0;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: flex-end;
    list-style: none;

    li {
      line-height: 1.75;
      font-family: var(--mono);
      font-size: var(--xs);
      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;
