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
          {/* <h6 className="font-w-6 text-primary animated3 mb-2">About</h6> */}
          {/* <h1 className="mb-3 animated3 font-w-5">
            New Arrival <span className="font-w-8">Modern Chair</span>
          </h1> */}
          {/* Product Development */}
          <div>
            <h6 className="text-primary mb-1">— Product Development</h6>
            <h2 className="mb-0">Graceful Sporting Elegance</h2>
          </div>
          <p className="mb-4 animated3">
            At Knitting World, foresight is our forte. With a relentless
            commitment to innovation, we're perpetually expanding our knitted
            product lines, unveiling a spectrum of evolving creations to remain
            at the forefront of contemporary trends and revolutionize the
            knitwear landscape. Take a look to see our all{" "}
            <Link to="/shop-grid-no-sidebar">products</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Process;
