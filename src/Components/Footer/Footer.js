import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="py-11 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              {" "}
              <Link className="footer-logo text-white h2 mb-0" to="/">
                Knitting<span className="text-primary">World</span>
              </Link>
              <p className="my-3 text-muted">
                Creating warmth stitch by stitch, our business crafts cozy
                scarves and gloves, knitting comfort into every thread for your
                winter embrace.
              </p>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link className="text-light ic-2x" to="#">
                    <i className="la la-facebook"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-light ic-2x" to="#">
                    <i className="la la-dribbble"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-light ic-2x" to="#">
                    <i className="la la-instagram"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-light ic-2x" to="#">
                    <i className="la la-twitter"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-light ic-2x" to="#">
                    <i className="la la-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6 mt-6 mt-lg-0 ">
              <div className="row flex justify-content-center">
                <div className="col-12 col-sm-4 navbar-dark">
                  <h5 className="mb-4 text-white">Quick Links</h5>
                  <ul className="navbar-nav list-unstyled mb-0">
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="about-us">
                        About
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="shop-grid-left-sidebar">
                        Shop
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="faq">
                        Faq
                      </Link>
                    </li>
                    {/* <li className="mb-3 nav-item">
                      <Link className="nav-link" to="blog-card">
                        Blogs
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" to="contact-us">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                  <h5 className="mb-4 text-white">Top Products</h5>
                  <ul className="navbar-nav list-unstyled mb-0">
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="#">
                        T-Shirts
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="#">
                        Sneakers & Athletic
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="#">
                        Shirts & Tops
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="#">
                        Sunglasses
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="#">
                        Bags & Wallets
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="#">
                        Accessories
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Shoes
                      </Link>
                    </li>
                  </ul>
                </div> */}
                <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                  <h5 className="mb-4 text-white">Features</h5>
                  <ul className="navbar-nav list-unstyled mb-0">
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="terms-and-conditions">
                        Term Of Service
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="privacy-policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="#">
                        Support
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="/shipping-and-return">
                        Shipping & Returns
                      </Link>
                    </li>
                    {/* <li className="mb-3 nav-item">
                      <Link className="nav-link" to="#">
                        Careers
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/our-story">
                        Our Story
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 mt-6 mt-lg-0">
              <div className="d-flex mb-3">
                <div className="mr-2">
                  {" "}
                  <i className="las la-map ic-2x text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-1 text-light">Address</h6>
                  <p className="mb-0 text-muted">
                    Unit 26, Etloe Road Leyton Business Centre E10 7BT, London
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="mr-2">
                  {" "}
                  <i className="las la-envelope ic-2x text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-1 text-light">Email Us</h6>
                  <Link
                    className="text-muted"
                    to="#"
                  >
                    {" "}
                    info@knittingworld.co.uk{" "}
                  </Link>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="mr-2">
                  {" "}
                  <i className="las la-mobile ic-2x text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-1 text-light">Phone Number</h6>
                  <Link className="text-muted" to="#">
                    +44-0208-1276-480<br/>
                    +44-0744-844-8694
                  </Link>
                </div>
              </div>
              <div className="d-flex">
                <div className="mr-2">
                  {" "}
                  <i className="las la-clock ic-2x text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-1 text-light">Working Hours</h6>
                  <span className="text-muted">Mon - Fri: 8AM - 6PM</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-8" />
          <div className="row text-muted align-items-center">
            <div className="col-md-7">
              Copyright ©2020 All rights reserved |
              {/* <i className="lar la-heart text-primary heartBeat2"></i>{" "} */}
              {/* <u>
                <Link className="text-primary" to="#">
                  SkyTouch Infotech
                </Link>
              </u> */}
            </div>
            <div className="col-md-5 text-md-right mt-3 mt-md-0">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src="assets/images/pay-icon/01.png"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src="assets/images/pay-icon/02.png"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src="assets/images/pay-icon/03.png"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src="assets/images/pay-icon/04.png"
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
