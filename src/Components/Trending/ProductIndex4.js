import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from 'react';
import OwlCarousel from "react-owl-carousel";
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import ProductCard from '../ProductCard';

function ProductIndex4() {
  const products = useSelector((state) => state.products.allProducts);
  const electronicsProducts = products.filter((product) => product.category === "Electronic").slice(4, 8);
  const options = {
 
    responsive:{ 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 }, }
  };
  return (
<section className='p-0'> 
<Container fluid className='pl-lg-0'>
    <Row className='align-items-center'>
    <Col lg={4} className="pr-11 pt-5 custom-pb-2 rounded" style={{ backgroundImage: `url("assets/images/electronic/bg/03.jpg")` }}>
            <div className="p-5">
              <span className="bg-primary py-1 px-2 d-inline-block rounded mb-3 text-white text-uppercase">Limited Offer</span>
              <h2 className="mb-5 font-w-5 line-h-1 text-white">
                Weekly Sale<br />
                <span className="text-primary font-w-8">60% OFF</span> All Products
              </h2>
              <ul className="countdown list-inline d-flex text-white" data-countdown="2024/08/23"></ul>
            </div>
          </Col>
          <Col lg="8" className="mt-8 mt-lg-0">
      <div>
        <h6 className="text-primary mb-1">— New Collection</h6>
        <h2 className="mb-0">Special Products</h2>
      </div>
      

        <OwlCarousel className="" {...options}>
      {electronicsProducts.map((product) => (
        <div key={product.id} className='item'>
          <ProductCard
            id={product.id}
            imgBackSrc={`assets/images/${product.pictures[0]}`}
            imgFrontSrc={`assets/images/${product.pictures[1]}`}
            title={product.name}
            price={product.salePrice}
            actualPrice={product.price}
            rating={product.rating}
          />
        </div>
      ))}
    </OwlCarousel>
  </Col>
    </Row>
</Container>
</section>  )
}

export default ProductIndex4