import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


function FurnitureAds() {
  return (
    <section className="p-0">
      <Container fluid>
        <Row>
          <Col xs="12" lg="6">
            <div className="position-relative rounded overflow-hidden">
              {/* Background */}
              <img className="img-fluid hover-zoom" src="assets/images/furniture/product-ad/01.jpg" alt="" />
              {/* Body */}
              <div className="position-absolute top-0 pl-5 pt-5">
                <h6 className="text-dark">Ekocart Furniture</h6>
                {/* Heading */}
                <h3>
                  #Latest Collection <br />
                  <span className="text-primary font-w-7">Off 50%</span>
                </h3>
                {/* Link */}
                <Link className="btn btn-sm btn-primary btn-animated" to="/shop-grid-left-sidebar">
                  Shop Now
                </Link>
              </div>
            </div>
          </Col>
          <Col xs="12" lg="6" className="mt-5 mt-lg-0">
            <div className="position-relative rounded overflow-hidden">
              {/* Background */}
              <img className="img-fluid hover-zoom" src="assets/images/furniture/product-ad/02.jpg" alt="" />
              {/* Body */}
              <div className="position-absolute top-0 pl-5 pt-5">
                <h6 className="text-dark">New Arrived</h6>
                {/* Heading */}
                <h3>
                  Wooden Table Beside
                  <br />
                  Sofa Chair
                </h3>
                {/* Link */}
                <Link className="btn btn-sm btn-primary btn-animated" to="#">
                  Shop Now
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FurnitureAds;
