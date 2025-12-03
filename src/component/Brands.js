import { Button, Carousel } from "antd";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "../css/Brands.css";
function Brands() {
  const contentStyle = {
    margin: 0,
    color: "#fff",
    textAlign: "center",
    width: "150px",
    height: "auto",
  };
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="brands-slider">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img
                src="/images/Brands/hinh_1.svg"
                alt="Slide 1"
                style={{ ...contentStyle }}
              />
            </div>
            <div>
              <img
                src="/images/Brands/hinh_2.svg"
                alt="Slide 1"
                style={{ ...contentStyle }}
              />
            </div>
            <div>
              <img
                src="/images/Brands/hinh_3.svg"
                alt="Slide 1"
                style={{ ...contentStyle }}
              />
            </div>
            <div>
              <img
                src="/images/Brands/hinh_4.svg"
                alt="Slide 1"
                style={{ ...contentStyle }}
              />
            </div>
            <div>
              <img
                src="/images/Brands/hinh_5.svg"
                alt="Slide 1"
                style={{ ...contentStyle }}
              />
            </div>
            <div>
              <img
                src="/images/Brands/hinh_6.svg"
                alt="Slide 1"
                style={{ ...contentStyle }}
              />
            </div>
            <div>
              <img
                src="/images/Brands/hinh_7.svg"
                alt="Slide 1"
                style={{ ...contentStyle }}
              />
            </div>
            <div>
              <img
                src="/images/Brands/hinh_8.svg"
                alt="Slide 1"
                style={{ ...contentStyle }}
              />
            </div>
          </Slider>
        </div>
      </div>
      {/* <div className="max-w-full aspect-[16/3] mx-auto py-5 px-10"> */}
      {/* <Carousel arrows={true} dots={false} infinite={false}>
          <div>
            <img
              src="/images/Brands/hinh_1.png"
              alt="Slide 1"
              style={{ ...contentStyle }}
            />
          </div>

          <div>
            <img
              src="/images/Brands/hinh_1.png"
              alt="Slide 2"
              style={{ ...contentStyle }}
            />
          </div>
        </Carousel> */}
      {/* </div> */}
    </>
  );
}

export default Brands;
