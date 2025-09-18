import { Table, Input, Button, Form, Pagination, Flex, Modal } from "antd";
import { StrictMode, useState, useEffect } from "react";
import Detailpost from "./Detailpost";

function Post() {
  const [Post, setPost] = useState([]);
  const [Filter, setFilter] = useState({ limit: 10, skip: 0 });
  const [Total, setTotal] = useState(0);
  const [Query, setQuery] = useState("");
  const [Chitiet, setChitiet] = useState({});
  // const [Dieuchinhkey, setDieuchinhkey] = useState("");
  // const [Dieuchinhtitle, setDieuchinhtitle] = useState("");
  // const [Dieuchinhbody, setDieuchinhbody] = useState("");
  const [isOpenmodal, setIsopenmodal] = useState(false);
  const [isOpenmodaldieuchinh, setIsOpenmodaldieuchinh] = useState(false);
  //const [search_value, set_search_value] = useState([]);
  useEffect(() => {
    // console.log(Dieuchinhtitle);
    // console.log(Dieuchinhbody);
    fetch(
      "https://dummyjson.com/posts/search?limit=" +
        Filter.limit +
        "&skip=" +
        Filter.skip +
        Query
    )
      .then((res) => res.json())
      .then((data) => {
        // data.posts.map((current_post) => {
        // if (current_post.id === Dieuchinhkey) {
        //   current_post.body = Dieuchinhbody;
        //   current_post.title = Dieuchinhtitle;
        // }
        setPost(data.posts);
        setTotal(data.total);
        // });
      });
  }, [
    Query,
    Filter,
    // ,Dieuchinhtitle, Dieuchinhbody
  ]);

  const clickDieuchinh = (e) => {
    console.log(e);

    fetch("https://dummyjson.com/posts/" + e)
      .then((res) => res.json())
      .then((data) => {
        setChitiet(data);
      });
    setIsOpenmodaldieuchinh(true);
  };

  const handleOkdieuchinh = () => {
    setIsOpenmodaldieuchinh(false);
  };
  const handleCanceldieuchinh = () => {
    setIsOpenmodaldieuchinh(false);
  };

  const clickChitiet = (e) => {
    fetch("https://dummyjson.com/posts/" + e)
      .then((res) => res.json())
      .then((data) => {
        // if (Dieuchinhbody !== "" || Dieuchinhtitle !== "") {
        // if (Dieuchinhkey === e) {
        //   data.body = Dieuchinhbody;
        //   data.title = Dieuchinhtitle;
        //   setChitiet(Chitiet);
        // }
        // console.log(data);
        // console.log(Chitiet);
        setChitiet(data);
        // } else {
        //   setChitiet(data);
        // }
      });
    setIsopenmodal(true);
  };

  const handleOk = () => {
    setIsopenmodal(false);
  };
  const handleCancel = () => {
    setIsopenmodal(false);
  };

  const dataSource = Post.map((current_post) => {
    return {
      key: current_post.id,
      title: current_post.title,
      body: current_post.body,
      thaotac: (
        <>
          <Button
            htmlType="button"
            onClick={() => clickChitiet(current_post.id)}
          >
            chi tiết
          </Button>
        </>
      ),
      thaotacdieuchinh: (
        <>
          <Button
            htmlType="button"
            onClick={() => clickDieuchinh(current_post.id)}
          >
            điều chỉnh
          </Button>
        </>
      ),
    };
  });

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Thao tác",
      dataIndex: "thaotac",
      key: "thaotac",
    },
    {
      title: "Điều chỉnh",
      dataIndex: "thaotacdieuchinh",
      key: "thaotacdieuchinh",
    },
  ];

  // const onChange_input = (value) => {
  //   set_search_value(value);
  // };

  const onFinish_form = (e) => {
    setQuery("&q=" + Number(e["tim_kiem"]));
    setFilter({ limit: Filter.limit, skip: 0 });
  };

  const Changpage = (page, pageSize) => {
    setFilter({ limit: pageSize, skip: Filter.limit * (page - 1) });
  };

  const ItemPage = (current, pageSize) => {
    // setTotal(Math.ceil(Total / pageSize));
    setFilter({ limit: pageSize, skip: Filter.limit * (current - 1) });
  };

  const Hientotal = (total) => {
    return <div>{Total}</div>;
  };
  const handleSave = () => {
    const list = Post.map((current_post) => {
      if (current_post.id === Chitiet.id) {
        return Chitiet;
      }
      return current_post;
    });
    console.log(list);
    setPost(list);
  };
  return (
    <>
      <div className="block">
        <Form onFinish={onFinish_form}>
          <Flex gap="5px">
            <Form.Item name="tim_kiem">
              <Input
                placeholder="input search text"
                enterbutton="tim kiem"
                size="large"
                style={{ width: 304 }}
              ></Input>
            </Form.Item>
            <Form.Item name="nut_bam">
              <Button htmlType="submit">Tim kiem</Button>
            </Form.Item>
          </Flex>
        </Form>
        <Table dataSource={dataSource} columns={columns} />
        <Pagination
          defaultPageSize={Filter.limit}
          pageSizeOptions={[1, 2, 3, 4]}
          onShowSizeChange={ItemPage}
          showSizeChanger={true}
          total={Total}
          style={{ paddingLeft: "20px" }}
          showTotal={Hientotal}
          onChange={Changpage}
        />
        <Modal open={isOpenmodal} onOk={handleOk} onCancel={handleCancel}>
          <Detailpost isOpenmodal={isOpenmodal} Chitiet={Chitiet} />
        </Modal>
        <Modal
          open={isOpenmodaldieuchinh}
          onOk={handleOkdieuchinh}
          onCancel={handleCanceldieuchinh}
          destroyOnHidden={true}
        >
          {Chitiet && (
            <Detailpost
              // setDieuchinhtitle={setDieuchinhtitle}
              // setDieuchinhbody={setDieuchinhbody}
              // setDieuchinhkey={setDieuchinhkey}
              Chitiet={Chitiet}
              setChitiet={setChitiet}
              isOpenmodal={isOpenmodal}
              isOpenmodaldieuchinh={isOpenmodaldieuchinh}
              handleSave={handleSave}
            />
          )}
        </Modal>
      </div>
    </>
  );
}
export default Post;
