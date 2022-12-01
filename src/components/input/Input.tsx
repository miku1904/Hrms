import React from 'react'
import { InputProps } from './InputType'

function Input(props: InputProps) {
  const { value, handleChange, placeholder, className, name , type} = props
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={className}
        name={name}
      />
    </>
  )
}

export default Input
