import React from "react";
import { Container, Row, Col } from "reactstrap";


const NewsletterSection = () => {
    return (
      <section className="bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-8">
            <Col lg={6} md={10}>
              <div className="mb-4">
                <h6 className="text-primary mb-1">— Newsletter</h6>
                <h2 className="mb-0">Subscribe Our Newsletter</h2>
              </div>
              <div className="subscribe-form">
                <form id="mc-form" className="row align-items-center no-gutters mb-3">
                  <Col>
                    <input
                      value=""
                      name="EMAIL"
                      className="email form-control input-2 bg-white"
                      id="mc-email"
                      placeholder="Email Address"
                      required=""
                      type="email"
                    />
                  </Col>
                  <Col xs="auto">
                    <input className="btn btn-primary overflow-auto" name="subscribe" value="Subscribe" type="submit" />
                  </Col>
                </form>
                <small>Get started for 1 Month free trial No Purchase required.</small>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
  
  export default NewsletterSection;
  