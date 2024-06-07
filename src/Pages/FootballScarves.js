import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import PageHeading from "../Components/PageHeading/PageHeading";
import ProductIndex from "../Components/Trending/ProductIndex";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PGNS from "./PGNS";
import ProductListing from "./ProductListing";

function FootballScarves() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
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
      bgImg: "assets/images/about/original_personalised-football-scarf.jpg",
      title: "A New Online Shop experience",
      subtitle: "Welcome Knitting World",
      button: "Shop Now",
    },
    {
      bgImg: "assets/images/about/vector-scarf.jpg",
      title: "Leading the Knitwear Evolution",
      subtitle: "Welcome Knitting World",
      button: "Shop Now",
    },

    {
      bgImg: "assets/images/about/about4.jpeg",
      title: "Football Scarves Collection",
      subtitle: "2024 Latest Style",
      button: "View Collection",
    },
    
  ];
// "https://www.wildemasche.com/out/dd_roxive/img/fanschal-kat-slide00.jpg"
  return (
    <div className="page-wrapper">
      <PageHeading
        title="Custom Football Scarves"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section className="pt-5">
          <Container>
            <div className="row">
              {/* image section */}
              <Col lg="7" mb="6" mbLg="0" className="">

                <Slider {...settings}>
                  {slides.map((slide, index) => (
                    <div key={index} className="">
                      <img
                      className=""
                        src={slide.bgImg}
                        alt={`Image ${index + 1}`}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  ))}
                </Slider>
              
              </Col>
              <Col lg="5">
                <div className="mt-3">
                  <h6 className="text-primary mb-1">— Specifications</h6>
                  <ul
                    className="ml-3 mb-1"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      lineHeight: "1.6",
                      fontWeight: "normal",
                    }}
                  >
                    <li>
                      Football scarf with your fully customized design knitted
                      in
                    </li>
                    <li>Single pieces, NO minimum order quantity (MOQ)</li>
                    <li style={{fontWeight:'bold'}}>
                      WORLDWIDE DELIVERY, express shipping options available
                    </li>
                    <li>
                      Material: 100% soft acrylic yarn. Up to 5 colors per
                      scarf, pick from palette with 26 colors.{" "}
                    </li>
                    <li>
                      Choose standard size, kids or maxi scarf. Fringes are ca.
                      7cm on each end, so standard size including fringes is
                      about 160cm{" "}
                    </li>
                    <li>
                      Fringes / tassles made from ALL colors used in the scarf.
                      Sorry no uni color fringes possible{" "}
                    </li>
                    <li>
                      Double knit, different design for frontside / backside at
                      no extra cost{" "}
                    </li>
                    <li>
                      Depending on actual design and number of colors, size of
                      the ready scarf may vary. Use 3 or 4 colors for best
                      results. 5 color scarves usually come out wider and
                      heavier, design may be stretched. Round logos in the
                      design may not be perfectly round in the scarf.{" "}
                    </li>
                    <li>
                      Please check the COLOR NAMES given in the top bar of the
                      Online Designer, so you choose the color you want. Don't
                      confuse navy/black, dark brown/black and
                      (neon)orange/light red, they are all close together.{" "}
                    </li>
                    <li>
                      Please note color values may be different in the Online
                      Designer, product preview and actual product. Click the
                      color palette below for more details.{" "}
                    </li>
                  </ul>
                    <img
                      class="img-responsive"
                      src="https://www.wildemasche.com/out/dd_roxive/oxbaseshop/en/img/farben-acryl.png"
                      title="Farben Acryl"
                      alt="Farben Acryl"
                    />
                  {/* <ul
                    className="ml-3 specs_list"
                    style={{ color: "#8090b5", lineHeight: "1.7" }}
                  >
                    <li className="">
                      Football scarf with your fully customized design knitted
                      in
                    </li>
                    <li className="">
                      Single pieces, NO minimum order quantity (MOQ)
                    </li>
                    <li>
                    High quality full jacquard knit, not printed, not embroidered
                    </li>
                    <li className="specs_list_item">
                      WORLDWIDE DELIVERY, express shipping options available
                    </li>
                    <li className="">
                      Choose standard size, kids or maxi scarf. Fringes are ca.
                      7cm on each end, so standard size including fringes is
                      about 160cm
                    </li>
                    <li>
                      Material: 100% soft acrylic yarn. Up to 5 colors per
                      scarf, pick from palette with 26 colors.
                    </li>
                  </ul> */}
                </div>
              </Col>
            </div>
            <ProductListing />
          </Container>
        </section>
      </div>
    </div>
  );
}

export default FootballScarves;
