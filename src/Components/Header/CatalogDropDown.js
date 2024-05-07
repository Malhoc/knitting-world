import React from "react";
import { Link } from "react-router-dom";

function CatalogDropDown({ title, catalogoryLinks }) {
  return (
    <li className="nav-item dropdown position-static">
      <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
        {title}
      </Link>
      <div className="dropdown-menu w-100">
        <div className="container p-0">
          <div className="row w-100 no-gutters">
            <div className="col-lg-8 p-lg-3">
              <div className="row">
                <div className="col-12 col-md-3 col-sm-6">
                  <div className="mb-3 font-weight-bold">Clothing</div>
                  <ul className="list-unstyled mb-6 mb-md-0">
                    <li>
                      <Link to="shop-grid-left-sidebar">All Clothing</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">
                        Top, T-Shirts & Shirts
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">
                        Lingerie & Sleepwear
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">
                        Leggings & Jeggings
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">
                        Kurtas & Kurtis
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">
                        Dresses & Skirts
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">
                        {" "}
                        Jumpers & Cardigans{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                  <div className="mb-3 font-weight-bold">Shoes & Boots</div>
                  <ul className="list-unstyled mb-6 mb-md-0">
                    <li>
                      <Link to="/shop-grid-left-sidebar">
                        All Shoes & Boots
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-grid-left-sidebar">Branded Shoes</Link>
                    </li>
                    <li>
                      <Link to="/shop-grid-left-sidebar">Boots</Link>
                    </li>
                    <li>
                      <Link to="/shop-grid-left-sidebar">Heels</Link>
                    </li>
                    <li>
                      <Link to="/shop-grid-left-sidebar">Sandals</Link>
                    </li>
                    <li>
                      <Link to="/shop-grid-left-sidebar">Shoes</Link>
                    </li>
                    <li>
                      <Link to="/shop-grid-left-sidebar">Wide Fit Shoes</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                  <div className="mb-3 font-weight-bold">Bags & Accessories</div>
                  <ul className="list-unstyled mb-0">
                    <li>
                      {" "}
                      <Link to="shop-grid-left-sidebar">
                        All Bags & Accessories
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">Accessories</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">Bags & Purses</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">Shoulder Bags</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">Skin Care</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">Hair Accessories</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">
                        Artificial Jewellery
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                  <div className="mb-3 font-weight-bold">Collections</div>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link to="shop-grid-left-sidebar">All Collections</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">
                        Winter & Seasonal Wear
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">Beauty & Grooming</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">Ballerinas</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">Party Dresses</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-left-sidebar">Ethnic Wear</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <img
                className="img-fluid rounded-bottom rounded-top"
                src="assets/images/header-img2.jpg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CatalogDropDown;
