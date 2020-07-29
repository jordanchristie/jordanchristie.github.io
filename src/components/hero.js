import React from 'react'
import SEO from './seo'

import { HeroWrapper, Container } from './index'

const Hero = ({ children }) => (
  <Container>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroWrapper>{children}</HeroWrapper>
  </Container>
)

export default Hero
