import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

function HeroBanner6() {
  const owlOptions = {
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      }
    }
  };
  const bannerItems = [
    {
      backgroundImage: "url(assets/images/kids/bg/01.jpg)",
      title: "Welcome Ekocart Kids",
      subtitle: "New Arrival Kids Toys",
      buttonLabel: "Shop Now"
    },
    {
      backgroundImage: "url(assets/images/kids/bg/02.jpg)",
      title: "2020 Latest Style",
      subtitle: "Trending Men's Collection",
      buttonLabel: "View Collection"
    }
  ];

  return (
    <div> <section className="banner pos-r p-0">
      <OwlCarousel className="banner-slider owl-carousel no-pb owl-2" {...owlOptions}  navText={["<span class='las la-arrow-left'><span></span></span>","<span class='las la-arrow-right'><span></span></span>"]}>
        {bannerItems.map((item, index) => (
          <div key={index} className="item" style={{ backgroundImage: item.backgroundImage, backgroundPosition: 'cover' }}>
            <div className="container h-100">
              <div className="row  align-items-center text-center">
                <div className="col-lg-6 col-md-12 custom-py-1 position-relative z-index-1">
                  <h6 className="font-w-6 text-primary animated3">{item.title}</h6>
                  <h1 className="mb-4 animated3">{item.subtitle}</h1>
                  <div className="animated3">
                    <Link className="btn btn-primary btn-animated" to="#">{item.buttonLabel}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </section></div>
  )
}

export default HeroBanner6;