/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import PropTypes from 'prop-types'
import { Header } from './header'
import { Footer } from './footer'

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
