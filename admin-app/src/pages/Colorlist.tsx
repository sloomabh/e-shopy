import React, { useEffect, useState } from "react"
import { Table } from "antd"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { deleteAColor, getColors } from "../features/color/colorSlice"
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
//import CustomModal from "../components/CustomModal"

interface Data1Type {
  key: number
  name: string
  action: any
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
    title: "Action",
    dataIndex: "action",
  },
]

const Colorlist = () => {
  const [open, setOpen] = useState(false)
  const [colorId, setcolorId] = useState("")
  const showModal = (e) => {
    setOpen(true)
    setcolorId(e)
  }

  const hideModal = () => {
    setOpen(false)
  }
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getColors())
  }, [])
  const colorState = useAppSelector((state) => state.color.colors)

  const data1: Data1Type[] = []
  for (let i = 0; i < colorState.length; i++) {
    data1.push({
      key: i + 1,
      name: colorState[i].title,
      action: (
        <>
          <Link
            to={`/admin/color/${colorState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(colorState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    })
  }
  return (
    <div>
      {" "}
      <h3 className="mb-4 title">Color list</h3>
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

export default Colorlist
