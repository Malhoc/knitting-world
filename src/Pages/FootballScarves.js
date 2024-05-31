import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import PageHeading from "../Components/PageHeading/PageHeading";
import ProductIndex from "../Components/Trending/ProductIndex";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

function FootballScarves() {
  const firstBreadcrumb = { label: "Pages" };
  const secondBreadcrumb = {
    label: "Football Scarves",
    active: true,
  };
  const options = {
    items: 1,
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
  };
  const slides = [
    {
      bgImg: "assets/images/bg/slider4.jpeg",
      title: "Leading the Knitwear Evolution",
      subtitle: "Welcome Knitting World",
      button: "Shop Now",
    },

    {
      bgImg: "assets/images/bg/banner-4.jpg",
      title: "Football Scarves Collection",
      subtitle: "2024 Latest Style",
      button: "View Collection",
    },
  ];

  return (
    <div className="page-wrapper">
      <PageHeading
        title="About Us"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section className="p-0">
          <Container>
            <div className="row   border">
              {/* image section */}
              <Col lg="7" mb="6" mbLg="0">
                <div>
                  <OwlCarousel
                    className="banner-slider owl-carousel no-pb owl-2 "
                    {...options}
                    navText={[
                      "<span class='las la-arrow-left'><span></span></span>",
                      "<span class='las la-arrow-right'><span></span></span>",
                    ]}
                  >
                    {slides.map((slide, index) => (
                        <>
                        
                      <div
                        key={index}
                        className="item bg-pos-rt"
                        style={{ backgroundImage: `url(${slide.bgImg})` }}
                      >
                        {/* <img src={slide.bgImg}/> */}
                     
                        <div className=" h-100">

                          <div className="row h-100 border">
                          <img className="d-none" src={slide.bgImg}/>

                            <div className="col-lg-7 col-md-12 custom-py-1 position-relative z-index-1">
                              {/* <h6 className=" d-none font-w-6 text-primary animated3">
                                {slide.subtitle}
                              </h6>
                              <h1 className="d-none mb-4 animated3">{slide.title}</h1>
                              <div className="d-none animated3">
                                <Link
                                  className="btn btn-primary btn-animated"
                                  to="/shop-grid-no-sidebar"
                                >
                                  {slide.button}
                                </Link>
                              </div>

                              <div className="hero-circle animated4"></div> */}
                            </div>
                          </div>

                        </div>
                      </div>
                        </>
                    ))}
                  </OwlCarousel>
                </div>
                {/* <Row className="align-items-center">
                  <Col md="6">
                    <img
                      src="assets/images/about/01.png"
                      className="img-fluid rounded shadow"
                      alt="..."
                    />
                  </Col>
                  <Col md="6">
                    <img
                      src="assets/images/about/02.jpg"
                      className="img-fluid rounded shadow mb-5"
                      alt="..."
                    />
                    <img
                      src="assets/images/about/03.jpg"
                      className="img-fluid rounded shadow"
                      alt="..."
                    />
                  </Col>
                </Row> */}
              </Col>
              <Col lg="5">
                <div>
                  <h6 className="text-primary mb-1">— About Us</h6>
                  <h2 className="mt-3 font-w-5">
                    We Have New Talents Experience
                  </h2>
                  <p className="lead">
                    At Knitting World, we weave the threads of passion and
                    performance to create knitted sports scarves and gloves that
                    transcend the ordinary.
                  </p>
                  <p className="mb-0">
                    With a commitment to quality craftsmanship, innovation, and
                    sustainability, we empower athletes and fans to embrace
                    their love for sports with style and comfort.
                  </p>
                  <p className="mb-0">
                    With a commitment to quality craftsmanship, innovation, and
                    sustainability, we empower athletes and fans to embrace
                    their love for sports with style and comfort.
                  </p>
                  <p className="mb-0">
                    With a commitment to quality craftsmanship, innovation, and
                    sustainability, we empower athletes and fans to embrace
                    their love for sports with style and comfort.
                  </p>
                  <p className="mb-0">
                    With a commitment to quality craftsmanship, innovation, and
                    sustainability, we empower athletes and fans to embrace
                    their love for sports with style and comfort.
                  </p>
                  <p className="mb-0">
                    With a commitment to quality craftsmanship, innovation, and
                    sustainability, we empower athletes and fans to embrace
                    their love for sports with style and comfort.
                  </p>
                  <p className="mb-0">
                    With a commitment to quality craftsmanship, innovation, and
                    sustainability, we empower athletes and fans to embrace
                    their love for sports with style and comfort.
                  </p>
                </div>
              </Col>
            </div>
            <ProductIndex />
          </Container>
        </section>
      </div>
    </div>
  );
}

export default FootballScarves;
