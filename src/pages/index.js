import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import { Head } from '../components/head'

export const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>Welcome to a Gatsby Site</h2>
      <p>
        <Link to="/contact">Find out more.</Link>
      </p>
      <p>
        <a href="https://github.com/pedroeldiablo">Find me on Github</a>
      </p>
    </Layout>
  )
}

export default IndexPage
