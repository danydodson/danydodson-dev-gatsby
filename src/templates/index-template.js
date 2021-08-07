// import React from 'react'
// import { graphql } from 'gatsby'
// // import { useSiteMetadata } from '../hooks'
// import { Layout } from '../components'

// const IndexTemplate = () => {
//   // const IndexTemplate = ({ data, pageContext }) => {

//   // const { title: siteTitle, subtitle: siteSubtitle, keywords } = useSiteMetadata()

//   // const { edges } = data.allMarkdownRemark

//   return (
//     <Layout>

//       {/* {edges
//         .filter(edge => edge?.node?.frontmatter?.priority)
//         .sort(
//           (edge1, edge2) =>
//             edge2?.node?.frontmatter?.priority - edge1?.node?.frontmatter?.priority
//         )}
//       {edges.filter(edge => !edge?.node?.frontmatter?.priority)} */}
//     </Layout>
//   )
// }

// export const query = graphql`
//   query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
//     allMarkdownRemark(
//       limit: $postsLimit
//       skip: $postsOffset
//       filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
//       sort: { order: DESC, fields: [frontmatter___date] }
//     ) {
//       edges {
//         node {
//           html
//           fields {
//             slug
//             categorySlug
//             tagSlugs
//           }
//           frontmatter {
//             title
//             date
//             description
//             category
//             tags
//           }
//         }
//       }
//     }
//   }
// `

// export default IndexTemplate
