import PropTypes from "prop-types"
import React, {useState} from "react"
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap'
import Logo from "./images/logo"
import { Link } from "gatsby"

const Header = function({ siteTitle }) {
    
    return <div class="navbar-default">
        <Container className="navbar-default">
            <Navbar expand="lg">
            <Navbar.Brand as={Link} to="/">               
                <div>
                    <Logo src="sonoma-logo.png" />
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LocalDropdown title="Company" to="/company/">    
                        <Dropdown.Item as={Link} to="/company/management">Management</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/company/careers">Careers</Dropdown.Item>
                    </LocalDropdown>

                    <LocalDropdown 
                        title="Services" to="/services/">
                        <Dropdown.Item as={Link} to="/services/financialServices">Financial Services</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/services/onlineBanking">Online Banking</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/services/conversionSupport">Conversion Support</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/services/lostOrStolenDebitCard">Lost or Stolen Debit Card</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/services/atmSupportServices">ATM Support Services</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item as={Link} to="/services/pos">POS (Point of Sale)</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/services/customerSupport">Customer Support</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/services/trainingServices">Training Services</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/services/conversions">Conversions</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/services/supplyManagement">Supply Management</Dropdown.Item>
                    </LocalDropdown>
                    <LocalDropdown 
                        title="Technology" to="/technology/">
                        <Dropdown.Item as={Link} to="/technology/crmCustomerRelationshipManagement">CRM Customer Relationship Management</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/technology/troubleTicketingSystem">Trouble Ticketing System</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/technology/knowledgeBase">Knowledge Base</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/technology/callRouting">Call Routing</Dropdown.Item>
                    </LocalDropdown>
                    <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Container>
    </div>
}

const LocalDropdown = function({ children, title, to }) {
    
    const [show, setShow] = useState(false);

    const showDropdown = (e) => {
        setShow(!show);
    }

    const hideDropdown = () => {
        setShow(false);
    }

    return <Dropdown
        show={show}
        onMouseEnter={showDropdown} 
        onMouseLeave={hideDropdown}
        navbar={true}
        className="nav-item">
            
        <Dropdown.Toggle class="nav-link dropdown-toggle" as={Link} to={to}>
            {title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {children}
        </Dropdown.Menu>
    </Dropdown>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
