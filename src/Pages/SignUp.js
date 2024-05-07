import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import PageHeading from '../Components/PageHeading/PageHeading';


function SignUp() {
    const firstBreadcrumb = { label: "Pages" };
    const secondBreadcrumb = {
        label: "Sign Up",
        active: true,
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='page-wrapper'>
            <PageHeading
                title="Sign Up"
                firstBreadcrumb={firstBreadcrumb}
                secondBreadcrumb={secondBreadcrumb}
            />
            <div className='page-content'>
                <section>
                    <Container>
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="mb-6">
                                    <h6 className="text-primary mb-1">
                                        — Sign Up
                                    </h6>
                                    <h2>Simple And Easy To Sign Up</h2>
                                    <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam
                                        rem aperiam.</p>
                                </div>
                            </div>
                        </div>
                        <Row>
                            <Col lg={8} md={10} className='ml-auto mr-auto'>
                                <div className='register-form text-center'>
                                    <Form id="contact-form" onSubmit={handleSubmit}>
                                        <div className="messages"></div>
                                        <Container>
                                            <Row>
                                                <Col md={6}>
                                                    <FormGroup>

                                                        <Input type="text" name="name" id="form_name" placeholder="First name" required />
                                                        <div className="help-block with-errors"></div>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>

                                                        <Input type="text" name="surname" id="form_lastname" placeholder="Last name" required />
                                                        <div className="help-block with-errors"></div>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Input type="email" name="email" id="form_email" placeholder="Email" required />
                                                        <div className="help-block with-errors"></div>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>

                                                        <Input type="tel" name="phone" id="form_phone" placeholder="Phone" required />
                                                        <div className="help-block with-errors"></div>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={6}>
                                                    <FormGroup>

                                                        <Input type="password" name="password" id="form_password" placeholder="Password" required />
                                                        <div className="help-block with-errors"></div>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>

                                                        <Input type="password" name="password" id="form_password1" placeholder="Confirm Password" required />
                                                        <div className="help-block with-errors"></div>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <select className="form-control">
                                                            <option selected>Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <select className="form-control">
                                                            <option value="Country">Select Country...</option>
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AL">Albania</option>
                                                            <option value="DZ">Algeria</option>
                                                            <option value="AS">American Samoa</option>
                                                            <option value="AD">Andorra</option>
                                                            <option value="AG">Angola</option>
                                                            <option value="AI">Anguilla</option>
                                                            <option value="AG">Antigua &amp; Barbuda</option>
                                                            <option value="AR">Argentina</option>
                                                            <option value="AA">Armenia</option>
                                                            <option value="AW">Aruba</option>
                                                            <option value="AU">Australia</option>



                                                        </select>
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                            </Row>
                                            <Row className="mt-5">
                                                <Col md={12}>
                                                    <div className="remember-checkbox clearfix mb-5">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                            <label className="custom-control-label" for="customCheck1">I agree to the term of use and privacy
                                                                policy</label>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={12}>
                                                    <Button type="submit" color="primary">Create Account</Button>
                                                    <span className="mt-4 d-block">
                                                        Have an Account? <Link to="/login"><i>Sign In!</i></Link>
                                                    </span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    )
}

export default SignUp;