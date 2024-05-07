import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import classnames from "classnames";

import ProductCard from "../ProductCard";

export default function NewCollection() {
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
      const topRatedProducts = products.filter((product) => product.rating === 5).slice(0, 3);
      return renderProductCards(topRatedProducts);
    } else if (activeTab === "2") {
      // Display the first 10 products
      const firstTenProducts = products.slice(4, 7);
      return renderProductCards(firstTenProducts);
    } else if (activeTab === "3") {
      // Display the first 10 products with the highest stock
      const highestStockProducts = products.slice(8, 11);
      return renderProductCards(highestStockProducts);
    }
    return null;
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
    <section className="tab p-0 mt-n15">
      <div className="container-fluid pr-sm-0">
        <Row>
          <Col lg="10" md="11" className="ml-auto">
            <div className="shadow p-sm-8 p-3 bg-white">
              <Row className="align-items-end mb-6">
                <Col lg="6">
                  <div>
                    <h6 className="text-primary mb-1">— New Collection</h6>
                    <h2 className="mb-0">Our Products</h2>
                  </div>
                </Col>
                <Col lg="6" className="text-lg-right mt-4 mt-lg-0">
                  <Nav tabs className="flex-column flex-lg-row">
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => {
                          toggle('1');
                        }}
                      >
                        Latest Products
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => {
                          toggle('2');
                        }}
                      >
                        Best Seller
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => {
                          toggle('3');
                        }}
                      >
                        Featured Products
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
              <Row>
                <Col>
                  <TabContent activeTab={activeTab} className="tab-content">
                    <TabPane tabId="1" className="">

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
                    </TabPane>
                    <TabPane tabId="2" className=" ">
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
                    </TabPane>
                    <TabPane tabId="3" className="">
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
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
