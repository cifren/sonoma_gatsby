import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/images/image"
import SEO from "../components/seo"
import { Container, Carousel } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Container>



    <h1>Hi people</h1>
    <p> bonjoiru caro</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image src="gatsby-astronaut.png" />
    </div>
    <Link to="/blog/my-first-post">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
    <Link to="/blog/my-first-post">Go to "markdown blog"</Link>
  </Layout>
)

export default IndexPage
