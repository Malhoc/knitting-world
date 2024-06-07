import React from "react";
import PageHeading from "../Components/PageHeading/PageHeading";
import { Col, Container, Row } from "reactstrap";

function ShipAndReturn() {
  const firstBreadcrumb = { label: "Pages", link: "/shipping-and-return" };
  const secondBreadcrumb = {
    label: "Shipping And Return",
    link: "/shipping-and-return",
    active: true,
  };
  const data = [
    {
      subheading: "Processing Time:",
      text: "Orders are typically processed within 1-2 business days.",
    },
    {
      subheading: "Shipping Options:",
      text: "We offer standard, expedited, and express shipping options. Shipping times and costs vary based on your location and the selected shipping method.",
    },
    {
      subheading: "Delivery Time:",
      text: "Standard shipping usually takes 3-5 business days, while expedited shipping takes 1-3 business days. Express shipping ensures delivery within 1-2 business days.",
    },
  ];
  const internationalData = [
    {
      subheading: "Processing Time:",
      text: "Orders are processed within 1-2 business days.",
    },
    {
      subheading: "Shipping Options:",
      text: "We offer international standard and expedited shipping options. Delivery times and costs depend on the destination country.",
    },
    {
      subheading: "Customs and Duties:",
      text: "International orders may be subject to customs fees, import duties, and taxes, which are the responsibility of the recipient. Please check with your local customs office for more information.",
    },
  ];
  const returnPolicyData = [
    {
      subheading: "Condition:",
      text: "Items must be returned in their original condition, unworn, and with all tags attached.",
    },
    {
      subheading: "Packaging:",
      text: "Please return items in their original packaging to ensure they are protected during shipping.",
    },
    {
      subheading: "Exclusions:",
      text: " Custom or personalized items are not eligible for returns unless they are defective or damaged.",
    },
  ];
  const returnData = [
    {
      subheading: "Contact Us:",
      text: "Email our customer service team at [your email address] with your order number and reason for return.",
    },
    {
      subheading: "Receive Instructions:",
      text: "We will provide you with return instructions and a return shipping label.",
    },
    {
      subheading: "Pack and Ship:",
      text: "Pack your items securely and attach the provided shipping label. Drop off the package at your nearest shipping location.",
    },
  ];
  const refundData = [
    {
      subheading: "Processing Time:",
      text: "Refunds are processed within 5-7 business days of receiving the returned item.",
    },
    {
      subheading: "Original Payment Method:",
      text: "Refunds will be issued to the original payment method used for the purchase.",
    },
    {
      subheading: "Shipping Costs:",
      text: "Original shipping costs are non-refundable, and return shipping costs are the responsibility of the customer unless the item is defective or incorrect.",
    },
  ];

  return (
    <div className="page-wrapper">
      <PageHeading
        title="Shipping And Return"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section>
          <Container>
            <Row>
              <Col lg="12" md="12">
                <p>
                  At Knitting World, we are dedicated to providing you with a
                  seamless shopping experience from start to finish. Our
                  comprehensive shipping and returns policies are designed to
                  ensure your satisfaction with every purchase. Whether you're
                  shopping domestically or internationally, we strive to deliver
                  your order promptly and securely. In the unlikely event that
                  you need to return or exchange an item, our hassle-free
                  process makes it easy and convenient. Read on for detailed
                  information about our shipping options, tracking your order,
                  and our straightforward returns and exchanges policy.
                </p>

                <h4 className="mt-5 text-primary">Shipping Information</h4>
                <h5 className="mt-3 text-dark">Domestic Shipping</h5>
                <p>
                  We are committed to ensuring that your orders are delivered
                  promptly and securely. Here's what you can expect:
                </p>
                {data.map((item, index) => (
                  <div className="d-flex align-items-center mb-3" key={index}>
                    <div className="bg-light rounded px-2 py-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="mb-0 ms-3">
                      <span className="text-dark" style={{ fontWeight: "600" }}>
                        {item.subheading}&nbsp;
                      </span>
                      {item.text}
                    </p>
                  </div>
                ))}
                <h5 className="mt-3 text-dark">International Shipping</h5>
                <p>
                  We proudly ship to customers around the world. Please note the
                  following:
                </p>
                {internationalData.map((item, index) => (
                  <div className="d-flex align-items-center mb-3" key={index}>
                    <div className="bg-light rounded px-2 py-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>

                    <p className="mb-0 ms-3">
                      <span className="text-dark" style={{ fontWeight: "600" }}>
                        {item.subheading}&nbsp;
                      </span>
                      {item.text}
                    </p>
                  </div>
                ))}

                <h5 className="mt-3 text-dark">Order Tracking</h5>
                <p>
                  Once your order has been shipped, you will receive a
                  confirmation email with a tracking number. You can use this
                  number to track your order on the carrier's website.
                </p>

                <h4 className="mt-5 text-primary">Returns and Exchanges</h4>
                <h5 className="mt-3 text-dark">Return Policy</h5>
                <p>
                  We want you to be completely satisfied with your purchase. If
                  for any reason you are not, you may return items within 30
                  days of receipt for a full refund or exchange, subject to the
                  following conditions:
                </p>
                {returnPolicyData.map((item, index) => (
                  <div className="d-flex align-items-center mb-3" key={index}>
                    <div className="bg-light rounded px-2 py-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>

                    <p className="mb-0 ms-3">
                      <span className="text-dark" style={{ fontWeight: "600" }}>
                        {item.subheading}&nbsp;
                      </span>
                      {item.text}
                    </p>
                  </div>
                ))}
                <h5 className="mt-3 text-dark">How to Return an Item</h5>
                <p>To initiate a return, please follow these steps:</p>
                {returnData.map((item, index) => (
                  <div className="d-flex align-items-center mb-3" key={index}>
                    <div className="bg-light rounded px-2 py-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>

                    <p className="mb-0 ms-3">
                      <span className="text-dark" style={{ fontWeight: "600" }}>
                        {item.subheading}&nbsp;
                      </span>
                      {item.text}
                    </p>
                  </div>
                ))}
                <h5 className="mt-3 text-dark">Refunds</h5>
                {refundData.map((item, index) => (
                  <div className="d-flex align-items-center mb-3" key={index}>
                    <div className="bg-light rounded px-2 py-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>

                    <p className="mb-0 ms-3">
                      <span className="text-dark" style={{ fontWeight: "600" }}>
                        {item.subheading}&nbsp;
                      </span>
                      {item.text}
                    </p>
                  </div>
                ))}
                <h5 className="mt-3 text-dark">Exchanges</h5>
                <p>
                  If you wish to exchange an item, please contact our customer
                  service team at [your email address]. We will guide you
                  through the exchange process and ensure you receive the
                  desired item as quickly as possible.
                </p>
                <h5 className="mt-3 text-dark">Contact Us</h5>
                <p className="mb-5">
                  If you have any questions or need further assistance, please
                  do not hesitate to contact our customer service team at
                  info@knittingworld.co.uk or call us at +44-0208-1276-480. We
                  are here to help!
                </p>
                <hr />
                <p className="mt-5">
                  This draft provides clear and comprehensive information about
                  your shipping and returns policies, helping to set customer
                  expectations and ensure a smooth process. Feel free to adjust
                  any details to better fit your company's specific practices
                  and contact information.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default ShipAndReturn;
