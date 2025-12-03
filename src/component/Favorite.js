import { Button } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorite() {
  const [products, setProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("tải xuống lỗi");
        return res.json();
      })
      .then((data) => {
        const latest = [...data.products]
          .sort(
            (a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt)
          )
          .slice(4, 8);
        setLatestProducts(latest);
        setProducts(data.products);
      })
      .catch((err) => console.log("tải xuống lỗi", err.message));
  }, []);

  return (
    <>
      <div className="mx-4 mt-4 bg-white rounded-2xl shadow-md p-6">
        <h2 class="text-2xl font-semibold mb-6">Latest products</h2>
        <div className="grid grid-cols-4 gap-4 mt-4 mx-4">
          {latestProducts.slice(0, 4).map((product) => (
            <Link to={`/product/${product.id}`}>
              <div
                key={product.id}
                className="rounded-xl shadow-xl overflow-hidden w-full"
              >
                <img
                  src={`/images/Product/${product.id}/hinh_1.png`}
                  alt={product.title}
                  className="inset-0 w-full object-cover aspect-[3/4]"
                />
                <div className="p-4">
                  <p className="font-semibold">{product.title}</p>
                  <p className="font-semibold">{product.category}</p>
                  <p className="font-semibold flex gap-2">
                    <span className="text-red-600">{product.price}</span>
                    <span className="line-through w-fit text-gray-500 text-sm">
                      {(
                        product.price /
                        (1 - product.discountPercentage / 100)
                      ).toFixed(2)}
                    </span>
                  </p>
                  <Button
                    type="button"
                    className="
        bg-[#ff004f] text-[0.8rem] text-white font-semibold rounded-full w-full"
                  >
                    Add To Card
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorite;
