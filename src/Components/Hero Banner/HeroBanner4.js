import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';


function HeroBanner4() {
  const options = {
    items: 1,
    nav: false,
    dots: false,
    autoplay: true,
    loop: true,
    margin: 5
  };

  const slides = [
    {
      bgImg: "assets/images/electronic/bg/01.jpg",
      title: "Only This Week",
      subtitle: "25% OFF On Product",
      text: "Latest Stylish",
      text2: "Mackbook"
    },
    {
      bgImg: "assets/images/electronic/bg/02.jpg",
      title: "Only This Week",
      subtitle: "25% OFF On Product",
      text: "New Arrived",
      text2: "Iphone Pro"
    },
  ];

  return (
    <div>
      <section className="banner pos-r p-0 mt-5">
        <Container >
          <Row>
            <Col lg={3}>
              <nav className="navbar navbar-expand-lg navbar-light categories d-block shadow-sm">
                <button className="navbar-toggler d-flex align-items-center text-uppercase" type="button" aria-controls="categoriesDropdown" aria-expanded="false" aria-label="Toggle navigation"> <i className="las la-stream"></i>Categories</button>
                <div className=" navbar-collapse" id="categoriesDropdown">
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
              </nav>
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
                        <div className="col py-8 py-lg-0">
                          <div className="animated3"> <span className="bg-dark d -inline-block text-white px-2 py-1 mb-0">{slide.title}</span>
                            <br />
                            <h5 className="bg-primary d-inline-block text-white font-w-7 px-3 py-1">{slide.subtitle}</h5>
                          </div>
                          <h1 className="mt-4 animated3" >{slide.text}<br /> {slide.text2}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  )
}

export default HeroBanner4;