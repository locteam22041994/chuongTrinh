import { Button, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
import MenuAntd from "./MenuAntd";
import Header from "./Header";
function Layout() {
  return (
    <>
      <div className="flex items-center mx-auto w-full">
        <Header />
      </div>
    </>
  );
}
export default Layout;
