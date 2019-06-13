import styled from 'styled-components'

export const PageTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 3px;
`

export const Container = styled.main`
  min-height: 100vh;
  padding: 100px 5% 0;
  margin: 60px auto 0;
  color: #fff;
  font-size: 16px;
  scroll-behavior: smooth;
`

export const Section = styled.section`
  margin: 10rem auto;
  @media screen and (min-width: 1800px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const AboutCaption = styled.p`
  margin: 2rem auto;
  font-size: 1.5rem;
  line-height: 2;
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
