import { Button, Form, Input, notification, Table } from "antd";
import { useEffect, useState } from "react";
import "../css/DescriptionProduct.css";
import Slider from "react-slick";
function DescriptionProduct({ product }) {
  let Star = "";

  for (let i = 0; i <= Math.floor(product?.rating) - 1; i++) {
    Star = Star + "★";
  }
  const dataSource = [
    {
      key: "1",
      size: "Small",
      waist: "28-30",
      chest: "34-36",
      sleeveLength: "32-33",
    },
    {
      key: "2",
      size: "Medium",
      waist: "32-34",
      chest: "38-40",
      sleeveLength: "33-34",
    },
    {
      key: "3",
      size: "Large",
      waist: "36-38",
      chest: "42-44",
      sleeveLength: "34-35",
    },
    {
      key: "4",
      size: "X-Large",
      waist: "40-42",
      chest: "46-48",
      sleeveLength: "35-36",
    },
  ];

  const columns = [
    {
      title: "SIZE",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "CHEST (INCHES)",
      dataIndex: "chest",
      key: "chest",
    },
    {
      title: "WAIST (INCHES)",
      dataIndex: "waist",
      key: "waist",
    },
    {
      title: "SLEEVE LENGTH (INCHES)",
      dataIndex: "sleeveLength",
      key: "sleeveLength",
    },
  ];

  const mangThanhPhan = [];
  const [activeTab, setActiveTab] = useState("description");

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex border-b-2 border-gray-200 gap-8 mb-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`pb-3 font-semibold transition-all relative `}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("additional")}
            className={`pb-3 font-semibold transition-all relative }`}
          >
            Additional information
          </button>

          <button
            onClick={() => setActiveTab("size")}
            className={`pb-3 font-semibold transition-all relative }`}
          >
            Size & Shape
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-3 font-semibold transition-all relative }`}
          >
            Reviews ({product?.reviews?.length})
          </button>
        </div>

        <div>
          {activeTab === "description" && (
            <div className="flex space-x-8">
              <div>
                <h3>{product?.description}</h3>
                <p>{product?.description}</p>
              </div>
              <div>
                <h3>Material & Washing</h3>
                <p>
                  Material:<span className="font-semibold">100% cotton</span>
                </p>
                <p>
                  Fabric:<span className="font-semibold">Soft jersey</span>
                </p>
                <p>
                  Care instructions:
                  <span className="font-semibold">
                    Machine wash at 30°C, do not tumble dry, iron on low heat,
                    do not bleach
                  </span>
                </p>
              </div>
              <div>
                <h3>Size & Shape</h3>
                <p>
                  Model height:
                  <span className="font-semibold">
                    Our model is 180 cm tall and is wearing size M
                  </span>
                </p>
                <p>
                  Fit:<span className="font-semibold">Regular</span>
                </p>
                <p>
                  Length:
                  <span className="font-semibold">Standard</span>
                </p>
                <p>
                  Sleeve length:
                  <span className="font-semibold">Short sleeves</span>
                </p>
              </div>
            </div>
          )}

          {activeTab === "additional" && (
            <div>
              <p>Additional information about the product.</p>
              <div className="flex flex-col">
                <div>
                  <h3 className="font-semibold">Colors</h3>
                  <p>
                    Available color:
                    <span className="text-red-600 pl-2">
                      Red, Blue, Green, Black, White
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Brand</h3>
                  <p>
                    This T-shirt is made by
                    <span className="text-red-600 pl-2">{product.brand}</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Material & Care</h3>
                  <p className="flex flex-col">
                    <span>Material 100% Cotton</span>
                    <span>
                      Care instructions: Machine wash at 40 °C, do not tumble
                      dry, iron at medium temperature, do not bleach.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "size" && (
            <Table dataSource={dataSource} columns={columns} />
          )}

          {activeTab === "reviews" && (
            <>
              <div className="space-y-6">
                <h3 className="font-semibold">Customer Reviews</h3>
                <div>
                  {product.reviews.map((review, index) => {
                    return (
                      <>
                        <div className="flex flex-row gap-2 pb-2">
                          <span key={index}>{review.reviewerName}</span>
                          <span className="text-red-600 ">{Star}</span>
                        </div>
                        <p className="border-b pb-2">{review.comment}</p>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="w-full">
                <h3 className="font-semibold">Write a Review</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col gap-2">
                    <label>Name</label>
                    <input
                      type="text"
                      name="reviewName"
                      className=" border border-black rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input
                      type="email"
                      name="reviewEmail"
                      className="border border-black rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Rating</label>
                    <select className="border border-black rounded-sm">
                      <option value="5">★★★★★</option>
                      <option value="4">★★★★</option>
                      <option value="3">★★★</option>
                      <option value="2">★★</option>
                      <option value="1">★</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label>Review</label>
                  <textarea
                    name="reviewTextarea"
                    className="border border-black rounded-sm"
                  ></textarea>
                </div>
                <div></div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default DescriptionProduct;
