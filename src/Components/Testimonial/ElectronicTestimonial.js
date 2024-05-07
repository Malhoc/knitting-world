import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimonialItem from './TestimonialItem';
import ClientCarousel from './ClientCarousel';


function ElectronicTestimonial() {
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
      imgSrc: "assets/images/thumbnail/02.jpg",
      name: "Scott Jones",
      role: "CEO",
      description:
        "Ekocart Amazing E-commerce Template, clean code, Crative & Modern design.",
    },
  ];
  return (
    <section className="bg-light mt-n11 custom-pt-1">
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
          <OwlCarousel
            className="owl-carousel owl-center owl-2"
            loop
            margin={10}
            nav
            center
            dots={false}
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 2,
              },
              992: {
                items: 3,
              },
            }}
            
          >
            {testimonialData.map((testimonial, index) => (
              <div className="item" key={testimonial.id}>
                <TestimonialItem id={index} imgSrc={testimonial.imgSrc}
                  name={testimonial.name}
                  role={testimonial.role}
                  description={testimonial.description} />
              </div>
            ))}
          </OwlCarousel>
        </Row>
        <ClientCarousel />
      </Container>
    </section>
  )
}

export default ElectronicTestimonial