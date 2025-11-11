import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import MenuAntd from "./component/MenuAntd";
import Post from "./component/Post";
import Thongtindangnhap from "./component/Thongtindangnhap";
import Header from "./component/Header";
import Layout from "./component/Layout";

function App() {
  return (
    <>
      <div className="flex gap-5">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Route con */}
            {/* <Route index element={<div>Trang chủ</div>} /> */}

            <Route path="post/list" element={<Post />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="Thongtindangnhap" element={<Thongtindangnhap />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
