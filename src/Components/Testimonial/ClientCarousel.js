import React from "react";
import OwlCarousel from "react-owl-carousel";

function ClientCarousel() {
  const clientImages = [
    "assets/images/client/01.png",
    "assets/images/client/02.png",
    "assets/images/client/03.png",
    "assets/images/client/04.png",
    "assets/images/client/05.png",
    "assets/images/client/06.png",
    "assets/images/client/07.png",
    "assets/images/client/08.png",
  ];

  const renderClientImages = () => {
    return clientImages.map((image, index) => (
      <div key={index} className="item">
        <img className="img-fluid d-inline" src={image} alt="" />
      </div>
    ));
  };

  return (
    <div className="row mt-8">
      <div className="col-12">
        <OwlCarousel
          className="owl-carousel no-pb"
          dots={false}
          items={5}
          responsive={{
            0: { items: 1 },
            576: { items: 3 },
            992: { items: 5 },
          }}
          
        >
          {renderClientImages()}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default ClientCarousel;
