import { Button } from "antd";
import { useEffect, useState } from "react";

function Category() {
  const [theLoai, setTheloai] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => {
        if (!res.ok) throw new Error("tải xuống lỗi");
        return res.json();
      })
      .then((data) => setTheloai(data))
      .catch((err) => console.log("tải xuống lỗi", err.message));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mt-4 mx-4">
      {theLoai.slice(0, 4).map((theloai, i) => (
        <div
          key={i}
          className="relative h-[200px] rounded-xl shadow-xl bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/Category/hinh_${i}.jpg')`,
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0  backdrop-blur-sm"></div>

          <div className="relative flex flex-col items-center justify-center h-full text-white">
            {theloai.slug}

            <Button
              type="button"
              className="bg-[#ff004f] text-[0.8rem] mt-3 text-white font-semibold rounded-full hover:bg-[#e60046] transition"
            >
              Shop now
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
