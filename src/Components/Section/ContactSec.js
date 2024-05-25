import React from 'react'
import { Container, Row, Col } from "reactstrap";
// import ContactForm from '../../Pages/contact/ContactForm';
import ContactForm from '../../Pages/contact/ContactForm';

const ContactSec = () => {
  
  return (
    <section className="bg-light">
    <Container>
      <Row className="justify-content-center text-center mb-8">
        <Col lg={6} md={10}>
          <div className="mb-4">
            <h6 className="text-primary mb-1">— Contact Us</h6>
            <h2 className="mb-0">We’d love to hear from you.</h2>
          </div>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col lg={9} md={10}>
        {/* <div className="d-flex flex-wrap align-items-center text-center bg-white shadow">
            <ContactForm />
          </div> */}
        <ContactForm />
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default ContactSec