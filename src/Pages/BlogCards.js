import React from 'react'
import PageHeading from '../Components/PageHeading/PageHeading';
import BlogCard from '../Components/Blog/BlogCard';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import CustomPagination from '../Components/pagination';
import { useState } from 'react';

function BlogCards() {
    const firstBreadcrumb = { label: "Pages", link: "/blog-card" };
    const secondBreadcrumb = {
        label: "Blog Card",
        link: "/blog-card",
        active: true,
    };
    const blogs = useSelector(
        (state) => state.blog.blogItems
    );
    const [activePage, setActivePage] = useState(1);
    const pageSize = 6;

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
                title="Blog Card"
                firstBreadcrumb={firstBreadcrumb}
                secondBreadcrumb={secondBreadcrumb}
            />
            <section>
                <Container>
                    <Row>
                        {blogsToShow.map((blogs, index) => (
                            <Col key={index} lg="4" className="mt-5">
                                <BlogCard
                                    date={blogs.date}
                                    image={blogs.image}
                                    category={blogs.category}
                                    title={blogs.title}
                                />
                            </Col>
                        ))}
                    </Row>
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
                </Container>
            </section>
        </div>
    )
}

export default BlogCards