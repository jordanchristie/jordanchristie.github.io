import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Header = () => (
  <SiteHeader>
    <Fade left>
      <Title to="/"> JC </Title>
    </Fade>

    <Fade right>
      <NavLinkWrapper>
        <li>
          <NavLink to="/about" data-hover="About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" data-hover="Projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" data-hover="Contact">
            Contact
          </NavLink>
        </li>
      </NavLinkWrapper>
    </Fade>
  </SiteHeader>
)

export default Header

const SiteHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 1em;
  align-items: center;
`

const Title = styled(Link)`
  font-size: 64px;
  text-decoration: none;
  color: #5691c8;
  letter-spacing: 3px;
  padding: 0.25em;
`

const NavLinkWrapper = styled.ul`
  height: inherit;
  align-items: center;
  margin: 2rem 0 0 0;
  list-style-type: none;
  display: inline-flex;
  @media screen and (min-width: 608px) {
    margin-top: 3em 0 0 0;
  }
`

const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  color: #fff;
  margin: 2em 1em 0;
  letter-spacing: 3px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: color 0.5s ease;
  &::after {
    content: attr(data-hover);
    position: absolute;
    top: -1.5px;
    left: 0;
    height: 100%;
    width: 0;
    color: #5691c8;
    transition: width 0.3s ease;
    overflow: hidden;
  }
  &:hover {
    color: transparent;
    transition: color 0.1s linear;
  }
  &:hover::after {
    width: 100%;
    transition: width 0.3s ease;
  }
  @media screen and (min-width: 440px) {
    font-size: 1rem;
  }
`
