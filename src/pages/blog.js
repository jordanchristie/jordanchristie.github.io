import React from 'react'
import Layout from '../components/layout'
import { Container } from '../components'
import Hero from '../components/hero'

const Blog = () => {
    return (
        <Layout>
            <Container blog>
                <Hero>
                <h1>This is the blog page!</h1>
                </Hero>
            </Container>
        </Layout>
    )
}

export default Blog