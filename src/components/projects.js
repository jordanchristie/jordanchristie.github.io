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
              <ProjectImgOverlay>
                <a href={project.project_url}>Live</a>
                <a href={project.project_url}>Code</a>
              </ProjectImgOverlay>
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
  border-radius: 20px;
  margin: 1em 0;
  text-align: center;
  transition: border-radius 0.3s ease;
  background: #fff;
  text-decoration: none;
  position: relative;
  a {
    transform: translateY(10rem);
    transition: all 0.3s ease;
    opacity: 0;
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    border-radius: 30px;
    padding: 1rem 3rem;
  }

  &:hover a {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.3s ease;
  }
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
  overflow: hidden;
`

const ProjectImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 40%;
  background: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    transition: all 0.3s ease;
    background: rgba(0, 0, 0, 0.8);
  }
`
const ProjectName = styled.h3`
  color: #333;
`

const ProjectCaption = styled.p`
  text-decoration: none;
  margin: auto 10px 20px;
  color: #333;
`
