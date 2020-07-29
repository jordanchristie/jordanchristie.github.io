import React from 'react'
import moment from 'moment'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { Container, BlogHeader, BlogCard } from '../components'

const Blog = ({ data: { prismic } }) => {
  function convertTime(time) {
    return moment(time).format('MMMM Do, YYYY')
  }
  console.log(prismic.allPosts.edges)
  return (
    <Layout>
      <Container blog>
        <BlogHeader>Blog</BlogHeader>
        {prismic.allPosts.edges.map(({ node }) => (
          <BlogCard>
            <Link to={`/blog/${node._meta.uid}`} key={node._meta.uid}>
              <li>
                <time>{convertTime(node._meta.firstPublicationDate)}</time>
                <h2>{node.title[0].text}</h2>
                <p>{node.content[0].text}</p>
              </li>
            </Link>
          </BlogCard>
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
              firstPublicationDate
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
