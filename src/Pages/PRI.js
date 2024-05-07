import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useState } from "react";
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import OwlCarousel from "react-owl-carousel";
import { useDispatch, useSelector } from "react-redux";
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Nav,
    NavItem,
    NavLink,
    Progress,
    Row,
    TabContent,
    TabPane,
    Table
} from "reactstrap";
import PageHeading from "../Components/PageHeading/PageHeading";
import ProductCard from "../Components/ProductCard";
import { addToCart, addToWishList } from "../store/reducer/productReducer";
import { Link } from "react-router-dom";

function PRI() {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products.allProducts);

    const id = useSelector((state) => state.products.selectedProduct);
    const filteredProducts = useSelector(
        (state) => state.products.filteredProducts
    );
    let product = filteredProducts.find((p) => p.id === Number(id));

    let cat;
    if (product === undefined) {
        cat = "Women"
    } else {
        cat = product.category;
    }
    const firstBreadcrumb = { label: "Pages", link: "/product-left-image" };
    const secondBreadcrumb = {
        label: "Product Left Image",
        link: "/product-left-image",
        active: true,
    };
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const starRatings = [
        { stars: 5, percentage: 90, color: "success" },
        { stars: 4, percentage: 60, color: "success" },
        { stars: 3, percentage: 40, color: "success" },
        { stars: 2, percentage: 20, color: "warning" },
        { stars: 1, percentage: 10, color: "danger" },
    ];

    const RatingBar = ({ stars, percentage, color }) => (
        <div className="d-flex align-items-center mb-2">
            <div className="text-nowrap me-3">{stars} Star</div>
            <div className="w-100">
                <Progress value={percentage} color={color} style={{ height: "5px" }} />
            </div>
            <span className="text-muted ms-3">{percentage}%</span>
        </div>
    );
    const items = [
        {
            image: "assets/images/thumbnail/01.jpg",
            name: "Small Karlo",
            description:
                "Donec viverra sodales arcu gravida nibh at. Neque lobortis quis porta integer et placerat lectus scelerisque. Velit eget malesuada morbi faucibus at sed euismod. Tortor, eu ut id tincidunt leo placerat luctus",
            rating: 5,
        },
        {
            image: "assets/images/thumbnail/02.jpg",
            name: "Leely Mac",
            description:
                "Donec viverra sodales arcu gravida nibh at. Neque lobortis quis porta integer et placerat lectus scelerisque. Velit eget malesuada morbi faucibus at sed euismod. Tortor, eu ut id tincidunt leo placerat luctus",
            rating: 5,
        },
        {
            image: "assets/images/thumbnail/03.jpg",
            name: "Racheal Farrera",
            description:
                "Donec viverra sodales arcu gravida nibh at. Neque lobortis quis porta integer et placerat lectus scelerisque. Velit eget malesuada morbi faucibus at sed euismod. Tortor, eu ut id tincidunt leo placerat luctus",
            rating: 5,
        },
    ];

    const ReviewItem = ({ image, name, description, rating }) => (
        <div className="media-holder mt-5">
            <div className="media d-block d-md-flex">

                <img className="img-fluid align-self-center rounded mr-md-3 mb-3 mb-md-0" alt="image" src={image} />
                <div className="media-body">
                    <div className="d-flex align-items-center">
                        <h6 className="mb-0">{name}</h6>
                        <small className="mx-3 text-muted">April 09, 2020</small>
                        <div className="star-rating">
                            {[...Array(rating)].map((_, i) => (
                                <i key={i} className="las la-star"></i>
                            ))}
                        </div>
                    </div>
                    <p className="mb-0 mt-3">{description}</p>
                </div>
            </div>
        </div>
    );
    function refreshPage() {
        window.location.reload(true);
    }
    const filterProducts = () => {
        const topRatedProducts = allProducts.filter((product) => product.category === cat);
        return renderProductCards(topRatedProducts);
    };
    const renderProductCards = (filteredProducts) => {
        return filteredProducts.map((product) => (
            <div className="item" key={product.id}>
                {/* Rest of the ProductCard component code */}
                <ProductCard
                    id={product.id}
                    imgBackSrc={`assets/images/${product.pictures[0]}`}
                    imgFrontSrc={`assets/images/${product.pictures[1]}`}
                    title={product.name}
                    price={product.salePrice}
                    actualPrice={product.price}
                    rating={product.rating}
                    onClick={() => { refreshPage() }}
                />
            </div>
        ));
    };

    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSetlectedColor] = useState("");
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };
    const handleColorClick = (color) => {
        setSetlectedColor(color);
    };
    const handleAddToCart = (product) => {
        const size = selectedSize || product.size[0];
        const color = selectedColor || product.colors[0];

        const productToAdd = {
            ...product,
            size,
            colors: color,
            quantity,
        };

        dispatch(addToCart(productToAdd));
    };
    const handleAddToWishList = (product) => {
        const size = selectedSize || product.size[0];
        const color = selectedColor || product.colors[0];

        const productToAdd = {
            ...product,
            size,
            colors: color,
            quantity,
        };

        dispatch(addToWishList(productToAdd));
    };

    if (product === undefined ? (product = allProducts[0]) : product)
        return (
            <div className="page-wrapper">
                <PageHeading
                    title="Product Left Image"
                    firstBreadcrumb={firstBreadcrumb}
                    secondBreadcrumb={secondBreadcrumb}
                />
                <div className="page-content">
                    <div>
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                                        <div className="product-details">
                                            <h3 className="mb-0">{product.name}</h3>
                                            <div className="star-rating mb-4">
                                                {Array.from({ length: product.rating }).map((_, index) => (
                                                    <i key={index} className="las la-star"></i>
                                                ))}
                                            </div>
                                            <span className="product-price h4">
                                                ${product.salePrice}
                                                <del className="text-muted h6">${product.price}</del>
                                            </span>
                                            <ul className="list-unstyled my-4">
                                                <li className="mb-2">
                                                    Availibility: <span className="text-muted">{product.stock}</span>
                                                </li>
                                                <li>
                                                    Categories: <span className="text-muted">{product.category}</span>
                                                </li>
                                            </ul>
                                            <p className="mb-4">{product.description}</p>

                                            <div className="d-sm-flex align-items-center mb-5">
                                                <div className="d-sm-flex align-items-center">
                                                    <div className="d-flex align-items-center mr-sm-4">
                                                        <Button
                                                            className="btn-product btn-product-up"
                                                            onClick={() => {
                                                                if (quantity > 1) setQuantity(quantity - 1);
                                                            }}
                                                        >
                                                            <i className="las la-minus"></i>
                                                        </Button>
                                                        <Input
                                                            className="form-product"
                                                            type="number"
                                                            name="form-product"
                                                            value={quantity}
                                                            onChange={(e) => {
                                                                const newQuantity = parseInt(e.target.value);
                                                                if (
                                                                    newQuantity >= 1 &&
                                                                    newQuantity <= product.stock
                                                                ) {
                                                                    setQuantity(newQuantity);
                                                                }
                                                            }}
                                                            max={product.stock}
                                                        />
                                                        <Button
                                                            className="btn-product btn-product-down"
                                                            onClick={() => {
                                                                if (quantity < product.stock)
                                                                    setQuantity(quantity + 1);
                                                            }}
                                                        >
                                                            <i className="las la-plus"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                                <Input
                                                    type="select"
                                                    className="custom-select mt-3 mt-sm-0"
                                                    name="size"
                                                    id="size"
                                                    placeholder="Size"
                                                    onChange={handleSizeChange}
                                                >
                                                    <option disabled selected hidden>
                                                        Size
                                                    </option>
                                                    {product.size.map((size) => (
                                                        <option key={size} value={size}>
                                                            {size}
                                                        </option>
                                                    ))}
                                                </Input>
                                                <div className="d-flex  ml-sm-4 mt-3 mt-sm-0">
                                                    {product.colors.map((col) => (
                                                        <div className="form-check pl-0">
                                                            <input type="checkbox" value={col} onChange={() => handleColorClick(col)} className="form-check-input" id={col} />
                                                            <label className="form-check-label" style={{ background: col }} htmlFor={col} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>


                                            <div className="product-link d-flex align-items-center mt-4">
                                                <Button
                                                    className="btn btn-primary btn-animated mr-sm-4 mb-3 mb-sm-0"
                                                    type="button"
                                                    onClick={() => handleAddToCart(product)}
                                                >
                                                    <i className="las la-shopping-cart mr-1"></i>Add To Cart
                                                </Button>
                                                <Button
                                                    className="btn btn-dark btn-animated    "
                                                    type="button"
                                                    onClick={() => {
                                                        handleAddToWishList(product);
                                                    }}
                                                >
                                                    <i className="lar la-heart mr-1"></i>Add To Wishlist
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <ReactImageGallery
                                            items={product.pictures.map((image, index) => ({
                                                original: `assets/images/${image}`,
                                                thumbnail: `assets/images/${image}`,
                                            }))}
                                            showNav={true}
                                            showThumbnails={false}
                                            showFullscreenButton={false}
                                            showPlayButton={false}
                                            swipe={true} // Enable swipe functionality
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={
                                                    activeTab === "1"
                                                        ? "text-dark active ms-0"
                                                        : "text-dark ms-0"
                                                }
                                                onClick={() => {
                                                    toggle("1");
                                                }}
                                            >
                                                Description
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={
                                                    activeTab === "2" ? "text-dark active" : "text-dark"
                                                }
                                                onClick={() => {
                                                    toggle("2");
                                                }}
                                            >
                                                Additional Information
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={
                                                    activeTab === "3" ? "active text-dark" : "text-dark"
                                                }
                                                onClick={() => {
                                                    toggle("3");
                                                }}
                                            >
                                                Reviews (3)
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={activeTab} className="pt-5">
                                        <TabPane tabId="1">

                                            <div className="row align-items-center">
                                                <div className="col-md-5">
                                                    <img className="img-fluid w-100" src={`assets/images/${product.pictures[0]}`} alt="" />
                                                </div>
                                                <div className="col-md-7 mt-5 mt-lg-0">
                                                    <h3 className="mb-3">{product.name}</h3>
                                                    <p>{product.description}</p> 
                                                    <Link className="btn btn-primary btn-animated" to="#"><i
                                                        className="las la-long-arrow-alt-right mr-1"></i>Read More</Link>
                                                </div>
                                            </div>                                            </TabPane>
                                        <TabPane tabId="2">
                                            <h5 className="mb-3">Additional information</h5>
                                            <Table bordered className="mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td>Size</td>
                                                        <td>{product.size.join(" ")}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Color</td>
                                                        <td>{product.colors.join(" ")}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chest</td>
                                                        <td>38 inches</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Waist</td>
                                                        <td>20 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Length</td>
                                                        <td>35 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fabric</td>
                                                        <td>Cotton, Silk &amp; Synthetic</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Warranty</td>
                                                        <td>6 Months</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row className="total-rating align-items-center">
                                                <Col md="6">
                                                    <div className="bg-dark shadow-sm rounded text-center p-5">
                                                        <h5 className="text-white">Overall</h5>
                                                        <h4 className="text-white">{product.rating}</h4>
                                                        <h6 className="text-white">(03 Reviews)</h6>
                                                    </div>
                                                </Col>
                                                <Col md="6" className="mt-3 mt-lg-0">
                                                    <div className="rating-list">
                                                        {starRatings.map(
                                                            ({ stars, percentage, color }) => (
                                                                <RatingBar
                                                                    stars={stars}
                                                                    percentage={percentage}
                                                                    color={color}
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="mt-7">

                                                {items.map(
                                                    ({ image, name, description, rating }, i) => (
                                                        <ReviewItem
                                                            key={i}
                                                            image={image}
                                                            name={name}
                                                            description={description}
                                                            rating={rating}
                                                        />
                                                    )
                                                )}
                                                <div className="mt-8 shadow p-5">
                                                    <h4 className="mb-4">Add Review</h4>
                                                    <Form id="contact-form" className="row" onSubmit={handleSubmit}>
                                                        <FormGroup className="col-sm-6">
                                                            <Input
                                                                type="text"
                                                                name="name"
                                                                placeholder="Name"
                                                                required
                                                                className="form-control"
                                                                value={name}
                                                                onChange={(event) =>
                                                                    setName(event.target.value)
                                                                }
                                                            />
                                                        </FormGroup>
                                                        <FormGroup className="col-sm-6">
                                                            <Input
                                                                type="email"
                                                                name="email"
                                                                className="form-control"
                                                                placeholder="Email Address"
                                                                required
                                                                value={email}
                                                                onChange={(event) =>
                                                                    setEmail(event.target.value)
                                                                }
                                                            />
                                                        </FormGroup>
                                                        <FormGroup className="col-12 clearfix">
                                                            {/* <Label for="ratingSelect">Rating</Label> */}
                                                            <Input
                                                                type="select"
                                                                name="rating"
                                                                id="ratingSelect"
                                                                value={rating}
                                                                className="form-control custom-select"
                                                                onChange={(event) =>
                                                                    setRating(event.target.value)
                                                                }
                                                            >
                                                                <option value="" disabled selected hidden>
                                                                    -- Select --
                                                                </option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </Input>
                                                        </FormGroup>
                                                        <FormGroup className="col-12">
                                                            <Input
                                                                type="text"
                                                                name="phone"
                                                                className="form-control"
                                                                placeholder="Phone Number"
                                                                required
                                                                value={phone}
                                                                onChange={(event) =>
                                                                    setPhone(event.target.value)
                                                                }
                                                            />
                                                        </FormGroup>
                                                        <FormGroup className="col-12">
                                                            <Input
                                                                type="textarea"
                                                                name="comment"
                                                                className="form-control rounded-4 h-auto"
                                                                placeholder="Type Comment"
                                                                rows="4"
                                                                required
                                                                value={comment}
                                                                onChange={(event) =>
                                                                    setComment(event.target.value)
                                                                }
                                                            />
                                                        </FormGroup>
                                                        <div className="col-12">
                                                            <Button color="primary" className="mt-3 btn btn-primary btn-animated">
                                                                Post Review
                                                            </Button>
                                                        </div>
                                                    </Form>
                                                </div>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </Col>
                            </Row>
                        </Container>
                        <section>
                            <Container>
                                <div className="row justify-content-center text-center">
                                    <div className="col-lg-8 col-md-10">
                                        <div className="mb-5">
                                            <h6 className="text-primary mb-1">
                                                — You may also like
                                            </h6>
                                            <h2 className="mb-0">Related Products</h2>
                                        </div>
                                    </div>
                                </div>
                                <Row>
                                    <Col>
                                        <OwlCarousel
                                            className="owl-carousel no-pb owl-2"
                                            dots={false}
                                            nav={true}
                                            items={3}
                                            responsive={{
                                                0: { items: 1 },
                                                576: { items: 2 },
                                                768: { items: 2 },
                                                992: { items: 3 },
                                            }}
                                             navText={["<span class='las la-arrow-left'><span></span></span>","<span class='las la-arrow-right'><span></span></span>"]}
                                        >
                                            {filterProducts()}
                                        </OwlCarousel>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </div>
                </div>
            </div>
        );
}

export default PRI;
