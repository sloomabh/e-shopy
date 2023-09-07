import React from "react"

type CostumInputProps = {
  type: string
  name: string
  placeholder: string
  classname?: string
}
const CostumInput = ({
  type,
  name,
  placeholder,
  classname,
}: CostumInputProps) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
      />
    </div>
  )
}

export default CostumInput
