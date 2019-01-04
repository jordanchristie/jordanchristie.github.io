import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hi from the second page</h1>
    <p className="about-caption"> Hi, I'm Jordan! I'm a front-end turning full-stack web developer with a serious case of Curious Cat syndrome. I've definitely been bitten by the dev bug; there's an endless chasm of artistic infinity that peaks my interest to jump into it. </p>
    <Link to="/projects/">Projects</Link>
  </Layout>
)

export default About
