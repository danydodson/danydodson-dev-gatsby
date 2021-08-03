import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            site {
              title
              subtitle
              description
              siteUrl
              pathPrefix
              image
              copyright
              disqusShortname
              postsPerPage
            }
            author {
              name
              email
              bio
              location
              image
            }
            header {
              title
            }
            host {
              name
              url
            }
            metadata {
              icon
              theme_color
              background_color
              display
            }
            socialLinks {
              name
              url
            },
            navLinks {
              name
              url
            },
            colors {
              grey
              blue
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
