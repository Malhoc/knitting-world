import React from "react";
import { useSelector } from "react-redux";
import BlogSection from "../Components/Blog/BlogSection";
import FeatureFurniture from "../Components/Feature/FeatureFurniture";
import HeroBanner6 from "../Components/Hero Banner/HeroBanner6";
import InstagramSectionKids from "../Components/InstagramSection/InstagramSectionKids";
import LogoSection from "../Components/LogoSection/LogoSection";
import NewsletterSection from "../Components/News/NewsLetterSection";
import NewCollectionKids from "../Components/Our Products/NewCollectionKids";
import KidsAd2 from "../Components/Section/KidsAd2";
import KidsAds from "../Components/Section/KidsAds";
import ProductIndex6 from "../Components/Trending/ProductIndex6";

function Index6() {
  const blogs = useSelector(
    (state) => state.blog.blogItems
  );
  const kidsBlogs = blogs.filter(
    (blog) => blog.category.includes("Kids") 
  );
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
  return  <div className="page-wrapper">
  <HeroBanner6 />
  <div className="page-content">
  <KidsAds />
  <ProductIndex6 />
  <KidsAd2 />
  <NewCollectionKids />
  <NewsletterSection />
  <LogoSection logos={logos} />
  <BlogSection blogs={kidsBlogs} title={"Kids Blog"}/>
{/* <FeatureIndex feature={feature} /> */}
  <div className="bg-light">
  <FeatureFurniture /></div>
  <InstagramSectionKids />

  {/* <FeatureFurniture />
  <ProductIndex5 />
  <FurnitureAds />
  <CountDownFurniture />
  <FurnitureAds2 />
  <section>
    <LogoSection logos={logos} />
  </section> */}


   
  </div>
</div>;
}

export default Index6;
