require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const config = require('./data/config')

module.exports = {
  flags: {
    DEV_WEBPACK_CACHE: true,
    FAST_DEV: false,
    DEV_SSR: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false,
    LMDB_STORE: false
  },
  siteMetadata: config,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/projects`,
        name: 'projects',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/jobs`,
        name: 'jobs',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/fonts`,
        name: 'fonts',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: `static`,
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              quality: 90,
              maxWidth: 700,
              linkImagesToOriginal: true,
              tracedSVG: { color: config.colors.green },
            },
          },
          {
            resolve: 'gatsby-remark-code-titles',
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting; defaults to 'language-' (e.g. <pre class="language-js">). If your site loads Prism into the browser at runtime, (e.g. for use with libraries like react-live), you may use this to prevent Prism from re-processing syntax. This is an uncommon use-case though; If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code (i.e. single backticks) by creating a separator. This separator is a string and will do no white-space stripping. A suggested value for English speakers is the non-ascii character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example, setting this to '{ sh: "bash" }' will let you use the language "sh" which will highlight using the bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code. To use it, add the following line in gatsby-browser.js right after importing the prism color scheme:  require("prismjs/plugins/line-numbers/prism-line-numbers.css") Defaults to false. If you wish to only show line numbers on certain code blocks, leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already existing language definition. More details on this option can be found under the header "Add new language definition or extend an existing language" below.
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries: require(`./gatsby/search/queries`),
        chunkSize: 10000,
      }
    },
    `gatsby-plugin-robots-txt`,
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'DanyDodson',
        short_name: 'DanyDodson',
        start_url: '/',
        icon: config.manifest.icon,
        background_color: config.manifest.background_color,
        theme_color: config.manifest.theme_color,
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `UA-6589522-7`,
      },
    },
  ],
}
