import React from "react";
import { Container, Row, Col } from "reactstrap";

const features = [
  {
    icon: "las la-truck ic-2x text-white",
    title: "Free Shipping",
    description: "Writing result-oriented",
  },
  {
    icon: "las la-hand-holding-usd ic-2x text-white",
    title: "Money Return",
    description: "Writing result-oriented",
  },
  {
    icon: "las la-lock ic-2x text-white",
    title: "Secure Payment",
    description: "Writing result-oriented",
  },
  {
    icon: "las la-headset ic-2x text-white",
    title: "24/7 Support",
    description: "Writing result-oriented",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-primary py-6">
      <Container>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} lg="3" sm="6" className="mt-3 mt-sm-0">
              <div className="d-flex border border-light p-3">
                <div className="mr-2">
                  <i className={feature.icon}></i>
                </div>
                <div>
                  <h5 className="mb-1 text-light">{feature.title}</h5>
                  <p className="mb-0 text-light">{feature.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeatureSection;
