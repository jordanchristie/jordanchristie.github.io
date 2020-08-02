import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components'
import Header from '../components/header'

const Post = ({ data: { prismic } }) => {
  const { post } = prismic
  return (
    <>
      <Header />
      <Container>
        <h1>Blog comming soon!</h1>
        {/* <h1>{post.title[0].text}</h1>
        <p>{post._meta.uid}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content[0].text }} /> */}
      </Container>
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query PostQuery($uid: String!) {
    prismic {
      post(lang: "en-us", uid: $uid) {
        _meta {
          uid
        }
        title
        content
        image
      }
    }
  }
`
