import React, {useState} from 'react'
import { Mentions, Tooltip, Button, Row, Col } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

export default function TodoSection() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    
    await axios.post("http://103.176.79.182:3000/product", {
      nama : name,
      harga: price
    }).then(function(res) {
      console.log(res)
      window.location.reload()
    })

  }


  return (
    <>
      <Row justify='center'>
        <Col span={12} style={{

          marginRight: '20px'
        }}>
          <Mentions placeholder="Input Your Item..." onChange={(e) => setName(e)} style={{
            marginBottom: '20px',
          }} />
           <Mentions placeholder="Input Your Price..." onChange={(e) => setPrice(e)} style={{
            marginBottom: '30px',
          }} />
           <Tooltip style={{
          }}>
            <Button type='primary' onClick={handleSubmit} icon={<PlusOutlined />}>Add Item</Button>
          </Tooltip>
        </Col>
      </Row>
    </>
  )
}
