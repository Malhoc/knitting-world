import React from 'react';

function ComingSoon() {
    return (

        <section className="fullscreen-banner py-8 o-hidden bg-pos-r bg-primary" data-bg-img="assets/images/bg/07.png">
            <div className="container-fluid px-md-8 ">
                <div className="row  align-items-center">
                    <div className="col-12 ">
                        <div className="p-5 rounded bg-white ">
                            <div className="row justify-content-between align-items-center ">
                                <div className="col-lg-5 col-md-12">
                                    <div className="coming-soon">
                                        <h1 className="mt-4 mb-2 font-w-7">Coming Soon</h1>
                                        <p>We Are Creatinig Something Awesome And Exciting For You</p>
                                        <ul className="countdown list-inline d-flex align-items-center" data-countdown="2024/09/23"></ul>
                                        <div className="mt-5">
                                            <h4 className="title z-index-1 mb-2">Subscribe to get notified!</h4>
                                            <div className="subscribe-form">
                                                <form id="mc-form1" className="row align-items-center no-gutters mb-3">
                                                    <div className="col">
                                                        <input value="" name="EMAIL" className="email form-control input-2 bg-white" id="mc-email1" placeholder="Email Address" required="" type="email" />
                                                    </div>
                                                    <div className="col-auto">
                                                        <input className="btn btn-primary overflow-auto" name="subscribe" value="Subscribe" type="submit" />
                                                    </div>
                                                </form> <small>Get started for 1 Month free trial No Purchace required.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 d-none d-lg-block text-lg-right">
                                    <img className="img-fluid d-inline" src="assets/images/coming-soon-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComingSoon;