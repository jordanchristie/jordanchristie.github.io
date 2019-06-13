import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import { PageTitle } from '../components'
import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <PageTitle> Contact </PageTitle>
    <ContactCaption>
      {' '}
      I'm always open to discussing new projects or opportunities. If you have
      an idea that you want to manifest, let's talk!{' '}
    </ContactCaption>
    <ContactButton href="mailto:jordanchristie116@gmail.com">
      Start a conversation
    </ContactButton>
  </Layout>
)

export default Contact

const ContactCaption = styled.h3`
  line-height: 2;
`

const ContactButton = styled.a`
  text-decoration: none;
  position: relative;
  margin: 3em auto;
  padding: 0.5em;
  height: 60px;
  width: 20em;
  background: none;
  border: 2px solid #5691c8;
  border-radius: 30px;
  color: #5691c8;
  font-style: italic;
  font-size: 1.5rem;
  transition: color 0.3s ease-out;
  &:hover {
    cursor: pointer;
    background: #5691c8;
    color: #fff;
    transition: all 0.3s ease-in;
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
    transition: width 0.25s ease;
    z-index: -1;
  }
  &:hover::after {
    width: 100%;
  }
`
