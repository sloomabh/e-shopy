import { React, useEffect, useState } from "react"
import CustomInput from "../components/CustomInput"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import Dropzone from "react-dropzone"
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

import { delImg, uploadImg } from "../features/upload/uploadSlice"
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
  const getBlogId = location.pathname.split("/")[3]
  const imgState = useAppSelector((state) => state.upload.images)
  const bCatState = useAppSelector((state) => state.bCategory.bCategories)
  const blogState = useAppSelector((state) => state.blogs)
  const [img, setImg] = useState([])

  const {
    isSuccess,
    isError,
    isLoading,
    createdBlog,
    blogName,
    blogDesc,
    blogCategory,
    blogImages,
    updatedBlog,
  } = blogState

  useEffect(() => {
    if (getBlogId !== undefined) {
      dispatch(getABlog(getBlogId))
    } else {
      dispatch(resetState())
    }
  }, [getBlogId])
  console.log(blogState)
  /********* GET BLOG CATEGORIES  ********************* */
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  /****************************************** */

  useEffect(() => {
    if (isSuccess && createdBlog) {
      toast.success("Blog Added Successfullly!")
    }
    if (isSuccess && updatedBlog) {
      toast.success("Blog Updated Successfullly!")
      navigate("/admin/blog-list")
    }
    if (isError) {
      toast.error("Something Went Wrong!")
    }
  }, [isSuccess, isError, isLoading])

  /***************** UPLOAD IMAGE ****************************** */
  useEffect(() => {
    const updatedImages = imgState.map((i) => ({
      public_id: i.public_id,
      url: i.url,
    }))
    setImg(updatedImages)
    formik.values.images = updatedImages
  }, [imgState])
  console.log(imgState)
  /************************************************ */
  /*
  useEffect(() => {
    formik.values.images = img
  }, [])
*/
  /********************************************************* */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogName || "",
      description: blogDesc || "",
      category: blogCategory || "",
      images: blogImages || [],
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBlogId !== undefined) {
        const data = { id: getBlogId, blogData: values }
        dispatch(updateABlog(data))
        console.log(data)
        dispatch(resetState())
      } else {
        dispatch(createBlogs(values))
        formik.resetForm()
        setTimeout(() => {
          dispatch(resetState())
        }, 300)
      }
    },
  })

  return (
    <div>
      <h3 className="mb-4 title">
        {getBlogId !== undefined ? "Edit" : "Add"} Blog
      </h3>

      <div className="">
        <form action="" onSubmit={formik.handleSubmit}>
          {/* INPUT TITLE*/}
          <div className="mt-4">
            <CustomInput
              type="text"
              label="Enter Blog Title"
              name="title"
              onChng={formik.handleChange("title")}
              onBlr={formik.handleBlur("title")}
              val={formik.values.title}
            />
          </div>
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>

          {/*select  category */}
          <select
            name="category"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
            className="form-control py-3  mt-3"
            id=""
          >
            <option value="">Select Blog Category</option>
            {bCatState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              )
            })}
          </select>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>

          <ReactQuill
            theme="snow"
            className="mt-3"
            name="description"
            onChange={formik.handleChange("description")}
            value={formik.values.description}
          />
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>

          {/* DROP ZONE*/}
          <div className="bg-white border-1 p-5 text-center mt-3">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>

          {/* SHOW IMAGES*/}
          <div className="showimages d-flex flex-wrap mt-3 gap-3">
            {imgState?.map((i, j) => {
              return (
                <div className=" position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              )
            })}
          </div>

          {/* submit button */}
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getBlogId !== undefined ? "Edit" : "Add"} Blog
          </button>
        </form>
      </div>
    </div>
  )
}

export default Addblog
