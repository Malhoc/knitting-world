import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const ElectronicAd = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12} lg={4} md={6}>
            <div className="position-relative rounded overflow-hidden">
              {/* Background */}
              <img className="img-fluid hover-zoom" src="assets/images/electronic/product-ad/01.jpg" alt="" />
              {/* Body */}
              <div className="position-absolute top-50 pl-5">
                <h6 className="text-white">Apple Collection</h6>
                {/* Heading */}
                <h3 className="text-white font-w-8">
                  <span className="d-block">Sell On</span> Smart Devices
                </h3>
                {/* Link */}
                <Link className="btn btn-sm btn-primary btn-animated" to="/shop-grid-left-sidebar">
                  Shop Now
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={4} md={6} className="mt-5 mt-md-0">
            <div className="position-relative rounded overflow-hidden">
              {/* Background */}
              <img className="img-fluid hover-zoom" src="assets/images/electronic/product-ad/02.jpg" alt="" />
              {/* Body */}
              <div className="position-absolute top-50 pl-5">
                {/* Heading */}
                <h3 className="font-w-7 bg-primary d-inline px-2 py-1 text-white">
                  Best Electronic Product
                </h3>
                <br />
                {/* Link */}
                <Link className="btn btn-sm btn-dark btn-animated mt-3" to="#">
                  Shop Now
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={4} md={12} className="mt-5 mt-lg-0">
            <div className="position-relative rounded overflow-hidden">
              {/* Background */}
              <img className="img-fluid hover-zoom" src="assets/images/electronic/product-ad/03.jpg" alt="" />
              {/* Body */}
              <div className="position-absolute top-50 pl-5">
                <h6 className="text-dark">New Trend</h6>
                {/* Heading */}
                <h3 className="font-w-7">
                  Portable
                  <br />
                  Speaker
                </h3>
                {/* Link */}
                <Link className="btn btn-sm btn-primary btn-animated" to="/shop-grid-left-sidebar">
                  Shop Now
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ElectronicAd;
