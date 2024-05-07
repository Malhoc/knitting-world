import React from 'react';
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap';

const RecentStories = () => {
    const stories = [
        {
            imageSrc: 'assets/images/blog/blog-thumb/01.jpg',
            title: 'Spring summer fashion trends',
            date: '20 April 2019'
        },
        {
            imageSrc: 'assets/images/blog/blog-thumb/02.jpg',
            title: '2020 styling trend',
            date: '15 April 2019'
        },
        {
            imageSrc: 'assets/images/blog/blog-thumb/03.jpg',
            title: 'Is branched For You Every',
            date: '5 April 2019'
        }
    ];

    return (
        <div className="widget border-bottom mb-8 pb-8">
            <h4 className="mb-5">Recent Stories</h4>
            {stories.map((story, index) => (
                <article key={index} className='mt-5'>
                    <Media className="align-items-center">
                        <img src={story.imageSrc} className="mr-3" alt="..." />
                        <Media body>
                            <h5 className="h6">
                                <Link className="link-title" to="blog-single.html">{story.title}</Link>
                            </h5>
                            <Link className="d-inline-block text-muted small font-w-5" to="#">{story.date}</Link>
                        </Media>
                    </Media>
                </article>
            ))}
        </div>
    );
};

export default RecentStories;
