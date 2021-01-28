import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"

const contactPage = function() {
    return <Layout>
        <Container>
            <Row>
                <Col>
                    <h1 class="article-title"><span>CONTACT</span></h1>
                    <p>
                        <span>
                            <span class="style6">»</span>&nbsp;
                            For general information about Sonoma’s products and services please 
                            <span class="style7">
                                <a href="/general-information" target="_self" rel="alternate">Click Here</a>
                            </span> 
                            to contact us. Or select the appropriate link below to contact the department you wish to email.
                        </span>
                    </p>
                    <p>
                        <span>
                            <span class="style6">»</span>&nbsp;
                            <a href="/contact-our-sales-team" rel="alternate">Contact Our Sales Team</a>, for further information.
                        </span>
                    </p>
                    <p>
                        <span>
                            <span class="style6">»</span>
                            &nbsp;For&nbsp;Customer Support&nbsp;Inquiries, please 
                            <a href="/contact-our-operations-team" rel="alternate">Contact Our Operations Team</a>.
                        </span>
                    </p>
                    <p>
                        <span>
                            <span class="style6">»</span>
                            &nbsp;Our <span class="style7">
                                <a href="/contact-our-marketing-team" target="_self" rel="alternate">Marketing Team</a>
                            </span> welcomes any comment and/or feedback you may have about Sonoma and or our website.
                        </span>
                    </p>
                </Col>
                <Col className="sidebar">
                    <p>Sonoma Technical Support Services</p>
                    <p>•••••••••••••••••••••••••••••••••••</p>
                    <p>505-8840 210th Street</p>
                    <p>Suite #342</p>
                    <p>Langley, BC</p>
                    <p>V1M 2Y2</p>
                    <p>•••••••••••••••••••••••••••••••••••</p>
                    <p>1-866-898-3123</p>
                </Col>
            </Row>
        </Container>
    </Layout>
}

export default contactPage