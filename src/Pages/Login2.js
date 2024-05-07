import React from 'react';
import { Link } from 'react-router-dom';
import PageHeading from '../Components/PageHeading/PageHeading';


function Login2() {
    const firstBreadcrumb = { label: "Pages" };
    const secondBreadcrumb = {
        label: "Login-2",
        active: true,
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='page-wrapper'>
            <PageHeading
                title="Login 2"
                firstBreadcrumb={firstBreadcrumb}
                secondBreadcrumb={secondBreadcrumb}
            />
            <div className='page-content'>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-12">
                                <img className="img-fluid" src="assets/images/login.png" alt="" />
                            </div>
                            <div className="col-lg-5 col-12">
                                <div>
                                    <h3 className="text-center mb-3 text-uppercase">User Login</h3>
                                    <form id="contact-form" onSubmit={handleSubmit}>
                                        <div className="messages"></div>
                                        <div className="form-group">
                                            <input
                                                id="form_name"
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="User name"
                                                required
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                id="form_password"
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                placeholder="Password"
                                                required
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group mt-4 mb-5">
                                            <div className="remember-checkbox d-flex align-items-center justify-content-between">
                                                <div className="checkbox">
                                                    <input type="checkbox" id="check2" name="check2" />
                                                    <label htmlFor="check2">Remember me</label>
                                                </div>
                                                <Link to="#">Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-block">Login Now</button>
                                    </form>
                                    <div className="d-flex align-items-center text-center justify-content-center mt-4">
                                        <span className="text-muted mr-1">Don't have an account?</span>
                                        <Link to="/signup">Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login2;