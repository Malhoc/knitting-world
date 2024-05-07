import React from 'react'
import PageHeading from '../Components/PageHeading/PageHeading'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


function Login() {
    const firstBreadcrumb = { label: "Pages" };
    const secondBreadcrumb = {
        label: "Login",
        active: true,
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <div className='page-wrapper'>
            <PageHeading
                title="Login"
                firstBreadcrumb={firstBreadcrumb}
                secondBreadcrumb={secondBreadcrumb}
            />
            <div className='page-content'>
                <section>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs="12" sm="10" md="8" lg="6">
                                <div className="shadow p-3">
                                    <img className="img-fluid mb-5" src="assets/images/login.png" alt="" />
                                    <h3 className="text-center mb-3 text-uppercase">User Login</h3>
                                    <Form id="contact-form" onSubmit={handleSubmit}>
                                        <div className="messages"></div>
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                name="name"
                                                id="form_name"
                                                placeholder="Username"
                                                required
                                            />
                                            <div className="help-block with-errors"></div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                type="password"
                                                name="password"
                                                id="form_password"
                                                placeholder="Password"
                                                required
                                            />
                                            <div className="help-block with-errors"></div>
                                        </FormGroup>
                                        <div className="form-group mt-4 mb-5">
                                            <div className="remember-checkbox d-flex align-items-center justify-content-between">
                                                <div className="checkbox">
                                                    <Input type="checkbox" id="check2" name="check2" />
                                                    <Label for="check2">Remember me</Label>
                                                </div>
                                                <Link to="#">Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <Button color="primary" block>Login Now</Button>
                                    </Form>
                                    <div className="d-flex align-items-center text-center justify-content-center mt-4">
                                        <span className="text-muted mr-1">Don't have an account?</span>
                                        <Link to="/signup">Sign Up</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    )
}

export default Login