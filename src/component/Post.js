<<<<<<< HEAD
import { Button, Flex, Form, Input, Modal, Pagination, Table } from "antd";
import { useEffect, useState } from "react";
import Detailpost from "./Detailpost";

function Post() {
  const [Post, setPost] = useState([]);
  const [Filter, setFilter] = useState({ limit: 10, skip: 0 });
  const [Total, setTotal] = useState(0);
  const [Query, setQuery] = useState("");
  const [Chitiet, setChitiet] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [mode, setMode] = useState("view"); // "view" | "edit"
=======
import { Button, Flex, Form, Input, Modal, Pagination, Table } from 'antd'
import { useEffect, useState } from 'react'
import Detailpost from './Detailpost'

function Post() {
  const [Post, setPost] = useState([])
  const [Filter, setFilter] = useState({ limit: 10, skip: 0 })
  const [Total, setTotal] = useState(0)
  const [Query, setQuery] = useState('')
  const [Chitiet, setChitiet] = useState({})
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [mode, setMode] = useState('view') // "view" | "edit"
>>>>>>> a7d945bc2450da4fea87b1d8dac89139f07ed3e0

  useEffect(() => {
    fetch(
      'https://dummyjson.com/posts/search?limit=' +
        Filter.limit +
        '&skip=' +
        Filter.skip +
        Query
    )
      .then((res) => res.json())
      .then((data) => {
<<<<<<< HEAD
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

  const clickThem = (id) => {
    fetch("https://dummyjson.com/posts/" + id)
      .then((res) => res.json())
      .then((data) => {
        setChitiet(data);
        setMode("add");
        setIsOpenModal(true);
      });
  };
//chuẩn bị
  const handleSave = (data) => {
    //let flag = false;
    //console.log(Chitiet);
    //console.log(data);
    const list = Post.map((current_post) => {
      if (current_post.id === data.id) {
        //flag = true;
        return data;
      }
      return current_post;
    });
    //if (flag === true) {
    //console.log("save", list);
    setPost(list);
    // } else {
    //   let arr = [];
    //   arr = [data, ...list];
    //   setPost(arr);
    // }

    setIsOpenModal(false);
  };

  const handleAdd = (data) => {
    console.log(data);
    let arr = [];
    arr = [data, ...Post];
    //console.log("add", arr);
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
=======
        setPost(data.posts)
        setTotal(data.total)
      })
  }, [Query, Filter])

  const clickDieuchinh = (id) => {
    fetch('https://dummyjson.com/posts/' + id)
      .then((res) => res.json())
      .then((data) => {
        setChitiet(data)
        setMode('edit')
        setIsOpenModal(true)
      })
  }

  const clickChitiet = (id, mode) => {
    const current_post = Post.find((post) => post.id === id)
    setChitiet(current_post)
    setMode(mode)
    setIsOpenModal(true)
  }

  const handleSave = (data) => {
    const list = Post.map((current_post) => {
      if (current_post.id === data.id) {
        return data
      }
      return current_post
    })
    setPost(list)
    setIsOpenModal(false)
  }

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Body', dataIndex: 'body', key: 'body' },
    {
      title: 'Thao tác',
      dataIndex: 'thaotac',
      key: 'thaotac',
      render: (_, current_post) => (
        <Button onClick={() => clickChitiet(current_post.id, 'view')}>
>>>>>>> a7d945bc2450da4fea87b1d8dac89139f07ed3e0
          Chi tiết
        </Button>
      ),
    },
    {
<<<<<<< HEAD
      title: "Điều chỉnh",
      dataIndex: "thaotacdieuchinh",
      key: "thaotacdieuchinh",
      render: (_, current_post) => (
        <Button onClick={() => clickChitiet(current_post.id, "edit")}>
=======
      title: 'Điều chỉnh',
      dataIndex: 'thaotacdieuchinh',
      key: 'thaotacdieuchinh',
      render: (_, current_post) => (
        <Button onClick={() => clickChitiet(current_post.id, 'edit')}>
>>>>>>> a7d945bc2450da4fea87b1d8dac89139f07ed3e0
          Điều chỉnh
        </Button>
      ),
    },
<<<<<<< HEAD
  ];
=======
  ]
>>>>>>> a7d945bc2450da4fea87b1d8dac89139f07ed3e0

  const onFinish_form = (e) => {
    setQuery('&q=' + Number(e['tim_kiem']))
    setFilter({ limit: Filter.limit, skip: 0 })
  }

  const Changpage = (page, pageSize) => {
    setFilter({ limit: pageSize, skip: Filter.limit * (page - 1) })
  }

  const ItemPage = (current, pageSize) => {
<<<<<<< HEAD
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
      <Flex gap="5px">
        <Button onClick={() => clickThem()}>Thêm</Button>
      </Flex>
=======
    setFilter({ limit: pageSize, skip: Filter.limit * (current - 1) })
  }

  const Hientotal = () => <div>{Total}</div>
  console.log(Post)

  return (
    <div className='block'>
      <Form onFinish={onFinish_form}>
        <Flex gap='5px'>
          <Form.Item name='tim_kiem'>
            <Input
              placeholder='input search text'
              size='large'
              style={{ width: 304 }}
            />
          </Form.Item>
          <Form.Item name='nut_bam'>
            <Button htmlType='submit'>Tìm kiếm</Button>
          </Form.Item>
        </Flex>
      </Form>

>>>>>>> a7d945bc2450da4fea87b1d8dac89139f07ed3e0
      <Table dataSource={Post} columns={columns} />

      <Pagination
        defaultPageSize={Filter.limit}
        pageSizeOptions={[1, 2, 3, 4]}
        onShowSizeChange={ItemPage}
        showSizeChanger
        total={Total}
<<<<<<< HEAD
        style={{ paddingLeft: "20px" }}
=======
        style={{ paddingLeft: '20px' }}
>>>>>>> a7d945bc2450da4fea87b1d8dac89139f07ed3e0
        showTotal={Hientotal}
        onChange={Changpage}
      />

      <Modal
        open={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        footer={null}
        destroyOnHidden
      >
        <Detailpost
          mode={mode}
          Chitiet={Chitiet}
          setChitiet={setChitiet}
          handleSave={handleSave}
<<<<<<< HEAD
          handleAdd={handleAdd}
        />
      </Modal>
    </div>
  );
}

export default Post;
=======
        />
      </Modal>
    </div>
  )
}

export default Post
>>>>>>> a7d945bc2450da4fea87b1d8dac89139f07ed3e0
