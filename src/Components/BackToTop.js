import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toptoBottom = () => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            var scrollTop =
                (document.documentElement && document.documentElement.scrollTop) ||
                document.body.scrollTop;
            if (scrollTop > 150) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`scroll-top pb-5  ${visible ? "scroll-visible" : ""}`}
            onClick={toptoBottom}
        >
            <Link className="smoothscroll">
                <i className="las la-angle-up"></i>
            </Link>
        </div>
    );
};

export default BackToTop;
