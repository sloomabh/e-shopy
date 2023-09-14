import { React, useEffect, useState } from "react"
import CustomInput from "../components/CustomInput"
import ReactQuill from "react-quill"
import { useNavigate } from "react-router-dom"
import "react-quill/dist/quill.snow.css"
import { Select } from "antd"

const Addproduct = () => {
  const [desc, setDesc] = useState("")
  const handelDesc = (e: any) => {
    console.log(e)
  }

  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter Product Title" name="title" />

          <div className="error"></div>

          <div className="">
            <ReactQuill
              theme="snow"
              value={desc}
              onChange={(evt: any) => {
                handelDesc(evt)
              }}
            />{" "}
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
