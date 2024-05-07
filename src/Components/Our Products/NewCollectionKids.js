import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import ProductCard from '../ProductCard';

function NewCollectionKids() {
    const products = useSelector    ((state) => state.products.allProducts);
    const kidsProducts = products.filter((product) => product.category === "Kids").slice(0, 8);
  return (
    <div>
    <section>
        <Container>
            <Row className='justify-content-center text-center'>
                <Col lg={8} md={10}>
                <div>
          <h6 className="text-primary mb-1">
                  — New Collection
              </h6>
          <h2 className="mb-0">Trending Products</h2>
        </div>
                </Col>
            </Row>
        <Row>
        {kidsProducts.map((product) => (
              
              <div className="col-xl-3 col-lg-4 col-md-6" key={product.id}>
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
          </Row>
        </Container>

    </section>
    </div>
  )
}

export default NewCollectionKids;