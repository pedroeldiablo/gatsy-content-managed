import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Layout } from '../components/layout'

export const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "dddd Do MMM YYYY")
            id
          }
        }
      }
    }
  `)

  // export const BlogPage = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       allMarkdownRemark {
  //         totalCount
  //         edges {
  //           node {
  //             id
  //             frontmatter {
  //               title
  //               description
  //               date
  //             }
  //             excerpt
  //             timeToRead
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)
  return (
    // <Layout>
    //   <h1>Blog</h1>
    //   <p>Posts will show up here later once set-up</p>
    //   {data.allMarkdownRemark.edges.map(({ node }) => (
    //     <div key={node.id}>
    //       <Link to={node.fields.slug}>
    //         <h2>
    //           {node.frontmatter.title} - {node.frontmatter.date}
    //         </h2>
    //       </Link>
    //       <p>{node.excerpt}</p>
    //       <Link to={node.fields.slug}>Go to blog</Link>
    //       <p>Time to read: {node.timeToRead}</p>
    //     </div>
    //   ))}
    // </Layout>
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here later once set-up</p>
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.slug}>
            <h2>
              {node.title} - {node.publishedDate}
            </h2>
          </Link>
          {/* <p>{node.excerpt}</p> */}
          <Link to={node.slug}>Go to blog</Link>
          {/* <p>Time to read: {node.timeToRead}</p> */}
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage
