import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Carousel, Row, Col } from "react-bootstrap"
import companyPdf from "../pdf/company-overview.pdf"
import financialServicePdf from "../pdf/financial-services.pdf"
import posPdf from "../pdf/Point-of-Sale-Services.pdf"

const IndexPage = function (props) {
  return (
    <Layout>
      <SEO title="Home" />
      <Row>
        <Col className="p-0">
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
                <p class="carousel-body d-none d-lg-block">
                  Learn more about who we are and how we can help you.
                </p>
                <p>
                  <Link
                    to="/company"
                    className="btn btn-lg btn-primary"
                    role="button"
                  >
                    Learn More
                  </Link>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Img
                fluid={props.data.slide02.childImageSharp.fluid}
                alt="Second slide"
              />
              <Carousel.Caption className="caption2">
                <h1 class="carousel-title">Customer Support</h1>
                <p class="carousel-body d-none d-lg-block">
                  We provide a full range of support services
                </p>
                <p>
                  <Link
                    to="/services/pos-point-of-sale/customer-support"
                    className="btn btn-lg btn-primary"
                    role="button"
                  >
                    Learn More
                  </Link>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Img
                fluid={props.data.slide03.childImageSharp.fluid}
                alt="Third slide"
              />
              <Carousel.Caption className="caption3">
                <h1 class="carousel-title">Contact Us Today</h1>
                <p class="carousel-body d-none d-lg-block"> For further information</p>
                <p>
                  <Link
                    to="/contact-us"
                    class="btn btn-lg btn-primary"
                    role="button"
                  >
                    Click Here
                  </Link>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="home-links">
        <Col lg={4} md={12} sm={12}>
            <div class="home-icone">
            <Link to="/company" rel="alternate">
                <Img
                className="pull-left"
                fixed={props.data.img1.childImageSharp.fixed}
                alt="company"
                />
            </Link>
            </div>
            <div class="text">
            <h1>
                <a href={companyPdf} target="_blank" rel="noreferrer">
                Company Overview
                </a>
            </h1>
            <p>
                <a href={companyPdf} target="_blank" rel="noreferrer">
                Providing support had become increasingly difficult and
                costly. find out how Sonoma can help.
                </a>
            </p>
            </div>
        </Col>
        <Col lg={4} md={12} sm={12}>
            <div class="home-icone">
            <Link href="/services/financial-services" rel="alternate">
                <Img
                className="pull-left"
                fixed={props.data.img2.childImageSharp.fixed}
                alt="company"
                />
            </Link>
            </div>
            <div class="text">
            <h1>
                <a
                href={financialServicePdf}
                target="_blank"
                rel="noreferrer"
                >
                Financial Services
                </a>
            </h1>
            <p>
                <a
                href={financialServicePdf}
                target="_blank"
                rel="noreferrer"
                >
                Find out how Sonoma can help you give your customers peace
                of mind.
                </a>
            </p>
            </div>
        </Col>
        <Col lg={4} md={12} sm={12}>
            <div class="home-icone">
            <Link to="/services/pos-point-of-sale" rel="alternate">
                <Img
                className="pull-left"
                fixed={props.data.img3.childImageSharp.fixed}
                alt="company"
                />
            </Link>
            </div>
            <div class="text">
            <h1>
                <a href={posPdf} target="_blank" rel="noreferrer">
                POS Services
                </a>
            </h1>
            <p>
                <a href={posPdf} target="_blank" rel="noreferrer">
                See how Sonoma's comprehensive suite of training and support
                practices can help you.
                </a>
            </p>
            </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    slide01: file(relativePath: { eq: "carousel/girlcomputer.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1140, maxHeight: 408) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide02: file(relativePath: { eq: "carousel/helpdesk.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1140, maxHeight: 408) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide03: file(relativePath: { eq: "carousel/support.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1140, maxHeight: 408) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img1: file(relativePath: { eq: "company.jpeg" }) {
      childImageSharp {
        fixed(width: 129) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    img2: file(relativePath: { eq: "building.jpg" }) {
      childImageSharp {
        fixed(width: 129) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    img3: file(relativePath: { eq: "POS.jpeg" }) {
      childImageSharp {
        fixed(width: 129) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
