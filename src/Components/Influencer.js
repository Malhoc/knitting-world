import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Influencer = () => {
  return (
   <Container>
      <Row className="align-items-center">
      <Col lg="6" md="12" className="order-lg-1">
          <img
            className="img-fluid"
            src="assets/images/home-sec/influencer.png"
            alt=""
          />
        </Col>   
        <Col lg="6" md="12" className="mt-5 mt-lg-0">
          <div>
              <h6 className="text-primary mb-1">— INFLUENCERS</h6>
              <h2 className="mb-0">Where Quality Knits and Athleticism Meet</h2>
            </div>
          <p className="mb-4  mr-lg-3 animated3 ">
          Sportswear aficionados, rejoice! At Knitting World, we've got your sporting essentials covered. With over three decades of expertise in crafting premium knitted goods for diverse events, we're your trusted partner in sports apparel, exporting globally on a weekly basis. Hailing proudly from the UK, our brand stands tall as a beacon of reliability and excellence, known for our unwavering commitment to quality and prompt service.
          </p>
        </Col>
        
      </Row>
   </Container>
  
  );
};

export default Influencer;
