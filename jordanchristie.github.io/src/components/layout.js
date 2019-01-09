import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            author
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.author} />
        <Container>
          {children}
        </Container>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

export const PageTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 3px;
`;

const Container = styled.main`
  max-width: 960px;
  padding: 100px 5%;
  margin: 60px auto;
`
