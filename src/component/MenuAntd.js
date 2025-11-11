import { Menu } from "antd";
import { NavLink, Route, Routes, Outlet } from "react-router-dom";
import Post from "./Post";
import Login from "./Login";
import Header from "../css/header.css";
function MenuAntd() {
  const MenuItem = [
    {
      key: "Home",
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "Men",
      label: "Men",
      children: [
        {
          key: "Thu đông",
          label: "Thu đông",
        },
      ],
    },
    {
      key: "Women",
      label: "Women",
      children: [
        {
          key: "Thu đông",
          label: "Thu đông",
        },
      ],
    },
    {
      key: "Shop",
      label: <NavLink to="/">Shop</NavLink>,
    },
    {
      key: "Product",
      label: <NavLink to="/">Product</NavLink>,
    },
    {
      key: "404 page",
      label: <NavLink to="/">404 page</NavLink>,
    },
    {
      key: "Checkout",
      label: <NavLink to="/">Checkout</NavLink>,
    },
  ];

  // const onClick = (e) => {
  //   console.log(e)
  //   MenuItem.map((item) => {
  //     console.log(item.key)
  //   })
  // }
  const onOpenChange = (openKey) => {
    console.log(openKey);
  };
  return (
    <>
      <Menu
        theme="dark"
        type="vertical"
        onOpenChange={onOpenChange}
        // onClick={onClick}
        style={{
          width: "46em",
          fontSize: "0.8rem",
          lineHeight: "6",
          backgroundColor: "black",
        }}
        rootClassName="compact-menu"
        defaultSelectedKeys={["posts"]}
        defaultOpenKeys={["posts"]}
        mode="horizontal"
        items={MenuItem}
      />

      <Outlet />
    </>
  );
}
export default MenuAntd;
