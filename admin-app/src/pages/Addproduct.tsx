import { React, useEffect, useState } from "react"
import CustomInput from "../components/CustomInput"
import ReactQuill from "react-quill"
import { useNavigate } from "react-router-dom"
import "react-quill/dist/quill.snow.css"
import { Select } from "antd"
import { toast } from "react-toastify"
import * as yup from "yup"
import { useFormik } from "formik"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getBrands } from "../features/brand/brandSlice"
import { getCategories } from "../features/pcategory/pcategorySlice"
import { getColors } from "../features/color/colorSlice"

let schema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  /* price: yup.number().required("Price is Required"),
  brand: yup.string().required("Brand is Required"),
  category: yup.string().required("Category is Required"),
  tags: yup.string().required("Tag is Required"),
  color: yup
    .array()
    .min(1, "Pick at least one color")
    .required("Color is Required"),
  quantity: yup.number().required("Quantity is Required"),*/
})

const Addproduct = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      tags: "",
      color: "",
      quantity: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values))
    },
  })

  const [desc, setDesc] = useState("")
  const handelDesc = (e: any) => {
    console.log(e)
  }

  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter Product Title"
            name="title"
            onChng={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
          />

          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>

          <div className="">
            <ReactQuill
              theme="snow"
              name="description"
              onChange={formik.handleChange("description")}
              value={formik.values.description}
            />
          </div>

          <div className="error"></div>

          <CustomInput type="number" label="Enter Product Price" name="price" />

          <div className="error"></div>

          <select name="brand" className="form-control py-3 mb-3" id="">
            <option value="">Select Brand</option>
          </select>

          <div className="error"></div>

          <select name="brand" className="form-control py-3 mb-3" id="">
            <option value="">Select Category</option>
          </select>

          <div className="error"></div>

          <div className="error"></div>

          <select name="brand" className="form-control py-3 mb-3" id="">
            <option value="">Select Brand</option>
          </select>

          <div className="error"></div>

          <Select
            mode="multiple"
            allowClear
            className="w-100"
            placeholder="Select colors"
          />

          <div className="error"></div>

          <CustomInput
            type="number"
            label="Enter Product Quantity"
            name="quantity"
          />

          <div className="error"></div>

          <div className="bg-white border-1 p-5 text-center"></div>

          <div className="showimages d-flex flex-wrap gap-3"></div>

          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default Addproduct
