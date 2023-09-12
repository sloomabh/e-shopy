import React from "react"
import { Table } from "antd"
import { AiFillDelete, AiOutlineEye } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"

interface Data1Type {
  key: number
  name: string
  product: number
  staus: string
}
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "staus",
  },
]
const data1: Data1Type[] = []

for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    staus: `London, Park Lane no. ${i}`,
  })
}

const Orders = () => {
  return (
    <div>
      {" "}
      <h3 className="mb-4 title">Orders</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      {/*  <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteEnq(enqId)
        }}
        title="Are you sure you want to delete this enquiry?"
      /> */}
    </div>
  )
}

export default Orders
