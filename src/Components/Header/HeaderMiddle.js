import React from "react";
import { Link } from "react-router-dom";

export default function HeaderMiddle(props) {
  const { options } = props;
  const makeCall = () => {
    console.log('Making Call');
    const phoneNumber = 'tel:03224188002'; 
    // Open the default phone app with the specified number
    window.open(phoneNumber, '_blank');
  };
  return (
    <>
      <div className="py-md-3 py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-none d-md-flex align-items-center">
              <Link className="navbar-brand logo d-none d-lg-block" to="/">
                <img className="img-fluid" src="assets/images/knitting-world.png" alt="" />
              </Link>
              <div className="media ml-lg-11">
                <i className="las la-mobile-alt ic-2x bg-white rounded p-2 shadow-sm mr-2 text-primary"></i>
                <div className="media-body">
                  <span className="mb-0 d-block">Call Us</span>
                  <Link className="text-muted" to={makeCall} onClick={makeCall}>
                    +44-0208-1276-480                    
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="right-nav align-items-center d-flex justify-content-end">
                <form className="form-inline border rounded w-100">
                  <select className="custom-select border-0 rounded-0 bg-light form-control d-none d-lg-inline">
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <input
                    className="form-control border-0 border-left col"
                    type="search"
                    placeholder="Enter Your Keyword"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-primary text-white col-auto"
                    type="submit"
                  >
                    <i className="las la-search"></i>
                  </button>
                </form>
              </div>
            </div>
            {/* <!--menu end--> */}
          </div>
        </div>
      </div>
    </>
  );
}
