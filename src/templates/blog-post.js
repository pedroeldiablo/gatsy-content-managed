/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "dddd Do MMMM, YYYY")
      body {
        json
      }
    }
  }
`

export default props => {
  const { title, publishedDate } = props.data.contentfulBlogPost
  const { json } = props.data.contentfulBlogPost.body
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.description['en-US']
        const { url } = node.data.target.fields.file['en-US']
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h2>{publishedDate}</h2>
        {documentToReactComponents(json, options)}
      </div>
    </Layout>
  )
}
