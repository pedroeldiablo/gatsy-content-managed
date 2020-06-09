import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Head } from '../components/head'

export const NotFound = () => (
  <Layout>
    <Head title="404" />
    <h1>404 - nothing here my dear</h1>
    <p>Why not head home?</p>
    <p>
      <Link to="/">Take me home.</Link>
    </p>
  </Layout>
)

export default NotFound
