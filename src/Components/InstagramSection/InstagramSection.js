import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const InstagramSection = () => {
  return (
    <section className="p-0">
      <Container fluid className="p-0">
        <Row className="no-gutters">
          <Col lg="4" md="8" className="order-lg-1 align-items-center d-flex justify-content-center bg-dark p-5">
            <div className="d-flex align-items-center">
              <img className="img-fluid" src="assets/images/insta/instagram-logo.png" alt="" />
              <div className="ml-3">
                <h6 className="text-white mb-0">Follow Us on</h6>
                <h3 className="text-white mb-0">Instagram</h3>
              </div>
            </div>
          </Col>
          <Col lg="2" md="4" sm="6" className="col-6">
           <Link className="insta-item" href="#">
              <img className="img-fluid" src="assets/images/insta/01.jpg" alt="" />
              <div className="insta-icon"><i className="lab la-instagram"></i></div>
            </Link>
          </Col>
          <Col lg="2" md="4" sm="6" className="col-6">
           <Link className="insta-item" href="#">
              <img className="img-fluid" src="assets/images/insta/02.jpg" alt="" />
              <div className="insta-icon"><i className="lab la-instagram"></i></div>
           </Link>
          </Col>
          <Col lg="2" md="4" sm="6" className="col-6 order-lg-1">
           <Link className="insta-item" href="#">
              <img className="img-fluid" src="assets/images/insta/03.jpg" alt="" />
              <div className="insta-icon"><i className="lab la-instagram"></i></div>
           </Link>
          </Col>
          <Col lg="2" md="4" sm="6" className="col-6 order-lg-1">
           <Link className="insta-item" href="#">
              <img className="img-fluid" src="assets/images/insta/04.jpg" alt="" />
              <div className="insta-icon"><i className="lab la-instagram"></i></div>
           </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InstagramSection;
