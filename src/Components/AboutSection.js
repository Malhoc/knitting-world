import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg="6" md="12" className="order-lg-1">
          <img
            className="img-fluid"
            src="assets/images/furniture/hero/01.png"
            alt=""
          />
        </Col>
        <Col lg="6" md="12" className="mt-5 mt-lg-0">
          {/* <h6 className="font-w-6 text-primary animated3 mb-2">
           About
          </h6>
          <h1 className="mb-3 animated3 font-w-5">
            New Arrival <span className="font-w-8">Modern Chair</span>
          </h1> */}
          <div>
            <h6 className="text-primary mb-1">— About</h6>
            <h3 className="mb-0">Proudly Supporting Your Team<br/> Since 2013</h3>
          </div>
          <p className="mb-4 animated3">
            Welcome to <span className="text-primary">Knitting World</span>, the wholesale destination for
            premium knitted scarves and gloves. With a dedication to excellence
            and a passion for craftsmanship, we craft timeless accessories that
            blend warmth, comfort, and style. From cozy scarves to durable
            gloves, our extensive range caters to retailers and distributors
            worldwide. Experience the difference of quality knitwear designed to
            inspire at KnittinG World, where every stitch tells a story of
            enduring style and unmatched craftsmanship.
          </p>
          <div className="animated3">
            <Link className="btn btn-primary btn-animated" to="/about-us">
              Know More About Us
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
