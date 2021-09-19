require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const config = require('./data/config')

module.exports = {
  siteMetadata: config,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
        path: `${__dirname}/content/jobs`,
        name: `jobs`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
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
              // tracedSVG: { color: `#a2e5b1` }
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dany Dodson`,
        short_name: `danydodson`,
        start_url: `/`,
        icon: config.manifest.icon,
        background_color: config.manifest.background_color,
        theme_color: config.manifest.theme_color,
        display: `minimal-ui`
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
