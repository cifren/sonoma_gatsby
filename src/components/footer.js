import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import Chat from "./chat"

const Footer = function () {
  return (
    <Container>
      <div>
        <Row className="footer">
          <Col>
            <p>
              <strong>
                <Link to="/blog/my-first-post">Company</Link>
              </strong>
            </p>
            <hr />
            <p>
              <Link to="/company/management">Management</Link>
              <br />
              <Link to="/company/careers">Careers</Link>
            </p>
          </Col>
          <Col>
            <p>
              <strong>
                <Link to="">Services</Link>
              </strong>
            </p>
            <hr />
            <p>
              <Link to="/services/financial-services">Financial Services </Link>
              <br />
              &nbsp; &nbsp;&nbsp;
              <Link to="/services/financial-services/online-banking">
                Online Banking
              </Link>
              <br />
              &nbsp; &nbsp;&nbsp;
              <Link to="/services/financial-services/conversion-support">
                Conversion Services
              </Link>
              <br />
              &nbsp; &nbsp;&nbsp;
              <Link to="/services/financial-services/lost-or-stolen-debit-card">
                Lost or Stolen Debit Card
              </Link>
              <br />
              &nbsp; &nbsp;&nbsp;
              <Link to="/services/financial-services/atm-support-services">
                ATM Support Services
              </Link>
            </p>
            <p>
              <Link to="/services/pos-point-of-sale">POS (Point of Sales)</Link>
              <br />
              &nbsp; &nbsp;&nbsp;
              <Link to="/services/pos-point-of-sale/customer-support">
                Customer Services
              </Link>
              <br />
              &nbsp; &nbsp;&nbsp;
              <Link to="/services/pos-point-of-sale/training-services">
                Training Support
              </Link>
              <br />
              &nbsp; &nbsp;&nbsp;
              <Link to="/services/pos-point-of-sale/conversions">
                Conversions
              </Link>
              <br />
              &nbsp; &nbsp;&nbsp;
              <Link to="/services/pos-point-of-sale/supply-management">
                Supply Management
              </Link>
            </p>
          </Col>
          <Col>
            <p>
              <strong>
                <Link to="/technology/">Technology</Link>
              </strong>
            </p>
            <hr />
            <p>
              <Link to="/technology/crm-customer-relationship-management">
                Customer Relation Management
              </Link>
              <br />
              <Link to="/technology/trouble-ticketing-system">
                Trouble Ticketing Support
              </Link>
              <br />
              <Link to="/technology/knowledge-base">Knowledge Base</Link>
              <br />
              <Link to="/technology/call-routing">Call Routing</Link>
            </p>
          </Col>
          <Col>
            <p>
              <strong>
                <Link to="/contact-us">Contact</Link>
              </strong>
            </p>
            <hr />
            <p>
              <Link to="/contact-us">Contact Us</Link>
              <br />
              <Chat />
            </p>
          </Col>
        </Row>
      </div>

      <div class="copyright">
        <center>
          <span>
            © {new Date().getFullYear()} Sonoma technical support services{" "}
          </span>
        </center>
      </div>
    </Container>
  )
}

export default Footer
