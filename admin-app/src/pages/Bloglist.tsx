import React, { useEffect, useState } from "react"
import { Table } from "antd"
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { deleteABlog, getBlogs, resetState } from "../features/blogs/blogSlice"
import CustomModal from "../components/CustomModal"

interface Data1Type {
  key: number
  name: string
  category: string
  action: any
}
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
]

const Bloglist = () => {
  const [open, setOpen] = useState(false)
  const [blogId, setblogId] = useState("")
  const showModal = (e) => {
    setOpen(true)
    setblogId(e)
  }

  const hideModal = () => {
    setOpen(false)
  }
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(resetState())
    dispatch(getBlogs())
  }, [])
  const getBlogState = useAppSelector((state) => state.blogs.blogs)
  const data1: Data1Type[] = []
  for (let i = 0; i < getBlogState.length; i++) {
    data1.push({
      key: i + 1,
      name: getBlogState[i].title,
      category: getBlogState[i].category,

      action: (
        <>
          <Link
            to={`/admin/blog/${getBlogState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(getBlogState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    })
  }

  const deleteBlog = (e) => {
    dispatch(deleteABlog(e))

    setOpen(false)
    setTimeout(() => {
      dispatch(getBlogs())
    }, 100)
  }
  return (
    <div>
      {" "}
      <h3 className="mb-4 title">Bloglist</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBlog(blogId)
        }}
        title="Are you sure you want to delete this enquiry?"
      />
    </div>
  )
}

export default Bloglist
