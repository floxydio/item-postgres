import React,{useState,useEffect} from 'react'
import TodoSection from './Pages/TodoSection'
import TodoData from './Pages/TodoData'
import { Col, Row } from 'antd'
import axios from 'axios'

export default function App() {
  const [data, setData] = useState([])

  async function getDataItem() {
   await axios.get("http://103.176.79.182:3000/product").then(function(response) {
    console.log(response.data["data"])
      setData(response.data["data"])
    })
  }

  useEffect(() => {
    getDataItem()
  },[])



  return (
    <>
      <Row align='middle' style={{
        marginTop: "100px"
      }}>
        <Col span={12} offset={6}>
          <TodoSection />
          <TodoData data={data} />
        </Col>
      </Row>
    </>
  )
}
