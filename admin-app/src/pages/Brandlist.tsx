import React, { useEffect, useState } from "react"
import { Table } from "antd"
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  deleteABrand,
  getBrands,
  resetState,
} from "../features/brand/brandSlice"

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
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
]

const Brandlist = () => {
  const [open, setOpen] = useState(false)
  const [brandId, setbrandId] = useState("")

  const showModal = (e: any) => {
    setOpen(true)
    setbrandId(e)
  }

  const hideModal = () => {
    setOpen(false)
  }

  const dispatch = useAppDispatch()
  useEffect(() => {
    //dispatch(resetState())
    dispatch(getBrands())
  }, [])

  const brandState = useAppSelector((state) => state.brand.brands)
  console.log(brandState)

  const data1: Data1Type[] = []
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i + 1,
      name: brandState[i].title,
      action: (
        <>
          <Link
            to={`/admin/brand/${brandState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(brandState[i]._id)}
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
      <h3 className="mb-4 title">Brand list</h3>
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

export default Brandlist
