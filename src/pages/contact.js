import React from 'react'
import styled from 'styled-components'
import Layout, { PageTitle } from '../components/layout'
import SEO from '../components/seo'



const Contact = () => (
  <Layout>
    <SEO title="Contact" />
      <PageTitle> Contact </PageTitle>
      <h3> I'm always open to discussing new projects or opportunities. If you have an idea that you want to manifest, let's talk! </h3>
      <ContactButton href="mailto:jordanchristie116@gmail.com">
        Start a conversation
      </ContactButton>
  </Layout>
)

export default Contact

const ContactButton = styled.a`
  text-decoration: none;
  position: relative;
  margin: 3em auto;
  padding: .5em;
  height: 60px;
  width: 20em;
  background: none;
  border: 2px solid #5691c8;
  border-radius: 30px;
  color: #5691c8;
  font-style: italic;
  transition: color .3s ease-out;
  &:hover {
    cursor: pointer;
    background: #5691c8;
    color: #fff;
    transition: all .3s ease-in;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: #5691c8;
    border-radius: 30px;
    transform-origin: left;
    transition: width .25s ease;
    z-index: -1;
  }
  &:hover::after {
    width: 100%;
  }
`