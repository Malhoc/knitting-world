import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';

function KidsAd2() {
    const sectionStyle = {
        backgroundImage: 'url(assets/images/kids/bg/03.jpg)',
      };
  return (
    <div> <section className="custom-py-1 parallaxie" style={sectionStyle}>
    <Container>
      <Row className="justify-content-center text-center">
        <Col xs={12} lg={8}>
          <h2 className="mb-5 font-w-5 h1">
            Latest Collection <span className="text-primary font-w-8">OFF 50%</span> All Products
          </h2>
          <Button className="btn btn-primary btn-animated" href="#">
            <i className="las la-shopping-cart mr-1"></i> Shop Now
          </Button>
        </Col>
      </Row>
    </Container>
  </section></div>
  )
}

export default KidsAd2