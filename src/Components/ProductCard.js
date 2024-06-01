import React, { useState } from "react";
import { Button, Col, Input, Modal, ModalBody, Row } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, addToWishList, setSelectedProduct } from "../store/reducer/productReducer";

function ProductCard({ id, imgBackSrc, imgFrontSrc, title, price, actualPrice, rating }) {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const allProducts = useSelector((state) => state.products.allProducts);
  const selectedId = useSelector((state) => state.products.selectedProduct);
  const selectedProduct = allProducts.find((product) => product.id === selectedId);
  const product = allProducts.find((product) => product.id === id);
  const handleAddToCart = (product) => {
    const size = product.size[0];
    const color = product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: 1,
    };

    dispatch(addToCart(productToAdd));
  };
  const handleAddToWishList = (product) => {
    const size = product.size[0];
    const color = product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: 1,
    };

    dispatch(addToWishList(productToAdd));
  };
  const renderRating = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="las la-star"></i>);
    }
    return stars;
  };
  const renderSelectedRating = () => {
    const stars = [];
    for (let i = 0; i < selectedProduct.rating; i++) {
      stars.push(<i key={i} className="las la-star"></i>);
    }
    return stars;
  };
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSetlectedColor] = useState("");
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleColorClick = (color) => {
    setSetlectedColor(color);
  };
  const handleSelectedAddToCart = (product) => {
    const size = selectedSize || product.size[0];
    const color = selectedColor || product.colors[0];

    const productToAdd = { 
      ...product,
      size,
      colors: color,
      quantity: quantity,
    };

    dispatch(addToCart(productToAdd));
  };
  const handleSelectedAddToWishList = (product) => {
    const size = selectedSize || product.size[0];
    const color = selectedColor || product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: quantity,
    };

    dispatch(addToWishList(productToAdd));
  };

  return (
    <>
      <div className="card product-card ">
        <Link className="card-img-hover d-block" to="/product-left-image" onClick={() => {
          dispatch(setSelectedProduct(id));
        }}>
          <img className="card-img-top card-img-back" src={imgBackSrc} alt="..." />
          <img className="card-img-top card-img-front" src={imgFrontSrc} alt="..." />
        </Link>
        <div className="card-info">  
          <div className="card-body">
            <div className="product-title">
              <Link
                to="/product-left-image"
                onClick={() => {
                  dispatch(setSelectedProduct(id));
                }}
                className="mt-4 mb-2 d-block link-title h6"
              >
                {title}
              </Link>
            </div>
            <div className="mt-1">
              <span className="product-price">
                {/* <del className="text-muted pr-1">${actualPrice}</del> */}
                ${price}
              </span>
              {/* <div className="star-rating">
                {renderRating()}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default ProductCard;
