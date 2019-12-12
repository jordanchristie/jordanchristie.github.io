import React from 'react'
import styled from 'styled-components'
import { PageTitle } from '../components'
import SEO from '../components/seo'
import Inspiri from '../images/Inspiri.png'
import Jorsquare from '../images/Jorsquare.png'
import MickeysHouse from '../images/MickeysHouse.png'
import GithubAPI from '../images/GithubAPI.png'

const ProjectList = [
  {
    name: 'Inspiri',
    description:
      'A full-stack MERN inspirational quotes app with passport authentication.',
    img_url: Inspiri,
    project_url: 'https://inspiri.herokuapp.com',
  },
  {
    name: 'Jorsquare',
    description:
      'A React/Redux powered brewery search app using the Foursquare API.',
    img_url: Jorsquare,
    project_url: 'https://codesandbox.io/s/rl6qnl6jrn',
  },
  {
    name: `Mickey's House`,
    description:
      'A full-stck Walt Disney World search app for restaurants and attractions.',
    img_url: MickeysHouse,
    project_url: 'https://github.com/jordanchristie/ReactTube',
  },
  {
    name: 'GithubAPI',
    description: 'A simple Github search app with React.',
    img_url: GithubAPI,
    project_url: 'https://github.com/jordanchristie/React-Github-Project',
  },
]

const Projects = () => (
  <ProjectSection id="projects">
    <SEO title="Projects" />
    <PageTitle> Projects </PageTitle>
    <ProjectWrapper>
      {ProjectList.map(project => {
        return (
          <Project key={project.name} href={project.project_url}>
            <ProjectImg src={project.img_url} alt={project.name} />
            <ProjectName>{project.name}</ProjectName>
            <ProjectCaption> {project.description} </ProjectCaption>
          </Project>
        )
      })}
    </ProjectWrapper>
  </ProjectSection>
)

export default Projects

const ProjectSection = styled.section`
  background: #1f2b57;
  padding: 60px 5%;
`

const ProjectWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`

const Project = styled.a`
  width: 90%;
  border-radius: 10px;
  margin: 1em;
  text-align: center;
  transition: border-radius 0.3s ease;
  background: #fff;
  text-decoration: none;
  &:hover {
    border-radius: 0px;
    transition: border-radius 0.3s ease;
  }
  @media screen and (min-width: 790px) {
    width: 40%;
  }
`

const ProjectImg = styled.img`
  object-fit: cover;
`
const ProjectName = styled.h3`
  color: #333;
`

const ProjectCaption = styled.p`
  text-decoration: none;
  margin: auto 10px 20px;
  color: #333;
`
