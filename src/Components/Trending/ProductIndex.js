import React from "react";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux/es";

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
        </div>
      </section>
    </>
  );
}

export default ProductIndex;
