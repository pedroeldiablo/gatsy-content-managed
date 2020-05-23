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
  const { title, date } = props.data.markdownRemark.frontmatter
  const { html } = props.data.markdownRemark
  return (
    <Layout>
      <div>
        <p>Template for post</p>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}
