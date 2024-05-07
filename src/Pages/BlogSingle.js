import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Row
} from "reactstrap";
import RemainingBlogItems from "../Components/Blog/RemainingBlogItems";
import PageHeading from "../Components/PageHeading/PageHeading";
import comments from "../api/comments";
import { Link } from "react-router-dom";
function BlogSingle() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const firstBreadcrumb = { label: "Pages", link: "/blog-single" };
    const secondBreadcrumb = {
        label: "Blog Card",
        link: "/blog-single",
        active: true,
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const blogList = useSelector((state) => state.blog.blogItems);
    const image = useSelector((state) => state.blog.selectedBlog);
    useEffect(() => { }, [image]);
    let blog = blogList.find((p) => p.image === image);
    const otherBlogs = blogList.filter((blog) => blog.image !== image);
    if (blog === undefined ? (blog = blogList[0]) : blog)
        return (
            <div className="page-wrapper">
                <PageHeading
                    title="Blog Card"
                    firstBreadcrumb={firstBreadcrumb}
                    secondBreadcrumb={secondBreadcrumb}
                />
                <section>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={10}>
                                <Card className="card border-0 bg-transparent">
                                    <div className="position-relative rounded overflow-hidden">
                                        <div className="position-absolute z-index-1 bottom-0 bg-white text-primary shadow-primary text-center py-1 px-2 rounded ml-3 mb-3">{blog.date}</div>
                                        <img className="card-img-top hover-zoom" src={blog.image} alt="" />
                                    </div>
                                    <CardBody className="pt-5 px-0">
                                        <h2>{blog.title}</h2>
                                        <p className="">{blog.content}</p>

                                    </CardBody>
                                </Card>
                                <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis et augue dui gravida Cras ultricies ligula sed magna dictum porta, Sed ut perspiciatis unde omnis iste natus error sit voluptat erci tation ullamco laboris nisi ut aliq uip.eiu smod tempor the incidi dunt ut labore et dolore magna aliqua. Phasellus eget purus id felis dignissim convallis Suspendisse et augue dui gravida Cras ultricies ligula sed magna dictum porta, Sed ut perspiciatis unde omnis iste natus error sit voluptat erci tation ullamco laboris nisi ut aliq uip.eiu smod tempor the incidi dunt ut labore et dolore magna aliqua. Ut atenim ad minim veniam, quis nostrud exerci tation abore et dolore magna aliqua. Uhbt atenim</p>
                                <blockquote className="card border p-5 mt-5 h6 text-center">" lights dominion divide years for fourth have don't stars is that saying. serspiciatis unde omnis iste natus error. The expert team at Brightscout specializes in building innovative technology solutions for enterprises. " <span className="text-primary mt-2 h5">- Marlo Jensen</span>
                                </blockquote>
                                <div className="d-md-flex justify-content-between mt-5 mb-8 shadow-sm p-4">
                                    <div className="d-flex align-items-center">
                                        <h6 className="mb-0 me-4">Share It:</h6>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <Link
                                                    className="bg-white shadow-sm rounded p-2"
                                                    to="#"
                                                >
                                                    <i className="la la-facebook"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link
                                                    className="bg-white shadow-sm rounded p-2"
                                                    to="#"
                                                >
                                                    <i className="la la-dribbble"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link
                                                    className="bg-white shadow-sm rounded p-2"
                                                    to="#"
                                                >
                                                    <i className="la la-instagram"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link
                                                    className="bg-white shadow-sm rounded p-2"
                                                    to="#"
                                                >
                                                    <i className="la la-twitter"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link
                                                    className="bg-white shadow-sm rounded p-2"
                                                    to="#"
                                                >
                                                    <i className="la la-linkedin"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="d-flex align-items-center text-md-end mt-5 mt-md-0">
                                        <h6 className="mb-0 me-4">Tags: </h6>
                                        <ul className="list-inline mb-0 widget-tags">
                                            <li className="list-inline-item">
                                                <Link
                                                    className="btn link-title btn-sm bg-light m-1"
                                                    to="#"
                                                >
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link
                                                    className="btn link-title btn-sm bg-light m-1"
                                                    to="#"
                                                >
                                                    Trend
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link
                                                    className="btn link-title btn-sm bg-light m-1"
                                                    to="#"
                                                >
                                                    Shopping
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <RemainingBlogItems blogs={otherBlogs} />
                                <div className="mt-7 border-top pt-7">
                                    <div className="mb-5">
                                        <h2>All Comments</h2>
                                    </div>
                                    {comments.map((comment) => (
                                        <div
                                            className="d-block d-md-flex align-items-center border-bottom border-light pb-5 mb-5"
                                            key={comment.id}
                                        >
                                            <img className="img-fluid rounded mr-md-4 mb-3 mb-md-0" alt="image" src={comment.imageSrc} />
                                            <div className="media-body">
                                                <div className="d-flex align-items-center">
                                                    <h6 className="mb-0 mr-3">{comment.author}</h6>  <small className="text-muted">{comment.date}</small>
                                                </div>
                                                <p className="mt-2">{comment.content}</p> <Link className="btn btn-sm btn-primary btn-animated" to="#"><i className="lar la-comment-dots mr-1"></i> Reply</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="post-comments mt-5">
                                    <div className="mb-4">
                                        <h2>Leave A Comment</h2>
                                    </div>
                                    <Form
                                        id="contact-form"
                                        className="row"
                                        onSubmit={handleSubmit}
                                    >
                                        <div id="formmessage"></div>
                                        <FormGroup className="mb-3 col-md-6">
                                            <Input
                                                type="text"
                                                name="name"
                                                id="form_name"
                                                placeholder="Name"
                                                required
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                            />
                                        </FormGroup>
                                        <FormGroup className="mb-3 col-md-6">
                                            <Input
                                                type="email"
                                                name="email"
                                                id="form_email"
                                                placeholder="Email"
                                                required
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                            />
                                        </FormGroup>
                                        <FormGroup className="mb-3 col-md-12">
                                            <Input
                                                type="textarea"
                                                name="message"
                                                id="form_message"
                                                placeholder="Message"
                                                rows="3"
                                                required
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, message: e.target.value })
                                                }
                                            />
                                        </FormGroup>
                                        <div className="col-12 mt-4">
                                            <Button color="primary" type="submit">
                                                <span>Post Comment</span>
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
}

export default BlogSingle;
