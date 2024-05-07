import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const products = [
  {
    imgSrc: 'assets/images/product-ad/05.jpg',
    title: 'Summer Collection',
    subtitle: 'Women Fashion',
  },
  {
    imgSrc: 'assets/images/product-ad/06.jpg',
    title: 'Bag Collection',
    subtitle: 'New Trend',
  },
];

const Section2 = () => {
  return (
    <section>
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col xs={12} lg={6} key={index} className={index !== 0 ? 'mt-5 mt-lg-0' : ''}>
              <div className="position-relative rounded overflow-hidden text-right shadow-sm">
                {/* Background */}
                <img className="img-fluid hover-zoom" src={product.imgSrc} alt="" />
                {/* Body */}
                <div className="position-absolute top-50 pl-5 text-left">
                  <h6 className="text-dark">{product.title}</h6>
                  {/* Heading */}
                  <h3 className="font-w-7">{product.subtitle}</h3>
                  {/* Link */}
                  <Button color="primary" size="sm" className="btn-animated">Shop Now</Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Section2;
