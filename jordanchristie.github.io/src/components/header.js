import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
//import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Title>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </Title>
    
    <NavLinkWrapper>
      <NavLink fade to='/about' bg="#663399">
        About
      </NavLink>
      <NavLink fade to='/projects/' bg="#663399">
        Projects
      </NavLink>
      <NavLink fade to='/contact/' bg="#663399">
        Contact
      </NavLink>
    </NavLinkWrapper>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const SiteHeader = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  background: rebeccapurple;
  padding: 1em 0 0;
`;

const Title = styled.h1`
  color: white;
  letter-spacing: 3px;
  line-height: 0;
`

const NavLinkWrapper = styled.ul`
  height: 100%;
  align-self: center;
`

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  margin: 1em;
  letter-spacing: 3px;
  height: 100%;
  font-size: 1rem;
  font-weight: 600;
`