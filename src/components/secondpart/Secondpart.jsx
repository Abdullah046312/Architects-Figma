import React from 'react'
import "./secondpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images5 from "../../assets/images5.png"
import images6 from "../../assets/images6.png"

const Secondpart = () => {
  return (
    <section id='second'> 
        <Container>
            <Row>
               <Col lg={5}>
               <div className="five">
                <h2>Features you will love & enjoy</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
               </div>

               <Row>
                <Col lg={12}>
                <div className="seven">
                  <h4>Dexktop & Mobile Version</h4>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </div>
                </Col>
                <Col lg={12}>
                <div className="seven">
                  <h4>Drag & Drop Builder</h4>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </div>
                </Col>
                <Col lg={12}>
                <div className="seven">
                  <h4>Awesome Modern Design</h4>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </div>
                </Col>
                <Col lg={12}>
                <div className="seven">
                  <h4>Super Easy to Edit</h4>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </div>
                </Col>
               </Row>
               
               </Col> 
               <Col lg={{span:6, offset:1}}>
               <div className="six">
                <img src={images5} alt="" />
                <div className="eight">
                  <img src={images6} alt="" />
                </div>

               </div>
               
               </Col> 
            </Row>
        </Container>
    </section>
  )
}

export default Secondpart
