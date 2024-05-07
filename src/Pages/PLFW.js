import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  CardText,
  Col,
  Container,
  Row
} from "reactstrap";
import PageHeading from '../Components/PageHeading/PageHeading';
import ProductCardList from '../Components/PrductCardList';
import SideBar from '../Components/Sidebar/SideBar';
import CustomPagination from '../Components/pagination';

function PLFW() {
  const firstBreadcrumb = { label: "Pages" };
  const secondBreadcrumb = {
    label: "Shop List Full Width",
    active: true,
  };
  const [selectedOption, setSelectedOption] = useState("1");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setActivePage(1);
  };
  const filteredProducts = useSelector((state) => {
    const option = parseInt(selectedOption);
    switch (option) {
      case 1: // Newest Item
        return state.products.filteredProducts;
      case 2: // High To Low
        return state.products.filteredProducts.slice().sort((a, b) => b.price - a.price);
      case 3: // Low To High
        return state.products.filteredProducts.slice().sort((a, b) => a.price - b.price);
      default:
        return state.products.filteredProducts;
    }
  });
  const [activePage, setActivePage] = useState(1);
  const pageSize = 6;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const startIndex = (activePage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);
  const [activeFilter, setActiveFilter] = useState('list');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <div className='page-wrapper'>
      <PageHeading
        title="Shop List Full Width"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className='page-content'>
        <section>
          <Container fluid>
            <Row>
              <Col lg={9} md={12} className="order-lg-1">
                <Row className="align-items-center">
                  <Col md="5" className="mb-3 mb-md-0">
                    <CardText tag="span" className="text-muted">
                      Showing 1 to {productsToShow.length} of
                      {" "}{filteredProducts.length}
                    </CardText>
                  </Col>
                  <Col
                    md="7"
                    className="d-flex align-items-center justify-content-md-end"
                  >
                    <div className="view-filter">
                      <Link
                        to="/shop-grid-fullwidth"
                        className={`me-2 ${activeFilter === 'grid' ? 'active text-primary' : ''}`}
                        onClick={() => handleFilterClick('grid')}
                      >
                        <i className="lab la-buromobelexperte"></i>
                      </Link>
                      <Link
                        to="/shop-list-fullwidth"
                        className={`text-dark ${activeFilter === 'list' ? 'active text-primary' : ''}`}
                        onClick={() => handleFilterClick('list')}
                      >
                        <i className="las la-list"></i>
                      </Link>
                    </div>
                    <div className="sort-filter ml-2 d-flex align-items-center">
                      <select className="custom-select" id="inputGroupSelect02" onChange={handleOptionChange} value={selectedOption}>
                        <option selected>Sort By</option>
                        <option value="1">Newest Item</option>
                        <option value="2">High To Low</option>
                        <option value="3">Low to High</option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row className="text-center">
                  {productsToShow.map((product) => (
                    <ProductCardList
                      id={product.id}
                      imgBackSrc={`assets/images/${product.pictures[0]}`}
                      imgFrontSrc={`assets/images/${product.pictures[1]}`}
                      title={product.name}
                      price={product.salePrice}
                      actualPrice={product.price}
                      rating={product.rating}

                    />
                  ))}

                </Row>
                <Row
                  className="mt-5 mb-5"
                  style={{ justifyContent: "center" }}
                >
                  <CustomPagination
                    activePage={activePage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </Row>
              </Col>
              <div className="col-lg-3 col-md-12 sidebar mt-8 mt-lg-0">
                <SideBar />
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  )
}

export default PLFW;