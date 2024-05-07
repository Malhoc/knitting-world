import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { setSelectedBlog } from "../../store/reducer/blogReducer";

const BlogCard = ({ date, image, category, title }) => {
  const dispatch = useDispatch();
  return (
    <Card style={{ border: "none" }} className="bg-transparent">
      <div className="position-relative rounded overflow-hidden">
        <div className="position-absolute z-index-1 bottom-0 bg-white text-primary shadow-primary text-center py-1 px-2 rounded ml-3 mb-3">
          {date}
        </div>
        <img className="card-img-top hover-zoom" src={image} alt="" />
      </div>
      <CardBody className="px-0 pb-0">
        <div>
          {category.map((cat, i) => (
            <Link key={i} className="d-inline-block link-title btn-link text-small mr-2" to="#">
              {cat}
            </Link>
          ))}
        </div>
        <h2 className="h5 font-w-6 mt-2 mb-0">
          <Link
            className="link-title"
            to="/blog-single"
            onClick={() => {
              dispatch(setSelectedBlog(image));
            }}
          >
            {title}
          </Link>
        </h2>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
