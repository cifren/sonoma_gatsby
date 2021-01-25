import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "gatsby"

const Footer = function() {
    return <Container>
        <div>
            <Row className="footer">
                <Col>
                    <p><strong><Link to="/blog/my-first-post">Company</Link></strong></p>
                    <hr/>
                    <p>
                        <Link to="">Management</Link>
                        <br/>
                        <Link to="">Carrers</Link>
                    </p>
                </Col>
                <Col>
                    <p><strong><Link to="">Services</Link></strong></p>
                    <hr/>
                    <p>
                        <Link to="">Financial Services </Link>
                        <br/>
                        &nbsp; &nbsp;&nbsp;<Link to="">Online Banking</Link>
                        <br/>
                        &nbsp; &nbsp;&nbsp;<Link to="">Conversion Services</Link>
                        <br/>
                        &nbsp; &nbsp;&nbsp;<Link to="">Lost or Stolen Debit Card</Link>
                        <br/>
                        &nbsp; &nbsp;&nbsp;<Link to="">ATM Support Services</Link>
                    </p>
                    <p>
                        <Link to="">POS (Point of Sales)</Link>
                        <br/>
                        &nbsp; &nbsp;&nbsp;<Link to="">Customer Services</Link>
                        <br/>
                        &nbsp; &nbsp;&nbsp;<Link to="">Training Support</Link>
                        <br/>
                        &nbsp; &nbsp;&nbsp;<Link to="">Conversions</Link>
                        <br/>
                        &nbsp; &nbsp;&nbsp;<Link to="">Supply Management</Link>
                    </p>
                </Col>
                <Col>
                    <p><strong><Link to="">Technology</Link></strong></p>
                    <hr/>
                    <p>
                        <Link to="">Customer Relation Management</Link>
                        <br/>
                        <Link to="">Trouble Ticketing Support</Link>
                        <br/>
                        <Link to="">Knowledge Base</Link>
                        <br/>
                        <Link to="">Call Routing</Link>
                    </p>
                </Col>
                <Col>
                    <p><strong><Link to="">Contact</Link></strong></p>
                    <hr/>
                    <p>
                        <Link to="">Contact Us</Link>
                        <br/>
                        <Link to="">Chat</Link>
                    </p>
                </Col>
            </Row>
        </div>
        
        <div class="copyright">
            <center> 
                <span>© {new Date().getFullYear()} Sonoma technical support services </span>
            </center>
        </div>
    </Container>
}

export default Footer
