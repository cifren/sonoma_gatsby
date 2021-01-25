import PropTypes from "prop-types"
import React, {useState} from "react"
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import Logo from "./images/logo"
import { navigateTo } from "gatsby"

const Header = function({ siteTitle }) {
    
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }

    const hideDropdown = e => {
        setShow(false);
    }
    const goToLink = e => {
        setShow(false);
    }
    const navigateToThere = () => {
        navigateTo('/page-2/');
    }

    return <div class="navbar-default">
        <Container className="navbar-default">
            <Navbar expand="lg">
            <Navbar.Brand href="/">               
                <div>
                    <Logo src="sonoma-logo.png" />
                </div>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown 
                        id="basic-nav-dropdown"
                        title="Company"
                        onClick={navigateToThere}
                        show={show}
                        onMouseEnter={showDropdown} 
                        onMouseLeave={hideDropdown}>
                        <NavDropdown.Item href="#action/1.1">Management</NavDropdown.Item>
                        <NavDropdown.Item href="#action/1.2">Careers</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Services">
                        <NavDropdown.Item href="#action/2.1">Financial Services</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.2">Online Banking</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.3">Conversion Support</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.4">Lost or Stolen Debit Card</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.5">ATM Support Services</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/2.6">POS (Point of Sale)</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.7">Customer Support</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.8">Training Services</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.9">Conversions</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.10">Supply Management</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Technology">
                        <NavDropdown.Item href="#action/3.1">CRM Customer Relationship Management</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Trouble Ticketing System</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Knowledge Base</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Call Routing</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Container>
    </div>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
