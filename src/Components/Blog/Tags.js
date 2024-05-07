import React from 'react';
import { Link } from 'react-router-dom';

const Tags = () => {
    // Sample data for tags
    const tags = ['Bootsland', 'Web Design', 'Saas', 'Corporate', 'Sass', 'Software', 'Landing', 'Startup'];

    return (
        <div className="widget border-bottom mb-8 pb-8">
            <h4 className="mb-5">Tags</h4>
            <div>
                {tags.map((tag, index) => (
                    <Link key={index} className="btn link-title btn-sm bg-light m-1" to="#">
                        {tag}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Tags;
