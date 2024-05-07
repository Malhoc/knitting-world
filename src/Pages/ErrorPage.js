import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div>
            <section className="fullscreen-banner p-0">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-12 text-center h-100 d-flex align-items-center">
                            <div className="w-100"><img className="img-fluid d-inline mb-5" src="assets/images/404.png" alt="" />
                                <h2>Oops! Page Not Found</h2>
                                <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                                    <h6>You’re either misspelling the URL
                                        or requesting a page that's no longer here.</h6>
                                    <Link className="btn btn-primary btn-animated" to="/">Back To Home Page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ErrorPage