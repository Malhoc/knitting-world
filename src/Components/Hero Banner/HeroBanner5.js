import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

function HeroBanner5() {
  return (
    <section className='banner pos-r p-0 mt-5'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={3} className='order-lg-1'>
            <nav className="navbar navbar-expand-lg navbar-light categories d-block shadow-sm">
              <button className="navbar-toggler d-flex align-items-center text-uppercase" type="button" aria-controls="categoriesDropdown" aria-expanded="false" aria-label="Toggle navigation"> <i className="las la-stream"></i>Categories</button>
              <div className=" navbar-collapse" id="categoriesDropdown">
                <ul className="navbar-nav d-block w-100">
                  <li className="nav-item"> <Link className="nav-link" to="#">Men</Link>
                  </li>
                  <li className="nav-item"> <Link className="nav-link" to="#">Women</Link>
                  </li>
                  <li className="nav-item"> <Link className="nav-link" to="#">Kids</Link>
                  </li>
                  <li className="nav-item"> <Link className="nav-link" to="#">Accessories</Link>
                  </li>
                  <li className="nav-item"> <Link className="nav-link" to="#">Clothing</Link>
                  </li>
                  <li className="nav-item"> <Link className="nav-link" to="#">Bags</Link>
                  </li>
                  <li className="nav-item"> <Link className="nav-link" to="#">Footwear</Link>
                  </li>
                  <li className="nav-item"> <Link className="nav-link" to="#">Watches</Link>
                  </li>
                  <li className="nav-item"> <Link className="nav-link" to="#">Jewellery</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </Col>
          <Col lg="9">
            <Row className="align-items-center">
              <Col lg="5" md="12" className="order-lg-1">
                <img className="img-fluid" src="assets/images/furniture/hero/01.png" alt="" />
              </Col>
              <Col lg="7" md="12" className="mt-5 mt-lg-0">
                <h6 className="font-w-6 text-primary animated3 mb-2">Welcome To Ekocart</h6>
                <h1 className="mb-3 animated3 font-w-5">
                  New Arrival <span className="font-w-8">Modern Chair</span>
                </h1>
                <p className="mb-4 animated3">
                  Our Product lights dominion divide years for fourth have don't stars is that saying ights dominion divide years for fourth have
                </p>
                <div className="animated3">
                  <Link className="btn btn-primary btn-animated" to="#">
                    <i className="las la-shopping-cart mr-1"></i> Shop Now
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroBanner5