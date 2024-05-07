import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap'
import { setSelectedProduct } from '../../store/reducer/productReducer';
import { Link } from 'react-router-dom';

function NewCollection3() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.allProducts);
  const ProductItem = ({ product }) => {
    return (
      <div className="media align-items-center mb-4">
        <Link className="card-img-hover d-block" to="/product-left-image" onClick={() => {
          dispatch(setSelectedProduct(product.id));
        }}>
          <img className="rounded" src={`assets/images/${product.pictures[0]}`} alt="Product" width="100" />
        </Link>
        <div className="media-body ml-2">
          <div className="product-title">
            <Link className="link-title" to="/product-left-image" onClick={() => {
              dispatch(setSelectedProduct(product.id));
            }}>
              {product.name}
            </Link>
          </div>
          <div className="star-rating">
            {[...Array(product.rating)].map((_, index) => (
              <i key={index} className="las la-star"></i>
            ))}
          </div>
          <span className="product-price">
            <del className="text-muted">${product.price.toFixed(2)}</del> ${product.salePrice.toFixed(2)}
          </span>
        </div>
      </div>
    );
  };
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <h5 className="mb-5 font-w-5"><span className="text-primary">—</span> New Arrived</h5>
                  {products.slice(4, 8).map((product, index) => (
                    <ProductItem key={index} product={product} />
                  ))}
                </div>
                <div className="col-lg-4 col-md-6 mt-8 mt-md-0">
                  <h5 className="mb-5 font-w-5"><span className="text-primary">—</span> Best Seller</h5>
                  {products.filter((product) => product.rating === 4).slice(0, 4).map((product, index) => (
                    <ProductItem key={index} product={product} />
                  ))}
                </div>
                <div className="col-lg-4 col-md-6 mt-8 mt-lg-0">
                  <h5 className="mb-5 font-w-5"><span className="text-primary">—</span> Featured Item</h5>
                  {products.filter((product) => product.stock > 29).slice(0, 4).map((product, index) => (
                    <ProductItem key={index} product={product} />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default NewCollection3