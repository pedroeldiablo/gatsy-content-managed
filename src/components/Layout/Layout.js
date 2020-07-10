/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../theme/theme'
import { Box } from '../box'
import { Header } from '../header'
import { Footer } from '../footer'
import '../../styles/index.scss'
import { GlobalStyle } from './Layout.styles'

console.log({ GlobalStyle })

const LayoutContainer = styled.div`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.body};
  background-color: ${theme.colors.white};
  @media screen and (min-width: 780px) {
    width: 66vw;
    display: grid;
    margin: auto;
    grid-template-columns: auto 1fr 1fr 1fr 0.5fr;
    grid-template-rows: auto 1fr 1fr auto auto;
    grid-gap: 1rem;
  }
`

export const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutContainer>
        <Header></Header>
        <Box width={[1, 1, 1 / 2]} p={4} mb={3} bg="tomato">
          This is a tomato box, with responsive width, some padding, and margin
          bottom
        </Box>
        {props.children}
        <Footer></Footer>
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default Layout
