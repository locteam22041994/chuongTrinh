import { Button, Flex, Form, Input, Modal, Pagination, Table } from "antd";
import { useEffect, useState } from "react";
import Detailpost from "./Detailpost";
import Login from "./Login";
function Post() {
  const [Post, setPost] = useState([]);
  const [Filter, setFilter] = useState({ limit: 10, skip: 0 });
  const [Total, setTotal] = useState(0);
  const [Query, setQuery] = useState("");
  const [Chitiet, setChitiet] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [mode, setMode] = useState("view");
  useEffect(() => {
    fetch(
      "https://dummyjson.com/posts/search?limit=" +
        Filter.limit +
        "&skip=" +
        Filter.skip +
        Query
    )
      .then((res) => res.json())
      .then((data) => {
        setPost(data.posts);
        setTotal(data.total);
      });
  }, [Query, Filter]);
  const clickDieuchinh = (id) => {
    fetch("https://dummyjson.com/posts/" + id)
      .then((res) => res.json())
      .then((data) => {
        setChitiet(data);
        setMode("edit");
        setIsOpenModal(true);
      });
  };
  const clickChitiet = (id, mode) => {
    const current_post = Post.find((post) => post.id === id);
    setChitiet(current_post);
    setMode(mode);
    setIsOpenModal(true);
  };
  const clickThem = (mode) => {
    setMode(mode);
    setIsOpenModal(true);
  };
  const clickLogin = (mode) => {
    setMode(mode);
    setIsOpenModal(true);
  };

  const handleSave = (data) => {
    const list = Post.map((current_post) => {
      if (current_post.id === data.id) {
        return data;
      }
      return current_post;
    });
    setPost(list);
    setIsOpenModal(false);
  };
  const handleAdd = (data) => {
    let arr = [];
    arr = [data, ...Post];
    setPost(arr);
    setIsOpenModal(false);
  };
  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Body", dataIndex: "body", key: "body" },
    {
      title: "Thao tác",
      dataIndex: "thaotac",
      key: "thaotac",
      render: (_, current_post) => (
        <Button onClick={() => clickChitiet(current_post.id, "view")}>
          Chi tiết
        </Button>
      ),
    },
    {
      title: "Điều chỉnh",
      dataIndex: "thaotacdieuchinh",
      key: "thaotacdieuchinh",
      render: (_, current_post) => (
        <Button onClick={() => clickChitiet(current_post.id, "edit")}>
          Điều chỉnh
        </Button>
      ),
    },
  ];
  const onFinish_form = (e) => {
    setQuery("&q=" + Number(e["tim_kiem"]));
    setFilter({ limit: Filter.limit, skip: 0 });
  };
  const Changpage = (page, pageSize) => {
    setFilter({ limit: pageSize, skip: Filter.limit * (page - 1) });
  };
  const ItemPage = (current, pageSize) => {
    setFilter({ limit: pageSize, skip: Filter.limit * (current - 1) });
  };
  const Hientotal = () => <div>{Total}</div>;
  return (
    <div className="block">
      <Form onFinish={onFinish_form}>
        <Flex gap="5px">
          <Form.Item name="tim_kiem">
            <Input
              placeholder="input search text"
              size="large"
              style={{ width: 304 }}
            />
          </Form.Item>
          <Form.Item name="nut_bam">
            <Button htmlType="submit">Tìm kiếm</Button>
          </Form.Item>
        </Flex>
      </Form>
      <Flex
        gap="50em"
        style={{
          display: "inline-flex", // khối inline-block
          justifyContent: "space-between", // giãn đều 2 nút
        }}
      >
        <Button onClick={() => clickThem("add")}>Thêm</Button>
        <Button onClick={() => clickLogin("login")}>Login</Button>
      </Flex>
      <Table dataSource={Post} columns={columns} />
      <Pagination
        defaultPageSize={Filter.limit}
        pageSizeOptions={[1, 2, 3, 4]}
        onShowSizeChange={ItemPage}
        showSizeChanger
        total={Total}
        style={{ paddingLeft: "20px" }}
        showTotal={Hientotal}
        onChange={Changpage}
      />

      <Modal
        open={
          (mode === "add" && isOpenModal) ||
          (mode === "edit" && isOpenModal) ||
          isOpenModal
        }
        onCancel={() => setIsOpenModal(false)}
        footer={null}
        destroyOnHidden
      >
        <Detailpost
          mode={mode}
          Chitiet={Chitiet}
          setChitiet={setChitiet}
          handleSave={handleSave}
          handleAdd={handleAdd}
        />
      </Modal>
      <Modal
        open={mode === "login" && isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        footer={null}
        destroyOnHidden
      >
        <Login />
      </Modal>
    </div>
  );
}
export default Post;
