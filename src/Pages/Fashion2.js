import React from "react";
import { useSelector } from "react-redux";
import BlogSection from "../Components/Blog/BlogSection";
import Countdown2 from "../Components/Countdown/CountDown2";
import FeatureIndex2 from "../Components/Feature/FeatureIndex2";
import HeroBanner2 from "../Components/Hero Banner/HeroBanner2";
import InstagramSection from "../Components/InstagramSection/InstagramSection";
import NewCollection2 from "../Components/Our Products/NewCollection2";
import Section2 from "../Components/Section/Section2";
import ProductIndex2 from "../Components/Trending/ProductIndex2";
function Index2() {
  const feature = [
    {
      icon: "las la-truck ic-2x text-primary",
      title: "Free Shipping",
      description: "Writing result-oriented",
    },
    {
      icon: "las la-hand-holding-usd ic-2x text-primary",
      title: "Money Return",
      description: "Writing result-oriented",
    },
    {
      icon: "las la-lock ic-2x text-primary",
      title: "Secure Payment",
      description: "Writing result-oriented",
    },
    {
      icon: "las la-headset ic-2x text-primary",
      title: "24/7 Support",
      description: "Writing result-oriented",
    },
  ];
  const blogs = useSelector(
    (state) => state.blog.blogItems
  );
  const filteredBlogs = blogs.filter(
    (blog) => blog.category.includes("Cloth") || blog.category.includes("Fashion")
  ).slice(0, 4);
  return <div className="page-wrapper">
    <HeroBanner2 />
    <div className="page-content">

      <ProductIndex2 />
      <Section2 />
      <FeatureIndex2 feature={feature} />
      <NewCollection2 />
      <Countdown2 />
      <BlogSection blogs={filteredBlogs} title={"Fashion Blog"} />
      <InstagramSection />
    </div>
  </div>;
}

export default Index2;
