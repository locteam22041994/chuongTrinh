import { Button, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
import MenuAntd from "./MenuAntd";
import Header from "./Header";
import Slide from "./Slide";
import Category from "./Category";
function Layout() {
  return (
    <>
      <div className="mx-auto w-full">
        <Header />
        <Slide />
        <Category />
      </div>
    </>
  );
}
export default Layout;
