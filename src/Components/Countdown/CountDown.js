import React from "react";

export default function CountDown() {
  return (
    <section className="pt-5 mt-5">
      <div className="container-fluid pl-0">
        <div className="row">
          <div
            className="col-md-6 col-sm-5 parallaxie custom-py-3 rounded"
            data-bg-img="assets/images/bg/03.jpg"
          ></div>
          <div className="col-md-6 col-sm-7 py-sm-0 py-5">
            <div className="pl-lg-6 pr-lg-8 p-2 pt-sm-10">
              <span className="bg-primary py-1 px-2 d-inline-block rounded mb-3 text-white text-uppercase">
                Limited Offer
              </span>
              <h2 className="mb-5 font-w-5 line-h-1">
                Weekly Sale on
                <br /> <span className="text-primary font-w-8">60% OFF</span> All
                Products
              </h2>
              <ul
                className="countdown list-inline d-flex"
                data-countdown="2024/08/23"
              ></ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
