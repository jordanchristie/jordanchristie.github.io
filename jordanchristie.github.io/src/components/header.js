import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
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
    </div>
    
    <NavLinkWrapper>
      <NavLink to='/about'>
        About
      </NavLink>
      <NavLink to='/projects/'>
        Projects
      </NavLink>
      <NavLink to='/contact/'>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rebeccapurple;
  margin-Bottom: 1.45rem;
`;

const Title = styled.h1`
  color: white;
  letter-spacing: 3px;
`

const NavLinkWrapper = styled.ul`

`

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  margin: 0 1em;
  letter-spacing: 3px;
`