import { Button, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/DetailProductSlide.css";
import Slider from "react-slick";
function DetailProductSlide() {
  const mangHinh = [];
  const { id } = useParams();

  for (let i = 1; i <= 5; i++) {
    mangHinh.push(
      <div key={i}>
        <img
          src={`/images/Product/${id}/hinh_${i}.png`}
          className={
            "h-auto w-full max-w-full rounded-lg object-cover md:h-[580px] object-top"
          }
        />
      </div>
    );
  }

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            className="object-cover object-center max-h-30 max-w-full rounded-lg cursor-pointer"
            src={`/images/Product/${id}/hinh_${i + 1}.png`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slider-container ">
        <Slider {...settings}>{mangHinh}</Slider>
      </div>
    </>
  );
}
export default DetailProductSlide;
