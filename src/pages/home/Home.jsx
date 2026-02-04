import React from "react";
import "./home.css";



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa6";


import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import HomeSwiper from "../../components/homeSwiper/HomeSwiper";
import SimplyUnique from "../../components/simplyUnique/SimplyUnique";
import Category from "../../components/category/Category";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import Support from "../../components/support/Support";
import SalePrice from "../../components/salePrice/SalePrice";



function Home() {
  return (
    <main>
      <HomeSwiper />
      <SimplyUnique />
      <Category />
      <NewArrivals />
      <Support />
      <SalePrice />
      
    </main>
  );
}

export default Home;

