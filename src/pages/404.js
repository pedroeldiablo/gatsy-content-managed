import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export const NotFound = () => (
  <Layout>
    <h1>Oh deer page not found</h1>
    <p>
      <Link to="/">Take me home.</Link>
    </p>
  </Layout>
)

export default NotFound
