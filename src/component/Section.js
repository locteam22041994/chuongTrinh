import { Button, Carousel } from "antd";
import { useEffect, useState } from "react";
function Section() {
  const contentStyle = {
    margin: 0,
    aspectRatio: "16 / 5",
    width: "100%",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    padding: "0 40px",
  };

  return (
    <>
      <section className="my-10 text-center">
        <h2 className="text-3xl font-bold">
          Discover <span className="text-red-600">Our Brands</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Explore the top brands we feature in our store
        </p>
      </section>
    </>
  );
}

export default Section;
