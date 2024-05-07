import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import AboutUsTestimonial from '../Components/AboutUsTestimonial';
import BlogSection from '../Components/Blog/BlogSection';
import InstagramSection from '../Components/InstagramSection/InstagramSection';
import LogoSection from '../Components/LogoSection/LogoSection';
import NewsletterSection from '../Components/News/NewsLetterSection';
import PageHeading from '../Components/PageHeading/PageHeading';

function AboutUs() {
    const firstBreadcrumb = { label: "Pages" };
    const secondBreadcrumb = {
        label: "About Us",
        active: true,
    };
    const logos = [
        "assets/images/client/01.png",
        "assets/images/client/02.png",
        "assets/images/client/03.png",
        "assets/images/client/04.png",
        "assets/images/client/05.png",
        "assets/images/client/06.png",
        "assets/images/client/07.png",
        "assets/images/client/08.png",
    ];
    const blogs = useSelector(
        (state) => state.blog.blogItems
    );
    const filteredBlogs = blogs.filter(
        (blog) => blog.category.includes("Cloth") || blog.category.includes("Fashion")
    ).slice(0, 3);
    const reasonsData = [
        {
            icon: <i className="las la-credit-card ic-3x text-primary"></i>,
            title: 'Credit Card',
            description: 'Serspiciatis unde omnis iste natus error sit.',
        },
        {
            icon: <i className="las la-shipping-fast ic-3x text-primary"></i>,
            title: 'Free Shipping',
            description: 'Serspiciatis unde omnis iste natus error sit.',
        },
        {
            icon: <i className="las la-history ic-3x text-primary"></i>,
            title: '24/7 Support',
            description: 'Serspiciatis unde omnis iste natus error sit.',
        },
        {
            icon: <i className="las la-undo-alt ic-3x text-primary"></i>,
            title: '30 Days Returns',
            description: 'Serspiciatis unde omnis iste natus error sit.',
        },
    ];
    return (
        <div className='page-wrapper'>
            <PageHeading
                title="About Us"
                firstBreadcrumb={firstBreadcrumb}
                secondBreadcrumb={secondBreadcrumb}
            />
            <div className='page-content'>
                <section className="p-0">
                    <Container>
                        <div className="row align-items-center justify-content-between">
                            <Col lg="7" mb="6" mbLg="0">
                                <Row className="align-items-center">
                                    <Col md="6">
                                        <img src="assets/images/about/01.jpg" className="img-fluid rounded shadow" alt="..." />
                                    </Col>
                                    <Col md="6">
                                        <img src="assets/images/about/02.jpg" className="img-fluid rounded shadow mb-5" alt="..." />
                                        <img src="assets/images/about/03.jpg" className="img-fluid rounded shadow" alt="..." />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="5">
                                <div>
                                    <h6 className="text-primary mb-1">— About Us</h6>
                                    <h2 className="mt-3 font-w-5">We Have New Talents Experience</h2>
                                    <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    <p className="mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                            </Col>
                        </div>
                        <Row className="mt-8">
                            <Col lg="4" md="4">
                                <h5>
                                    <span className="text-primary font-w-7">01.</span> Our Mission
                                </h5>
                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model infancy.</p>
                            </Col>
                            <Col lg="4" md="4">
                                <h5>
                                    <span className="text-primary font-w-7">02.</span> Our Vision
                                </h5>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia Neque porro est.
                                </p>
                            </Col>
                            <Col lg="4" md="4">
                                <h5>
                                    <span className="text-primary font-w-7">03.</span> Our Value
                                </h5>
                                <p>
                                    Officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et non recusandae.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row className="align-items-end mb-5">
                            <Col lg="6">
                                <div>
                                    <h6 className="text-primary mb-1">— Why Choose Us</h6>
                                    <h2 className="mb-0">We Are Known For Our Abilities Markets.</h2>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            {reasonsData.map((reason, index) => (
                                <Col lg="3" md="6" key={index}>
                                    <div className="px-4 py-7 rounded text-center border">
                                        {reason.icon}
                                        <h5 className="mt-2 mb-1">{reason.title}</h5>
                                        <p className="mb-0">{reason.description}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                <AboutUsTestimonial />
                <NewsletterSection />
                <LogoSection logos={logos} />
                <BlogSection blogs={filteredBlogs} title={"Fashion Blogs"} />
                <InstagramSection />
            </div>
        </div>
    )
}

export default AboutUs