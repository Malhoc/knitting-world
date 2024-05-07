import React from "react";
import { Container, Row, Col } from "reactstrap";

const LogoSection2 = ({ logos }) => {
  return (
    <section className="pb-0">
      <Container>
      <Row className="row justify-content-center text-center mb-8">
      <Col lg={6} md={10}>
        <div>
          <h6 className="text-primary mb-1">
                  — Shop Brands
              </h6>
          <h2 className="mb-0">Top Brands of this Month</h2>
        </div>
      </Col>
    </Row>
        <Row >
          <Col xs={12}>
            <div className="d-flex flex-wrap align-items-center text-center ">
              {logos.map((logo, index) => (
                <div className="clients-logo" key={index}>
                  <img className="img-fluid" src={logo} alt={`Logo ${index}`} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LogoSection2;
