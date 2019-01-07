import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Jordan Christie</h1>
    <p className="profile-caption"> a front end web developer who looks at life as a fluid puzzle to be solved.</p>
  </Layout>
)

export default IndexPage
