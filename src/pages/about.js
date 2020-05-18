import React from 'react'
import {Link} from 'gatsby'

export const AboutPage = () => {
    return (
        <>
            <h1>About</h1>
            <h2>An about summary goes here</h2>
            <p><Link to='/contact'>Find me.</Link></p>
            <p><a href="https://github.com/pedroeldiablo" target="_blank">Find me on Github</a></p>
        </>
    )
}

export default AboutPage;
