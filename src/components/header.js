import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import headerStyles from './header.module.scss'

const HeaderContainer = styled.header`
  grid-column: 1 /6;
  grid-row: 1;
  border-bottom: 25px solid red;
  align-self: start;
  justify-content: start;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-columns: auto minmax(20px, auto) 1fr 1fr 1fr 0.5fr; */
  grid-template-rows: auto 1fr 1fr auto auto;
  grid-gap: 1rem;

  h1 {
    display: grid;
    align-self: start;
    width: 100%;
    grid-column: 3 / 5;
    grid-row: 1 / 5;
  }
`

const NavContainer = styled.nav`
  display: grid;
  grid-column: 2 / 3;
  grid-row: 2 / 5;
  li {
    display: flex;
    a:hover {
      background-color: red;
      color: white;
      display: flex;
      flex-direction: column-reverse;
    }
  }
`

export const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <HeaderContainer>
      <h1>Manage Me - {data.site.siteMetadata.title}</h1>
      <NavContainer>
        <ul className={headerStyles.navbar}>
          <li>
            <Link
              to="/"
              className={headerStyles.link}
              activeClassName={headerStyles.linkActive}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerStyles.link}
              activeClassName={headerStyles.linkActive}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={headerStyles.link}
              activeClassName={headerStyles.linkActive}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/article"
              className={headerStyles.link}
              activeClassName={headerStyles.linkActive}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyles.link}
              activeClassName={headerStyles.linkActive}
            >
              Contact
            </Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
