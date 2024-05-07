import React from 'react';
import { Container, Row, Col, Form, Input, Button } from 'reactstrap';
import Countdown from 'react-countdown';

const Countdown2 = () => {
  const countdownDate = new Date('2025/08/23');

  // Renderer component for Countdown
  const CountdownRenderer = ({ days, hours, minutes, seconds }) => {
    return (
        <>
    <ul className="countdown list-inline d-flex my-5" data-countdown="2024/08/23"></ul>
    </>
    );
  };

  return (
    <section className="bg-pos-rt bg-xs-none" style={{ backgroundImage: 'url(assets/images/bg/04.jpg)' }}>
      <Container>
        <Row>
          <Col lg="6" md="10">
            <div>
              <h6 className="text-primary mb-1">
                — Limited Offer
              </h6>
              <h2 className="mb-0">Hot Deal Today</h2>
            </div>
            {/* Countdown Component */}
            <Countdown date={countdownDate} renderer={CountdownRenderer} />
            <div className="subscribe-form">
              <Form id="mc-form" className="row align-items-center no-gutters mb-3">
                <Col>
                  <Input value="" name="EMAIL" className="email form-control input-2 bg-white" id="mc-email" placeholder="Email Address" required type="email" />
                </Col>
                <Col className="col-auto">
                  <Button color="primary" className="overflow-auto" name="subscribe" type="submit">Subscribe</Button>
                </Col>
              </Form>
              <small>Get started for 1 Month free trial No Purchase required.</small>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Countdown2;
