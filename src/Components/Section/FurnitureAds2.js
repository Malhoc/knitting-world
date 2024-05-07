import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap'

function FurnitureAds2() {
    const sectionStyle = {
        backgroundImage: 'url(assets/images/furniture/01.png)',
      };
  return (
    <div>
    <section className="custom-py-1 parallaxie" style={sectionStyle}>
    <Container >
      <Row className="row">
        <Col xs={12} lg={6} > 
           <h4 className="mb-3"><span className="text-primary">2020</span> Collection</h4>
           <h2 className="mb-3 font-w-7">New Top Trendy Furniture Accessories</h2>
           <Link className="btn btn-primary btn-animated" to="/shop-grid-left-sidebar"><i className="las la-shopping-cart mr-1"></i> Shop Now</Link>
        </Col>
      </Row>
    </Container>
  </section>
  </div>
  )
}

export default FurnitureAds2