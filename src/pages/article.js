import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Layout } from '../components/Layout/Layout'
import { Head } from '../components/head'

export const ArticlePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulArticle {
        nodes {
          title
          id
          slug
          author {
            name
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Articles" />
      <h1>Articles</h1>
      {data.allContentfulArticle.nodes.map(node => (
        <div key={node.id}>
          <Link to={node.slug}>
            <h2>What is the slug? {node.slug}</h2>
            <h2>
              {node.title} {node.author ? `- ${node.author.name}` : ''}
            </h2>
          </Link>
          <Link to={node.slug}>Go to article</Link>
        </div>
      ))}
    </Layout>
  )
}

export default ArticlePage
