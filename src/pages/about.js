import React from 'react'
import { Link } from 'gatsby'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const AboutPage = () => {
  return (
    <>
      <Header></Header>
      <h1>About</h1>
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
      <Footer></Footer>
    </>
  )
}

export default AboutPage
