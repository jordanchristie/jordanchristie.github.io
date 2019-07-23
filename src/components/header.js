import React, { useState, useEffect } from 'react'
import { SiteHeader, Title, NavLinkWrapper, NavLink } from './index'
import Fade from 'react-reveal/Fade'

const Header = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollTop = window.scrollY > 100

      if (scrollTop !== scroll) {
        setScroll(scrollTop)
      }
    })
  })

  return (
    <SiteHeader className={scroll ? 'scrolled' : ''}>
      <Fade left>
        <Title to="/"> JC </Title>
      </Fade>

      <Fade right>
        <NavLinkWrapper>
          <li>
            <NavLink to="#about" data-hover="About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="#projects" data-hover="Projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="#contact" data-hover="Contact">
              Contact
            </NavLink>
          </li>
        </NavLinkWrapper>
      </Fade>
    </SiteHeader>
  )
}

export default Header
