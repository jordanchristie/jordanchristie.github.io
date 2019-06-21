import React from 'react'
import { SiteHeader, Title, NavLinkWrapper, NavLink } from './index'
import Fade from 'react-reveal/Fade'

const Header = () => {
  return (
    <SiteHeader>
      <Fade left>
        <Title to="/"> JC </Title>
      </Fade>

      <Fade right>
        <NavLinkWrapper>
          <li>
            <NavLink to="/#about" data-hover="About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/#projects" data-hover="Projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/#contact" data-hover="Contact">
              Contact
            </NavLink>
          </li>
        </NavLinkWrapper>
      </Fade>
    </SiteHeader>
  )
}

export default Header
