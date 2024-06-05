import React from "react";
import PageHeading from "../Components/PageHeading/PageHeading";
import { Container, Row, Col, Button } from "reactstrap";

function tAndC() {
    const firstBreadcrumb = { label: "Pages", link: "/terms-and-conditions" };
    const secondBreadcrumb = {
        label: "Terms & Condition",
        link: "/terms-and-conditions",
        active: true,
    };
    const data = [
        {
            title: "Validate",
            content:
                "hese terms and conditions are valid for all customers of Wildemasche GmbH & CO KG (called Wildemasche in the following) outside of Germany and their orders placed at Wildemasche.com. These terms apply in preference to and supersede any terms and conditions preferred to offered or relied on by the buyer whether in negotiation or at any stage in the dealings between the seller and buyer with reference to the goods to which this contract relates. Without prejudice to the generality of the foregoing, the seller will not be bound by any of its documents or printed terms furnished by the buyer in any of its documents unless the buyer specifically states in writing separately from such terms that it intends such terms to apply and the seller acknowledges such notification in writing. Neither the buyer nor the seller shall be bound by any variation, waiver of, or addition to these conditions except as agreed by both parties in writing and signed on their behalf.",
        },
        {
            title: "Price",
            content:
                "All prices quoted are in EURO including German VAT and are subject to change without notice. Wildemasche attempts to make all information accurate and current but typing mistakes may occur. Although great care is been taken no responsibility can be accepted for price errors.",
        },
        {
            title: "Delivery and passage of the risk",
            content:
                "The goods will be shipped ex works Plüderhausen / Germany at the customer's risk and will remain the entire property of Wildemasche until fully paid for. Any damage on the packaging should be reported immediately to the forwarder. The delivery or performance dates specified in the contract are approximate only and unless expressly stated time is not of the essence for delivery. The seller will not be liable in any circumstances for the consequences of any delay caused by strikes, lockouts, fire, accidents, defective materials, delays in receipt of raw materials or brought in goods or components or any other causes beyond the reasonable control of the seller. No delay shall entitle the buyer to reject any delivery or any further installment or to repudiate the contract.",
        },
        {
            title: "Customs duty and foreign taxes",
            content:
                "The customer is responsible for any costs involved with customs clearing, import duties, import taxes or any additional shipping charges or costs that appear in his country and/or in the country he wants to have the goods shipped to.",
            // items: [
            //     "Lorem ipsum dolor sit amet, consectetur",
            //     "Quidem error quae illo excepturi nostrum blanditiis laboriosam",
            //     "Molestias, eum nihil expedita dolorum odio dolorem",
            //     "Eum nihil expedita dolorum odio dolorem",
            //     "Explicabo rem illum magni perferendis",
            // ],
        },
        {
            title: "Delivery",
            content:
                "All shipping charges are to be paid by the customer and are shown when checking out in the customers shopping cart. They are billed with the ordered goods. The delivery time ex works Plüderhausen / Germany depends on the country the order is to be shipped to. For details and costs, see shipping options in the cart when checking out, or check the Shipping & Payment section linked from the footer at Wildemasche.com",
        },
        {
            title:"",
            content:""
        },
        {
            title:"",
            content:""
        },
        {
            title:"",
            content:""
        },
        {
            title:"",
            content:""
        },
        {
            title:"",
            content:""
        },
        {
            title:"",
            content:""
        },
        {
            title:"",
            content:""
        },
        {
            title:"",
            content:""
        },
    ];
    return (
        <div className="page-wrapper">
            <PageHeading
                title="Terms & Conditions"
                firstBreadcrumb={firstBreadcrumb}
                secondBreadcrumb={secondBreadcrumb}
            />
            <section>
                <Container>
                    <Row>
                        <Col lg="12" md="12">
                            {data.map((section, index) => (
                                <div key={index}>
                                    <h4 className="text-dark mt-5">{section.title}</h4>
                                    <p className="mb-3">{section.content}</p>
                                    {section.items && section.items.length > 0 && (
                                        <React.Fragment>
                                            {section.items.map((item, itemIndex) => (
                                                <div
                                                    className="d-flex align-items-center mb-3"
                                                    key={itemIndex}
                                                >
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
                                                    <p className="mb-0 ms-3">{item}</p>
                                                </div>
                                            ))}
                                        </React.Fragment>
                                    )}
                                </div>
                            ))}
                            {/* <div className="d-flex mt-5">
                                <Button color="primary" className="me-1">
                                    Accept
                                </Button>
                                <Button color="dark">Close</Button>
                            </div> */}
                        </Col>
                    </Row>
                </Container>
            </section>
            );
        </div>
    );
}

export default tAndC;
