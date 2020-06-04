const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      articles: allContentfulArticle {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: node.slug,
        },
      })
    })

    result.data.articles.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve('./src/templates/article.js'),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
