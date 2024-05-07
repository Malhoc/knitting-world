import React from "react";
import { Container, Row, Col } from "reactstrap";

const FeatureFurniture   = () => {
  const services = [
    {
      icon: "las la-truck ic-2x text-primary",
      title: "Free Shipping",
      description: "Writing result-oriented",
    },
    {
      icon: "las la-hand-holding-usd ic-2x text-primary",
      title: "Money Return",
      description: "Writing result-oriented",
    },
    {
      icon: "las la-lock ic-2x text-primary",
      title: "Secure Payment",
      description: "Writing result-oriented",
    },
    {
      icon: "las la-headset ic-2x text-primary",
      title: "24/7 Support",
      description: "Writing result-oriented",
    },
  ];

  return (
    <section>
      <Container>
        <Row>
          {services.map((service, index) => (
            <Col key={index} lg="3" sm="6" className="mt-3 mt-sm-0">
              <div className="d-flex bg-white rounded p-3 shadow-sm">
                <div className="mr-2">
                  <i className={service.icon}></i>
                </div>
                <div>
                  <h5 className="mb-1">{service.title}</h5>
                  <p className="mb-0">{service.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeatureFurniture;
