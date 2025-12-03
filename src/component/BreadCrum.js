import { Button, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Header from "./Header";
import Favorite from "./Favorite";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
function BreadCrum({ product }) {
  return (
    <>
      <div className="flex gap-2 mx-14 mt-4 bg-white p-6">
        <NavLink className="hover:text-red-600" to={"/"}>
          Home
        </NavLink>
        <span>></span>
        <NavLink className="hover:text-red-600" to={"/"}>
          Shop
        </NavLink>
        <span>></span>
        <NavLink className="hover:text-red-600" to={"/"}>
          T-shirts
        </NavLink>
        <span>></span>
        <span>{product.title}</span>
      </div>
    </>
  );
}
export default BreadCrum;
