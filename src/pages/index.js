import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import HomeHero from '../components/home-hero'

const IndexPage = () => (
  <Layout>
    <Hero>
      <HomeHero />
    </Hero>
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
