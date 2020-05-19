import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

export const Header = () => {
  return (
    <header>
      <h1>Manage Me</h1>
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
