import React from "react";

function TestimonialItem({ imgSrc, name, role, description }) {
  return (
    <div className="item">
      <div className="card p-5 p-lg-8 bg-primary-soft border-0">
        <div>
          <img
            alt=""
            src={imgSrc}
            className="shadow-primary img-fluid rounded-circle d-inline"
          />
        </div>
        <div className="card-body p-0 mt-5">
          <p className="text-muted">{description}</p>
          <div>
            <h5 className="text-primary d-inline mb-0">{name}</h5>
            <small className="text-muted font-italic">- {role}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
