import React from 'react'

const Button = ({btntext,className}) => {
  return (
    <button className={`${className}`}>{btntext}</button>
  )
}

export default Button