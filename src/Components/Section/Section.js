import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";


const Section = () => {
    return (
      <section>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={8}>
              <div className="position-relative rounded overflow-hidden text-right shadow-sm">
                {/* Background */}
                <img className="img-fluid hover-zoom" src="assets/images/product-ad/01.jpg" alt="" />
                {/* Body */}
                <div className="position-absolute top-50 pl-5 text-left">
                  <h6 className="text-dark">New Women's Collection</h6>
                  {/* Heading */}
                  <h3>
                    <span className="font-w-7 text-primary d-block">50% OFF</span> Popular Items!
                  </h3>
                  {/* Link */}
                  <Link className="btn btn-sm btn-primary btn-animated" to="/shop-grid-left-sidebar">
                    Shop Now
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} className="mt-5 mt-md-0">
              <div className="position-relative rounded overflow-hidden">
                <img className="img-fluid w-100 hover-zoom" src="assets/images/product-ad/02.jpg" alt="" />
                <div className="position-absolute top-50 pl-5">
                  <h4 className="mb-0">New Men's<br /> Collection</h4>
                </div>
              </div>
              <div className="position-relative rounded overflow-hidden mt-5 shadow-sm">
                <img className="img-fluid w-100 hover-zoom" src="assets/images/product-ad/03.jpg" alt="" />
                <div className="position-absolute top-50 pl-5">
                  <h4 className="mb-0">Leather Bags<br /> And Purses</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
  
  export default Section;