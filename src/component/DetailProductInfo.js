import { Button, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/DetailProductSlide.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
function DetailProductInfo({ product }) {
  let Star = "";

  for (let i = 0; i <= Math.floor(product?.rating) - 1; i++) {
    Star = Star + "★";
  }

  return (
    <>
      <div>
        <div className="mb-4 pb-4 border-b border-gray-line">
          <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
          <div className="flex gap-2 items-center mb-8 pb-8 border-b border-gray-line">
            <span>{Star}</span>
            <span>{`(${product?.reviews?.length || 0} Reviews)`}</span>
            <span className="text-red-600">Write a review</span>
          </div>
          <div className="mb-4 pb-4 border-b border-gray-line">
            <p className="flex gap-2">
              Brand:<strong>{product?.brand || 0}</strong>
            </p>
            <p className="flex gap-2">
              Product code:<strong>{product?.meta?.barcode || 0}</strong>
            </p>
            <p className="flex gap-2">
              Availability:<strong>{product?.availabilityStatus || 0}</strong>
            </p>
          </div>
          <div className="text-2xl font-semibold mb-8">{product?.price}</div>
          <div className="flex gap-2">
            <button className="bg-[#ff004f] bg-primary hover:bg-transparent border border-transparent hover:border-primary text-white hover:text-primary font-semibold w-10 h-10 rounded-full flex items-center justify-center focus:outline-none">
              -
            </button>
            <input type="number" value="1" readonly />
            <button className="bg-[#ff004f] bg-primary hover:bg-transparent border border-transparent hover:border-primary text-white hover:text-primary font-semibold w-10 h-10 rounded-full flex items-center justify-center focus:outline-none">
              +
            </button>
          </div>
          <Button
            type="button"
            className="
        bg-[#ff004f] mt-8 text-[0.8rem] text-white font-semibold rounded-full"
          >
            Add To Card
          </Button>
        </div>
        <div className="flex space-x-4 my-6">
          <Link to="#">
            <img
              src={`/images/Footer/facebook.svg`}
              alt={`facebook logo`}
              className="w-4 h-4"
            />
          </Link>
          <Link to="#">
            <img
              src={`/images/Footer/instagram.svg`}
              alt={`instagram logo`}
              className="w-4 h-4"
            />
          </Link>
          <Link to="#">
            <img
              src={`/images/Footer/pinterest.svg`}
              alt={`pinterest logo`}
              className="w-4 h-4"
            />
          </Link>
          <Link to="#">
            <img
              src={`/images/Footer/twitter.svg`}
              alt={`twitter logo`}
              className="w-4 h-4"
            />
          </Link>
          <Link to="#">
            <img
              src={`/images/Footer/youtube.svg`}
              alt={`youtube logo`}
              className="w-4 h-4"
            />
          </Link>
        </div>
        <div>
          <h3>Product Description</h3>
          <p>{product?.description}</p>
        </div>
      </div>
    </>
  );
}
export default DetailProductInfo;
