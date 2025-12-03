import { Button, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Favorite from "./Favorite";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import BreadCrum from "./BreadCrum";
import DetailProductSlide from "./DetailProductSlide";
import DetailProductInfo from "./DetailProductInfo";
import DescriptionProduct from "./DescriptionProduct";
function DetailProduct() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("tải xuống lỗi");
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setProduct(data);
      })
      .catch((err) => console.log("tải xuống lỗi", err.message));
  }, [id]);
  return (
    <>
      <div className="mx-auto w-full">
        <Header />
        <BreadCrum id={id} product={product} />
        <div className="grid grid-cols-2 mx-14 mt-4 gap-6 bg-white p-6">
          <DetailProductSlide product={product} />
          <DetailProductInfo product={product} />
        </div>
        <DescriptionProduct product={product} />
        <Favorite />
        <Footer />
        <CopyRight />
      </div>
    </>
  );
}
export default DetailProduct;
