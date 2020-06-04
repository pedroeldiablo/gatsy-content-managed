/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
import { Head } from '../components/head'

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
