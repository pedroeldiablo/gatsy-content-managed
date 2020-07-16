import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import theme from '../theme/theme'
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
    color: ${theme.colors.brand};
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
    position: relative;
    :after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 3px;
      bottom: -3px;
      transform: scaleX(0);
      transform-origin: left;
      transition-duration: 0.7s;
      transition-property: transform;
      transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
    }
    :before {
      content: '';
      position: absolute;
      left: 0;
      width: 3px;
      height: 100%;
      bottom: 0px;
      transform: scaleY(0);
      transform-origin: left;
      transition-duration: 0.7s;
      transition-property: transform;
      transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
    }
    :hover {
      :after {
        background-color: currentColor;
        transform: scaleX(1);
        transform-origin: 100% 0;
        transition-duration: 1s;
      }
      :before {
        background-color: currentColor;
        transform-origin: 0 0;
        transform: scaleY(1);
        transition-duration: 1s;
      }
    }
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
      {/* <h1>Manage Me - {data.site.siteMetadata.title}</h1> */}
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
