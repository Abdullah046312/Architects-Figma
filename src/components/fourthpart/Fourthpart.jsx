import React from 'react'
import "./fourthpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images11 from "../../assets/images11.png"
import images12 from "../../assets/images12.png"
import images13 from "../../assets/images13.png"
import images14 from "../../assets/images14.png"
import images15 from "../../assets/images15.png"


const Fourthpart = () => {
  return (
    <section id='four'>
        <Container>
            <Row>
              <Col lg={{span:6, offset:3}}>
              <div className="eleven">
                <h2>Our Sponspors</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
              </div>
              </Col>  
            </Row>

            <Row>
              
              <Col lg={12}>
              <div className="twelve">
                <img src={images11} alt="" />
              </div>
              <div className="twelve">
                <img src={images12} alt="" />
              </div>
              <div className="twelve">
                <img src={images13} alt="" />
              </div>
              <div className="twelve">
                <img src={images14} alt="" />
              </div>
              <div className="twelve">
                <img src={images15} alt="" />
              </div>
              </Col>
            </Row>

           
        </Container>
    </section>
  )
}

export default Fourthpart
