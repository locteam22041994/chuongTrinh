import { Button, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Thongtindangnhap from "./Thongtindangnhap";
function Login(props) {
  const navigate = useNavigate();
  const { setChitiet, Chitiet, handleSave, handleAdd, mode } = props;
  const [form] = Form.useForm();
  const [items, setItems] = useState(null);
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("data"));
    console.log(item);
    if (item) {
      setItems(item);
    }
  }, []);

  const onFinish_login = (e) => {
    if (!e["user"] || !e["password"]) {
      return <>{window.alert("nhập thiếu")}</>;
    }
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: e["user"],
        password: e["password"],
        expiresInMins: 30, // optional, defaults to 60
      }),
      //credentials: "include", // Include cookies (e.g., accessToken) in the request
    })
      .then((res) => {
        if (!res.ok) {
          notification.error({
            message: "đăng nhập không được do tài khoản không đúng",
            description: "user hoặc password không đúng",
            duration: 3,
          });
          throw new Error("Login failed");
        }
        return res.json();
      })
      .then((res) => {
        notification.success({
          message: "đăng nhập thành công",
          description: "chào bạn",
          duration: 3,
        });
        localStorage.setItem("token", res.accessToken);
        navigate("/Thongtindangnhap");
      })
      .catch((err) => {
        console.log("Lỗi đăng nhập:", err.message);
      });
  };
  const showLogin = () => {
    return (
      <>
        <div className="flex items-center h-screen mx-auto">
          <Form
            form={form}
            onFinish={onFinish_login}
            initialValues={{
              title: Chitiet?.title,
              body: Chitiet?.body,
            }}
          >
            <Form.Item name="user">
              <Input
                addonBefore="User"
                placeholder="input text"
                size="large"
                style={{ width: 304 }}
              ></Input>
            </Form.Item>
            <Form.Item name="password">
              <Input
                addonBefore="Password"
                placeholder="input text"
                size="large"
                style={{ width: 304 }}
              ></Input>
            </Form.Item>
            <Form.Item name="nut_bam_login">
              <Button htmlType="submit">Login</Button>
            </Form.Item>
          </Form>
        </div>
      </>
    );
  };
  return <>{showLogin()}</>;
}
export default Login;
