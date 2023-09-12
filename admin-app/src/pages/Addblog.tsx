import { useState } from "react"

import CustomInput from "../components/CustomInput"
import { useFormik } from "formik"
import * as ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const Addblog = () => {
  const [desc, setDesc] = useState("")
  const handelDesc = (e: any) => {
    console.log(e)
  }

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
            Blog
          </button>
        </form>
      </div>
    </div>
  )
}

export default Addblog
