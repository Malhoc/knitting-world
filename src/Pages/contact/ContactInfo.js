import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

const ContactInfo = ({ contactInfo }) => {
  return (
    <div>
      <img
        className="img-fluid rounded-4 mb-3"
        src="images/contact-img.jpg"
        alt=""
      />
      <p className="font-w-6">
        We help companies develop powerful corporate social responsibility,
        grantmaking, and employee engagement strategies.{" "}
      </p>
      <Row>
        {contactInfo.map((info, index) => (
          <Col md={6} key={index}>
            <h6>{info.region}:</h6>
            <ul className="contact-info list-unstyled">
              <li className="mb-4 text-dark">
                <i className="text-primary fs-4 align-middle bi bi-geo-alt me-2"></i>{" "}
                {info.address}
              </li>
              <li className="mb-4">
                <i className="text-primary fs-4 align-middle bi bi-telephone me-2"></i>
               <Link  className="btn-link" to={`tel:${info.phone}`}>
                  {info.phone}
                </Link>
              </li>
              <li>
                <i className="text-primary fs-4 align-middle bi bi-envelope me-2"></i>
                <Link className="btn-link" to={`mailto:${info.email}`}>
                  {info.email}
                </Link>
              </li>
            </ul>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContactInfo;
