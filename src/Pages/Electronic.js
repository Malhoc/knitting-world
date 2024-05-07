import React from "react";
import HeroBanner4 from "../Components/Hero Banner/HeroBanner4";
import ElectronicAd from "../Components/Section/ElectronicAd";
import ProductIndex4 from "../Components/Trending/ProductIndex4";
import NewCollection4 from "../Components/Our Products/NewCollection4";
import ElectronicTestimonial from "../Components/Testimonial/ElectronicTestimonial";
import BlogSection from "../Components/Blog/BlogSection";
import { useSelector } from "react-redux";
import FeatureSection from "../Components/Feature/FeatureElectronic";

function Index4() {
  const blogs = useSelector(
    (state) => state.blog.blogItems
  );
  const filteredBlogs = blogs.filter(
    (blog) => blog.category.includes("Electronic")).slice(0, 4);
  return <div className="page-wrapper">
    <HeroBanner4 />

    <div className="page-content">
      <ElectronicAd />
      <ProductIndex4 />
      <NewCollection4 />
      <ElectronicTestimonial />
      <BlogSection blogs={filteredBlogs} title={"Electronic Blog"} />
      <FeatureSection />
    </div>
  </div>;
}

export default Index4;
