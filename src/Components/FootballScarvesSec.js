import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const FootballScarvesSec = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg="7" md="12" className="order-lg-0">
          <img
            className="img-fluid"
            src="assets/images/about/custom-scarves.jpg"
            alt=""
          />
        </Col>
        <Col lg="5" md="12" className="mt-5 mt-lg-0">
          {/* <h6 className="font-w-6 text-primary animated3 mb-2">About</h6> */}
          {/* <h1 className="mb-3 animated3 font-w-5">
            New Arrival <span className="font-w-8">Modern Chair</span>
          </h1> */}
          {/* Product Development */}
          <div className="ml-3">
            <h6 className="text-primary mb-1">— Specifications</h6>
            <h2 className="mb-0">Custom Football Scarves</h2>
          <ul className="ml-2 specs_list" style={{color:'#8090b5', lineHeight:'1.7'}}>
            <li className="">
              Football scarf with your fully customized design knitted in
            </li>
            <li className="">Single pieces, NO minimum order quantity (MOQ)</li>
            <li className="specs_list_item">
              WORLDWIDE DELIVERY, express shipping options available
            </li>
            <li className="">
            Choose standard size, kids or maxi scarf. Fringes are ca. 7cm on each end, so standard size including fringes is about 160cm
            </li>
            <li>Material: 100% soft acrylic yarn. Up to 5 colors per scarf, pick from palette with 26 colors.</li>
          </ul>
          </div>
          {/* <p className="mb-4 animated3">
            At Knitting World, foresight is our forte. With a relentless
            commitment to innovation, we're perpetually expanding our knitted
            product lines, unveiling a spectrum of evolving creations to remain
            at the forefront of contemporary trends and revolutionize the
            knitwear landscape. Take a look to see our all{" "}
            <Link to="/shop-grid-no-sidebar">products</Link>
          </p> */}
        </Col>
      </Row>
    </Container>
  );
};

export default FootballScarvesSec;
