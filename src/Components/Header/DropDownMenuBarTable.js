import React from "react";
import { Link } from "react-router-dom";

function ShopDropdown({ title, shopLinks }) {
  return (
    <li className="nav-item dropdown position-static">
      <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
        {title}
      </Link>
      <div className="dropdown-menu w-100 custom-drop">
        <div className="container p-0">
          <div className="row w-100 no-gutters">
            {shopLinks.map((item) => (
              <div className="col-12 col-md-4 p-3" key={item.title}>
                <div className="mb-2 font-weight-bold">{item.title}</div>
                <ul className="list-unstyled">
                  {item.links.map((link) => (
                    <li key={link.title}>
                      <Link to={link.url}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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

export default ShopDropdown;
