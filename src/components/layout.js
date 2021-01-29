import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Header from "./header"
import "./layout.scss"
import { Container, Row, Col } from "react-bootstrap"
import SidebarComponents from "./sidebar/sidebarComponents"

const Layout = ({ children, sidebarName }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Sidebar = SidebarComponents[sidebarName]

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container className="main">
        {Sidebar && (
          <Row>
            <Col xs={12} sm={8} md={9} className="mt-4 mb-4">
              {children}
            </Col>
            <Col xs={12} sm={4} md={3} className="sidebar mb-5">
              <Sidebar />
            </Col>
          </Row>
        )}
        {!Sidebar && (
          <Row>
            <Col className="mt-4 mb-4">{children}</Col>
          </Row>
        )}
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
