import React from 'react'

import SEO from './seo'
import {
  Container,
  ContactSection,
  ContactLeft,
  ContactCaption,
  ContactButton,
  SocialLinksWrapper,
  SocialLink,
} from './index'

const SocialMedia = [
  {
    name: 'Github',
    url: 'https://github.com/jordanchristie',
    color: '#4183c4',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/j0rdanchristie',
    color: '#00aced',
  },
  {
    name: 'Email',
    url: 'mailto:jordanchristie116@gmail.com',
    color: '#205081',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jordanchristiehfs',
    color: '#3b5998',
  },
]

const Contact = () => (
  <Container id="contact">
    <SEO title="Contact" />
    <ContactSection>
      <ContactLeft>
        <ContactCaption>
          I'm always open to discussing new projects or opportunities. If you
          have an idea that you want to manifest, let's talk!
        </ContactCaption>
        <ContactButton href="mailto:jordanchristie116@gmail.com">
          Get in touch
        </ContactButton>
      </ContactLeft>
      <SocialLinksWrapper>
        {SocialMedia.map(link => {
          return (
            <SocialLink key={link.name}>
              <a href={link.url}>{link.name}</a>
            </SocialLink>
          )
        })}
      </SocialLinksWrapper>
    </ContactSection>
  </Container>
)

export default Contact
