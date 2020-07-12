export const linkResolver = doc => {
  if (doc.type === 'category') {
    return `/category/${doc.uid}`
  }

  if (doc.type === 'page') {
    return `/${doc.uid}`
  }

  return '/'
}
