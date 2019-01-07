import React from 'react'
import Layout, {PageTitle} from '../components/layout'
import SEO from '../components/seo'

// To-do: Add tooling/language SVGs
const Tools = [
  {
    name: 'HTML5',
    url: ''
  },
  {
    name: 'CSS3',
    url: ''
  },
  {
    name: 'Javascript',
    url: ''
  },
  {
    name: 'React',
    url: ''
  },
  {
    name: 'Redux',
    url: ''
  },
  {
    name: 'Gatsby',
    url: ''
  }
]
// Second Paragraph?
const About = () => (
  <Layout>
    <SEO title="About" />
    <PageTitle>About</PageTitle>
    <p className="about-caption"> Hi, I'm Jordan! I'm a front-end turning full-stack web developer with a serious case of Curious Cat syndrome. I've definitely been bitten by the dev bug; there's an endless chasm of artistic infinity that peaks my interest to jump into it. </p>
  </Layout>
)

export default About
