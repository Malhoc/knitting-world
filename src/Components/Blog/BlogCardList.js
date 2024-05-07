import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import { setSelectedBlog } from '../../store/reducer/blogReducer';

const BlogCardList = ({ date, imageSrc, category, title, content }) => {
    const dispatch = useDispatch();

    return (
        <>
            <Card className="border-0 bg-transparent">
                <div className="position-relative rounded overflow-hidden">
                    <div className="position-absolute z-index-1 bottom-0 bg-white text-primary shadow-primary text-center py-1 px-2 rounded ml-3 mb-3">{date}</div>
                    <img className="card-img-top hover-zoom" src={imageSrc} alt="" />
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
                                dispatch(setSelectedBlog(imageSrc));
                            }}
                        >
                            {title}
                        </Link>
                    </h2>
                    <p className="mt-2 mb-3">{content}</p>
                    <Link className="btn btn-outline-dark" to="blog-single" onClick={() => {
                        dispatch(setSelectedBlog(imageSrc));
                    }}>Read Details</Link>
                </CardBody>
            </Card>
            <hr className="my-8"></hr>
        </>
    );
};

export default BlogCardList;
