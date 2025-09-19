import { Button, Form, Input } from 'antd'
import { useEffect } from 'react'
function Detailpost(props) {
  const { setChitiet, Chitiet, handleSave, mode } = props
  const [form] = Form.useForm()

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
        setChitiet?.(data)
        handleSave(data)
      })
  }

  const showChitiet = () => {
    //console.log(props);
    if (mode === 'view') {
      return (
        <>
          <p>{props.Chitiet.title}</p>
          <p>{props.Chitiet.body}</p>
        </>
      )
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
            <Form.Item name='title'>
              <Input
                placeholder='input text'
                size='large'
                style={{ width: 304 }}
              ></Input>
            </Form.Item>
            <Form.Item name='body'>
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
