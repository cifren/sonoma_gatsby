import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Header from "./header"
import "./layout.scss"
import { Container, Row, Col } from "react-bootstrap"

const Layout = ({ children, sidebar }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
            style={{
            margin: `0 auto`,
            padding: `0 1.0875rem 1.45rem`,
            }}
        >
            <main>
                <Container>
                    <Row>
                        <Col className="mt-4">{children}</Col>
                        
                        {sidebar &&
                            <Col>
                                sidebar
                            </Col>
                        }
                    </Row>
                </Container>
            </main>
        </div>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
