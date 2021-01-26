import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/images/image"
import SEO from "../components/seo"
import { Container, Carousel } from "react-bootstrap"

const IndexPage = function(props){
    const carouselIcon = React.createElement("span");

    return <Layout>
        <SEO title="Home" />
        <Container>
            <br/>
            <Carousel 
                prevIcon={carouselIcon}
                nextIcon={carouselIcon}
                >
                <Carousel.Item>
                    <Img 
                        fluid={props.data.slide01.childImageSharp.fluid}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div class="carousel-caption caption1 ">
                            <h1 class="carousel-title">Company Overview</h1>
                            <p class="carousel-body">Learn more about who we are and how we can help you.</p>
                            <p><Link to="" class="btn btn-lg btn-primary" role="button">Learn More</Link></p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>                
                    <Img 
                        fluid={props.data.slide02.childImageSharp.fluid}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>                
                    <Img 
                        fluid={props.data.slide03.childImageSharp.fluid}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
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
}

export default IndexPage

export const query = graphql`
    query {
        slide01: file(relativePath: { eq: "carousel/girlcomputer.jpeg" } ) {
            childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        slide02: file(relativePath: { eq: "carousel/helpdesk.jpeg" } ) {
            childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        slide03: file(relativePath: { eq: "carousel/support.jpeg" } ) {
            childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`