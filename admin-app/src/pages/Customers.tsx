import React, { useEffect } from "react"
import { Table } from "antd"
import { AiFillDelete, AiOutlineEye } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getUsers } from "../features/cutomers/customerSlice"

interface DataTableType {
  key: number
  name: string
  email: string
  mobile: string
}
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
]

const Customers = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  const customerstate = useAppSelector((state) => state.customer.customers)
  // console.log(customerstate)

  const data1: DataTableType[] = []
  for (let i = 0; i < customerstate.length; i++) {
    if (customerstate[i].role !== "admin") {
      data1.push({
        key: i + 1,
        name: customerstate[i].firstname + " " + customerstate[i].lastname,
        email: customerstate[i].email,
        mobile: customerstate[i].mobile,
      })
    }
  }

  return (
    <div>
      {" "}
      <h3 className="mb-4 title">Customers</h3>
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

export default Customers
