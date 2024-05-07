import classnames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";

import ProductCard from "../ProductCard";

export default function ProductIndex5() {
  const [activeTab, setActiveTab] = useState("1");
  const products = useSelector((state) => state.products.allProducts);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const filterProducts = () => {
    if (activeTab === "1") {
      // Filter top-rated products with a rating of 5
      const topRatedProducts = products.filter((product) => product.rating === 5 && product.category === "Furniture").slice(0, 6);
      return renderProductCards(topRatedProducts);
    } else if (activeTab === "2") {
      // Display the first 10 products
      const firstTenProducts = products.filter((product) => product.category === "Furniture").slice(1, 7);
      return renderProductCards(firstTenProducts);
    } else if (activeTab === "3") {
      // Display the first 10 products with the highest stock
      const sortedProducts = products.filter((product) => product.category === "Furniture").sort((a, b) => b.stock - a.stock);
      const highestStockProducts = sortedProducts.slice(0, 6);
      return renderProductCards(highestStockProducts);
    }
  };

  const renderProductCards = (products) => {
    return products.map((product) => (
      <Col lg="4" md="6" key={product.id}>
        <ProductCard
          id={product.id}
          imgBackSrc={`assets/images/${product.pictures[0]}`}
          imgFrontSrc={`assets/images/${product.pictures[1]}`}
          title={product.name}
          price={product.salePrice}
          actualPrice={product.price}
          rating={product.rating}
        />
      </Col>
    ));
  };

  return (
    <div>
      <section>
        <Container>
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-6 col-md-10">
              <div>
                <h6 className="text-primary mb-1">
                  — New Collection
                </h6>
                <h2 className="mb-0">Our Products</h2>
              </div>
            </div>
          </div>
          <Row>
            <Col>
              <Nav tabs className="mb-5 text-center nav nav-tabs d-flex justify-content-center" >
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => toggle("1")}
                  >
                    Top Rated
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => toggle("2")}
                  >
                    New Arrivals
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => toggle("3")}
                  >
                    Highest Stock
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab} className="tab-content p-0">
                <TabPane tabId="1">
                  <Row>{filterProducts()}</Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>{filterProducts()}</Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>{filterProducts()}</Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
