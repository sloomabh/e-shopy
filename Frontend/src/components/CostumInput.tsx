import React from "react"

type CostumInputProps = {
  type: string
  name: string
  placeholder: string
  classname?: string
  value?: string
  onChng?: React.ChangeEventHandler<HTMLInputElement>
  onBlr?: React.FocusEventHandler<HTMLInputElement>
  disabled?: boolean
}
const CostumInput = ({
  type,
  name,
  placeholder,
  classname,
  value,
  onChng,
  onBlr,
  disabled,
}: CostumInputProps) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
        value={value}
        onChange={onChng}
        onBlur={onBlr}
        disabled={disabled}
      />
    </div>
  )
}

export default CostumInput
