import { Button, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
function Thongtindangnhap() {
  const [token, setToken] = useState("");
  const [Thongtinuser, setThongtinuser] = useState(null);

  useEffect(() => {
    const Tokenduocluutru = localStorage.getItem("token");
    if (Tokenduocluutru) {
      setToken(Tokenduocluutru);
      fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Tokenduocluutru}`, // thêm Bearer vào cho đúng chuẩn
        },
        //credentials: "include",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Lỗi khi trả về thông tin user");
          }
          return res.json();
        })
        .then((data) => {
          setThongtinuser(data);
          //console.log(data.address.address);
        })
        .catch((err) => {
          console.error("Lỗi khi fetch:", err);
        });
    } else {
      console.warn("Không tìm thấy token trong localStorage");
    }
  }, [token]);

  return (
    <div>
      <h2>Thông tin đăng nhập</h2>
      <p>Token: {token}</p>

      {Thongtinuser ? (
        <div>
          <h3>Dữ liệu người dùng:</h3>
          <p>
            Tên: {Thongtinuser.firstName} {Thongtinuser.lastName}
          </p>
          <p>Email: {Thongtinuser.email}</p>
          <p>Địa chỉ: {Thongtinuser.address.address}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Thongtindangnhap;
