import React from "react"

type CostumInputProps = {
  type: string
  name: string
  placeholder: string
  classname?: string
  value?: string
  onChng?: any
  onBlr?: string
}
const CostumInput = ({
  type,
  name,
  placeholder,
  classname,
  value,
  onChng,
  onBlr,
}: CostumInputProps) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
        value={value}
        onChng={onChng}
        onBlr={onBlr}
      />
    </div>
  )
}

export default CostumInput
