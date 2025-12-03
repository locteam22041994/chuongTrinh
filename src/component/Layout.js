import { Button, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
import MenuAntd from "./MenuAntd";
import Header from "./Header";
import Slide from "./Slide";
import Category from "./Category";
import Favorite from "./Favorite";
import Brands from "./Brands";
import Section from "./Section";
import ShopSection from "./ShopSection";
import SectionBlog from "./SectionBlog";
import BlogNews from "./BlogNews";
import DiscountSection from "./DiscountSection";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import Popular from "./Popular";

function Layout() {
  return (
    <>
      <div className="mx-auto w-full">
        <Header />
        <Slide />
        <Category />
        <Popular />
        <Favorite />
        <Section />
        <Brands />
        <ShopSection />
        <SectionBlog />
        <BlogNews />
        <DiscountSection />
        <Footer />
        <CopyRight />
      </div>
    </>
  );
}
export default Layout;
