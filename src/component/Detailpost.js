import { Table, Input, Button, Form, Pagination, Flex, Modal } from "antd";
import { StrictMode, useState, useEffect } from "react";
function Detailpost(props) {
  const { setChitiet, isOpenmodaldieuchinh, Chitiet, handleSave } = props;
  console.log(Chitiet);

  const onFinish_Dieuchinhform = (e) => {
    if (!e.title || !e.body) {
      alert("Both title and body are required.");
      return;
    }
    fetch("https://dummyjson.com/posts/" + Chitiet.id, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: e["title"],
        body: e["body"],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        handleSave();
        setChitiet(data);
        // isOpenmodaldieuchinh(false);
      });
  };

  const showChitiet = () => {
    //console.log(props);
    if (props.isOpenmodal === true) {
      return (
        <>
          <p>{props.Chitiet.title}</p>
          <p>{props.Chitiet.body}</p>
        </>
      );
    } else {
      return (
        <>
          {/* <div className="block"> */}
          <Form
            onFinish={onFinish_Dieuchinhform}
            initialValues={{ title: Chitiet.title }}
          >
            {/* <Flex gap="5px"> */}
            <Form.Item name="title">
              <Input
                placeholder="input text"
                size="large"
                style={{ width: 304 }}
              ></Input>
            </Form.Item>
            <Form.Item name="body" initialValue={Chitiet.body}>
              <Input
                placeholder="input text"
                size="large"
                style={{ width: 304 }}
              ></Input>
            </Form.Item>
            <Form.Item name="nut_bam_dieu_chinh">
              <Button htmlType="submit">Điều chỉnh</Button>
            </Form.Item>
            {/* </Flex> */}
          </Form>
          {/* </div> */}
        </>
      );
    }
  };
  return <>{showChitiet()}</>;
}
export default Detailpost;
