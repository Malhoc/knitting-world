import React from "react";
import HeroBanner5 from "../Components/Hero Banner/HeroBanner5";
import FeatureFurniture from "../Components/Feature/FeatureFurniture";
import ProductIndex5 from "../Components/Trending/ProductIndex5";
import FurnitureAds from "../Components/Section/FurnitureAds";
import CountDownFurniture from "../Components/Countdown/CountDownFurniture";
import FurnitureAds2 from "../Components/Section/FurnitureAds2";
import BlogSection from "../Components/Blog/BlogSection";
import { useSelector } from "react-redux";
import LogoSection from "../Components/LogoSection/LogoSection";

function Index5() {
  const blogs = useSelector(
    (state) => state.blog.blogItems
  );
  const filteredBlogs = blogs.filter(
    (blog) => blog.category.includes("Modern")
  );
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
  return <div className="page-wrapper">
    <HeroBanner5 />
    <div className="page-content">
      <FeatureFurniture />
      <ProductIndex5 />
      <FurnitureAds />
      <CountDownFurniture />
      <FurnitureAds2 />
      <BlogSection blogs={filteredBlogs} />
      <section>
        <LogoSection logos={logos} />
      </section>



    </div>
  </div>;
}

export default Index5;
