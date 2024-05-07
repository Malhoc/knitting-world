import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";

import ProductCard from "../ProductCard";

export default function NewCollection() {
  const products = useSelector(
    (state) => state.products.allProducts
  );
  const filterProducts = () => {
    // Filter top-rated products with a rating of 5
    const topRatedProducts = products.filter((product) => product.rating === 5).slice(0, 10);
    return renderProductCards(topRatedProducts);
  };
  const renderProductCards = (filteredProducts) => {
    return filteredProducts.map((product) => (
      <div className="item" key={product.id}>
        {/* Rest of the ProductCard component code */}
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
    ));
  };

  return (
    <section className="pt-0 mt-n11">
      <div className="container">
        <Row>
          <Col>
            <div className="shadow rounded p-5 bg-white">
              <Row className="justify-content-center text-center mb-5">
                <Col lg="8" md="10">
                  <div>
                    <h6 className="text-primary mb-1">— New Collection</h6>
                    <h2 className="mb-0">Best Seller</h2>
                  </div>
                </Col>

              </Row>
              <Row>
                <Col>
                  <OwlCarousel
                    className="owl-carousel no-pb owl-2"
                    dots={false}
                    nav={true}
                    items={3}
                    responsive={{
                      0: { items: 1 },
                      576: { items: 2 },
                      768: { items: 2 },
                      992: { items: 3 },
                    }}
                    navText={["<span class='las la-arrow-left'><span></span></span>","<span class='las la-arrow-right'><span></span></span>"]}
                  >
                    {filterProducts()}
                  </OwlCarousel>

                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
