import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import MenuAntd from "./component/MenuAntd";
import Post from "./component/Post";
function App() {
  return (
    <>
      <div className="flex gap-5">
        <Routes>
          <Route path="/" element={<MenuAntd />}>
            {/* Route con */}
            <Route index element={<div>Trang chủ</div>} />
            <Route path="post/list" element={<Post />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
