const { registerLinkResolver } = require('gatsby-source-prismic-graphql')
const { linkResolver } = require('./src/utils/linkResolver')
registerLinkResolver(linkResolver)
// You can delete this file if you're not using it
// const scrollTo = id => () => {
//   const el = document.querySelector(id)
//   if (el) return window.scrollTo(0, el.offsetTop - 20)
//   return false
// }

// export const onRouteUpdate = ({ location: { hash } }) => {
//   console.log(location)
//   if (hash) {
//     window.setTimeout(scrollTo(hash), 10)
//   }
// }
