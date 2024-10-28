import React from 'react'
import "./thirdpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images7 from "../../assets/images7.png"
import images8 from "../../assets/images8.png"
import images9 from "../../assets/images9.png"
import images10 from "../../assets/images10.png"
const Thirdpart = () => {
  return (
    <section id='third'>
        <Container>
            <Row>
             <Col lg={5}>
             <div className="nine">
                <h2>Some Facts</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
             </div>
             </Col>   
             
            </Row>

            <Row>
              <Col lg={3}>
              <div className="ten">
                <img src={images7} alt="" />
                <h2>54</h2>
                <p>Awards Winnings</p>

              </div>
              </Col>
              <Col lg={3}>
              <div className="ten">
                <img src={images8} alt="" />
                <h2>1458</h2>
                <p>Project Finished</p>

              </div>
              </Col>
              <Col lg={3}>
              <div className="ten">
                <img src={images9} alt="" />
                <h2>590</h2>
                <p>Clients Worked</p>

              </div>
              </Col>
              <Col lg={3}>
              <div className="ten">
                <img src={images10} alt="" />
                <h2>22578</h2>
                <p>Email Send</p>

              </div>
              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Thirdpart
