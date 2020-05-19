/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
export default props => {
  console.log({ props })
  return (
    <Layout>
      <div>
        <p>Template for post</p>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <h2>{props.data.markdownRemark.frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
      </div>
    </Layout>
  )
}
