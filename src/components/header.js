import PropTypes from "prop-types"
import React, { useState } from "react"
import { Navbar, Nav, Container, Dropdown, Row, Col } from "react-bootstrap"
import Logo from "./images/logo"
import { Link } from "gatsby"

const Header = function ({ siteTitle }) {
  return (
    <div class="navbar-default">
      <Container className="navbar-default">
        <Navbar expand="lg">
          <Navbar.Brand as={Link} to="/" style={{ height: "57px" }}>
            <div>
              <Logo src="sonoma-logo.png" alt={siteTitle} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LocalDropdown title="Company" to="/company/">
                <Dropdown.Item as={Link} to="/company/management">
                  Management
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/company/careers">
                  Careers
                </Dropdown.Item>
              </LocalDropdown>

              <LocalDropdown title="Services" to="/services/">
                <Row style={{ width: "630px" }}>
                  <Col>
                    <Dropdown.Item as={Link} to="/services/financial-services">
                      Financial Services
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/services/financial-services/online-banking"
                    >
                      &nbsp;&nbsp;Online Banking
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/services/financial-services/conversion-support"
                    >
                      &nbsp;&nbsp;Conversion Support
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/services/financial-services/lost-or-stolen-debit-card"
                    >
                      &nbsp;&nbsp;Lost or Stolen Debit Card
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/services/financial-services/atm-support-services"
                    >
                      &nbsp;&nbsp;ATM Support Services
                    </Dropdown.Item>
                  </Col>
                  <Col>
                    <Dropdown.Item as={Link} to="/services/pos-point-of-sale">
                      POS (Point of Sale)
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/services/pos-point-of-sale/customer-support"
                    >
                      &nbsp;&nbsp;Customer Support
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/services/pos-point-of-sale/training-services"
                    >
                      &nbsp;&nbsp;Training Services
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/services/pos-point-of-sale/conversions"
                    >
                      &nbsp;&nbsp;Conversions
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/services/pos-point-of-sale/supply-management"
                    >
                      &nbsp;&nbsp;Supply Management
                    </Dropdown.Item>
                  </Col>
                </Row>
              </LocalDropdown>
              <LocalDropdown title="Technology" to="/technology/">
                <Dropdown.Item
                  as={Link}
                  to="/technology/crm-customer-relationship-management"
                >
                  CRM Customer Relationship Management
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/technology/trouble-ticketing-system"
                >
                  Trouble Ticketing System
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/technology/knowledge-base">
                  Knowledge Base
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/technology/call-routing">
                  Call Routing
                </Dropdown.Item>
              </LocalDropdown>
              <Nav.Link to="/contact-us" as={Link}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
}

const LocalDropdown = function ({ children, title, to }) {
  const [show, setShow] = useState(false)

  const showDropdown = e => {
    setShow(!show)
  }

  const hideDropdown = () => {
    setShow(false)
  }

  return (
    <Dropdown
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      navbar={true}
      className="nav-item"
    >
      <Dropdown.Toggle className="nav-link dropdown-toggle" as={Link} to={to}>
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
