import { Button, Form, Input, notification, Col, Row, Slider } from "antd";
import { useEffect, useState } from "react";
import MenuAntd from "./MenuAntd";
import Header from "./Header";
import Slide from "./Slide";
function Category() {
  const [theLoai, setTheloai] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => {
        if (!res.ok) {
          throw new Error("tải xuống lỗi");
        }
        return res.json();
      })

      .then((data) => {
        setTheloai(data);
      })
      .catch((err) => {
        console.log("tải xuống lỗi", err.message);
      });
  }, []);
  return (
    <>
      <Row gutter={[16, 16]}>
        {theLoai.map((theloai, i) => (
          <Col key={i}>{theloai.slug}</Col>
        ))}
      </Row>
    </>
  );
}
export default Category;
