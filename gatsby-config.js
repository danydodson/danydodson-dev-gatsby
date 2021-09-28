require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const config = require('./content/meta/config')

module.exports = {

  siteMetadata: config,

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/jobs`,
        name: `jobs`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 90,
              maxWidth: 1200,
              linkImagesToOriginal: true,
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow noopener noreferrer`
            }
          },
          {
            resolve: `gatsby-remark-code-titles`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: `superscript`,
                  extend: `javascript`,
                  definition: { superscript_types: /(SuperType)/ },
                  insertBefore: { function: { superscript_keywords: /(superif|superelse)/ } },
                }
              ],
              prompt: {
                user: `root`,
                host: `localhost`,
                global: false
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-offline`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dany Dodson`,
        start_url: `/`,
        display: `minimal-ui`,
        short_name: `danydodson`,
        theme_color: `#1b1f23`,
        background_color: `#fafffd`,
        icon: `src/assets/logos/logo@4x.png`,
      }
    },
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     query: `
    //       {
    //         site { 
    //           siteMetadata {
    //             siteUrl
    //             site_url: siteUrl
    //           } 
    //         }
    //         allSitePage(filter: {path: {regex: "/^(?!/404/|/404.html|/dev-404-page/)/"}}) {
    //           edges {
    //             node {
    //               path
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     output: '/sitemap.xml',
    //     serialize: ({ site, allSitePage }) => allSitePage.edges.map(edge => ({
    //       url: site.siteMetadata.siteUrl + edge.node.path,
    //       changefreq: 'daily',
    //       priority: 0.7
    //     }))
    //   }
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    html
                    fields { 
                      slug
                    }
                    frontmatter {
                      title
                      description
                      date(formatString: "MMM D YYYY")
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: `/rss.xml`,
            title: `Dany Dodson's Blog Feed`,
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries: require(`./gatsby/search/queries`),
        chunkSize: 10000
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-6589522-7`
      }
    }
  ]
}
