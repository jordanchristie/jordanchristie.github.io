const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      prismic {
        allBlogs(sortBy: meta_firstPublicationDate_DESC) {
          edges {
            node {
              _meta {
                uid
              }
              title
              content
            }
          }
        }
      }
    }
  `)

  const template = path.resolve('./src/templates/post.js')

  data.prismic.allBlogs.edges.forEach(edge => {
    createPage({
      path: `/${edge.node._meta.uid}`,
      component: template,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })
}
