import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function KidsAds() {
  return (
    <div> <section className="p-0">
    <Container fluid className="p-0">
      <Row noGutters>
        <Col md={6}>
          <div className="position-relative overflow-hidden shadow-sm">
            {/* Background */}
            <img className="img-fluid w-100 hover-zoom" src="assets/images/kids/product-ad/01.jpg" alt="" />
            {/* Body */}
            <div className="position-absolute top-50 right-0 pr-5">
              <h6>Baby Collection</h6>
              <h3 className="mb-4 text-white">Baby Trend Cloth <span className="font-w-7 d-block">50% Off</span></h3>
              <Link className="btn btn-sm btn-primary btn-animated" to="/shop-grid-left-sidebar">Shop Now</Link>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="position-relative overflow-hidden shadow-sm">
            {/* Background */}
            <img className="img-fluid w-100 hover-zoom" src="assets/images/kids/product-ad/02.jpg" alt="" />
            <div className="position-absolute top-50 pl-5">
              <h6>2020 Collection</h6>
              <h3 className="mb-0">New Toys <span className="font-w-7 d-block text-primary">Arrived</span></h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section></div>
  )
}

export default KidsAds