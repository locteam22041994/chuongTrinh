import { Button, Form, Input } from "antd";
import { useEffect } from "react";
function Login(props) {
  const { setChitiet, Chitiet, handleSave, handleAdd, mode } = props;
  const [form] = Form.useForm();
  const onFinish_login = (e) => {};
  const showChitiet = () => {
    return (
      <>
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
      </>
    );
  };
  return <>{showChitiet()}</>;
}
export default Login;
