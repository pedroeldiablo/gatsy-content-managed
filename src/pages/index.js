import React from 'react'
import { Link } from 'gatsby'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <h1>Hello.</h1>
      <h2>Welcome to a Gatsby Site</h2>
      <p>
        <Link to="/contact">Find out more.</Link>
      </p>
      <p>
        <a href="https://github.com/pedroeldiablo">Find me on Github</a>
      </p>
      <Footer></Footer>
    </>
  )
}

export default IndexPage
