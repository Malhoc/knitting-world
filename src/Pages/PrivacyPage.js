import React from "react";
import PageHeading from "../Components/PageHeading/PageHeading";
import { Col, Container, Row } from "reactstrap";

function PrivacyPage() {
  const firstBreadcrumb = { label: "Pages", link: "/privacy-policy" };
  const secondBreadcrumb = {
    label: "Privacy & Policy",
    link: "/privacy-policy",
    active: true,
  };
  const data = [
    {
      text: "We collect personal information, such as name, email address, and shipping address, to facilitate transactions and provide services.",
    },
    {
      text: "Your personal information is used for order processing, communication, and customization of your experience.",
    },
    {
      text: "We may also collect non-personal information, such as browsing history and device information, to enhance our services and website functionality.",
    },
    {
      text: "Your personal information is stored securely and accessed only by authorized personnel.",
    },
    {
      text: "We adhere to applicable data protection laws and regulations regarding the handling of personal information.",
    },
  ];
  const disclosurData = [
    {
      text: "We do not sell, trade, or rent personal information to third parties without your consent.",
    },
    {
      text: "Personal information may be disclosed to trusted third-party service providers who assist in website operation, order fulfillment, and customer support.",
    },
    {
      text: "We may disclose personal information if required by law or to protect our rights, property, or safety, or that of others.",
    },
  ];
  return (
    <div className="page-wrapper">
      <PageHeading
        title="Privacy & Policy"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section>
          <Container>
            <Row>
              <Col lg="12" md="12">
                <p>
                  At Knitting World, we value your privacy and are committed to
                  protecting your personal information.Our Privacy Policy
                  outlines how we collect, use, and safeguard your data when you
                  interact with our website or make purchases from us.
                </p>
                <p>
                  We use this information to process your orders, fulfill your
                  requests, customize your experience, and keep you informed
                  about our latest products, promotions, and updates. Rest
                  assured that we are committed to handling your information
                  responsibly and in accordance with applicable data protection
                  laws.
                </p>
                <p>
                  We collect various types of information from our users to
                  provide and improve our services, communicate with you, and
                  enhance your overall experience with Knitting World. This
                  information may include personal details such as your name,
                  email address, shipping address, and payment information, as
                  well as non-personal data like your browsing activity and
                  device information.
                </p>
                <h4 className="mt-5 text-primary">Personal Information</h4>
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
                    <p className="mb-0 ms-3">{item.text}</p>
                  </div>
                ))}
                <p className="mt-5">
                  We adhere to all applicable data protection laws and
                  regulations to safeguard your privacy and maintain the
                  confidentiality of your information.
                </p>
                <h4 className="mt-5 text-primary">Use of User Information.</h4>
                <p>
                  We utilize the information provided by users solely for the
                  purposes outlined in this Privacy Policy. This includes
                  facilitating transactions, communicating with users regarding
                  their orders, and customizing their experiences on our
                  platform. Additionally, non-personal information collected,
                  such as browsing history and device data, is used to analyze
                  trends, improve website functionality, and personalize user
                  experiences. We do not engage in the use of personal
                  information for marketing purposes without explicit user
                  consent, ensuring that user data is respected and protected in
                  accordance with applicable privacy laws and regulations.
                </p>
                <h4 className="mt-5 text-primary">
                  Disclosure of User Information.
                </h4>
                <p>
                  We prioritize the protection of your personal information and
                  adhere to strict security measures to ensure its
                  confidentiality.
                </p>
                {disclosurData.map((item, index) => (
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
                    <p className="mb-0 ms-3">{item.text}</p>
                  </div>
                ))}
                <p className="mt-5 mb-0">
                  We are committed to transparency and will only disclose your
                  information to trusted third-party service providers or when
                  required by law to protect your rights and ensure the
                  integrity of our services.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPage;
