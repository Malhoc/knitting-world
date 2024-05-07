import React from "react";
import { Col, Container, Row } from "reactstrap";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const BlogSection = ({ blogs, title }) => {
  return (
    <section>
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg="8" md="10" sm="12">
            <div>
              <h6 className="text-primary mb-1">— {title}</h6>
              <h2 className="mb-0">Latest News Feed</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {blogs.map((blogs, index) => (
            <Col key={index} lg="4" className="mt-5 mt-lg-0">
              <BlogCard
                date={blogs.date}
                image={blogs.image}
                category={blogs.category}
                title={blogs.title}
              />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center text-center mt-5">
          <Col>
            <Link className="btn btn-dark" to="blog-card">
              View All Blog
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
