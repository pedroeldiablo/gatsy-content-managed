/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import '../styles/index.scss'

export const Layout = props => {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  )
}

export default Layout
