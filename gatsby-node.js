const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      prismic {
        _allDocuments {
          edges {
            node {
              uid
            }
          }
        }
      }
    }
  `)

  const template = path.resolve('src/templates/post')

  pages.data._allDocuments.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
