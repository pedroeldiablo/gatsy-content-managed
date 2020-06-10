import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Head } from '../components/head'
import { Title } from './index'

export const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"></Head>
      <Title>About</Title>
      <h2>An about summary goes here</h2>
      <p>
        <Link to="/contact">Find me.</Link>
      </p>
      <p>
        <a
          href="https://github.com/pedroeldiablo"
          target="_blank"
          rel="noreferrer"
        >
          Find me on Github
        </a>
      </p>
    </Layout>
  )
}

export default AboutPage
