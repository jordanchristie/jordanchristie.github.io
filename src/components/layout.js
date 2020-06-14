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
      <Header />
      <Content>{children}</Content>
      <Footer/>
    </>  
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Content = styled.main`

`