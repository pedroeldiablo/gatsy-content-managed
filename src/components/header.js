import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

export const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetaData {
          title
        }
      }
    }
  `)
  return (
    <header>
      <h1>Manage Me - {data.site.siteMetaData.title}</h1>
      <nav>
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
              to="/contact"
              className={headerStyles.link}
              activeClassName={headerStyles.linkActive}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
