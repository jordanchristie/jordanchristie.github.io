import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Container } from './index'
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
    render={data => <Container>{children}</Container>}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
