import { Button, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
import MenuAntd from "./MenuAntd";
function Header() {
  return (
    <>
      <header className="bg-black flex w-full">
        <a href="/" class="logo">
          <img
            className="pl-24 pr-24 max-w-[350px] w-[300px] pt-[20px] max-h-[100px] flex items-center justify-center h-[60px] space-x-4"
            src="/images/logo/logo.png"
            alt="Tên thương hiệu"
          />
        </a>
        <MenuAntd />
        <div className="bg-black flex items-center justify-end w-full h-20 space-x-4">
          <Button
            type="button"
            className="bg-[#ff004f] text-[0.8rem] text-white font-semibold rounded-full px-6 py-2 hover:bg-[#e60046]  transition"
          >
            Register
          </Button>

          <Button
            type="button"
            className="bg-[#ff004f] text-[0.8rem] text-white font-semibold rounded-full px-6 py-2 hover:bg-[#e60046] transition"
          >
            Login
          </Button>
          <div className="flex space-x-1">
            <Button
              type="button"
              className="flex p-0 items-center justify-center hover:bg-[#111827]  transition rounded-md"
            >
              <img
                src="/images/button_header/gio_hang.png"
                alt="giỏ hàng"
                className="w-9 h-9 "
              />
            </Button>

            <Button
              type="button"
              className="flex p-0  items-center justify-center hover:bg-[#111827] transition rounded-md"
            >
              <img
                src="/images/button_header/tim_kiem.png"
                alt="tìm kiếm"
                className="w-9 h-9"
              />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
