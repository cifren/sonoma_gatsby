import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Carousel, Row, Col } from "react-bootstrap"

import img1 from "../images/company.jpeg"
import img2 from "../images/building.jpg"
import img3 from "../images/POS.jpeg"

const IndexPage = function(props){
    return <Layout>
        <SEO title="Home"/>
        <Container>
            <br/>
            <Row>
                <Col>
                    <Carousel 
                        prevIcon={React.createElement("span")}
                        nextIcon={React.createElement("span")}
                        >
                        <Carousel.Item>
                            <Img 
                                fluid={props.data.slide01.childImageSharp.fluid}
                                alt="First slide" 
                            />
                            <Carousel.Caption className="caption1">
                                <h1 class="carousel-title">Company Overview</h1>
                                <p class="carousel-body">Learn more about who we are and how we can help you.</p>
                                <p><Link className="btn btn-lg btn-primary" to="" role="button">Learn More</Link></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>                
                            <Img 
                                fluid={props.data.slide02.childImageSharp.fluid}
                                alt="Second slide"
                            />
                            <Carousel.Caption className="caption2">
                                <h1 class="carousel-title">Customer Support</h1>
                                <p class="carousel-body">We provide a full range of support services</p>
                                <p><Link className="btn btn-lg btn-primary" to="" role="button">Learn More</Link></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>                
                            <Img 
                                fluid={props.data.slide03.childImageSharp.fluid}
                                alt="Third slide"
                            />
                            <Carousel.Caption className="caption3">
                                <h1 class="carousel-title">Contact Us Today</h1>
                                <p class="carousel-body"> For further information</p>
                                <p><Link class="btn btn-lg btn-primary" to="/contact" role="button">Click Here</Link></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className="home-links">
                <Col>
                    <Row>
                        <Col> 
                            <div class="home-icone">
                                <Link to="/contact" rel="alternate">
                                    <img class="pull-left" src={img1} alt="" width="129" height="129"/>
                                </Link>
                            </div>
                            <div class="text">
                                <h1><Link href="/brochures/company-overview.pdf" target="_blank">Company Overview</Link></h1>
                                <p>
                                    <Link href="/brochures/company-overview.pdf" target="_blank">
                                        Providing support had become increasingly difficult and costly. find out how Sonoma can help.
                                    </Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <div class="home-icone">
                                <Link href="/services/financial-services" rel="alternate">
                                    <img class="pull-left" src={img2} alt="" width="129" height="129"/>
                                </Link>
                            </div>
                            <div class="text">
                                <h1>
                                    <Link href="/brochures/financial-services.pdf" target="_blank">Financial Services</Link>
                                </h1>
                                <p>
                                    <Link href="/brochures/financial-services.pdf" target="_blank">Find out how Sonoma can help you give your customers peace of mind.</Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col class="col-sm-12 col-md-12">
                            <div class="home-icone">
                                <Link to="/services/pos-point-of-sale" rel="alternate">
                                    <img class="pull-left magrgin-bottom" src={img3} alt="" width="129" height="129"/>
                                </Link>
                            </div>
                            <div class="text">
                                <h1>
                                    <Link href="/brochures/Point-of-Sale-Services.pdf" target="_blank">POS Services</Link>
                                </h1>
                                <p>
                                    <Link href="/brochures/Point-of-Sale-Services.pdf" target="_blank">
                                        See how Sonoma's comprehensive suite of training and support practices can help you.
                                    </Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Layout>
}

export default IndexPage

export const query = graphql`
    query {
        slide01: file(relativePath: { eq: "carousel/girlcomputer.jpeg" } ) {
            childImageSharp {
                fluid(maxWidth: 1140, maxHeight: 408) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        slide02: file(relativePath: { eq: "carousel/helpdesk.jpeg" } ) {
            childImageSharp {
                fluid(maxWidth: 1140, maxHeight: 408) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        slide03: file(relativePath: { eq: "carousel/support.jpeg" } ) {
            childImageSharp {
                fluid(maxWidth: 1140, maxHeight: 408) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`