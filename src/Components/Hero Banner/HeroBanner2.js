import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';


function HeroBanner2() {
  const options = {
    items: 1,
    nav: false,
    dots: false,
    autoplay: true,
    loop: true,

  };

  const slides = [
    {
      bgImg: "assets/images/bg/06.jpg",
      title: "New Arrival",
      subtitle: "Trendy Fashion Sale",
      button: "Shop Now",
    },
    {
      bgImg: "assets/images/bg/05.jpg",
      title: "Simplify Everything",
      subtitle: "",
      button: "Shop Now",
    },
  ];

  return (
    <div>
      <section className="banner pos-r p-0">
        <div className="px-lg-8">
          <Row>
            <Col lg={3}>
              <div className="navbar navbar-expand-lg navbar-light categories d-block shadow-sm">
                <button className="navbar-toggler d-flex align-items-center text-uppercase" type="button" aria-controls="categoriesDropdown" aria-expanded="false" aria-label="Toggle navigation"> <i className="las la-stream"></i>Categories</button>
                <div className="" id="categoriesDropdown">
                  <ul className="navbar-nav d-block w-100">
                    <li className="nav-item"> <Link className="nav-link" to="#">Men</Link>
                    </li>
                    <li className="nav-item"> <Link className="nav-link" to="#">Women</Link>
                    </li>
                    <li className="nav-item"> <Link className="nav-link" to="#">Kids</Link>
                    </li>
                    <li className="nav-item"> <Link className="nav-link" to="#">Accessories</Link>
                    </li>
                    <li className="nav-item"> <Link className="nav-link" to="#">Clothing</Link>
                    </li>
                    <li className="nav-item"> <Link className="nav-link" to="#">Bags</Link>
                    </li>
                    <li className="nav-item"> <Link className="nav-link" to="#">Footwear</Link>
                    </li>
                    <li className="nav-item"> <Link className="nav-link" to="#">Watches</Link>
                    </li>
                    <li className="nav-item"> <Link className="nav-link" to="#">Jewellery</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="9">
              <OwlCarousel className="banner-slider owl-carousel no-pb h-100" {...options}  navText={["<span class='las la-arrow-left'><span></span></span>","<span class='las la-arrow-right'><span></span></span>"]}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="item"
                    style={{ backgroundImage: `url(${slide.bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    <div className="container h-100">
                      <div className="row h-100 align-items-center">
                        <div className="col pl-lg-8 py-11 py-lg-0">
                          <h6 className="letter-space-1 animated3">{slide.subtitle}</h6>
                          <h1 className="mb-4 animated3 text-white line-h-1">{slide.title}</h1>
                          <div className="animated3">
                            <Link className="btn btn-dark" to="#">
                              {slide.button}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </Col>
          </Row>
        </div>
      </section>

    </div>
  )
}

export default HeroBanner2