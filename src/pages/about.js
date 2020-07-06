import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Head } from '../components/head'
import { Title } from './index'

export const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"></Head>
      <Title>About</Title>
      <h2>An about summary goes here</h2>
    </Layout>
  )
}

export default AboutPage
