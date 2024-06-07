import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import InstagramSection from "../Components/InstagramSection/InstagramSection";
import PageHeading from "../Components/PageHeading/PageHeading";

function AboutUs() {
  const firstBreadcrumb = { label: "Pages" };
  const secondBreadcrumb = {
    label: "About Us",
    active: true,
  };
  const reasonsData = [
    {
      icon: <i className="las la-credit-card ic-3x text-primary"></i>,
      title: "Credit Card",
      // description: "Serspiciatis unde omnis iste natus error sit.",
    },
    {
      icon: <i className="las la-shipping-fast ic-3x text-primary"></i>,
      title: "Order Tracking",
      // description: "Serspiciatis unde omnis iste natus error sit.",
    },
    {
      icon: <i className="las la-history ic-3x text-primary"></i>,
      title: "24/7 Support",
      // description: "Serspiciatis unde omnis iste natus error sit.",
    },
    {
      icon: <i className="las la-undo-alt ic-3x text-primary"></i>,
      title: "30 Days Returns",
      // description: "Serspiciatis unde omnis iste natus error sit.",
    },
  ];
  return (
    <div className="page-wrapper">
      <PageHeading
        title="About Us"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section className="p-0">
          <Container>
            <div className="row align-items-center justify-content-between">
              <Col lg="7" mb="6" mbLg="0">
                <Row className="align-items-center">
                  <Col md="6">
                    <img
                      src="assets/images/about/01.png"
                      className="img-fluid rounded shadow"
                      alt="..."
                    />
                  </Col>
                  <Col md="6">
                    <img
                      src="assets/images/about/02.jpg"
                      className="img-fluid rounded shadow mb-5"
                      alt="..."
                    />
                    <img
                      src="assets/images/about/03.jpg"
                      className="img-fluid rounded shadow"
                      alt="..."
                    />
                  </Col>
                </Row>
              </Col>
              <Col lg="5">
                <div>
                  <h6 className="text-primary mb-1">— About Us</h6>
                  <h2 className="mt-3 font-w-5">
                    We Have New Talents Experience
                  </h2>
                  <p className="lead">
                    At Knitting World, we weave the threads of passion and
                    performance to create knitted sports scarves and gloves that
                    transcend the ordinary.
                  </p>
                  <p className="mb-0">
                    With a commitment to quality craftsmanship, innovation, and
                    sustainability, we empower athletes and fans to embrace
                    their love for sports with style and comfort.
                  </p>
                </div>
              </Col>
            </div>
            <Row className="mt-8">
              <Col lg="4" md="4">
                <h5>
                  <span className="text-primary font-w-7">01.</span> Our Mission
                </h5>
                <p>
                  Our mission is to craft high-performance knitted sports
                  scarves and gloves that elevate the experience of athletes and
                  supporters worldwide.
                </p>
              </Col>
              <Col lg="4" md="4">
                <h5>
                  <span className="text-primary font-w-7">02.</span> Our Vision
                </h5>
                <p>
                  To be the premier provider of knitted sports accessories,
                  inspiring athletes and fans alike with our innovative designs,
                  superior quality, and unwavering commitment to excellence.
                </p>
              </Col>
              <Col lg="4" md="4">
                <h5>
                  <span className="text-primary font-w-7">03.</span> Our Value
                </h5>
                <p>
                  Crafting superior knitted sports accessories with innovation
                  and quality, we inspire passion and performance while
                  championing sustainability and community engagement.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row className="align-items-end mb-5">
              <Col lg="6">
                <div>
                  <h6 className="text-primary mb-1">— Why Choose Us</h6>
                  <h2 className="mb-0">
                    We Are Known For Our Abilities Markets.
                  </h2>
                </div>
              </Col>
              <Col lg="6">
                <div>
                  <p className="lead mb-0">
                    Choose Knitting World for unparalleled quality, innovation,
                    sustainability, and passion for sports.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center">
              {reasonsData.map((reason, index) => (
                <Col lg="3" md="6" key={index}>
                  <div className="px-4 py-7 rounded text-center border">
                    {reason.icon}
                    <h5 className="mt-2 mb-1">{reason.title}</h5>
                    <p className="mb-0">{reason.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <InstagramSection />
      </div>
    </div>
  );
}

export default AboutUs;
