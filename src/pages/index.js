import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Layout } from '../components/Layout/Layout'
import { Head } from '../components/head'

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Title>Hello.</Title>
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
