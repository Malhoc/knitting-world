import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../../store/reducer/productReducer";

export default function HeaderMiddle(props) {
  const { options } = props;
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [categorySelected, setCategorySelected] = useState('All');
  const products = useSelector((state) => state.products.allProducts);
  
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    var filteredProducts = [];
    let regex = new RegExp(searchKeyword, 'gi');
    switch (categorySelected) {
      case 'All':
        filteredProducts = products.filter((product) =>  product.name.match(regex));
        break;
      default:
        filteredProducts = products.filter((product) =>  product.name.match(regex) && product.category === categorySelected);
    }
    dispatch(setFilteredProducts(filteredProducts));

    navigate(`/shop-grid-no-sidebar`);
  };
  const makeCall = () => {
    console.log('Making Call');
    const phoneNumber = 'tel:03224188002'; 
    // Open the default phone app with the specified number
    window.open(phoneNumber, '_blank');
  };
  return (
    <>
      <div className="py-md-3 py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-none d-md-flex align-items-center">
              <Link className="navbar-brand logo d-none d-lg-block" to="/">
                <img className="img-fluid" src="assets/images/knitting-world.png" alt="" />
              </Link>
              <div className="media ml-lg-11">
                <i className="las la-mobile-alt ic-2x bg-white rounded p-2 shadow-sm mr-2 text-primary"></i>
                <div className="media-body">
                  <span className="mb-0 d-block">Call Us</span>
                  <Link className="text-muted" to={makeCall} onClick={makeCall}>
                    +44-0208-1276-480                    
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="right-nav align-items-center d-flex justify-content-end">
                <form className="form-inline border rounded w-100" onSubmit={handleSubmit} value={categorySelected}>
                  <select className="custom-select border-0 rounded-0 bg-light form-control d-none d-lg-inline" onChange={(e) => setCategorySelected(e.target.value)}>
                    {options.map((option) => (
                      <option  key={option.value} value={option.value} >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <input
                    className="form-control border-0 border-left col"
                    type="search"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="Enter Your Keyword"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-primary text-white col-auto"
                    type="submit"
                  >
                    <i className="las la-search"></i>
                  </button>
                </form>
              </div>
            </div>
            {/* <!--menu end--> */}
          </div>
        </div>
      </div>
    </>
  );
}
