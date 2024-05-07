import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ClientCarousel from './Testimonial/ClientCarousel';


function AboutUsTestimonial() {
    const testimonialData = [
        {
            id: 1,
            imgSrc: "assets/images/thumbnail/01.jpg",
            name: "Ember Lana",
            role: "Founder",
            description:
                "Ekocart Amazing E-commerce Template, clean code, Crative & Modern design.",
        },
        {
            id: 2,
            imgSrc: "assets/images/thumbnail/02.jpg",
            name: "Scott Jones",
            role: "Supervisor",
            description:
                "Ekocart Amazing E-commerce Template, clean code, Crative & Modern design.",
        },
        {
            id: 3,
            imgSrc: "assets/images/thumbnail/03.jpg",
            name: "Amber Holmes",
            role: "Manager",
            description:
                "Ekocart Amazing E-commerce Template, clean code, Crative & Modern design.",
        },
        {
            id: 4,
            imgSrc: "assets/images/thumbnail/03.jpg",
            name: "Scott Jones",
            role: "CEO",
            description:
                "Ekocart Amazing E-commerce Template, clean code, Crative & Modern design.",
        },
    ];

    return (
        <section className="mt-n11 custom-pt-1">
            <Container className='text-center'>
                <Row className='justify-content-center text-center mb-5'>
                    <Col xs={12} md={10} lg={8}>
                        <h6 className="text-primary mb-1">
                            — Testimonial
                        </h6>
                        <h2 className="mb-0">Our Client Feedback</h2>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <div className="col-12">
                        <div className="owl-carousel" data-items="3" data-md-items="3" data-sm-items="1">
                            {testimonialData.map((testimonial, index) => (
                                <div className="item" key={testimonial.id}>
                                    <div className="item">
                                        <div className="card p-5 p-lg-8 bg-white shadow-sm border-0 mx-3 mt-3">
                                            <div>
                                                <img alt="" src={testimonial.imgSrc} className="shadow-primary img-fluid rounded-circle d-inline" />
                                            </div>
                                            <div className="card-body p-0 mt-5">
                                                <p className="text-muted">{testimonial.description}</p>
                                                <div>
                                                    <h5 className="text-primary d-inline mb-0">{testimonial.name}</h5>
                                                    <small className="text-muted font-italic">- {testimonial.role}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Row>
                <ClientCarousel />
            </Container>
        </section>
    )
}

export default AboutUsTestimonial;