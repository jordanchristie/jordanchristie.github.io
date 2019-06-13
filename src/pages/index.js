import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Fade from 'react-reveal/Fade'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Fade bottom delay={1000}>
      <IndexWrapper>
        <h1 style={{ fontSize: '2.4rem' }}>Jordan Christie</h1>
        <ProfileCaption>
          {' '}
          A front end web developer who looks at life as a fluid puzzle to be
          solved.
        </ProfileCaption>
      </IndexWrapper>
    </Fade>
  </Layout>
)

export default IndexPage

const IndexWrapper = styled.section`
  min-height: 40vh;
  margin-top: 10vh;
  text-align: center;
  @media screen and (min-width: 608px) {
    margin-top: 20vh;
  }
`

const ProfileCaption = styled.p`
  font-size: 1.5rem;
  line-height: 2;
`
