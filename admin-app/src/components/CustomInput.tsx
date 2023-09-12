import React, { ChangeEventHandler, FocusEventHandler } from "react"

type CustomInputProp = {
  type?: string
  label?: string
  i_id?: string
  i_class?: string
  name?: string
  onChng?: ChangeEventHandler<HTMLInputElement>
  onBlr?: FocusEventHandler<HTMLInputElement>
  val?: string
}
const CustomInput = ({
  type,
  label,
  i_id,
  i_class,
  name,
  val,
  onChng,
  onBlr,
}: CustomInputProp) => {
  return (
    <div className="form-floating mt-3">
      <input
        type={type}
        className={`form-control ${i_class}`}
        id={i_id}
        placeholder={label}
        name={name}
        value={val}
        onChange={onChng}
        onBlur={onBlr}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}

export default CustomInput
