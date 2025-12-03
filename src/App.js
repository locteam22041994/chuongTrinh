import { Route, Routes } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./component/Login";
import MenuAntd from "./component/MenuAntd";
import Post from "./component/Post";
import Thongtindangnhap from "./component/Thongtindangnhap";
import Header from "./component/Header";
import Layout from "./component/Layout";
import DetailProduct from "./component/DetailProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Route con */}
          {/* <Route index element={<div>Trang chủ</div>} /> */}

          <Route path="post/list" element={<Post />} />
        </Route>
        <Route path="product/:id" element={<DetailProduct />} />
        <Route path="login" element={<Login />} />
        <Route path="Thongtindangnhap" element={<Thongtindangnhap />} />
      </Routes>
    </>
  );
}
export default App;
