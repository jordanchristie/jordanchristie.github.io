import React from 'react'
import SEO from './seo'
import { Fade } from 'react-reveal'
import { HeroWrapper, ProfileCaption, ContactButton, Container } from './index'

const Hero = () => (
  <Container>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroWrapper>
      <Fade bottom duration={3000}>
        <h1>
          Jordan Christie
        </h1>
      </Fade>
      <Fade bottom delay={1000}>
        <ProfileCaption>
          A front end web developer who looks at life as a fluid puzzle to be
          solved.
        </ProfileCaption>
      </Fade>
      <Fade delay={1500}>
        <ContactButton href="mailto:jordanchristie116@gmail.com">
          Get In Touch
        </ContactButton>
      </Fade>
    </HeroWrapper>
  </Container>
)

export default Hero
