import React from "react";
import { useSelector } from "react-redux";
import BlogSection from "../Components/Blog/BlogSection";
import CountDown3 from "../Components/Countdown/CountDown3";
import HeroBanner3 from "../Components/Hero Banner/HeroBanner3";
import InstagramSection from "../Components/InstagramSection/InstagramSection";
import LogoSection2 from "../Components/LogoSection/LogoSection2";
import NewCollection3 from "../Components/Our Products/NewCollection3";
import ProductAds from "../Components/Section/ProductAds";
import ProductIndex3 from "../Components/Trending/ProductIndex3";

function Index3() {
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
  ).slice(0, 4);
  return <div className="page-wrapper">
    <HeroBanner3 />

    <div className="page-content">
      <ProductIndex3 />
      <CountDown3 />
      <NewCollection3 />
      <ProductAds />
      <LogoSection2 logos={logos} />
      <BlogSection blogs={filteredBlogs} title={"Fashion Blog"} />
      <InstagramSection />
    </div>
  </div>;
}

export default Index3;
