import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Process = () => {
  return (
   <Container>

      <Row className="align-items-center">
      <Col lg="6" md="12" className="order-lg-0">
          <img
            className="img-fluid"
            src="assets/images/home-sec/product-dev.png"
            alt=""
          />
        </Col>   
        <Col lg="6" md="12" className="mt-5 mt-lg-0">
          <h6 className="font-w-6 text-primary animated3 mb-2">
           About
          </h6>
          <h1 className="mb-3 animated3 font-w-5">
            New Arrival <span className="font-w-8">Modern Chair</span>
          </h1>
          <div>
              <h6 className="text-primary mb-1">— Product Development</h6>
              <h2 className="mb-0">Graceful <span className="font-w-8">Sporting Elegance</span></h2>
            </div>
          <p className="mb-4 animated3">
            Our Product lights dominion divide years for fourth have don't stars
            is that saying ights dominion divide years for fourth have
          </p>
        </Col>
        
      </Row>
   </Container>
  
  );
};

export default Process;
