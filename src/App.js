import React, { StrictMode, useState } from "react";
import "./App.css";
import Post from "./component/Post";
import MenuAntd from "./component/MenuAntd";
function App() {
  return (
    <>
      <div className="flex gap-5">
        <MenuAntd />
      </div>
    </>
  );
}

export default App;
