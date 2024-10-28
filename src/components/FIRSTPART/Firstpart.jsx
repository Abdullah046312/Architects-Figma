import React from 'react'
import "./firstpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images1 from "../../assets/images1.png"
import images2 from "../../assets/images2.png"
import images3 from "../../assets/images3.png"
import images4 from "../../assets/images4-1.png"

const Firstpart = () => {
  return (
    <section id='first'>
        <Container>
            <Row>
                <Col lg={6}>
                <Row>
                    <Col lg={6}>
                <div className="three">
                    <img src={images1} alt="" />
                    
                </div>
                    
                    </Col>
                    <Col lg={6}>
                <div className="three">
                    <img src={images2} alt="" />
                    
                </div>
                    
                    </Col>
                    <Col lg={6}>
                <div className="three">
                    <img src={images3} alt="" />
                    
                </div>
                    
                    </Col>
                    <Col lg={6}>
                <div className="three">
                    <img src={images4} alt="" />
                    
                </div>
                    
                    </Col>
                </Row>
                </Col>
                <Col lg={{span:5, offset:1}}>
                <div className="four">
                    <h2>Quick list of Our <h3>Features</h3> </h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
                    <button>Explore More</button>

                </div>
                </Col>
            </Row>

           
        </Container>
    </section>
  )
}

export default Firstpart
