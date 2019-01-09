import React from 'react'
import styled from 'styled-components'
import Layout, {PageTitle} from '../components/layout'
import SEO from '../components/seo'
import Inspiri from '../images/Inspiri.png'
import Jorsquare from '../images/Jorsquare.png'
import ReactTube from '../images/ReactTube.png'
import GithubAPI from '../images/GithubAPI.png'


const ProjectList = [
  {
    name: 'Inspiri',
    description: 'A full-stack MERN inspirational quotes app with passport authentication.',
    img_url: Inspiri,
    project_url: 'https://inspiri.herokuapp.com'
  },
  {
    name: 'Jorsquare',
    description: 'A React/Redux powered brewery search app using the Foursquare API.',
    img_url: Jorsquare,
    project_url: 'https://codesandbox.io/s/rl6qnl6jrn'
  },
  {
    name: 'ReactTube',
    description: 'A React powered Youtube search app.',
    img_url: ReactTube,
    project_url: ''
  },
  {
    name: 'GithubAPI',
    description: 'A simple Github search app with React.',
    img_url: GithubAPI,
    project_url: ''
  }
]

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <PageTitle> Projects </PageTitle>
    <ProjectWrapper>
    { ProjectList.map(project => {
      return (
        <Project key={project.name}>
          <ProjectImg src={project.img_url} alt={project.name}/>
          <ProjectCaption> {project.description} </ProjectCaption>
        </Project>
      )
    })}
    </ProjectWrapper>
  </Layout>
)

export default Projects

const ProjectWrapper = styled.section`
  display: grid;
  @media screen and (min-width: 790px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }
`

const Project = styled.figure`
  box-shadow: 5px 5px 30px 5px;
  margin: 2rem auto;
`

const ProjectImg = styled.img`

`

const ProjectCaption = styled.p`
  text-align: center;
`