import React from "react"
import CustomInput from "../components/CustomInput"

const Addcolor = () => {
  return (
    <div>
      <h3 className="mb-4  title"> Add color </h3>
      <div>
        <form action="">
          <CustomInput
            type="text"
            name="title"
            label="Enter Color"
            i_id="blogcat"
          />
          <div className="error"></div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add color
          </button>
        </form>
      </div>
    </div>
  )
}

export default Addcolor
