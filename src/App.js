import React, { StrictMode, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Post from "./component/Post";
import MenuAntd from "./component/MenuAntd";
import Login from "./component/Login";
function App() {
  return (
    <>
      <div className="flex gap-5">
        <Routes>
          <Route path="/" element={<MenuAntd />} />
          <Route path="/post/list" element={<Post />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Post /> */}
      </div>
    </>
  );
}

export default App;
