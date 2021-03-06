/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/Layout/Layout'
import { Head } from '../components/head'
import { options } from './renderMethods'

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      author {
        name
        url
      }
      childContentfulArticleProseRichTextNode {
        json
      }
    }
  }
`

export default props => {
  const { title, author } = props.data.contentfulArticle
  const {
    json,
  } = props.data.contentfulArticle.childContentfulArticleProseRichTextNode
  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      {author ? (
        <>
          <h2>{author.name}</h2>
          <h2>{author.url}</h2>
        </>
      ) : (
        ''
      )}
      {documentToReactComponents(json, options)}
    </Layout>
  )
}
