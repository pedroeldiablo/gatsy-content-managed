/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import styled from 'styled-components'
import { Header } from './header'
import { Footer } from './footer'
import '../styles/index.scss'

const LayoutContainer = styled.div`
  @media screen and (min-width: 780px) {
    width: 66vw;
    display: grid;
    margin: auto;
    grid-template-columns: auto 1fr 1fr 1fr 0.5fr;
    grid-template-rows: auto 1fr 1fr auto auto;
    grid-gap: 1rem;
    /* transform: rotate(-45deg); */
  }
`

export const Layout = props => {
  return (
    <LayoutContainer>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </LayoutContainer>
  )
}

export default Layout
