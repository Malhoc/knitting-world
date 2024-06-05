import React from "react";
import { useSelector } from "react-redux";
import BlogSection from "../Components/Blog/BlogSection";
import CountDown from "../Components/Countdown/CountDown";
import FeatureIndex from "../Components/Feature/FeatureIndex";
import BannerSliderIndex from "../Components/Hero Banner/BannerSlideIndex";
import InstagramSection from "../Components/InstagramSection/InstagramSection";
import LogoSection from "../Components/LogoSection/LogoSection";
import NewsletterSection from "../Components/News/NewsLetterSection";
import NewCollection from "../Components/Our Products/NewCollection";
import Section from "../Components/Section/Section";
import ProductIndex from "../Components/Trending/ProductIndex";
import ProductAds from "../Components/Section/ProductAds";
import ContactForm from "./contact/ContactForm";
import ContactSec from "../Components/Section/ContactSec";
import Countdown3 from "../Components/Countdown/CountDown3";
import { Col, Container, Row } from 'reactstrap'
import { Link } from "react-router-dom";
import AboutSection from "../Components/AboutSection";
import Process from "../Components/Process";
import Influencer from "../Components/Influencer";
import FeatureIndex2 from "../Components/Feature/FeatureIndex2";
import FeatureSection from "../Components/Feature/FeatureElectronic";
import FootballScarvesSec from "../Components/FootballScarvesSec";
import CustomScarvesContent from "../Components/CustomScarvesContent";
import KnitwearSec from "../Components/Section/KnitwearSec";
export default function Index() {
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
  const blogs = useSelector(
    (state) => state.blog.blogItems
  );
  const filteredBlogs = blogs.filter(
    (blog) => blog.category.includes("Cloth") || blog.category.includes("Fashion")
  ).slice(0, 4);


  return (
    <div className="page-wrapper">
      <BannerSliderIndex />
      <div className="page-content">
        <div className="mt-5">
        <KnitwearSec/>
        <FootballScarvesSec/>
        <ProductIndex />
        <AboutSection/>
        <Process/>
        <Influencer/>
        <CustomScarvesContent/>
        <ContactSec />
        {/* <FeatureIndex feature={feature} /> */}
        {/* <FeatureSection /> */}
        <InstagramSection />
        </div>
        {/* <ProductAds/> */}
        {/* <CountDown /> */}
        {/* <NewCollection /> */}
        {/* <Section /> */}
        {/* <NewsletterSection /> */}
        {/* <Countdown3 /> */}
        {/* <LogoSection logos={logos} /> */}
        {/* <BlogSection blogs={filteredBlogs} title={"Fashion Blog"} /> */}
        
      </div>
    </div>
  );
}
