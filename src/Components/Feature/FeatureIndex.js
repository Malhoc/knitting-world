import React from "react";

export default function FeatureIndex({ feature }) {
  return (
    <div>
      <section className="pb-0">
        <div className="container">
          <div className="row">
            {feature.map((feature, index) => (
              <div key={index} className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                <div className="d-flex">
                  <div className="mr-2">
                    <i className={feature.icon + " ic-2x text-primary"}></i>
                  </div>
                  <div>
                    <h5 className="mb-1">{feature.title}</h5>
                    <p className="mb-0">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
