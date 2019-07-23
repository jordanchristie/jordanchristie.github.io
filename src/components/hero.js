import React from 'react'
import SEO from './seo'
import { Fade } from 'react-reveal'
import ParticleBackground from './particle-background'
import { HeroWrapper, ProfileCaption, ContactButton } from './index'

const Hero = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ParticleBackground />
    <HeroWrapper>
      <Fade bottom duration={3000}>
        <h1 style={{ fontSize: '2.4rem', textTransform: 'uppercase' }}>
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
        <ContactButton>Get In Touch</ContactButton>
      </Fade>
    </HeroWrapper>
  </>
)

export default Hero
