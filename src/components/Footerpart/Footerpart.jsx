import React from 'react'
import "./footerpart.css"
import { Col, Container, Row } from 'react-bootstrap'

const Footerpart = () => {
  return (
   <section id='footer'>
    <Container>
        <Row>
            <Col lg={{span:6, offset:3}}>
            <div className="tharteen">
                 <h2>G3 Architects</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <h6>All rights reserved copyright@2023 startup landing page design </h6>
                <h4>Designed By Abdullah Al-Mamun.</h4>
            </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Footerpart
