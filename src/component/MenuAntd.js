import { Menu } from "antd";
import { NavLink, Route, Routes } from "react-router-dom";
import Post from "./Post";
import Login from "./Login";
function MenuAntd() {
  const MenuItem = [
    {
      key: "posts",
      label: "Post",
      children: [
        {
          key: "1",
          label: <NavLink to="/">Home</NavLink>,
        },
        {
          key: "2",
          label: <NavLink to="/post/list">List</NavLink>,
        },
      ],
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
        type="vertical"
        onOpenChange={onOpenChange}
        // onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["posts"]}
        defaultOpenKeys={["posts"]}
        mode="inline"
        items={MenuItem}
      />
    </>
  );
}
export default MenuAntd;
