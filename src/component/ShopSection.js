import { Button } from "antd";
import { useEffect, useState } from "react";

function ShopSection() {
  return (
    <div className="w-full aspect-[16/3] mx-auto py-5 px-10">
      <div
        className="group relative rounded-xl shadow-xl bg-cover bg-center overflow-hidden w-full aspect-[16/3]"
        style={{ backgroundImage: `url('/images/Category/hinh_1.jpg')` }}
      >
        <div className="before:absolute before:inset-0 before:bg-black/50"></div>

        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h2 className="relative flex items-center justify-center text-3xl font-bold">
            Welcome to Our Shop
          </h2>
          <div className="flex gap-2">
            <Button
              type="button"
              className="bg-[#ff004f] text-[0.8rem] mt-3 text-white font-semibold rounded-full"
            >
              Shop Now
            </Button>
            <Button
              type="button"
              className="bg-[#ff004f] text-[0.8rem] mt-3 text-white font-semibold rounded-full"
            >
              New Arrivals
            </Button>
            <Button
              type="button"
              className="bg-[#ff004f] text-[0.8rem] mt-3 text-white font-semibold rounded-full"
            >
              Sale
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopSection;
