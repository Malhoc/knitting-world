import React from "react";
import PageHeading from "../Components/PageHeading/PageHeading";
import { Col, Container, Row } from "reactstrap";

function OurStory() {
  const firstBreadcrumb = { label: "Pages", link: "/our-story" };
  const secondBreadcrumb = {
    label: "Our Story",
    link: "/our-story",
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
        title="Our Story"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section>
          <Container>
            <Row>
              <Col lg="12" md="12">
                <p>
                In 2013, driven by a passion for sports and a keen eye for quality, we embarked on a mission to bring fans closer to their favorite teams through beautifully crafted sports scarves. Our vision was simple: to create scarves that not only provide warmth and comfort but also symbolize the pride and passion of every sports enthusiast.
                </p>

                <h4 className="mt-5 text-primary">Craftsmanship and Quality</h4>
                <p>
                From the very beginning, we have been committed to the highest standards of craftsmanship. Our scarves are made from premium materials, ensuring durability and comfort. Each design is meticulously crafted to reflect the spirit of the sport and the uniqueness of every team. We believe that a sports scarf is more than just an accessory; it's a statement of loyalty and a badge of honor.
                </p>
                <h4 className="mt-5 text-primary">
                Growing Together with the Community
                </h4>
                <p>
                Over the years, our company has grown, but our values have remained the same. We are proud to have built strong relationships with sports teams, retailers, and fans worldwide. Our journey has been enriched by the support and feedback of our customers, who inspire us to innovate and improve continuously.
                </p>
                <h4 className="mt-5 text-primary">
                Innovation and Design
                </h4>
                <p>We understand that fashion and functionality go hand in hand. That's why our design team works tirelessly to stay ahead of trends, creating scarves that are not only stylish but also practical for any weather. Whether it’s a classic knit or a vibrant printed scarf, our collection caters to all tastes and preferences.</p>
                <h4 className="mt-5 text-primary">
                Sustainability and Responsibility
                </h4>
                <p>We are deeply committed to sustainability and ethical manufacturing practices. Our production processes are designed to minimize environmental impact, and we strive to source materials responsibly. We believe in giving back to the community and supporting initiatives that promote environmental conservation and social responsibility.</p>
                <h4 className="mt-5 text-primary">
                Looking to the Future
                </h4>
                <p>As we look to the future, we are excited about the opportunities ahead. We aim to expand our product range and reach even more fans around the globe. Our dedication to quality, innovation, and customer satisfaction will continue to drive us forward.</p>

              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default OurStory;
