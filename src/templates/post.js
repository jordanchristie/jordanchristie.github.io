import React from 'react'
import { graphql } from 'gatsby'

const Post = ({ data: { prismic } }) => {
  const { data } = prismic

  return (
    <>
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogQuery($uid: String!) {
    prismic {
      blog(uid: $uid, lang: "en-us") {
        title
        content
      }
    }
  }
`
