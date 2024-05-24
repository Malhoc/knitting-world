import React from "react";
import { Container, Row, Col } from "reactstrap";
const LogoSection = ({ logos }) => {
  return (
    <section className="p-0 mt-n11">
      <Container>
        <Row>
          <Col>
            <div className="d-flex flex-wrap align-items-center text-center bg-white shadow">
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

export default LogoSection;
