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
  grid-column: 1 /6;
  grid-row-end: -1;
  border-bottom: 25px solid red;
  align-self: start;
  justify-content: start;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-columns: auto minmax(20px, auto) 1fr 1fr 1fr 0.5fr; */
  grid-template-rows: auto 1fr 1fr auto auto;
  grid-gap: 1rem;
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
    background: pink;
    color: blue;
    /* animation: ${wobble} 2s linear infinite; */
    a {
      text-decoration: none;
      /* color: red; */
      display: inline-block;
      &:hover {
      /* animation: ${wobble} 2s linear infinite; */
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
      box-shadow: 15px -15px 0px -10px rgba(255, 000, 000, 1),
    -5px -5px 0px 0 rgba(00, 000, 00, 1),
    -5px 5px 0px 0 rgba(00, 000, 00, 1),
    5px 5px 1px 0 rgba(255, 000, 000, 1);
    }
  }
`

const ATagComponent = styled.a`
  padding: 1rem;
  /* color: red; */
  display: inline-block;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  box-shadow: 20px -10px 1px -5px rgba(255, 000, 000, 0.2),
    -5px -5px 1px 0 rgba(00, 000, 00, 0.5),
    5px 5px 1px 0 rgba(255, 255, 000, 0.5),
    5px 5px 1px 0 rgba(000, 255, 000, 0.5);

  /* box-shadow: 8px 8px 10px 0 #ff1492, -5px -5px 5px 0 #00f, 5px 5px 15px 0 #ff0; */
  /* border-radius: 16px; */
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
        <ATagComponent
          href=" https://cmykool.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          See me online
        </ATagComponent>
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
