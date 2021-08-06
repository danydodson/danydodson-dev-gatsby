import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            subtitle
            description
            username
            siteUrl
            pathPrefix
            image
            copyright
            disqusShortname
            postsPerPage
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
            manifest {
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
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
