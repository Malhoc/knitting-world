import React from "react";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux/es";
import { Button, Col, Row } from "reactstrap";

function ProductIndex2() {
  const trendingproducts = useSelector(
    (state) => state.products.allProducts
  ).slice(0, 4);
  return (
    <>
      <section className="pb-0">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-10">
              <div className="mb-8">
                <h6 className="text-primary mb-1">— New Collection</h6>
                <h2 className="mb-0">Trending Products</h2>
              </div>
            </div>
          </div>
          <div className="row">

            {trendingproducts.map((product) => (

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
          </div>
          <Row className="justify-content-center text-center mt-6">
            <Col>
              <Button color="dark" href="shop-grid-left-sidebar">View All Product</Button>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default ProductIndex2;
