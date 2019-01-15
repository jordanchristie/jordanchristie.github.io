import React from 'react'
import Layout, {PageTitle} from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

import HTML5 from '../images/HTML5.svg'
import CSS3 from '../images/CSS3.svg'
import Javascript from '../images/javascript.svg'
import ReactLogo from '../images/react.svg'
import Redux from '../images/redux.svg'
import NodeJS from '../images/nodejs.svg'
import MongoDB from '../images/mongodb.svg'
import GatsbyLogo from '../images/gatsby.svg'


// To-do: Add tooling/language SVGs
const Skills = [
  {
    name: 'HTML5',
    url: HTML5
  },
  {
    name: 'CSS3',
    url: CSS3
  },
  {
    name: 'Javascript',
    url: Javascript
  },
  {
    name: 'React',
    url: ReactLogo
  },
  {
    name: 'Redux',
    url: Redux
  },
  {
    name: 'Gatsby',
    url: GatsbyLogo
  },
  {
    name: 'NodeJS',
    url: NodeJS
  },
  {
    name: 'MongoDB',
    url: MongoDB
  }
]
// Second Paragraph?
const About = () => (
  <Layout>
    <SEO title="About" />
    <PageTitle>About</PageTitle>
    <AboutCaption> Hi, I'm Jordan! I'm a front-end turning full-stack web developer with a serious case of Curious Cat syndrome. I've definitely been bitten by the dev bug; there's an endless chasm of artistic infinity that peaks my interest to jump into it. </AboutCaption>

    <h3>Languages &amp; Tools</h3>
    <SkillWrap>
    { Skills.map(skill => {
      return (
        <Skill key={skill.name}>
          <SkillImg src={skill.url} alt={skill.name}/>
          <p>{skill.name}</p>
        </Skill>
      )
    })}
    </SkillWrap>
  </Layout>
)

export default About

const AboutCaption = styled.p`
  margin: 2rem auto;
  font-size: 1.25rem;
  line-height: 2;
`

const SkillWrap = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

const Skill = styled.div`
  margin: .5em 1em 1.5em;
  p {
    margin: -1em ;
    text-align: center;
  }
`

const SkillImg = styled.img`
  height: 100px;
  width: 100px;
`