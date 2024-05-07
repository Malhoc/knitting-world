import React, { useState } from 'react';
import { Card, Collapse, Container } from 'reactstrap';
import PageHeading from '../Components/PageHeading/PageHeading';


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
            question: 'What Are The Delivery Charges?',
            answer:
                'Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.',
        },
        {
            question: 'What Is The Estimated Delivery Time?',
            answer:
                'Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.',
        },
        {
            question: 'What To Track Order Work?',
            answer:
                'Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.',
        },
        {
            question: 'Will My Parcel Be Charged Customs And Import Charges?',
            answer:
                'Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.',
        },
        {
            question: 'Do You Ship Internationally?',
            answer:
                'Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.',
        },
        {
            question: 'Which is the same as saying through?',
            answer:
                'Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.',
        },
    ];
    return (
        <div className='page-wrapper'>
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
                                            <div className='card-header bg-transparent border-0'>
                                                <h6 className="mb-0">
                                                    <button
                                                        style={{ background: 'transparent', border: 'none' }}
                                                        className="text-dark"
                                                        onClick={() => toggleAccordion(index)}
                                                        aria-expanded={activeAccordion === index}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                </h6>
                                            </div>
                                            <Collapse isOpen={activeAccordion === index}>
                                                <div className="text-muted card-body ml-3" style={{ textColor: '#8090b5' }}>{faq.answer}</div>
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
    )
}

export default Faq