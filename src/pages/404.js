import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Head } from '../components/head'

export const NotFound = () => (
  <Layout>
    <Head title="404" />
    <h1>Oh deer page not found</h1>
    <p>
      <Link to="/">Take me home.</Link>
    </p>
  </Layout>
)

export default NotFound
