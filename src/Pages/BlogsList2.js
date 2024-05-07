import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import BlogCardList from '../Components/Blog/BlogCardList';
import Categories from '../Components/Blog/Categories';
import RecentStories from '../Components/Blog/RecentStories';
import Tags from '../Components/Blog/Tags';
import PageHeading from '../Components/PageHeading/PageHeading';
import CustomPagination from '../Components/pagination';
import { Link } from 'react-router-dom';

function BlogsList2() {
    const firstBreadcrumb = { label: "Pages", link: "/blog-listing" };
    const secondBreadcrumb = {
        label: "Blog Listing",
        link: "/blog-listing",
        active: true,
    };
    const blogs = useSelector(
        (state) => state.blog.blogItems
    );
    const [activePage, setActivePage] = useState(1);
    const pageSize = 3;

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };
    const totalPages = Math.ceil(blogs.length / pageSize);
    const startIndex = (activePage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const blogsToShow = blogs.slice(startIndex, endIndex);
    return (
        <div className='page-wrapper'>
            <PageHeading
                title="Blog Listing "
                firstBreadcrumb={firstBreadcrumb}
                secondBreadcrumb={secondBreadcrumb}
            />
            <div className='page-content'>
                <section>
                    <Container>
                        <div className="row justify-content-center mb-11">
                            <div className="col-12 col-lg-8">
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2 col" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-primary my-2 my-sm-0 col-auto" type="submit">Search Blog</button>
                                </form>
                            </div>
                        </div>
                        <Row>
                            <Col lg={4} className='col-12'>
                                <div className="shadow-sm p-5 rounded">
                                    <RecentStories />
                                    <Categories />
                                    <Tags />
                                    <div className="widget bg-light p-4 text-center rounded">
                                        <div>
                                            <h6 className="text-dark">New Arrivals</h6>
                                            <h4 className="text-primary">Explore Our Shop</h4>
                                        </div>
                                        <div className="position-relative mt-4">
                                            <img className="img-fluid" src="assets/images/product-ad/04.jpg" alt="" />
                                            <div className="position-absolute top-50 w-100">
                                            <Link className="btn btn-primary btn-animated" to="/shop-grid-left-sidebar">Shop Now
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8} className='mb-6 mb-lg-0 col-12'>
                                {blogsToShow.map((blog, index) => (
                                    <BlogCardList
                                        key={index}
                                        date={blog.date}
                                        imageSrc={blog.image}
                                        category={blog.category}
                                        title={blog.title}
                                        content={blog.content}
                                    />
                                ))}
                                <Row
                                    className="mt-5 mb-5"
                                    style={{ justifyContent: "start" }}
                                >
                                    <CustomPagination
                                        activePage={activePage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </Row>
                            </Col>

                        </Row>

                    </Container>
                </section>
            </div>
        </div>
    )
}

export default BlogsList2;