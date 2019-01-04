import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section id="contact">
      <h1> Hit me up!</h1>
      <h3> I'm always available for new projects. If you have an idea that you want to manifest, let's talk! </h3>
        <a href="mailto:jordanchristie116@gmail.com" class="contact-button">Start a conversation</a>
    </section>
  </Layout>
)

export default Contact