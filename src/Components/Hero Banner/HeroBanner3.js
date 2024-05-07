import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const HeroBanner3 = () => {
  return (
    <section className="banner pos-r p-0 bg-pos-rt pb-11" style={{ backgroundImage: 'url(assets/images/bg/05.jpg)' }}>
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Col lg="7" md="12" className="custom-py-1 position-relative z-index-1">
            <h1 className="mb-4 animated3 line-h-1">
              <span className="text-primary">Latest</span> Fabric<br />
              <span className="bg-dark px-2 pt-2 text-uppercase text-white">Fashion</span> Sale
            </h1>
            <div className="animated3">
              <Button className="btn-primary btn-animated">Shop Now</Button>
            </div>
            <div className="hero-circle animated4 bg-light ml-n10"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroBanner3;
