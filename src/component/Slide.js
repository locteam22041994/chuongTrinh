import { Button, Form, Input, notification, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

import MenuAntd from "./MenuAntd";
function Slide() {
  const contentStyle = {
    margin: 0,
    height: "560px",
    width: "100%",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Carousel arrows={true} dots={false} infinite={false}>
        <div>
          <img
            src="/images/Slide/hinh_1.jpg"
            alt="Slide 1"
            style={{ ...contentStyle }}
          />
        </div>
        <div>
          <img
            src="/images/Slide/hinh_2.jpg"
            alt="Slide 2"
            style={{ ...contentStyle }}
          />
        </div>
      </Carousel>
    </>
  );
}
export default Slide;
