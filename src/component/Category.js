import { Button } from "antd";
import { useEffect, useState } from "react";

function Category() {
  const [theLoai, setTheloai] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories?limit=3")
      .then((res) => {
        if (!res.ok) throw new Error("tải xuống lỗi");
        return res.json();
      })
      .then((data) => {
        setTheloai(data);
      })
      .catch((err) => console.log("tải xuống lỗi", err.message));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mt-4 mx-4 ">
      {theLoai.slice(0, 3).map((theloai, i) => (
        <div
          key={i}
          className="group relative rounded-xl shadow-xl bg-cover bg-center overflow-hidden w-full aspect-[4/2]"
          style={{ backgroundImage: `url('/images/Category/hinh_${i}.jpg')` }}
        >
          <div className="before:absolute before:inset-0 before:bg-black/50"></div>

          <div className="relative flex flex-col items-center justify-center h-full text-white">
            {theloai.slug}

            <Button
              type="button"
              className={`
        bg-[#ff004f] text-[0.8rem] mt-3 text-white font-semibold rounded-full opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out`}
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
