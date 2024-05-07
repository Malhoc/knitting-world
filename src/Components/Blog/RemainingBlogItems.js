import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from "react";
import OwlCarousel from 'react-owl-carousel';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedBlog } from "../../store/reducer/blogReducer";

const RemainingBlogItems = ({ blogs }) => {
    const dispatch = useDispatch();
    const owlOptions = {
        dots: false,
        nav: false,
        items: 2,
        margin: 30,

    };
    return (
        <OwlCarousel className="owl-carousel no-pb" {...owlOptions} autoPlay  navText={["<span class='las la-arrow-left'><span></span></span>","<span class='las la-arrow-right'><span></span></span>"]}>
            {blogs.map((blog) => (
                <div className="item" key={blog.id}>
                    <div className="card border-0 bg-transparent">
                        <div className="position-relative rounded overflow-hidden">
                            <div
                                className="position-absolute z-index-1 bottom-0 bg-white text-primary shadow-primary text-center py-1 px-2 rounded ml-3 mb-3">
                                {blog.date}</div>
                            <img className="card-img-top hover-zoom " style={{ height: '25rem', width: '30rem' }} src={blog.image} alt="" />
                        </div>
                        <div className="card-body px-0 pb-0">
                            <div>
                                {blog.category.map((cat, i) => (
                                    <Link key={i} className="d-inline-block link-title btn-link text-small mr-2" to="#">
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                            <h2 className="h5 font-w-6 mt-3">
                                <Link
                                    className="link-title"
                                    to="/blog-single"
                                    onClick={() => {
                                        dispatch(setSelectedBlog(blog.image));
                                    }}
                                >
                                    {blog.title}
                                </Link>
                            </h2>
                        </div>
                        <div></div>
                    </div>
                </div>
            ))}
        </OwlCarousel>
    );
};

export default RemainingBlogItems;
