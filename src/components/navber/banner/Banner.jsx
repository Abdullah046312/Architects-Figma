import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import images from "../../../assets/images.png"

const Banner = () => {
  return (
    <section id='banner_main'>
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="one">
              <h2>Brand New Group of Architects </h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
              <button>Explore More</button>
            </div>
          </Col>


        </Row>
        <Row>
          <Col lg={12}>
          <div className="two">
            <img src={images} alt="" />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
