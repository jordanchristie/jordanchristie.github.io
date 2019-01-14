import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Jordan Christie</h1>
    <ProfileCaption> A front end web developer who looks at life as a fluid puzzle to be solved.</ProfileCaption>
  </Layout>
)

export default IndexPage

const ProfileCaption = styled.p`
  font-size: 1.5rem;
  line-height: 2;
`