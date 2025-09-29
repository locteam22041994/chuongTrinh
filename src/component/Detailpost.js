<<<<<<< HEAD
import { Button, Form, Input } from "antd";
import { useEffect } from "react";
function Detailpost(props) {
  const { setChitiet, Chitiet, handleSave, handleAdd, mode } = props;
  const [form] = Form.useForm();

  //Đồng bộ dữ liệu vào form khi Chitiet thay đổi
  // useEffect(() => {
  //   if (Chitiet) {
  //     form.setFieldsValue({
  //       title: Chitiet.title,
  //       body: Chitiet.body,
  //     });
  //   }
  // }, [Chitiet]);

  const onFinish_them = (e) => {
    if (!e.title || !e.body) {
      alert("Both title and body are required.");
      return;
    }
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: e["useId"],
        title: e["title"],
        body: e["body"],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setChitiet?.(data);
        handleAdd(data);
      });
  };
=======
import { Button, Form, Input } from 'antd'
import { useEffect } from 'react'
function Detailpost(props) {
  const { setChitiet, Chitiet, handleSave, mode } = props
  const [form] = Form.useForm()
>>>>>>> a7d945bc2450da4fea87b1d8dac89139f07ed3e0

  // Đồng bộ dữ liệu vào form khi Chitiet thay đổi
  useEffect(() => {
    if (Chitiet) {
      form.setFieldsValue({
        title: Chitiet.title,
        body: Chitiet.body,
      })
    }
  }, [Chitiet])
  const onFinish_Dieuchinhform = (e) => {
    if (!e.title || !e.body) {
      alert('Both title and body are required.')
      return
    }
    fetch('https://dummyjson.com/posts/' + Chitiet.id, {
      method: 'PUT' /* or PATCH */,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: e['title'],
        body: e['body'],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
<<<<<<< HEAD
        setChitiet?.(data);
        handleSave(data);
      });
  };

  const showChitiet = () => {
    //console.log(props);
    if (mode === "view") {
=======
        setChitiet?.(data)
        handleSave(data)
      })
  }

  const showChitiet = () => {
    //console.log(props);
    if (mode === 'view') {
>>>>>>> a7d945bc2450da4fea87b1d8dac89139f07ed3e0
      return (
        <>
          <p>{props.Chitiet.title}</p>
          <p>{props.Chitiet.body}</p>
        </>
<<<<<<< HEAD
      );
    } else if (mode === "add") {
=======
      )
    } else {
>>>>>>> a7d945bc2450da4fea87b1d8dac89139f07ed3e0
      return (
        <>
          <Form
            form={form}
<<<<<<< HEAD
            onFinish={onFinish_them}
=======
            onFinish={onFinish_Dieuchinhform}
>>>>>>> a7d945bc2450da4fea87b1d8dac89139f07ed3e0
            initialValues={{
              title: Chitiet?.title,
              body: Chitiet?.body,
            }}
          >
<<<<<<< HEAD
            <Form.Item name="useId">
              <Input
                placeholder="input text"
                size="large"
                style={{ width: 304 }}
              ></Input>
            </Form.Item>
            <Form.Item name="title">
=======
            <Form.Item name='title'>
>>>>>>> a7d945bc2450da4fea87b1d8dac89139f07ed3e0
              <Input
                placeholder='input text'
                size='large'
                style={{ width: 304 }}
              ></Input>
            </Form.Item>
<<<<<<< HEAD
            <Form.Item name="body">
              <Input
                placeholder="input text"
                size="large"
                style={{ width: 304 }}
              ></Input>
            </Form.Item>
            <Form.Item name="nut_bam_them">
              <Button htmlType="submit">Thêm</Button>
            </Form.Item>
          </Form>
        </>
      );
    } else {
      return (
        <>
          <Form
            form={form}
            onFinish={onFinish_Dieuchinhform}
            initialValues={{
              title: Chitiet?.title,
              body: Chitiet?.body,
            }}
          >
            <Form.Item name="title">
              <Input
                placeholder="input text"
                size="large"
                style={{ width: 304 }}
              ></Input>
            </Form.Item>
            <Form.Item name="body">
=======
            <Form.Item name='body'>
>>>>>>> a7d945bc2450da4fea87b1d8dac89139f07ed3e0
              <Input
                placeholder='input text'
                size='large'
                style={{ width: 304 }}
              ></Input>
            </Form.Item>
            <Form.Item name='nut_bam_dieu_chinh'>
              <Button htmlType='submit'>Điều chỉnh</Button>
            </Form.Item>
          </Form>
        </>
      )
    }
  }
  return <>{showChitiet()}</>
}
export default Detailpost
