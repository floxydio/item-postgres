import React from 'react'
import {Space,Table,Tag,Popconfirm} from 'antd'
import axios from 'axios'

export default function TodoData({data}) {

  async function deleteById(id) {
    await axios.delete(`http://103.176.79.182:3000/product-delete/${id}`, {headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
   }}).then(function(response) {

      window.location.reload()

    })
  }

  const columns = [
    {
      id: 'id',
      dataIndex: 'id',
      title: "ID"
    },
    {
      id: 'nama',
      dataIndex: 'nama',
      title: "Nama"
    },
    {
      id: 'harga',
      dataIndex: 'harga',
      title: "Harga"
    },
    {
      title: 'Action',
      key: 'action',
      render: (e, record) => (
        <Space size="middle">
         <Popconfirm title="Sure to delete?" onConfirm={() => deleteById(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        </Space>
      )
    }
  ]

  const dataBarang = data.map((e) => ({
    key: e.id,
    id: e.id,
    nama: e.nama,
    harga: e.harga
  }))

  return (
    <>
      <Table style={{
        marginTop: '100px'
      }} columns={columns} dataSource={dataBarang}  />
    </>
  )
}
