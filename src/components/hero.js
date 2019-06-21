import React from 'react'
import SEO from './seo'
import { Fade } from 'react-reveal'
import ParticleBackground from './particle-background'
import { HeroWrapper, ProfileCaption, ContactButton } from './index'

const Hero = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ParticleBackground />
    <Fade bottom delay={1000}>
      <HeroWrapper>
        <h1 style={{ fontSize: '2.4rem', textTransform: 'uppercase' }}>
          Jordan Christie
        </h1>
        <ProfileCaption>
          A front end web developer who looks at life as a fluid puzzle to be
          solved.
        </ProfileCaption>
        <ContactButton>Get In Touch</ContactButton>
      </HeroWrapper>
    </Fade>
  </>
)

export default Hero
