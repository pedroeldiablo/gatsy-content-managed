import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

const wobble = keyframes`
  from {
    transform: rotate(0);
  }

  25% {
    transform: rotate(-10deg);
  }
  /* 50% {
    transform: rotate(0deg);
  } */
  75% {
    transform: rotate(10deg);
  }
  to% {
    transform: rotate(0deg);
  }
`

const FooterComponent = styled.footer`
  width: 100%;
  display: flex;
  color: black;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Paragraph = styled.p`
  &:hover {
    background: pink;
    color: blue;
    /* animation: ${wobble} 2s linear infinite; */
    a {
      color: red;
      display: inline-block;
      animation: ${wobble} 2s linear infinite;
    }
  }
`

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <FooterComponent>
      <Paragraph>Created by {data.site.siteMetadata.author} © 2020</Paragraph>
      <Paragraph>
        <Link to="/contact">Contact Me.</Link>
      </Paragraph>
      <Paragraph>
        Some text outside the link
        <a
          href=" https://cmykool.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          See me online
        </a>
      </Paragraph>
      <Paragraph>
        <a
          href="https://github.com/pedroeldiablo"
          target="_blank"
          rel="noreferrer"
        >
          Find me on Github
        </a>
      </Paragraph>
    </FooterComponent>
  )
}

export default Footer
