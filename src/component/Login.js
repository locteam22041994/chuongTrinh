import { Button, Form, Input, notification } from "antd";
import { useEffect } from "react";
function Login(props) {
  const { setChitiet, Chitiet, handleSave, handleAdd, mode } = props;
  const [form] = Form.useForm();
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
          });
        }
        return res.json();
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res));
        notification.success({
          message: "đăng nhập thành công",
          description: "chào bạn",
        });
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
