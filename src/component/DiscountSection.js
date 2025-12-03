import { Button, Carousel } from "antd";
import { useEffect, useState } from "react";
function DiscountSection() {
  return (
    <>
      <section className="my-10 text-center">
        <h2 className="text-2xl font-bold">
          Join our newsletter and{" "}
          <span className="text-red-600">get $50 discount</span> for your first
          order
        </h2>
        <p className="text-gray-500 mt-5 flex justify-center gap-2">
          <input
            type="text"
            className="rounded-full placeholder:text-gray-400 placeholder:text-base focus:outline-none border border-gray-300 px-4 py-2"
            placeholder="Enter your email address"
          ></input>
          <Button
            type="button"
            className="
        bg-[#ff004f] text-[0.8rem] text-white font-semibold rounded-full"
          >
            Subscribe
          </Button>
        </p>
      </section>
    </>
  );
}

export default DiscountSection;
