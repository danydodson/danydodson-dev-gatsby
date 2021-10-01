require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('./src/config');

module.exports = {
  siteMetadata: config,

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/jobs`,
        name: `jobs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
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
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow noopener noreferrer`,
            },
          },
          { resolve: `gatsby-remark-code-titles` },
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
                },
              ],
              prompt: {
                user: `root`,
                host: `localhost`,
                global: false,
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
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
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `{
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }`,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                }),
              ),
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
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-6589522-7`,
      },
    },
  ],
};
