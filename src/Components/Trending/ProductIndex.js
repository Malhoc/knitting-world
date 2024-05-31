import React from "react";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux/es";
import { Col, Container, Row } from "reactstrap";
function ProductIndex() {
  const trendingproducts = useSelector(
    (state) => state.products.allProducts
  ).slice(0, 8);
  return (
    <>
      <section>
        <div className="container-fluid px-lg-8">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-10">
              <div className="mb-8">
                <h6 className="text-primary mb-1">— Our Main Collection</h6>
                <h3 className="mb-0">Samples below, all designs can be customized</h3>
              </div>
            </div>
          </div>
          <Container>
          <div className="row">
            {trendingproducts.map((product) => (
              <div className=" col-xl-3 col-lg-4 col-md-6 xl:ml-5 xl:mr-5" key={product.id}>
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
          </Container>
        </div>
      </section>
    </>
  );
}

export default ProductIndex;
