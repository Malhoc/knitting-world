import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PageHeading from "../Components/PageHeading/PageHeading";
import {
    Col,
    Row,
    Container,
    Input,
    Table,
    Button
} from "reactstrap";
import {
    updateCartItemQuantity,
    removeCartItem,
} from "../store/reducer/productReducer";
import { Link } from "react-router-dom";
function ProductCart() {
    const cartItems = useSelector((state) => state.products.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const firstBreadcrumb = { label: "Pages", link: "/product-cart" };
    const secondBreadcrumb = {
        label: "Product Cart",
        link: "/product-cart",
        active: true,
    };
    const [quantities, setQuantities] = useState(
        cartItems.map((item) => item.quantity)
    );
    const handleQuantityChange = (index, newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= cartItems[index].stock) {
            const updatedQuantities = [...quantities];
            updatedQuantities[index] = newQuantity;
            setQuantities(updatedQuantities);
            dispatch(updateCartItemQuantity({ index, quantity: newQuantity }));
        }
    };
    const handleDeleteItem = (index) => {
        dispatch(removeCartItem(index));
    };
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const itemTotal = item.quantity * item.salePrice;
            return total + itemTotal;
        }, 0);
    };
    let Tax = 1.0;
    return (
        <div className="page-wrapper">
            <PageHeading
                title="Product Cart"
                firstBreadcrumb={firstBreadcrumb}
                secondBreadcrumb={secondBreadcrumb}
            />
            <div className="page-content">
                <section>
                    <Container>
                        <Row>
                            <Col lg={8}>
                                <div className="table-responsive">
                                    <Table className="cart-table text-center mb-5 table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="h5 mb-0 py-3 font-w-6" scope="col">
                                                    Product
                                                </th>
                                                <th className="h5 mb-0 py-3 font-w-6" scope="col">
                                                    Price
                                                </th>
                                                <th className="h5 mb-0 py-3 font-w-6" scope="col">
                                                    Quantity
                                                </th>
                                                <th className="h5 mb-0 py-3 font-w-6" scope="col">
                                                    Total
                                                </th>
                                                <th className="h5 mb-0 py-3 font-w-6" scope="col">
                                                    Remove
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="border-top-0">
                                            {cartItems.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="d-md-flex align-items-center">
                                                            <Link to="#">
                                                                <img
                                                                    className="img-fluid rounded me-lg-3 mb-2 mb-lg-0"
                                                                    style={{ height: "100px", width: "100px" }}
                                                                    // src={item.image}
                                                                    src={`assets/images/${item.pictures[0]}`}

                                                                    alt={item.name}
                                                                />
                                                            </Link>
                                                            <div className="text-start">
                                                                <div
                                                                    onClick={() =>
                                                                        navigate(`/product-single/${item.id}`)
                                                                    }
                                                                    className="product-name link-title h6"
                                                                >
                                                                    {item.name}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0">{item.salePrice}</h6>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <Button
                                                                className="btn-product btn-product-up"
                                                                onClick={() => {
                                                                    if (quantities[index] > 1) {
                                                                        handleQuantityChange(
                                                                            index,
                                                                            quantities[index] - 1
                                                                        );
                                                                    }
                                                                }}
                                                            >
                                                                <i className="las la-minus"></i>
                                                            </Button>
                                                            <Input
                                                                className="form-product"
                                                                type="number"
                                                                name="form-product"
                                                                value={quantities[index]}
                                                                onChange={(e) => {
                                                                    const newQuantity = parseInt(e.target.value);
                                                                    handleQuantityChange(index, newQuantity);
                                                                }}
                                                                max={item.stock}
                                                            />
                                                            <Button
                                                                className="btn-product btn-product-down"
                                                                onClick={() => {
                                                                    if (quantities[index] < item.stock) {
                                                                        handleQuantityChange(
                                                                            index,
                                                                            quantities[index] + 1
                                                                        );
                                                                    }
                                                                }}
                                                            >
                                                                <i className="las la-plus"></i>
                                                            </Button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0">
                                                            {item.quantity * item.salePrice}
                                                        </h6>
                                                    </td>
                                                    <td className="border-right-0">
                                                        <button
                                                            type="submit"
                                                            onClick={() => {
                                                                handleDeleteItem(item.id);
                                                            }}
                                                            className="btn btn-primary btn-sm ml-5"
                                                        >
                                                            <i className="las la-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="d-md-flex align-items-end justify-content-between border-top pt-5">
                                    <div>
                                        <label className="text-black h4" for="coupon">Coupon</label>
                                        <p>Enter your coupon code if you have one.</p>
                                        <div className="row form-row">
                                            <div className="col">
                                                <input className="form-control" id="coupon" placeholder="Coupon Code" type="text" />
                                            </div>
                                            <div className="col col-auto">
                                                <button className="btn btn-dark btn-animated">Apply Coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-animated mt-3 mt-md-0">Update Cart</button>
                                </div>
                            </Col>
                            <Col lg="4" className="mt-5 mt-lg-0 ps-lg-10">
                                <div className="rounded-4 p-5 bg-light">
                                    <div className="rounded-4 p-5 bg-white">
                                        <h4 className="text-dark text-center mb-2">Cart Totals</h4>
                                        <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                                            <span className="text-muted">Subtotal</span>
                                            <span className="text-dark">${calculateTotal()}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                                            <span className="text-muted">Tax</span>
                                            <span className="text-dark">{Tax}%</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center pt-3 mb-5">
                                            <span className="text-dark h5">Total</span>
                                            <span className="text-dark font-weight-bold h5">
                                                ${calculateTotal() + (calculateTotal() * Tax) / 100}
                                            </span>
                                        </div>
                                        <Link className="btn btn-dark" to="/product-checkout">
                                            Proceed To Checkout
                                        </Link>
                                        <Link
                                            className="btn btn-outline-primary mt-3"
                                            to="/shop-grid-left-sidebar"
                                        >
                                            Continue Shopping
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-8">
                            <Col lg={6}>

                            </Col>

                        </Row>
                    </Container>
                </section>
                {/* <Contact /> */}
            </div>
        </div>
    );
}

export default ProductCart;

