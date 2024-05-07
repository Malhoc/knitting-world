import React from 'react';
import { Container, Row, Col, Button, Form, Input } from 'reactstrap';

const CountDown3 = () => {
  return (
    <section className="bg-light pt-11 mt-n11">
      <Container>
        <Row>
          <Col>
            <div className="bg-white rounded p-6 py-11 bg-pos-rt bg-sm-none" data-bg-img="assets/images/product-ad/05.jpg">
              <Row>
                <Col md={6}>
                  <span className="bg-primary py-1 px-2 d-inline-block rounded mb-3 text-white text-uppercase">Limited Offer</span>
                  <h2 className="mb-5 font-w-5">Weekly Sale on <span className="text-primary font-w-8">60% OFF</span> All Products</h2>
                  <ul className="countdown list-inline d-flex" data-countdown="2024/08/23"></ul>
                  <div className="subscribe-form mt-6">
                    <Form id="mc-form" className="row align-items-center no-gutters mb-3">
                      <Col>
                        <Input value="" name="EMAIL" className="email form-control input-2 bg-white" id="mc-email" placeholder="Email Address" required type="email" />
                      </Col>
                      <Col xs="auto">
                        <Button color="primary" className="overflow-auto" name="subscribe" type="submit">Subscribe</Button>
                      </Col>
                    </Form>
                    <small>Get started for 1 Month free trial No Purchase required.</small>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CountDown3;
