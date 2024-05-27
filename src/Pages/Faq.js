import React, { useState } from "react";
import { Card, Collapse, Container } from "reactstrap";
import PageHeading from "../Components/PageHeading/PageHeading";

function Faq() {
  const firstBreadcrumb = { label: "Pages" };
  const secondBreadcrumb = {
    label: "Frequently Asked Questions",
    active: true,
  };
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  const faqData = [
    {
      question: "Will My Parcel Be Charged Customs And Import Charges?",
      answer:
        "As an international customer, it's essential to be aware of potential customs and import charges that may apply to your parcel. These charges are determined by your country's customs regulations and may include duties, taxes, and other fees levied by local authorities upon the arrival of your package. To determine if your parcel will incur customs and import charges, we recommend contacting your local customs office or relevant authorities for specific information regarding duties and taxes applicable to imported goods.Additionally, it's essential to keep in mind that any customs or import charges are the responsibility of the recipient and are not included in the purchase price or shipping fees paid to [Your Company Name]. These charges are typically collected by the courier service upon delivery or may be invoiced separately by customs authorities.",
    },
    {
      question: "What Is The Estimated Delivery Time?",
      answer:
        "The estimated delivery time for your order depends on several factors, including your location, the shipping method selected, and any potential customs processing. As a general guideline, domestic orders typically arrive within 3-5 business days from the date of purchase, while international orders may take longer to reach their destination due to varying customs procedures and transit times.",
    },
    {
      question: "How does tracking my order work?",
      answer:
        "Tracking your order is a straightforward process that allows you to monitor its progress from the moment it leaves our facility to its delivery to your doorstep. Upon shipment of your order, you will receive a tracking number via email, along with instructions on how to track your package.To track your order, simply visit our website and navigate to the \"Track Order\" section, where you can enter your tracking number. Alternatively, you can use the tracking link provided in the email notification to access real-time updates on the status of your shipment.",
    },
    {
      question: "Do You Ship Internationally?",
      answer:
        "Yes! at Knitting World,we proudly offer international shipping to bring our high-quality sports scarves and gloves to customers worldwide.If you have any further questions about our international shipping options or need assistance with your order, please don't hesitate to contact us. We are here to help make your shopping experience as seamless as possible, no matter where you are in the world.",
    },
    // {
    //   question: "Which is the same as saying through?",
    //   answer:
    //     "Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.",
    // },
  ];
  return (
    <div className="page-wrapper">
      <PageHeading
        title="Frequently Asked Questions"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section>
          <Container>
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-lg-10">
                <div id="accordion" className="accordion">
                  {faqData.map((faq, index) => (
                    <Card key={index} className="border-0 mb-4">
                      <div className="card-header bg-transparent border-0">
                        <h6 className="mb-0">
                          <button
                            style={{
                              background: "transparent",
                              border: "none",
                            }}
                            className="text-dark"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={activeAccordion === index}
                          >
                            {faq.question}
                          </button>
                        </h6>
                      </div>
                      <Collapse isOpen={activeAccordion === index}>
                        <div
                          className="text-muted card-body ml-3"
                          style={{ textColor: "#8090b5" }}
                        >
                          {faq.answer}
                        </div>
                      </Collapse>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default Faq;
