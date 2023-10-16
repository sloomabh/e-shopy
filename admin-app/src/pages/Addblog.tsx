import { React, useEffect, useState } from "react"
import CustomInput from "../components/CustomInput"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import Dropzone from "react-dropzone"
import { delImg, uploadImg } from "../features/upload/uploadSlice"
import { toast } from "react-toastify"
import * as yup from "yup"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useFormik } from "formik"
import {
  createBlogs,
  getABlog,
  resetState,
  updateABlog,
} from "../features/blogs/blogSlice"
import { getCategories } from "../features/bcategory/bcategorySlice"

let schema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  category: yup.string().required("Category is Required"),
})

const Addblog = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  //  const getBlogId = location.pathname.split("/")[3]
  const imgState = useAppSelector((state) => state.upload.images)
  const bCatState = useAppSelector((state) => state.bCategory.bCategories)
  const blogState = useAppSelector((state) => state.blogs)

  const {
    isSuccess,
    isError,
    isLoading,
    createdBlog,
    /*  blogName,
    blogDesc,
    blogCategory,
    blogImages,
    updatedBlog,*/
  } = blogState

  /* useEffect(() => {
    if (getBlogId !== undefined) {
      dispatch(getABlog(getBlogId))
      img.push(blogImages)
    } else {
      dispatch(resetState())
    }
  }, [getBlogId])

  useEffect(() => {
    dispatch(resetState())
    dispatch(getCategories())
  }, [])*/

  useEffect(() => {
    if (isSuccess && createdBlog) {
      toast.success("Blog Added Successfullly!")
    }
    /*  if (isSuccess && updatedBlog) {
      toast.success("Blog Updated Successfullly!")
      navigate("/admin/blog-list")
    }*/
    if (isError) {
      toast.error("Something Went Wrong!")
    }
  }, [isSuccess, isError, isLoading])

  const img = []
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    })
  })
  console.log(img)
  useEffect(() => {
    formik.values.images = img
  }, [blogImages])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      description: "",
      category: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBlogs(values))
      formik.resetForm()
      setTimeout(() => {
        dispatch(resetState())
      }, 300)
    },
  })

  return (
    <div>
      <h3 className="mb-4 title"> Add Blog</h3>
      <div className="">
        <form action="">
          <div className="mt-4">
            <CustomInput type="text" label="Enter Blog Title" name="title" />
          </div>
          <div className="error"></div>
          <select name="category" className="form-control py-3  mt-3" id="">
            <option value="">Select Blog Category</option>
          </select>
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={(evt: any) => {
              handelDesc(evt)
            }}
          />
          <div className="error"></div>

          <div className="error"></div>
          <div className="bg-white border-1 p-5 text-center mt-3"></div>
          <div className="showimages d-flex flex-wrap mt-3 gap-3"></div>

          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  )
}

export default Addblog
