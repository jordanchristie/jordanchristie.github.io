import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { Container, BlogHeader } from '../components'

const Blog = ({ data: { prismic } }) => {
  console.log(prismic.allPosts.edges)
  return (
    <Layout>
      <Container blog>
        <BlogHeader>Blog</BlogHeader>
        {prismic.allPosts.edges.map(({ node }) => (
          <Link to={`/blog/${node._meta.uid}`} key={node._meta.uid}>
            <li>{node.title[0].text}</li>
            <p>{node.content[0].text}</p>
          </Link>
        ))}
      </Container>
    </Layout>
  )
}

export default Blog

export const PageQuery = graphql`
  query BlogQuery {
    prismic {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
            content
            image
            title
          }
        }
      }
    }
  }
`
