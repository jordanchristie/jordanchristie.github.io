import React from 'react'
import styled from 'styled-components'
import { PageTitle, Container } from '../components'
import SEO from '../components/seo'
import { ProjectList } from '../api/projectlist'

const Projects = () => (
  <ProjectSection id="projects">
    <SEO title="Projects" />
    <Container>
    <PageTitle white> Projects </PageTitle>
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
    </Container>
  </ProjectSection>
)

export default Projects

const ProjectSection = styled.section`
  background: #1f2b57;
  padding: 60px 5%;
`

const ProjectWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`

const Project = styled.a`
  border-radius: 10px;
  margin: 1em 0;
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
