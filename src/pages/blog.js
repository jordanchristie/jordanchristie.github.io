import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Container, BlogHeader } from '../components'

const Blog = ({ data: { prismic } }) => {
  console.log(prismic)
  return (
    <Layout>
      <Container blog>
        <BlogHeader>Blog</BlogHeader>
      </Container>
    </Layout>
  )
}

export default Blog

export const PageQuery = graphql`
  query {
    prismic {
      _allDocuments {
        edges {
          node {
            _meta {
              uid
            }
            ... on PRISMIC_Blog {
              title
              content
            }
          }
        }
      }
    }
  }
`
