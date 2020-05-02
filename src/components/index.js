import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'gatsby'

// Header
export const SiteHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 1em;
  align-items: center;
  z-index: 100;
  color: #fff;
  transition: color 0.3s ease, background 0.5s ease;
  &.scrolled {
    background: white;
    transition: color 0.3s ease, background 0.5s ease;
    color: #333;
  }
`

export const Title = styled(Link)`
  font-size: 64px;
  text-decoration: none;
  color: #5691c8;
  letter-spacing: 3px;
  padding: 0.25em;
`

export const NavLinkWrapper = styled.ul`
  height: inherit;
  align-items: center;
  margin: 2rem 0 0 0;
  list-style-type: none;
  display: inline-flex;
  @media screen and (min-width: 608px) {
    margin-top: 3em 0 0 0;
  }
`

export const NavLink = styled(AnchorLink)`
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  color: inherit;
  margin: 2em 1em 0;
  letter-spacing: 3px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: color 0.3s ease;
  &::after {
    content: attr(data-hover);
    position: absolute;
    top: -2px;
    left: 0;
    height: 100%;
    width: 0;
    color: #5691c8;
    transition: width 0.3s ease;
    overflow: hidden;
  }
  &:hover {
    color: white;
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
//------------------//
// Hero
export const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 5%;
`

export const ProfileCaption = styled.p`
  font-size: 1.5rem;
  line-height: 2;
`

export const PageTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 3px;
`

export const Container = styled.main`
  min-height: 100vh;
  color: #fff;
  font-size: 16px;
  scroll-behavior: smooth;
`

export const WhiteSection = styled.section`
  margin: 60px 5% 60px;
  background: #fff;
  color: #333;
`

export const AboutCaption = styled.p`
  margin: 2rem auto;
  font-size: 20pt;
  line-height: 2;
  color: rgb(112, 112, 112);
`

export const SkillWrap = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

export const Skill = styled.div`
  margin: 0.5em 1em 1.5em;
  p {
    margin: -1em;
    text-align: center;
  }
`

export const SkillImg = styled.img`
  height: 100px;
  width: 100px;
`

export const ContactSection = styled.section`
  margin: 5rem auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`
export const ContactLeft = styled.div`
  @media screen and (min-width: 710px) {
    width: 70%;
  }
`

export const ContactCaption = styled.h3`
  line-height: 2;
`

export const ContactButton = styled.a`
  text-decoration: none;
  position: relative;
  padding: 0.5em;
  height: 60px;
  text-transform: uppercase;
  background: none;
  border: 0.1rem solid #5691c8;
  color: #5691c8;
  font-size: 1.5rem;
  transition: color 0.3s ease-out;
  &:hover {
    cursor: pointer;
    background: #5691c8;
    color: #fff;
    transition: all 0.3s ease-in;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: #5691c8;
    transform-origin: left;
    transition: width 0.25s ease;
    z-index: -1;
  }
  &:hover::after {
    width: 100%;
  }
`
export const SocialLinksWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin: 3rem 0;
  @media screen and (min-width: 710px) {
    margin: 0;
  }
`

export const SocialLink = styled.li`
  margin: 0.25em 0;
  text-transform: uppercase;
  color: #333;
  transition: color 0.3s ease;
  &:before {
    content: '+';
    position: relative;
    left: -0.5rem;
  }
  a {
    text-decoration: none;
    &:hover {
      color: #5691c8;
      transition: color 0.3s ease;
    }
  }
`
