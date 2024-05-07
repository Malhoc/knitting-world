import React from "react";
import { Link } from "react-router-dom";
const PageHeading = ({
  title,
  animationSrc,
  firstBreadcrumb,
  secondBreadcrumb,
}) => {
  return (
    <section className="bg-light">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h1 className="h2 mb-0">{title}</h1>
      </div>
      <div className="col-md-6 mt-3 mt-md-0">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-md-end bg-transparent p-0 m-0">
            <li className="breadcrumb-item">
              <Link className="text-dark" to="/">
                <i className="las la-home mr-1"></i>Home
              </Link>
            </li>
            <li className="breadcrumb-item">{firstBreadcrumb.label}</li>
            <li className="breadcrumb-item active text-primary" aria-current="page">
              {secondBreadcrumb.label}
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* / .row */}
  </div>
  {/* / .container */}
</section>

  );
};

export default PageHeading;
